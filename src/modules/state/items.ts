import { atomFamily } from "jotai/utils";
import { atom } from "jotai";
import { BuiltinWeaponTypes, Item, itemTemplates, SynergyKey, WeaponType } from "../../static/items";
import { BuiltinOptionKeyType, BuiltinOptions } from "../../static/options";
import { baseOptionStateFamily } from "./bases";
import { RaceNameOrTrinityJobName, races } from "../../static/races";
import { atomWithCompressedHash } from "./common";
export const equipmentSlotNames = [
    "helmet",
    "gauntlet",
    "tunic",
    "leggings",
    "boots",
    "weapon",
    "shield",
    "arrow",
    "accessory1",
    "accessory2",
    "accessory3",
    "accessory4",
    "glasses",
    "hat",
    "earrings",
    "costume",
    "talismanH",
    "talismanG",
    "talismanI",
    "talismanB",
    "talismanJ",
    "talismanN",
    "talismanE",
    "talismanR",
    "talismanW",
    "talismanQ",
    "talismanS",
    "pet",
    "ride",
    "rune1",
    "rune2",
    "rune3",
    "rune4",
    "rune5",
    "rune6",
] as const;

export type EquipmentSlotType = typeof equipmentSlotNames[number];
export type Equipments = {
    [key in typeof equipmentSlotNames[number]]: Item | undefined;
}

// primitive atom for equipment panel on url hash always starts with "e"
export const minifiedEquipmentKeyMap: {
    [key in keyof Equipments]: string
} = {
    helmet: "eh",
    gauntlet: "eg",
    tunic: "et",
    leggings: "el",
    boots: "eb",
    weapon: "ew",
    shield: "es",
    arrow: "ea",
    accessory1: "e1",
    accessory2: "e2",
    accessory3: "e3",
    accessory4: "e4",
    glasses: "ecg",
    hat: "ech",
    earrings: "ece",
    costume: "ecc",
    talismanH: "eth",
    talismanG: "etg",
    talismanI: "eti",
    talismanB: "etb",
    talismanJ: "etj",
    talismanN: "etn",
    talismanE: "ete",
    talismanR: "etr",
    talismanW: "etw",
    talismanQ: "etq",
    talismanS: "ets",
    pet: "ep",
    ride: "er",
    rune1: "er1",
    rune2: "er2",
    rune3: "er3",
    rune4: "er4",
    rune5: "er5",
    rune6: "er6",
}

export type MinifiedItem = {
    // FIXME: change this to uniq id to shorten the data
    n: number;
    b?: {
        [key in number]?: number;
    }
    a?: {
        [key in number]?: number;
    }
    c?: {
        [key in number]?: number;
    }
    e?: number;
}


const minifiedEquipmentsState = atomFamily((param: keyof Equipments) =>
    atomWithCompressedHash<MinifiedItem | undefined>(minifiedEquipmentKeyMap[param], undefined)
);

export const equipmentStateFamily = atomFamily((param: keyof Equipments) =>
    atom(
        (get) => unminifiedItem(get(minifiedEquipmentsState(param)), get(baseOptionStateFamily("raceid")), get(baseOptionStateFamily("jobid")), param),
        (get, set, newValue: Item | undefined) =>
            set(minifiedEquipmentsState(param), minifyItem(newValue, get(baseOptionStateFamily("raceid")), get(baseOptionStateFamily("jobid")), param))
    )
);
const minifyItem = (item: Item | undefined, raceid: number, jobid: number, equipmentType: keyof Equipments): MinifiedItem | undefined => {
    if (!item) {
        return undefined;
    }
    const items = (equipmentType === "shield" && raceid === 0 && jobid === 1) ?
        itemTemplates[equipmentType].concat(itemTemplates["weapon"]) : itemTemplates[equipmentType];
    const index = items.findIndex((i) => i.name === item.name);
    if (index === -1) {
        throw new Error(`Item not found: ${item.name}`);
    }
    const minified: MinifiedItem = {
        n: index
    }
    const itemTemplate = items.at(index);
    if (!itemTemplate) {
        throw new Error(`Item not found: ${minified.n}`);
    }

    const racenameOrTrinityJobname = (races[raceid].name !== "Trinity" ? races[raceid].name : races[raceid].jobs[jobid].name) as RaceNameOrTrinityJobName
    const baseOptions = {
        ...itemTemplate.fixedBaseOptions ?? {},
        ...itemTemplate.enchantableBaseOptions?.[minified.e ?? 0] ?? {},
        ...itemTemplate.raceBaseOptions?.[racenameOrTrinityJobname] ?? {},
        ...itemTemplate.raceEnchantableBaseOptions?.[racenameOrTrinityJobname]?.[minified.e ?? 0] ?? {},
    }
    const updatedBaseOptions: {
        [key in BuiltinOptionKeyType]?: number
    } = Object.assign({}, ...Object.entries(item.baseOptions).filter(
        ([key, value]) => baseOptions[key as BuiltinOptionKeyType] !== value)
        .map(([key, value]) => ({ [key]: value })))

    if (Object.keys(updatedBaseOptions).length > 0) {
        minified.b = minifyOptions(updatedBaseOptions);
    }
    if (Object.keys(item.additionalOptions).length > 0) {
        minified.a = minifyOptions(item.additionalOptions);
    }
    if (Object.keys(item.craftedOptions).length > 0) {
        minified.c = minifyOptions(item.craftedOptions);
    }
    if (item.enchantLevel > 0) {
        minified.e = item.enchantLevel;
    }

    return minified;
}

