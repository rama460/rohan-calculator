import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { SkillOrigin } from "../../static/skills/skill";
import {
    BuffLeafState,
    CharacterBaseState,
    CharacterState,
    EquipmentLeafState,
    SkillLevelMap,
} from "../character/types";
import type { Formula } from "./custom-formulas";
import { customFormulasState } from "./custom-formulas";
import {
    CharacterStatusKey,
    CharacterValueKey,
    EquipmentSlotKey,
} from "../character/constants";
import { calculateCharacter } from "../calculation";
import { activeCharacterAtom } from "./appState";

export const updateActiveCharacterAtom = atom(
    null,
    (get, set, update: (character: CharacterState) => CharacterState) => {
        set(activeCharacterAtom, update(get(activeCharacterAtom)));
    }
);

export const activeCharacterNameAtom = atom(
    (get) => get(activeCharacterAtom).name,
    (_, set, name: string) => {
        set(updateActiveCharacterAtom, (character) => ({
            ...character,
            name,
        }));
    }
);

export const activeCharacterBaseAtomFamily = atomFamily((key: keyof CharacterBaseState) =>
    atom(
        (get) => get(activeCharacterAtom).base[key],
        (_, set, nextValue: CharacterBaseState[typeof key]) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                base: {
                    ...character.base,
                    [key]: nextValue,
                },
            }));
        }
    )
);

export const activeCharacterAllocatedStatusAtomFamily = atomFamily((key: CharacterStatusKey) =>
    atom(
        (get) => get(activeCharacterAtom).statuses.allocated[key],
        (_, set, value: number) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                statuses: {
                    ...character.statuses,
                    allocated: {
                        ...character.statuses.allocated,
                        [key]: value,
                    },
                },
            }));
        }
    )
);

export const activeCharacterMetaStatusAtomFamily = atomFamily((key: CharacterStatusKey) =>
    atom(
        (get) => get(activeCharacterAtom).statuses.meta[key],
        (_, set, value: number) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                statuses: {
                    ...character.statuses,
                    meta: {
                        ...character.statuses.meta,
                        [key]: value,
                    },
                },
            }));
        }
    )
);

export const activeCharacterEquipmentAtomFamily = atomFamily((slot: EquipmentSlotKey) =>
    atom(
        (get) => get(activeCharacterAtom).equipment[slot],
        (_, set, equipment: EquipmentLeafState | undefined) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                equipment: {
                    ...character.equipment,
                    [slot]: equipment,
                },
            }));
        }
    )
);

export const activeCharacterBuffsAtomFamily = atomFamily((origin: SkillOrigin) =>
    atom(
        (get) => get(activeCharacterAtom).buffs[origin],
        (_, set, buffs: BuffLeafState[]) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                buffs: {
                    ...character.buffs,
                    [origin]: buffs,
                },
            }));
        }
    )
);

export const activeCharacterSkillLevelsAtomFamily = atomFamily((type: "primary" | "secondary") =>
    atom(
        (get) => get(activeCharacterAtom).skillLevels[type],
        (_, set, skillLevels: SkillLevelMap) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                skillLevels: {
                    ...character.skillLevels,
                    [type]: skillLevels,
                },
            }));
        }
    )
);

export const calculatedActiveCharacterAtom = atom((get) =>
    calculateCharacter(
        get(activeCharacterAtom),
        get(customFormulasState) as Partial<Record<CharacterValueKey, Formula>>
    )
);

export const activeCharacterValueAtomFamily = atomFamily((key: CharacterValueKey) =>
    atom((get) => get(calculatedActiveCharacterAtom).values[key])
);
