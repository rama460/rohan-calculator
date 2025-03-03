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

export type SynergyKey = "roha" | "variant" | "gargantua" | "catastrophe" | "chaos" | "megas" | "hesperos" | "karlas" | "diegas" | "kasim" | "onyxArmor" | "obsidianArmor" | "celestiteArmor" | "ignielArmor";
export type WeaponType = "sword" | "dagger" | "blunt" | "axe" | "katar" | "zen" | "dualsword" | "polearm" | "bow" | "crossbow" | "wand" | "staff"
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
}
export type WeaponTemplate = {
    type: WeaponType;
} & ItemTemplate;

export const weapons: WeaponTemplate[] = [
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
                    "physicalDefense": 606,
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
        icon: unknown,
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

export const rides = [
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