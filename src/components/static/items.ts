import unknown from "../../assets/unknown.png";

import bow_grand_kaiser_onixy from "../../assets/items/bow_grand_kaiser_onixy.png";
import dagger_zeta_obsidian from "../../assets/items/dagger_zeta_obsidian.png";

import helmet_magnus_celestite from "../../assets/items/helmet_magnus_celestite.png";
import helmet_zeta_obsidian from "../../assets/items/helmet_zeta_obsidian.png";
import helmet_grand_kaiser_onixy from "../../assets/items/helmet_grand_kaiser_onixy.png";
import helmet_igniel from "../../assets/items/helmet_igniel.png";

import gauntlet_magnus_celestite from "../../assets/items/gauntlet_magnus_celestite.png";
import gauntlet_zeta_obsidian from "../../assets/items/gauntlet_zeta_obsidian.png";
import gauntlet_grand_kaiser_onixy from "../../assets/items/gauntlet_grand_kaiser_onixy.png";
import gauntlet_igniel from "../../assets/items/gauntlet_igniel.png";

import tunic_magnus_celestite from "../../assets/items/tunic_magnus_celestite.png";
import tunic_zeta_obsidian from "../../assets/items/tunic_zeta_obsidian.png";
import tunic_grand_kaiser_onixy from "../../assets/items/tunic_grand_kaiser_onixy.png";
import tunic_igniel from "../../assets/items/tunic_igniel.png";

import leggings_magnus_celestite from "../../assets/items/leggings_magnus_celestite.png";
import leggings_zeta_obsidian from "../../assets/items/leggings_zeta_obsidian.png";
import leggings_grand_kaiser_onixy from "../../assets/items/leggings_grand_kaiser_onixy.png";
import leggings_igniel from "../../assets/items/leggings_igniel.png";

import boots_magnus_celestite from "../../assets/items/boots_magnus_celestite.png";
import boots_zeta_obsidian from "../../assets/items/boots_zeta_obsidian.png";
import boots_grand_kaiser_onixy from "../../assets/items/boots_grand_kaiser_onixy.png";
import boots_igniel from "../../assets/items/boots_igniel.png";

import shield_zeta_obsidian from "../../assets/items/shield_zeta_obsidian.png";
import guarder_zeno_opaniel from "../../assets/items/guarder_zeno_opaniel.png";
import guarder_igniel from "../../assets/items/guarder_igniel.png";

import arrow_tourmaline from "../../assets/items/arrow_tourmaline.png";
import arrow_tourmaline_bolt from "../../assets/items/arrow_tourmaline_bolt.png";

import accessory_chaos_ring from "../../assets/items/accessory_chaos_ring.png";
import accessory_chaos_brooch from "../../assets/items/accessory_chaos_brooch.png";
import accessory_chaos_bracelet from "../../assets/items/accessory_chaos_bracelet.png";
import accessory_chaos_necklace from "../../assets/items/accessory_chaos_necklace.png";

import hat_roha from "../../assets/items/hat_roha.png";
import hat_variant from "../../assets/items/hat_variant.png";
import glasses_roha from "../../assets/items/glasses_roha.png";
import glasses_variant from "../../assets/items/glasses_variant.png";
import earrings_roha from "../../assets/items/earrings_roha.png";
import earrings_variant from "../../assets/items/earrings_variant.png";
import costume_roha from "../../assets/items/costume_roha.png";

import talisman_b_1 from "../../assets/items/talisman_b_1.png";
import talisman_g_1 from "../../assets/items/talisman_g_1.png";
import talisman_h_1 from "../../assets/items/talisman_h_1.png";
import talisman_i_1 from "../../assets/items/talisman_i_1.png";
import talisman_j_1 from "../../assets/items/talisman_j_1.png";
import talisman_n_1 from "../../assets/items/talisman_n_1.png";

import talisman_q_8th_private from "../../assets/items/talisman_q_8th_private.png";
import talisman_q_7th_private from "../../assets/items/talisman_q_7th_private.png";
import talisman_q_6th_private from "../../assets/items/talisman_q_6th_private.png";
import talisman_q_5th_private from "../../assets/items/talisman_q_5th_private.png";
import talisman_q_4th_private from "../../assets/items/talisman_q_4th_private.png";
import talisman_q_3rd_private from "../../assets/items/talisman_q_3rd_private.png";
import talisman_q_2nd_private from "../../assets/items/talisman_q_2nd_private.png";
import talisman_q_1st_private from "../../assets/items/talisman_q_1st_private.png";
import talisman_q_1star_officer from "../../assets/items/talisman_q_1star_officer.png";
import talisman_q_2star_officer from "../../assets/items/talisman_q_2star_officer.png";
import talisman_q_3star_officer from "../../assets/items/talisman_q_3star_officer.png";
import talisman_q_4star_officer from "../../assets/items/talisman_q_4star_officer.png";
import talisman_q_5star_officer from "../../assets/items/talisman_q_5star_officer.png";
import talisman_q_commander from "../../assets/items/talisman_q_commander.png";
import talisman_q_supreme_commander from "../../assets/items/talisman_q_supreme_commander.png";

import talisman_r_victorious from "../../assets/items/talisman_r_victorious.png";
import talisman_s_1 from "../../assets/items/talisman_s_1.png";
import talisman_w_mask from "../../assets/items/talisman_w_mask.png";

import { BuiltinOptionKeyType } from "./options";
import { RaceNameOrTrinityJobName, races } from "./races";

export type BaseItemTemplate = {
    name: string;
    icon: string;
    availableRaces?: RaceNameOrTrinityJobName[];
    fixedBaseOptions?: {
        [key in BuiltinOptionKeyType]?: number;
    };
    enchantableBaseOptions?: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        }
    };
    raceBaseOptions?: {
        [key in RaceNameOrTrinityJobName]?: {
            [key in BuiltinOptionKeyType]?: number;
        }
    };
    raceEnchantableBaseOptions?: {
        [key in RaceNameOrTrinityJobName]?: {
            [key: number]: {
                [key in BuiltinOptionKeyType]?: number;
            }
        }
    };
    sockets?: number;
    synergyOptions?: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        };
    };
    synergyKey?: SynergyKey;
    type?: WeaponType;
}
export type FixedItemTemplate = {
    fixedBaseOptions: {
        [key in BuiltinOptionKeyType]?: number;
    };
} & BaseItemTemplate;

export type EnchantableItemTemplate = {
    enchantableBaseOptions: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        }
    };
} & BaseItemTemplate;

export type RaceItemTemplate = {
    raceBaseOptions: {
        [key in RaceNameOrTrinityJobName]?: {
            [key in BuiltinOptionKeyType]?: number;
        }
    }
} & BaseItemTemplate;
export type RaceEnchantableItemTemplate = {
    raceEnchantableBaseOptions: {
        [key in RaceNameOrTrinityJobName]?: {
            [key: number]: {
                [key in BuiltinOptionKeyType]?: number;
            }
        }
    }
} & BaseItemTemplate;

export type SetItemTemplate = {
    synergyOptions: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        };
    };
    synergyKey: SynergyKey;
} & BaseItemTemplate;

export type Item = {
    name: string;
    icon: string;
    availableRaces?: RaceNameOrTrinityJobName[];
    enchantLevel: number;
    baseOptions: {
        [key in BuiltinOptionKeyType]?: number;
    };
    craftedOptions: {
        [key in BuiltinOptionKeyType]?: number;
    }
    additionalOptions: {
        [key in BuiltinOptionKeyType]?: number;
    };
    synergyOptions?: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        };
    };
    synergyKey?: SynergyKey;
    type?: WeaponType;
}

export type ItemTemplate = FixedItemTemplate | EnchantableItemTemplate | SetItemTemplate | RaceItemTemplate | RaceEnchantableItemTemplate;

export const getInitialBaseOtions = (itemTemplate: ItemTemplate, raceid: number, jobid: number, enchantLevel: number): { [key in BuiltinOptionKeyType]?: number } => {
    let baseOptions = {};
    if (itemTemplate.fixedBaseOptions) {
        baseOptions = { ...itemTemplate.fixedBaseOptions };
    }
    if (itemTemplate.enchantableBaseOptions) {
        baseOptions = {
            ...baseOptions,
            ...itemTemplate.enchantableBaseOptions[enchantLevel] ?? {}
        };

    }
    // if raceid is 7 (trinity), options are differernt by jobid (rumir or noir), and dont care about mar.
    const racenameOrTrinityJobname = (races[raceid].name !== "Trinity" ? races[raceid].name : races[raceid].jobs[jobid].name) as RaceNameOrTrinityJobName;
    if (itemTemplate.raceBaseOptions) {
        baseOptions = {
            ...baseOptions,
            ...itemTemplate.raceBaseOptions[racenameOrTrinityJobname]
        }
    }
    if (itemTemplate.raceEnchantableBaseOptions) {
        baseOptions = {
            ...baseOptions,
            ...itemTemplate.raceEnchantableBaseOptions[racenameOrTrinityJobname]?.[enchantLevel] ?? {}
        }
    }
    return baseOptions
}
export const synergyKeyNames = [
    "roha",
    "on",
    "edne",
    "siva",
    "apocalypse",
    "hellfire",
    "nosferatu",
    "ganesha4",
    "ganesha3",
    "ganesha2",
    "ganesha1",
    "annihilate4",
    "annihilate3",
    "annihilate2",
    "annihilate1",
    "crimson4",
    "crimson3",
    "crimson2",
    "crimson1",
    "immortal4",
    "immortal3",
    "immortal2",
    "immortal1",
    "variant",
    "extend",
    "gargantua",
    "disaster",
    "catastrophe",
    "goliath",
    "chaos",
    "megas",
    "hesperos",
    "karlas",
    "diegas",
    "kasim",
    "onyxArmor",
    "obsidianArmor",
    "celestiteArmor",
    "ignielArmor"
] as const;
export type SynergyKey = typeof synergyKeyNames[number];
export type WeaponType = keyof typeof BuiltinWeaponTypes;
export const BuiltinWeaponTypes = {
    "sword": {
        name: "sword",
        displayName: "片手剣",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        attackSpeed: 900,
    },
    "dagger": {
        name: "dagger",
        displayName: "短剣",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        attackSpeed: 700,
    },
    "blunt": {
        name: "blunt",
        displayName: "片手鈍器",
        availableRaces: ["Human", "Elf", "Giant"],
        attackSpeed: 900,
    },
    "axe": {
        name: "axe",
        displayName: "片手斧",
        availableRaces: ["Human", "Giant"],
        attackSpeed: 1200,
    },
    "katar": {
        name: "katar",
        displayName: "カタール",
        availableRaces: ["Dan"],
        attackSpeed: 700,
    },
    "zen": {
        name: "zen",
        displayName: "ゼン",
        availableRaces: ["Dekan"],
        attackSpeed: 1300,
    },
    "dualsword": {
        name: "dualsword",
        displayName: "デュアルソード",
        availableRaces: ["Giant"],
        attackSpeed: 900,
    },
    "polearm": {
        name: "polearm",
        displayName: "ポールアーム",
        availableRaces: ["Giant"],
        attackSpeed: 1600,
    },
    "bow": {
        name: "bow",
        displayName: "弓",
        availableRaces: ["HalfElf"],
        attackSpeed: 1000,
    },
    "crossbow": {
        name: "crossbow",
        displayName: "石弓",
        availableRaces: ["HalfElf"],
        attackSpeed: 1800,
    },
    "wand": {
        name: "wand",
        displayName: "ワンド",
        availableRaces: ["Elf", "DarkElf"],
        attackSpeed: 2000,
    },
    "staff": {
        name: "staff",
        displayName: "スタッフ",
        availableRaces: ["Elf", "DarkElf"],
        attackSpeed: 2500,
    },
    "orb": {
        name: "orb",
        displayName: "オーブ",
        availableRaces: ["Rumir"],
        attackSpeed: 2000,
    },
    "glove": {
        name: "glove",
        displayName: "グローブ",
        availableRaces: ["Noir"],
        attackSpeed: 900,
    },
}
export type WeaponTemplate = {
    type: WeaponType;
} & ItemTemplate;

