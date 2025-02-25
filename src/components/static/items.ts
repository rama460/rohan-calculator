import unknown from "../../assets/unknown.png";

import bow_grand_kaiser_onixy from "../../assets/items/bow_grand_kaiser_onixy.png";
import dagger_zeta_obsidian from "../../assets/items/dagger_zeta_obsidian.png";

import helmet_grand_kaiser_onixy from "../../assets/items/helmet_grand_kaiser_onixy.png";
import helmet_igniel from "../../assets/items/helmet_igniel.png";

import gauntlet_grand_kaiser_onixy from "../../assets/items/gauntlet_grand_kaiser_onixy.png";
import gauntlet_igniel from "../../assets/items/gauntlet_igniel.png";

import tunic_grand_kaiser_onixy from "../../assets/items/tunic_grand_kaiser_onixy.png";
import tunic_igniel from "../../assets/items/tunic_igniel.png";

import leggings_grand_kaiser_onixy from "../../assets/items/leggings_grand_kaiser_onixy.png";
import leggings_igniel from "../../assets/items/leggings_igniel.png";

import boots_grand_kaiser_onixy from "../../assets/items/boots_grand_kaiser_onixy.png";
import boots_igniel from "../../assets/items/boots_igniel.png";

import shield_zeta_obsidian from "../../assets/items/shield_zeta_obsidian.png";
import guarder_zeno_opaniel from "../../assets/items/guarder_zeno_opaniel.png";

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
import { RaceName, races } from "./races";

export type BaseItemTemplate = {
    name: string;
    icon: string;
    availableRaces?: RaceName[];
    fixedBaseOptions?: {
        [key in BuiltinOptionKeyType]?: number;
    };
    enchantableBaseOptions?: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        }
    };
    raceBaseOptions?: {
        [key in RaceName]?: {
            [key in BuiltinOptionKeyType]?: number;
        }
    };
    raceEnchantableBaseOptions?: {
        [key in RaceName]?: {
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
        [key in RaceName]?: {
            [key in BuiltinOptionKeyType]?: number;
        }
    }
} & BaseItemTemplate;
export type RaceEnchantableItemTemplate = {
    raceEnchantableBaseOptions: {
        [key in RaceName]?: {
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
    availableRaces?: RaceName[];
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

export const getInitialBaseOtions = (itemTemplate: ItemTemplate, raceid: number, enchantLevel: number): { [key in BuiltinOptionKeyType]?: number } => {
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
    if (itemTemplate.raceBaseOptions) {
        baseOptions = {
            ...baseOptions,
            ...itemTemplate.raceBaseOptions[races[raceid].name]
        }
    }
    if (itemTemplate.raceEnchantableBaseOptions) {
        baseOptions = {
            ...baseOptions,
            ...itemTemplate.raceEnchantableBaseOptions[races[raceid].name]?.[enchantLevel] ?? {}
        }
    }
    return baseOptions
}

export type SynergyKey = "roha" | "variant" | "gargantua" | "catastrophe" | "chaos" | "megas" | "hesperos" | "karlas" | "diegas" | "kasim" | "onyxArmor" | "ignielArmor";
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
            }
        },
        sockets: 2
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

export const helmets: ItemTemplate[] = [
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
        'multiplyDamageNegationRate': 10,
        'multiplyDecreaseCriticalDamageRate': 25,
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
        'multiplyCriticalRate': 10,
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
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]