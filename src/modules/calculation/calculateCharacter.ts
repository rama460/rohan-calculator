import { characterValueKeys, CharacterValueKey } from "../character/constants";
import { CalculatedCharacter, CharacterState } from "../character/types";
import { resolveCharacter } from "../resolve";
import { aggregateOptions } from "./aggregateOptions";
import { collectOptionSources } from "./collectOptionSources";
import { evaluateFormula } from "./evaluateFormula";
import { buildFormulaContext } from "./formulaContext";
import type { Formula } from "../state/custom-formulas";

export const calculateCharacter = (
    character: CharacterState,
    customFormulas: Partial<Record<CharacterValueKey, Formula>> = {}
): CalculatedCharacter => {
    const resolvedCharacter = resolveCharacter(character);
    const optionSources = collectOptionSources(resolvedCharacter);
    const aggregatedOptions = aggregateOptions(optionSources);
    const formulaContext = buildFormulaContext(resolvedCharacter, aggregatedOptions);
    const values = {} as Record<CharacterValueKey, number>;
    const resolving = new Set<CharacterValueKey>();

    const resolveValue = (formulaId: CharacterValueKey): number => {
        if (values[formulaId] !== undefined) {
            return values[formulaId];
        }

        if (resolving.has(formulaId)) {
            console.warn(`Circular formula dependency detected: ${formulaId}`);
            return 0;
        }

        resolving.add(formulaId);
        const result = evaluateFormula(
            formulaId,
            formulaContext,
            customFormulas,
            resolveValue
        );
        resolving.delete(formulaId);

        if (!result.success || result.result === undefined) {
            console.warn(`Formula failed for ${formulaId}:`, result.error);
            values[formulaId] = 0;
            return 0;
        }

        values[formulaId] = result.result;
        return result.result;
    };

    characterValueKeys.forEach(resolveValue);

    return {
        character,
        optionSources,
        aggregatedOptions,
        values,
    };
};