export const weapons: WeaponTemplate[] = [
    {
        name: "マグヌスセレスタイトダガー",
        icon: unknown,
        type: "dagger",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2142,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 240,
            },
            1: {
                "weaponEnchantMeleeAttack": 183,
                "weaponEnchantRangeAttack": 183,
                "weaponEnchantMagicAttack": 183,
                "plusAttack": 423,
            },
            2: {
                "weaponEnchantMeleeAttack": 202,
                "weaponEnchantRangeAttack": 202,
                "weaponEnchantMagicAttack": 202,
                "plusAttack": 442,
            },
            3: {
                "weaponEnchantMeleeAttack": 222,
                "weaponEnchantRangeAttack": 222,
                "weaponEnchantMagicAttack": 222,
                "plusAttack": 462,
            },
            4: {
                "weaponEnchantMeleeAttack": 244,
                "weaponEnchantRangeAttack": 244,
                "weaponEnchantMagicAttack": 244,
                "plusAttack": 484,
            },
            5: {
                "weaponEnchantMeleeAttack": 269,
                "weaponEnchantRangeAttack": 269,
                "weaponEnchantMagicAttack": 269,
                "plusAttack": 509,
            },
            6: {
                "weaponEnchantMeleeAttack": 296,
                "weaponEnchantRangeAttack": 296,
                "weaponEnchantMagicAttack": 296,
                "plusAttack": 536,
            },
            7: {
                "weaponEnchantMeleeAttack": 325,
                "weaponEnchantRangeAttack": 325,
                "weaponEnchantMagicAttack": 325,
                "plusAttack": 565,
            },
            8: {
                "weaponEnchantMeleeAttack": 358,
                "weaponEnchantRangeAttack": 358,
                "weaponEnchantMagicAttack": 358,
                "plusAttack": 598,
            },
            9: {
                "weaponEnchantMeleeAttack": 394,
                "weaponEnchantRangeAttack": 394,
                "weaponEnchantMagicAttack": 394,
                "plusAttack": 634,
            },
            10: {
                "weaponEnchantMeleeAttack": 433,
                "weaponEnchantRangeAttack": 433,
                "weaponEnchantMagicAttack": 433,
                "plusAttack": 673,
            },
            11: {
                "weaponEnchantMeleeAttack": 476,
                "weaponEnchantRangeAttack": 476,
                "weaponEnchantMagicAttack": 476,
                "plusAttack": 716,
            },
            12: {
                "weaponEnchantMeleeAttack": 524,
                "weaponEnchantRangeAttack": 524,
                "weaponEnchantMagicAttack": 524,
                "plusAttack": 764,
            },
            13: {
                "weaponEnchantMeleeAttack": 576,
                "weaponEnchantRangeAttack": 576,
                "weaponEnchantMagicAttack": 576,
                "plusAttack": 816,
            },
            14: {
                "weaponEnchantMeleeAttack": 634,
                "weaponEnchantRangeAttack": 634,
                "weaponEnchantMagicAttack": 634,
                "plusAttack": 874,
            },
            15: {
                "weaponEnchantMeleeAttack": 697,
                "weaponEnchantRangeAttack": 697,
                "weaponEnchantMagicAttack": 697,
                "plusAttack": 937,
            },
            16: {
                "weaponEnchantMeleeAttack": 767,
                "weaponEnchantRangeAttack": 767,
                "weaponEnchantMagicAttack": 767,
                "plusAttack": 1007,
            },
            17: {
                "weaponEnchantMeleeAttack": 844,
                "weaponEnchantRangeAttack": 844,
                "weaponEnchantMagicAttack": 844,
                "plusAttack": 1084,
            },
            18: {
                "weaponEnchantMeleeAttack": 928,
                "weaponEnchantRangeAttack": 928,
                "weaponEnchantMagicAttack": 928,
                "plusAttack": 1168,
            },
            19: {
                "weaponEnchantMeleeAttack": 1021,
                "weaponEnchantRangeAttack": 1021,
                "weaponEnchantMagicAttack": 1021,
                "plusAttack": 1261,
            },
            20: {
                "weaponEnchantMeleeAttack": 1123,
                "weaponEnchantRangeAttack": 1123,
                "weaponEnchantMagicAttack": 1123,
                "plusAttack": 1363,
            },
            21: {
                "weaponEnchantMeleeAttack": 1235,
                "weaponEnchantRangeAttack": 1235,
                "weaponEnchantMagicAttack": 1235,
                "plusAttack": 1475,
            },
            22: {
                "weaponEnchantMeleeAttack": 1359,
                "weaponEnchantRangeAttack": 1359,
                "weaponEnchantMagicAttack": 1359,
                "plusAttack": 1599,
            },
            23: {
                "weaponEnchantMeleeAttack": 1495,
                "weaponEnchantRangeAttack": 1495,
                "weaponEnchantMagicAttack": 1495,
                "plusAttack": 1735,
            },
            24: {
                "weaponEnchantMeleeAttack": 1645,
                "weaponEnchantRangeAttack": 1645,
                "weaponEnchantMagicAttack": 1645,
                "plusAttack": 1885,
            },
            25: {
                "weaponEnchantMeleeAttack": 1808,
                "weaponEnchantRangeAttack": 1808,
                "weaponEnchantMagicAttack": 1808,
                "plusAttack": 2048,
            },
            26: {
                "weaponEnchantMeleeAttack": 1990,
                "weaponEnchantRangeAttack": 1990,
                "weaponEnchantMagicAttack": 1990,
                "plusAttack": 2230,
            },
            27: {
                "weaponEnchantMeleeAttack": 2189,
                "weaponEnchantRangeAttack": 2189,
                "weaponEnchantMagicAttack": 2189,
                "plusAttack": 2429,
            },
            28: {
                "weaponEnchantMeleeAttack": 2408,
                "weaponEnchantRangeAttack": 2408,
                "weaponEnchantMagicAttack": 2408,
                "plusAttack": 2648,
            },
            29: {
                "weaponEnchantMeleeAttack": 2648,
                "weaponEnchantRangeAttack": 2648,
                "weaponEnchantMagicAttack": 2648,
                "plusAttack": 2888,
            },
            30: {
                "weaponEnchantMeleeAttack": 2913,
                "weaponEnchantRangeAttack": 2913,
                "weaponEnchantMagicAttack": 2913,
                "plusAttack": 3153,
            }
        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトソード",
        icon: unknown,
        type: "sword",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2561,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 312,
            },
            1: {
                "weaponEnchantMeleeAttack": 220,
                "weaponEnchantRangeAttack": 220,
                "weaponEnchantMagicAttack": 220,
                "plusAttack": 532,
            },
            2: {
                "weaponEnchantMeleeAttack": 242,
                "weaponEnchantRangeAttack": 242,
                "weaponEnchantMagicAttack": 242,
                "plusAttack": 554,
            },
            3: {
                "weaponEnchantMeleeAttack": 265,
                "weaponEnchantRangeAttack": 265,
                "weaponEnchantMagicAttack": 265,
                "plusAttack": 577,
            },
            4: {
                "weaponEnchantMeleeAttack": 293,
                "weaponEnchantRangeAttack": 293,
                "weaponEnchantMagicAttack": 293,
                "plusAttack": 605,
            },
            5: {
                "weaponEnchantMeleeAttack": 321,
                "weaponEnchantRangeAttack": 321,
                "weaponEnchantMagicAttack": 321,
                "plusAttack": 633,
            },
            6: {
                "weaponEnchantMeleeAttack": 354,
                "weaponEnchantRangeAttack": 354,
                "weaponEnchantMagicAttack": 354,
                "plusAttack": 666,
            },
            7: {
                "weaponEnchantMeleeAttack": 389,
                "weaponEnchantRangeAttack": 389,
                "weaponEnchantMagicAttack": 389,
                "plusAttack": 701,
            },
            8: {
                "weaponEnchantMeleeAttack": 428,
                "weaponEnchantRangeAttack": 428,
                "weaponEnchantMagicAttack": 428,
                "plusAttack": 740,
            },
            9: {
                "weaponEnchantMeleeAttack": 471,
                "weaponEnchantRangeAttack": 471,
                "weaponEnchantMagicAttack": 471,
                "plusAttack": 783,
            },
            10: {
                "weaponEnchantMeleeAttack": 517,
                "weaponEnchantRangeAttack": 517,
                "weaponEnchantMagicAttack": 517,
                "plusAttack": 829,
            },
            11: {
                "weaponEnchantMeleeAttack": 569,
                "weaponEnchantRangeAttack": 569,
                "weaponEnchantMagicAttack": 569,
                "plusAttack": 881,
            },
            12: {
                "weaponEnchantMeleeAttack": 627,
                "weaponEnchantRangeAttack": 627,
                "weaponEnchantMagicAttack": 627,
                "plusAttack": 939,
            },
            13: {
                "weaponEnchantMeleeAttack": 689,
                "weaponEnchantRangeAttack": 689,
                "weaponEnchantMagicAttack": 689,
                "plusAttack": 1001,
            },
            14: {
                "weaponEnchantMeleeAttack": 758,
                "weaponEnchantRangeAttack": 758,
                "weaponEnchantMagicAttack": 758,
                "plusAttack": 1070,
            },
            15: {
                "weaponEnchantMeleeAttack": 833,
                "weaponEnchantRangeAttack": 833,
                "weaponEnchantMagicAttack": 833,
                "plusAttack": 1145,
            },
            16: {
                "weaponEnchantMeleeAttack": 917,
                "weaponEnchantRangeAttack": 917,
                "weaponEnchantMagicAttack": 917,
                "plusAttack": 1229,
            },
            17: {
                "weaponEnchantMeleeAttack": 1009,
                "weaponEnchantRangeAttack": 1009,
                "weaponEnchantMagicAttack": 1009,
                "plusAttack": 1321,
            },
            18: {
                "weaponEnchantMeleeAttack": 1110,
                "weaponEnchantRangeAttack": 1110,
                "weaponEnchantMagicAttack": 1110,
                "plusAttack": 1422,
            },
            19: {
                "weaponEnchantMeleeAttack": 1221,
                "weaponEnchantRangeAttack": 1221,
                "weaponEnchantMagicAttack": 1221,
                "plusAttack": 1533,
            },
            20: {
                "weaponEnchantMeleeAttack": 1343,
                "weaponEnchantRangeAttack": 1343,
                "weaponEnchantMagicAttack": 1343,
                "plusAttack": 1655,
            },
            21: {
                "weaponEnchantMeleeAttack": 1477,
                "weaponEnchantRangeAttack": 1477,
                "weaponEnchantMagicAttack": 1477,
                "plusAttack": 1789,
            },
            22: {
                "weaponEnchantMeleeAttack": 1625,
                "weaponEnchantRangeAttack": 1625,
                "weaponEnchantMagicAttack": 1625,
                "plusAttack": 1937,
            },
            23: {
                "weaponEnchantMeleeAttack": 1788,
                "weaponEnchantRangeAttack": 1788,
                "weaponEnchantMagicAttack": 1788,
                "plusAttack": 2100,
            },
            24: {
                "weaponEnchantMeleeAttack": 1966,
                "weaponEnchantRangeAttack": 1966,
                "weaponEnchantMagicAttack": 1966,
                "plusAttack": 2278,
            },
            25: {
                "weaponEnchantMeleeAttack": 2162,
                "weaponEnchantRangeAttack": 2162,
                "weaponEnchantMagicAttack": 2162,
                "plusAttack": 2474,
            },
            26: {
                "weaponEnchantMeleeAttack": 2379,
                "weaponEnchantRangeAttack": 2379,
                "weaponEnchantMagicAttack": 2379,
                "plusAttack": 2691,
            },
            27: {
                "weaponEnchantMeleeAttack": 2617,
                "weaponEnchantRangeAttack": 2617,
                "weaponEnchantMagicAttack": 2617,
                "plusAttack": 2929,
            },
            28: {
                "weaponEnchantMeleeAttack": 2878,
                "weaponEnchantRangeAttack": 2878,
                "weaponEnchantMagicAttack": 2878,
                "plusAttack": 3190,
            },
            29: {
                "weaponEnchantMeleeAttack": 3166,
                "weaponEnchantRangeAttack": 3166,
                "weaponEnchantMagicAttack": 3166,
                "plusAttack": 3478,
            },
            30: {
                "weaponEnchantMeleeAttack": 3483,
                "weaponEnchantRangeAttack": 3483,
                "weaponEnchantMagicAttack": 3483,
                "plusAttack": 3795,
            }

        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトクラブ",
        icon: unknown,
        type: "blunt",
        availableRaces: ["Human", "Elf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2535,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 288,
            },
            1: {
                "weaponEnchantMeleeAttack": 217,
                "weaponEnchantRangeAttack": 217,
                "weaponEnchantMagicAttack": 217,
                "plusAttack": 505,
            },
            2: {
                "weaponEnchantMeleeAttack": 239,
                "weaponEnchantRangeAttack": 239,
                "weaponEnchantMagicAttack": 239,
                "plusAttack": 527,
            },
            3: {
                "weaponEnchantMeleeAttack": 263,
                "weaponEnchantRangeAttack": 263,
                "weaponEnchantMagicAttack": 263,
                "plusAttack": 551,
            },
            4: {
                "weaponEnchantMeleeAttack": 290,
                "weaponEnchantRangeAttack": 290,
                "weaponEnchantMagicAttack": 290,
                "plusAttack": 578,
            },
            5: {
                "weaponEnchantMeleeAttack": 318,
                "weaponEnchantRangeAttack": 318,
                "weaponEnchantMagicAttack": 318,
                "plusAttack": 606,
            },
            6: {
                "weaponEnchantMeleeAttack": 350,
                "weaponEnchantRangeAttack": 350,
                "weaponEnchantMagicAttack": 350,
                "plusAttack": 638,
            },
            7: {
                "weaponEnchantMeleeAttack": 385,
                "weaponEnchantRangeAttack": 385,
                "weaponEnchantMagicAttack": 385,
                "plusAttack": 673,
            },
            8: {
                "weaponEnchantMeleeAttack": 424,
                "weaponEnchantRangeAttack": 424,
                "weaponEnchantMagicAttack": 424,
                "plusAttack": 712,
            },
            9: {
                "weaponEnchantMeleeAttack": 465,
                "weaponEnchantRangeAttack": 465,
                "weaponEnchantMagicAttack": 465,
                "plusAttack": 753,
            },
            10: {
                "weaponEnchantMeleeAttack": 512,
                "weaponEnchantRangeAttack": 512,
                "weaponEnchantMagicAttack": 512,
                "plusAttack": 800,
            },
            11: {
                "weaponEnchantMeleeAttack": 564,
                "weaponEnchantRangeAttack": 564,
                "weaponEnchantMagicAttack": 564,
                "plusAttack": 852,
            },
            12: {
                "weaponEnchantMeleeAttack": 620,
                "weaponEnchantRangeAttack": 620,
                "weaponEnchantMagicAttack": 620,
                "plusAttack": 908,
            },
            13: {
                "weaponEnchantMeleeAttack": 683,
                "weaponEnchantRangeAttack": 683,
                "weaponEnchantMagicAttack": 683,
                "plusAttack": 971,
            },
            14: {
                "weaponEnchantMeleeAttack": 751,
                "weaponEnchantRangeAttack": 751,
                "weaponEnchantMagicAttack": 751,
                "plusAttack": 1039,
            },
            15: {
                "weaponEnchantMeleeAttack": 826,
                "weaponEnchantRangeAttack": 826,
                "weaponEnchantMagicAttack": 826,
                "plusAttack": 1114,
            },
            16: {
                "weaponEnchantMeleeAttack": 909,
                "weaponEnchantRangeAttack": 909,
                "weaponEnchantMagicAttack": 909,
                "plusAttack": 1197,
            },
            17: {
                "weaponEnchantMeleeAttack": 998,
                "weaponEnchantRangeAttack": 998,
                "weaponEnchantMagicAttack": 998,
                "plusAttack": 1286,
            },
            18: {
                "weaponEnchantMeleeAttack": 1099,
                "weaponEnchantRangeAttack": 1099,
                "weaponEnchantMagicAttack": 1099,
                "plusAttack": 1387,
            },
            19: {
                "weaponEnchantMeleeAttack": 1209,
                "weaponEnchantRangeAttack": 1209,
                "weaponEnchantMagicAttack": 1209,
                "plusAttack": 1497,
            },
            20: {
                "weaponEnchantMeleeAttack": 1330,
                "weaponEnchantRangeAttack": 1330,
                "weaponEnchantMagicAttack": 1330,
                "plusAttack": 1618,
            },
            21: {
                "weaponEnchantMeleeAttack": 1463,
                "weaponEnchantRangeAttack": 1463,
                "weaponEnchantMagicAttack": 1463,
                "plusAttack": 1751,
            },
            22: {
                "weaponEnchantMeleeAttack": 1609,
                "weaponEnchantRangeAttack": 1609,
                "weaponEnchantMagicAttack": 1609,
                "plusAttack": 1897,
            },
            23: {
                "weaponEnchantMeleeAttack": 1769,
                "weaponEnchantRangeAttack": 1769,
                "weaponEnchantMagicAttack": 1769,
                "plusAttack": 2057,
            },
            24: {
                "weaponEnchantMeleeAttack": 1946,
                "weaponEnchantRangeAttack": 1946,
                "weaponEnchantMagicAttack": 1946,
                "plusAttack": 2234,
            },
            25: {
                "weaponEnchantMeleeAttack": 2141,
                "weaponEnchantRangeAttack": 2141,
                "weaponEnchantMagicAttack": 2141,
                "plusAttack": 2429,
            },
            26: {
                "weaponEnchantMeleeAttack": 2356,
                "weaponEnchantRangeAttack": 2356,
                "weaponEnchantMagicAttack": 2356,
                "plusAttack": 2644,
            },
            27: {
                "weaponEnchantMeleeAttack": 2591,
                "weaponEnchantRangeAttack": 2591,
                "weaponEnchantMagicAttack": 2591,
                "plusAttack": 2879,
            },
            28: {
                "weaponEnchantMeleeAttack": 2850,
                "weaponEnchantRangeAttack": 2850,
                "weaponEnchantMagicAttack": 2850,
                "plusAttack": 3138,
            },
            29: {
                "weaponEnchantMeleeAttack": 3136,
                "weaponEnchantRangeAttack": 3136,
                "weaponEnchantMagicAttack": 3136,
                "plusAttack": 3424,
            },
            30: {
                "weaponEnchantMeleeAttack": 3449,
                "weaponEnchantRangeAttack": 3449,
                "weaponEnchantMagicAttack": 3449,
                "plusAttack": 3737,
            }


        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトアクス",
        icon: unknown,
        type: "axe",
        availableRaces: ["Human", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3081,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 360,
            },
            1: {
                "weaponEnchantMeleeAttack": 264,
                "weaponEnchantRangeAttack": 264,
                "weaponEnchantMagicAttack": 264,
                "plusAttack": 624,
            },
            2: {
                "weaponEnchantMeleeAttack": 290,
                "weaponEnchantRangeAttack": 290,
                "weaponEnchantMagicAttack": 290,
                "plusAttack": 650,
            },
            3: {
                "weaponEnchantMeleeAttack": 320,
                "weaponEnchantRangeAttack": 320,
                "weaponEnchantMagicAttack": 320,
                "plusAttack": 680,
            },
            4: {
                "weaponEnchantMeleeAttack": 351,
                "weaponEnchantRangeAttack": 351,
                "weaponEnchantMagicAttack": 351,
                "plusAttack": 711,
            },
            5: {
                "weaponEnchantMeleeAttack": 386,
                "weaponEnchantRangeAttack": 386,
                "weaponEnchantMagicAttack": 386,
                "plusAttack": 746,
            },
            6: {
                "weaponEnchantMeleeAttack": 425,
                "weaponEnchantRangeAttack": 425,
                "weaponEnchantMagicAttack": 425,
                "plusAttack": 785,
            },
            7: {
                "weaponEnchantMeleeAttack": 468,
                "weaponEnchantRangeAttack": 468,
                "weaponEnchantMagicAttack": 468,
                "plusAttack": 828,
            },
            8: {
                "weaponEnchantMeleeAttack": 515,
                "weaponEnchantRangeAttack": 515,
                "weaponEnchantMagicAttack": 515,
                "plusAttack": 875,
            },
            9: {
                "weaponEnchantMeleeAttack": 566,
                "weaponEnchantRangeAttack": 566,
                "weaponEnchantMagicAttack": 566,
                "plusAttack": 926,
            },
            10: {
                "weaponEnchantMeleeAttack": 623,
                "weaponEnchantRangeAttack": 623,
                "weaponEnchantMagicAttack": 623,
                "plusAttack": 983,
            },
            11: {
                "weaponEnchantMeleeAttack": 685,
                "weaponEnchantRangeAttack": 685,
                "weaponEnchantMagicAttack": 685,
                "plusAttack": 1045,
            },
            12: {
                "weaponEnchantMeleeAttack": 754,
                "weaponEnchantRangeAttack": 754,
                "weaponEnchantMagicAttack": 754,
                "plusAttack": 1114,
            },
            13: {
                "weaponEnchantMeleeAttack": 829,
                "weaponEnchantRangeAttack": 829,
                "weaponEnchantMagicAttack": 829,
                "plusAttack": 1189,
            },
            14: {
                "weaponEnchantMeleeAttack": 911,
                "weaponEnchantRangeAttack": 911,
                "weaponEnchantMagicAttack": 911,
                "plusAttack": 1271,
            },
            15: {
                "weaponEnchantMeleeAttack": 1002,
                "weaponEnchantRangeAttack": 1002,
                "weaponEnchantMagicAttack": 1002,
                "plusAttack": 1362,
            },
            16: {
                "weaponEnchantMeleeAttack": 1104,
                "weaponEnchantRangeAttack": 1104,
                "weaponEnchantMagicAttack": 1104,
                "plusAttack": 1464,
            },
            17: {
                "weaponEnchantMeleeAttack": 1213,
                "weaponEnchantRangeAttack": 1213,
                "weaponEnchantMagicAttack": 1213,
                "plusAttack": 1573,
            },
            18: {
                "weaponEnchantMeleeAttack": 1335,
                "weaponEnchantRangeAttack": 1335,
                "weaponEnchantMagicAttack": 1335,
                "plusAttack": 1695,
            },
            19: {
                "weaponEnchantMeleeAttack": 1468,
                "weaponEnchantRangeAttack": 1468,
                "weaponEnchantMagicAttack": 1468,
                "plusAttack": 1828,
            },
            20: {
                "weaponEnchantMeleeAttack": 1615,
                "weaponEnchantRangeAttack": 1615,
                "weaponEnchantMagicAttack": 1615,
                "plusAttack": 1975,
            },
            21: {
                "weaponEnchantMeleeAttack": 1777,
                "weaponEnchantRangeAttack": 1777,
                "weaponEnchantMagicAttack": 1777,
                "plusAttack": 2137,
            },
            22: {
                "weaponEnchantMeleeAttack": 1954,
                "weaponEnchantRangeAttack": 1954,
                "weaponEnchantMagicAttack": 1954,
                "plusAttack": 2314,
            },
            23: {
                "weaponEnchantMeleeAttack": 2150,
                "weaponEnchantRangeAttack": 2150,
                "weaponEnchantMagicAttack": 2150,
                "plusAttack": 2510,
            },
            24: {
                "weaponEnchantMeleeAttack": 2365,
                "weaponEnchantRangeAttack": 2365,
                "weaponEnchantMagicAttack": 2365,
                "plusAttack": 2725,
            },
            25: {
                "weaponEnchantMeleeAttack": 2601,
                "weaponEnchantRangeAttack": 2601,
                "weaponEnchantMagicAttack": 2601,
                "plusAttack": 2961,
            },
            26: {
                "weaponEnchantMeleeAttack": 2861,
                "weaponEnchantRangeAttack": 2861,
                "weaponEnchantMagicAttack": 2861,
                "plusAttack": 3221,
            },
            27: {
                "weaponEnchantMeleeAttack": 3147,
                "weaponEnchantRangeAttack": 3147,
                "weaponEnchantMagicAttack": 3147,
                "plusAttack": 3507,
            },
            28: {
                "weaponEnchantMeleeAttack": 3462,
                "weaponEnchantRangeAttack": 3462,
                "weaponEnchantMagicAttack": 3462,
                "plusAttack": 3822,
            },
            29: {
                "weaponEnchantMeleeAttack": 3808,
                "weaponEnchantRangeAttack": 3808,
                "weaponEnchantMagicAttack": 3808,
                "plusAttack": 4168,
            },
            30: {
                "weaponEnchantMeleeAttack": 4189,
                "weaponEnchantRangeAttack": 4189,
                "weaponEnchantMagicAttack": 4189,
                "plusAttack": 4549,
            }
        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトデュアルソード",
        icon: unknown,
        type: "dualsword",
        availableRaces: ["Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2589,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 336,
            },
            1: {
                "weaponEnchantMeleeAttack": 222,
                "weaponEnchantRangeAttack": 222,
                "weaponEnchantMagicAttack": 222,
                "plusAttack": 558,
            },
            2: {
                "weaponEnchantMeleeAttack": 244,
                "weaponEnchantRangeAttack": 244,
                "weaponEnchantMagicAttack": 244,
                "plusAttack": 580,
            },
            3: {
                "weaponEnchantMeleeAttack": 269,
                "weaponEnchantRangeAttack": 269,
                "weaponEnchantMagicAttack": 269,
                "plusAttack": 605,
            },
            4: {
                "weaponEnchantMeleeAttack": 295,
                "weaponEnchantRangeAttack": 295,
                "weaponEnchantMagicAttack": 295,
                "plusAttack": 631,
            },
            5: {
                "weaponEnchantMeleeAttack": 325,
                "weaponEnchantRangeAttack": 325,
                "weaponEnchantMagicAttack": 325,
                "plusAttack": 661,
            },
            6: {
                "weaponEnchantMeleeAttack": 358,
                "weaponEnchantRangeAttack": 358,
                "weaponEnchantMagicAttack": 358,
                "plusAttack": 694,
            },
            7: {
                "weaponEnchantMeleeAttack": 394,
                "weaponEnchantRangeAttack": 394,
                "weaponEnchantMagicAttack": 394,
                "plusAttack": 730,
            },
            8: {
                "weaponEnchantMeleeAttack": 433,
                "weaponEnchantRangeAttack": 433,
                "weaponEnchantMagicAttack": 433,
                "plusAttack": 769,
            },
            9: {
                "weaponEnchantMeleeAttack": 476,
                "weaponEnchantRangeAttack": 476,
                "weaponEnchantMagicAttack": 476,
                "plusAttack": 812,
            },
            10: {
                "weaponEnchantMeleeAttack": 524,
                "weaponEnchantRangeAttack": 524,
                "weaponEnchantMagicAttack": 524,
                "plusAttack": 860,
            },
            11: {
                "weaponEnchantMeleeAttack": 576,
                "weaponEnchantRangeAttack": 576,
                "weaponEnchantMagicAttack": 576,
                "plusAttack": 912,
            },
            12: {
                "weaponEnchantMeleeAttack": 633,
                "weaponEnchantRangeAttack": 633,
                "weaponEnchantMagicAttack": 633,
                "plusAttack": 969,
            },
            13: {
                "weaponEnchantMeleeAttack": 697,
                "weaponEnchantRangeAttack": 697,
                "weaponEnchantMagicAttack": 697,
                "plusAttack": 1033,
            },
            14: {
                "weaponEnchantMeleeAttack": 767,
                "weaponEnchantRangeAttack": 767,
                "weaponEnchantMagicAttack": 767,
                "plusAttack": 1103,
            },
            15: {
                "weaponEnchantMeleeAttack": 844,
                "weaponEnchantRangeAttack": 844,
                "weaponEnchantMagicAttack": 844,
                "plusAttack": 1180,
            },
            16: {
                "weaponEnchantMeleeAttack": 927,
                "weaponEnchantRangeAttack": 927,
                "weaponEnchantMagicAttack": 927,
                "plusAttack": 1263,
            },
            17: {
                "weaponEnchantMeleeAttack": 1021,
                "weaponEnchantRangeAttack": 1021,
                "weaponEnchantMagicAttack": 1021,
                "plusAttack": 1357,
            },
            18: {
                "weaponEnchantMeleeAttack": 1122,
                "weaponEnchantRangeAttack": 1122,
                "weaponEnchantMagicAttack": 1122,
                "plusAttack": 1458,
            },
            19: {
                "weaponEnchantMeleeAttack": 1235,
                "weaponEnchantRangeAttack": 1235,
                "weaponEnchantMagicAttack": 1235,
                "plusAttack": 1571,
            },
            20: {
                "weaponEnchantMeleeAttack": 1359,
                "weaponEnchantRangeAttack": 1359,
                "weaponEnchantMagicAttack": 1359,
                "plusAttack": 1695,
            },
            21: {
                "weaponEnchantMeleeAttack": 1494,
                "weaponEnchantRangeAttack": 1494,
                "weaponEnchantMagicAttack": 1494,
                "plusAttack": 1830,
            },
            22: {
                "weaponEnchantMeleeAttack": 1643,
                "weaponEnchantRangeAttack": 1643,
                "weaponEnchantMagicAttack": 1643,
                "plusAttack": 1979,
            },
            23: {
                "weaponEnchantMeleeAttack": 1807,
                "weaponEnchantRangeAttack": 1807,
                "weaponEnchantMagicAttack": 1807,
                "plusAttack": 2143,
            },
            24: {
                "weaponEnchantMeleeAttack": 1988,
                "weaponEnchantRangeAttack": 1988,
                "weaponEnchantMagicAttack": 1988,
                "plusAttack": 2324,
            },
            25: {
                "weaponEnchantMeleeAttack": 2187,
                "weaponEnchantRangeAttack": 2187,
                "weaponEnchantMagicAttack": 2187,
                "plusAttack": 2523,
            },
            26: {
                "weaponEnchantMeleeAttack": 2405,
                "weaponEnchantRangeAttack": 2405,
                "weaponEnchantMagicAttack": 2405,
                "plusAttack": 2741,
            },
            27: {
                "weaponEnchantMeleeAttack": 2646,
                "weaponEnchantRangeAttack": 2646,
                "weaponEnchantMagicAttack": 2646,
                "plusAttack": 2982,
            },
            28: {
                "weaponEnchantMeleeAttack": 2911,
                "weaponEnchantRangeAttack": 2911,
                "weaponEnchantMagicAttack": 2911,
                "plusAttack": 3247,
            },
            29: {
                "weaponEnchantMeleeAttack": 3202,
                "weaponEnchantRangeAttack": 3202,
                "weaponEnchantMagicAttack": 3202,
                "plusAttack": 3538,
            },
            30: {
                "weaponEnchantMeleeAttack": 3522,
                "weaponEnchantRangeAttack": 3522,
                "weaponEnchantMagicAttack": 3522,
                "plusAttack": 3858,
            }
        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトポールアーム",
        icon: unknown,
        type: "polearm",
        availableRaces: ["Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 4487,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 480,
            },
            1: {
                "weaponEnchantMeleeAttack": 385,
                "weaponEnchantRangeAttack": 385,
                "weaponEnchantMagicAttack": 385,
                "plusAttack": 865,
            },
            2: {
                "weaponEnchantMeleeAttack": 423,
                "weaponEnchantRangeAttack": 423,
                "weaponEnchantMagicAttack": 423,
                "plusAttack": 903,
            },
            3: {
                "weaponEnchantMeleeAttack": 465,
                "weaponEnchantRangeAttack": 465,
                "weaponEnchantMagicAttack": 465,
                "plusAttack": 945,
            },
            4: {
                "weaponEnchantMeleeAttack": 512,
                "weaponEnchantRangeAttack": 512,
                "weaponEnchantMagicAttack": 512,
                "plusAttack": 992,
            },
            5: {
                "weaponEnchantMeleeAttack": 563,
                "weaponEnchantRangeAttack": 563,
                "weaponEnchantMagicAttack": 563,
                "plusAttack": 1043,
            },
            6: {
                "weaponEnchantMeleeAttack": 620,
                "weaponEnchantRangeAttack": 620,
                "weaponEnchantMagicAttack": 620,
                "plusAttack": 1100,
            },
            7: {
                "weaponEnchantMeleeAttack": 681,
                "weaponEnchantRangeAttack": 681,
                "weaponEnchantMagicAttack": 681,
                "plusAttack": 1161,
            },
            8: {
                "weaponEnchantMeleeAttack": 750,
                "weaponEnchantRangeAttack": 750,
                "weaponEnchantMagicAttack": 750,
                "plusAttack": 1230,
            },
            9: {
                "weaponEnchantMeleeAttack": 824,
                "weaponEnchantRangeAttack": 824,
                "weaponEnchantMagicAttack": 824,
                "plusAttack": 1304,
            },
            10: {
                "weaponEnchantMeleeAttack": 907,
                "weaponEnchantRangeAttack": 907,
                "weaponEnchantMagicAttack": 907,
                "plusAttack": 1387,
            },
            11: {
                "weaponEnchantMeleeAttack": 997,
                "weaponEnchantRangeAttack": 997,
                "weaponEnchantMagicAttack": 997,
                "plusAttack": 1477,
            },
            12: {
                "weaponEnchantMeleeAttack": 1097,
                "weaponEnchantRangeAttack": 1097,
                "weaponEnchantMagicAttack": 1097,
                "plusAttack": 1577,
            },
            13: {
                "weaponEnchantMeleeAttack": 1208,
                "weaponEnchantRangeAttack": 1208,
                "weaponEnchantMagicAttack": 1208,
                "plusAttack": 1688,
            },
            14: {
                "weaponEnchantMeleeAttack": 1327,
                "weaponEnchantRangeAttack": 1327,
                "weaponEnchantMagicAttack": 1327,
                "plusAttack": 1807,
            },
            15: {
                "weaponEnchantMeleeAttack": 1461,
                "weaponEnchantRangeAttack": 1461,
                "weaponEnchantMagicAttack": 1461,
                "plusAttack": 1941,
            },
            16: {
                "weaponEnchantMeleeAttack": 1607,
                "weaponEnchantRangeAttack": 1607,
                "weaponEnchantMagicAttack": 1607,
                "plusAttack": 2087,
            },
            17: {
                "weaponEnchantMeleeAttack": 1768,
                "weaponEnchantRangeAttack": 1768,
                "weaponEnchantMagicAttack": 1768,
                "plusAttack": 2248,
            },
            18: {
                "weaponEnchantMeleeAttack": 1945,
                "weaponEnchantRangeAttack": 1945,
                "weaponEnchantMagicAttack": 1945,
                "plusAttack": 2425,
            },
            19: {
                "weaponEnchantMeleeAttack": 2139,
                "weaponEnchantRangeAttack": 2139,
                "weaponEnchantMagicAttack": 2139,
                "plusAttack": 2619,
            },
            20: {
                "weaponEnchantMeleeAttack": 2353,
                "weaponEnchantRangeAttack": 2353,
                "weaponEnchantMagicAttack": 2353,
                "plusAttack": 2833,
            },
            21: {
                "weaponEnchantMeleeAttack": 2588,
                "weaponEnchantRangeAttack": 2588,
                "weaponEnchantMagicAttack": 2588,
                "plusAttack": 3068,
            },
            22: {
                "weaponEnchantMeleeAttack": 2847,
                "weaponEnchantRangeAttack": 2847,
                "weaponEnchantMagicAttack": 2847,
                "plusAttack": 3327,
            },
            23: {
                "weaponEnchantMeleeAttack": 3132,
                "weaponEnchantRangeAttack": 3132,
                "weaponEnchantMagicAttack": 3132,
                "plusAttack": 3612,
            },
            24: {
                "weaponEnchantMeleeAttack": 3444,
                "weaponEnchantRangeAttack": 3444,
                "weaponEnchantMagicAttack": 3444,
                "plusAttack": 3924,
            },
            25: {
                "weaponEnchantMeleeAttack": 3788,
                "weaponEnchantRangeAttack": 3788,
                "weaponEnchantMagicAttack": 3788,
                "plusAttack": 4268,
            },
            26: {
                "weaponEnchantMeleeAttack": 4168,
                "weaponEnchantRangeAttack": 4168,
                "weaponEnchantMagicAttack": 4168,
                "plusAttack": 4648,
            },
            27: {
                "weaponEnchantMeleeAttack": 4584,
                "weaponEnchantRangeAttack": 4584,
                "weaponEnchantMagicAttack": 4584,
                "plusAttack": 5064,
            },
            28: {
                "weaponEnchantMeleeAttack": 5043,
                "weaponEnchantRangeAttack": 5043,
                "weaponEnchantMagicAttack": 5043,
                "plusAttack": 5523,
            },
            29: {
                "weaponEnchantMeleeAttack": 5547,
                "weaponEnchantRangeAttack": 5547,
                "weaponEnchantMagicAttack": 5547,
                "plusAttack": 6027,
            },
            30: {
                "weaponEnchantMeleeAttack": 6102,
                "weaponEnchantRangeAttack": 6102,
                "weaponEnchantMagicAttack": 6102,
                "plusAttack": 6582,
            }
        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトカタール",
        icon: unknown,
        type: "katar",
        availableRaces: ["Dan"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2373,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 264,
            },
            1: {
                "weaponEnchantMeleeAttack": 204,
                "weaponEnchantRangeAttack": 204,
                "weaponEnchantMagicAttack": 204,
                "plusAttack": 468,
            },
            2: {
                "weaponEnchantMeleeAttack": 224,
                "weaponEnchantRangeAttack": 224,
                "weaponEnchantMagicAttack": 224,
                "plusAttack": 488,
            },
            3: {
                "weaponEnchantMeleeAttack": 246,
                "weaponEnchantRangeAttack": 246,
                "weaponEnchantMagicAttack": 246,
                "plusAttack": 510,
            },
            4: {
                "weaponEnchantMeleeAttack": 270,
                "weaponEnchantRangeAttack": 270,
                "weaponEnchantMagicAttack": 270,
                "plusAttack": 534,
            },
            5: {
                "weaponEnchantMeleeAttack": 298,
                "weaponEnchantRangeAttack": 298,
                "weaponEnchantMagicAttack": 298,
                "plusAttack": 562,
            },
            6: {
                "weaponEnchantMeleeAttack": 328,
                "weaponEnchantRangeAttack": 328,
                "weaponEnchantMagicAttack": 328,
                "plusAttack": 592,
            },
            7: {
                "weaponEnchantMeleeAttack": 360,
                "weaponEnchantRangeAttack": 360,
                "weaponEnchantMagicAttack": 360,
                "plusAttack": 624,
            },
            8: {
                "weaponEnchantMeleeAttack": 397,
                "weaponEnchantRangeAttack": 397,
                "weaponEnchantMagicAttack": 397,
                "plusAttack": 661,
            },
            9: {
                "weaponEnchantMeleeAttack": 437,
                "weaponEnchantRangeAttack": 437,
                "weaponEnchantMagicAttack": 437,
                "plusAttack": 701,
            },
            10: {
                "weaponEnchantMeleeAttack": 480,
                "weaponEnchantRangeAttack": 480,
                "weaponEnchantMagicAttack": 480,
                "plusAttack": 744,
            },
            11: {
                "weaponEnchantMeleeAttack": 528,
                "weaponEnchantRangeAttack": 528,
                "weaponEnchantMagicAttack": 528,
                "plusAttack": 792,
            },
            12: {
                "weaponEnchantMeleeAttack": 581,
                "weaponEnchantRangeAttack": 581,
                "weaponEnchantMagicAttack": 581,
                "plusAttack": 845,
            },
            13: {
                "weaponEnchantMeleeAttack": 638,
                "weaponEnchantRangeAttack": 638,
                "weaponEnchantMagicAttack": 638,
                "plusAttack": 902,
            },
            14: {
                "weaponEnchantMeleeAttack": 702,
                "weaponEnchantRangeAttack": 702,
                "weaponEnchantMagicAttack": 702,
                "plusAttack": 966,
            },
            15: {
                "weaponEnchantMeleeAttack": 772,
                "weaponEnchantRangeAttack": 772,
                "weaponEnchantMagicAttack": 772,
                "plusAttack": 1036,
            },
            16: {
                "weaponEnchantMeleeAttack": 850,
                "weaponEnchantRangeAttack": 850,
                "weaponEnchantMagicAttack": 850,
                "plusAttack": 1114,
            },
            17: {
                "weaponEnchantMeleeAttack": 935,
                "weaponEnchantRangeAttack": 935,
                "weaponEnchantMagicAttack": 935,
                "plusAttack": 1199,
            },
            18: {
                "weaponEnchantMeleeAttack": 1028,
                "weaponEnchantRangeAttack": 1028,
                "weaponEnchantMagicAttack": 1028,
                "plusAttack": 1292,
            },
            19: {
                "weaponEnchantMeleeAttack": 1131,
                "weaponEnchantRangeAttack": 1131,
                "weaponEnchantMagicAttack": 1131,
                "plusAttack": 1395,
            },
            20: {
                "weaponEnchantMeleeAttack": 1244,
                "weaponEnchantRangeAttack": 1244,
                "weaponEnchantMagicAttack": 1244,
                "plusAttack": 1508,
            },
            21: {
                "weaponEnchantMeleeAttack": 1369,
                "weaponEnchantRangeAttack": 1369,
                "weaponEnchantMagicAttack": 1369,
                "plusAttack": 1633,
            },
            22: {
                "weaponEnchantMeleeAttack": 1505,
                "weaponEnchantRangeAttack": 1505,
                "weaponEnchantMagicAttack": 1505,
                "plusAttack": 1769,
            },
            23: {
                "weaponEnchantMeleeAttack": 1656,
                "weaponEnchantRangeAttack": 1656,
                "weaponEnchantMagicAttack": 1656,
                "plusAttack": 1920,
            },
            24: {
                "weaponEnchantMeleeAttack": 1823,
                "weaponEnchantRangeAttack": 1823,
                "weaponEnchantMagicAttack": 1823,
                "plusAttack": 2087,
            },
            25: {
                "weaponEnchantMeleeAttack": 2005,
                "weaponEnchantRangeAttack": 2005,
                "weaponEnchantMagicAttack": 2005,
                "plusAttack": 2269,
            },
            26: {
                "weaponEnchantMeleeAttack": 2205,
                "weaponEnchantRangeAttack": 2205,
                "weaponEnchantMagicAttack": 2205,
                "plusAttack": 2469,
            },
            27: {
                "weaponEnchantMeleeAttack": 2426,
                "weaponEnchantRangeAttack": 2426,
                "weaponEnchantMagicAttack": 2426,
                "plusAttack": 2690,
            },
            28: {
                "weaponEnchantMeleeAttack": 2668,
                "weaponEnchantRangeAttack": 2668,
                "weaponEnchantMagicAttack": 2668,
                "plusAttack": 2932,
            },
            29: {
                "weaponEnchantMeleeAttack": 2935,
                "weaponEnchantRangeAttack": 2935,
                "weaponEnchantMagicAttack": 2935,
                "plusAttack": 3199,
            },
            30: {
                "weaponEnchantMeleeAttack": 3228,
                "weaponEnchantRangeAttack": 3228,
                "weaponEnchantMagicAttack": 3228,
                "plusAttack": 3492,
            }

        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトゼン",
        icon: unknown,
        type: "zen",
        availableRaces: ["Dekan"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3555,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 432,
            },
            1: {
                "weaponEnchantMeleeAttack": 304,
                "weaponEnchantRangeAttack": 304,
                "weaponEnchantMagicAttack": 304,
                "plusAttack": 736,
            },
            2: {
                "weaponEnchantMeleeAttack": 335,
                "weaponEnchantRangeAttack": 335,
                "weaponEnchantMagicAttack": 335,
                "plusAttack": 767,
            },
            3: {
                "weaponEnchantMeleeAttack": 369,
                "weaponEnchantRangeAttack": 369,
                "weaponEnchantMagicAttack": 369,
                "plusAttack": 801,
            },
            4: {
                "weaponEnchantMeleeAttack": 406,
                "weaponEnchantRangeAttack": 406,
                "weaponEnchantMagicAttack": 406,
                "plusAttack": 838,
            },
            5: {
                "weaponEnchantMeleeAttack": 446,
                "weaponEnchantRangeAttack": 446,
                "weaponEnchantMagicAttack": 446,
                "plusAttack": 878,
            },
            6: {
                "weaponEnchantMeleeAttack": 491,
                "weaponEnchantRangeAttack": 491,
                "weaponEnchantMagicAttack": 491,
                "plusAttack": 923,
            },
            7: {
                "weaponEnchantMeleeAttack": 540,
                "weaponEnchantRangeAttack": 540,
                "weaponEnchantMagicAttack": 540,
                "plusAttack": 972,
            },
            8: {
                "weaponEnchantMeleeAttack": 594,
                "weaponEnchantRangeAttack": 594,
                "weaponEnchantMagicAttack": 594,
                "plusAttack": 1026,
            },
            9: {
                "weaponEnchantMeleeAttack": 654,
                "weaponEnchantRangeAttack": 654,
                "weaponEnchantMagicAttack": 654,
                "plusAttack": 1086,
            },
            10: {
                "weaponEnchantMeleeAttack": 719,
                "weaponEnchantRangeAttack": 719,
                "weaponEnchantMagicAttack": 719,
                "plusAttack": 1151,
            },
            11: {
                "weaponEnchantMeleeAttack": 790,
                "weaponEnchantRangeAttack": 790,
                "weaponEnchantMagicAttack": 790,
                "plusAttack": 1222,
            },
            12: {
                "weaponEnchantMeleeAttack": 870,
                "weaponEnchantRangeAttack": 870,
                "weaponEnchantMagicAttack": 870,
                "plusAttack": 1302,
            },
            13: {
                "weaponEnchantMeleeAttack": 957,
                "weaponEnchantRangeAttack": 957,
                "weaponEnchantMagicAttack": 957,
                "plusAttack": 1389,
            },
            14: {
                "weaponEnchantMeleeAttack": 1052,
                "weaponEnchantRangeAttack": 1052,
                "weaponEnchantMagicAttack": 1052,
                "plusAttack": 1484,
            },
            15: {
                "weaponEnchantMeleeAttack": 1157,
                "weaponEnchantRangeAttack": 1157,
                "weaponEnchantMagicAttack": 1157,
                "plusAttack": 1589,
            },
            16: {
                "weaponEnchantMeleeAttack": 1273,
                "weaponEnchantRangeAttack": 1273,
                "weaponEnchantMagicAttack": 1273,
                "plusAttack": 1705,
            },
            17: {
                "weaponEnchantMeleeAttack": 1400,
                "weaponEnchantRangeAttack": 1400,
                "weaponEnchantMagicAttack": 1400,
                "plusAttack": 1832,
            },
            18: {
                "weaponEnchantMeleeAttack": 1541,
                "weaponEnchantRangeAttack": 1541,
                "weaponEnchantMagicAttack": 1541,
                "plusAttack": 1973,
            },
            19: {
                "weaponEnchantMeleeAttack": 1695,
                "weaponEnchantRangeAttack": 1695,
                "weaponEnchantMagicAttack": 1695,
                "plusAttack": 2127,
            },
            20: {
                "weaponEnchantMeleeAttack": 1864,
                "weaponEnchantRangeAttack": 1864,
                "weaponEnchantMagicAttack": 1864,
                "plusAttack": 2296,
            },
            21: {
                "weaponEnchantMeleeAttack": 2050,
                "weaponEnchantRangeAttack": 2050,
                "weaponEnchantMagicAttack": 2050,
                "plusAttack": 2482,
            },
            22: {
                "weaponEnchantMeleeAttack": 2256,
                "weaponEnchantRangeAttack": 2256,
                "weaponEnchantMagicAttack": 2256,
                "plusAttack": 2688,
            },
            23: {
                "weaponEnchantMeleeAttack": 2480,
                "weaponEnchantRangeAttack": 2480,
                "weaponEnchantMagicAttack": 2480,
                "plusAttack": 2912,
            },
            24: {
                "weaponEnchantMeleeAttack": 2729,
                "weaponEnchantRangeAttack": 2729,
                "weaponEnchantMagicAttack": 2729,
                "plusAttack": 3161,
            },
            25: {
                "weaponEnchantMeleeAttack": 3002,
                "weaponEnchantRangeAttack": 3002,
                "weaponEnchantMagicAttack": 3002,
                "plusAttack": 3434,
            },
            26: {
                "weaponEnchantMeleeAttack": 3302,
                "weaponEnchantRangeAttack": 3302,
                "weaponEnchantMagicAttack": 3302,
                "plusAttack": 3734,
            },
            27: {
                "weaponEnchantMeleeAttack": 3632,
                "weaponEnchantRangeAttack": 3632,
                "weaponEnchantMagicAttack": 3632,
                "plusAttack": 4064,
            },
            28: {
                "weaponEnchantMeleeAttack": 3996,
                "weaponEnchantRangeAttack": 3996,
                "weaponEnchantMagicAttack": 3996,
                "plusAttack": 4428,
            },
            29: {
                "weaponEnchantMeleeAttack": 4395,
                "weaponEnchantRangeAttack": 4395,
                "weaponEnchantMagicAttack": 4395,
                "plusAttack": 4827,
            },
            30: {
                "weaponEnchantMeleeAttack": 4835,
                "weaponEnchantRangeAttack": 4835,
                "weaponEnchantMagicAttack": 4835,
                "plusAttack": 5267,
            }
        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトボウ",
        icon: unknown,
        type: "bow",
        availableRaces: ["HalfElf"],
        fixedBaseOptions: {
            "weaponBaseRangeAttack": 2642,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 336,
            },
            1: {
                "weaponEnchantMeleeAttack": 226,
                "weaponEnchantRangeAttack": 226,
                "weaponEnchantMagicAttack": 226,
                "plusAttack": 562,
            },
            2: {
                "weaponEnchantMeleeAttack": 250,
                "weaponEnchantRangeAttack": 250,
                "weaponEnchantMagicAttack": 250,
                "plusAttack": 586,
            },
            3: {
                "weaponEnchantMeleeAttack": 274,
                "weaponEnchantRangeAttack": 274,
                "weaponEnchantMagicAttack": 274,
                "plusAttack": 610,
            },
            4: {
                "weaponEnchantMeleeAttack": 302,
                "weaponEnchantRangeAttack": 302,
                "weaponEnchantMagicAttack": 302,
                "plusAttack": 638,
            },
            5: {
                "weaponEnchantMeleeAttack": 332,
                "weaponEnchantRangeAttack": 332,
                "weaponEnchantMagicAttack": 332,
                "plusAttack": 668,
            },
            6: {
                "weaponEnchantMeleeAttack": 365,
                "weaponEnchantRangeAttack": 365,
                "weaponEnchantMagicAttack": 365,
                "plusAttack": 701,
            },
            7: {
                "weaponEnchantMeleeAttack": 402,
                "weaponEnchantRangeAttack": 402,
                "weaponEnchantMagicAttack": 402,
                "plusAttack": 738,
            },
            8: {
                "weaponEnchantMeleeAttack": 441,
                "weaponEnchantRangeAttack": 441,
                "weaponEnchantMagicAttack": 441,
                "plusAttack": 777,
            },
            9: {
                "weaponEnchantMeleeAttack": 485,
                "weaponEnchantRangeAttack": 485,
                "weaponEnchantMagicAttack": 485,
                "plusAttack": 821,
            },
            10: {
                "weaponEnchantMeleeAttack": 534,
                "weaponEnchantRangeAttack": 534,
                "weaponEnchantMagicAttack": 534,
                "plusAttack": 870,
            },
            11: {
                "weaponEnchantMeleeAttack": 588,
                "weaponEnchantRangeAttack": 588,
                "weaponEnchantMagicAttack": 588,
                "plusAttack": 924,
            },
            12: {
                "weaponEnchantMeleeAttack": 646,
                "weaponEnchantRangeAttack": 646,
                "weaponEnchantMagicAttack": 646,
                "plusAttack": 982,
            },
            13: {
                "weaponEnchantMeleeAttack": 711,
                "weaponEnchantRangeAttack": 711,
                "weaponEnchantMagicAttack": 711,
                "plusAttack": 1047,
            },
            14: {
                "weaponEnchantMeleeAttack": 781,
                "weaponEnchantRangeAttack": 781,
                "weaponEnchantMagicAttack": 781,
                "plusAttack": 1117,
            },
            15: {
                "weaponEnchantMeleeAttack": 861,
                "weaponEnchantRangeAttack": 861,
                "weaponEnchantMagicAttack": 861,
                "plusAttack": 1197,
            },
            16: {
                "weaponEnchantMeleeAttack": 946,
                "weaponEnchantRangeAttack": 946,
                "weaponEnchantMagicAttack": 946,
                "plusAttack": 1282,
            },
            17: {
                "weaponEnchantMeleeAttack": 1040,
                "weaponEnchantRangeAttack": 1040,
                "weaponEnchantMagicAttack": 1040,
                "plusAttack": 1376,
            },
            18: {
                "weaponEnchantMeleeAttack": 1144,
                "weaponEnchantRangeAttack": 1144,
                "weaponEnchantMagicAttack": 1144,
                "plusAttack": 1480,
            },
            19: {
                "weaponEnchantMeleeAttack": 1260,
                "weaponEnchantRangeAttack": 1260,
                "weaponEnchantMagicAttack": 1260,
                "plusAttack": 1596,
            },
            20: {
                "weaponEnchantMeleeAttack": 1385,
                "weaponEnchantRangeAttack": 1385,
                "weaponEnchantMagicAttack": 1385,
                "plusAttack": 1721,
            },
            21: {
                "weaponEnchantMeleeAttack": 1524,
                "weaponEnchantRangeAttack": 1524,
                "weaponEnchantMagicAttack": 1524,
                "plusAttack": 1860,
            },
            22: {
                "weaponEnchantMeleeAttack": 1676,
                "weaponEnchantRangeAttack": 1676,
                "weaponEnchantMagicAttack": 1676,
                "plusAttack": 2012,
            },
            23: {
                "weaponEnchantMeleeAttack": 1843,
                "weaponEnchantRangeAttack": 1843,
                "weaponEnchantMagicAttack": 1843,
                "plusAttack": 2179,
            },
            24: {
                "weaponEnchantMeleeAttack": 2028,
                "weaponEnchantRangeAttack": 2028,
                "weaponEnchantMagicAttack": 2028,
                "plusAttack": 2364,
            },
            25: {
                "weaponEnchantMeleeAttack": 2231,
                "weaponEnchantRangeAttack": 2231,
                "weaponEnchantMagicAttack": 2231,
                "plusAttack": 2567,
            },
            26: {
                "weaponEnchantMeleeAttack": 2453,
                "weaponEnchantRangeAttack": 2453,
                "weaponEnchantMagicAttack": 2453,
                "plusAttack": 2789,
            },
            27: {
                "weaponEnchantMeleeAttack": 2699,
                "weaponEnchantRangeAttack": 2699,
                "weaponEnchantMagicAttack": 2699,
                "plusAttack": 3035,
            },
            28: {
                "weaponEnchantMeleeAttack": 2969,
                "weaponEnchantRangeAttack": 2969,
                "weaponEnchantMagicAttack": 2969,
                "plusAttack": 3305,
            },
            29: {
                "weaponEnchantMeleeAttack": 3266,
                "weaponEnchantRangeAttack": 3266,
                "weaponEnchantMagicAttack": 3266,
                "plusAttack": 3602,
            },
            30: {
                "weaponEnchantMeleeAttack": 3592,
                "weaponEnchantRangeAttack": 3592,
                "weaponEnchantMagicAttack": 3592,
                "plusAttack": 3928,
            }
        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトクロスボウ",
        icon: unknown,
        type: "crossbow",
        availableRaces: ["HalfElf"],
        fixedBaseOptions: {
            "weaponBaseRangeAttack": 3915,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 528,
            },
            1: {
                "weaponEnchantMeleeAttack": 335,
                "weaponEnchantRangeAttack": 335,
                "weaponEnchantMagicAttack": 335,
                "plusAttack": 763,
            },
            2: {
                "weaponEnchantMeleeAttack": 369,
                "weaponEnchantRangeAttack": 369,
                "weaponEnchantMagicAttack": 369,
                "plusAttack": 797,
            },
            3: {
                "weaponEnchantMeleeAttack": 406,
                "weaponEnchantRangeAttack": 406,
                "weaponEnchantMagicAttack": 406,
                "plusAttack": 834,
            },
            4: {
                "weaponEnchantMeleeAttack": 447,
                "weaponEnchantRangeAttack": 447,
                "weaponEnchantMagicAttack": 447,
                "plusAttack": 875,
            },
            5: {
                "weaponEnchantMeleeAttack": 491,
                "weaponEnchantRangeAttack": 491,
                "weaponEnchantMagicAttack": 491,
                "plusAttack": 919,
            },
            6: {
                "weaponEnchantMeleeAttack": 541,
                "weaponEnchantRangeAttack": 541,
                "weaponEnchantMagicAttack": 541,
                "plusAttack": 969,
            },
            7: {
                "weaponEnchantMeleeAttack": 594,
                "weaponEnchantRangeAttack": 594,
                "weaponEnchantMagicAttack": 594,
                "plusAttack": 1022,
            },
            8: {
                "weaponEnchantMeleeAttack": 654,
                "weaponEnchantRangeAttack": 654,
                "weaponEnchantMagicAttack": 654,
                "plusAttack": 1082,
            },
            9: {
                "weaponEnchantMeleeAttack": 719,
                "weaponEnchantRangeAttack": 719,
                "weaponEnchantMagicAttack": 719,
                "plusAttack": 1147,
            },
            10: {
                "weaponEnchantMeleeAttack": 792,
                "weaponEnchantRangeAttack": 792,
                "weaponEnchantMagicAttack": 792,
                "plusAttack": 1220,
            },
            11: {
                "weaponEnchantMeleeAttack": 871,
                "weaponEnchantRangeAttack": 871,
                "weaponEnchantMagicAttack": 871,
                "plusAttack": 1299,
            },
            12: {
                "weaponEnchantMeleeAttack": 958,
                "weaponEnchantRangeAttack": 958,
                "weaponEnchantMagicAttack": 958,
                "plusAttack": 1386,
            },
            13: {
                "weaponEnchantMeleeAttack": 1053,
                "weaponEnchantRangeAttack": 1053,
                "weaponEnchantMagicAttack": 1053,
                "plusAttack": 1481,
            },
            14: {
                "weaponEnchantMeleeAttack": 1158,
                "weaponEnchantRangeAttack": 1158,
                "weaponEnchantMagicAttack": 1158,
                "plusAttack": 1586,
            },
            15: {
                "weaponEnchantMeleeAttack": 1274,
                "weaponEnchantRangeAttack": 1274,
                "weaponEnchantMagicAttack": 1274,
                "plusAttack": 1702,
            },
            16: {
                "weaponEnchantMeleeAttack": 1403,
                "weaponEnchantRangeAttack": 1403,
                "weaponEnchantMagicAttack": 1403,
                "plusAttack": 1831,
            },
            17: {
                "weaponEnchantMeleeAttack": 1542,
                "weaponEnchantRangeAttack": 1542,
                "weaponEnchantMagicAttack": 1542,
                "plusAttack": 1970,
            },
            18: {
                "weaponEnchantMeleeAttack": 1697,
                "weaponEnchantRangeAttack": 1697,
                "weaponEnchantMagicAttack": 1697,
                "plusAttack": 2125,
            },
            19: {
                "weaponEnchantMeleeAttack": 1867,
                "weaponEnchantRangeAttack": 1867,
                "weaponEnchantMagicAttack": 1867,
                "plusAttack": 2295,
            },
            20: {
                "weaponEnchantMeleeAttack": 2053,
                "weaponEnchantRangeAttack": 2053,
                "weaponEnchantMagicAttack": 2053,
                "plusAttack": 2481,
            },
            21: {
                "weaponEnchantMeleeAttack": 2258,
                "weaponEnchantRangeAttack": 2258,
                "weaponEnchantMagicAttack": 2258,
                "plusAttack": 2686,
            },
            22: {
                "weaponEnchantMeleeAttack": 2484,
                "weaponEnchantRangeAttack": 2484,
                "weaponEnchantMagicAttack": 2484,
                "plusAttack": 2912,
            },
            23: {
                "weaponEnchantMeleeAttack": 2733,
                "weaponEnchantRangeAttack": 2733,
                "weaponEnchantMagicAttack": 2733,
                "plusAttack": 3161,
            },
            24: {
                "weaponEnchantMeleeAttack": 3006,
                "weaponEnchantRangeAttack": 3006,
                "weaponEnchantMagicAttack": 3006,
                "plusAttack": 3434,
            },
            25: {
                "weaponEnchantMeleeAttack": 3306,
                "weaponEnchantRangeAttack": 3306,
                "weaponEnchantMagicAttack": 3306,
                "plusAttack": 3734,
            },
            26: {
                "weaponEnchantMeleeAttack": 3636,
                "weaponEnchantRangeAttack": 3636,
                "weaponEnchantMagicAttack": 3636,
                "plusAttack": 4064,
            },
            27: {
                "weaponEnchantMeleeAttack": 4000,
                "weaponEnchantRangeAttack": 4000,
                "weaponEnchantMagicAttack": 4000,
                "plusAttack": 4428,
            },
            28: {
                "weaponEnchantMeleeAttack": 4401,
                "weaponEnchantRangeAttack": 4401,
                "weaponEnchantMagicAttack": 4401,
                "plusAttack": 4829,
            },
            29: {
                "weaponEnchantMeleeAttack": 4840,
                "weaponEnchantRangeAttack": 4840,
                "weaponEnchantMagicAttack": 4840,
                "plusAttack": 5268,
            },
            30: {
                "weaponEnchantMeleeAttack": 5325,
                "weaponEnchantRangeAttack": 5325,
                "weaponEnchantMagicAttack": 5325,
                "plusAttack": 5753,
            }
        },
        sockets: 4
    },

    {
        name: "マグヌスセレスタイトスタッフ",
        icon: unknown,
        type: "staff",
        availableRaces: ["Elf", "DarkElf"],
        fixedBaseOptions: {
            "weaponBaseMagicAttack": 3492,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 600,
            },
            1: {
                "weaponEnchantMeleeAttack": 299,
                "weaponEnchantRangeAttack": 299,
                "weaponEnchantMagicAttack": 299,
                "plusAttack": 899,
            },
            2: {
                "weaponEnchantMeleeAttack": 329,
                "weaponEnchantRangeAttack": 329,
                "weaponEnchantMagicAttack": 329,
                "plusAttack": 929,
            },
            3: {
                "weaponEnchantMeleeAttack": 363,
                "weaponEnchantRangeAttack": 363,
                "weaponEnchantMagicAttack": 363,
                "plusAttack": 963,
            },
            4: {
                "weaponEnchantMeleeAttack": 399,
                "weaponEnchantRangeAttack": 399,
                "weaponEnchantMagicAttack": 399,
                "plusAttack": 999,
            },
            5: {
                "weaponEnchantMeleeAttack": 438,
                "weaponEnchantRangeAttack": 438,
                "weaponEnchantMagicAttack": 438,
                "plusAttack": 1038,
            },
            6: {
                "weaponEnchantMeleeAttack": 482,
                "weaponEnchantRangeAttack": 482,
                "weaponEnchantMagicAttack": 482,
                "plusAttack": 1082,
            },
            7: {
                "weaponEnchantMeleeAttack": 530,
                "weaponEnchantRangeAttack": 530,
                "weaponEnchantMagicAttack": 530,
                "plusAttack": 1130,
            },
            8: {
                "weaponEnchantMeleeAttack": 584,
                "weaponEnchantRangeAttack": 584,
                "weaponEnchantMagicAttack": 584,
                "plusAttack": 1184,
            },
            9: {
                "weaponEnchantMeleeAttack": 642,
                "weaponEnchantRangeAttack": 642,
                "weaponEnchantMagicAttack": 642,
                "plusAttack": 1242,
            },
            10: {
                "weaponEnchantMeleeAttack": 706,
                "weaponEnchantRangeAttack": 706,
                "weaponEnchantMagicAttack": 706,
                "plusAttack": 1306,
            },
            11: {
                "weaponEnchantMeleeAttack": 776,
                "weaponEnchantRangeAttack": 776,
                "weaponEnchantMagicAttack": 776,
                "plusAttack": 1376,
            },
            12: {
                "weaponEnchantMeleeAttack": 854,
                "weaponEnchantRangeAttack": 854,
                "weaponEnchantMagicAttack": 854,
                "plusAttack": 1454,
            },
            13: {
                "weaponEnchantMeleeAttack": 940,
                "weaponEnchantRangeAttack": 940,
                "weaponEnchantMagicAttack": 940,
                "plusAttack": 1540,
            },
            14: {
                "weaponEnchantMeleeAttack": 1034,
                "weaponEnchantRangeAttack": 1034,
                "weaponEnchantMagicAttack": 1034,
                "plusAttack": 1634,
            },
            15: {
                "weaponEnchantMeleeAttack": 1138,
                "weaponEnchantRangeAttack": 1138,
                "weaponEnchantMagicAttack": 1138,
                "plusAttack": 1738,
            },
            16: {
                "weaponEnchantMeleeAttack": 1251,
                "weaponEnchantRangeAttack": 1251,
                "weaponEnchantMagicAttack": 1251,
                "plusAttack": 1851,
            },
            17: {
                "weaponEnchantMeleeAttack": 1375,
                "weaponEnchantRangeAttack": 1375,
                "weaponEnchantMagicAttack": 1375,
                "plusAttack": 1975,
            },
            18: {
                "weaponEnchantMeleeAttack": 1513,
                "weaponEnchantRangeAttack": 1513,
                "weaponEnchantMagicAttack": 1513,
                "plusAttack": 2113,
            },
            19: {
                "weaponEnchantMeleeAttack": 1664,
                "weaponEnchantRangeAttack": 1664,
                "weaponEnchantMagicAttack": 1664,
                "plusAttack": 2264,
            },
            20: {
                "weaponEnchantMeleeAttack": 1830,
                "weaponEnchantRangeAttack": 1830,
                "weaponEnchantMagicAttack": 1830,
                "plusAttack": 2430,
            },
            21: {
                "weaponEnchantMeleeAttack": 2014,
                "weaponEnchantRangeAttack": 2014,
                "weaponEnchantMagicAttack": 2014,
                "plusAttack": 2614,
            },
            22: {
                "weaponEnchantMeleeAttack": 2215,
                "weaponEnchantRangeAttack": 2215,
                "weaponEnchantMagicAttack": 2215,
                "plusAttack": 2815,
            },
            23: {
                "weaponEnchantMeleeAttack": 2438,
                "weaponEnchantRangeAttack": 2438,
                "weaponEnchantMagicAttack": 2438,
                "plusAttack": 3038,
            },
            24: {
                "weaponEnchantMeleeAttack": 2681,
                "weaponEnchantRangeAttack": 2681,
                "weaponEnchantMagicAttack": 2681,
                "plusAttack": 3281,
            },
            25: {
                "weaponEnchantMeleeAttack": 2948,
                "weaponEnchantRangeAttack": 2948,
                "weaponEnchantMagicAttack": 2948,
                "plusAttack": 3548,
            },
            26: {
                "weaponEnchantMeleeAttack": 3244,
                "weaponEnchantRangeAttack": 3244,
                "weaponEnchantMagicAttack": 3244,
                "plusAttack": 3844,
            },
            27: {
                "weaponEnchantMeleeAttack": 3569,
                "weaponEnchantRangeAttack": 3569,
                "weaponEnchantMagicAttack": 3569,
                "plusAttack": 4169,
            },
            28: {
                "weaponEnchantMeleeAttack": 3925,
                "weaponEnchantRangeAttack": 3925,
                "weaponEnchantMagicAttack": 3925,
                "plusAttack": 4525,
            },
            29: {
                "weaponEnchantMeleeAttack": 4317,
                "weaponEnchantRangeAttack": 4317,
                "weaponEnchantMagicAttack": 4317,
                "plusAttack": 4917,
            },
            30: {
                "weaponEnchantMeleeAttack": 4749,
                "weaponEnchantRangeAttack": 4749,
                "weaponEnchantMagicAttack": 4749,
                "plusAttack": 5349,
            }

        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトオーブ",
        icon: unknown,
        type: "orb",
        availableRaces: ["Rumir"],
        fixedBaseOptions: {
            "weaponBaseMagicAttack": 3303,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 552,
            },
            1: {
                "weaponEnchantMeleeAttack": 283,
                "weaponEnchantRangeAttack": 283,
                "weaponEnchantMagicAttack": 283,
                "plusAttack": 835,
            },
            2: {
                "weaponEnchantMeleeAttack": 312,
                "weaponEnchantRangeAttack": 312,
                "weaponEnchantMagicAttack": 312,
                "plusAttack": 864,
            },
            3: {
                "weaponEnchantMeleeAttack": 343,
                "weaponEnchantRangeAttack": 343,
                "weaponEnchantMagicAttack": 343,
                "plusAttack": 895,
            },
            4: {
                "weaponEnchantMeleeAttack": 377,
                "weaponEnchantRangeAttack": 377,
                "weaponEnchantMagicAttack": 377,
                "plusAttack": 929,
            },
            5: {
                "weaponEnchantMeleeAttack": 415,
                "weaponEnchantRangeAttack": 415,
                "weaponEnchantMagicAttack": 415,
                "plusAttack": 967,
            },
            6: {
                "weaponEnchantMeleeAttack": 456,
                "weaponEnchantRangeAttack": 456,
                "weaponEnchantMagicAttack": 456,
                "plusAttack": 1008,
            },
            7: {
                "weaponEnchantMeleeAttack": 502,
                "weaponEnchantRangeAttack": 502,
                "weaponEnchantMagicAttack": 502,
                "plusAttack": 1054,
            },
            8: {
                "weaponEnchantMeleeAttack": 551,
                "weaponEnchantRangeAttack": 551,
                "weaponEnchantMagicAttack": 551,
                "plusAttack": 1103,
            },
            9: {
                "weaponEnchantMeleeAttack": 607,
                "weaponEnchantRangeAttack": 607,
                "weaponEnchantMagicAttack": 607,
                "plusAttack": 1159,
            },
            10: {
                "weaponEnchantMeleeAttack": 668,
                "weaponEnchantRangeAttack": 668,
                "weaponEnchantMagicAttack": 668,
                "plusAttack": 1220,
            },
            11: {
                "weaponEnchantMeleeAttack": 735,
                "weaponEnchantRangeAttack": 735,
                "weaponEnchantMagicAttack": 735,
                "plusAttack": 1287,
            },
            12: {
                "weaponEnchantMeleeAttack": 807,
                "weaponEnchantRangeAttack": 807,
                "weaponEnchantMagicAttack": 807,
                "plusAttack": 1359,
            },
            13: {
                "weaponEnchantMeleeAttack": 889,
                "weaponEnchantRangeAttack": 889,
                "weaponEnchantMagicAttack": 889,
                "plusAttack": 1441,
            },
            14: {
                "weaponEnchantMeleeAttack": 978,
                "weaponEnchantRangeAttack": 978,
                "weaponEnchantMagicAttack": 978,
                "plusAttack": 1530,
            },
            15: {
                "weaponEnchantMeleeAttack": 1075,
                "weaponEnchantRangeAttack": 1075,
                "weaponEnchantMagicAttack": 1075,
                "plusAttack": 1627,
            },
            16: {
                "weaponEnchantMeleeAttack": 1183,
                "weaponEnchantRangeAttack": 1183,
                "weaponEnchantMagicAttack": 1183,
                "plusAttack": 1735,
            },
            17: {
                "weaponEnchantMeleeAttack": 1301,
                "weaponEnchantRangeAttack": 1301,
                "weaponEnchantMagicAttack": 1301,
                "plusAttack": 1853,
            },
            18: {
                "weaponEnchantMeleeAttack": 1431,
                "weaponEnchantRangeAttack": 1431,
                "weaponEnchantMagicAttack": 1431,
                "plusAttack": 1983,
            },
            19: {
                "weaponEnchantMeleeAttack": 1574,
                "weaponEnchantRangeAttack": 1574,
                "weaponEnchantMagicAttack": 1574,
                "plusAttack": 2126,
            },
            20: {
                "weaponEnchantMeleeAttack": 1732,
                "weaponEnchantRangeAttack": 1732,
                "weaponEnchantMagicAttack": 1732,
                "plusAttack": 2284,
            },
            21: {
                "weaponEnchantMeleeAttack": 1905,
                "weaponEnchantRangeAttack": 1905,
                "weaponEnchantMagicAttack": 1905,
                "plusAttack": 2457,
            },
            22: {
                "weaponEnchantMeleeAttack": 2096,
                "weaponEnchantRangeAttack": 2096,
                "weaponEnchantMagicAttack": 2096,
                "plusAttack": 2648,
            },
            23: {
                "weaponEnchantMeleeAttack": 2305,
                "weaponEnchantRangeAttack": 2305,
                "weaponEnchantMagicAttack": 2305,
                "plusAttack": 2857,
            },
            24: {
                "weaponEnchantMeleeAttack": 2535,
                "weaponEnchantRangeAttack": 2535,
                "weaponEnchantMagicAttack": 2535,
                "plusAttack": 3087,
            },
            25: {
                "weaponEnchantMeleeAttack": 2790,
                "weaponEnchantRangeAttack": 2790,
                "weaponEnchantMagicAttack": 2790,
                "plusAttack": 3342,
            },
            26: {
                "weaponEnchantMeleeAttack": 3068,
                "weaponEnchantRangeAttack": 3068,
                "weaponEnchantMagicAttack": 3068,
                "plusAttack": 3620,
            },
            27: {
                "weaponEnchantMeleeAttack": 3375,
                "weaponEnchantRangeAttack": 3375,
                "weaponEnchantMagicAttack": 3375,
                "plusAttack": 3927,
            },
            28: {
                "weaponEnchantMeleeAttack": 3713,
                "weaponEnchantRangeAttack": 3713,
                "weaponEnchantMagicAttack": 3713,
                "plusAttack": 4265,
            },
            29: {
                "weaponEnchantMeleeAttack": 4083,
                "weaponEnchantRangeAttack": 4083,
                "weaponEnchantMagicAttack": 4083,
                "plusAttack": 4635,
            },
            30: {
                "weaponEnchantMeleeAttack": 4492,
                "weaponEnchantRangeAttack": 4492,
                "weaponEnchantMagicAttack": 4492,
                "plusAttack": 5044,
            }

        },
        sockets: 4
    },
    {
        name: "マグヌスセレスタイトグローブ",
        icon: unknown,
        type: "glove",
        availableRaces: ["Noir"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2397,
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 253,
            },
            1: {
                "weaponEnchantMeleeAttack": 205,
                "weaponEnchantRangeAttack": 205,
                "weaponEnchantMagicAttack": 205,
                "plusAttack": 458,
            },
            2: {
                "weaponEnchantMeleeAttack": 226,
                "weaponEnchantRangeAttack": 226,
                "weaponEnchantMagicAttack": 226,
                "plusAttack": 479,
            },
            3: {
                "weaponEnchantMeleeAttack": 248,
                "weaponEnchantRangeAttack": 248,
                "weaponEnchantMagicAttack": 248,
                "plusAttack": 501,
            },
            4: {
                "weaponEnchantMeleeAttack": 273,
                "weaponEnchantRangeAttack": 273,
                "weaponEnchantMagicAttack": 273,
                "plusAttack": 526,
            },
            5: {
                "weaponEnchantMeleeAttack": 300,
                "weaponEnchantRangeAttack": 300,
                "weaponEnchantMagicAttack": 300,
                "plusAttack": 553,
            },
            6: {
                "weaponEnchantMeleeAttack": 332,
                "weaponEnchantRangeAttack": 332,
                "weaponEnchantMagicAttack": 332,
                "plusAttack": 585,
            },
            7: {
                "weaponEnchantMeleeAttack": 364,
                "weaponEnchantRangeAttack": 364,
                "weaponEnchantMagicAttack": 364,
                "plusAttack": 617,
            },
            8: {
                "weaponEnchantMeleeAttack": 400,
                "weaponEnchantRangeAttack": 400,
                "weaponEnchantMagicAttack": 400,
                "plusAttack": 653,
            },
            9: {
                "weaponEnchantMeleeAttack": 441,
                "weaponEnchantRangeAttack": 441,
                "weaponEnchantMagicAttack": 441,
                "plusAttack": 694,
            },
            10: {
                "weaponEnchantMeleeAttack": 485,
                "weaponEnchantRangeAttack": 485,
                "weaponEnchantMagicAttack": 485,
                "plusAttack": 738,
            },
            11: {
                "weaponEnchantMeleeAttack": 533,
                "weaponEnchantRangeAttack": 533,
                "weaponEnchantMagicAttack": 533,
                "plusAttack": 786,
            },
            12: {
                "weaponEnchantMeleeAttack": 586,
                "weaponEnchantRangeAttack": 586,
                "weaponEnchantMagicAttack": 586,
                "plusAttack": 839,
            },
            13: {
                "weaponEnchantMeleeAttack": 645,
                "weaponEnchantRangeAttack": 645,
                "weaponEnchantMagicAttack": 645,
                "plusAttack": 898,
            },
            14: {
                "weaponEnchantMeleeAttack": 710,
                "weaponEnchantRangeAttack": 710,
                "weaponEnchantMagicAttack": 710,
                "plusAttack": 963,
            },
            15: {
                "weaponEnchantMeleeAttack": 780,
                "weaponEnchantRangeAttack": 780,
                "weaponEnchantMagicAttack": 780,
                "plusAttack": 1033,
            },
            16: {
                "weaponEnchantMeleeAttack": 858,
                "weaponEnchantRangeAttack": 858,
                "weaponEnchantMagicAttack": 858,
                "plusAttack": 1111,
            },
            17: {
                "weaponEnchantMeleeAttack": 944,
                "weaponEnchantRangeAttack": 944,
                "weaponEnchantMagicAttack": 944,
                "plusAttack": 1197,
            },
            18: {
                "weaponEnchantMeleeAttack": 1039,
                "weaponEnchantRangeAttack": 1039,
                "weaponEnchantMagicAttack": 1039,
                "plusAttack": 1292,
            },
            19: {
                "weaponEnchantMeleeAttack": 1143,
                "weaponEnchantRangeAttack": 1143,
                "weaponEnchantMagicAttack": 1143,
                "plusAttack": 1396,
            },
            20: {
                "weaponEnchantMeleeAttack": 1256,
                "weaponEnchantRangeAttack": 1256,
                "weaponEnchantMagicAttack": 1256,
                "plusAttack": 1509,
            },
            21: {
                "weaponEnchantMeleeAttack": 1382,
                "weaponEnchantRangeAttack": 1382,
                "weaponEnchantMagicAttack": 1382,
                "plusAttack": 1635,
            },
            22: {
                "weaponEnchantMeleeAttack": 1520,
                "weaponEnchantRangeAttack": 1520,
                "weaponEnchantMagicAttack": 1520,
                "plusAttack": 1773,
            },
            23: {
                "weaponEnchantMeleeAttack": 1672,
                "weaponEnchantRangeAttack": 1672,
                "weaponEnchantMagicAttack": 1672,
                "plusAttack": 1925,
            },
            24: {
                "weaponEnchantMeleeAttack": 1840,
                "weaponEnchantRangeAttack": 1840,
                "weaponEnchantMagicAttack": 1840,
                "plusAttack": 2093,
            },
            25: {
                "weaponEnchantMeleeAttack": 2024,
                "weaponEnchantRangeAttack": 2024,
                "weaponEnchantMagicAttack": 2024,
                "plusAttack": 2277,
            },
            26: {
                "weaponEnchantMeleeAttack": 2226,
                "weaponEnchantRangeAttack": 2226,
                "weaponEnchantMagicAttack": 2226,
                "plusAttack": 2479,
            },
            27: {
                "weaponEnchantMeleeAttack": 2448,
                "weaponEnchantRangeAttack": 2448,
                "weaponEnchantMagicAttack": 2448,
                "plusAttack": 2701,
            },
            28: {
                "weaponEnchantMeleeAttack": 2694,
                "weaponEnchantRangeAttack": 2694,
                "weaponEnchantMagicAttack": 2694,
                "plusAttack": 2947,
            },
            29: {
                "weaponEnchantMeleeAttack": 2963,
                "weaponEnchantRangeAttack": 2963,
                "weaponEnchantMagicAttack": 2963,
                "plusAttack": 3216,
            },
            30: {
                "weaponEnchantMeleeAttack": 3259,
                "weaponEnchantRangeAttack": 3259,
                "weaponEnchantMagicAttack": 3259,
                "plusAttack": 3512,
            }

        },
        sockets: 4
    },
    {
        name: "ロードオブエレメントダガー",
        icon: unknown,
        type: "dagger",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 2856,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントソード",
        icon: unknown,
        type: "sword",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3414,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントクラブ",
        icon: unknown,
        type: "blunt",
        availableRaces: ["Human", "Elf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3381,
            "multiplyMagicAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントメイス",
        icon: unknown,
        type: "blunt",
        availableRaces: ["Human", "Elf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3381,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントアクス",
        icon: unknown,
        type: "axe",
        availableRaces: ["Human", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 4107,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントデュアルソード",
        icon: unknown,
        type: "dualsword",
        availableRaces: ["Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3453,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントポールアーム",
        icon: unknown,
        type: "polearm",
        availableRaces: ["Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 5982,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントカタール",
        icon: unknown,
        type: "katar",
        availableRaces: ["Dan"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3165,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントゼン",
        icon: unknown,
        type: "zen",
        availableRaces: ["Dekan"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 4740,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントチャル",
        icon: unknown,
        type: "zen",
        availableRaces: ["Dekan"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 4740,
            "multiplyMagicAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントスタッフ",
        icon: unknown,
        type: "staff",
        availableRaces: ["Elf", "DarkElf"],
        fixedBaseOptions: {
            "weaponBaseMagicAttack": 4656,
            "multiplyMagicAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントボウ",
        icon: unknown,
        type: "bow",
        availableRaces: ["HalfElf"],
        fixedBaseOptions: {
            "weaponBaseRangeAttack": 3522,
            "multiplyRangeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントクロスボウ",
        icon: unknown,
        type: "crossbow",
        availableRaces: ["HalfElf"],
        fixedBaseOptions: {
            "weaponBaseRangeAttack": 5220,
            "multiplyRangeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントグローブ",
        icon: unknown,
        type: "glove",
        availableRaces: ["Noir"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 3195,
            "multiplyMeleeAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "ロードオブエレメントオーブ",
        icon: unknown,
        type: "orb",
        availableRaces: ["Rumir"],
        fixedBaseOptions: {
            "weaponBaseMagicAttack": 4404,
            "multiplyMagicAttack": 110,
            "multiplyHitPoint": 100,
            "plusAllStatus": 300,
            "multiplyHitPointAbsorbDamageRate": 30,
            "multiplyDecreaseDamageTaken": 50,
        },
        sockets: 5
    },
    {
        name: "グランドカイザーオニキスボウ",
        icon: bow_grand_kaiser_onixy,
        type: "bow",
        availableRaces: ["HalfElf"],
        fixedBaseOptions: {
            "weaponBaseRangeAttack": 1174,
        },
        enchantableBaseOptions: {
            16: {
                "weaponEnchantMeleeAttack": 411,
                "weaponEnchantRangeAttack": 411,
                "weaponEnchantMagicAttack": 411,
                "plusAttack": 551
            }
        },
        sockets: 4
    },
    {
        name: "グランドカイザーオニキスダガー",
        icon: unknown,
        type: "dagger",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        enchantableBaseOptions: [
            {
                "meleeAttack": 1174,
            },
        ],
        sockets: 4
    },
    {
        name: "ゼータオブシディアンダガー",
        icon: dagger_zeta_obsidian,
        type: "dagger",
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        fixedBaseOptions: {
            "weaponBaseMeleeAttack": 1428
        },
        enchantableBaseOptions: {
            0: {
                "plusAttack": 150,
            },
            1: {
                "weaponEnchantMeleeAttack": 141,
                "weaponEnchantRangeAttack": 141,
                "weaponEnchantMagicAttack": 141,
                "plusAttack": 291,
            },
            2: {
                "weaponEnchantMeleeAttack": 155,
                "weaponEnchantRangeAttack": 155,
                "weaponEnchantMagicAttack": 155,
                "plusAttack": 305,
            },
            3: {
                "weaponEnchantMeleeAttack": 171,
                "weaponEnchantRangeAttack": 171,
                "weaponEnchantMagicAttack": 171,
                "plusAttack": 321,
            },
            4: {
                "weaponEnchantMeleeAttack": 188,
                "weaponEnchantRangeAttack": 188,
                "weaponEnchantMagicAttack": 188,
                "plusAttack": 338,
            },
            5: {
                "weaponEnchantMeleeAttack": 207,
                "weaponEnchantRangeAttack": 207,
                "weaponEnchantMagicAttack": 207,
                "plusAttack": 357,
            },
            6: {
                "weaponEnchantMeleeAttack": 228,
                "weaponEnchantRangeAttack": 228,
                "weaponEnchantMagicAttack": 228,
                "plusAttack": 378,
            },
            7: {
                "weaponEnchantMeleeAttack": 251,
                "weaponEnchantRangeAttack": 251,
                "weaponEnchantMagicAttack": 251,
                "plusAttack": 401,
            },
            8: {
                "weaponEnchantMeleeAttack": 275,
                "weaponEnchantRangeAttack": 275,
                "weaponEnchantMagicAttack": 275,
                "plusAttack": 425,
            },
            9: {
                "weaponEnchantMeleeAttack": 303,
                "weaponEnchantRangeAttack": 303,
                "weaponEnchantMagicAttack": 303,
                "plusAttack": 453,
            },
        },
        sockets: 4
    }

]

export const shields: ItemTemplate[] = [
    {
        name: "ゼノオパニエルガーダー",
        icon: guarder_zeno_opaniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 337,
                "magicalDefense": 207,
            },
            "Elf": {
                "physicalDefense": 276,
                "magicalDefense": 288,
            },
            "HalfElf": {
                "physicalDefense": 276,
                "magicalDefense": 230,
            },
            "Dan": {
                "physicalDefense": 299,
                "magicalDefense": 207,
            },
            "Dekan": {
                "physicalDefense": 299,
                "magicalDefense": 241,
            },
            "DarkElf": {
                "physicalDefense": 230,
                "magicalDefense": 288,
            },
            "Giant": {
                "physicalDefense": 353,
                "magicalDefense": 184,
            },
            "Rumir": {
                "physicalDefense": 345,
                "magicalDefense": 422
            },
            "Noir": {
                "physicalDefense": 422,
                "magicalDefense": 345,
            }
        },
        enchantableBaseOptions: {
            0: {
                'multiplySkillDefense': 10,
                'plusHitPoint': 1000,
                'plusMagicPoint': 1000,
                'multiplyAttackSpeed': 15
            },
            1: {
                'multiplySkillDefense': 11,
                'plusHitPoint': 1015,
                'plusMagicPoint': 1015,
                'multiplyAttackSpeed': 15
            },
            2: {
                'multiplySkillDefense': 12,
                'plusHitPoint': 1032,
                'plusMagicPoint': 1032,
                'multiplyAttackSpeed': 15
            },
            3: {
                'multiplySkillDefense': 13,
                'plusHitPoint': 1051,
                'plusMagicPoint': 1051,
                'multiplyAttackSpeed': 15
            },
            4: {
                'multiplySkillDefense': 15,
                'plusHitPoint': 1072,
                'plusMagicPoint': 1072,
                'multiplyAttackSpeed': 15
            },
            5: {
                'multiplySkillDefense': 16,
                'plusHitPoint': 1096,
                'plusMagicPoint': 1096,
                'multiplyAttackSpeed': 15
            },
            6: {
                'multiplySkillDefense': 17,
                'plusHitPoint': 1121,
                'plusMagicPoint': 1121,
                'multiplyAttackSpeed': 15
            },
            7: {
                'multiplySkillDefense': 18,
                'plusHitPoint': 1149,
                'plusMagicPoint': 1149,
                'multiplyAttackSpeed': 15
            },
            8: {
                'multiplySkillDefense': 20,
                'plusHitPoint': 1180,
                'plusMagicPoint': 1180,
                'multiplyAttackSpeed': 15
            },
            9: {
                'multiplySkillDefense': 21,
                'plusHitPoint': 1215,
                'plusMagicPoint': 1215,
                'multiplyAttackSpeed': 15
            },
            10: {
                'multiplySkillDefense': 22,
                'plusHitPoint': 1252,
                'plusMagicPoint': 1252,
                'multiplyAttackSpeed': 15
            },
            11: {
                'multiplySkillDefense': 23,
                'plusHitPoint': 1293,
                'plusMagicPoint': 1293,
                'multiplyAttackSpeed': 15
            },
            12: {
                'multiplySkillDefense': 25,
                'plusHitPoint': 1339,
                'plusMagicPoint': 1339,
                'multiplyAttackSpeed': 15
            },
            13: {
                'multiplySkillDefense': 26,
                'plusHitPoint': 1389,
                'plusMagicPoint': 1389,
                'multiplyAttackSpeed': 15
            },
            14: {
                'multiplySkillDefense': 27,
                'plusHitPoint': 1443,
                'plusMagicPoint': 1443,
                'multiplyAttackSpeed': 15
            },
            15: {
                'multiplySkillDefense': 28,
                'plusHitPoint': 1504,
                'plusMagicPoint': 1504,
                'multiplyAttackSpeed': 15
            },
            16: {
                'multiplySkillDefense': 30,
                'plusHitPoint': 1570,
                'plusMagicPoint': 1570,
                'multiplyAttackSpeed': 15
            },
            17: {
                'multiplySkillDefense': 31,
                'plusHitPoint': 1643,
                'plusMagicPoint': 1643,
                'multiplyAttackSpeed': 15
            },
            18: {
                'multiplySkillDefense': 32,
                'plusHitPoint': 3172,
                'plusMagicPoint': 3172,
                'multiplyAttackSpeed': 15
            },
            19: {
                'multiplySkillDefense': 33,
                'plusHitPoint': 4250,
                'plusMagicPoint': 4250,
                'multiplyAttackSpeed': 15
            },
            20: {
                'multiplySkillDefense': 35,
                'plusHitPoint': 4639,
                'plusMagicPoint': 4639,
                'multiplyAttackSpeed': 15
            },
            21: {
                'multiplySkillDefense': 36,
                'plusHitPoint': 5067,
                'plusMagicPoint': 5067,
                'multiplyAttackSpeed': 15
            },
            22: {
                'multiplySkillDefense': 37,
                'plusHitPoint': 6673,
                'plusMagicPoint': 6673,
                'multiplyAttackSpeed': 15
            },
            23: {
                'multiplySkillDefense': 38,
                'plusHitPoint': 7320,
                'plusMagicPoint': 7320,
                'multiplyAttackSpeed': 15
            },
            24: {
                'multiplySkillDefense': 40,
                'plusHitPoint': 8033,
                'plusMagicPoint': 8033,
                'multiplyAttackSpeed': 15
            },
            25: {
                'multiplySkillDefense': 41,
                'plusHitPoint': 10379,
                'plusMagicPoint': 10379,
                'multiplyAttackSpeed': 15
            },
            26: {
                'multiplySkillDefense': 42,
                'plusHitPoint': 11413,
                'plusMagicPoint': 11413,
                'multiplyAttackSpeed': 15
            },
            27: {
                'multiplySkillDefense': 43,
                'plusHitPoint': 12551,
                'plusMagicPoint': 12551,
                'multiplyAttackSpeed': 15
            },
            28: {
                'multiplySkillDefense': 45,
                'plusHitPoint': 15936,
                'plusMagicPoint': 15936,
                'multiplyAttackSpeed': 15
            },
            29: {
                'multiplySkillDefense': 46,
                'plusHitPoint': 17542,
                'plusMagicPoint': 17542,
                'multiplyAttackSpeed': 15
            },
            30: {
                'multiplySkillDefense': 47,
                'plusHitPoint': 19308,
                'plusMagicPoint': 19308,
                'multiplyAttackSpeed': 15
            }

        },
        sockets: 2
    },
    {
        // FIXME: the enchantable option value is not correct
        name: "イグニエルのガーダー",
        icon: guarder_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 337,
                "magicalDefense": 207,
            },
            "Elf": {
                "physicalDefense": 276,
                "magicalDefense": 288,
            },
            "HalfElf": {
                "physicalDefense": 276,
                "magicalDefense": 230,
            },
            "Dan": {
                "physicalDefense": 299,
                "magicalDefense": 207,
            },
            "Dekan": {
                "physicalDefense": 299,
                "magicalDefense": 241,
            },
            "DarkElf": {
                "physicalDefense": 230,
                "magicalDefense": 288,
            },
            "Giant": {
                "physicalDefense": 353,
                "magicalDefense": 184,
            },
            "Rumir": {
                "physicalDefense": 345,
                "magicalDefense": 422,
            },
            "Noir": {
                "physicalDefense": 422,
                "magicalDefense": 345,
            }
        },
        enchantableBaseOptions: {
            0: {
                'multiplySkillDefense': 5,
                'plusAllStatus': 50,
                'plusDefense': 150,
                'multiplyAttackSpeed': 20
            },
            1: {
                'multiplySkillDefense': 6,
                'plusAllStatus': 55,
                'plusDefense': 157,
                'multiplyAttackSpeed': 20
            },
            2: {
                'multiplySkillDefense': 7,
                'plusAllStatus': 60,
                'plusDefense': 165,
                'multiplyAttackSpeed': 20
            },
            3: {
                'multiplySkillDefense': 8,
                'plusAllStatus': 65,
                'plusDefense': 174,
                'multiplyAttackSpeed': 20
            },
            4: {
                'multiplySkillDefense': 10,
                'plusAllStatus': 70,
                'plusDefense': 184,
                'multiplyAttackSpeed': 20
            },
            5: {
                'multiplySkillDefense': 11,
                'plusAllStatus': 76,
                'plusDefense': 195,
                'multiplyAttackSpeed': 20
            },
            6: {
                'multiplySkillDefense': 12,
                'plusAllStatus': 82,
                'plusDefense': 280,
                'multiplyAttackSpeed': 20
            },
            7: {
                'multiplySkillDefense': 13,
                'plusAllStatus': 88,
                'plusDefense': 289,
                'multiplyAttackSpeed': 20
            },
            8: {
                'multiplySkillDefense': 15,
                'plusAllStatus': 95,
                'plusDefense': 299,
                'multiplyAttackSpeed': 20
            },
            9: {
                'multiplySkillDefense': 16,
                'plusAllStatus': 102,
                'plusDefense': 310,
                'multiplyAttackSpeed': 20
            },
            10: {
                'multiplySkillDefense': 17,
                'plusAllStatus': 109,
                'plusDefense': 322,
                'multiplyAttackSpeed': 20
            },
            11: {
                'multiplySkillDefense': 18,
                'plusAllStatus': 117,
                'plusDefense': 335,
                'multiplyAttackSpeed': 20
            },
            12: {
                'multiplySkillDefense': 20,
                'plusAllStatus': 125,
                'plusDefense': 460,
                'multiplyAttackSpeed': 20
            },
            13: {
                'multiplySkillDefense': 21,
                'plusAllStatus': 134,
                'plusDefense': 471,
                'multiplyAttackSpeed': 20
            },
            14: {
                'multiplySkillDefense': 22,
                'plusAllStatus': 143,
                'plusDefense': 483,
                'multiplyAttackSpeed': 20
            },
            15: {
                'multiplySkillDefense': 23,
                'plusAllStatus': 152,
                'plusDefense': 496,
                'multiplyAttackSpeed': 20
            },
            16: {
                'multiplySkillDefense': 25,
                'plusAllStatus': 162,
                'plusDefense': 510,
                'multiplyAttackSpeed': 20
            },
            17: {
                'multiplySkillDefense': 26,
                'plusAllStatus': 172,
                'plusDefense': 525,
                'multiplyAttackSpeed': 20
            },
            18: {
                'multiplySkillDefense': 27,
                'plusAllStatus': 197,
                'plusDefense': 640,
                'multiplyAttackSpeed': 20
            },
            19: {
                'multiplySkillDefense': 28,
                'plusAllStatus': 224,
                'plusDefense': 653,
                'multiplyAttackSpeed': 20
            },
            20: {
                'multiplySkillDefense': 30,
                'plusAllStatus': 238,
                'plusDefense': 667,
                'multiplyAttackSpeed': 20
            },
            21: {
                'multiplySkillDefense': 31,
                'plusAllStatus': 253,
                'plusDefense': 682,
                'multiplyAttackSpeed': 20
            },
            22: {
                'multiplySkillDefense': 32,
                'plusAllStatus': 306,
                'plusDefense': 698,
                'multiplyAttackSpeed': 20
            },
            23: {
                'multiplySkillDefense': 33,
                'plusAllStatus': 325,
                'plusDefense': 715,
                'multiplyAttackSpeed': 20
            },
            24: {
                'multiplySkillDefense': 35,
                'plusAllStatus': 346,
                'plusDefense': 820,
                'multiplyAttackSpeed': 20
            },
            25: {
                'multiplySkillDefense': 36,
                'plusAllStatus': 413,
                'plusDefense': 835,
                'multiplyAttackSpeed': 20
            },
            26: {
                'multiplySkillDefense': 37,
                'plusAllStatus': 438,
                'plusDefense': 851,
                'multiplyAttackSpeed': 20
            },
            27: {
                'multiplySkillDefense': 38,
                'plusAllStatus': 465,
                'plusDefense': 868,
                'multiplyAttackSpeed': 20
            },
            28: {
                'multiplySkillDefense': 40,
                'plusAllStatus': 549,
                'plusDefense': 886,
                'multiplyAttackSpeed': 20
            },
            29: {
                'multiplySkillDefense': 41,
                'plusAllStatus': 583,
                'plusDefense': 905,
                'multiplyAttackSpeed': 20
            },
            30: {
                'multiplySkillDefense': 42,
                'plusAllStatus': 618,
                'plusDefense': 1000,
                'multiplyAttackSpeed': 20
            }

        },
        sockets: 3
    },
    {
        name: "ゼータオブシディアンシールド",
        icon: shield_zeta_obsidian,
        raceEnchantableBaseOptions: {
            "Human": {
                18: {
                    "physicalDefense": 851,
                    "magicalDefense": 522,
                }
            },
            "Elf": {
                18: {
                    "physicalDefense": 696,
                    "magicalDefense": 726,
                }
            },
        },
        sockets: 3
    }

]
export const arrows: ItemTemplate[] = [
    {
        name: "ベロライトの矢",
        icon: unknown,
        fixedBaseOptions: {
            'arrowAttack': 300
        }
    },
    {
        name: "ベロライトのボルト",
        icon: unknown,
        fixedBaseOptions: {
            'arrowAttack': 450
        }
    },
    {
        name: "サドリウムの矢",
        icon: unknown,
        fixedBaseOptions: {
            'arrowAttack': 250
        },
    },
    {
        name: "サドリウムのボルト",
        icon: unknown,
        fixedBaseOptions: {
            'arrowAttack': 400
        },
    },
    {
        name: "アパタイトの矢",
        icon: unknown,
        fixedBaseOptions: {
            'arrowAttack': 210
        },
    },
    {
        name: "アパタイトのボルト",
        icon: unknown,
        fixedBaseOptions: {
            'arrowAttack': 350
        },
    },
    {
        name: "トルマリンの矢",
        icon: arrow_tourmaline,
        fixedBaseOptions: {
            'arrowAttack': 180
        },
    },
    {
        name: "トルマリンのボルト",
        icon: arrow_tourmaline_bolt,
        fixedBaseOptions: {
            'arrowAttack': 300
        },
    },
]

const onyxArmorSynergisticOptions = {
    3: {
        'plusDefense': 200,
        'plusHitPoint': 1500,
    },
    5: {
        'plusVitality': 75,
        'plusAllStatus': 25,
        'plusHitPoint': 3500,
        'multiplyPVEDefense': 30,
    }
}

const ignielArmorSynergisticOptions = {
    5: {
        'plusHitPoint': 25000,
        'plusMagicPoint': 15000,
        'multiplyDecreaseDamageTaken': 5,
    }
}

const obsidianArmorSynergisticOptions = {
    3: {
        'multiplyHitPoint': 10
    },
    5: {
        'multiplySkillDefense': 10,
        'multiplyDefense': 10,
    }
}

const celestiteArmorSynergisticOptions = {
    3: {
        'multiplyAttack': 10,
        'plusAllStatus': 700,
        'muptiplyDecreaseDamageTakenPenetration': 10,
    },
    5: {
        'multiplyDecreaseDamageTaken': 5,
        'multiplySkillDefense': 20,
    }
}


export const helmets: ItemTemplate[] = [
    {
        name: "マグヌスセレスタイトヘルメット",
        icon: helmet_magnus_celestite,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 464,
                "magicalDefense": 285,
            },
            "Elf": {
                "physicalDefense": 380,
                "magicalDefense": 396,
            },
            "HalfElf": {
                "physicalDefense": 380,
                "magicalDefense": 316,
            },
            "Dan": {
                "physicalDefense": 411,
                "magicalDefense": 285,
            },
            "Dekan": {
                "physicalDefense": 411,
                "magicalDefense": 332,
            },
            "DarkElf": {
                "physicalDefense": 316,
                "magicalDefense": 396,
            },
            "Giant": {
                "physicalDefense": 485,
                "magicalDefense": 253,
            },
            "Rumir": {
                "physicalDefense": 475,
                "magicalDefense": 580,
            },
            "Noir": {
                "physicalDefense": 580,
                "magicalDefense": 475,
            },
        },
        fixedBaseOptions: {
            'plusHitPoint': 2000,
        },
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 35,
            },
            1: {
                'plusAllStatus': 67,
            },
            2: {
                'plusAllStatus': 78,
            },
            3: {
                'plusAllStatus': 89,
            },
            4: {
                'plusAllStatus': 102,
            },
            5: {
                'plusAllStatus': 114,
            },
            6: {
                'plusAllStatus': 127,
            },
            7: {
                'plusAllStatus': 141,
            },
            8: {
                'plusAllStatus': 156,
            },
            9: {
                'plusAllStatus': 170,
            },
            10: {
                'plusAllStatus': 186,
            },
            11: {
                'plusAllStatus': 202,
            },
            12: {
                'plusAllStatus': 220,
            },
            13: {
                'plusAllStatus': 238,
            },
            14: {
                'plusAllStatus': 258,
            },
            15: {
                'plusAllStatus': 278,
            },
            16: {
                'plusAllStatus': 300,
            },
            17: {
                'plusAllStatus': 321,
            },
            18: {
                'plusAllStatus': 375,
            },
            19: {
                'plusAllStatus': 433,
            },
            20: {
                'plusAllStatus': 463,
            },
            21: {
                'plusAllStatus': 498,
            },
            22: {
                'plusAllStatus': 611,
            },
            23: {
                'plusAllStatus': 652,
            },
            24: {
                'plusAllStatus': 697,
            },
            25: {
                'plusAllStatus': 841,
            },
            26: {
                'plusAllStatus': 897,
            },
            27: {
                'plusAllStatus': 955,
            },
            28: {
                'plusAllStatus': 1137,
            },
            29: {
                'plusAllStatus': 1209,
            },
            30: {
                'plusAllStatus': 1284,
            }

        },
        sockets: 3,
        synergyKey: "celestiteArmor",
        synergyOptions: celestiteArmorSynergisticOptions
    },
    {
        name: "ゼータオブシディアンヘルメット",
        icon: helmet_zeta_obsidian,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 387,
                "magicalDefense": 237,
            },
            "Elf": {
                "physicalDefense": 316,
                "magicalDefense": 330,
            },
            "HalfElf": {
                "physicalDefense": 316,
                "magicalDefense": 264,
            },
            "Dan": {
                "physicalDefense": 343,
                "magicalDefense": 237,
            },
            "Dekan": {
                "physicalDefense": 343,
                "magicalDefense": 277,
            },
            "DarkElf": {
                "physicalDefense": 264,
                "magicalDefense": 330,
            },
            "Giant": {
                "physicalDefense": 404,
                "magicalDefense": 211,
            },
            "Rumir": {
                "physicalDefense": 396,
                "magicalDefense": 484,
            },
            "Noir": {
                "physicalDefense": 484,
                "magicalDefense": 396,
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 1000,
        },
        enchantableBaseOptions: {
            18: {
                'plusAllStatus': 205,
            },
            21: {
                'plusAllStatus': 273
            },
            22: {
                'plusAllStatus': 336
            }
        },
        sockets: 3,
        synergyKey: "obsidianArmor",
        synergyOptions: obsidianArmorSynergisticOptions
    },
    {
        name: "グランドカイザーオニキスヘルメット(敏)",
        icon: helmet_grand_kaiser_onixy,
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 257,
                "magicalDefense": 158,
            },
            "Elf": {
                "physicalDefense": 210,
                "magicalDefense": 219,
            },
            "HalfElf": {
                "physicalDefense": 210,
                "magicalDefense": 175,
            },
            "Dan": {
                "physicalDefense": 228,
                "magicalDefense": 158,
            },
            "Dekan": {
                "physicalDefense": 228,
                "magicalDefense": 184,
            },
            "DarkElf": {
                "physicalDefense": 175,
                "magicalDefense": 219,
            },
            "Giant": {
                "physicalDefense": 269,
                "magicalDefense": 140,
            },
        },
        enchantableBaseOptions: {
            5: {
                "plusHitPoint": 300,
                "plusAgility": 40
            }
        },
        sockets: 2,
        synergyOptions: onyxArmorSynergisticOptions,
        synergyKey: "onyxArmor"
    },
    {
        name: "イグニエルのヘルメット(攻)",
        icon: helmet_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 257,
                "magicalDefense": 158,
            },
            "Elf": {
                "physicalDefense": 210,
                "magicalDefense": 219,
            },
            "HalfElf": {
                "physicalDefense": 210,
                "magicalDefense": 175,
            },
            "Dan": {
                "physicalDefense": 228,
                "magicalDefense": 158,
            },
            "Dekan": {
                "physicalDefense": 228,
                "magicalDefense": 184,
            },
            "DarkElf": {
                "physicalDefense": 175,
                "magicalDefense": 219,
            },
            "Giant": {
                "physicalDefense": 269,
                "magicalDefense": 140,
            },
            "Rumir": {
                "physicalDefense": 263,
                "magicalDefense": 322,
            },
            "Noir": {
                "physicalDefense": 322,
                "magicalDefense": 263,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplySkillAttack": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplySkillAttack": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplySkillAttack": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplySkillAttack": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplySkillAttack": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplySkillAttack": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplySkillAttack": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplySkillAttack": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplySkillAttack": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplySkillAttack": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplySkillAttack": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplySkillAttack": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplySkillAttack": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplySkillAttack": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplySkillAttack": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplySkillAttack": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplySkillAttack": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplySkillAttack": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplySkillAttack": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplySkillAttack": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplySkillAttack": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplySkillAttack": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplySkillAttack": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplySkillAttack": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplySkillAttack": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplySkillAttack": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplySkillAttack": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplySkillAttack": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplySkillAttack": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplySkillAttack": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplySkillAttack": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            }
        },
        sockets: 3,
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions
    },
    {
        name: "イグニエルのヘルメット(防)",
        icon: helmet_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 257,
                "magicalDefense": 158,
            },
            "Elf": {
                "physicalDefense": 210,
                "magicalDefense": 219,
            },
            "HalfElf": {
                "physicalDefense": 210,
                "magicalDefense": 175,
            },
            "Dan": {
                "physicalDefense": 228,
                "magicalDefense": 158,
            },
            "Dekan": {
                "physicalDefense": 228,
                "magicalDefense": 184,
            },
            "DarkElf": {
                "physicalDefense": 175,
                "magicalDefense": 219,
            },
            "Giant": {
                "physicalDefense": 269,
                "magicalDefense": 140,
            },
            "Rumir": {
                "physicalDefense": 263,
                "magicalDefense": 322,
            },
            "Noir": {
                "physicalDefense": 322,
                "magicalDefense": 263,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplySkillDefense": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplySkillDefense": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplySkillDefense": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplySkillDefense": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplySkillDefense": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplySkillDefense": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplySkillDefense": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplySkillDefense": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplySkillDefense": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplySkillDefense": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplySkillDefense": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplySkillDefense": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplySkillDefense": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplySkillDefense": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplySkillDefense": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplySkillDefense": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplySkillDefense": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplySkillDefense": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplySkillDefense": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplySkillDefense": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplySkillDefense": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplySkillDefense": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplySkillDefense": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplySkillDefense": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplySkillDefense": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplySkillDefense": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplySkillDefense": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplySkillDefense": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplySkillDefense": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplySkillDefense": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplySkillDefense": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            },
        },
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions,
        sockets: 3
    }
]
export const gauntlets: ItemTemplate[] = [
    {
        name: "マグヌスセレスタイトガントレット",
        icon: gauntlet_magnus_celestite,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 354,
                "magicalDefense": 217,
            },
            "Elf": {
                "physicalDefense": 290,
                "magicalDefense": 302,
            },
            "HalfElf": {
                "physicalDefense": 290,
                "magicalDefense": 241,
            },
            "Dan": {
                "physicalDefense": 314,
                "magicalDefense": 217,
            },
            "Dekan": {
                "physicalDefense": 314,
                "magicalDefense": 253,
            },
            "DarkElf": {
                "physicalDefense": 241,
                "magicalDefense": 302,
            },
            "Giant": {
                "physicalDefense": 370,
                "magicalDefense": 193,
            },
            "Rumir": {
                "physicalDefense": 362,
                "magicalDefense": 443,
            },
            "Noir": {
                "physicalDefense": 443,
                "magicalDefense": 362,
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 2000,
        },
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 35,
            },
            1: {
                'plusAllStatus': 62,
            },
            2: {
                'plusAllStatus': 71,
            },
            3: {
                'plusAllStatus': 80,
            },
            4: {
                'plusAllStatus': 91,
            },
            5: {
                'plusAllStatus': 100,
            },
            6: {
                'plusAllStatus': 112,
            },
            7: {
                'plusAllStatus': 123,
            },
            8: {
                'plusAllStatus': 136,
            },
            9: {
                'plusAllStatus': 148,
            },
            10: {
                'plusAllStatus': 161,
            },
            11: {
                'plusAllStatus': 175,
            },
            12: {
                'plusAllStatus': 190,
            },
            13: {
                'plusAllStatus': 204,
            },
            14: {
                'plusAllStatus': 220,
            },
            15: {
                'plusAllStatus': 238,
            },
            16: {
                'plusAllStatus': 256,
            },
            17: {
                'plusAllStatus': 274,
            },
            18: {
                'plusAllStatus': 318,
            },
            19: {
                'plusAllStatus': 366,
            },
            20: {
                'plusAllStatus': 393,
            },
            21: {
                'plusAllStatus': 420,
            },
            22: {
                'plusAllStatus': 514,
            },
            23: {
                'plusAllStatus': 550,
            },
            24: {
                'plusAllStatus': 586,
            },
            25: {
                'plusAllStatus': 706,
            },
            26: {
                'plusAllStatus': 753,
            },
            27: {
                'plusAllStatus': 802,
            },
            28: {
                'plusAllStatus': 953,
            },
            29: {
                'plusAllStatus': 1013,
            },
            30: {
                'plusAllStatus': 1077,
            }
        },
        sockets: 3,
        synergyKey: "celestiteArmor",
        synergyOptions: celestiteArmorSynergisticOptions
    },
    {
        name: "ゼータオブシディアンガントレット",
        icon: gauntlet_zeta_obsidian,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 295,
                "magicalDefense": 181,
            },
            "Elf": {
                "physicalDefense": 241,
                "magicalDefense": 252,
            },
            "HalfElf": {
                "physicalDefense": 241,
                "magicalDefense": 201,
            },
            "Dan": {
                "physicalDefense": 262,
                "magicalDefense": 181,
            },
            "Dekan": {
                "physicalDefense": 262,
                "magicalDefense": 211,
            },
            "DarkElf": {
                "physicalDefense": 201,
                "magicalDefense": 252,
            },
            "Giant": {
                "physicalDefense": 309,
                "magicalDefense": 161,
            },
            "Rumir": {
                "physicalDefense": 302,
                "magicalDefense": 369,
            },
            "Noir": {
                "physicalDefense": 369,
                "magicalDefense": 302,
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 1000,
        },
        enchantableBaseOptions: {
            18: {
                'plusAllStatus': 199,
            },
            21: {
                'plusAllStatus': 267
            },
            22: {
                'plusAllStatus': 330
            }
        },
        sockets: 3,
        synergyKey: "obsidianArmor",
        synergyOptions: obsidianArmorSynergisticOptions
    },
    {
        name: "グランドカイザーオニキスガントレット(敏)",
        icon: gauntlet_grand_kaiser_onixy,
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 197,
                "magicalDefense": 120,
            },
            "Elf": {
                "physicalDefense": 161,
                "magicalDefense": 168,
            },
            "HalfElf": {
                "physicalDefense": 161,
                "magicalDefense": 134,
            },
            "Dan": {
                "physicalDefense": 174,
                "magicalDefense": 120,
            },
            "Dekan": {
                "physicalDefense": 174,
                "magicalDefense": 141,
            },
            "DarkElf": {
                "physicalDefense": 134,
                "magicalDefense": 168,
            },
            "Giant": {
                "physicalDefense": 206,
                "magicalDefense": 107
            }
        },
        enchantableBaseOptions: {
            5: {
                "plusHitPoint": 300,
                "plusAgility": 40
            }
        },
        sockets: 2,
        synergyOptions: onyxArmorSynergisticOptions,
        synergyKey: "onyxArmor"
    },
    {
        name: "イグニエルのガントレット(攻)",
        icon: gauntlet_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 197,
                "magicalDefense": 120,
            },
            "Elf": {
                "physicalDefense": 161,
                "magicalDefense": 168,
            },
            "HalfElf": {
                "physicalDefense": 161,
                "magicalDefense": 134,
            },
            "Dan": {
                "physicalDefense": 174,
                "magicalDefense": 120,
            },
            "Dekan": {
                "physicalDefense": 174,
                "magicalDefense": 141,
            },
            "DarkElf": {
                "physicalDefense": 134,
                "magicalDefense": 168,
            },
            "Giant": {
                "physicalDefense": 206,
                "magicalDefense": 107
            },
            "Rumir": {
                "physicalDefense": 201,
                "magicalDefense": 246,
            },
            "Noir": {
                "physicalDefense": 246,
                "magicalDefense": 201,
            },
        },
        enchantableBaseOptions: {
            0: {
                "multiplyPVPAttack": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyPVPAttack": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyPVPAttack": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyPVPAttack": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyPVPAttack": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyPVPAttack": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyPVPAttack": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyPVPAttack": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyPVPAttack": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyPVPAttack": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyPVPAttack": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyPVPAttack": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyPVPAttack": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyPVPAttack": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyPVPAttack": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyPVPAttack": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyPVPAttack": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyPVPAttack": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyPVPAttack": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyPVPAttack": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyPVPAttack": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyPVPAttack": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyPVPAttack": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyPVPAttack": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyPVPAttack": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyPVPAttack": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyPVPAttack": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyPVPAttack": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyPVPAttack": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyPVPAttack": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyPVPAttack": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            }
        },
        sockets: 3,
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions
    },
    {
        name: "イグニエルのガントレット(防)",
        icon: gauntlet_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 197,
                "magicalDefense": 120,
            },
            "Elf": {
                "physicalDefense": 161,
                "magicalDefense": 168,
            },
            "HalfElf": {
                "physicalDefense": 161,
                "magicalDefense": 134,
            },
            "Dan": {
                "physicalDefense": 174,
                "magicalDefense": 120,
            },
            "Dekan": {
                "physicalDefense": 174,
                "magicalDefense": 141,
            },
            "DarkElf": {
                "physicalDefense": 134,
                "magicalDefense": 168,
            },
            "Giant": {
                "physicalDefense": 206,
                "magicalDefense": 107
            },
            "Rumir": {
                "physicalDefense": 201,
                "magicalDefense": 246,
            },
            "Noir": {
                "physicalDefense": 246,
                "magicalDefense": 201,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplyPVPDefense": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyPVPDefense": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyPVPDefense": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyPVPDefense": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyPVPDefense": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyPVPDefense": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyPVPDefense": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyPVPDefense": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyPVPDefense": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyPVPDefense": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyPVPDefense": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyPVPDefense": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyPVPDefense": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyPVPDefense": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyPVPDefense": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyPVPDefense": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyPVPDefense": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyPVPDefense": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyPVPDefense": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyPVPDefense": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyPVPDefense": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyPVPDefense": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyPVPDefense": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyPVPDefense": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyPVPDefense": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyPVPDefense": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyPVPDefense": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyPVPDefense": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyPVPDefense": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyPVPDefense": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyPVPDefense": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            },
        },
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions,
        sockets: 3
    }

]
export const tunics: ItemTemplate[] = [
    {
        name: "マグヌスセレスタイトチュニック",
        icon: tunic_magnus_celestite,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 633,
                "magicalDefense": 388,
            },
            "Elf": {
                "physicalDefense": 518,
                "magicalDefense": 540,
            },
            "HalfElf": {
                "physicalDefense": 518,
                "magicalDefense": 432
            },
            "Dan": {
                "physicalDefense": 561,
                "magicalDefense": 388,
            },
            "Dekan": {
                "physicalDefense": 561,
                "magicalDefense": 453,
            },
            "DarkElf": {
                "physicalDefense": 432,
                "magicalDefense": 540,
            },
            "Giant": {
                "physicalDefense": 662,
                "magicalDefense": 345
            },
            "Rumir": {
                "physicalDefense": 648,
                "magicalDefense": 792
            },
            "Noir": {
                "physicalDefense": 792,
                "magicalDefense": 648
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 2000,
        },
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 35,
            },
            1: {
                'plusAllStatus': 78,
            },
            2: {
                'plusAllStatus': 89,
            },
            3: {
                'plusAllStatus': 100,
            },
            4: {
                'plusAllStatus': 112,
            },
            5: {
                'plusAllStatus': 125,
            },
            6: {
                'plusAllStatus': 138,
            },
            7: {
                'plusAllStatus': 152,
            },
            8: {
                'plusAllStatus': 166,
            },
            9: {
                'plusAllStatus': 181,
            },
            10: {
                'plusAllStatus': 197,
            },
            11: {
                'plusAllStatus': 213,
            },
            12: {
                'plusAllStatus': 231,
            },
            13: {
                'plusAllStatus': 249,
            },
            14: {
                'plusAllStatus': 269,
            },
            15: {
                'plusAllStatus': 289,
            },
            16: {
                'plusAllStatus': 310,
            },
            17: {
                'plusAllStatus': 332,
            },
            18: {
                'plusAllStatus': 386,
            },
            19: {
                'plusAllStatus': 444,
            },
            20: {
                'plusAllStatus': 474,
            },
            21: {
                'plusAllStatus': 508,
            },
            22: {
                'plusAllStatus': 622,
            },
            23: {
                'plusAllStatus': 663,
            },
            24: {
                'plusAllStatus': 708,
            },
            25: {
                'plusAllStatus': 852,
            },
            26: {
                'plusAllStatus': 908,
            },
            27: {
                'plusAllStatus': 966,
            },
            28: {
                'plusAllStatus': 1147,
            },
            29: {
                'plusAllStatus': 1219,
            },
            30: {
                'plusAllStatus': 1295,
            }

        },
        sockets: 3,
        synergyKey: "celestiteArmor",
        synergyOptions: celestiteArmorSynergisticOptions
    },
    {
        name: "ゼータオブシディアンチュニック",
        icon: tunic_zeta_obsidian,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 528,
                "magicalDefense": 324,
            },
            "Elf": {
                "physicalDefense": 432,
                "magicalDefense": 450,
            },
            "HalfElf": {
                "physicalDefense": 432,
                "magicalDefense": 360
            },
            "Dan": {
                "physicalDefense": 468,
                "magicalDefense": 324,
            },
            "Dekan": {
                "physicalDefense": 468,
                "magicalDefense": 378,
            },
            "DarkElf": {
                "physicalDefense": 360,
                "magicalDefense": 450,
            },
            "Giant": {
                "physicalDefense": 552,
                "magicalDefense": 288
            },
            "Rumir": {
                "physicalDefense": 540,
                "magicalDefense": 660
            },
            "Noir": {
                "physicalDefense": 660,
                "magicalDefense": 540
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 1000,
        },
        enchantableBaseOptions: {
            18: {
                'plusAllStatus': 235,
            },
            21: {
                'plusAllStatus': 303
            },
            23: {
                'plusAllStatus': 389
            }
        },
        sockets: 3,
        synergyKey: "obsidianArmor",
        synergyOptions: obsidianArmorSynergisticOptions
    },
    {
        name: "グランドカイザーオニキスチュニック(敏)",
        icon: tunic_grand_kaiser_onixy,
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 352,
                "magicalDefense": 216,
            },
            "Elf": {
                "physicalDefense": 288,
                "magicalDefense": 300,
            },
            "HalfElf": {
                "physicalDefense": 288,
                "magicalDefense": 240,
            },
            "Dan": {
                "physicalDefense": 312,
                "magicalDefense": 216,
            },
            "Dekan": {
                "physicalDefense": 312,
                "magicalDefense": 252,
            },
            "DarkElf": {
                "physicalDefense": 240,
                "magicalDefense": 300,
            },
            "Giant": {
                "physicalDefense": 368,
                "magicalDefense": 192,
            }
        },
        enchantableBaseOptions: {
            5: {
                "plusHitPoint": 300,
                "plusAgility": 40
            }
        },
        sockets: 2,
        synergyOptions: onyxArmorSynergisticOptions,
        synergyKey: "onyxArmor"
    },
    {
        name: "イグニエルのチュニック(攻)",
        icon: tunic_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 352,
                "magicalDefense": 216,
            },
            "Elf": {
                "physicalDefense": 288,
                "magicalDefense": 300,
            },
            "HalfElf": {
                "physicalDefense": 288,
                "magicalDefense": 240,
            },
            "Dan": {
                "physicalDefense": 312,
                "magicalDefense": 216,
            },
            "Dekan": {
                "physicalDefense": 312,
                "magicalDefense": 252,
            },
            "DarkElf": {
                "physicalDefense": 240,
                "magicalDefense": 300,
            },
            "Giant": {
                "physicalDefense": 368,
                "magicalDefense": 192,
            },
            "Rumir": {
                "physicalDefense": 360,
                "magicalDefense": 440,
            },
            "Noir": {
                "physicalDefense": 440,
                "magicalDefense": 360,
            },
        },
        enchantableBaseOptions: {
            0: {
                "multiplyPVEAttack": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyPVEAttack": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyPVEAttack": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyPVEAttack": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyPVEAttack": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyPVEAttack": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyPVEAttack": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyPVEAttack": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyPVEAttack": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyPVEAttack": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyPVEAttack": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyPVEAttack": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyPVEAttack": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyPVEAttack": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyPVEAttack": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyPVEAttack": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyPVEAttack": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyPVEAttack": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyPVEAttack": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyPVEAttack": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyPVEAttack": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyPVEAttack": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyPVEAttack": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyPVEAttack": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyPVEAttack": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyPVEAttack": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyPVEAttack": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyPVEAttack": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyPVEAttack": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyPVEAttack": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyPVEAttack": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            }
        },
        sockets: 3,
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions
    },
    {
        name: "イグニエルのチュニック(防)",
        icon: tunic_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 352,
                "magicalDefense": 216,
            },
            "Elf": {
                "physicalDefense": 288,
                "magicalDefense": 300,
            },
            "HalfElf": {
                "physicalDefense": 288,
                "magicalDefense": 240,
            },
            "Dan": {
                "physicalDefense": 312,
                "magicalDefense": 216,
            },
            "Dekan": {
                "physicalDefense": 312,
                "magicalDefense": 252,
            },
            "DarkElf": {
                "physicalDefense": 240,
                "magicalDefense": 300,
            },
            "Giant": {
                "physicalDefense": 368,
                "magicalDefense": 192,
            },
            "Rumir": {
                "physicalDefense": 360,
                "magicalDefense": 440,
            },
            "Noir": {
                "physicalDefense": 440,
                "magicalDefense": 360,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplyDefense": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyDefense": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyDefense": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyDefense": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyDefense": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyDefense": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyDefense": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyDefense": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyDefense": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyDefense": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyDefense": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyDefense": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyDefense": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyDefense": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyDefense": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyDefense": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyDefense": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyDefense": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyDefense": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyDefense": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyDefense": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyDefense": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyDefense": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyDefense": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyDefense": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyDefense": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyDefense": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyDefense": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyDefense": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyDefense": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyDefense": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            },
        },
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions,
        sockets: 3
    }

]
export const leggings: ItemTemplate[] = [
    {
        name: "マグヌスセレスタイトレギンス",
        icon: leggings_magnus_celestite,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 548,
                "magicalDefense": 336,
            },
            "Elf": {
                "physicalDefense": 448,
                "magicalDefense": 467,
            },
            "HalfElf": {
                "physicalDefense": 448,
                "magicalDefense": 373,
            },
            "Dan": {
                "physicalDefense": 485,
                "magicalDefense": 336
            },
            "Dekan": {
                "physicalDefense": 485,
                "magicalDefense": 392
            },
            "DarkElf": {
                "physicalDefense": 373,
                "magicalDefense": 467
            },
            "Giant": {
                "physicalDefense": 573,
                "magicalDefense": 299
            },
            "Rumir": {
                "physicalDefense": 560,
                "magicalDefense": 685
            },
            "Noir": {
                "physicalDefense": 685,
                "magicalDefense": 560
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 2000,
        },
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 35,
            },
            1: {
                'plusAllStatus': 62,
            },
            2: {
                'plusAllStatus': 71,
            },
            3: {
                'plusAllStatus': 80,
            },
            4: {
                'plusAllStatus': 91,
            },
            5: {
                'plusAllStatus': 100,
            },
            6: {
                'plusAllStatus': 112,
            },
            7: {
                'plusAllStatus': 123,
            },
            8: {
                'plusAllStatus': 136,
            },
            9: {
                'plusAllStatus': 148,
            },
            10: {
                'plusAllStatus': 161,
            },
            11: {
                'plusAllStatus': 175,
            },
            12: {
                'plusAllStatus': 190,
            },
            13: {
                'plusAllStatus': 204,
            },
            14: {
                'plusAllStatus': 220,
            },
            15: {
                'plusAllStatus': 238,
            },
            16: {
                'plusAllStatus': 256,
            },
            17: {
                'plusAllStatus': 274,
            },
            18: {
                'plusAllStatus': 318,
            },
            19: {
                'plusAllStatus': 366,
            },
            20: {
                'plusAllStatus': 393,
            },
            21: {
                'plusAllStatus': 420,
            },
            22: {
                'plusAllStatus': 514,
            },
            23: {
                'plusAllStatus': 550,
            },
            24: {
                'plusAllStatus': 586,
            },
            25: {
                'plusAllStatus': 706,
            },
            26: {
                'plusAllStatus': 753,
            },
            27: {
                'plusAllStatus': 802,
            },
            28: {
                'plusAllStatus': 953,
            },
            29: {
                'plusAllStatus': 1013,
            },
            30: {
                'plusAllStatus': 1077,
            }
        },
        sockets: 3,
        synergyKey: "celestiteArmor",
        synergyOptions: celestiteArmorSynergisticOptions
    },
    {
        name: "ゼータオブシディアンレギンス",
        icon: leggings_zeta_obsidian,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 456,
                "magicalDefense": 280,
            },
            "Elf": {
                "physicalDefense": 373,
                "magicalDefense": 389,
            },
            "HalfElf": {
                "physicalDefense": 373,
                "magicalDefense": 311,
            },
            "Dan": {
                "physicalDefense": 404,
                "magicalDefense": 280,
            },
            "Dekan": {
                "physicalDefense": 404,
                "magicalDefense": 326,
            },
            "DarkElf": {
                "physicalDefense": 311,
                "magicalDefense": 389,
            },
            "Giant": {
                "physicalDefense": 477,
                "magicalDefense": 249
            },
            "Rumir": {
                "physicalDefense": 467,
                "magicalDefense": 570
            },
            "Noir": {
                "physicalDefense": 570,
                "magicalDefense": 467
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 1000,
        },
        enchantableBaseOptions: {
            18: {
                'plusAllStatus': 211,
            },
            21: {
                'plusAllStatus': 279
            },
            23: {
                'plusAllStatus': 365
            }
        },
        sockets: 3,
        synergyKey: "obsidianArmor",
        synergyOptions: obsidianArmorSynergisticOptions
    },
    {
        name: "グランドカイザーオニキスレギンス(敏)",
        icon: leggings_grand_kaiser_onixy,
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 304,
                "magicalDefense": 186,
            },
            "Elf": {
                "physicalDefense": 249,
                "magicalDefense": 259,
            },
            "HalfElf": {
                "physicalDefense": 249,
                "magicalDefense": 207,
            },
            "Dan": {
                "physicalDefense": 269,
                "magicalDefense": 186,
            },
            "Dekan": {
                "physicalDefense": 269,
                "magicalDefense": 217,
            },
            "DarkElf": {
                "physicalDefense": 207,
                "magicalDefense": 259,
            },
            "Giant": {
                "physicalDefense": 318,
                "magicalDefense": 166,
            },
        },
        enchantableBaseOptions: {
            5: {
                "plusHitPoint": 300,
                "plusAgility": 40
            }
        },
        sockets: 2,
        synergyOptions: onyxArmorSynergisticOptions,
        synergyKey: "onyxArmor"
    },
    {
        name: "イグニエルのレギンス(攻)",
        icon: leggings_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 304,
                "magicalDefense": 186,
            },
            "Elf": {
                "physicalDefense": 249,
                "magicalDefense": 259,
            },
            "HalfElf": {
                "physicalDefense": 249,
                "magicalDefense": 207,
            },
            "Dan": {
                "physicalDefense": 269,
                "magicalDefense": 186,
            },
            "Dekan": {
                "physicalDefense": 269,
                "magicalDefense": 217,
            },
            "DarkElf": {
                "physicalDefense": 207,
                "magicalDefense": 259,
            },
            "Giant": {
                "physicalDefense": 318,
                "magicalDefense": 166,
            },
            "Rumir": {
                "physicalDefense": 311,
                "magicalDefense": 380,
            },
            "Noir": {
                "physicalDefense": 380,
                "magicalDefense": 311,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplyAttack": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyAttack": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyAttack": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyAttack": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyAttack": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyAttack": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyAttack": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyAttack": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyAttack": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyAttack": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyAttack": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyAttack": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyAttack": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyAttack": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyAttack": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyAttack": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyAttack": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyAttack": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyAttack": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyAttack": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyAttack": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyAttack": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyAttack": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyAttack": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyAttack": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyAttack": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyAttack": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyAttack": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyAttack": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyAttack": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyAttack": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            }
        },
        sockets: 3,
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions
    },
    {
        name: "イグニエルのレギンス(防)",
        icon: leggings_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 304,
                "magicalDefense": 186,
            },
            "Elf": {
                "physicalDefense": 249,
                "magicalDefense": 259,
            },
            "HalfElf": {
                "physicalDefense": 249,
                "magicalDefense": 207,
            },
            "Dan": {
                "physicalDefense": 269,
                "magicalDefense": 186,
            },
            "Dekan": {
                "physicalDefense": 269,
                "magicalDefense": 217,
            },
            "DarkElf": {
                "physicalDefense": 207,
                "magicalDefense": 259,
            },
            "Giant": {
                "physicalDefense": 318,
                "magicalDefense": 166,
            },
            "Rumir": {
                "physicalDefense": 311,
                "magicalDefense": 380,
            },
            "Noir": {
                "physicalDefense": 380,
                "magicalDefense": 311,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplyPVEDefense": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyPVEDefense": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyPVEDefense": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyPVEDefense": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyPVEDefense": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyPVEDefense": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyPVEDefense": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyPVEDefense": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyPVEDefense": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyPVEDefense": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyPVEDefense": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyPVEDefense": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyPVEDefense": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyPVEDefense": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyPVEDefense": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyPVEDefense": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyPVEDefense": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyPVEDefense": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyPVEDefense": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyPVEDefense": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyPVEDefense": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyPVEDefense": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyPVEDefense": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyPVEDefense": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyPVEDefense": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyPVEDefense": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyPVEDefense": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyPVEDefense": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyPVEDefense": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyPVEDefense": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyPVEDefense": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            },
        },
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions,
        sockets: 3
    }
]
export const boots: ItemTemplate[] = [
    {
        name: "マグヌスセレスタイトブーツ",
        icon: boots_magnus_celestite,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 354,
                "magicalDefense": 217,
            },
            "Elf": {
                "physicalDefense": 290,
                "magicalDefense": 302,
            },
            "HalfElf": {
                "physicalDefense": 290,
                "magicalDefense": 241
            },
            "Dan": {
                "physicalDefense": 314,
                "magicalDefense": 217,
            },
            "Dekan": {
                "physicalDefense": 314,
                "magicalDefense": 253
            },
            "DarkElf": {
                "physicalDefense": 241,
                "magicalDefense": 302,
            },
            "Giant": {
                "physicalDefense": 370,
                "magicalDefense": 193
            },
            "Rumir": {
                "physicalDefense": 362,
                "magicalDefense": 443
            },
            "Noir": {
                "physicalDefense": 443,
                "magicalDefense": 362
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 2000,
        },
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 35,
            },
            1: {
                'plusAllStatus': 67,
            },
            2: {
                'plusAllStatus': 78,
            },
            3: {
                'plusAllStatus': 89,
            },
            4: {
                'plusAllStatus': 102,
            },
            5: {
                'plusAllStatus': 114,
            },
            6: {
                'plusAllStatus': 127,
            },
            7: {
                'plusAllStatus': 141,
            },
            8: {
                'plusAllStatus': 155,
            },
            9: {
                'plusAllStatus': 170,
            },
            10: {
                'plusAllStatus': 186,
            },
            11: {
                'plusAllStatus': 202,
            },
            12: {
                'plusAllStatus': 220,
            },
            13: {
                'plusAllStatus': 238,
            },
            14: {
                'plusAllStatus': 258,
            },
            15: {
                'plusAllStatus': 278,
            },
            16: {
                'plusAllStatus': 300,
            },
            17: {
                'plusAllStatus': 321,
            },
            18: {
                'plusAllStatus': 375,
            },
            19: {
                'plusAllStatus': 433,
            },
            20: {
                'plusAllStatus': 463,
            },
            21: {
                'plusAllStatus': 498,
            },
            22: {
                'plusAllStatus': 611,
            },
            23: {
                'plusAllStatus': 652,
            },
            24: {
                'plusAllStatus': 697,
            },
            25: {
                'plusAllStatus': 841,
            },
            26: {
                'plusAllStatus': 897,
            },
            27: {
                'plusAllStatus': 955,
            },
            28: {
                'plusAllStatus': 1137,
            },
            29: {
                'plusAllStatus': 1209,
            },
            30: {
                'plusAllStatus': 1284,
            }
        },
        sockets: 3,
        synergyKey: "celestiteArmor",
        synergyOptions: celestiteArmorSynergisticOptions
    },
    {
        name: "ゼータオブシディアンブーツ",
        icon: boots_zeta_obsidian,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 295,
                "magicalDefense": 181,
            },
            "Elf": {
                "physicalDefense": 241,
                "magicalDefense": 252,
            },
            "HalfElf": {
                "physicalDefense": 241,
                "magicalDefense": 201
            },
            "Dan": {
                "physicalDefense": 262,
                "magicalDefense": 181,
            },
            "Dekan": {
                "physicalDefense": 262,
                "magicalDefense": 211
            },
            "DarkElf": {
                "physicalDefense": 201,
                "magicalDefense": 252,
            },
            "Giant": {
                "physicalDefense": 309,
                "magicalDefense": 161
            },
            "Rumir": {
                "physicalDefense": 302,
                "magicalDefense": 369
            },
            "Noir": {
                "physicalDefense": 369,
                "magicalDefense": 302
            }
        },
        fixedBaseOptions: {
            'plusHitPoint': 1000,
        },
        enchantableBaseOptions: {
            14: {
                'plusAllStatus': 134,
            },
            21: {
                'plusAllStatus': 267,
            },
            22: {
                'plusAllStatus': 330,
            }
        },
        sockets: 3,
        synergyKey: "obsidianArmor",
        synergyOptions: obsidianArmorSynergisticOptions
    },
    {
        name: "グランドカイザーオニキスブーツ(敏)",
        icon: boots_grand_kaiser_onixy,
        availableRaces: ["Human", "Elf", "HalfElf", "Dan", "Dekan", "DarkElf", "Giant"],
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 197,
                "magicalDefense": 120,
            },
            "Elf": {
                "physicalDefense": 161,
                "magicalDefense": 168,
            },
            "HalfElf": {
                "physicalDefense": 161,
                "magicalDefense": 134,
            },
            "Dan": {
                "physicalDefense": 174,
                "magicalDefense": 120,
            },
            "Dekan": {
                "physicalDefense": 174,
                "magicalDefense": 141,
            },
            "DarkElf": {
                "physicalDefense": 134,
                "magicalDefense": 168,
            },
            "Giant": {
                "physicalDefense": 206,
                "magicalDefense": 107
            }
        },
        enchantableBaseOptions: {
            5: {
                "plusHitPoint": 300,
                "plusAgility": 40
            }
        },
        sockets: 2,
        synergyOptions: onyxArmorSynergisticOptions,
        synergyKey: "onyxArmor"
    },
    {
        name: "イグニエルのブーツ(攻)",
        icon: boots_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 197,
                "magicalDefense": 120,
            },
            "Elf": {
                "physicalDefense": 161,
                "magicalDefense": 168,
            },
            "HalfElf": {
                "physicalDefense": 161,
                "magicalDefense": 134,
            },
            "Dan": {
                "physicalDefense": 174,
                "magicalDefense": 120,
            },
            "Dekan": {
                "physicalDefense": 174,
                "magicalDefense": 141,
            },
            "DarkElf": {
                "physicalDefense": 134,
                "magicalDefense": 168,
            },
            "Giant": {
                "physicalDefense": 206,
                "magicalDefense": 107
            },
            "Rumir": {
                "physicalDefense": 201,
                "magicalDefense": 246,
            },
            "Noir": {
                "physicalDefense": 246,
                "magicalDefense": 201,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplyPVPAttack": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyPVPAttack": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyPVPAttack": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyPVPAttack": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyPVPAttack": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyPVPAttack": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyPVPAttack": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyPVPAttack": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyPVPAttack": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyPVPAttack": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyPVPAttack": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyPVPAttack": 16,
                "plusDefense": 335,
                "plusAllStatus": 91
            },
            12: {
                "multiplyPVPAttack": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyPVPAttack": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyPVPAttack": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyPVPAttack": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyPVPAttack": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyPVPAttack": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyPVPAttack": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyPVPAttack": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyPVPAttack": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyPVPAttack": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyPVPAttack": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyPVPAttack": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyPVPAttack": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyPVPAttack": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyPVPAttack": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyPVPAttack": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyPVPAttack": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyPVPAttack": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyPVPAttack": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            }
        },
        sockets: 3,
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions
    },
    {
        name: "イグニエルのブーツ(防)",
        icon: boots_igniel,
        raceBaseOptions: {
            "Human": {
                "physicalDefense": 197,
                "magicalDefense": 120,
            },
            "Elf": {
                "physicalDefense": 161,
                "magicalDefense": 168,
            },
            "HalfElf": {
                "physicalDefense": 161,
                "magicalDefense": 134,
            },
            "Dan": {
                "physicalDefense": 174,
                "magicalDefense": 120,
            },
            "Dekan": {
                "physicalDefense": 174,
                "magicalDefense": 141,
            },
            "DarkElf": {
                "physicalDefense": 134,
                "magicalDefense": 168,
            },
            "Giant": {
                "physicalDefense": 206,
                "magicalDefense": 107
            },
            "Rumir": {
                "physicalDefense": 201,
                "magicalDefense": 246,
            },
            "Noir": {
                "physicalDefense": 246,
                "magicalDefense": 201,
            }
        },
        enchantableBaseOptions: {
            0: {
                "multiplyPVPDefense": 5,
                "plusDefense": 150,
                "plusAllStatus": 32,
            },
            1: {
                "multiplyPVPDefense": 6,
                "plusDefense": 157,
                "plusAllStatus": 37,
            },
            2: {
                "multiplyPVPDefense": 7,
                "plusDefense": 165,
                "plusAllStatus": 37,
            },
            3: {
                "multiplyPVPDefense": 8,
                "plusDefense": 174,
                "plusAllStatus": 42,
            },
            4: {
                "multiplyPVPDefense": 9,
                "plusDefense": 184,
                "plusAllStatus": 47,
            },
            5: {
                "multiplyPVPDefense": 10,
                "plusDefense": 195,
                "plusAllStatus": 52,
            },
            6: {
                "multiplyPVPDefense": 11,
                "plusDefense": 280,
                "plusAllStatus": 58,
            },
            7: {
                "multiplyPVPDefense": 12,
                "plusDefense": 289,
                "plusAllStatus": 64,
            },
            8: {
                "multiplyPVPDefense": 13,
                "plusDefense": 299,
                "plusAllStatus": 70,
            },
            9: {
                "multiplyPVPDefense": 14,
                "plusDefense": 310,
                "plusAllStatus": 77,
            },
            10: {
                "multiplyPVPDefense": 15,
                "plusDefense": 322,
                "plusAllStatus": 84,
            },
            11: {
                "multiplyPVPDefense": 16,
                "plusDefense": 335,
                "plusAllStatus": 91,
            },
            12: {
                "multiplyPVPDefense": 17,
                "plusDefense": 460,
                "plusAllStatus": 99,
            },
            13: {
                "multiplyPVPDefense": 18,
                "plusDefense": 471,
                "plusAllStatus": 107,
            },
            14: {
                "multiplyPVPDefense": 19,
                "plusDefense": 483,
                "plusAllStatus": 116,
            },
            15: {
                "multiplyPVPDefense": 20,
                "plusDefense": 496,
                "plusAllStatus": 125,
            },
            16: {
                "multiplyPVPDefense": 21,
                "plusDefense": 510,
                "plusAllStatus": 134,
            },
            17: {
                "multiplyPVPDefense": 22,
                "plusDefense": 525,
                "plusAllStatus": 144,
            },
            18: {
                "multiplyPVPDefense": 23,
                "plusDefense": 640,
                "plusAllStatus": 154,
            },
            19: {
                "multiplyPVPDefense": 24,
                "plusDefense": 653,
                "plusAllStatus": 179,
            },
            20: {
                "multiplyPVPDefense": 25,
                "plusDefense": 667,
                "plusAllStatus": 206,
            },
            21: {
                "multiplyPVPDefense": 26,
                "plusDefense": 682,
                "plusAllStatus": 220,
            },
            22: {
                "multiplyPVPDefense": 27,
                "plusDefense": 698,
                "plusAllStatus": 235,
            },
            23: {
                "multiplyPVPDefense": 28,
                "plusDefense": 715,
                "plusAllStatus": 259,
            },
            24: {
                "multiplyPVPDefense": 29,
                "plusDefense": 820,
                "plusAllStatus": 288,
            },
            25: {
                "multiplyPVPDefense": 30,
                "plusDefense": 835,
                "plusAllStatus": 307,
            },
            26: {
                "multiplyPVPDefense": 31,
                "plusDefense": 851,
                "plusAllStatus": 328,
            },
            27: {
                "multiplyPVPDefense": 32,
                "plusDefense": 868,
                "plusAllStatus": 362,
            },
            28: {
                "multiplyPVPDefense": 33,
                "plusDefense": 886,
                "plusAllStatus": 395,
            },
            29: {
                "multiplyPVPDefense": 34,
                "plusDefense": 905,
                "plusAllStatus": 412,
            },
            30: {
                "multiplyPVPDefense": 35,
                "plusDefense": 1000,
                "plusAllStatus": 432,
            },
        },
        synergyKey: "ignielArmor",
        synergyOptions: ignielArmorSynergisticOptions,
        sockets: 3
    }

]

