import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { getInitialBaseOtions, itemTemplates } from "../../static/items";
import type { Item } from "../../static/items";
import { skills, SkillOrigin } from "../../static/skills/skill";
import { races } from "../../static/races";
import { getInitialSkillLevelsForJob } from "../../components/skill/skillTreeData";
import type { BuffLeafState, CharacterBaseState, EquipmentLeafState, OptionMap, ResolvedEquipment, SkillLevelMap } from "../character/types";
import { CharacterValueKey, equipmentSlotKeys, EquipmentSlotKey } from "../character/constants";
import { resolveEquipment } from "../resolve/resolveEquipment";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterBuffsAtomFamily,
    activeCharacterAllocatedStatusAtomFamily,
    activeCharacterMetaStatusAtomFamily,
    activeCharacterEquipmentAtomFamily,
    activeCharacterSkillLevelsAtomFamily,
    activeCharacterCustomFormulaAtomFamily,
    updateActiveCharacterAtom,
} from "./activeCharacterAtoms";
import { activeCharacterAtom } from "./appState";
import { baseOptionStateFamily, BaseOptionKeyType, titleNameState } from "./bases";
import { CharactorStateType } from "./charactor";
import { customFormulaStateFamily, customFormulasState, Formula } from "./custom-formulas";
import { equipmentStateFamily, resetAllEquipmentState } from "./items";
import {
    primaryJobSkillLevelsWithDefaultsAtom,
    secondaryJobSkillLevelsWithDefaultsAtom,
    skillJobIdAtom,
} from "./skillLevels";
import { BuffState, buffStateFamily } from "./skills";
import { baseStatusState, metaStatusState, resetAllStatusState, StatusType } from "./statuses";

export const compatibleBaseAtomFamily = atomFamily((key: BaseOptionKeyType) =>
    atom(
        (get) => get(activeCharacterBaseAtomFamily(key)),
        (_, set, value: CharacterBaseState[typeof key]) => {
            set(activeCharacterBaseAtomFamily(key), value);
            set(baseOptionStateFamily(key), value);
        }
    )
);

export const compatibleTitleAtom = atom(
    (get) => get(activeCharacterBaseAtomFamily("title")),
    (_, set, title: string) => {
        set(activeCharacterBaseAtomFamily("title"), title);
        set(titleNameState, title);
    }
);

const toBuffLeafState = (buff: BuffState): BuffLeafState | undefined => {
    const skillId = skills.findIndex((skill) => skill.name === buff.name);
    if (skillId < 0) {
        return undefined;
    }

    return {
        skillId,
        level: buff.level,
    };
};

const toBuffState = (buff: BuffLeafState): BuffState | undefined => {
    const skill = skills[buff.skillId];
    if (!skill) {
        return undefined;
    }

    return {
        name: skill.name,
        level: buff.level,
    };
};

export const compatibleBuffsAtomFamily = atomFamily((origin: SkillOrigin) =>
    atom(
        (get) => get(activeCharacterBuffsAtomFamily(origin)).flatMap((buff) => {
            const legacyBuff = toBuffState(buff);
            return legacyBuff ? [legacyBuff] : [];
        }),
        (_, set, buffs: BuffState[]) => {
            set(activeCharacterBuffsAtomFamily(origin), buffs.flatMap((buff) => {
                const nextBuff = toBuffLeafState(buff);
                return nextBuff ? [nextBuff] : [];
            }));
            set(buffStateFamily(origin), buffs);
        }
    )
);

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

const withoutUnchangedOptions = (options: OptionMap, staticOptions: OptionMap): OptionMap => (
    Object.fromEntries(
        Object.entries(options).filter(([key, value]) => staticOptions[key as keyof OptionMap] !== value)
    ) as OptionMap
);

const toEquipmentLeafState = (
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
                ? toEquipmentLeafState(
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

const getDefaultSkillLevels = (
    type: "primary" | "secondary",
    raceid: number,
    jobid: number
): SkillLevelMap => {
    const race = races.find((candidate) => candidate.id === raceid);
    const job = type === "primary"
        ? race?.jobs[0]
        : race?.jobs[jobid];
    return getInitialSkillLevelsForJob(job);
};

export const compatibleSkillLevelsWithDefaultsAtomFamily = atomFamily((type: "primary" | "secondary") =>
    atom(
        (get) => {
            const levels = get(activeCharacterSkillLevelsAtomFamily(type));
            if (Object.keys(levels).length > 0) {
                return levels;
            }

            return getDefaultSkillLevels(
                type,
                Number(get(activeCharacterBaseAtomFamily("raceid"))),
                type === "primary" ? 0 : Number(get(skillJobIdAtom))
            );
        },
        (_, set, levels: SkillLevelMap) => {
            set(activeCharacterSkillLevelsAtomFamily(type), levels);
            set(
                type === "primary"
                    ? primaryJobSkillLevelsWithDefaultsAtom
                    : secondaryJobSkillLevelsWithDefaultsAtom,
                levels
            );
        }
    )
);

export const compatibleUsedSkillPointsAtom = atom((get) => {
    const primarySkills = get(compatibleSkillLevelsWithDefaultsAtomFamily("primary"));
    const secondarySkills = get(compatibleSkillLevelsWithDefaultsAtomFamily("secondary"));

    return [...Object.values(primarySkills), ...Object.values(secondarySkills)]
        .reduce((sum, level) => sum + level, 0);
});

export const compatibleCustomFormulaAtomFamily = atomFamily((formulaId: CharactorStateType) =>
    atom(
        (get) => get(activeCharacterCustomFormulaAtomFamily(formulaId as CharacterValueKey)) ?? null,
        (_, set, formula: Formula | null) => {
            set(activeCharacterCustomFormulaAtomFamily(formulaId as CharacterValueKey), formula ?? undefined);
            set(customFormulaStateFamily(formulaId), formula);
        }
    )
);

export const compatibleCustomFormulasState = atom(
    (get) => get(activeCharacterAtom).customFormulas as Record<CharactorStateType, Formula>,
    (_, set, formulas: Record<CharactorStateType, Formula>) => {
        set(updateActiveCharacterAtom, (character) => ({
            ...character,
            customFormulas: formulas as Partial<Record<CharacterValueKey, Formula>>,
        }));
        set(customFormulasState, formulas);
    }
);

export const compatibleIsFormulaCustomizedFamily = atomFamily((formulaId: CharactorStateType) =>
    atom((get) => {
        const formula = get(compatibleCustomFormulaAtomFamily(formulaId));
        return formula !== null && formula.isActive;
    })
);

export const resetCompatibleCustomFormulaFamily = atomFamily((formulaId: CharactorStateType) =>
    atom(null, (_, set) => {
        set(compatibleCustomFormulaAtomFamily(formulaId), null);
    })
);

export const resetCompatibleBaseAtom = atom(null, (_, set) => {
    set(compatibleBaseAtomFamily("level"), 115);
    set(compatibleBaseAtomFamily("heroLevel"), 50);
    set(compatibleBaseAtomFamily("raceid"), 0);
    set(compatibleBaseAtomFamily("jobid"), 0);
    set(compatibleTitleAtom, "none");
    set(compatibleBuffsAtomFamily("Self"), []);
});
