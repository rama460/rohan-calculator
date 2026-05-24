import { races } from "../../static/races";
import { titles } from "../../static/titles";
import { CharacterState, ResolvedCharacter } from "../character/types";
import { equipmentSlotKeys } from "../character/constants";
import { resolveBuffs } from "./resolveBuffs";
import { resolveEquipment } from "./resolveEquipment";

export const resolveCharacter = (character: CharacterState): ResolvedCharacter => {
    const race = races[character.base.raceid] ?? races[0];
    const job = race.jobs[character.base.jobid] ?? race.jobs[0];
    const title = titles.find((candidate) => candidate.name === character.base.title);

    const resolvedEquipment = Object.fromEntries(
        equipmentSlotKeys.flatMap((slot) => {
            const equipment = resolveEquipment(
                slot,
                character.equipment[slot],
                character.base.raceid,
                character.base.jobid
            );

            return equipment ? [[slot, equipment]] : [];
        })
    ) as ResolvedCharacter["resolvedEquipment"];

    return {
        ...character,
        race,
        job,
        title,
        resolvedEquipment,
        resolvedBuffs: resolveBuffs(character.buffs),
    };
};