const rohaSynergisticOptions = {
    3: {
        'multiplyHitPoint': 150,
        'multiplySkillDefense': 70,
        'multiplyPVEAttack': 70,
        'multiplyPVEDefense': 20,
        'multiplyPotionRecovery': 100,
    },
    4: {
        'multiplyPVPDefense': 25,
        'multiplyPVPAttack': 85,
        'multiplyDamageReflectionRate': 30,
        'multiplySkillAttack': 70,
        'multiplyNegationRate': 10,

    }
}

const edneSynergisticOptions = {
    3: {
        'multiplyHitPoint': 50,
        'multiplySkillDefense': 60,
        'multiplyPVEAttack': 50,
        'multiplyPotionRecovery': 100,
    },
    4: {
        'multiplyPVPAttack': 85,
        'multiplySkillAttack': 70,
        'multiplyNegationRate': 10,
    }
}

const onSynergisticOptions = {
    3: {
        'multiplyHitPoint': 120,
        'multiplySkillDefense': 60,
        'multiplyPVEAttack': 50,
        'multiplyPVEDefense': 20,
    },
    4: {
        'multiplyPVPDefense': 25,
        'multiplyPVPAttack': 50,
        'multiplyDamageReflectionRate': 25,
        'multiplySkillAttack': 40,
    }
}

