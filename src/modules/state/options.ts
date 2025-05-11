import { atomFamily } from "jotai/utils";
import { BuiltinOptionKeyType } from "../../static/options";
import { atom } from "jotai";
import { Atom } from "jotai";
import { Item, SynergyKey, synergyKeyNames } from "../../static/items";
import { equipmentSlotNames, EquipmentSlotType, equipmentStateFamily, equipmentSynergyStateFamily, SynergyOption } from "./items";
import { baseStatusState, initialStatusState, metaStatusState, statuses, StatusType } from "./statuses";
import { SkillOrigin, SKillOriginNames, skills } from "../../static/skill";
import { buffStateFamily } from "./skills";
import { heroLevelBOnusState, titleOptionState } from "./bases";



const atomWithAggregator = <T, K, V, U>(
    atomFamilyKeys: readonly T[],
    atomfamily: (key: T) => Atom<K | undefined>,
    aggregator: (keys: readonly T[], params: (K | undefined)[], key: U) => V,
    aggregationKey: U
) => {
    return atom((get) => {
        return aggregator(atomFamilyKeys, atomFamilyKeys.map((key) => get(atomfamily(key))), aggregationKey)
    });
}

export const atomWithAggregatorFamily = <T, K, V, U>(
    targetTypeNames: readonly T[],
    targetStateFamily: (key: T) => Atom<K | undefined>,
    aggregator: (keys: readonly T[], params: (K | undefined)[], key: U) => V
) => {

    return atomFamily((key: U) => {
        return atomWithAggregator<T, K, V, U>(targetTypeNames, targetStateFamily, aggregator, key);

    });
}

const equipmentOptionAggregator = (keys: readonly EquipmentSlotType[], params: (Item | undefined)[], aggregationKey: BuiltinOptionKeyType) => {
    const zip = <T, U>(a: readonly T[], b: U[]): [T, U][] => {
        if (a.length !== b.length) throw new Error("Arrays must be of the same length");
        return a.map((val, i) => [val, b[i]]);
    }
    return zip(keys, params).filter(([_, param]) => param !== undefined).map(([key, param]) => {
        if (key === "shield" && param !== undefined && "type" in param) {
            if (aggregationKey === "weaponBaseMeleeAttack" || aggregationKey === "weaponBaseRangeAttack" || aggregationKey === "weaponBaseMagicAttack") {
                return Math.floor((param?.baseOptions[aggregationKey] ?? 0) * 0.2) + Math.floor((param?.craftedOptions[aggregationKey] ?? 0) * 0.2);
            } else if (aggregationKey === "weaponEnchantMeleeAttack" || aggregationKey === "weaponEnchantRangeAttack" || aggregationKey === "weaponEnchantMagicAttack") {
                return Math.floor((param?.baseOptions[aggregationKey] ?? 0) * 1.5) + Math.floor((param?.additionalOptions[aggregationKey] ?? 0) * 1.5) + Math.floor((param?.craftedOptions[aggregationKey] ?? 0) * 1.5);
            } else {
                return Math.floor((param?.additionalOptions[aggregationKey] ?? 0) * 0.5) + Math.floor((param?.craftedOptions[aggregationKey] ?? 0) * 0.5) + Math.floor((param?.baseOptions[aggregationKey] ?? 0) * 0.5);
            }
        }
        return (param?.additionalOptions[aggregationKey] ?? 0) + (param?.craftedOptions[aggregationKey] ?? 0) + (param?.baseOptions[aggregationKey] ?? 0);
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

const synergyOptionAggregator = (_: readonly SynergyKey[], params: (SynergyOption[] | undefined)[], aggregationKey: BuiltinOptionKeyType) => {
    return params.filter((p) => p !== undefined).map((params) => {
        return params.map((param) => {
            return param[aggregationKey] ?? 0;
        }).reduce((acc, cur) => {
            return acc + cur;
        }, 0);
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

const buffOptionAggregator = (_: readonly SkillOrigin[], params: ({ name: string, level: number }[] | undefined)[], aggregationKey: BuiltinOptionKeyType) => {
    return params.filter((param) => param !== undefined).map((params) => {
        return params.map((param) => {
            return skills.find((skill) => skill.name === param.name)?.attributes[param.level - 1]?.[aggregationKey] ?? 0;
        }).reduce((acc, cur) => acc + cur, 0);
    }).reduce((acc, cur) => acc + cur, 0);
}

export const equipmentOptionStateFamily = atomWithAggregatorFamily(equipmentSlotNames, equipmentStateFamily, equipmentOptionAggregator);
export const buffOptionStateFamily = atomWithAggregatorFamily(SKillOriginNames, buffStateFamily, buffOptionAggregator);
export const equipmentSynergyOptionStateFamily = atomWithAggregatorFamily(synergyKeyNames, equipmentSynergyStateFamily, synergyOptionAggregator);

export const allOptionAggregorStateFamily = atomFamily((key: BuiltinOptionKeyType) => {
    return atom((get) => {
        const v = get(equipmentOptionStateFamily(key)) +
            get(equipmentSynergyOptionStateFamily(key)) +
            get(buffOptionStateFamily(key)) +
            get(titleOptionState(key)) +
            get(heroLevelBOnusState(key));
        if (statuses.some((status) => status === key)) {
            return v + get(baseStatusState(key as StatusType)) +
                get(metaStatusState(key as StatusType)) +
                get(initialStatusState(key as StatusType));
        }
        return v
    })
});