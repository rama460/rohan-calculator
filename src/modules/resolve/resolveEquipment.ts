import { BuiltinWeaponTypes, getInitialBaseOtions, itemTemplates } from "../../static/items";
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

    const template = slot === "shield" && equipment.templateId < 0
        ? itemTemplates.weapon.find((item) => item.id === -(1 + equipment.templateId))
        : itemTemplates[slot].find((item) => item.id === equipment.templateId);
    if (!template) {
        return undefined;
    }

    const enchantLevel = equipment.enchantLevel ?? 0;
    const staticBaseOptions = getInitialBaseOtions(template, raceid, jobid, enchantLevel);
    const baseOptions = {
        ...staticBaseOptions,
        ...equipment.baseOverrides,
    };

    if (slot === "weapon" && template.type && baseOptions.attackSpeed === undefined) {
        baseOptions.attackSpeed = BuiltinWeaponTypes[template.type].attackSpeed;
    }

    return {
        ...equipment,
        slot,
        template,
        enchantLevel,
        options: {
            base: baseOptions as OptionMap,
            additional: {
                ...equipment.additionalOptions,
            },
            crafted: {
                ...equipment.craftedOptions,
            },
        },
    };
};
