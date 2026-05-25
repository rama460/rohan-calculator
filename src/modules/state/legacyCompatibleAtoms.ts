import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import type { Item } from "../../static/items";
import { skills, SkillOrigin } from "../../static/skills/skill";
import { races } from "../../static/races";
import { DEFAULT_FORMULAS, DEFAULT_FORMULA_DESCRIPTIONS } from "../../static/default-formulas";
import { getInitialSkillLevelsForJob } from "../../components/skill/skillTreeData";
import type { BuffLeafState, CharacterBaseState, ResolvedEquipment, SkillLevelMap } from "../character/types";
import { equipmentSlotKeys, EquipmentSlotKey } from "../character/constants";
import { normalizeBuffState, normalizeEquipmentItem } from "../normalize";
import { resolveEquipment } from "../resolve/resolveEquipment";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterBuffsAtomFamily,
    activeCharacterAllocatedStatusAtomFamily,
    activeCharacterMetaStatusAtomFamily,
    activeCharacterEquipmentAtomFamily,
    activeCharacterSkillLevelsAtomFamily,
} from "./activeCharacterAtoms";
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
                const nextBuff = normalizeBuffState(buff);
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
        (get) => get(customFormulaStateFamily(formulaId)),
        (_, set, formula: Formula | null) => {
            set(customFormulaStateFamily(formulaId), formula);
        }
    )
);

export const compatibleFormulaAtomFamily = atomFamily((formulaId: CharactorStateType) =>
    atom((get): Formula => {
        const customFormula = get(compatibleCustomFormulaAtomFamily(formulaId));

        if (customFormula?.isActive) {
            return {
                id: formulaId,
                name: formulaId,
                formula: customFormula.formula,
                isCustom: customFormula.isCustom,
                isActive: customFormula.isActive,
                description: customFormula.description,
                createdAt: customFormula.createdAt,
                updatedAt: customFormula.updatedAt,
                version: customFormula.version,
            };
        }

        return {
            id: formulaId,
            name: formulaId,
            formula: DEFAULT_FORMULAS[formulaId],
            isCustom: false,
            isActive: true,
            description: DEFAULT_FORMULA_DESCRIPTIONS[formulaId],
        };
    })
);

export const compatibleCustomFormulasState = atom(
    (get) => get(customFormulasState),
    (_, set, formulas: Record<CharactorStateType, Formula>) => {
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

export const resetCompatibleCharacterContextAtom = atom(null, (_, set) => {
    set(resetCompatibleStatusAtom);
    set(resetCompatibleEquipmentAtom);
    set(resetCompatibleBaseAtom);
    set(compatibleBuffsAtomFamily("Self"), []);
    set(compatibleBuffsAtomFamily("Group"), []);
    set(compatibleBuffsAtomFamily("Guild"), []);
    set(compatibleBuffsAtomFamily("Cash"), []);
});
