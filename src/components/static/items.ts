import dagger from "../../assets/items/sample.jpg";
import { multiplyAttack, multiplyDeffense, multiplyHitPoint, multiplyNegationRate, multiplyPotionRecovery, multiplyPVEAttack, multiplyPVEDeffense, multiplyPVPAttack, multiplyPVPDeffense, multiplyReflectionRate, multiplySkillAttack, multiplySkillDeffense, Option, plusAllOption, plusAttack, plusDeffense, plusHitPoint, plusMagicPoint, plusStatusAttack } from "./options";


export type BaseItemTemplate = {
    name: string;
    icon: string;
    fixedBaseOptions?: Option[];
    enchantableBaseOptions?: Option[][];
    synergisticOptions?: {
        requiredCount: number;
        options: Option[];
    }[];
    synergisticKey?: string;
}
export type FixedItemTemplate = {
    fixedBaseOptions: Option[];
} & BaseItemTemplate;

export type EnchantableItemTemplate = {
    enchantableBaseOptions: Option[][];
} & BaseItemTemplate;

export type SetItemTemplate = {
    synergisticOptions: {
        requiredCount: number;
        options: Option[];
    }[];
    synergisticKey: string;
} & BaseItemTemplate;

export type Item = {
    name: string;
    icon: string;
    baseOptions: Option[];
    additionalOptions: Option[];
    synergisticOptions?: {
        requiredCount: number;
        options: Option[];
    }[];
    synargisticKey?: string;
}

export type ItemTemplate = FixedItemTemplate | EnchantableItemTemplate | SetItemTemplate;

export const generateItem = (itemTemplate: ItemTemplate, enchantLevel: number, additionalOptions: Option[]): Item => {
    const getOption = () => {
        if (itemTemplate.fixedBaseOptions) {
            return itemTemplate.fixedBaseOptions;
        } else if (itemTemplate.enchantableBaseOptions) {
            return itemTemplate.enchantableBaseOptions[enchantLevel];
        } else {
            return [];
        }
    }
    return {
        name: itemTemplate.name,
        icon: itemTemplate.icon,
        baseOptions: getOption(),
        additionalOptions: additionalOptions,
        synergisticOptions: itemTemplate.synergisticOptions,
        synargisticKey: itemTemplate.synergisticKey,
    }
}

export const weapons: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const shields: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const arrows: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const helmets: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const gauntlets: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const tunics: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const leggings: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]
export const boots: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]

