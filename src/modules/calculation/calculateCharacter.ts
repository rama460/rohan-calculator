import { charactorStateNames, CharactorStateType } from "../state/charactor";
import { CalculatedCharacter, CharacterState } from "../character/types";
import { resolveCharacter } from "../resolve";
import { aggregateOptions } from "./aggregateOptions";
import { collectOptionSources } from "./collectOptionSources";
import { evaluateFormula } from "./evaluateFormula";
import { buildFormulaContext } from "./formulaContext";

export const calculateCharacter = (character: CharacterState): CalculatedCharacter => {
    const resolvedCharacter = resolveCharacter(character);
    const optionSources = collectOptionSources(resolvedCharacter);
    const aggregatedOptions = aggregateOptions(optionSources);
    const formulaContext = buildFormulaContext(resolvedCharacter, aggregatedOptions);
    const values = {} as Record<CharactorStateType, number>;
    const resolving = new Set<CharactorStateType>();

    const resolveValue = (formulaId: CharactorStateType): number => {
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
            character.customFormulas,
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

    charactorStateNames.forEach(resolveValue);

    return {
        character,
        optionSources,
        aggregatedOptions,
        values,
    };
};

