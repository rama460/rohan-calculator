import { BuiltinOptionKeys, type BuiltinOptionKeyType } from "../../static/options";
import { characterValueKeys, type CharacterValueKey } from "../character/constants";
import type { CalculatedCharacter } from "../character/types";
import { DEFAULT_DAMAGE_FORMULAS } from "./damageFormulas";
import type {
    CombatFormulaContext,
    CombatFormulaEvaluationResult,
    CombatDamageFormulaId,
    CombatFormulaReferenceTrace,
} from "./types";

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

type CombatFormulaReference =
    | {
        name: string;
        source: "attacker" | "defender";
        executionName: string;
        valueKey?: CharacterValueKey;
        optionKey?: BuiltinOptionKeyType;
    }
    | {
        name: string;
        source: "skill" | "combatContext";
        executionName: string;
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
    references: CombatFormulaReference[];
};

const formulaReferencePattern = /\{([^}]+)\}/g;
const localIntermediatePattern = /^\s*@([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)\s*$/;
const characterValueKeySet = new Set<string>(characterValueKeys);
const optionKeySet = new Set<string>(BuiltinOptionKeys);

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

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getLocalExecutionName = (name: string) => `__local_${name}`;

const getScopedExecutionName = (name: string) => `__${name.replace(/[^A-Za-z0-9_]/g, "_")}`;

const createCharacterReference = (
    referenceName: string,
    source: "attacker" | "defender",
): CombatFormulaReference => {
    const propertyName = referenceName.slice(source.length + 1);
    const valueKey = `__${propertyName}`;

    if (characterValueKeySet.has(valueKey)) {
        return {
            name: referenceName,
            source,
            executionName: getScopedExecutionName(referenceName),
            valueKey: valueKey as CharacterValueKey,
        };
    }

    if (optionKeySet.has(propertyName)) {
        return {
            name: referenceName,
            source,
            executionName: getScopedExecutionName(referenceName),
            optionKey: propertyName as BuiltinOptionKeyType,
        };
    }

    return {
        name: referenceName,
        source,
        executionName: getScopedExecutionName(referenceName),
    };
};

const createReference = (
    referenceName: string,
    localIntermediateNames: Set<string>,
): CombatFormulaReference => {
    if (localIntermediateNames.has(referenceName)) {
        return {
            name: referenceName,
            source: "localIntermediate",
            executionName: getLocalExecutionName(referenceName),
        };
    }

    if (referenceName.startsWith("attacker.")) {
        return createCharacterReference(referenceName, "attacker");
    }

    if (referenceName.startsWith("defender.")) {
        return createCharacterReference(referenceName, "defender");
    }

    if (referenceName.startsWith("skill.")) {
        return {
            name: referenceName,
            source: "skill",
            executionName: getScopedExecutionName(referenceName),
        };
    }

    return {
        name: referenceName,
        source: "combatContext",
        executionName: getScopedExecutionName(referenceName),
    };
};

const preprocessReferences = (
    expression: string,
    localIntermediateNames: Set<string>,
): {
    processedExpression: string;
    references: CombatFormulaReference[];
} => {
    const referencesByName = new Map<string, CombatFormulaReference>();
    let processedExpression = expression;
    let match: RegExpExecArray | null;

    formulaReferencePattern.lastIndex = 0;
    while ((match = formulaReferencePattern.exec(expression)) !== null) {
        const referenceName = match[1].trim();
        const reference = createReference(referenceName, localIntermediateNames);
        referencesByName.set(`${reference.source}:${referenceName}`, reference);
        processedExpression = processedExpression.replace(
            new RegExp(`\\{${escapeRegExp(match[1])}\\}`, "g"),
            reference.executionName,
        );
    }

    return {
        processedExpression,
        references: Array.from(referencesByName.values()),
    };
};

const preprocessFormula = (formula: string): {
    processedFormula: string;
    references: CombatFormulaReference[];
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
        const { processedExpression, references } = preprocessReferences(localFormula, localIntermediateNames);

        return {
            name,
            formula: localFormula,
            processedFormula: processedExpression,
            references,
        };
    });

    const { processedExpression, references } = preprocessReferences(
        formulaLines.join("\n").trim(),
        localIntermediateNames,
    );

    return {
        processedFormula: processedExpression,
        references,
        localIntermediates,
    };
};

const createTrace = (
    formulaId: string,
    formulaSource: string,
    processedFormula: string,
    contextValues: Record<string, number>,
    references: CombatFormulaReferenceTrace[] = [],
    result?: {
        rawResult?: number;
        result?: number;
        error?: string;
    },
) => ({
    formulaId,
    formulaSource,
    processedFormula,
    references,
    contextValues,
    rawResult: result?.rawResult,
    result: result?.result,
    error: result?.error,
});

const resolveCharacterReference = (
    character: CalculatedCharacter,
    reference: Extract<CombatFormulaReference, { source: "attacker" | "defender" }>,
): number => {
    if (reference.valueKey) {
        return character.values[reference.valueKey] ?? 0;
    }

    if (reference.optionKey) {
        return character.aggregatedOptions[reference.optionKey] ?? 0;
    }

    return 0;
};

const getExternalReferenceValue = (
    reference: CombatFormulaReference,
    context: CombatFormulaContext,
): number => {
    if (reference.source === "attacker") {
        return resolveCharacterReference(context.attacker, reference);
    }

    if (reference.source === "defender") {
        return resolveCharacterReference(context.defender, reference);
    }

    if (reference.source === "skill") {
        const parameterName = reference.name.slice("skill.".length);
        return context.skillParameters?.[parameterName] ?? 0;
    }

    if (reference.source === "combatContext") {
        return context.combatContext?.[reference.name] ?? 0;
    }

    return 0;
};

export const evaluateCombatFormula = (
    formulaId: string,
    context: CombatFormulaContext,
    formulaSource?: string,
): CombatFormulaEvaluationResult => {
    const formula = formulaSource ?? DEFAULT_DAMAGE_FORMULAS[formulaId as CombatDamageFormulaId];
    if (!formula) {
        const error = `Damage formula not found: ${formulaId}`;
        return {
            success: false,
            error,
            trace: createTrace(formulaId, "", "", {}, [], { error }),
        };
    }

    const { processedFormula, references, localIntermediates } = preprocessFormula(formula);
    const resolvedReferences = new Map<string, CombatFormulaReferenceTrace>();
    const localIntermediateByName = new Map(localIntermediates.map((localIntermediate) => [localIntermediate.name, localIntermediate]));
    const localIntermediateValues = new Map<string, number>();
    const resolvingLocalIntermediates = new Set<string>();
    const contextValues: Record<string, number> = {};

    try {
        const baseExecutionContext = {
            ...allowedMathFunctions,
        };

        const evaluateExpression = (expression: string, expressionReferences: CombatFormulaReference[]) => {
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
            contextValues[getLocalExecutionName(name)] = value;

            return value;
        };

        const resolveFormulaReference = (reference: CombatFormulaReference): number => {
            if (reference.source === "localIntermediate") {
                return resolveLocalIntermediate(reference.name);
            }

            const value = getExternalReferenceValue(reference, context);
            resolvedReferences.set(`${reference.source}:${reference.name}`, {
                name: reference.name,
                source: reference.source,
                value,
                valueKey: "valueKey" in reference ? reference.valueKey : undefined,
                optionKey: "optionKey" in reference ? reference.optionKey : undefined,
            });
            contextValues[reference.executionName] = value;
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