const sivaSynergisticOptions = {
    3: {
        'plusAllStatus': 1000,
        'multiplyHitPoint': 50,
    },
    4: {
        'multiplySkillAttack': 20,
        'multiplySkillDefense': 10,
        'multiplyNegationRate': 10,
        'multiplyPotionRecovery': 100,
    }
}

const apocalypseSynergisticOptions = {
    2: {
        'plusHitPoint': 5000,
        'multiplyPVEAttack': 30,
        'multiplyPVPAttack': 15,
        'multiplySkillAttack': 30,
    },
    4: {
        'plusHitPoint': 5000,
        'multiplyPVEAttack': 45,
        'multiplyPVPAttack': 75,
        'multiplySkillAttack': 45,
    }
}

const hellfireSynergisticOptions = {
    2: {
        'multiplySkillAttack': 30,
        'multiplySkillDefense': 30,
        'multiplyHitPoint': 50,
    },
    4: {
        'multiplyPVPAttack': 30,
        'multiplyPVPDefense': 20,
        'multiplyPVEDefense': 20,
    }
}

const nosferatuSynergisticOptions = {
    2: {
        'multiplyHitPoint': 75,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 45,
        'multiplyDamageReflectionRate': 20,
    },
    4: {
        'multiplyHitPoint': 75,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 45,
        'multiplyDamageReflectionRate': 20,
    }
}

