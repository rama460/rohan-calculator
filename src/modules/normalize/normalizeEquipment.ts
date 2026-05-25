import { getInitialBaseOtions, itemTemplates } from "../../static/items";
import type { Item } from "../../static/items";
import { EquipmentSlotKey } from "../character/constants";
import type { EquipmentLeafState, OptionMap } from "../character/types";

const withoutUnchangedOptions = (options: OptionMap, staticOptions: OptionMap): OptionMap => (
    Object.fromEntries(
        Object.entries(options).filter(([key, value]) => staticOptions[key as keyof OptionMap] !== value)
    ) as OptionMap
);

export const normalizeEquipmentItem = (
    item: Item,
    slot: EquipmentSlotKey,
    raceid: number,
    jobid: number
): EquipmentLeafState | undefined => {
    const templates = slot === "shield" && item.type ? itemTemplates.weapon : itemTemplates[slot];
    const template = templates.find((candidate) => candidate.name === item.name);
    if (!template) {
        return undefined;
    }

    const enchantLevel = item.enchantLevel ?? 0;
    const staticBaseOptions = getInitialBaseOtions(template, raceid, jobid, enchantLevel);
    const baseOverrides = withoutUnchangedOptions(item.baseOptions, staticBaseOptions);
    const templateId = slot === "shield" && item.type ? -(1 + template.id) : template.id;

    return {
        templateId,
        ...(enchantLevel > 0 ? { enchantLevel } : {}),
        ...(Object.keys(baseOverrides).length > 0 ? { baseOverrides } : {}),
        ...(Object.keys(item.additionalOptions).length > 0 ? { additionalOptions: item.additionalOptions } : {}),
        ...(Object.keys(item.craftedOptions).length > 0 ? { craftedOptions: item.craftedOptions } : {}),
    };
};
