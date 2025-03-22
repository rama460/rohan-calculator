import { atomFamily } from "jotai/utils";
import { atom } from "jotai";
import { Item, itemTemplates, SynergyKey } from "../../components/static/items";
import { BuiltinOptionKeyType } from "../../components/static/options";
import { jobidState, raceidState } from "./bases";
import { RaceNameOrTrinityJobName, races } from "../../components/static/races";
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
] as const;

export type EquipmentSlotType = typeof equipmentSlotNames[number];
export type Equipments = {
    [key in typeof equipmentSlotNames[number]]: Item | undefined;
}

export type MinifiedItem = {
    // FIXME: change this to uniq id to shorten the data
    n: string;
    b?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    a?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    c?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    e?: number;
}


const minifiedEquipmentsState = atomFamily((param: keyof Equipments) =>
    atomWithCompressedHash<MinifiedItem | undefined>(param, undefined)
);

export const equipmentStateFamily = atomFamily((param: keyof Equipments) =>
    atom(
        (get) => unminifiedItem(get(minifiedEquipmentsState(param)), get(raceidState), get(jobidState), param),
        (_, set, newValue: Item | undefined) =>
            set(minifiedEquipmentsState(param), minifyItem(newValue))
    )
);
const minifyItem = (item: Item | undefined): MinifiedItem | undefined => {
    if (!item) {
        return undefined;
    }
    const minified: MinifiedItem = {
        n: item.name,
    }
    if (Object.keys(item.additionalOptions).length > 0) {
        minified.a = item.additionalOptions;
    }
    if (Object.keys(item.craftedOptions).length > 0) {
        minified.c = item.craftedOptions;
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
    const itemTemplate = itemTemplates[equipmentType].find((item) => item.name === minified.n);
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
    const item: Item = {
        name: minified.n,
        baseOptions: baseOptions,
        additionalOptions: minified.a ?? {},
        craftedOptions: minified.c ?? {},
        enchantLevel: minified.e ?? 0,
        icon: itemTemplate.icon,
        availableRaces: itemTemplate.availableRaces,
        synergyKey: itemTemplate.synergyKey,
        synergyOptions: itemTemplate.synergyOptions,
    }
    if ("type" in itemTemplate)
        return {
            ...item,
            type: itemTemplate.type,
        }
    return item;

}

export const selectedItemStateFamily = atomFamily((_: keyof Equipments) =>
    atom<Item | undefined>(undefined)
);

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