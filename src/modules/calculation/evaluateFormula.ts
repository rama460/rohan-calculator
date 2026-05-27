import { DEFAULT_FORMULAS } from "../../static/default-formulas";
import { CharacterValueKey } from "../character/constants";
import type { FormulaReferenceTrace, FormulaTrace } from "../character/types";
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
    rawResult?: number;
    error?: string;
    trace: FormulaTrace;
};

type FormulaReference = {
    name: string;
    source: "characterValue";
    formulaId: CharacterValueKey;
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
    references: FormulaReference[];
} => {
    const preprocessedFormula = removeFormulaComments(formula);
    const referencesByName = new Map<string, FormulaReference>();
    let processedFormula = preprocessedFormula;
    let match: RegExpExecArray | null;

    while ((match = intermediateVariablePattern.exec(preprocessedFormula)) !== null) {
        const variableName = match[1];
        const replacementVar = `__${variableName}` as CharacterValueKey;
        referencesByName.set(variableName, {
            name: variableName,
            source: "characterValue",
            formulaId: replacementVar,
        });
        processedFormula = processedFormula.replace(
            new RegExp(`\\{${variableName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}`, "g"),
            replacementVar
        );
    }

    return {
        processedFormula,
        references: Array.from(referencesByName.values()),
    };
};

const createTrace = (
    formulaId: CharacterValueKey,
    formulaSource: string,
    processedFormula: string,
    contextValues: Record<string, number>,
    references: FormulaReferenceTrace[] = [],
    result?: {
        rawResult?: number;
        result?: number;
        error?: string;
    }
): FormulaTrace => ({
    formulaId,
    formulaSource,
    processedFormula,
    references,
    contextValues,
    rawResult: result?.rawResult,
    result: result?.result,
    error: result?.error,
});

export const evaluateFormula = (
    formulaId: CharacterValueKey,
    context: FormulaContext,
    customFormulas: Partial<Record<CharacterValueKey, Formula>>,
    resolveReference: (reference: FormulaReference) => number
): FormulaEvaluationResult => {
    const formula = getFormulaSource(formulaId, customFormulas);
    const { processedFormula, references } = preprocessFormula(formula);
    const contextValues = { ...context };
    const resolvedReferences = new Map<string, FormulaReferenceTrace>();

    try {
        const executionContext = {
            ...context,
            ...allowedMathFunctions,
        };

        references.forEach((reference) => {
            const executionVariableName = reference.formulaId;
            Object.defineProperty(executionContext, executionVariableName, {
                get: () => {
                    const value = resolveReference(reference);
                    resolvedReferences.set(reference.name, {
                        name: reference.name,
                        source: reference.source,
                        formulaId: reference.formulaId,
                        value,
                    });
                    return value;
                },
                enumerable: true,
            });
        });

        const parameterNames = Object.keys(executionContext);
        const parameterValues = Object.values(executionContext);
        const func = new Function(...parameterNames, `return (${processedFormula});`);
        const rawResult = func(...parameterValues);
        const traceReferences = Array.from(resolvedReferences.values());

        if (typeof rawResult !== "number") {
            const error = "計算結果が数値ではありません";
            return {
                success: false,
                error,
                trace: createTrace(formulaId, formula, processedFormula, contextValues, traceReferences, { error }),
            };
        }

        if (!Number.isFinite(rawResult)) {
            const error = "計算結果が無限大またはNaNです";
            return {
                success: false,
                rawResult,
                error,
                trace: createTrace(formulaId, formula, processedFormula, contextValues, traceReferences, { rawResult, error }),
            };
        }

        const result = Math.floor(rawResult);
        return {
            success: true,
            rawResult,
            result,
            trace: createTrace(formulaId, formula, processedFormula, contextValues, traceReferences, { rawResult, result }),
        };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "計算エラーが発生しました";
        return {
            success: false,
            error: errorMessage,
            trace: createTrace(formulaId, formula, processedFormula, contextValues, Array.from(resolvedReferences.values()), { error: errorMessage }),
        };
    }
};