const rohaSynergisticOptions = [
    {
        requiredCount: 3,
        options: [
            multiplyHitPoint(150),
            multiplySkillDeffense(70),
            multiplyPVEAttack(70),
            multiplyPVEDeffense(20),
            multiplyPotionRecovery(100),
        ]
    },
    {
        requiredCount: 4,
        options: [
            multiplyPVPDeffense(25),
            multiplyPVPAttack(85),
            multiplyReflectionRate(30),
            multiplySkillAttack(70),
            multiplyNegationRate(10),

        ]
    },

]
export const glasses: ItemTemplate[] = [
    {
        name: "ロハの眼帯",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(2500),
            plusDeffense(3000),
            plusHitPoint(20000),
        ],
        icon: dagger,
        synergisticOptions: rohaSynergisticOptions,
        synergisticKey: "ロハシリーズ"
    }
]
export const hats: ItemTemplate[] = [
    {
        name: "ロハの冠",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(2500),
            plusDeffense(3000),
            plusHitPoint(20000),
        ],
        icon: dagger,
        synergisticOptions: rohaSynergisticOptions,
        synergisticKey: "ロハシリーズ"
    }

]
export const earrings: ItemTemplate[] = [
    {
        name: "ロハの耳飾り",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(2500),
            plusDeffense(3000),
            plusHitPoint(20000),
        ],
        icon: dagger,
        synergisticOptions: rohaSynergisticOptions,
        synergisticKey: "ロハシリーズ"
    }

]
export const costumes: ItemTemplate[] = [
    {
        name: "ロハの鎧",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(2500),
            plusDeffense(3000),
            plusHitPoint(20000),
        ],
        icon: dagger,
        synergisticOptions: rohaSynergisticOptions,
        synergisticKey: "ロハシリーズ"
    }

]
export const accessories: ItemTemplate[] = [
    {
        name: "ケイオスリング",
        fixedBaseOptions: [
            plusAllOption(750),
            plusHitPoint(100000),
            plusAttack(1000),
        ],
        icon: dagger,
    },
    {
        name: "ケイオスブローチ",
        fixedBaseOptions: [
            plusAllOption(750),
            plusHitPoint(100000),
            plusAttack(1000),
        ],
        icon: dagger,
    },
    {
        name: "ケイオスブレスレット",
        fixedBaseOptions: [
            plusAllOption(750),
            plusHitPoint(100000),
            plusAttack(1000),
        ],
        icon: dagger,

    },
    {
        name: "ケイオスネックレス",
        fixedBaseOptions: [
            plusAllOption(750),
            plusHitPoint(100000),
            plusAttack(1000),
        ],
        icon: dagger,

    },
    {
        name: "メイガスリング",
        fixedBaseOptions: [
            plusAllOption(750),
            plusAttack(1000),
            plusDeffense(1000),
        ],
        icon: dagger,
    },
    {
        name: "メイガスブローチ",
        fixedBaseOptions: [
            plusAllOption(750),
            plusAttack(1000),
            plusDeffense(1000),
        ],
        icon: dagger,
    },
    {
        name: "メイガスブレスレット",
        fixedBaseOptions: [
            plusAllOption(750),
            plusAttack(1000),
            plusDeffense(1000),
        ],
        icon: dagger,

    },
    {
        name: "メイガスネックレス",
        fixedBaseOptions: [
            plusAllOption(750),
            plusAttack(1000),
            plusDeffense(1000),
        ],
        icon: dagger,

    },
    {
        name: "深淵の宝珠(玄武)",
        enchantableBaseOptions: [
            [
                plusAllOption(225),
                plusHitPoint(2000),
                plusAttack(550),
            ]
        ],
        icon: dagger,
    },
    {
        name: "深淵の宝珠(白虎)",
        enchantableBaseOptions: [
            [
                plusAllOption(225),
                plusHitPoint(2000),
                plusAttack(550),
            ]
        ],
        icon: dagger,
    },
    {
        name: "深淵の宝珠(青龍)",
        enchantableBaseOptions: [
            [
                plusAllOption(225),
                plusHitPoint(2000),
                plusAttack(550),
            ]
        ],
        icon: dagger,
    },
    {
        name: "深淵の宝珠(朱雀)",
        enchantableBaseOptions: [
            [
                plusAllOption(225),
                plusHitPoint(2000),
                plusAttack(550),
            ]
        ],
        icon: dagger,
    },
    {
        name: "虚無の逆十字",
        fixedBaseOptions: [
            plusStatusAttack(10000),
            plusHitPoint(75000),
        ],
        icon: dagger,
    }
]


