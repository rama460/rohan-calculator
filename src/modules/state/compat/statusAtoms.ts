import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterAllocatedStatusAtomFamily,
    activeCharacterMetaStatusAtomFamily,
} from "../activeCharacterAtoms";
import { characterStatusNames, CharacterStatusKey } from "../../character/constants";

export const compatibleAllocatedStatusAtomFamily = atomFamily((key: CharacterStatusKey) =>
    atom(
        (get) => get(activeCharacterAllocatedStatusAtomFamily(key)),
        (_, set, value: number) => {
            set(activeCharacterAllocatedStatusAtomFamily(key), value);
        }
    )
);

export const compatibleMetaStatusAtomFamily = atomFamily((key: CharacterStatusKey) =>
    atom(
        (get) => get(activeCharacterMetaStatusAtomFamily(key)),
        (_, set, value: number) => {
            set(activeCharacterMetaStatusAtomFamily(key), value);
        }
    )
);

export const compatibleRemainingPointsAtom = atom((get) => {
    const level = Number(get(activeCharacterBaseAtomFamily("level")));
    const heroLevel = Number(get(activeCharacterBaseAtomFamily("heroLevel")));
    const used = (["strength", "vitality", "dexterity", "intelligence", "agility", "mentality"] as const)
        .map((status) => get(activeCharacterAllocatedStatusAtomFamily(status)))
        .reduce((acc, cur) => acc + cur, 0);

    if (level < 51) {
        return (level - 1) * 4 - used;
    }
    if (level < 71) {
        return 196 + (level - 50) * 6 - used;
    }
    if (level < 101) {
        return 196 + 120 + (level - 70) * 8 - used;
    }
    return 196 + 120 + 240 + (level - 100) * 10 + heroLevel * 10 - used;
});

export const resetCompatibleStatusAtom = atom(null, (_, set) => {
    characterStatusNames.forEach((status) => {
        set(activeCharacterAllocatedStatusAtomFamily(status), 0);
        set(activeCharacterMetaStatusAtomFamily(status), 0);
    });
});
