import { BuiltinOptionKeyType } from "../../static/options";
import { equipmentSlotNames } from "../state/items";
import { statuses } from "../state/statuses";
import { OptionMap, OptionSource, ResolvedCharacter, ResolvedEquipment } from "../character/types";

const weaponBaseAttackKeys: BuiltinOptionKeyType[] = [
    "weaponBaseMeleeAttack",
    "weaponBaseRangeAttack",
    "weaponBaseMagicAttack",
];

const weaponEnchantAttackKeys: BuiltinOptionKeyType[] = [
    "weaponEnchantMeleeAttack",
    "weaponEnchantRangeAttack",
    "weaponEnchantMagicAttack",
];

const addOptionMaps = (...optionMaps: OptionMap[]): OptionMap => {
    return optionMaps.reduce<OptionMap>((acc, optionMap) => {
        Object.entries(optionMap).forEach(([key, value]) => {
            if (value === undefined) {
                return;
            }
            const optionKey = key as BuiltinOptionKeyType;
            acc[optionKey] = (acc[optionKey] ?? 0) + value;
        });

        return acc;
    }, {});
};

const scaleOptionMap = (options: OptionMap, scale: number): OptionMap => {
    return Object.fromEntries(
        Object.entries(options).map(([key, value]) => [
            key,
            value === undefined ? undefined : Math.floor(value * scale),
        ])
    ) as OptionMap;
};

const collectEquipmentOptions = (equipment: ResolvedEquipment): OptionMap => {
    if (equipment.slot !== "shield" || !equipment.template.type) {
        return addOptionMaps(
            equipment.options.base,
            equipment.options.additional,
            equipment.options.crafted
        );
    }

    const options = addOptionMaps(
        scaleOptionMap(equipment.options.base, 0.5),
        scaleOptionMap(equipment.options.additional, 0.5),
        scaleOptionMap(equipment.options.crafted, 0.5)
    );

    weaponBaseAttackKeys.forEach((key) => {
        const baseValue = equipment.options.base[key] ?? 0;
        const craftedValue = equipment.options.crafted[key] ?? 0;
        const value = Math.floor(baseValue * 0.2) + Math.floor(craftedValue * 0.2);
        if (value !== 0) {
            options[key] = value;
        }
    });

    weaponEnchantAttackKeys.forEach((key) => {
        const baseValue = equipment.options.base[key] ?? 0;
        const additionalValue = equipment.options.additional[key] ?? 0;
        const craftedValue = equipment.options.crafted[key] ?? 0;
        const value = Math.floor(baseValue * 1.5) +
            Math.floor(additionalValue * 1.5) +
            Math.floor(craftedValue * 1.5);
        if (value !== 0) {
            options[key] = value;
        }
    });

    return options;
};

const collectEquipmentSynergySources = (character: ResolvedCharacter): OptionSource[] => {
    const counts = new Map<string, number>();
    const firstEquipmentBySynergy = new Map<string, ResolvedEquipment>();

    equipmentSlotNames.forEach((slot) => {
        const equipment = character.resolvedEquipment[slot];
        const synergyKey = equipment?.template.synergyKey;
        if (!equipment || !synergyKey) {
            return;
        }

        counts.set(synergyKey, (counts.get(synergyKey) ?? 0) + 1);
        if (!firstEquipmentBySynergy.has(synergyKey)) {
            firstEquipmentBySynergy.set(synergyKey, equipment);
        }
    });

    return Array.from(counts.entries()).flatMap(([synergyKey, count]) => {
        const equipment = firstEquipmentBySynergy.get(synergyKey);
        if (!equipment?.template.synergyOptions) {
            return [];
        }

        return Object.entries(equipment.template.synergyOptions)
            .filter(([requiredCount]) => Number(requiredCount) <= count)
            .map(([requiredCount, options]): OptionSource => ({
                type: "equipmentSynergy",
                characterId: character.id,
                label: `${synergyKey}:${requiredCount}`,
                options,
            }));
    });
};

export const collectOptionSources = (character: ResolvedCharacter): OptionSource[] => {
    const statusSources = statuses.flatMap((status): OptionSource[] => [
        {
            type: "initialStatus",
            characterId: character.id,
            label: status,
            options: {
                [status]: character.race.initialStatus[status],
            },
        },
        {
            type: "baseStatus",
            characterId: character.id,
            label: status,
            options: {
                [status]: character.statuses.allocated[status],
            },
        },
        {
            type: "metaStatus",
            characterId: character.id,
            label: status,
            options: {
                [status]: character.statuses.meta[status],
            },
        },
    ]);

    const equipmentSources = equipmentSlotNames.flatMap((slot): OptionSource[] => {
        const equipment = character.resolvedEquipment[slot];
        if (!equipment) {
            return [];
        }

        return [{
            type: "equipment",
            characterId: character.id,
            slot,
            label: equipment.template.name,
            options: collectEquipmentOptions(equipment),
        }];
    });

    const buffSources = Object.values(character.resolvedBuffs).flatMap((buffs) =>
        buffs.map((buff): OptionSource => ({
            type: "buff",
            characterId: character.id,
            origin: buff.origin,
            label: buff.skill.name,
            options: buff.options,
        }))
    );

    const titleSources: OptionSource[] = character.title ? [{
        type: "title",
        characterId: character.id,
        label: character.title.name,
        options: character.title.options,
    }] : [];

    const heroBonusSources: OptionSource[] = character.base.heroLevel > 0 ? [{
        type: "heroBonus",
        characterId: character.id,
        label: "heroLevel",
        options: {
            plusAllStatus: 100,
        },
    }] : [];

    return [
        ...statusSources,
        ...equipmentSources,
        ...collectEquipmentSynergySources(character),
        ...buffSources,
        ...titleSources,
        ...heroBonusSources,
    ];
};