const extendSynergisticOptions = {
    2: {
        'multiplyPotionRecovery': 100,
        'multiplyNegationRate': 10,
    },
    3: {
        'multiplyPVPDefense': 25,
        'multiplyPVEDefense': 20,
        'multiplySkillDefense': 60,
    }
}

const disasterSynergisticOptions = {
    2: {
        'multiplyHitPoint': 50,
        'multiplySkillAttack': 25,
    },
    3: {
        'multiplyCriticalRate': 10,
        'multiplySkillAttack': 50,
        'multiplyPVPAttack': 100,
        'multiplyPVPDefense': 15,
    }
}

const goliathSynergisticOptions = {
    2: {
        'multiplyHitPoint': 50,
        'multiplySkillDefense': 25,
    },
    3: {
        'multiplyDecreaseCriticalDamageTaken': 25,
        'multiplySkillDefense': 75,
        'multiplyPVPDefense': 20,
        'multiplyHitPoint': 100,
    }
}

const ganes4haSynergisticOptions = {
    4: {
        'plusAllStatus': 1000,
    }
}
const ganes3haSynergisticOptions = {
    4: {
        'plusAllStatus': 1000,
    }
}
const ganes2haSynergisticOptions = {
    4: {
        'plusAllStatus': 1000,
    }
}
const ganes1haSynergisticOptions = {
    4: {
        'plusAllStatus': 1000,
    }
}
const annihilate4haSynergisticOptions = {
    2: {
        'plusHitPoint': 4500,
        'multiplyPVEAttack': 25,
        'multiplyPVPAttack': 15,
        'multiplySkillAttack': 25,
    },
    4: {
        'plusHitPoint': 4500,
        'multiplyPVEAttack': 30,
        'multiplyPVPAttack': 75,
        'multiplySkillAttack': 30,
    }
}
const annihilate3haSynergisticOptions = {
    2: {
        'plusHitPoint': 4000,
        'multiplyPVEAttack': 20,
        'multiplyPVPAttack': 15,
        'multiplySkillAttack': 20,
    },
    4: {
        'plusHitPoint': 4000,
        'multiplyPVEAttack': 25,
        'multiplyPVPAttack': 75,
        'multiplySkillAttack': 25,
    }
}
const annihilate2haSynergisticOptions = {
    2: {
        'plusHitPoint': 3500,
        'multiplyPVEAttack': 20,
        'multiplyPVPAttack': 15,
        'multiplySkillAttack': 20,
    },
    4: {
        'plusHitPoint': 3500,
        'multiplyPVEAttack': 20,
        'multiplyPVPAttack': 75,
        'multiplySkillAttack': 20,
    }
}
const annihilate1haSynergisticOptions = {
    2: {
        'plusHitPoint': 3000,
        'multiplyPVEAttack': 15,
        'multiplyPVPAttack': 15,
        'multiplySkillAttack': 15,
    },
    4: {
        'plusHitPoint': 3000,
        'multiplyPVEAttack': 20,
        'multiplyPVPAttack': 75,
        'multiplySkillAttack': 20,
    }
}
const crimson4haSynergisticOptions = {
    2: {
        'multiplySkillAttack': 30,
        'multiplySkillDefense': 30,
        'multiplyHitPoint': 50,
    },
    4: {
        'multiplyPVPAttack': 30,
        'multiplyPVPDefense': 20,
        'multiplyPVEDefense': 20,
    }
}
const crimson3haSynergisticOptions = {
    2: {
        'multiplySkillAttack': 30,
        'multiplySkillDefense': 30,
        'multiplyHitPoint': 25,
    },
    4: {
        'multiplyPVPAttack': 25,
        'multiplyPVPDefense': 20,
        'multiplyPVEDefense': 20,
    }
}
const crimson2haSynergisticOptions = {
    2: {
        'multiplySkillAttack': 30,
        'multiplySkillDefense': 30,
        'multiplyHitPoint': 15,
    },
    4: {
        'multiplyPVPAttack': 20,
        'multiplyPVPDefense': 20,
        'multiplyPVEDefense': 20,
    }
}
const crimson1haSynergisticOptions = {
    2: {
        'multiplySkillAttack': 30,
        'multiplySkillDefense': 30,
    },
    4: {
        'multiplyPVPAttack': 20,
        'multiplyPVPDefense': 20,
        'multiplyPVEDefense': 20
    }
}

