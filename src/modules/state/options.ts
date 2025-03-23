import { atomFamily } from "jotai/utils";
import { BuiltinOptionKeyType } from "../../components/static/options";
import { atom } from "jotai";
import { Atom } from "jotai";
import { Item, synergyKeyNames } from "../../components/static/items";
import { equipmentSlotNames, equipmentStateFamily, equipmentSynergyStateFamily, SynergyOption } from "./items";
import { baseStatusState, initialStatusState, metaStatusState, statuses, StatusType } from "./statuses";
import { SKillOriginNames, skills } from "../../components/static/skill";
import { buffStateFamily } from "./skills";
import { heroLevelBOnusState, titleOptionState } from "./bases";



const atomWithAggregator = <T, K, V, U>(
    atomFamilyKeys: readonly T[],
    atomfamily: (key: T) => Atom<K | undefined>,
    aggregator: (param: (K | undefined)[], key: U) => V,
    aggregationKey: U
) => {
    return atom((get) => {
        return aggregator(atomFamilyKeys.map((key) => get(atomfamily(key))), aggregationKey)
    });
}

export const atomWithAggregatorFamily = <T, K, V, U>(
    targetTypeNames: readonly T[],
    targetStateFamily: (key: T) => Atom<K | undefined>,
    aggregator: (params: (K | undefined)[], key: U) => V
) => {

    return atomFamily((key: U) => {
        return atomWithAggregator<T, K, V, U>(targetTypeNames, targetStateFamily, aggregator, key);

    });
}

const equipmentOptionAggregator = (params: (Item | undefined)[], aggregationKey: BuiltinOptionKeyType) => {
    return params.filter((param) => param !== undefined).map((param) => {
        return (param?.additionalOptions[aggregationKey] ?? 0) + (param?.craftedOptions[aggregationKey] ?? 0) + (param?.baseOptions[aggregationKey] ?? 0);
    }).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

const synergyOptionAggregator = (params: (SynergyOption[] | undefined)[], aggregationKey: BuiltinOptionKeyType) => {
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

const buffOptionAggregator = (params: ({ name: string, level: number }[] | undefined)[], aggregationKey: BuiltinOptionKeyType) => {
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