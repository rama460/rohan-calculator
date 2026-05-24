import { DEFAULT_FORMULAS } from "../../static/default-formulas";
import { allowedMathFunctions } from "../formula/formula-validator";
import { removeComments } from "../formula/formula-calculator";
import { CharactorStateType } from "../state/charactor";
import { Formula, FormulaContext } from "../state/custom-formulas";

export type FormulaEvaluationResult = {
    success: boolean;
    result?: number;
    error?: string;
};

const intermediateVariablePattern = /\{([^}]+)\}/g;

const getFormulaSource = (
    formulaId: CharactorStateType,
    customFormulas: Partial<Record<CharactorStateType, Formula>>
): string => {
    const customFormula = customFormulas[formulaId];
    if (customFormula?.isActive) {
        return customFormula.formula;
    }

    return DEFAULT_FORMULAS[formulaId];
};

const preprocessFormula = (formula: string): {
    processedFormula: string;
    intermediateVariables: CharactorStateType[];
} => {
    const preprocessedFormula = removeComments(formula);
    const intermediateVariables = new Set<CharactorStateType>();
    let processedFormula = preprocessedFormula;
    let match: RegExpExecArray | null;

    while ((match = intermediateVariablePattern.exec(preprocessedFormula)) !== null) {
        const variableName = match[1];
        const replacementVar = `__${variableName}` as CharactorStateType;
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
    formulaId: CharactorStateType,
    context: FormulaContext,
    customFormulas: Partial<Record<CharactorStateType, Formula>>,
    resolveIntermediate: (formulaId: CharactorStateType) => number
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