const immortal4haSynergisticOptions = {
    2: {
        'multiplyHitPoint': 50,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 35,
        'multiplyDamageReflectionRate': 15,
    },
    4: {
        'multiplyHitPoint': 50,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 35,
        'multiplyDamageReflectionRate': 20,
    }
}
const immortal3haSynergisticOptions = {
    2: {
        'multiplyHitPoint': 25,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 30,
        'multiplyDamageReflectionRate': 15,
    },
    4: {
        'multiplyHitPoint': 25,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 30,
        'multiplyDamageReflectionRate': 15,
    }
}
const immortal2haSynergisticOptions = {
    2: {
        'multiplyHitPoint': 15,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 30,
        'multiplyDamageReflectionRate': 10,
    },
    4: {
        'multiplyHitPoint': 15,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 30,
        'multiplyDamageReflectionRate': 15,
    }
}
const immortal1haSynergisticOptions = {
    2: {
        'plusHitPoint': 3000,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 30,
        'multiplyDamageReflectionRate': 10,
    },
    4: {
        'plusHitPoint': 3000,
        'multiplyPVPDefense': 10,
        'multiplySkillDefense': 30,
        'multiplyDamageReflectionRate': 10,
    }
}

const chaosSynergisticOptions = {
    2: {
        'multiplySkillAttack': 20,
        'multiplySkillDefense': 20,
        'multiplyAttack': 20,
        'multiplyDefense': 20,
    },
    4: {
        'multiplyPVPAttack': 40,
        'multiplyPVPDefense': 20,
        'multiplyHitPoint': 200,
        'multiplyHitPointAbsorbDamageRate': 20,
    }
}

