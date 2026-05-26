import { getInitialBaseOtions, itemTemplates } from "../../static/items";
import type { Item, ItemTemplate } from "../../static/items";
import { EquipmentSlotKey } from "../character/constants";
import type { EquipmentLeafState, OptionMap } from "../character/types";

const withoutUnchangedOptions = (options: OptionMap, staticOptions: OptionMap): OptionMap => (
    Object.fromEntries(
        Object.entries(options).filter(([key, value]) => staticOptions[key as keyof OptionMap] !== value)
    ) as OptionMap
);

const resolveTemplateById = (
    templateId: number | undefined,
    slot: EquipmentSlotKey
): { template: ItemTemplate; templateId: number } | undefined => {
    if (templateId === undefined) {
        return undefined;
    }

    const template = slot === "shield" && templateId < 0
        ? itemTemplates.weapon.find((candidate) => candidate.id === -(1 + templateId))
        : itemTemplates[slot].find((candidate) => candidate.id === templateId);

    return template ? { template, templateId } : undefined;
};

export const normalizeEquipmentItem = (
    item: Item,
    slot: EquipmentSlotKey,
    raceid: number,
    jobid: number
): EquipmentLeafState | undefined => {
    const templates = slot === "shield" && item.type ? itemTemplates.weapon : itemTemplates[slot];
    const resolvedById = resolveTemplateById(item.templateId, slot);
    const template = resolvedById?.template ?? templates.find((candidate) => candidate.name === item.name);
    const templateId = resolvedById?.templateId ?? (slot === "shield" && item.type && template ? -(1 + template.id) : template?.id);
    if (!template || templateId === undefined) {
        return undefined;
    }

    const enchantLevel = item.enchantLevel ?? 0;
    const staticBaseOptions = getInitialBaseOtions(template, raceid, jobid, enchantLevel);
    const baseOverrides = withoutUnchangedOptions(item.baseOptions, staticBaseOptions);
    return {
        templateId,
        ...(enchantLevel > 0 ? { enchantLevel } : {}),
        ...(Object.keys(baseOverrides).length > 0 ? { baseOverrides } : {}),
        ...(Object.keys(item.additionalOptions).length > 0 ? { additionalOptions: item.additionalOptions } : {}),
        ...(Object.keys(item.craftedOptions).length > 0 ? { craftedOptions: item.craftedOptions } : {}),
    };
};
