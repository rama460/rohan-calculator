import { SKillOriginNames } from "../../static/skills/skill";
import { charactorStateNames } from "../state/charactor";
import { equipmentSlotNames } from "../state/items";
import { statuses } from "../state/statuses";
import { AppState, BuffLeafState, CharacterId, CharacterState } from "./types";

export const DEFAULT_CHARACTER_ID: CharacterId = "main";

export const createDefaultBuffs = (): CharacterState["buffs"] => {
    return Object.fromEntries(
        SKillOriginNames.map((origin) => [origin, [] as BuffLeafState[]])
    ) as CharacterState["buffs"];
};

export const createDefaultStatuses = (): CharacterState["statuses"] => {
    const emptyStatuses = Object.fromEntries(
        statuses.map((status) => [status, 0])
    ) as Record<(typeof statuses)[number], number>;

    return {
        allocated: { ...emptyStatuses },
        meta: { ...emptyStatuses },
    };
};

export const createDefaultCharacterState = (
    id: CharacterId = DEFAULT_CHARACTER_ID,
    name = "Character"
): CharacterState => {
    return {
        id,
        name,
        base: {
            level: 115,
            heroLevel: 50,
            raceid: 0,
            jobid: 0,
            title: "none",
        },
        statuses: createDefaultStatuses(),
        equipment: Object.fromEntries(
            equipmentSlotNames.map((slot) => [slot, undefined])
        ) as CharacterState["equipment"],
        buffs: createDefaultBuffs(),
        skillLevels: {
            primary: {},
            secondary: {},
        },
        customFormulas: Object.fromEntries(
            charactorStateNames.map((key) => [key, undefined])
        ) as CharacterState["customFormulas"],
    };
};

export const createDefaultAppState = (): AppState => {
    const character = createDefaultCharacterState();

    return {
        version: 1,
        activeCharacterId: character.id,
        characters: {
            [character.id]: character,
        },
    };
};

