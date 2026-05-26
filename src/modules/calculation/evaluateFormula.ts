import { DEFAULT_FORMULAS } from "../../static/default-formulas";
import { CharacterValueKey } from "../character/constants";
import type { Formula, FormulaContext } from "../state/custom-formulas";

const allowedMathFunctions = {
    floor: Math.floor,
    ceil: Math.ceil,
    round: Math.round,
    max: Math.max,
    min: Math.min,
    abs: Math.abs,
    pow: Math.pow,
    sqrt: Math.sqrt,
} as const;

export type FormulaEvaluationResult = {
    success: boolean;
    result?: number;
    error?: string;
};

const intermediateVariablePattern = /\{([^}]+)\}/g;

const removeFormulaComments = (formula: string): string => {
    return formula
        .split("\n")
        .map((line) => {
            const commentIndex = line.indexOf("//");
            return commentIndex !== -1 ? line.substring(0, commentIndex) : line;
        })
        .join("\n")
        .trim();
};

const getFormulaSource = (
    formulaId: CharacterValueKey,
    customFormulas: Partial<Record<CharacterValueKey, Formula>>
): string => {
    const customFormula = customFormulas[formulaId];
    if (customFormula?.isActive) {
        return customFormula.formula;
    }

    return DEFAULT_FORMULAS[formulaId];
};

const preprocessFormula = (formula: string): {
    processedFormula: string;
    intermediateVariables: CharacterValueKey[];
} => {
    const preprocessedFormula = removeFormulaComments(formula);
    const intermediateVariables = new Set<CharacterValueKey>();
    let processedFormula = preprocessedFormula;
    let match: RegExpExecArray | null;

    while ((match = intermediateVariablePattern.exec(preprocessedFormula)) !== null) {
        const variableName = match[1];
        const replacementVar = `__${variableName}` as CharacterValueKey;
        intermediateVariables.add(replacementVar);
        processedFormula = processedFormula.replace(
            new RegExp(`\\{${variableName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}`, "g"),
            replacementVar
        );
    }

    return {
        processedFormula,
        intermediateVariables: Array.from(intermediateVariables),
    };
};

export const evaluateFormula = (
    formulaId: CharacterValueKey,
    context: FormulaContext,
    customFormulas: Partial<Record<CharacterValueKey, Formula>>,
    resolveIntermediate: (formulaId: CharacterValueKey) => number
): FormulaEvaluationResult => {
    try {
        const formula = getFormulaSource(formulaId, customFormulas);
        const { processedFormula, intermediateVariables } = preprocessFormula(formula);
        const executionContext = {
            ...context,
            ...allowedMathFunctions,
        };

        intermediateVariables.forEach((intermediateVariable) => {
            Object.defineProperty(executionContext, intermediateVariable, {
                get: () => resolveIntermediate(intermediateVariable),
                enumerable: true,
            });
        });

        const parameterNames = Object.keys(executionContext);
        const parameterValues = Object.values(executionContext);
        const func = new Function(...parameterNames, `return (${processedFormula});`);
        const result = func(...parameterValues);

        if (typeof result !== "number") {
            return { success: false, error: "計算結果が数値ではありません" };
        }

        if (!Number.isFinite(result)) {
            return { success: false, error: "計算結果が無限大またはNaNです" };
        }

        return { success: true, result: Math.floor(result) };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "計算エラーが発生しました",
        };
    }
};
