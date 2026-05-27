import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import type { Item } from "../../../static/items";
import { equipmentSlotKeys, EquipmentSlotKey } from "../../character/constants";
import { resolvedEquipmentToItem } from "../../equipment";
import { normalizeEquipmentItem } from "../../normalize";
import { resolveEquipment } from "../../resolve/resolveEquipment";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterEquipmentAtomFamily,
} from "../activeCharacterAtoms";

export const uiEquipmentAtomFamily = atomFamily((slot: EquipmentSlotKey) =>
    atom(
        (get) => {
            const equipment = resolveEquipment(
                slot,
                get(activeCharacterEquipmentAtomFamily(slot)),
                Number(get(activeCharacterBaseAtomFamily("raceid"))),
                Number(get(activeCharacterBaseAtomFamily("jobid")))
            );
            return equipment ? resolvedEquipmentToItem(equipment) : undefined;
        },
        (get, set, item: Item | undefined) => {
            const equipment = item
                ? normalizeEquipmentItem(
                    item,
                    slot,
                    Number(get(activeCharacterBaseAtomFamily("raceid"))),
                    Number(get(activeCharacterBaseAtomFamily("jobid")))
                )
                : undefined;
            set(activeCharacterEquipmentAtomFamily(slot), equipment);
        }
    )
);

export const uiEquipmentSynergyCountAtomFamily = atomFamily((slot: EquipmentSlotKey) =>
    atom<number>((get) => {
        const currentEquipment = resolveEquipment(
            slot,
            get(activeCharacterEquipmentAtomFamily(slot)),
            Number(get(activeCharacterBaseAtomFamily("raceid"))),
            Number(get(activeCharacterBaseAtomFamily("jobid")))
        );

        const synergyKey = currentEquipment?.template.synergyKey;
        if (!synergyKey) {
            return 0;
        }

        return equipmentSlotKeys.filter((candidateSlot) => {
            const equipment = resolveEquipment(
                candidateSlot,
                get(activeCharacterEquipmentAtomFamily(candidateSlot)),
                Number(get(activeCharacterBaseAtomFamily("raceid"))),
                Number(get(activeCharacterBaseAtomFamily("jobid")))
            );
            return equipment?.template.synergyKey === synergyKey;
        }).length;
    })
);

export const resetUiEquipmentAtom = atom(null, (_get, set) => {
    equipmentSlotKeys.forEach((slot) => {
        set(activeCharacterEquipmentAtomFamily(slot), undefined);
    });
});
