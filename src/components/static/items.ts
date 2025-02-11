import unknown from "../../assets/unknown.png";
import { BuiltinOptionKeyType } from "./options";


export type BaseItemTemplate = {
    name: string;
    icon: string;
    fixedBaseOptions?: {
        [key in BuiltinOptionKeyType]?: number;
    };
    enchantableBaseOptions?: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        }
    };
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
    enchantLevel: number;
    baseOptions: {
        [key in BuiltinOptionKeyType]?: number;
    };
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

export type ItemTemplate = FixedItemTemplate | EnchantableItemTemplate | SetItemTemplate;

export const getInitialBaseOtions = (itemTemplate: ItemTemplate, enchantLevel: number): { [key in BuiltinOptionKeyType]?: number } => {
    if (itemTemplate.fixedBaseOptions) {
        return itemTemplate.fixedBaseOptions;
    } else if (itemTemplate.enchantableBaseOptions) {
        return itemTemplate.enchantableBaseOptions[enchantLevel];
    } else {
        return {};
    }
}

export type SynergyKey = "roha" | "chaos" | "megas" | "abyss" | "void" | "hesperos" | "karlas" | "diegas" | "kasim"

export const weapons: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
            "plusDefense": 100,
        },
    }

]
export const shields: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]
export const arrows: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]
export const helmets: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]
export const gauntlets: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]
export const tunics: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]
export const leggings: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
    }

]
export const boots: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: unknown,
        fixedBaseOptions: {
        },
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
export const glasses: ItemTemplate[] = [
    {
        name: "ロハの眼帯",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: unknown,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    }
]
export const hats: ItemTemplate[] = [
    {
        name: "ロハの冠",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: unknown,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    }

]
export const earrings: ItemTemplate[] = [
    {
        name: "ロハの耳飾り",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: unknown,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    }

]
export const costumes: ItemTemplate[] = [
    {
        name: "ロハの鎧",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 2500,
            'plusDefense': 3000,
            'plusHitPoint': 20000,
        },
        icon: unknown,
        synergyOptions: rohaSynergisticOptions,
        synergyKey: "roha"
    }

]
export const accessories: ItemTemplate[] = [
    {
        name: "ケイオスリング",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: unknown,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "ケイオスブローチ",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: unknown,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "ケイオスブレスレット",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: unknown,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "ケイオスネックレス",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusHitPoint': 100000,
            'plusAttack': 1000,
        },
        icon: unknown,
        synergyOptions: chaosSynergisticOptions,
        synergyKey: "chaos"
    },
    {
        name: "メイガスリング",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,
    },
    {
        name: "メイガスブローチ",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,
    },
    {
        name: "メイガスブレスレット",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,

    },
    {
        name: "メイガスネックレス",
        fixedBaseOptions: {
            'plusAllOption': 750,
            'plusAttack': 1000,
            'plusDefense': 1000,
        },
        icon: unknown,

    },
    {
        name: "深淵の宝珠(玄武)",
        enchantableBaseOptions: {
            0: {
                'plusAllOption': 225,
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
                'plusAllOption': 225,
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
                'plusAllOption': 225,
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
                'plusAllOption': 225,
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
            'plusAllOption': 150,
            'plusAttack': 100,
            'plusDefense': 100,
            'plusHitPoint': 10000,
        },
        icon: unknown,
    },
    {
        name: "輝くノーウェンのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 200,
            'plusAttack': 200,
            'plusDefense': 200,
            'plusHitPoint': 25000,
        },
        icon: unknown,
    },
    {
        name: "洗練されたノーウェンのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 300,
            'plusAttack': 300,
            'plusDefense': 300,
            'plusHitPoint': 50000,
        },
        icon: unknown,
    },
    {
        name: "鮮血のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 400,
            'plusAttack': 400,
            'plusDefense': 400,
            'plusHitPoint': 75000,
        },
        icon: unknown,
    },
    {
        name: "深紅のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 1000,
            'plusDefense': 1000,
            'multiplyPotionRecovery': 10,
        },
        icon: unknown,
    }
]
export const j_talismans: ItemTemplate[] = [
    {
        name: "ヘスペロスのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 200,
            'plusAttack': 200,
        },
        icon: unknown,
    },
    {
        name: "輝くへスぺロスのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 300,
            'plusAttack': 400,
        },
        icon: unknown,
    },
    {
        name: "洗練されたヘスペロスのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 450,
            'plusAttack': 600,
        },
        icon: unknown,
    },
    {
        name: "栄光のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 600,
            'plusAttack': 800,
        },
        icon: unknown,
    },
    {
        name: "黄金のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 1000,
            'plusHitPoint': 100000,
            'multiplySkillAttack': 10,
        },
        icon: unknown,
    }
]
export const h_talismans: ItemTemplate[] = [
    {
        name: "カルラスのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 150,
            'plusDefense': 200,
            'plusHitPoint': 10000,
        },
        icon: unknown,
    },
    {
        name: "輝くカルラスのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 200,
            'plusDefense': 400,
            'plusHitPoint': 25000,
        },
        icon: unknown,
    },
    {
        name: "洗練されたカルラスのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 300,
            'plusDefense': 600,
            'plusHitPoint': 50000,
        },
        icon: unknown,
    },
    {
        name: "深緑のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 400,
            'plusDefense': 800,
            'plusHitPoint': 75000,
        },
        icon: unknown,
    },
    {
        name: "翡翠のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusDefense': 1000,
            'multiplyDefense': 10,
            'plusHitPoint': 100000,
        },
        icon: unknown,
    }
]
export const g_talismans: ItemTemplate[] = [
    {
        name: "ディエガのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 150,
            'plusAttack': 200,
            'plusHitPoint': 10000,
        },
        icon: unknown,
    },
    {
        name: "輝くディエガのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 200,
            'plusAttack': 400,
            'plusHitPoint': 25000,
        },
        icon: unknown,
    },
    {
        name: "洗練されたディエガのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 300,
            'plusAttack': 600,
            'plusHitPoint': 50000,
        },
        icon: unknown,
    },
    {
        name: "紺碧のタリスマン	",
        fixedBaseOptions: {
            'plusAllOption': 400,
            'plusAttack': 800,
            'plusHitPoint': 75000,
        },
        icon: unknown,
    },
    {
        name: "蒼穹のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusAttack': 1000,
            'multiplyAttack': 10,
            'plusHitPoint': 100000,
        },
        icon: unknown,
    }
]
export const i_talismans: ItemTemplate[] = [
    {
        name: "カシムのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 200,
            'plusDefense': 200,
        },
        icon: unknown,
    },
    {
        name: "輝くカシムのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 300,
            'plusDefense': 400,
        },
        icon: unknown,
    },
    {
        name: "洗練されたカシムのタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 450,
            'plusDefense': 600,
        },
        icon: unknown,
    },
    {
        name: "紫闇のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 600,
            'plusDefense': 800,
        },
        icon: unknown,
    },
    {
        name: "紫紺のタリスマン",
        fixedBaseOptions: {
            'plusAllOption': 1000,
            'plusDefense': 1000,
            'plusHitPoint': 100000,
            'multiplySkillAttack': 10,
        },
        icon: unknown,
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
                'plusAllOption': 100,
            },
            12: {
                'plusAttack': 3000,
                'plusDefense': 3000,
                'plusHitPoint': 30000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 150,
            },
            13: {
                'plusAttack': 3500,
                'plusDefense': 3500,
                'plusHitPoint': 35000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 200,
            },
            14: {
                'plusAttack': 4000,
                'plusDefense': 4000,
                'plusHitPoint': 40000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 250,
            },
            15: {
                'plusAttack': 4500,
                'plusDefense': 4500,
                'plusHitPoint': 45000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 300,
            },
            16: {
                'plusAttack': 5000,
                'plusDefense': 5000,
                'plusHitPoint': 50000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 350,
            },
            17: {
                'plusAttack': 5500,
                'plusDefense': 5500,
                'plusHitPoint': 55000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 400,
            },
            18: {
                'plusAttack': 6000,
                'plusDefense': 6000,
                'plusHitPoint': 60000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 450,
            },
            19: {
                'plusAttack': 7000,
                'plusDefense': 7000,
                'plusHitPoint': 70000,
                'multiplyPVEDefense': 20,
                'plusAllOption': 500,
            },
            20: {
                'plusAttack': 8000,
                'plusDefense': 8000,
                'plusHitPoint': 80000,
                'multiplyPVEDefense': 22,
                'plusAllOption': 600,
            },
        },
        icon: unknown,
    },
]
export const e_talismans: ItemTemplate[] = [
    {
        name: "ウォルターのタリスマン",
        enchantableBaseOptions: {
            0: {
                'plusAllOption': 10,
            },
            1: {
                'plusAllOption': 12,
            },
            2: {
                'plusAllOption': 14,
                'plusDefense': 26,
            },
            3: {
                'plusAllOption': 22,
                'plusDefense': 39,
                'plusAttack': 51,
            },
            4: {
                'plusAllOption': 28,
                'plusDefense': 51,
                'plusAttack': 66,
            },
            5: {
                'plusAllOption': 37,
                'plusDefense': 66,
                'plusAttack': 86,
                'plusHitPoint': 500,
            },
            6: {
                'plusAllOption': 49,
                'plusDefense': 125,
                'plusAttack': 164,
                'plusHitPoint': 950,
            },
            7: {
                'plusAllOption': 118,
                'plusDefense': 213,
                'plusAttack': 278,
                'plusHitPoint': 1615,
            },
            8: {
                'plusAllOption': 150,
                'plusDefense': 400,
                'plusAttack': 400,
                'plusHitPoint': 3000,
            },
            9: {
                'plusAllOption': 200,
                'plusDefense': 600,
                'plusAttack': 600,
                'plusHitPoint': 5000,
            },
            10: {
                'plusAllOption': 300,
                'plusDefense': 1000,
                'plusAttack': 1000,
                'plusHitPoint': 10000,
            },
            11: {
                'plusAllOption': 330,
                'plusDefense': 1300,
                'plusAttack': 1200,
                'plusHitPoint': 12500,
            },
            12: {
                'plusAllOption': 360,
                'plusDefense': 1600,
                'plusAttack': 1400,
                'plusHitPoint': 15000,
            },
            13: {
                'plusAllOption': 390,
                'plusDefense': 1900,
                'plusAttack': 1600,
                'plusHitPoint': 17500,
            },
            14: {
                'plusAllOption': 420,
                'plusDefense': 2200,
                'plusAttack': 1800,
                'plusHitPoint': 20000,
            },
            15: {
                'plusAllOption': 450,
                'plusDefense': 2500,
                'plusAttack': 2000,
                'plusHitPoint': 22500,
            },
            16: {
                'plusAllOption': 480,
                'plusDefense': 2800,
                'plusAttack': 2200,
                'plusHitPoint': 25000,
            },
            17: {
                'plusAllOption': 510,
                'plusDefense': 3100,
                'plusAttack': 2400,
                'plusHitPoint': 27500,
            },
            18: {
                'plusAllOption': 540,
                'plusDefense': 3400,
                'plusAttack': 2600,
                'plusHitPoint': 30000,
            },
            19: {
                'plusAllOption': 570,
                'plusDefense': 3700,
                'plusAttack': 2800,
                'plusHitPoint': 32500,
            },
            20: {
                'plusAllOption': 600,
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
            'plusAllOption': 1000,
            'plusHitPoint': 300000,
        },
        icon: unknown,
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
        icon: unknown,
    },
    {
        name: "7等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 5500,
            'plusMagicPoint': 1000,

        },
        icon: unknown,
    },
    {
        name: "6等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 7500,
            'plusMagicPoint': 1500,
        },
        icon: unknown,
    },
    {
        name: "5等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 10500,
            'plusMagicPoint': 2000,
        },
        icon: unknown,
    },
    {
        name: "4等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 12500,
            'plusMagicPoint': 2500,
        },
        icon: unknown,
    },
    {
        name: "3等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 15000,
            'plusMagicPoint': 3000,
        },
        icon: unknown,
    },
    {
        name: "2等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 17500,
            'plusMagicPoint': 3500,
        },
        icon: unknown,
    },
    {
        name: "1等兵階級章",
        fixedBaseOptions: {
            'plusHitPoint': 20000,
            'plusMagicPoint': 4000,
        },
        icon: unknown,
    },
    {
        name: "1将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 30000,
            'plusMagicPoint': 6000,
            'multiplySkillAttack': 5,

        },
        icon: unknown,
    },
    {
        name: "2将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 40000,
            'plusMagicPoint': 8000,
            'multiplySkillAttack': 10,
            'multiplySkillDefense': 5,
        },
        icon: unknown,
    },
    {
        name: "3将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 50000,
            'plusMagicPoint': 10000,
            'multiplySkillAttack': 15,
            'multiplySkillDefense': 10,
        },
        icon: unknown,
    },
    {
        name: "4将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 60000,
            'plusMagicPoint': 12000,
            'multiplySkillAttack': 20,
            'multiplySkillDefense': 15,
        },
        icon: unknown,
    },
    {
        name: "5将校階級章",
        fixedBaseOptions: {
            'plusHitPoint': 70000,
            'plusMagicPoint': 14000,
            'multiplySkillAttack': 25,
            'multiplySkillDefense': 20,
        },
        icon: unknown,
    },
    {
        name: "軍団長階級章",
        fixedBaseOptions: {
            'plusHitPoint': 100000,
            'plusMagicPoint': 20000,
            'multiplySkillAttack': 35,
            'multiplySkillDefense': 30,
        },
        icon: unknown,
    },
    {
        name: "司令官階級章",
        fixedBaseOptions: {
            'plusHitPoint': 200000,
            'plusMagicPoint': 40000,
            'multiplySkillAttack': 50,
            'multiplySkillDefense': 40,
        },
        icon: unknown,
    },
    {
        name: "元帥階級章",
        fixedBaseOptions: {
            'plusHitPoint': 300000,
            'plusMagicPoint': 50000,
            'multiplySkillAttack': 50,
            'multiplySkillDefense': 40,
            'plusAllOption': 1000,
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
        icon: unknown,
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