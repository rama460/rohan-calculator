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
import { equipmentStateFamily, resetAllEquipmentState } from "../items";

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
            set(equipmentStateFamily(slot), item);
        }
    )
);

export const resetCompatibleEquipmentAtom = atom(null, (_, set) => {
    set(resetAllEquipmentState);
    equipmentSlotKeys.forEach((slot) => {
        set(activeCharacterEquipmentAtomFamily(slot), undefined);
    });
});