// TODO: implement type checking
const unminifiedItem = (minified: MinifiedItem | undefined, raceid: number, jobid: number, equipmentType: keyof Equipments): Item | undefined => {
    if (!minified)
        return undefined;
    const itemTemplate = (equipmentType == "shield" && raceid === 0 && jobid === 1) ?
        itemTemplates[equipmentType].concat(itemTemplates["weapon"]).at(minified.n) : itemTemplates[equipmentType].at(minified.n);
    if (!itemTemplate) {
        throw new Error(`Item not found: ${minified.n}`);
    }
    const racenameOrTrinityJobname = (races[raceid].name !== "Trinity" ? races[raceid].name : races[raceid].jobs[jobid].name) as RaceNameOrTrinityJobName
    const baseOptions = {
        ...itemTemplate.fixedBaseOptions ?? {},
        ...itemTemplate.enchantableBaseOptions?.[minified.e ?? 0] ?? {},
        ...itemTemplate.raceBaseOptions?.[racenameOrTrinityJobname] ?? {},
        ...itemTemplate.raceEnchantableBaseOptions?.[racenameOrTrinityJobname]?.[minified.e ?? 0] ?? {},
    }
    Object.entries(minified.b ?? {}).map(([key, value]) => {
        baseOptions[getOptionNameForId(Number(key))] = value
    })
    const item: Item = {
        name: itemTemplate.name,
        baseOptions: baseOptions,
        additionalOptions: minified.a ? unminifyOptions(minified.a) : {},
        craftedOptions: minified.c ? unminifyOptions(minified.c) : {},
        enchantLevel: minified.e ?? 0,
        icon: itemTemplate.icon,
        availableRaces: itemTemplate.availableRaces,
        synergyKey: itemTemplate.synergyKey,
        synergyOptions: itemTemplate.synergyOptions,
    }
    if ("type" in itemTemplate && equipmentType === "weapon") {
        return {
            ...item,
            type: itemTemplate.type,
            baseOptions: "attackSpeed" in item.baseOptions ? { ...item.baseOptions } :
                { ...item.baseOptions, attackSpeed: BuiltinWeaponTypes[itemTemplate.type as WeaponType].attackSpeed }
        }
    } else if ("type" in itemTemplate && equipmentType === "shield") {
        // this is only for guardian dual sword style
        // no need to append attack speed
        // because it is already set in the main weapon
        return {
            ...item,
            type: itemTemplate.type,
        }
    }
    return item;

}


export const equipmentSynergyCountState = atomFamily((param: keyof Equipments) =>
    atom<number>((get) => {
        const item = get(equipmentStateFamily(param));
        if (!item || !item.synergyKey) {
            return 0;
        }
        return equipmentSlotNames.map((name) =>
            get(equipmentStateFamily(name))?.synergyKey).filter((key) => key === item.synergyKey).length;
    })
);

export type SynergyOption = {
    [key in BuiltinOptionKeyType]?: number
}

export const equipmentSynergyStateFamily = atomFamily((param: SynergyKey) =>
    atom<SynergyOption[] | undefined>((get) => {
        const length = equipmentSlotNames.map((name) =>
            get(equipmentStateFamily(name))?.synergyKey).filter((key) => key === param).length;
        const synergyOptions = equipmentSlotNames.map((name) => get(equipmentStateFamily(name))).filter(
            (item) => item?.synergyKey === param)?.[0]?.synergyOptions;
        if (!synergyOptions) {
            return undefined;
        }

        return Object.keys(synergyOptions).filter((synergyCount) => Number(synergyCount) <= length).map((synergyCount) => {
            return synergyOptions[Number(synergyCount)];
        })

    })
);


function getOptionIdForName(name: BuiltinOptionKeyType): number {
    return Object.keys(BuiltinOptions).findIndex((key) => key === name) ?? 0;
}
function getOptionNameForId(id: number): BuiltinOptionKeyType {
    return Object.keys(BuiltinOptions)[id] as BuiltinOptionKeyType
}

const minifyOptions = (options: { [key in BuiltinOptionKeyType]?: number }): { [id: number]: number } => {
    return Object.assign({}, ...Object.entries(options).map(([name, value]) => ({ [getOptionIdForName(name as BuiltinOptionKeyType)]: value })))
}
const unminifyOptions = (options: { [id: number]: number | undefined }): { [key in BuiltinOptionKeyType]?: number } => {
    return Object.assign({}, ...Object.entries(options).map(([id, value]) => ({ [getOptionNameForId(Number(id))]: value })))
}

export const resetAllEquipmentState = atom(null, (_get, set) => {
    equipmentSlotNames.forEach((name) => {
        set(equipmentStateFamily(name), undefined);
    })
})