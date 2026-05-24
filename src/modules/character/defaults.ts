import { SKillOriginNames } from "../../static/skills/skill";
import { AppState, BuffLeafState, CharacterId, CharacterState } from "./types";
import { characterStatusNames, characterValueKeys, equipmentSlotKeys } from "./constants";

export const DEFAULT_CHARACTER_ID: CharacterId = "main";

export const createDefaultBuffs = (): CharacterState["buffs"] => {
    return Object.fromEntries(
        SKillOriginNames.map((origin) => [origin, [] as BuffLeafState[]])
    ) as CharacterState["buffs"];
};

export const createDefaultStatuses = (): CharacterState["statuses"] => {
    const emptyStatuses = Object.fromEntries(
        characterStatusNames.map((status) => [status, 0])
    ) as Record<(typeof characterStatusNames)[number], number>;

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
            equipmentSlotKeys.map((slot) => [slot, undefined])
        ) as CharacterState["equipment"],
        buffs: createDefaultBuffs(),
        skillLevels: {
            primary: {},
            secondary: {},
        },
        customFormulas: Object.fromEntries(
            characterValueKeys.map((key) => [key, undefined])
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