export const b_talismans: ItemTemplate[] = [
    {
        name: "ノーウェンのタリスマン",
        fixedBaseOptions: [
            plusAllOption(150),
            plusAttack(100),
            plusDeffense(100),
            plusHitPoint(10000),
        ],
        icon: dagger,
    },
    {
        name: "輝くノーウェンのタリスマン",
        fixedBaseOptions: [
            plusAllOption(200),
            plusAttack(200),
            plusDeffense(200),
            plusHitPoint(25000),
        ],
        icon: dagger,
    },
    {
        name: "洗練されたノーウェンのタリスマン",
        fixedBaseOptions: [
            plusAllOption(300),
            plusAttack(300),
            plusDeffense(300),
            plusHitPoint(50000),
        ],
        icon: dagger,
    },
    {
        name: "鮮血のタリスマン",
        fixedBaseOptions: [
            plusAllOption(400),
            plusAttack(400),
            plusDeffense(400),
            plusHitPoint(75000),
        ],
        icon: dagger,
    },
    {
        name: "深紅のタリスマン",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(1000),
            plusDeffense(1000),
            multiplyPotionRecovery(10),
        ],
        icon: dagger,
    }
]
export const j_talismans: ItemTemplate[] = [
    {
        name: "ヘスペロスのタリスマン",
        fixedBaseOptions: [
            plusAllOption(200),
            plusAttack(200),
        ],
        icon: dagger,
    },
    {
        name: "輝くへスぺロスのタリスマン",
        fixedBaseOptions: [
            plusAllOption(300),
            plusAttack(400),
        ],
        icon: dagger,
    },
    {
        name: "洗練されたヘスペロスのタリスマン",
        fixedBaseOptions: [
            plusAllOption(450),
            plusAttack(600),
        ],
        icon: dagger,
    },
    {
        name: "栄光のタリスマン",
        fixedBaseOptions: [
            plusAllOption(600),
            plusAttack(800),
        ],
        icon: dagger,
    },
    {
        name: "黄金のタリスマン",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(1000),
            plusHitPoint(100000),
            multiplySkillAttack(10),
        ],
        icon: dagger,
    }
]
export const h_talismans: ItemTemplate[] = [
    {
        name: "カルラスのタリスマン",
        fixedBaseOptions: [
            plusAllOption(150),
            plusDeffense(200),
            plusHitPoint(10000),
        ],
        icon: dagger,
    },
    {
        name: "輝くカルラスのタリスマン",
        fixedBaseOptions: [
            plusAllOption(200),
            plusDeffense(400),
            plusHitPoint(25000),
        ],
        icon: dagger,
    },
    {
        name: "洗練されたカルラスのタリスマン",
        fixedBaseOptions: [
            plusAllOption(300),
            plusDeffense(600),
            plusHitPoint(50000),
        ],
        icon: dagger,
    },
    {
        name: "深緑のタリスマン",
        fixedBaseOptions: [
            plusAllOption(400),
            plusDeffense(800),
            plusHitPoint(75000),
        ],
        icon: dagger,
    },
    {
        name: "翡翠のタリスマン",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusDeffense(1000),
            multiplyDeffense(10),
            plusHitPoint(100000),
        ],
        icon: dagger,
    }
]
export const g_talismans: ItemTemplate[] = [
    {
        name: "ディエガのタリスマン",
        fixedBaseOptions: [
            plusAllOption(150),
            plusAttack(200),
            plusHitPoint(10000),
        ],
        icon: dagger,
    },
    {
        name: "輝くディエガのタリスマン",
        fixedBaseOptions: [
            plusAllOption(200),
            plusAttack(400),
            plusHitPoint(25000),
        ],
        icon: dagger,
    },
    {
        name: "洗練されたディエガのタリスマン",
        fixedBaseOptions: [
            plusAllOption(300),
            plusAttack(600),
            plusHitPoint(50000),
        ],
        icon: dagger,
    },
    {
        name: "紺碧のタリスマン	",
        fixedBaseOptions: [
            plusAllOption(400),
            plusAttack(800),
            plusHitPoint(75000),
        ],
        icon: dagger,
    },
    {
        name: "蒼穹のタリスマン",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusAttack(1000),
            multiplyAttack(10),
            plusHitPoint(100000),
        ],
        icon: dagger,
    }
]
export const i_talismans: ItemTemplate[] = [
    {
        name: "カシムのタリスマン",
        fixedBaseOptions: [
            plusAllOption(200),
            plusDeffense(200),
        ],
        icon: dagger,
    },
    {
        name: "輝くカシムのタリスマン",
        fixedBaseOptions: [
            plusAllOption(300),
            plusDeffense(400),
        ],
        icon: dagger,
    },
    {
        name: "洗練されたカシムのタリスマン",
        fixedBaseOptions: [
            plusAllOption(450),
            plusDeffense(600),
        ],
        icon: dagger,
    },
    {
        name: "紫闇のタリスマン",
        fixedBaseOptions: [
            plusAllOption(600),
            plusDeffense(800),
        ],
        icon: dagger,
    },
    {
        name: "紫紺のタリスマン",
        fixedBaseOptions: [
            plusAllOption(1000),
            plusDeffense(1000),
            plusHitPoint(100000),
            multiplySkillAttack(10),
        ],
        icon: dagger,
    }
]

