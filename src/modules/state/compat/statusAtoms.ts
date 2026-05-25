import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import {
    activeCharacterAllocatedStatusAtomFamily,
    activeCharacterMetaStatusAtomFamily,
} from "../activeCharacterAtoms";
import { baseStatusState, metaStatusState, resetAllStatusState, StatusType } from "../statuses";

export const compatibleAllocatedStatusAtomFamily = atomFamily((key: StatusType) =>
    atom(
        (get) => get(activeCharacterAllocatedStatusAtomFamily(key)),
        (_, set, value: number) => {
            set(activeCharacterAllocatedStatusAtomFamily(key), value);
            set(baseStatusState(key), value);
        }
    )
);

export const compatibleMetaStatusAtomFamily = atomFamily((key: StatusType) =>
    atom(
        (get) => get(activeCharacterMetaStatusAtomFamily(key)),
        (_, set, value: number) => {
            set(activeCharacterMetaStatusAtomFamily(key), value);
            set(metaStatusState(key), value);
        }
    )
);

export const resetCompatibleStatusAtom = atom(null, (_, set) => {
    set(resetAllStatusState);
    (["strength", "vitality", "dexterity", "intelligence", "agility", "mentality"] as const).forEach((status) => {
        set(activeCharacterAllocatedStatusAtomFamily(status), 0);
        set(activeCharacterMetaStatusAtomFamily(status), 0);
    });
});
