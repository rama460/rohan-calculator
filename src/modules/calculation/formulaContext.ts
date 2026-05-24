import { BuiltinOptionKeys } from "../../static/options";
import { FormulaContext } from "../state/custom-formulas";
import { AggregatedOptions, ResolvedCharacter } from "../character/types";

export const buildFormulaContext = (
    character: ResolvedCharacter,
    aggregatedOptions: AggregatedOptions
): FormulaContext => {
    const optionValues = Object.fromEntries(
        BuiltinOptionKeys.map((key) => [key, aggregatedOptions[key] ?? 0])
    );

    return {
        ...optionValues,
        level: character.base.level,
        heroLevel: character.base.heroLevel,
        raceid: character.base.raceid,
        jobid: character.base.jobid,
        strength: aggregatedOptions.strength ?? 0,
        vitality: aggregatedOptions.vitality ?? 0,
        dexterity: aggregatedOptions.dexterity ?? 0,
        intelligence: aggregatedOptions.intelligence ?? 0,
        agility: aggregatedOptions.agility ?? 0,
        mentality: aggregatedOptions.mentality ?? 0,
        raceHitPointPerLevel: character.race.hitPointPerLevel,
        raceMagicPointPerLevel: character.race.magicPointPerLevel,
        raceMovementSpeed: character.race.movementSpeed,
        initialStatusStrength: character.race.initialStatus.strength,
        initialStatusVitality: character.race.initialStatus.vitality,
        initialStatusIntelligence: character.race.initialStatus.intelligence,
        initialStatusAgility: character.race.initialStatus.agility,
        initialStatusMentality: character.race.initialStatus.mentality,
        initialStatusDexterity: character.race.initialStatus.dexterity,
    };
};