export const n_talismans: ItemTemplate[] = [
    {
        name: "黎明のタリスマン",
        enchantableBaseOptions: [
            [
                plusAttack(200),
                plusDeffense(200),
                plusHitPoint(3000),
            ],
            [
                plusAttack(250),
                plusDeffense(250),
                plusHitPoint(4000),
            ],
            [
                plusAttack(300),
                plusDeffense(300),
                plusHitPoint(5000),
            ],
            [
                plusAttack(350),
                plusDeffense(350),
                plusHitPoint(6000),
            ],
            [
                plusAttack(400),
                plusDeffense(400),
                plusHitPoint(7000),
            ],
            [
                plusAttack(500),
                plusDeffense(500),
                plusHitPoint(8000),
                multiplyPVEDeffense(2),
            ],
            [
                plusAttack(600),
                plusDeffense(600),
                plusHitPoint(9000),
                multiplyPVEDeffense(4),
            ],
            [
                plusAttack(800),
                plusDeffense(800),
                plusHitPoint(10000),
                multiplyPVEDeffense(6),
            ],
            [
                plusAttack(1000),
                plusDeffense(1000),
                plusHitPoint(12000),
                multiplyPVEDeffense(8),
            ],
            [
                plusAttack(1200),
                plusDeffense(1200),
                plusHitPoint(14000),
                multiplyPVEDeffense(10),
            ],
            [
                plusAttack(2000),
                plusDeffense(2000),
                plusHitPoint(20000),
                multiplyPVEDeffense(20),
            ],
            [
                plusAttack(2500),
                plusDeffense(2500),
                plusHitPoint(25000),
                multiplyPVEDeffense(20),
                plusAllOption(100),

            ],
            [
                plusAttack(3000),
                plusDeffense(3000),
                plusHitPoint(30000),
                multiplyPVEDeffense(20),
                plusAllOption(150),
            ],
            [
                plusAttack(3500),
                plusDeffense(3500),
                plusHitPoint(35000),
                multiplyPVEDeffense(20),
                plusAllOption(200),
            ],
            [
                plusAttack(4000),
                plusDeffense(4000),
                plusHitPoint(40000),
                multiplyPVEDeffense(20),
                plusAllOption(250),
            ],
            [
                plusAttack(4500),
                plusDeffense(4500),
                plusHitPoint(45000),
                multiplyPVEDeffense(20),
                plusAllOption(300),
            ],
            [
                plusAttack(5000),
                plusDeffense(5000),
                plusHitPoint(50000),
                multiplyPVEDeffense(20),
                plusAllOption(350),
            ],
            [
                plusAttack(5500),
                plusDeffense(5500),
                plusHitPoint(55000),
                multiplyPVEDeffense(20),
                plusAllOption(400),
            ],
            [
                plusAttack(6000),
                plusDeffense(6000),
                plusHitPoint(60000),
                multiplyPVEDeffense(20),
                plusAllOption(450),
            ],
            [
                plusAttack(7000),
                plusDeffense(7000),
                plusHitPoint(70000),
                multiplyPVEDeffense(20),
                plusAllOption(500),
            ],
            [
                plusAttack(8000),
                plusDeffense(8000),
                plusHitPoint(80000),
                multiplyPVEDeffense(22),
                plusAllOption(600),
            ],
        ],
        icon: dagger,
    },
]
export const e_talismans: ItemTemplate[] = [
    {
        name: "ウォルターのタリスマン",
        enchantableBaseOptions: [
            [
                plusAllOption(10),
            ],
            [
                plusAllOption(12),
            ],
            [
                plusAllOption(14),
                plusDeffense(26),
            ],
            [
                plusAllOption(22),
                plusDeffense(39),
                plusAttack(51),
            ],
            [
                plusAllOption(28),
                plusDeffense(51),
                plusAttack(66),
            ],
            [
                plusAllOption(37),
                plusDeffense(66),
                plusAttack(86),
                plusHitPoint(500),
            ],
            [
                plusAllOption(49),
                plusDeffense(125),
                plusAttack(164),
                plusHitPoint(950),
            ],
            [
                plusAllOption(118),
                plusDeffense(213),
                plusAttack(278),
                plusHitPoint(1615),
            ],
            [
                plusAllOption(150),
                plusDeffense(400),
                plusAttack(400),
                plusHitPoint(3000),
            ],
            [
                plusAllOption(200),
                plusDeffense(600),
                plusAttack(600),
                plusHitPoint(5000),
            ],
            [
                plusAllOption(300),
                plusDeffense(1000),
                plusAttack(1000),
                plusHitPoint(10000),
            ],
            [
                plusAllOption(330),
                plusDeffense(1300),
                plusAttack(1200),
                plusHitPoint(12500),
            ],
            [
                plusAllOption(360),
                plusDeffense(1600),
                plusAttack(1400),
                plusHitPoint(15000),
            ],
            [
                plusAllOption(390),
                plusDeffense(1900),
                plusAttack(1600),
                plusHitPoint(17500),
            ],
            [
                plusAllOption(420),
                plusDeffense(2200),
                plusAttack(1800),
                plusHitPoint(20000),
            ],
            [
                plusAllOption(450),
                plusDeffense(2500),
                plusAttack(2000),
                plusHitPoint(22500),
            ],
            [
                plusAllOption(480),
                plusDeffense(2800),
                plusAttack(2200),
                plusHitPoint(25000),
            ],
            [
                plusAllOption(510),
                plusDeffense(3100),
                plusAttack(2400),
                plusHitPoint(27500),
            ],
            [
                plusAllOption(540),
                plusDeffense(3400),
                plusAttack(2600),
                plusHitPoint(30000),
            ],
            [
                plusAllOption(570),
                plusDeffense(3700),
                plusAttack(2800),
                plusHitPoint(32500),
            ],
            [
                plusAllOption(600),
                plusDeffense(4000),
                plusAttack(3000),
                plusHitPoint(35000),
            ],
        ],
        icon: dagger,
    },
]
export const r_talismans: ItemTemplate[] = [
    {
        name: "ヴィクトリアス・タリスマン",
        enchantableBaseOptions: [
            [
                plusAllOption(1000),
                plusHitPoint(300000),
            ]
        ],
        icon: dagger,
    }
]
export const w_talismans: ItemTemplate[] = [
    {
        name: "マスク",
        enchantableBaseOptions: [
            [
                plusAttack(1000),
                plusDeffense(1000),
            ],
            [
                plusAttack(1500),
                plusDeffense(1500),
            ],
            [
                plusAttack(2000),
                plusDeffense(2000),
            ],
            [
                plusAttack(2500),
                plusDeffense(2500),
            ],
            [
                plusAttack(3000),
                plusDeffense(3000),
            ],
            [
                plusAttack(3500),
                plusDeffense(3500),
            ],
        ],
        icon: dagger,
    }

]
export const q_talismans: ItemTemplate[] = [
    {
        name: "8等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(2500),
            plusMagicPoint(500),
        ],
        icon: dagger,
    },
    {
        name: "7等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(5500),
            plusMagicPoint(1000),

        ],
        icon: dagger,
    },
    {
        name: "6等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(7500),
            plusMagicPoint(1500),
        ],
        icon: dagger,
    },
    {
        name: "5等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(10500),
            plusMagicPoint(2000),
        ],
        icon: dagger,
    },
    {
        name: "4等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(12500),
            plusMagicPoint(2500),
        ],
        icon: dagger,
    },
    {
        name: "3等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(15000),
            plusMagicPoint(3000),
        ],
        icon: dagger,
    },
    {
        name: "2等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(17500),
            plusMagicPoint(3500),
        ],
        icon: dagger,
    },
    {
        name: "1等兵階級章",
        fixedBaseOptions: [
            plusHitPoint(20000),
            plusMagicPoint(4000),
        ],
        icon: dagger,
    },
    {
        name: "1将校階級章",
        fixedBaseOptions: [
            plusHitPoint(30000),
            plusMagicPoint(6000),
            multiplySkillAttack(5),

        ],
        icon: dagger,
    },
    {
        name: "2将校階級章",
        fixedBaseOptions: [
            plusHitPoint(40000),
            plusMagicPoint(8000),
            multiplySkillAttack(10),
            multiplySkillDeffense(5),
        ],
        icon: dagger,
    },
    {
        name: "3将校階級章",
        fixedBaseOptions: [
            plusHitPoint(50000),
            plusMagicPoint(10000),
            multiplySkillAttack(15),
            multiplySkillDeffense(10),
        ],
        icon: dagger,
    },
    {
        name: "4将校階級章",
        fixedBaseOptions: [
            plusHitPoint(60000),
            plusMagicPoint(12000),
            multiplySkillAttack(20),
            multiplySkillDeffense(15),
        ],
        icon: dagger,
    },
    {
        name: "5将校階級章",
        fixedBaseOptions: [
            plusHitPoint(70000),
            plusMagicPoint(14000),
            multiplySkillAttack(25),
            multiplySkillDeffense(20),
        ],
        icon: dagger,
    },
    {
        name: "軍団長階級章",
        fixedBaseOptions: [
            plusHitPoint(100000),
            plusMagicPoint(20000),
            multiplySkillAttack(35),
            multiplySkillDeffense(30),
        ],
        icon: dagger,
    },
    {
        name: "司令官階級章",
        fixedBaseOptions: [
            plusHitPoint(200000),
            plusMagicPoint(40000),
            multiplySkillAttack(50),
            multiplySkillDeffense(40),
        ],
        icon: dagger,
    },
    {
        name: "元帥階級章",
        fixedBaseOptions: [
            plusHitPoint(300000),
            plusMagicPoint(50000),
            multiplySkillAttack(50),
            multiplySkillDeffense(40),
            plusAllOption(1000),
        ],
        icon: dagger
    }
]
export const s_talismans: ItemTemplate[] = [
    {
        name: "原初の記録",
        fixedBaseOptions: [
            plusHitPoint(100000),
            plusAttack(10000),
            plusDeffense(10000),
            multiplySkillAttack(25),
        ],
        icon: dagger,
    }

]
export const pets: ItemTemplate[] = [
    {
        name: "サンプル",
        icon: dagger,
        fixedBaseOptions: [
        ],
    }

]