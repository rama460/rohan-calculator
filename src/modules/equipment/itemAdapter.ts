import type { Item } from "../../static/items";
import type { ResolvedEquipment } from "../character/types";

export const resolvedEquipmentToItem = (equipment: ResolvedEquipment): Item => {
    const item: Item = {
        templateId: equipment.templateId,
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
