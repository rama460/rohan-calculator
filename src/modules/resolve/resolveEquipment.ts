import { getInitialBaseOtions, itemTemplates } from "../../static/items";
import { EquipmentLeafState, OptionMap, ResolvedEquipment } from "../character/types";
import { EquipmentSlotKey } from "../character/constants";

export const resolveEquipment = (
    slot: EquipmentSlotKey,
    equipment: EquipmentLeafState | undefined,
    raceid: number,
    jobid: number
): ResolvedEquipment | undefined => {
    if (!equipment) {
        return undefined;
    }

    const template = itemTemplates[slot].find((item) => item.id === equipment.templateId);
    if (!template) {
        return undefined;
    }

    const enchantLevel = equipment.enchantLevel ?? 0;
    const staticBaseOptions = getInitialBaseOtions(template, raceid, jobid, enchantLevel);

    return {
        ...equipment,
        slot,
        template,
        enchantLevel,
        options: {
            base: {
                ...staticBaseOptions,
                ...equipment.baseOverrides,
            } as OptionMap,
            additional: {
                ...equipment.additionalOptions,
            },
            crafted: {
                ...equipment.craftedOptions,
            },
        },
    };
};