const variantSynergisticOptions = {
    2: {
        'multiplyHitPoint': 100,
        'multiplyDamageReflectionRate': 50,
    },
    3: {
        'multiplyHitPoint': 100,
        'multiplyPVPAttack': 100,
        'multiplyPVEAttack': 100,
        'multiplySkillAttack': 100,
    }
}

const gargantuaSynergisticOptions = {
    2: {
        'multiplyNegationRate': 10,
        'multiplyDecreaseCriticalDamageTaken': 25,
        "multiplySkillAttack": 75,
        'multiplyHitPoint': 150,
    },
    3: {
        'multiplyDamageReflectionRate': 40,
        'multiplySkillDefense': 100,
        'multiplyPVPAttack': 75,
        'multiplyPVPDefense': 25,
    }
}

const catastropheSynergisticOptions = {
    2: {
        'plusCriticalRate': 10,
        'multiplyAttack': 25,
        'multiplySkillAttack': 25,
        'multiplyHitPoint': 150,
    },
    3: {
        'multiplySkillAttack': 75,
        'multiplySkillDefense': 75,
        'multiplyPVPAttack': 100,
        'multiplyPVPDefense': 25,
    }
}

export const glasses: ItemTemplate[] = [
    {
        name: "ロハの眼帯",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: glasses_roha,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    },
    {
        name: "ヴァリアントアイ",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 5000,
            'plusDefense': 2500,
            'plusHitPoint': 60000,
        },
        icon: glasses_variant,
        synergyOptions: variantSynergisticOptions,
        synergyKey: "variant"
    },
    {
        name: "ガルガンチュアアイ",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusDefense': 7500,
            'plusHitPoint': 60000,
        },
        icon: unknown,
        synergyOptions: gargantuaSynergisticOptions,
        synergyKey: "gargantua"
    },
    {
        name: "カタストロフアイ",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 7500,
            'plusHitPoint': 60000,
        },
        icon: unknown,
        synergyOptions: catastropheSynergisticOptions,
        synergyKey: "catastrophe"
    },
    {
        name: "エドネの眼帯",
        fixedBaseOptions: {
            'plusAllStatus': 700,
            'plusAttack': 1700,
            'plusDefense': 1200,
            'plusHitPoint': 13000,
        },
        icon: unknown,
        synergyOptions: edneSynergisticOptions,
        synergyKey: "edne"
    },
    {
        name: "オンの眼鏡",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 1200,
            'plusDefense': 2200,
            'plusHitPoint': 15000,
        },
        icon: unknown,
        synergyOptions: onSynergisticOptions,
        synergyKey: "on"
    },
    {
        name: "シヴァの眼鏡",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 9500,
        },
        icon: unknown,
        synergyOptions: sivaSynergisticOptions,
        synergyKey: "siva"
    },
    {
        name: "アポカリプスアイ",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 2000,
            'plusDefense': 1000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: apocalypseSynergisticOptions,
        synergyKey: "apocalypse"
    },
    {
        name: "劫火の眼帯",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 10000,
        },
        icon: unknown,
        synergyOptions: hellfireSynergisticOptions,
        synergyKey: "hellfire"
    },
    {
        name: "ノスフェラトゥアイ",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: nosferatuSynergisticOptions,
        synergyKey: "nosferatu"
    },
    {
        name: "エクステンドアイ",
        fixedBaseOptions: {
            'plusAttack': 2500,
            'plusDefense': 7500,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: extendSynergisticOptions,
        synergyKey: "extend"
    },
    {
        name: "ディザスターアイ",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusAttack': 5000,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: disasterSynergisticOptions,
        synergyKey: "disaster"
    },
    {
        name: "ゴライアスアイ",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusDefense': 5000,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: goliathSynergisticOptions,
        synergyKey: "goliath"
    },
    {
        name: "ガネーシャの眼鏡Ⅳ",
        fixedBaseOptions: {
            'plusAllStatus': 900,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: ganes4haSynergisticOptions,
        synergyKey: "ganesha4"
    },
    {
        name: "ガネーシャの眼鏡Ⅲ",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 4500,
        },
        icon: unknown,
        synergyOptions: ganes3haSynergisticOptions,
        synergyKey: "ganesha3"
    },
    {
        name: "ガネーシャの眼鏡Ⅱ",
        fixedBaseOptions: {
            'plusAllStatus': 600,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 2500,
        },
        icon: unknown,
        synergyOptions: ganes2haSynergisticOptions,
        synergyKey: "ganesha2"
    },
    {
        name: "ガネーシャの眼鏡",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 1000,
        },
        icon: unknown,
        synergyOptions: ganes1haSynergisticOptions,
        synergyKey: "ganesha1"
    },
    {
        name: "アナイアレイトアイⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 1600,
            'plusDefense': 850,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: annihilate4haSynergisticOptions,
        synergyKey: "annihilate4"
    },
    {
        name: "アナイアレイトアイⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 1350,
            'plusDefense': 750,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: annihilate3haSynergisticOptions,
        synergyKey: "annihilate3"
    },
    {
        name: "アナイアレイトアイⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 1100,
            'plusDefense': 650,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: annihilate2haSynergisticOptions,
        synergyKey: "annihilate2"
    },
    {
        name: "アナイアレイトアイ",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 950,
            'plusDefense': 550,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: annihilate1haSynergisticOptions,
        synergyKey: "annihilate1"
    },
    {
        name: "紅蓮の眼鏡Ⅳ",
        fixedBaseOptions: {
            'plusAllStatus': 250,
            'plusAttack': 800,
            'plusDefense': 1600,
            'plusHitPoint': 8000,
        },
        icon: unknown,
        synergyOptions: crimson4haSynergisticOptions,
        synergyKey: "crimson4"
    },
    {
        name: "紅蓮の眼鏡Ⅲ",
        fixedBaseOptions: {
            'plusAllStatus': 225,
            'plusAttack': 700,
            'plusDefense': 1400,
            'plusHitPoint': 7000,
        },
        icon: unknown,
        synergyOptions: crimson3haSynergisticOptions,
        synergyKey: "crimson3"
    },
    {
        name: "紅蓮の眼鏡Ⅱ",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: crimson2haSynergisticOptions,
        synergyKey: "crimson2"
    },
    {
        name: "紅蓮の眼鏡",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: crimson1haSynergisticOptions,
        synergyKey: "crimson1"
    },
    {
        name: "イモータルアイⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 850,
            'plusDefense': 1600,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: immortal4haSynergisticOptions,
        synergyKey: "immortal4"
    },
    {
        name: "イモータルアイⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 750,
            'plusDefense': 1350,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: immortal3haSynergisticOptions,
        synergyKey: "immortal3"
    },
    {
        name: "イモータルアイⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 650,
            'plusDefense': 1100,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: immortal2haSynergisticOptions,
        synergyKey: "immortal2"
    },
    {
        name: "イモータルアイ",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 550,
            'plusDefense': 950,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: immortal1haSynergisticOptions,
        synergyKey: "immortal1"
    },
]
export const hats: ItemTemplate[] = [
    {
        name: "ロハの冠",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: hat_roha,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    },
    {
        name: "ヴァリアントサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 5000,
            'plusDefense': 2500,
            'plusHitPoint': 60000,
        },
        icon: hat_variant,
        synergyOptions: variantSynergisticOptions,
        synergyKey: "variant"
    },
    {
        name: "ガルガンチュアサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusDefense': 7500,
            'plusHitPoint': 60000,
        },
        icon: unknown,
        synergyOptions: gargantuaSynergisticOptions,
        synergyKey: "gargantua"
    },
    {
        name: "カタストロフサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 7500,
            'plusHitPoint': 60000,
        },
        icon: unknown,
        synergyOptions: catastropheSynergisticOptions,
        synergyKey: "catastrophe"
    },
    {
        name: "エドネの冠",
        fixedBaseOptions: {
            'plusAllStatus': 700,
            'plusAttack': 1700,
            'plusDefense': 1200,
            'plusHitPoint': 13000,
        },
        icon: unknown,
        synergyOptions: edneSynergisticOptions,
        synergyKey: "edne"
    },
    {
        name: "オンの冠",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 1200,
            'plusDefense': 2200,
            'plusHitPoint': 15000,
        },
        icon: unknown,
        synergyOptions: onSynergisticOptions,
        synergyKey: "on"
    },
    {
        name: "シヴァの冠",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 9500,
        },
        icon: unknown,
        synergyOptions: sivaSynergisticOptions,
        synergyKey: "siva"
    },
    {
        name: "アポカリプスサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 2000,
            'plusDefense': 1000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: apocalypseSynergisticOptions,
        synergyKey: "apocalypse"
    },
    {
        name: "劫火の帽子",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 10000,
        },
        icon: unknown,
        synergyOptions: hellfireSynergisticOptions,
        synergyKey: "hellfire"
    },
    {
        name: "ノスフェラトゥサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: nosferatuSynergisticOptions,
        synergyKey: "nosferatu"
    },
    {
        name: "エクステンドサークレット",
        fixedBaseOptions: {
            'plusAttack': 2500,
            'plusDefense': 7500,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: extendSynergisticOptions,
        synergyKey: "extend"
    },
    {
        name: "ディザスターサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusAttack': 5000,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: disasterSynergisticOptions,
        synergyKey: "disaster"
    },
    {
        name: "ゴライアスサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusDefense': 5000,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: goliathSynergisticOptions,
        synergyKey: "goliath"
    },
    {
        name: "ガネーシャの冠Ⅳ",
        fixedBaseOptions: {
            'plusAllStatus': 900,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: ganes4haSynergisticOptions,
        synergyKey: "ganesha4"
    },
    {
        name: "ガネーシャの冠Ⅲ",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 4500,
        },
        icon: unknown,
        synergyOptions: ganes3haSynergisticOptions,
        synergyKey: "ganesha3"
    },
    {
        name: "ガネーシャの冠Ⅱ",
        fixedBaseOptions: {
            'plusAllStatus': 600,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 2500,
        },
        icon: unknown,
        synergyOptions: ganes2haSynergisticOptions,
        synergyKey: "ganesha2"
    },
    {
        name: "ガネーシャの冠",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 1000,
        },
        icon: unknown,
        synergyOptions: ganes1haSynergisticOptions,
        synergyKey: "ganesha1"
    },
    {
        name: "アナイアレイトサークレットⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 1600,
            'plusDefense': 850,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: annihilate4haSynergisticOptions,
        synergyKey: "annihilate4"
    },
    {
        name: "アナイアレイトサークレットⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 1350,
            'plusDefense': 750,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: annihilate3haSynergisticOptions,
        synergyKey: "annihilate3"
    },
    {
        name: "アナイアレイトサークレットⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 1100,
            'plusDefense': 650,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: annihilate2haSynergisticOptions,
        synergyKey: "annihilate2"
    },
    {
        name: "アナイアレイトサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 950,
            'plusDefense': 550,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: annihilate1haSynergisticOptions,
        synergyKey: "annihilate1"
    },
    {
        name: "紅蓮の帽子Ⅳ",
        fixedBaseOptions: {
            'plusAllStatus': 250,
            'plusAttack': 800,
            'plusDefense': 1600,
            'plusHitPoint': 8000,
        },
        icon: unknown,
        synergyOptions: crimson4haSynergisticOptions,
        synergyKey: "crimson4"
    },
    {
        name: "紅蓮の帽子Ⅲ",
        fixedBaseOptions: {
            'plusAllStatus': 225,
            'plusAttack': 700,
            'plusDefense': 1400,
            'plusHitPoint': 7000,
        },
        icon: unknown,
        synergyOptions: crimson3haSynergisticOptions,
        synergyKey: "crimson3"
    },
    {
        name: "紅蓮の帽子Ⅱ",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: crimson2haSynergisticOptions,
        synergyKey: "crimson2"
    },
    {
        name: "紅蓮の帽子",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: crimson1haSynergisticOptions,
        synergyKey: "crimson1"
    },
    {
        name: "イモータルサークレットⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 850,
            'plusDefense': 1600,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: immortal4haSynergisticOptions,
        synergyKey: "immortal4"
    },
    {
        name: "イモータルサークレットⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 750,
            'plusDefense': 1350,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: immortal3haSynergisticOptions,
        synergyKey: "immortal3"
    },
    {
        name: "イモータルサークレットⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 650,
            'plusDefense': 1100,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: immortal2haSynergisticOptions,
        synergyKey: "immortal2"
    },
    {
        name: "イモータルサークレット",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 550,
            'plusDefense': 950,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: immortal1haSynergisticOptions,
        synergyKey: "immortal1"
    },
]
export const earrings: ItemTemplate[] = [
    {
        name: "ロハの耳飾り",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: earrings_roha,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    },
    {
        name: "ヴァリアントイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 5000,
            'plusDefense': 2500,
            'plusHitPoint': 60000,
        },
        icon: earrings_variant,
        synergyOptions: variantSynergisticOptions,
        synergyKey: "variant"
    },
    {
        name: "ガルガンチュアイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusDefense': 7500,
            'plusHitPoint': 60000,
        },
        icon: unknown,
        synergyOptions: gargantuaSynergisticOptions,
        synergyKey: "gargantua"
    },
    {
        name: "カタストロフイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 7500,
            'plusHitPoint': 60000,
        },
        icon: unknown,
        synergyOptions: catastropheSynergisticOptions,
        synergyKey: "catastrophe"
    },
    {
        name: "エドネの耳飾り",
        fixedBaseOptions: {
            'plusAllStatus': 700,
            'plusAttack': 1700,
            'plusDefense': 1200,
            'plusHitPoint': 13000,
        },
        icon: unknown,
        synergyOptions: edneSynergisticOptions,
        synergyKey: "edne"
    },
    {
        name: "オンの耳飾り",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 1200,
            'plusDefense': 2200,
            'plusHitPoint': 15000,
        },
        icon: unknown,
        synergyOptions: onSynergisticOptions,
        synergyKey: "on"
    },
    {
        name: "シヴァのイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 9500,
        },
        icon: unknown,
        synergyOptions: sivaSynergisticOptions,
        synergyKey: "siva"
    },
    {
        name: "アポカリプスイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 2000,
            'plusDefense': 1000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: apocalypseSynergisticOptions,
        synergyKey: "apocalypse"
    },
    {
        name: "劫火の耳飾り",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 10000,
        },
        icon: unknown,
        synergyOptions: hellfireSynergisticOptions,
        synergyKey: "hellfire"
    },
    {
        name: "ノスフェラトゥイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: nosferatuSynergisticOptions,
        synergyKey: "nosferatu"
    },
    {
        name: "エクステンドイアリング",
        fixedBaseOptions: {
            'plusAttack': 2500,
            'plusDefense': 7500,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: extendSynergisticOptions,
        synergyKey: "extend"
    },
    {
        name: "ディザスターイアリング",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusAttack': 5000,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: disasterSynergisticOptions,
        synergyKey: "disaster"
    },
    {
        name: "ゴライアスイアリング",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusDefense': 5000,
            'plusHitPoint': 40000,
        },
        icon: unknown,
        synergyOptions: goliathSynergisticOptions,
        synergyKey: "goliath"
    },
    {
        name: "ガネーシャのイヤリングⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 900,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: ganes4haSynergisticOptions,
        synergyKey: "ganesha4"
    },
    {
        name: "ガネーシャのイヤリングⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 4500,
        },
        icon: unknown,
        synergyOptions: ganes3haSynergisticOptions,
        synergyKey: "ganesha3"
    },
    {
        name: "ガネーシャのイヤリングⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 600,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 2500,
        },
        icon: unknown,
        synergyOptions: ganes2haSynergisticOptions,
        synergyKey: "ganesha2"
    },
    {
        name: "ガネーシャのイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 1000,
        },
        icon: unknown,
        synergyOptions: ganes1haSynergisticOptions,
        synergyKey: "ganesha1"
    },
    {
        name: "アナイアレイトイヤリングⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 1600,
            'plusDefense': 850,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: annihilate4haSynergisticOptions,
        synergyKey: "annihilate4"
    },
    {
        name: "アナイアレイトイヤリングⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 1350,
            'plusDefense': 750,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: annihilate3haSynergisticOptions,
        synergyKey: "annihilate3"
    },
    {
        name: "アナイアレイトイヤリングⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 1100,
            'plusDefense': 650,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: annihilate2haSynergisticOptions,
        synergyKey: "annihilate2"
    },
    {
        name: "アナイアレイトイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 950,
            'plusDefense': 550,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: annihilate1haSynergisticOptions,
        synergyKey: "annihilate1"
    },
    {
        name: "紅蓮の耳飾りⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 250,
            'plusAttack': 800,
            'plusDefense': 1600,
            'plusHitPoint': 8000,
        },
        icon: unknown,
        synergyOptions: crimson4haSynergisticOptions,
        synergyKey: "crimson4"
    },
    {
        name: "紅蓮の耳飾りⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 225,
            'plusAttack': 700,
            'plusDefense': 1400,
            'plusHitPoint': 7000,
        },
        icon: unknown,
        synergyOptions: crimson3haSynergisticOptions,
        synergyKey: "crimson3"
    },
    {
        name: "紅蓮の耳飾りⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: crimson2haSynergisticOptions,
        synergyKey: "crimson2"
    },
    {
        name: "紅蓮の耳飾り",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: crimson1haSynergisticOptions,
        synergyKey: "crimson1"
    },
    {
        name: "イモータルイヤリングⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 850,
            'plusDefense': 1600,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: immortal4haSynergisticOptions,
        synergyKey: "immortal4"
    },
    {
        name: "イモータルイヤリングⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 750,
            'plusDefense': 1350,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: immortal3haSynergisticOptions,
        synergyKey: "immortal3"
    },
    {
        name: "イモータルイヤリングⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 650,
            'plusDefense': 1100,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: immortal2haSynergisticOptions,
        synergyKey: "immortal2"
    },
    {
        name: "イモータルイヤリング",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 550,
            'plusDefense': 950,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: immortal1haSynergisticOptions,
        synergyKey: "immortal1"
    },
]
export const costumes: ItemTemplate[] = [
    {
        name: "ロハの鎧",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: costume_roha,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    },
    {
        name: "エドネの鎧",
        fixedBaseOptions: {
            'plusAllStatus': 700,
            'plusAttack': 1700,
            'plusDefense': 1200,
            'plusHitPoint': 13000,
        },
        icon: unknown,
        synergyOptions: edneSynergisticOptions,
        synergyKey: "edne"
    },
    {
        name: "オンの鎧",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 1200,
            'plusDefense': 2200,
            'plusHitPoint': 15000,
        },
        icon: unknown,
        synergyOptions: onSynergisticOptions,
        synergyKey: "on"
    },
    {
        name: "シヴァの鎧",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 9500,
        },
        icon: unknown,
        synergyOptions: sivaSynergisticOptions,
        synergyKey: "siva"
    },
    {
        name: "アポカリプスアーマー",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 2000,
            'plusDefense': 1000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: apocalypseSynergisticOptions,
        synergyKey: "apocalypse"
    },
    {
        name: "劫火の鎧",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 10000,
        },
        icon: unknown,
        synergyOptions: hellfireSynergisticOptions,
        synergyKey: "hellfire"
    },
    {
        name: "ノスフェラトゥアーマー",
        fixedBaseOptions: {
            'plusAllStatus': 275,
            'plusAttack': 1000,
            'plusDefense': 2000,
            'plusHitPoint': 7500,
        },
        icon: unknown,
        synergyOptions: nosferatuSynergisticOptions,
        synergyKey: "nosferatu"
    },
    {
        name: "ガネーシャの鎧Ⅳ",
        fixedBaseOptions: {
            'plusAllStatus': 900,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: ganes4haSynergisticOptions,
        synergyKey: "ganesha4"
    },
    {
        name: "ガネーシャの鎧Ⅲ",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 4500,
        },
        icon: unknown,
        synergyOptions: ganes3haSynergisticOptions,
        synergyKey: "ganesha3"
    },
    {
        name: "ガネーシャの鎧Ⅱ",
        fixedBaseOptions: {
            'plusAllStatus': 600,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 2500,
        },
        icon: unknown,
        synergyOptions: ganes2haSynergisticOptions,
        synergyKey: "ganesha2"
    },
    {
        name: "ガネーシャの鎧",
        fixedBaseOptions: {
            'plusAllStatus': 500,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 1000,
        },
        icon: unknown,
        synergyOptions: ganes1haSynergisticOptions,
        synergyKey: "ganesha1"
    },
    {
        name: "アナイアレイトアーマーⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 1600,
            'plusDefense': 850,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: annihilate4haSynergisticOptions,
        synergyKey: "annihilate4"
    },
    {
        name: "アナイアレイトアーマーⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 1350,
            'plusDefense': 750,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: annihilate3haSynergisticOptions,
        synergyKey: "annihilate3"
    },
    {
        name: "アナイアレイトアーマーⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 1100,
            'plusDefense': 650,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: annihilate2haSynergisticOptions,
        synergyKey: "annihilate2"
    },
    {
        name: "アナイアレイトアーマー",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 950,
            'plusDefense': 550,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: annihilate1haSynergisticOptions,
        synergyKey: "annihilate1"
    },
    {
        name: "紅蓮の鎧Ⅳ",
        fixedBaseOptions: {
            'plusAllStatus': 250,
            'plusAttack': 800,
            'plusDefense': 1600,
            'plusHitPoint': 8000,
        },
        icon: unknown,
        synergyOptions: crimson4haSynergisticOptions,
        synergyKey: "crimson4"
    },
    {
        name: "紅蓮の鎧Ⅲ",
        fixedBaseOptions: {
            'plusAllStatus': 225,
            'plusAttack': 700,
            'plusDefense': 1400,
            'plusHitPoint': 7000,
        },
        icon: unknown,
        synergyOptions: crimson3haSynergisticOptions,
        synergyKey: "crimson3"
    },
    {
        name: "紅蓮の鎧Ⅱ",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: crimson2haSynergisticOptions,
        synergyKey: "crimson2"
    },
    {
        name: "紅蓮の鎧",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: crimson1haSynergisticOptions,
        synergyKey: "crimson1"
    },
    {
        name: "イモータルアーマーⅣ",
        fixedBaseOptions: {
            'plusAllStatus': 230,
            'plusAttack': 850,
            'plusDefense': 1600,
            'plusHitPoint': 6000,
        },
        icon: unknown,
        synergyOptions: immortal4haSynergisticOptions,
        synergyKey: "immortal4"
    },
    {
        name: "イモータルアーマーⅢ",
        fixedBaseOptions: {
            'plusAllStatus': 205,
            'plusAttack': 750,
            'plusDefense': 1350,
            'plusHitPoint': 5000,
        },
        icon: unknown,
        synergyOptions: immortal3haSynergisticOptions,
        synergyKey: "immortal3"
    },
    {
        name: "イモータルアーマーⅡ",
        fixedBaseOptions: {
            'plusAllStatus': 180,
            'plusAttack': 650,
            'plusDefense': 1100,
            'plusHitPoint': 4000,
        },
        icon: unknown,
        synergyOptions: immortal2haSynergisticOptions,
        synergyKey: "immortal2"
    },
    {
        name: "イモータルアーマー",
        fixedBaseOptions: {
            'plusAllStatus': 155,
            'plusAttack': 550,
            'plusDefense': 950,
            'plusHitPoint': 3000,
        },
        icon: unknown,
        synergyOptions: immortal1haSynergisticOptions,
        synergyKey: "immortal1"
    },

]
export const accessories: ItemTemplate[] = [
    {
        name: "ケイオスリング",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: accessory_chaos_ring,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "ケイオスブローチ",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: accessory_chaos_brooch,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "ケイオスブレスレット",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: accessory_chaos_bracelet,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "ケイオスネックレス",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: accessory_chaos_necklace,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "メイガスリング",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,
    },
    {
        name: "メイガスブローチ",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,
    },
    {
        name: "メイガスブレスレット",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,

    },
    {
        name: "メイガスネックレス",
        fixedBaseOptions: {
            'plusAllStatus': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,

    },
    {
        name: "深淵の宝珠(玄武)",
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 225,
                'plusHitPoint': 2000,
                'plusAttack': 550,
            }
        },
        icon: unknown,
    },
    {
        name: "深淵の宝珠(白虎)",
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 225,
                'plusHitPoint': 2000,
                'plusAttack': 550,
            }
        },
        icon: unknown,
    },
    {
        name: "深淵の宝珠(青龍)",
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 225,
                'plusHitPoint': 2000,
                'plusAttack': 550,
            }
        },
        icon: unknown,
    },
    {
        name: "深淵の宝珠(朱雀)",
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 225,
                'plusHitPoint': 2000,
                'plusAttack': 550,
            }
        },
        icon: unknown,
    },
    {
        name: "虚無の逆十字",
        fixedBaseOptions: {
            'plusStatusAttack': 10000,
            'plusHitPoint': 75000,
        },
        icon: unknown,
    }
]


