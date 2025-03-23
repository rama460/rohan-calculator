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
    "variant",
    "gargantua",
    "catastrophe",
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 2142,
                "plusAttack": 240,
            },
            1: {
                "meleeAttack": 2325,
                "rangeAttack": 183,
                "magicAttack": 183,
                "plusAttack": 423,
            },
            2: {
                "meleeAttack": 2344,
                "rangeAttack": 202,
                "magicAttack": 202,
                "plusAttack": 442,
            },
            3: {
                "meleeAttack": 2364,
                "rangeAttack": 222,
                "magicAttack": 222,
                "plusAttack": 462,
            },
            4: {
                "meleeAttack": 2386,
                "rangeAttack": 244,
                "magicAttack": 244,
                "plusAttack": 484,
            },
            5: {
                "meleeAttack": 2411,
                "rangeAttack": 269,
                "magicAttack": 269,
                "plusAttack": 509,
            },
            6: {
                "meleeAttack": 2438,
                "rangeAttack": 296,
                "magicAttack": 296,
                "plusAttack": 536,
            },
            7: {
                "meleeAttack": 2467,
                "rangeAttack": 325,
                "magicAttack": 325,
                "plusAttack": 565,
            },
            8: {
                "meleeAttack": 2500,
                "rangeAttack": 358,
                "magicAttack": 358,
                "plusAttack": 598,
            },
            9: {
                "meleeAttack": 2536,
                "rangeAttack": 394,
                "magicAttack": 394,
                "plusAttack": 634,
            },
            10: {
                "meleeAttack": 2575,
                "rangeAttack": 433,
                "magicAttack": 433,
                "plusAttack": 673,
            },
            11: {
                "meleeAttack": 2618,
                "rangeAttack": 476,
                "magicAttack": 476,
                "plusAttack": 716,
            },
            12: {
                "meleeAttack": 2666,
                "rangeAttack": 524,
                "magicAttack": 524,
                "plusAttack": 764,
            },
            13: {
                "meleeAttack": 2718,
                "rangeAttack": 576,
                "magicAttack": 576,
                "plusAttack": 816,
            },
            14: {
                "meleeAttack": 2776,
                "rangeAttack": 634,
                "magicAttack": 634,
                "plusAttack": 874,
            },
            15: {
                "meleeAttack": 2839,
                "rangeAttack": 697,
                "magicAttack": 697,
                "plusAttack": 937,
            },
            16: {
                "meleeAttack": 2909,
                "rangeAttack": 767,
                "magicAttack": 767,
                "plusAttack": 1007,
            },
            17: {
                "meleeAttack": 2986,
                "rangeAttack": 844,
                "magicAttack": 844,
                "plusAttack": 1084,
            },
            18: {
                "meleeAttack": 3070,
                "rangeAttack": 928,
                "magicAttack": 928,
                "plusAttack": 1168,
            },
            19: {
                "meleeAttack": 3163,
                "rangeAttack": 1021,
                "magicAttack": 1021,
                "plusAttack": 1261,
            },
            20: {
                "meleeAttack": 3265,
                "rangeAttack": 1123,
                "magicAttack": 1123,
                "plusAttack": 1363,
            },
            21: {
                "meleeAttack": 3377,
                "rangeAttack": 1235,
                "magicAttack": 1235,
                "plusAttack": 1475,
            },
            22: {
                "meleeAttack": 3501,
                "rangeAttack": 1359,
                "magicAttack": 1359,
                "plusAttack": 1599,
            },
            23: {
                "meleeAttack": 3637,
                "rangeAttack": 1495,
                "magicAttack": 1495,
                "plusAttack": 1735,
            },
            24: {
                "meleeAttack": 3787,
                "rangeAttack": 1645,
                "magicAttack": 1645,
                "plusAttack": 1885,
            },
            25: {
                "meleeAttack": 3950,
                "rangeAttack": 1808,
                "magicAttack": 1808,
                "plusAttack": 2048,
            },
            26: {
                "meleeAttack": 4132,
                "rangeAttack": 1990,
                "magicAttack": 1990,
                "plusAttack": 2230,
            },
            27: {
                "meleeAttack": 4331,
                "rangeAttack": 2189,
                "magicAttack": 2189,
                "plusAttack": 2429,
            },
            28: {
                "meleeAttack": 4550,
                "rangeAttack": 2408,
                "magicAttack": 2408,
                "plusAttack": 2648,
            },
            29: {
                "meleeAttack": 4790,
                "rangeAttack": 2648,
                "magicAttack": 2648,
                "plusAttack": 2888,
            },
            30: {
                "meleeAttack": 5055,
                "rangeAttack": 2913,
                "magicAttack": 2913,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 2561,
                "plusAttack": 312,
            },
            1: {
                "meleeAttack": 2781,
                "rangeAttack": 220,
                "magicAttack": 220,
                "plusAttack": 532,
            },
            2: {
                "meleeAttack": 2803,
                "rangeAttack": 242,
                "magicAttack": 242,
                "plusAttack": 554,
            },
            3: {
                "meleeAttack": 2826,
                "rangeAttack": 265,
                "magicAttack": 265,
                "plusAttack": 577,
            },
            4: {
                "meleeAttack": 2854,
                "rangeAttack": 293,
                "magicAttack": 293,
                "plusAttack": 605,
            },
            5: {
                "meleeAttack": 2882,
                "rangeAttack": 321,
                "magicAttack": 321,
                "plusAttack": 633,
            },
            6: {
                "meleeAttack": 2915,
                "rangeAttack": 354,
                "magicAttack": 354,
                "plusAttack": 666,
            },
            7: {
                "meleeAttack": 2950,
                "rangeAttack": 389,
                "magicAttack": 389,
                "plusAttack": 701,
            },
            8: {
                "meleeAttack": 2989,
                "rangeAttack": 428,
                "magicAttack": 428,
                "plusAttack": 740,
            },
            9: {
                "meleeAttack": 3032,
                "rangeAttack": 471,
                "magicAttack": 471,
                "plusAttack": 783,
            },
            10: {
                "meleeAttack": 3078,
                "rangeAttack": 517,
                "magicAttack": 517,
                "plusAttack": 829,
            },
            11: {
                "meleeAttack": 3130,
                "rangeAttack": 569,
                "magicAttack": 569,
                "plusAttack": 881,
            },
            12: {
                "meleeAttack": 3188,
                "rangeAttack": 627,
                "magicAttack": 627,
                "plusAttack": 939,
            },
            13: {
                "meleeAttack": 3250,
                "rangeAttack": 689,
                "magicAttack": 689,
                "plusAttack": 1001,
            },
            14: {
                "meleeAttack": 3319,
                "rangeAttack": 758,
                "magicAttack": 758,
                "plusAttack": 1070,
            },
            15: {
                "meleeAttack": 3394,
                "rangeAttack": 833,
                "magicAttack": 833,
                "plusAttack": 1145,
            },
            16: {
                "meleeAttack": 3478,
                "rangeAttack": 917,
                "magicAttack": 917,
                "plusAttack": 1229,
            },
            17: {
                "meleeAttack": 3570,
                "rangeAttack": 1009,
                "magicAttack": 1009,
                "plusAttack": 1321,
            },
            18: {
                "meleeAttack": 3671,
                "rangeAttack": 1110,
                "magicAttack": 1110,
                "plusAttack": 1422,
            },
            19: {
                "meleeAttack": 3782,
                "rangeAttack": 1221,
                "magicAttack": 1221,
                "plusAttack": 1533,
            },
            20: {
                "meleeAttack": 3904,
                "rangeAttack": 1343,
                "magicAttack": 1343,
                "plusAttack": 1655,
            },
            21: {
                "meleeAttack": 4038,
                "rangeAttack": 1477,
                "magicAttack": 1477,
                "plusAttack": 1789,
            },
            22: {
                "meleeAttack": 4186,
                "rangeAttack": 1625,
                "magicAttack": 1625,
                "plusAttack": 1937,
            },
            23: {
                "meleeAttack": 4349,
                "rangeAttack": 1788,
                "magicAttack": 1788,
                "plusAttack": 2100,
            },
            24: {
                "meleeAttack": 4527,
                "rangeAttack": 1966,
                "magicAttack": 1966,
                "plusAttack": 2278,
            },
            25: {
                "meleeAttack": 4723,
                "rangeAttack": 2162,
                "magicAttack": 2162,
                "plusAttack": 2474,
            },
            26: {
                "meleeAttack": 4940,
                "rangeAttack": 2379,
                "magicAttack": 2379,
                "plusAttack": 2691,
            },
            27: {
                "meleeAttack": 5178,
                "rangeAttack": 2617,
                "magicAttack": 2617,
                "plusAttack": 2929,
            },
            28: {
                "meleeAttack": 5439,
                "rangeAttack": 2878,
                "magicAttack": 2878,
                "plusAttack": 3190,
            },
            29: {
                "meleeAttack": 5727,
                "rangeAttack": 3166,
                "magicAttack": 3166,
                "plusAttack": 3478,
            },
            30: {
                "meleeAttack": 6044,
                "rangeAttack": 3483,
                "magicAttack": 3483,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 2535,
                "plusAttack": 288,
            },
            1: {
                "meleeAttack": 2752,
                "rangeAttack": 217,
                "magicAttack": 217,
                "plusAttack": 505,
            },
            2: {
                "meleeAttack": 2774,
                "rangeAttack": 239,
                "magicAttack": 239,
                "plusAttack": 527,
            },
            3: {
                "meleeAttack": 2798,
                "rangeAttack": 263,
                "magicAttack": 263,
                "plusAttack": 551,
            },
            4: {
                "meleeAttack": 2825,
                "rangeAttack": 290,
                "magicAttack": 290,
                "plusAttack": 578,
            },
            5: {
                "meleeAttack": 2853,
                "rangeAttack": 318,
                "magicAttack": 318,
                "plusAttack": 606,
            },
            6: {
                "meleeAttack": 2885,
                "rangeAttack": 350,
                "magicAttack": 350,
                "plusAttack": 638,
            },
            7: {
                "meleeAttack": 2920,
                "rangeAttack": 385,
                "magicAttack": 385,
                "plusAttack": 673,
            },
            8: {
                "meleeAttack": 2959,
                "rangeAttack": 424,
                "magicAttack": 424,
                "plusAttack": 712,
            },
            9: {
                "meleeAttack": 3000,
                "rangeAttack": 465,
                "magicAttack": 465,
                "plusAttack": 753,
            },
            10: {
                "meleeAttack": 3047,
                "rangeAttack": 512,
                "magicAttack": 512,
                "plusAttack": 800,
            },
            11: {
                "meleeAttack": 3099,
                "rangeAttack": 564,
                "magicAttack": 564,
                "plusAttack": 852,
            },
            12: {
                "meleeAttack": 3155,
                "rangeAttack": 620,
                "magicAttack": 620,
                "plusAttack": 908,
            },
            13: {
                "meleeAttack": 3218,
                "rangeAttack": 683,
                "magicAttack": 683,
                "plusAttack": 971,
            },
            14: {
                "meleeAttack": 3286,
                "rangeAttack": 751,
                "magicAttack": 751,
                "plusAttack": 1039,
            },
            15: {
                "meleeAttack": 3361,
                "rangeAttack": 826,
                "magicAttack": 826,
                "plusAttack": 1114,
            },
            16: {
                "meleeAttack": 3444,
                "rangeAttack": 909,
                "magicAttack": 909,
                "plusAttack": 1197,
            },
            17: {
                "meleeAttack": 3533,
                "rangeAttack": 998,
                "magicAttack": 998,
                "plusAttack": 1286,
            },
            18: {
                "meleeAttack": 3634,
                "rangeAttack": 1099,
                "magicAttack": 1099,
                "plusAttack": 1387,
            },
            19: {
                "meleeAttack": 3744,
                "rangeAttack": 1209,
                "magicAttack": 1209,
                "plusAttack": 1497,
            },
            20: {
                "meleeAttack": 3865,
                "rangeAttack": 1330,
                "magicAttack": 1330,
                "plusAttack": 1618,
            },
            21: {
                "meleeAttack": 3998,
                "rangeAttack": 1463,
                "magicAttack": 1463,
                "plusAttack": 1751,
            },
            22: {
                "meleeAttack": 4144,
                "rangeAttack": 1609,
                "magicAttack": 1609,
                "plusAttack": 1897,
            },
            23: {
                "meleeAttack": 4304,
                "rangeAttack": 1769,
                "magicAttack": 1769,
                "plusAttack": 2057,
            },
            24: {
                "meleeAttack": 4481,
                "rangeAttack": 1946,
                "magicAttack": 1946,
                "plusAttack": 2234,
            },
            25: {
                "meleeAttack": 4676,
                "rangeAttack": 2141,
                "magicAttack": 2141,
                "plusAttack": 2429,
            },
            26: {
                "meleeAttack": 4891,
                "rangeAttack": 2356,
                "magicAttack": 2356,
                "plusAttack": 2644,
            },
            27: {
                "meleeAttack": 5126,
                "rangeAttack": 2591,
                "magicAttack": 2591,
                "plusAttack": 2879,
            },
            28: {
                "meleeAttack": 5385,
                "rangeAttack": 2850,
                "magicAttack": 2850,
                "plusAttack": 3138,
            },
            29: {
                "meleeAttack": 5671,
                "rangeAttack": 3136,
                "magicAttack": 3136,
                "plusAttack": 3424,
            },
            30: {
                "meleeAttack": 5984,
                "rangeAttack": 3449,
                "magicAttack": 3449,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 3081,
                "plusAttack": 360,
            },
            1: {
                "meleeAttack": 3345,
                "rangeAttack": 264,
                "magicAttack": 264,
                "plusAttack": 624,
            },
            2: {
                "meleeAttack": 3371,
                "rangeAttack": 290,
                "magicAttack": 290,
                "plusAttack": 650,
            },
            3: {
                "meleeAttack": 3401,
                "rangeAttack": 320,
                "magicAttack": 320,
                "plusAttack": 680,
            },
            4: {
                "meleeAttack": 3432,
                "rangeAttack": 351,
                "magicAttack": 351,
                "plusAttack": 711,
            },
            5: {
                "meleeAttack": 3467,
                "rangeAttack": 386,
                "magicAttack": 386,
                "plusAttack": 746,
            },
            6: {
                "meleeAttack": 3506,
                "rangeAttack": 425,
                "magicAttack": 425,
                "plusAttack": 785,
            },
            7: {
                "meleeAttack": 3549,
                "rangeAttack": 468,
                "magicAttack": 468,
                "plusAttack": 828,
            },
            8: {
                "meleeAttack": 3596,
                "rangeAttack": 515,
                "magicAttack": 515,
                "plusAttack": 875,
            },
            9: {
                "meleeAttack": 3647,
                "rangeAttack": 566,
                "magicAttack": 566,
                "plusAttack": 926,
            },
            10: {
                "meleeAttack": 3704,
                "rangeAttack": 623,
                "magicAttack": 623,
                "plusAttack": 983,
            },
            11: {
                "meleeAttack": 3766,
                "rangeAttack": 685,
                "magicAttack": 685,
                "plusAttack": 1045,
            },
            12: {
                "meleeAttack": 3835,
                "rangeAttack": 754,
                "magicAttack": 754,
                "plusAttack": 1114,
            },
            13: {
                "meleeAttack": 3910,
                "rangeAttack": 829,
                "magicAttack": 829,
                "plusAttack": 1189,
            },
            14: {
                "meleeAttack": 3992,
                "rangeAttack": 911,
                "magicAttack": 911,
                "plusAttack": 1271,
            },
            15: {
                "meleeAttack": 4083,
                "rangeAttack": 1002,
                "magicAttack": 1002,
                "plusAttack": 1362,
            },
            16: {
                "meleeAttack": 4185,
                "rangeAttack": 1104,
                "magicAttack": 1104,
                "plusAttack": 1464,
            },
            17: {
                "meleeAttack": 4294,
                "rangeAttack": 1213,
                "magicAttack": 1213,
                "plusAttack": 1573,
            },
            18: {
                "meleeAttack": 4416,
                "rangeAttack": 1335,
                "magicAttack": 1335,
                "plusAttack": 1695,
            },
            19: {
                "meleeAttack": 4549,
                "rangeAttack": 1468,
                "magicAttack": 1468,
                "plusAttack": 1828,
            },
            20: {
                "meleeAttack": 4696,
                "rangeAttack": 1615,
                "magicAttack": 1615,
                "plusAttack": 1975,
            },
            21: {
                "meleeAttack": 4858,
                "rangeAttack": 1777,
                "magicAttack": 1777,
                "plusAttack": 2137,
            },
            22: {
                "meleeAttack": 5035,
                "rangeAttack": 1954,
                "magicAttack": 1954,
                "plusAttack": 2314,
            },
            23: {
                "meleeAttack": 5231,
                "rangeAttack": 2150,
                "magicAttack": 2150,
                "plusAttack": 2510,
            },
            24: {
                "meleeAttack": 5446,
                "rangeAttack": 2365,
                "magicAttack": 2365,
                "plusAttack": 2725,
            },
            25: {
                "meleeAttack": 5682,
                "rangeAttack": 2601,
                "magicAttack": 2601,
                "plusAttack": 2961,
            },
            26: {
                "meleeAttack": 5942,
                "rangeAttack": 2861,
                "magicAttack": 2861,
                "plusAttack": 3221,
            },
            27: {
                "meleeAttack": 6228,
                "rangeAttack": 3147,
                "magicAttack": 3147,
                "plusAttack": 3507,
            },
            28: {
                "meleeAttack": 6543,
                "rangeAttack": 3462,
                "magicAttack": 3462,
                "plusAttack": 3822,
            },
            29: {
                "meleeAttack": 6889,
                "rangeAttack": 3808,
                "magicAttack": 3808,
                "plusAttack": 4168,
            },
            30: {
                "meleeAttack": 7270,
                "rangeAttack": 4189,
                "magicAttack": 4189,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 2589,
                "plusAttack": 336,
            },
            1: {
                "meleeAttack": 2811,
                "rangeAttack": 222,
                "magicAttack": 222,
                "plusAttack": 558,
            },
            2: {
                "meleeAttack": 2833,
                "rangeAttack": 244,
                "magicAttack": 244,
                "plusAttack": 580,
            },
            3: {
                "meleeAttack": 2858,
                "rangeAttack": 269,
                "magicAttack": 269,
                "plusAttack": 605,
            },
            4: {
                "meleeAttack": 2884,
                "rangeAttack": 295,
                "magicAttack": 295,
                "plusAttack": 631,
            },
            5: {
                "meleeAttack": 2914,
                "rangeAttack": 325,
                "magicAttack": 325,
                "plusAttack": 661,
            },
            6: {
                "meleeAttack": 2947,
                "rangeAttack": 358,
                "magicAttack": 358,
                "plusAttack": 694,
            },
            7: {
                "meleeAttack": 2983,
                "rangeAttack": 394,
                "magicAttack": 394,
                "plusAttack": 730,
            },
            8: {
                "meleeAttack": 3022,
                "rangeAttack": 433,
                "magicAttack": 433,
                "plusAttack": 769,
            },
            9: {
                "meleeAttack": 3065,
                "rangeAttack": 476,
                "magicAttack": 476,
                "plusAttack": 812,
            },
            10: {
                "meleeAttack": 3113,
                "rangeAttack": 524,
                "magicAttack": 524,
                "plusAttack": 860,
            },
            11: {
                "meleeAttack": 3165,
                "rangeAttack": 576,
                "magicAttack": 576,
                "plusAttack": 912,
            },
            12: {
                "meleeAttack": 3222,
                "rangeAttack": 633,
                "magicAttack": 633,
                "plusAttack": 969,
            },
            13: {
                "meleeAttack": 3286,
                "rangeAttack": 697,
                "magicAttack": 697,
                "plusAttack": 1033,
            },
            14: {
                "meleeAttack": 3356,
                "rangeAttack": 767,
                "magicAttack": 767,
                "plusAttack": 1103,
            },
            15: {
                "meleeAttack": 3433,
                "rangeAttack": 844,
                "magicAttack": 844,
                "plusAttack": 1180,
            },
            16: {
                "meleeAttack": 3516,
                "rangeAttack": 927,
                "magicAttack": 927,
                "plusAttack": 1263,
            },
            17: {
                "meleeAttack": 3610,
                "rangeAttack": 1021,
                "magicAttack": 1021,
                "plusAttack": 1357,
            },
            18: {
                "meleeAttack": 3711,
                "rangeAttack": 1122,
                "magicAttack": 1122,
                "plusAttack": 1458,
            },
            19: {
                "meleeAttack": 3824,
                "rangeAttack": 1235,
                "magicAttack": 1235,
                "plusAttack": 1571,
            },
            20: {
                "meleeAttack": 3948,
                "rangeAttack": 1359,
                "magicAttack": 1359,
                "plusAttack": 1695,
            },
            21: {
                "meleeAttack": 4083,
                "rangeAttack": 1494,
                "magicAttack": 1494,
                "plusAttack": 1830,
            },
            22: {
                "meleeAttack": 4232,
                "rangeAttack": 1643,
                "magicAttack": 1643,
                "plusAttack": 1979,
            },
            23: {
                "meleeAttack": 4396,
                "rangeAttack": 1807,
                "magicAttack": 1807,
                "plusAttack": 2143,
            },
            24: {
                "meleeAttack": 4577,
                "rangeAttack": 1988,
                "magicAttack": 1988,
                "plusAttack": 2324,
            },
            25: {
                "meleeAttack": 4776,
                "rangeAttack": 2187,
                "magicAttack": 2187,
                "plusAttack": 2523,
            },
            26: {
                "meleeAttack": 4994,
                "rangeAttack": 2405,
                "magicAttack": 2405,
                "plusAttack": 2741,
            },
            27: {
                "meleeAttack": 5235,
                "rangeAttack": 2646,
                "magicAttack": 2646,
                "plusAttack": 2982,
            },
            28: {
                "meleeAttack": 5500,
                "rangeAttack": 2911,
                "magicAttack": 2911,
                "plusAttack": 3247,
            },
            29: {
                "meleeAttack": 5791,
                "rangeAttack": 3202,
                "magicAttack": 3202,
                "plusAttack": 3538,
            },
            30: {
                "meleeAttack": 6111,
                "rangeAttack": 3522,
                "magicAttack": 3522,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 4487,
                "plusAttack": 480,
            },
            1: {
                "meleeAttack": 4872,
                "rangeAttack": 385,
                "magicAttack": 385,
                "plusAttack": 865,
            },
            2: {
                "meleeAttack": 4910,
                "rangeAttack": 423,
                "magicAttack": 423,
                "plusAttack": 903,
            },
            3: {
                "meleeAttack": 4952,
                "rangeAttack": 465,
                "magicAttack": 465,
                "plusAttack": 945,
            },
            4: {
                "meleeAttack": 4999,
                "rangeAttack": 512,
                "magicAttack": 512,
                "plusAttack": 992,
            },
            5: {
                "meleeAttack": 5050,
                "rangeAttack": 563,
                "magicAttack": 563,
                "plusAttack": 1043,
            },
            6: {
                "meleeAttack": 5107,
                "rangeAttack": 620,
                "magicAttack": 620,
                "plusAttack": 1100,
            },
            7: {
                "meleeAttack": 5168,
                "rangeAttack": 681,
                "magicAttack": 681,
                "plusAttack": 1161,
            },
            8: {
                "meleeAttack": 5237,
                "rangeAttack": 750,
                "magicAttack": 750,
                "plusAttack": 1230,
            },
            9: {
                "meleeAttack": 5311,
                "rangeAttack": 824,
                "magicAttack": 824,
                "plusAttack": 1304,
            },
            10: {
                "meleeAttack": 5394,
                "rangeAttack": 907,
                "magicAttack": 907,
                "plusAttack": 1387,
            },
            11: {
                "meleeAttack": 5484,
                "rangeAttack": 997,
                "magicAttack": 997,
                "plusAttack": 1477,
            },
            12: {
                "meleeAttack": 5584,
                "rangeAttack": 1097,
                "magicAttack": 1097,
                "plusAttack": 1577,
            },
            13: {
                "meleeAttack": 5695,
                "rangeAttack": 1208,
                "magicAttack": 1208,
                "plusAttack": 1688,
            },
            14: {
                "meleeAttack": 5814,
                "rangeAttack": 1327,
                "magicAttack": 1327,
                "plusAttack": 1807,
            },
            15: {
                "meleeAttack": 5948,
                "rangeAttack": 1461,
                "magicAttack": 1461,
                "plusAttack": 1941,
            },
            16: {
                "meleeAttack": 6094,
                "rangeAttack": 1607,
                "magicAttack": 1607,
                "plusAttack": 2087,
            },
            17: {
                "meleeAttack": 6255,
                "rangeAttack": 1768,
                "magicAttack": 1768,
                "plusAttack": 2248,
            },
            18: {
                "meleeAttack": 6432,
                "rangeAttack": 1945,
                "magicAttack": 1945,
                "plusAttack": 2425,
            },
            19: {
                "meleeAttack": 6626,
                "rangeAttack": 2139,
                "magicAttack": 2139,
                "plusAttack": 2619,
            },
            20: {
                "meleeAttack": 6840,
                "rangeAttack": 2353,
                "magicAttack": 2353,
                "plusAttack": 2833,
            },
            21: {
                "meleeAttack": 7075,
                "rangeAttack": 2588,
                "magicAttack": 2588,
                "plusAttack": 3068,
            },
            22: {
                "meleeAttack": 7334,
                "rangeAttack": 2847,
                "magicAttack": 2847,
                "plusAttack": 3327,
            },
            23: {
                "meleeAttack": 7619,
                "rangeAttack": 3132,
                "magicAttack": 3132,
                "plusAttack": 3612,
            },
            24: {
                "meleeAttack": 7931,
                "rangeAttack": 3444,
                "magicAttack": 3444,
                "plusAttack": 3924,
            },
            25: {
                "meleeAttack": 8275,
                "rangeAttack": 3788,
                "magicAttack": 3788,
                "plusAttack": 4268,
            },
            26: {
                "meleeAttack": 8655,
                "rangeAttack": 4168,
                "magicAttack": 4168,
                "plusAttack": 4648,
            },
            27: {
                "meleeAttack": 9071,
                "rangeAttack": 4584,
                "magicAttack": 4584,
                "plusAttack": 5064,
            },
            28: {
                "meleeAttack": 9530,
                "rangeAttack": 5043,
                "magicAttack": 5043,
                "plusAttack": 5523,
            },
            29: {
                "meleeAttack": 10034,
                "rangeAttack": 5547,
                "magicAttack": 5547,
                "plusAttack": 6027,
            },
            30: {
                "meleeAttack": 10589,
                "rangeAttack": 6102,
                "magicAttack": 6102,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 2373,
                "plusAttack": 264,
            },
            1: {
                "meleeAttack": 2577,
                "rangeAttack": 204,
                "magicAttack": 204,
                "plusAttack": 468,
            },
            2: {
                "meleeAttack": 2597,
                "rangeAttack": 224,
                "magicAttack": 224,
                "plusAttack": 488,
            },
            3: {
                "meleeAttack": 2619,
                "rangeAttack": 246,
                "magicAttack": 246,
                "plusAttack": 510,
            },
            4: {
                "meleeAttack": 2643,
                "rangeAttack": 270,
                "magicAttack": 270,
                "plusAttack": 534,
            },
            5: {
                "meleeAttack": 2671,
                "rangeAttack": 298,
                "magicAttack": 298,
                "plusAttack": 562,
            },
            6: {
                "meleeAttack": 2701,
                "rangeAttack": 328,
                "magicAttack": 328,
                "plusAttack": 592,
            },
            7: {
                "meleeAttack": 2733,
                "rangeAttack": 360,
                "magicAttack": 360,
                "plusAttack": 624,
            },
            8: {
                "meleeAttack": 2770,
                "rangeAttack": 397,
                "magicAttack": 397,
                "plusAttack": 661,
            },
            9: {
                "meleeAttack": 2810,
                "rangeAttack": 437,
                "magicAttack": 437,
                "plusAttack": 701,
            },
            10: {
                "meleeAttack": 2853,
                "rangeAttack": 480,
                "magicAttack": 480,
                "plusAttack": 744,
            },
            11: {
                "meleeAttack": 2901,
                "rangeAttack": 528,
                "magicAttack": 528,
                "plusAttack": 792,
            },
            12: {
                "meleeAttack": 2954,
                "rangeAttack": 581,
                "magicAttack": 581,
                "plusAttack": 845,
            },
            13: {
                "meleeAttack": 3011,
                "rangeAttack": 638,
                "magicAttack": 638,
                "plusAttack": 902,
            },
            14: {
                "meleeAttack": 3075,
                "rangeAttack": 702,
                "magicAttack": 702,
                "plusAttack": 966,
            },
            15: {
                "meleeAttack": 3145,
                "rangeAttack": 772,
                "magicAttack": 772,
                "plusAttack": 1036,
            },
            16: {
                "meleeAttack": 3223,
                "rangeAttack": 850,
                "magicAttack": 850,
                "plusAttack": 1114,
            },
            17: {
                "meleeAttack": 3308,
                "rangeAttack": 935,
                "magicAttack": 935,
                "plusAttack": 1199,
            },
            18: {
                "meleeAttack": 3401,
                "rangeAttack": 1028,
                "magicAttack": 1028,
                "plusAttack": 1292,
            },
            19: {
                "meleeAttack": 3504,
                "rangeAttack": 1131,
                "magicAttack": 1131,
                "plusAttack": 1395,
            },
            20: {
                "meleeAttack": 3617,
                "rangeAttack": 1244,
                "magicAttack": 1244,
                "plusAttack": 1508,
            },
            21: {
                "meleeAttack": 3742,
                "rangeAttack": 1369,
                "magicAttack": 1369,
                "plusAttack": 1633,
            },
            22: {
                "meleeAttack": 3878,
                "rangeAttack": 1505,
                "magicAttack": 1505,
                "plusAttack": 1769,
            },
            23: {
                "meleeAttack": 4029,
                "rangeAttack": 1656,
                "magicAttack": 1656,
                "plusAttack": 1920,
            },
            24: {
                "meleeAttack": 4196,
                "rangeAttack": 1823,
                "magicAttack": 1823,
                "plusAttack": 2087,
            },
            25: {
                "meleeAttack": 4378,
                "rangeAttack": 2005,
                "magicAttack": 2005,
                "plusAttack": 2269,
            },
            26: {
                "meleeAttack": 4578,
                "rangeAttack": 2205,
                "magicAttack": 2205,
                "plusAttack": 2469,
            },
            27: {
                "meleeAttack": 4799,
                "rangeAttack": 2426,
                "magicAttack": 2426,
                "plusAttack": 2690,
            },
            28: {
                "meleeAttack": 5041,
                "rangeAttack": 2668,
                "magicAttack": 2668,
                "plusAttack": 2932,
            },
            29: {
                "meleeAttack": 5308,
                "rangeAttack": 2935,
                "magicAttack": 2935,
                "plusAttack": 3199,
            },
            30: {
                "meleeAttack": 5601,
                "rangeAttack": 3228,
                "magicAttack": 3228,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 3555,
                "plusAttack": 432,
            },
            1: {
                "meleeAttack": 3859,
                "rangeAttack": 304,
                "magicAttack": 304,
                "plusAttack": 736,
            },
            2: {
                "meleeAttack": 3890,
                "rangeAttack": 335,
                "magicAttack": 335,
                "plusAttack": 767,
            },
            3: {
                "meleeAttack": 3924,
                "rangeAttack": 369,
                "magicAttack": 369,
                "plusAttack": 801,
            },
            4: {
                "meleeAttack": 3961,
                "rangeAttack": 406,
                "magicAttack": 406,
                "plusAttack": 838,
            },
            5: {
                "meleeAttack": 4001,
                "rangeAttack": 446,
                "magicAttack": 446,
                "plusAttack": 878,
            },
            6: {
                "meleeAttack": 4046,
                "rangeAttack": 491,
                "magicAttack": 491,
                "plusAttack": 923,
            },
            7: {
                "meleeAttack": 4095,
                "rangeAttack": 540,
                "magicAttack": 540,
                "plusAttack": 972,
            },
            8: {
                "meleeAttack": 4149,
                "rangeAttack": 594,
                "magicAttack": 594,
                "plusAttack": 1026,
            },
            9: {
                "meleeAttack": 4209,
                "rangeAttack": 654,
                "magicAttack": 654,
                "plusAttack": 1086,
            },
            10: {
                "meleeAttack": 4274,
                "rangeAttack": 719,
                "magicAttack": 719,
                "plusAttack": 1151,
            },
            11: {
                "meleeAttack": 4345,
                "rangeAttack": 790,
                "magicAttack": 790,
                "plusAttack": 1222,
            },
            12: {
                "meleeAttack": 4425,
                "rangeAttack": 870,
                "magicAttack": 870,
                "plusAttack": 1302,
            },
            13: {
                "meleeAttack": 4512,
                "rangeAttack": 957,
                "magicAttack": 957,
                "plusAttack": 1389,
            },
            14: {
                "meleeAttack": 4607,
                "rangeAttack": 1052,
                "magicAttack": 1052,
                "plusAttack": 1484,
            },
            15: {
                "meleeAttack": 4712,
                "rangeAttack": 1157,
                "magicAttack": 1157,
                "plusAttack": 1589,
            },
            16: {
                "meleeAttack": 4828,
                "rangeAttack": 1273,
                "magicAttack": 1273,
                "plusAttack": 1705,
            },
            17: {
                "meleeAttack": 4955,
                "rangeAttack": 1400,
                "magicAttack": 1400,
                "plusAttack": 1832,
            },
            18: {
                "meleeAttack": 5096,
                "rangeAttack": 1541,
                "magicAttack": 1541,
                "plusAttack": 1973,
            },
            19: {
                "meleeAttack": 5250,
                "rangeAttack": 1695,
                "magicAttack": 1695,
                "plusAttack": 2127,
            },
            20: {
                "meleeAttack": 5419,
                "rangeAttack": 1864,
                "magicAttack": 1864,
                "plusAttack": 2296,
            },
            21: {
                "meleeAttack": 5605,
                "rangeAttack": 2050,
                "magicAttack": 2050,
                "plusAttack": 2482,
            },
            22: {
                "meleeAttack": 5811,
                "rangeAttack": 2256,
                "magicAttack": 2256,
                "plusAttack": 2688,
            },
            23: {
                "meleeAttack": 6035,
                "rangeAttack": 2480,
                "magicAttack": 2480,
                "plusAttack": 2912,
            },
            24: {
                "meleeAttack": 6284,
                "rangeAttack": 2729,
                "magicAttack": 2729,
                "plusAttack": 3161,
            },
            25: {
                "meleeAttack": 6557,
                "rangeAttack": 3002,
                "magicAttack": 3002,
                "plusAttack": 3434,
            },
            26: {
                "meleeAttack": 6857,
                "rangeAttack": 3302,
                "magicAttack": 3302,
                "plusAttack": 3734,
            },
            27: {
                "meleeAttack": 7187,
                "rangeAttack": 3632,
                "magicAttack": 3632,
                "plusAttack": 4064,
            },
            28: {
                "meleeAttack": 7551,
                "rangeAttack": 3996,
                "magicAttack": 3996,
                "plusAttack": 4428,
            },
            29: {
                "meleeAttack": 7950,
                "rangeAttack": 4395,
                "magicAttack": 4395,
                "plusAttack": 4827,
            },
            30: {
                "meleeAttack": 8390,
                "rangeAttack": 4835,
                "magicAttack": 4835,
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
        enchantableBaseOptions: {
            0: {
                "rangeAttack": 2642,
                "plusAttack": 336,
            },
            1: {
                "rangeAttack": 2868,
                "meleeAttack": 226,
                "magicAttack": 226,
                "plusAttack": 562,
            },
            2: {
                "rangeAttack": 2892,
                "meleeAttack": 250,
                "magicAttack": 250,
                "plusAttack": 586,
            },
            3: {
                "rangeAttack": 2916,
                "meleeAttack": 274,
                "magicAttack": 274,
                "plusAttack": 610,
            },
            4: {
                "rangeAttack": 2944,
                "meleeAttack": 302,
                "magicAttack": 302,
                "plusAttack": 638,
            },
            5: {
                "rangeAttack": 2974,
                "meleeAttack": 332,
                "magicAttack": 332,
                "plusAttack": 668,
            },
            6: {
                "rangeAttack": 3007,
                "meleeAttack": 365,
                "magicAttack": 365,
                "plusAttack": 701,
            },
            7: {
                "rangeAttack": 3044,
                "meleeAttack": 402,
                "magicAttack": 402,
                "plusAttack": 738,
            },
            8: {
                "rangeAttack": 3083,
                "meleeAttack": 441,
                "magicAttack": 441,
                "plusAttack": 777,
            },
            9: {
                "rangeAttack": 3127,
                "meleeAttack": 485,
                "magicAttack": 485,
                "plusAttack": 821,
            },
            10: {
                "rangeAttack": 3176,
                "meleeAttack": 534,
                "magicAttack": 534,
                "plusAttack": 870,
            },
            11: {
                "rangeAttack": 3230,
                "meleeAttack": 588,
                "magicAttack": 588,
                "plusAttack": 924,
            },
            12: {
                "rangeAttack": 3288,
                "meleeAttack": 646,
                "magicAttack": 646,
                "plusAttack": 982,
            },
            13: {
                "rangeAttack": 3353,
                "meleeAttack": 711,
                "magicAttack": 711,
                "plusAttack": 1047,
            },
            14: {
                "rangeAttack": 3423,
                "meleeAttack": 781,
                "magicAttack": 781,
                "plusAttack": 1117,
            },
            15: {
                "rangeAttack": 3503,
                "meleeAttack": 861,
                "magicAttack": 861,
                "plusAttack": 1197,
            },
            16: {
                "rangeAttack": 3588,
                "meleeAttack": 946,
                "magicAttack": 946,
                "plusAttack": 1282,
            },
            17: {
                "rangeAttack": 3682,
                "meleeAttack": 1040,
                "magicAttack": 1040,
                "plusAttack": 1376,
            },
            18: {
                "rangeAttack": 3786,
                "meleeAttack": 1144,
                "magicAttack": 1144,
                "plusAttack": 1480,
            },
            19: {
                "rangeAttack": 3902,
                "meleeAttack": 1260,
                "magicAttack": 1260,
                "plusAttack": 1596,
            },
            20: {
                "rangeAttack": 4027,
                "meleeAttack": 1385,
                "magicAttack": 1385,
                "plusAttack": 1721,
            },
            21: {
                "rangeAttack": 4166,
                "meleeAttack": 1524,
                "magicAttack": 1524,
                "plusAttack": 1860,
            },
            22: {
                "rangeAttack": 4318,
                "meleeAttack": 1676,
                "magicAttack": 1676,
                "plusAttack": 2012,
            },
            23: {
                "rangeAttack": 4485,
                "meleeAttack": 1843,
                "magicAttack": 1843,
                "plusAttack": 2179,
            },
            24: {
                "rangeAttack": 4670,
                "meleeAttack": 2028,
                "magicAttack": 2028,
                "plusAttack": 2364,
            },
            25: {
                "rangeAttack": 4873,
                "meleeAttack": 2231,
                "magicAttack": 2231,
                "plusAttack": 2567,
            },
            26: {
                "rangeAttack": 5095,
                "meleeAttack": 2453,
                "magicAttack": 2453,
                "plusAttack": 2789,
            },
            27: {
                "rangeAttack": 5341,
                "meleeAttack": 2699,
                "magicAttack": 2699,
                "plusAttack": 3035,
            },
            28: {
                "rangeAttack": 5611,
                "meleeAttack": 2969,
                "magicAttack": 2969,
                "plusAttack": 3305,
            },
            29: {
                "rangeAttack": 5908,
                "meleeAttack": 3266,
                "magicAttack": 3266,
                "plusAttack": 3602,
            },
            30: {
                "rangeAttack": 6234,
                "meleeAttack": 3592,
                "magicAttack": 3592,
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
        enchantableBaseOptions: {
            0: {
                "rangeAttack": 3915,
                "plusAttack": 528,
            },
            1: {
                "rangeAttack": 4250,
                "meleeAttack": 335,
                "magicAttack": 335,
                "plusAttack": 763,
            },
            2: {
                "rangeAttack": 4284,
                "meleeAttack": 369,
                "magicAttack": 369,
                "plusAttack": 797,
            },
            3: {
                "rangeAttack": 4321,
                "meleeAttack": 406,
                "magicAttack": 406,
                "plusAttack": 834,
            },
            4: {
                "rangeAttack": 4362,
                "meleeAttack": 447,
                "magicAttack": 447,
                "plusAttack": 875,
            },
            5: {
                "rangeAttack": 4406,
                "meleeAttack": 491,
                "magicAttack": 491,
                "plusAttack": 919,
            },
            6: {
                "rangeAttack": 4456,
                "meleeAttack": 541,
                "magicAttack": 541,
                "plusAttack": 969,
            },
            7: {
                "rangeAttack": 4509,
                "meleeAttack": 594,
                "magicAttack": 594,
                "plusAttack": 1022,
            },
            8: {
                "rangeAttack": 4569,
                "meleeAttack": 654,
                "magicAttack": 654,
                "plusAttack": 1082,
            },
            9: {
                "rangeAttack": 4634,
                "meleeAttack": 719,
                "magicAttack": 719,
                "plusAttack": 1147,
            },
            10: {
                "rangeAttack": 4707,
                "meleeAttack": 792,
                "magicAttack": 792,
                "plusAttack": 1220,
            },
            11: {
                "rangeAttack": 4786,
                "meleeAttack": 871,
                "magicAttack": 871,
                "plusAttack": 1299,
            },
            12: {
                "rangeAttack": 4873,
                "meleeAttack": 958,
                "magicAttack": 958,
                "plusAttack": 1386,
            },
            13: {
                "rangeAttack": 4968,
                "meleeAttack": 1053,
                "magicAttack": 1053,
                "plusAttack": 1481,
            },
            14: {
                "rangeAttack": 5073,
                "meleeAttack": 1158,
                "magicAttack": 1158,
                "plusAttack": 1586,
            },
            15: {
                "rangeAttack": 5189,
                "meleeAttack": 1274,
                "magicAttack": 1274,
                "plusAttack": 1702,
            },
            16: {
                "rangeAttack": 5318,
                "meleeAttack": 1403,
                "magicAttack": 1403,
                "plusAttack": 1831,
            },
            17: {
                "rangeAttack": 5457,
                "meleeAttack": 1542,
                "magicAttack": 1542,
                "plusAttack": 1970,
            },
            18: {
                "rangeAttack": 5612,
                "meleeAttack": 1697,
                "magicAttack": 1697,
                "plusAttack": 2125,
            },
            19: {
                "rangeAttack": 5782,
                "meleeAttack": 1867,
                "magicAttack": 1867,
                "plusAttack": 2295,
            },
            20: {
                "rangeAttack": 5968,
                "meleeAttack": 2053,
                "magicAttack": 2053,
                "plusAttack": 2481,
            },
            21: {
                "rangeAttack": 6173,
                "meleeAttack": 2258,
                "magicAttack": 2258,
                "plusAttack": 2686,
            },
            22: {
                "rangeAttack": 6399,
                "meleeAttack": 2484,
                "magicAttack": 2484,
                "plusAttack": 2912,
            },
            23: {
                "rangeAttack": 6648,
                "meleeAttack": 2733,
                "magicAttack": 2733,
                "plusAttack": 3161,
            },
            24: {
                "rangeAttack": 6921,
                "meleeAttack": 3006,
                "magicAttack": 3006,
                "plusAttack": 3434,
            },
            25: {
                "rangeAttack": 7221,
                "meleeAttack": 3306,
                "magicAttack": 3306,
                "plusAttack": 3734,
            },
            26: {
                "rangeAttack": 7551,
                "meleeAttack": 3636,
                "magicAttack": 3636,
                "plusAttack": 4064,
            },
            27: {
                "rangeAttack": 7915,
                "meleeAttack": 4000,
                "magicAttack": 4000,
                "plusAttack": 4428,
            },
            28: {
                "rangeAttack": 8316,
                "meleeAttack": 4401,
                "magicAttack": 4401,
                "plusAttack": 4829,
            },
            29: {
                "rangeAttack": 8755,
                "meleeAttack": 4840,
                "magicAttack": 4840,
                "plusAttack": 5268,
            },
            30: {
                "rangeAttack": 9240,
                "meleeAttack": 5325,
                "magicAttack": 5325,
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
        enchantableBaseOptions: {
            0: {
                "magicAttack": 3492,
                "plusAttack": 600,
            },
            1: {
                "magicAttack": 3791,
                "meleeAttack": 299,
                "rangeAttack": 299,
                "plusAttack": 899,
            },
            2: {
                "magicAttack": 3821,
                "meleeAttack": 329,
                "rangeAttack": 329,
                "plusAttack": 929,
            },
            3: {
                "magicAttack": 3855,
                "meleeAttack": 363,
                "rangeAttack": 363,
                "plusAttack": 963,
            },
            4: {
                "magicAttack": 3891,
                "meleeAttack": 399,
                "rangeAttack": 399,
                "plusAttack": 999,
            },
            5: {
                "magicAttack": 3930,
                "meleeAttack": 438,
                "rangeAttack": 438,
                "plusAttack": 1038,
            },
            6: {
                "magicAttack": 3974,
                "meleeAttack": 482,
                "rangeAttack": 482,
                "plusAttack": 1082,
            },
            7: {
                "magicAttack": 4022,
                "meleeAttack": 530,
                "rangeAttack": 530,
                "plusAttack": 1130,
            },
            8: {
                "magicAttack": 4076,
                "meleeAttack": 584,
                "rangeAttack": 584,
                "plusAttack": 1184,
            },
            9: {
                "magicAttack": 4134,
                "meleeAttack": 642,
                "rangeAttack": 642,
                "plusAttack": 1242,
            },
            10: {
                "magicAttack": 4198,
                "meleeAttack": 706,
                "rangeAttack": 706,
                "plusAttack": 1306,
            },
            11: {
                "magicAttack": 4268,
                "meleeAttack": 776,
                "rangeAttack": 776,
                "plusAttack": 1376,
            },
            12: {
                "magicAttack": 4346,
                "meleeAttack": 854,
                "rangeAttack": 854,
                "plusAttack": 1454,
            },
            13: {
                "magicAttack": 4432,
                "meleeAttack": 940,
                "rangeAttack": 940,
                "plusAttack": 1540,
            },
            14: {
                "magicAttack": 4526,
                "meleeAttack": 1034,
                "rangeAttack": 1034,
                "plusAttack": 1634,
            },
            15: {
                "magicAttack": 4630,
                "meleeAttack": 1138,
                "rangeAttack": 1138,
                "plusAttack": 1738,
            },
            16: {
                "magicAttack": 4743,
                "meleeAttack": 1251,
                "rangeAttack": 1251,
                "plusAttack": 1851,
            },
            17: {
                "magicAttack": 4867,
                "meleeAttack": 1375,
                "rangeAttack": 1375,
                "plusAttack": 1975,
            },
            18: {
                "magicAttack": 5005,
                "meleeAttack": 1513,
                "rangeAttack": 1513,
                "plusAttack": 2113,
            },
            19: {
                "magicAttack": 5156,
                "meleeAttack": 1664,
                "rangeAttack": 1664,
                "plusAttack": 2264,
            },
            20: {
                "magicAttack": 5322,
                "meleeAttack": 1830,
                "rangeAttack": 1830,
                "plusAttack": 2430,
            },
            21: {
                "magicAttack": 5506,
                "meleeAttack": 2014,
                "rangeAttack": 2014,
                "plusAttack": 2614,
            },
            22: {
                "magicAttack": 5707,
                "meleeAttack": 2215,
                "rangeAttack": 2215,
                "plusAttack": 2815,
            },
            23: {
                "magicAttack": 5930,
                "meleeAttack": 2438,
                "rangeAttack": 2438,
                "plusAttack": 3038,
            },
            24: {
                "magicAttack": 6173,
                "meleeAttack": 2681,
                "rangeAttack": 2681,
                "plusAttack": 3281,
            },
            25: {
                "magicAttack": 6440,
                "meleeAttack": 2948,
                "rangeAttack": 2948,
                "plusAttack": 3548,
            },
            26: {
                "magicAttack": 6736,
                "meleeAttack": 3244,
                "rangeAttack": 3244,
                "plusAttack": 3844,
            },
            27: {
                "magicAttack": 7061,
                "meleeAttack": 3569,
                "rangeAttack": 3569,
                "plusAttack": 4169,
            },
            28: {
                "magicAttack": 7417,
                "meleeAttack": 3925,
                "rangeAttack": 3925,
                "plusAttack": 4525,
            },
            29: {
                "magicAttack": 7809,
                "meleeAttack": 4317,
                "rangeAttack": 4317,
                "plusAttack": 4917,
            },
            30: {
                "magicAttack": 8241,
                "meleeAttack": 4749,
                "rangeAttack": 4749,
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
        enchantableBaseOptions: {
            0: {
                "magicAttack": 3303,
                "plusAttack": 552,
            },
            1: {
                "magicAttack": 3586,
                "meleeAttack": 283,
                "rangeAttack": 283,
                "plusAttack": 835,
            },
            2: {
                "magicAttack": 3615,
                "meleeAttack": 312,
                "rangeAttack": 312,
                "plusAttack": 864,
            },
            3: {
                "magicAttack": 3646,
                "meleeAttack": 343,
                "rangeAttack": 343,
                "plusAttack": 895,
            },
            4: {
                "magicAttack": 3680,
                "meleeAttack": 377,
                "rangeAttack": 377,
                "plusAttack": 929,
            },
            5: {
                "magicAttack": 3718,
                "meleeAttack": 415,
                "rangeAttack": 415,
                "plusAttack": 967,
            },
            6: {
                "magicAttack": 3759,
                "meleeAttack": 456,
                "rangeAttack": 456,
                "plusAttack": 1008,
            },
            7: {
                "magicAttack": 3805,
                "meleeAttack": 502,
                "rangeAttack": 502,
                "plusAttack": 1054,
            },
            8: {
                "magicAttack": 3854,
                "meleeAttack": 551,
                "rangeAttack": 551,
                "plusAttack": 1103,
            },
            9: {
                "magicAttack": 3910,
                "meleeAttack": 607,
                "rangeAttack": 607,
                "plusAttack": 1159,
            },
            10: {
                "magicAttack": 3971,
                "meleeAttack": 668,
                "rangeAttack": 668,
                "plusAttack": 1220,
            },
            11: {
                "magicAttack": 4038,
                "meleeAttack": 735,
                "rangeAttack": 735,
                "plusAttack": 1287,
            },
            12: {
                "magicAttack": 4110,
                "meleeAttack": 807,
                "rangeAttack": 807,
                "plusAttack": 1359,
            },
            13: {
                "magicAttack": 4192,
                "meleeAttack": 889,
                "rangeAttack": 889,
                "plusAttack": 1441,
            },
            14: {
                "magicAttack": 4281,
                "meleeAttack": 978,
                "rangeAttack": 978,
                "plusAttack": 1530,
            },
            15: {
                "magicAttack": 4378,
                "meleeAttack": 1075,
                "rangeAttack": 1075,
                "plusAttack": 1627,
            },
            16: {
                "magicAttack": 4486,
                "meleeAttack": 1183,
                "rangeAttack": 1183,
                "plusAttack": 1735,
            },
            17: {
                "magicAttack": 4604,
                "meleeAttack": 1301,
                "rangeAttack": 1301,
                "plusAttack": 1853,
            },
            18: {
                "magicAttack": 4734,
                "meleeAttack": 1431,
                "rangeAttack": 1431,
                "plusAttack": 1983,
            },
            19: {
                "magicAttack": 4877,
                "meleeAttack": 1574,
                "rangeAttack": 1574,
                "plusAttack": 2126,
            },
            20: {
                "magicAttack": 5035,
                "meleeAttack": 1732,
                "rangeAttack": 1732,
                "plusAttack": 2284,
            },
            21: {
                "magicAttack": 5208,
                "meleeAttack": 1905,
                "rangeAttack": 1905,
                "plusAttack": 2457,
            },
            22: {
                "magicAttack": 5399,
                "meleeAttack": 2096,
                "rangeAttack": 2096,
                "plusAttack": 2648,
            },
            23: {
                "magicAttack": 5608,
                "meleeAttack": 2305,
                "rangeAttack": 2305,
                "plusAttack": 2857,
            },
            24: {
                "magicAttack": 5838,
                "meleeAttack": 2535,
                "rangeAttack": 2535,
                "plusAttack": 3087,
            },
            25: {
                "magicAttack": 6093,
                "meleeAttack": 2790,
                "rangeAttack": 2790,
                "plusAttack": 3342,
            },
            26: {
                "magicAttack": 6371,
                "meleeAttack": 3068,
                "rangeAttack": 3068,
                "plusAttack": 3620,
            },
            27: {
                "magicAttack": 6678,
                "meleeAttack": 3375,
                "rangeAttack": 3375,
                "plusAttack": 3927,
            },
            28: {
                "magicAttack": 7016,
                "meleeAttack": 3713,
                "rangeAttack": 3713,
                "plusAttack": 4265,
            },
            29: {
                "magicAttack": 7386,
                "meleeAttack": 4083,
                "rangeAttack": 4083,
                "plusAttack": 4635,
            },
            30: {
                "magicAttack": 7795,
                "meleeAttack": 4492,
                "rangeAttack": 4492,
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 2397,
                "plusAttack": 253,
            },
            1: {
                "meleeAttack": 2602,
                "rangeAttack": 205,
                "magicAttack": 205,
                "plusAttack": 458,
            },
            2: {
                "meleeAttack": 2623,
                "rangeAttack": 226,
                "magicAttack": 226,
                "plusAttack": 479,
            },
            3: {
                "meleeAttack": 2645,
                "rangeAttack": 248,
                "magicAttack": 248,
                "plusAttack": 501,
            },
            4: {
                "meleeAttack": 2670,
                "rangeAttack": 273,
                "magicAttack": 273,
                "plusAttack": 526,
            },
            5: {
                "meleeAttack": 2697,
                "rangeAttack": 300,
                "magicAttack": 300,
                "plusAttack": 553,
            },
            6: {
                "meleeAttack": 2729,
                "rangeAttack": 332,
                "magicAttack": 332,
                "plusAttack": 585,
            },
            7: {
                "meleeAttack": 2761,
                "rangeAttack": 364,
                "magicAttack": 364,
                "plusAttack": 617,
            },
            8: {
                "meleeAttack": 2797,
                "rangeAttack": 400,
                "magicAttack": 400,
                "plusAttack": 653,
            },
            9: {
                "meleeAttack": 2838,
                "rangeAttack": 441,
                "magicAttack": 441,
                "plusAttack": 694,
            },
            10: {
                "meleeAttack": 2882,
                "rangeAttack": 485,
                "magicAttack": 485,
                "plusAttack": 738,
            },
            11: {
                "meleeAttack": 2930,
                "rangeAttack": 533,
                "magicAttack": 533,
                "plusAttack": 786,
            },
            12: {
                "meleeAttack": 2983,
                "rangeAttack": 586,
                "magicAttack": 586,
                "plusAttack": 839,
            },
            13: {
                "meleeAttack": 3042,
                "rangeAttack": 645,
                "magicAttack": 645,
                "plusAttack": 898,
            },
            14: {
                "meleeAttack": 3107,
                "rangeAttack": 710,
                "magicAttack": 710,
                "plusAttack": 963,
            },
            15: {
                "meleeAttack": 3177,
                "rangeAttack": 780,
                "magicAttack": 780,
                "plusAttack": 1033,
            },
            16: {
                "meleeAttack": 3255,
                "rangeAttack": 858,
                "magicAttack": 858,
                "plusAttack": 1111,
            },
            17: {
                "meleeAttack": 3341,
                "rangeAttack": 944,
                "magicAttack": 944,
                "plusAttack": 1197,
            },
            18: {
                "meleeAttack": 3436,
                "rangeAttack": 1039,
                "magicAttack": 1039,
                "plusAttack": 1292,
            },
            19: {
                "meleeAttack": 3540,
                "rangeAttack": 1143,
                "magicAttack": 1143,
                "plusAttack": 1396,
            },
            20: {
                "meleeAttack": 3653,
                "rangeAttack": 1256,
                "magicAttack": 1256,
                "plusAttack": 1509,
            },
            21: {
                "meleeAttack": 3779,
                "rangeAttack": 1382,
                "magicAttack": 1382,
                "plusAttack": 1635,
            },
            22: {
                "meleeAttack": 3917,
                "rangeAttack": 1520,
                "magicAttack": 1520,
                "plusAttack": 1773,
            },
            23: {
                "meleeAttack": 4069,
                "rangeAttack": 1672,
                "magicAttack": 1672,
                "plusAttack": 1925,
            },
            24: {
                "meleeAttack": 4237,
                "rangeAttack": 1840,
                "magicAttack": 1840,
                "plusAttack": 2093,
            },
            25: {
                "meleeAttack": 4421,
                "rangeAttack": 2024,
                "magicAttack": 2024,
                "plusAttack": 2277,
            },
            26: {
                "meleeAttack": 4623,
                "rangeAttack": 2226,
                "magicAttack": 2226,
                "plusAttack": 2479,
            },
            27: {
                "meleeAttack": 4845,
                "rangeAttack": 2448,
                "magicAttack": 2448,
                "plusAttack": 2701,
            },
            28: {
                "meleeAttack": 5091,
                "rangeAttack": 2694,
                "magicAttack": 2694,
                "plusAttack": 2947,
            },
            29: {
                "meleeAttack": 5360,
                "rangeAttack": 2963,
                "magicAttack": 2963,
                "plusAttack": 3216,
            },
            30: {
                "meleeAttack": 5656,
                "rangeAttack": 3259,
                "magicAttack": 3259,
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
            "meleeAttack": 2856,
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
            "meleeAttack": 3414,
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
            "meleeAttack": 3381,
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
            "meleeAttack": 3381,
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
            "meleeAttack": 4107,
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
            "meleeAttack": 3453,
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
            "meleeAttack": 5982,
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
            "meleeAttack": 3165,
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
            "meleeAttack": 4740,
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
            "meleeAttack": 4740,
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
            "magicAttack": 4656,
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
            "rangeAttack": 3522,
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
            "rangeAttack": 5220,
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
            "meleeAttack": 3195,
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
            "magicAttack": 4404,
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
        enchantableBaseOptions: [
            {
                "rangeAttack": 1174,
            },
            {
                "meleeAttack": 411,
                "rangeAttack": 1585,
                "magicAttack": 411,
                "plusAttack": 551
            }
        ],
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
        enchantableBaseOptions: {
            0: {
                "meleeAttack": 1428,
                "plusAttack": 150,
            },
            1: {
                "meleeAttack": 1569,
                "rangeAttack": 141,
                "magicAttack": 141,
                "plusAttack": 291,
            },
            2: {
                "meleeAttack": 1583,
                "rangeAttack": 155,
                "magicAttack": 155,
                "plusAttack": 305,
            },
            3: {
                "meleeAttack": 1599,
                "rangeAttack": 171,
                "magicAttack": 171,
                "plusAttack": 321,
            },
            4: {
                "meleeAttack": 1616,
                "rangeAttack": 188,
                "magicAttack": 188,
                "plusAttack": 338,
            },
            5: {
                "meleeAttack": 1635,
                "rangeAttack": 207,
                "magicAttack": 207,
                "plusAttack": 357,
            },
            6: {
                "meleeAttack": 1656,
                "rangeAttack": 228,
                "magicAttack": 228,
                "plusAttack": 378,
            },
            7: {
                "meleeAttack": 1679,
                "rangeAttack": 251,
                "magicAttack": 251,
                "plusAttack": 401,
            },
            8: {
                "meleeAttack": 1703,
                "rangeAttack": 275,
                "magicAttack": 275,
                "plusAttack": 425,
            },
            9: {
                "meleeAttack": 1731,
                "rangeAttack": 303,
                "magicAttack": 303,
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
                "plusAttack": 1000,
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
    }
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
    }
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
    }


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
        name: "紅蓮の鎧",
        fixedBaseOptions: {
            'plusAllStatus': 200,
            'plusAttack': 600,
            'plusDefense': 1200,
            'plusHitPoint': 5000,
        },
        icon: unknown,
    }

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