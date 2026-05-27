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

export type FormulaReference =
    | {
        name: string;
        source: "characterValue";
        executionName: CharacterValueKey;
        formulaId: CharacterValueKey;
    }
    | {
        name: string;
        source: "localIntermediate";
        executionName: string;
    };

type LocalIntermediateDefinition = {
    name: string;
    formula: string;
    processedFormula: string;
    references: FormulaReference[];
};

const intermediateVariablePattern = /\{([^}]+)\}/g;
const localIntermediatePattern = /^\s*@([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)\s*$/;

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

const getLocalExecutionName = (name: string) => `__local_${name}`;

const preprocessReferences = (
    expression: string,
    localIntermediateNames: Set<string>
): {
    processedExpression: string;
    references: FormulaReference[];
} => {
    const referencesByName = new Map<string, FormulaReference>();
    let processedExpression = expression;
    let match: RegExpExecArray | null;

    intermediateVariablePattern.lastIndex = 0;
    while ((match = intermediateVariablePattern.exec(expression)) !== null) {
        const referenceName = match[1];
        const isLocalIntermediate = localIntermediateNames.has(referenceName);
        const executionName = isLocalIntermediate
            ? getLocalExecutionName(referenceName)
            : `__${referenceName}`;

        referencesByName.set(`${isLocalIntermediate ? "localIntermediate" : "characterValue"}:${referenceName}`, isLocalIntermediate
            ? {
                name: referenceName,
                source: "localIntermediate",
                executionName,
            }
            : {
                name: referenceName,
                source: "characterValue",
                executionName: executionName as CharacterValueKey,
                formulaId: executionName as CharacterValueKey,
            }
        );
        processedExpression = processedExpression.replace(
            new RegExp(`\\{${referenceName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}`, "g"),
            executionName
        );
    }

    return {
        processedExpression,
        references: Array.from(referencesByName.values()),
    };
};

const preprocessFormula = (formula: string): {
    processedFormula: string;
    references: FormulaReference[];
    localIntermediates: LocalIntermediateDefinition[];
} => {
    const preprocessedFormula = removeFormulaComments(formula);
    const localIntermediateFormulas = new Map<string, string>();
    const formulaLines: string[] = [];

    preprocessedFormula.split("\n").forEach((line) => {
        const localMatch = localIntermediatePattern.exec(line);
        if (localMatch) {
            localIntermediateFormulas.set(localMatch[1], localMatch[2].trim());
            return;
        }
        formulaLines.push(line);
    });

    const localIntermediateNames = new Set(localIntermediateFormulas.keys());
    const localIntermediates = Array.from(localIntermediateFormulas.entries()).map(([name, localFormula]) => {
        const { processedExpression, references } = preprocessReferences(
            localFormula,
            localIntermediateNames,
        );

        return {
            name,
            formula: localFormula,
            processedFormula: processedExpression,
            references,
        };
    });

    const { processedExpression, references } = preprocessReferences(
        formulaLines.join("\n").trim(),
        localIntermediateNames
    );

    return {
        processedFormula: processedExpression,
        references,
        localIntermediates,
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
    const { processedFormula, references, localIntermediates } = preprocessFormula(formula);
    const contextValues = { ...context };
    const resolvedReferences = new Map<string, FormulaReferenceTrace>();
    const localIntermediateByName = new Map(localIntermediates.map((localIntermediate) => [localIntermediate.name, localIntermediate]));
    const localIntermediateValues = new Map<string, number>();
    const resolvingLocalIntermediates = new Set<string>();

    try {
        const baseExecutionContext = {
            ...context,
            ...allowedMathFunctions,
        };

        const evaluateExpression = (expression: string, expressionReferences: FormulaReference[]) => {
            const executionContext: Record<string, unknown> = {
                ...baseExecutionContext,
            };

            expressionReferences.forEach((reference) => {
                executionContext[reference.executionName] = resolveFormulaReference(reference);
            });

            const parameterNames = Object.keys(executionContext);
            const parameterValues = Object.values(executionContext);
            const func = new Function(...parameterNames, `return (${expression});`);
            return func(...parameterValues);
        };

        const resolveLocalIntermediate = (name: string): number => {
            if (localIntermediateValues.has(name)) {
                return localIntermediateValues.get(name) ?? 0;
            }

            const localIntermediate = localIntermediateByName.get(name);
            if (!localIntermediate) {
                return 0;
            }

            if (resolvingLocalIntermediates.has(name)) {
                throw new Error(`Circular local intermediate reference detected: ${name}`);
            }

            resolvingLocalIntermediates.add(name);
            const value = evaluateExpression(localIntermediate.processedFormula, localIntermediate.references);
            resolvingLocalIntermediates.delete(name);

            if (typeof value !== "number" || !Number.isFinite(value)) {
                throw new Error(`Local intermediate ${name} did not evaluate to a finite number`);
            }

            localIntermediateValues.set(name, value);
            resolvedReferences.set(`localIntermediate:${name}`, {
                name,
                source: "localIntermediate",
                value,
                formula: localIntermediate.formula,
                processedFormula: localIntermediate.processedFormula,
            });

            return value;
        };

        const resolveFormulaReference = (reference: FormulaReference): number => {
            if (reference.source === "localIntermediate") {
                return resolveLocalIntermediate(reference.name);
            }

            const value = resolveReference(reference);
            resolvedReferences.set(`characterValue:${reference.name}`, {
                name: reference.name,
                source: reference.source,
                formulaId: reference.formulaId,
                value,
            });
            return value;
        };

        const rawResult = evaluateExpression(processedFormula, references);
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