export const b_talismans: ItemTemplate[] = [
    {
        name: "ノーウェンのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 10000,
        },
        icon: talisman_b_1,
    },
    {
        name: "輝くノーウェンのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 200,
            'plusDefense': 200,
            'plusHitPoint': 25000,
        },
        icon: talisman_b_1,
    },
    {
        name: "洗練されたノーウェンのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 300,
            'plusDefense': 300,
            'plusHitPoint': 50000,
        },
        icon: talisman_b_1,
    },
    {
        name: "鮮血のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 400,
            'plusAttack': 400,
            'plusDefense': 400,
            'plusHitPoint': 75000,
        },
        icon: talisman_b_1,
    },
    {
        name: "深紅のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 1000,
            'plusDefense': 1000,
            'multiplyPotionRecovery': 10,
        },
        icon: talisman_b_1,
    }
]
export const j_talismans: ItemTemplate[] = [
    {
        name: "ヘスペロスのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 200,
        },
        icon: talisman_j_1,
    },
    {
        name: "輝くへスぺロスのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 400,
        },
        icon: talisman_j_1,
    },
    {
        name: "洗練されたヘスペロスのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 450,
            'plusAttack': 600,
        },
        icon: talisman_j_1,
    },
    {
        name: "栄光のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 600,
            'plusAttack': 800,
        },
        icon: talisman_j_1,
    },
    {
        name: "黄金のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 1000,
            'plusHitPoint': 100000,
            'multiplySkillAttack': 10,
        },
        icon: talisman_j_1,
    }
]
export const h_talismans: ItemTemplate[] = [
    {
        name: "カルラスのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusDefense': 200,
            'plusHitPoint': 10000,
        },
        icon: talisman_h_1,
    },
    {
        name: "輝くカルラスのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusDefense': 400,
            'plusHitPoint': 25000,
        },
        icon: talisman_h_1,
    },
    {
        name: "洗練されたカルラスのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusDefense': 600,
            'plusHitPoint': 50000,
        },
        icon: talisman_h_1,
    },
    {
        name: "深緑のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 400,
            'plusDefense': 800,
            'plusHitPoint': 75000,
        },
        icon: talisman_h_1,
    },
    {
        name: "翡翠のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusDefense': 1000,
            'multiplyDefense': 10,
            'plusHitPoint': 100000,
        },
        icon: talisman_h_1,
    }
]
export const g_talismans: ItemTemplate[] = [
    {
        name: "ディエガのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 150,
            'plusAttack': 200,
            'plusHitPoint': 10000,
        },
        icon: talisman_g_1,
    },
    {
        name: "輝くディエガのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 400,
            'plusHitPoint': 25000,
        },
        icon: talisman_g_1,
    },
    {
        name: "洗練されたディエガのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusAttack': 600,
            'plusHitPoint': 50000,
        },
        icon: talisman_g_1,
    },
    {
        name: "紺碧のタリスマン	",
        fixedBaseOptions: {
            'plusAllStatus': 400,
            'plusAttack': 800,
            'plusHitPoint': 75000,
        },
        icon: talisman_g_1,
    },
    {
        name: "蒼穹のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusAttack': 1000,
            'multiplyAttack': 10,
            'plusHitPoint': 100000,
        },
        icon: talisman_g_1,
    }
]
export const i_talismans: ItemTemplate[] = [
    {
        name: "カシムのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusDefense': 200,
        },
        icon: talisman_i_1,
    },
    {
        name: "輝くカシムのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 300,
            'plusDefense': 400,
        },
        icon: talisman_i_1,
    },
    {
        name: "洗練されたカシムのタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 450,
            'plusDefense': 600,
        },
        icon: talisman_i_1,
    },
    {
        name: "紫闇のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 600,
            'plusDefense': 800,
        },
        icon: talisman_i_1,
    },
    {
        name: "紫紺のタリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusDefense': 1000,
            'plusHitPoint': 100000,
            'multiplySkillAttack': 10,
        },
        icon: talisman_i_1,
    }
]

export const n_talismans: ItemTemplate[] = [
    {
        name: "黎明のタリスマン",
        enchantableBaseOptions: {
            0: {
                'plusAttack': 200,
                'plusDefense': 200,
                'plusHitPoint': 3000,
            },
            1: {
                'plusAttack': 250,
                'plusDefense': 250,
                'plusHitPoint': 4000,
            },
            2: {
                'plusAttack': 300,
                'plusDefense': 300,
                'plusHitPoint': 5000,
            },
            3: {
                'plusAttack': 350,
                'plusDefense': 350,
                'plusHitPoint': 6000,
            },
            4: {
                'plusAttack': 400,
                'plusDefense': 400,
                'plusHitPoint': 7000,
            },
            5: {
                'plusAttack': 500,
                'plusDefense': 500,
                'plusHitPoint': 8000,
                'multiplyPVEDefense': 2,
            },
            6: {
                'plusAttack': 600,
                'plusDefense': 600,
                'plusHitPoint': 9000,
                'multiplyPVEDefense': 4,
            },
            7: {
                'plusAttack': 800,
                'plusDefense': 800,
                'plusHitPoint': 10000,
                'multiplyPVEDefense': 6,
            },
            8: {
                'plusAttack': 1000,
                'plusDefense': 1000,
                'plusHitPoint': 12000,
                'multiplyPVEDefense': 8,
            },
            9: {
                'plusAttack': 1200,
                'plusDefense': 1200,
                'plusHitPoint': 14000,
                'multiplyPVEDefense': 10,
            },
            10: {
                'plusAttack': 2000,
                'plusDefense': 2000,
                'plusHitPoint': 20000,
                'multiplyPVEDefense': 20,
            },
            11: {
                'plusAttack': 2500,
                'plusDefense': 2500,
                'plusHitPoint': 25000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 100,
            },
            12: {
                'plusAttack': 3000,
                'plusDefense': 3000,
                'plusHitPoint': 30000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 150,
            },
            13: {
                'plusAttack': 3500,
                'plusDefense': 3500,
                'plusHitPoint': 35000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 200,
            },
            14: {
                'plusAttack': 4000,
                'plusDefense': 4000,
                'plusHitPoint': 40000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 250,
            },
            15: {
                'plusAttack': 4500,
                'plusDefense': 4500,
                'plusHitPoint': 45000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 300,
            },
            16: {
                'plusAttack': 5000,
                'plusDefense': 5000,
                'plusHitPoint': 50000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 350,
            },
            17: {
                'plusAttack': 5500,
                'plusDefense': 5500,
                'plusHitPoint': 55000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 400,
            },
            18: {
                'plusAttack': 6000,
                'plusDefense': 6000,
                'plusHitPoint': 60000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 450,
            },
            19: {
                'plusAttack': 7000,
                'plusDefense': 7000,
                'plusHitPoint': 70000,
                'multiplyPVEDefense': 20,
                'plusAllStatus': 500,
            },
            20: {
                'plusAttack': 8000,
                'plusDefense': 8000,
                'plusHitPoint': 80000,
                'multiplyPVEDefense': 22,
                'plusAllStatus': 600,
            },
        },
        icon: talisman_n_1,
    },
]
export const e_talismans: ItemTemplate[] = [
    {
        name: "ウォルターのタリスマン",
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 10,
            },
            1: {
                'plusAllStatus': 12,
            },
            2: {
                'plusAllStatus': 14,
                'plusDefense': 26,
            },
            3: {
                'plusAllStatus': 22,
                'plusDefense': 39,
                'plusAttack': 51,
            },
            4: {
                'plusAllStatus': 28,
                'plusDefense': 51,
                'plusAttack': 66,
            },
            5: {
                'plusAllStatus': 37,
                'plusDefense': 66,
                'plusAttack': 86,
                'plusHitPoint': 500,
            },
            6: {
                'plusAllStatus': 49,
                'plusDefense': 125,
                'plusAttack': 164,
                'plusHitPoint': 950,
            },
            7: {
                'plusAllStatus': 118,
                'plusDefense': 213,
                'plusAttack': 278,
                'plusHitPoint': 1615,
            },
            8: {
                'plusAllStatus': 150,
                'plusDefense': 400,
                'plusAttack': 400,
                'plusHitPoint': 3000,
            },
            9: {
                'plusAllStatus': 200,
                'plusDefense': 600,
                'plusAttack': 600,
                'plusHitPoint': 5000,
            },
            10: {
                'plusAllStatus': 300,
                'plusDefense': 1000,
                'plusAttack': 1000,
                'plusHitPoint': 10000,
            },
            11: {
                'plusAllStatus': 330,
                'plusDefense': 1300,
                'plusAttack': 1200,
                'plusHitPoint': 12500,
            },
            12: {
                'plusAllStatus': 360,
                'plusDefense': 1600,
                'plusAttack': 1400,
                'plusHitPoint': 15000,
            },
            13: {
                'plusAllStatus': 390,
                'plusDefense': 1900,
                'plusAttack': 1600,
                'plusHitPoint': 17500,
            },
            14: {
                'plusAllStatus': 420,
                'plusDefense': 2200,
                'plusAttack': 1800,
                'plusHitPoint': 20000,
            },
            15: {
                'plusAllStatus': 450,
                'plusDefense': 2500,
                'plusAttack': 2000,
                'plusHitPoint': 22500,
            },
            16: {
                'plusAllStatus': 480,
                'plusDefense': 2800,
                'plusAttack': 2200,
                'plusHitPoint': 25000,
            },
            17: {
                'plusAllStatus': 510,
                'plusDefense': 3100,
                'plusAttack': 2400,
                'plusHitPoint': 27500,
            },
            18: {
                'plusAllStatus': 540,
                'plusDefense': 3400,
                'plusAttack': 2600,
                'plusHitPoint': 30000,
            },
            19: {
                'plusAllStatus': 570,
                'plusDefense': 3700,
                'plusAttack': 2800,
                'plusHitPoint': 32500,
            },
            20: {
                'plusAllStatus': 600,
                'plusDefense': 4000,
                'plusAttack': 3000,
                'plusHitPoint': 35000,
            },
        },
        icon: unknown,
    },
]
export const r_talismans: ItemTemplate[] = [
    {
        name: "ヴィクトリアス・タリスマン",
        fixedBaseOptions: {
            'plusAllStatus': 1000,
            'plusHitPoint': 300000,
        },
        icon: talisman_r_victorious,
    }
]
export const w_talismans: ItemTemplate[] = [
    {
        name: "マスク",
        enchantableBaseOptions: {
            0: {
                'plusAttack': 1000,
                'plusDefense': 1000,
            },
            1: {
                'plusAttack': 1500,
                'plusDefense': 1500,
            },
            2: {
                'plusAttack': 2000,
                'plusDefense': 2000,
            },
            3: {
                'plusAttack': 2500,
                'plusDefense': 2500,
            },
            4: {
                'plusAttack': 3000,
                'plusDefense': 3000,
            },
            5: {
                'plusAttack': 3500,
                'plusDefense': 3500,
            },
        },
        icon: talisman_w_mask,
    }

]
export const q_talismans: ItemTemplate[] = [
    {
        name: "8等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 2500,
            'plusMagicPoint': 500,
        },
        icon: talisman_q_8th_private,
    },
    {
        name: "7等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 5500,
            'plusMagicPoint': 1000,

        },
        icon: talisman_q_7th_private,
    },
    {
        name: "6等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 7500,
            'plusMagicPoint': 1500,
        },
        icon: talisman_q_6th_private,
    },
    {
        name: "5等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 10500,
            'plusMagicPoint': 2000,
        },
        icon: talisman_q_5th_private,
    },
    {
        name: "4等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 12500,
            'plusMagicPoint': 2500,
        },
        icon: talisman_q_4th_private,
    },
    {
        name: "3等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 15000,
            'plusMagicPoint': 3000,
        },
        icon: talisman_q_3rd_private,
    },
    {
        name: "2等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 17500,
            'plusMagicPoint': 3500,
        },
        icon: talisman_q_2nd_private,
    },
    {
        name: "1等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 20000,
            'plusMagicPoint': 4000,
        },
        icon: talisman_q_1st_private,
    },
    {
        name: "1将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 30000,
            'plusMagicPoint': 6000,
            'multiplySkillAttack': 5,

        },
        icon: talisman_q_1star_officer,
    },
    {
        name: "2将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 40000,
            'plusMagicPoint': 8000,
            'multiplySkillAttack': 10,
            'multiplySkillDefense': 5,
        },
        icon: talisman_q_2star_officer,
    },
    {
        name: "3将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 50000,
            'plusMagicPoint': 10000,
            'multiplySkillAttack': 15,
            'multiplySkillDefense': 10,
        },
        icon: talisman_q_3star_officer,
    },
    {
        name: "4将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 60000,
            'plusMagicPoint': 12000,
            'multiplySkillAttack': 20,
            'multiplySkillDefense': 15,
        },
        icon: talisman_q_4star_officer,
    },
    {
        name: "5将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 70000,
            'plusMagicPoint': 14000,
            'multiplySkillAttack': 25,
            'multiplySkillDefense': 20,
        },
        icon: talisman_q_5star_officer,
    },
    {
        name: "軍団長階級章",
        fixedBaseOptions: {
            'plusHitPoint': 100000,
            'plusMagicPoint': 20000,
            'multiplySkillAttack': 35,
            'multiplySkillDefense': 30,
        },
        icon: talisman_q_commander,
    },
    {
        name: "司令官階級章",
        fixedBaseOptions: {
            'plusHitPoint': 200000,
            'plusMagicPoint': 40000,
            'multiplySkillAttack': 50,
            'multiplySkillDefense': 40,
        },
        icon: talisman_q_supreme_commander,
    },
    {
        name: "元帥階級章",
        fixedBaseOptions: {
            'plusHitPoint': 300000,
            'plusMagicPoint': 50000,
            'multiplySkillAttack': 50,
            'multiplySkillDefense': 40,
            'plusAllStatus': 1000,
        },
        icon: unknown
    }
]
export const s_talismans: ItemTemplate[] = [
    {
        name: "原初の記録",
        fixedBaseOptions: {
            'plusHitPoint': 100000,
            'plusAttack': 10000,
            'plusDefense': 10000,
            'multiplySkillAttack': 25,
        },
        icon: talisman_s_1,
    }

]
export const pets: ItemTemplate[] = [
    {
        name: "ロイヤルドラゴン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'multiplyMovementSpeed': 30,
                'multiplyWeightLimit': 30,
            },
            1: {
                'multiplyMovementSpeed': 35,
                'multiplyWeightLimit': 40,
            },
            2: {
                'multiplyMovementSpeed': 40,
                'multiplyWeightLimit': 50,
            },
        },
    },
    {
        name: "スィートフェアリー",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 20,
                'multiplyWeightLimit': 30,
            },
            1: {
                'plusAllStatus': 25,
                'multiplyWeightLimit': 40,
            },
            2: {
                'plusAllStatus': 30,
                'multiplyWeightLimit': 50,
            },
        },
    },
    {
        name: "ホーリーライオン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'multiplyDecreaseCriticalDamageTaken': 15,
                'multiplyAttackSpeed': 15,
                'multiplyHitPoint': 30,
                'multiplyWeightLimit': 30,
            },
            1: {
                'multiplyDecreaseCriticalDamageTaken': 17,
                'multiplyAttackSpeed': 17,
                'multiplyHitPoint': 35,
                'multiplyWeightLimit': 40,
            },
            2: {
                'multiplyDecreaseCriticalDamageTaken': 20,
                'multiplyAttackSpeed': 20,
                'multiplyHitPoint': 40,
                'multiplyWeightLimit': 50,
            },
        },
    },
    {
        name: "ホワイトユニコーン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'multiplyPhysicalBlockRate': 15,
                'multiplyWeightLimit': 30,
            },
            1: {
                'multiplyPhysicalBlockRate': 17,
                'multiplyWeightLimit': 40,
            },
            2: {
                'multiplyPhysicalBlockRate': 20,
                'multiplyWeightLimit': 50,
            }
        },
    },
    {
        name: "三尾狐",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'plusAllStatus': 14,
                'multiplyAttackSpeed': 10,
                'multiplyWeightLimit': 30,
            },
            1: {
                'plusAllStatus': 20,
                'multiplyAttackSpeed': 15,
                'multiplyWeightLimit': 40,
            },
            2: {
                'plusAllStatus': 30,
                'multiplyAttackSpeed': 20,
                'multiplyWeightLimit': 50,
            }
        },
    }

]

export const rides: ItemTemplate[] = [
    {
        name: "80%乗り物",
        icon: unknown,
        fixedBaseOptions: {
            'multiplyRideSpeed': 80,
        }
    },
    {
        name: "100%乗り物",
        icon: unknown,
        fixedBaseOptions: {
            'multiplyRideSpeed': 100,
        },
    }
]

export const runes: ItemTemplate[] = [
    {
        name: "攻撃のルーン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'multiplyAttack': 2,
            },
            1: {
                'multiplyAttack': 4,
            },
            2: {
                'multiplyAttack': 6,
            },
            3: {
                'multiplyAttack': 9,
            },
            4: {
                'multiplyAttack': 12,
            },
            5: {
                'multiplyAttack': 15,
            },
            6: {
                'multiplyAttack': 18,
            },
        }
    },
    {
        name: "迅速のルーン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'multiplyMovementSpeed': 5,
            },
            1: {
                'multiplyMovementSpeed': 10,
            },
            2: {
                'multiplyMovementSpeed': 15,
            },
            3: {
                'multiplyMovementSpeed': 20,
            },
            4: {
                'multiplyMovementSpeed': 30,
            },
            5: {
                'multiplyMovementSpeed': 40,
            },
            6: {
                'multiplyMovementSpeed': 50,
            },
        }
    },
    {
        name: "全能のルーン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                'multiplyAllStatus': 1,
            },
            1: {
                'multiplyAllStatus': 2,
            },
            2: {
                'multiplyAllStatus': 3,
            },
            3: {
                'multiplyAllStatus': 5,
            },
            4: {
                'multiplyAllStatus': 7,
            },
            5: {
                'multiplyAllStatus': 10,
            },
            6: {
                'multiplyAllStatus': 13,
            },
        }
    },
    {
        name: "活力のルーン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                "multiplyHitPoint": 4,
                "multiplyMagicPoint": 4,
            },
            1: {
                "multiplyHitPoint": 8,
                "multiplyMagicPoint": 8,
            },
            2: {
                "multiplyHitPoint": 12,
                "multiplyMagicPoint": 12,
            },
            3: {
                "multiplyHitPoint": 18,
                "multiplyMagicPoint": 18,
            },
            4: {
                "multiplyHitPoint": 24,
                "multiplyMagicPoint": 24,
            },
            5: {
                "multiplyHitPoint": 30,
                "multiplyMagicPoint": 30,
            },
            6: {
                "multiplyHitPoint": 36,
                "multiplyMagicPoint": 36,
            },
        }
    },
    {
        name: "調和のルーン",
        icon: unknown,
        enchantableBaseOptions: {}
    },
    {
        name: "貫通のルーン",
        icon: unknown,
        enchantableBaseOptions: {
            0: {
                "multiplyDefensePenetration": 2,
            },
            1: {
                "multiplyDefensePenetration": 4,
            },
            2: {
                "multiplyDefensePenetration": 6,
            },
            3: {
                "multiplyDefensePenetration": 9,
            },
            4: {
                "multiplyDefensePenetration": 12,
            },
            5: {
                "multiplyDefensePenetration": 15,
            },
            6: {
                "multiplyDefensePenetration": 18,
            },
        }
    }
]
export const itemTemplates = {
    helmet: helmets,
    gauntlet: gauntlets,
    tunic: tunics,
    leggings: leggings,
    boots: boots,
    weapon: weapons,
    shield: shields,
    arrow: arrows,
    accessory1: accessories,
    accessory2: accessories,
    accessory3: accessories,
    accessory4: accessories,
    glasses: glasses,
    hat: hats,
    earrings: earrings,
    costume: costumes,
    talismanH: h_talismans,
    talismanG: g_talismans,
    talismanI: i_talismans,
    talismanB: b_talismans,
    talismanJ: j_talismans,
    talismanN: n_talismans,
    talismanE: e_talismans,
    talismanR: r_talismans,
    talismanW: w_talismans,
    talismanQ: q_talismans,
    talismanS: s_talismans,
    pet: pets,
    ride: rides,
    rune1: runes,
    rune2: runes,
    rune3: runes,
    rune4: runes,
    rune5: runes,
    rune6: runes,
}