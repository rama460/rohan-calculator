import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { BaseOptionKeyType } from "../../character/constants";
import type { CharacterBaseState } from "../../character/types";
import { activeCharacterBaseAtomFamily } from "../activeCharacterAtoms";

export const compatibleBaseAtomFamily = atomFamily((key: BaseOptionKeyType) =>
    atom(
        (get) => get(activeCharacterBaseAtomFamily(key)),
        (_, set, value: CharacterBaseState[typeof key]) => {
            set(activeCharacterBaseAtomFamily(key), value);
        }
    )
);

export const compatibleTitleAtom = atom(
    (get) => get(activeCharacterBaseAtomFamily("title")),
    (_, set, title: string) => {
        set(activeCharacterBaseAtomFamily("title"), title);
    }
);
