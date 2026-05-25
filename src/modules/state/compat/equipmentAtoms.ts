import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import type { Item } from "../../../static/items";
import type { ResolvedEquipment } from "../../character/types";
import { equipmentSlotKeys, EquipmentSlotKey } from "../../character/constants";
import { normalizeEquipmentItem } from "../../normalize";
import { resolveEquipment } from "../../resolve/resolveEquipment";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterEquipmentAtomFamily,
} from "../activeCharacterAtoms";

const toItem = (equipment: ResolvedEquipment): Item => {
    const item: Item = {
        name: equipment.template.name,
        icon: equipment.template.icon,
        availableRaces: equipment.template.availableRaces,
        enchantLevel: equipment.enchantLevel ?? 0,
        baseOptions: equipment.options.base,
        additionalOptions: equipment.options.additional,
        craftedOptions: equipment.options.crafted,
        synergyKey: equipment.template.synergyKey,
        synergyOptions: equipment.template.synergyOptions,
    };

    if (equipment.template.type) {
        return {
            ...item,
            type: equipment.template.type,
        };
    }

    return item;
};

export const compatibleEquipmentAtomFamily = atomFamily((slot: EquipmentSlotKey) =>
    atom(
        (get) => {
            const equipment = resolveEquipment(
                slot,
                get(activeCharacterEquipmentAtomFamily(slot)),
                Number(get(activeCharacterBaseAtomFamily("raceid"))),
                Number(get(activeCharacterBaseAtomFamily("jobid")))
            );
            return equipment ? toItem(equipment) : undefined;
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

export const compatibleEquipmentSynergyCountAtomFamily = atomFamily((slot: EquipmentSlotKey) =>
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

export const resetCompatibleEquipmentAtom = atom(null, (_get, set) => {
    equipmentSlotKeys.forEach((slot) => {
        set(activeCharacterEquipmentAtomFamily(slot), undefined);
    });
});
