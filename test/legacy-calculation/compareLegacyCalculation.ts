import { createStore } from "jotai";
import { Item } from "../../src/static/items";
import { skills, SKillOriginNames } from "../../src/static/skills/skill";
import { CharacterValueKey, characterValueKeys, equipmentSlotKeys } from "../../src/modules/character/constants";
import { CharacterState, ResolvedEquipment } from "../../src/modules/character/types";
import { resolveCharacter } from "../../src/modules/resolve";
import { baseOptionStateFamily, titleNameState } from "../../src/modules/state/bases";
import { charactorStateFamily, CharactorStateType } from "../../src/modules/state/charactor";
import { customFormulaStateFamily } from "../../src/modules/state/custom-formulas";
import { equipmentStateFamily, EquipmentSlotType } from "../../src/modules/state/items";
import { buffStateFamily } from "../../src/modules/state/skills";
import { baseStatusState, metaStatusState, StatusType } from "../../src/modules/state/statuses";
import { calculateCharacter } from "../../src/modules/calculation/calculateCharacter";

export type CalculationComparisonValue = {
    key: CharacterValueKey;
    legacy: number;
    current: number;
    diff: number;
};

export type CalculationComparisonResult = {
    legacyValues: Record<CharacterValueKey, number>;
    currentValues: Record<CharacterValueKey, number>;
    differences: CalculationComparisonValue[];
};

const toLegacyItem = (equipment: ResolvedEquipment): Item => {
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

const applyCharacterToLegacyStore = (
    store: ReturnType<typeof createStore>,
    character: CharacterState
): void => {
    store.set(titleNameState, character.base.title);
    store.set(baseOptionStateFamily("level"), character.base.level);
    store.set(baseOptionStateFamily("heroLevel"), character.base.heroLevel);
    store.set(baseOptionStateFamily("raceid"), character.base.raceid);
    store.set(baseOptionStateFamily("jobid"), character.base.jobid);

    Object.entries(character.statuses.allocated).forEach(([status, value]) => {
        store.set(baseStatusState(status as StatusType), value);
    });
    Object.entries(character.statuses.meta).forEach(([status, value]) => {
        store.set(metaStatusState(status as StatusType), value);
    });

    const resolvedCharacter = resolveCharacter(character);
    equipmentSlotKeys.forEach((slot) => {
        const equipment = resolvedCharacter.resolvedEquipment[slot];
        store.set(
            equipmentStateFamily(slot as EquipmentSlotType),
            equipment ? toLegacyItem(equipment) : undefined
        );
    });

    SKillOriginNames.forEach((origin) => {
        store.set(
            buffStateFamily(origin),
            character.buffs[origin].flatMap((buff) => {
                const skill = skills[buff.skillId];
                return skill ? [{ name: skill.name, level: buff.level }] : [];
            })
        );
    });

    Object.entries(character.customFormulas).forEach(([formulaId, formula]) => {
        if (formula) {
            store.set(customFormulaStateFamily(formulaId as CharactorStateType), formula);
        }
    });
};

export const calculateLegacyCharacter = (
    character: CharacterState
): Record<CharacterValueKey, number> => {
    const store = createStore();
    applyCharacterToLegacyStore(store, character);

    return Object.fromEntries(
        characterValueKeys.map((key) => [
            key,
            store.get(charactorStateFamily(key as CharactorStateType)),
        ])
    ) as Record<CharacterValueKey, number>;
};

export const compareLegacyCalculation = (
    character: CharacterState
): CalculationComparisonResult => {
    const legacyValues = calculateLegacyCharacter(character);
    const currentValues = calculateCharacter(character).values;
    const differences = characterValueKeys.flatMap((key): CalculationComparisonValue[] => {
        const legacy = legacyValues[key];
        const current = currentValues[key];
        const diff = current - legacy;

        return diff === 0 ? [] : [{
            key,
            legacy,
            current,
            diff,
        }];
    });

    return {
        legacyValues,
        currentValues,
        differences,
    };
};

