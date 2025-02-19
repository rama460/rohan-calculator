import { BuiltinOptionKeyType } from "./options";


export type Title = {
    name: string;
    displayName: string;
    options: {
        [key in BuiltinOptionKeyType]?: number;
    }
}

export const titles: Title[] = [
    {
        name: "transcendentOfAll",
        displayName: "万象の超越者",
        options: {
            'plusAllStatus': 100,
            'plusHitPoint': 10000,
            'plusAttack': 100,
            'multiplyPVPDefense': 10,
        }
    },
    {
        name: "transcendentOfStrength",
        displayName: "力の超越者",
        options: {
            'plusStrength': 1000,
            'plusHitPoint': 10000,
            'plusMeleeAttack': 200,
            'multiplyPVPDefense': 10,
        },
    },
    {
        name: "transcendentOfAgility",
        displayName: "敏捷の超越者",
        options: {
            'plusAgility': 1000,
            'plusHitPoint': 10000,
            'plusRangeAttack': 200,
            'multiplyPVPDefense': 10,
        },
    },
    {
        name: "transcendentOfVitality",
        displayName: "体力の超越者",
        options: {
            'plusVitality': 1000,
            'plusHitPoint': 10000,
            'plusAttack': 100,
            'multiplyPVPDefense': 10,
        },
    },
    {
        name: "transcendentOfIntelligence",
        displayName: "知能の超越者",
        options: {
            'plusIntelligence': 1000,
            'plusHitPoint': 10000,
            'plusMagicAttack': 200,
            'multiplyPVPDefense': 10,
        },
    },
    {
        name: "transcendentOfMentality",
        displayName: "精神の超越者",
        options: {
            'plusMentality': 1000,
            'plusHitPoint': 10000,
            'plusMagicAttack': 200,
            'multiplyPVPDefense': 10,
        },
    },
    {
        name: "transcendentOfDexterity",
        displayName: "瞬発の超越者",
        options: {
            'plusDexterity': 1000,
            'plusHitPoint': 10000,
            'plusMeleeAttack': 200,
            'multiplyPVPDefense': 10,
        },
    },
    {
        name: "braveChallenger",
        displayName: "勇猛な挑戦者",
        options: {
            'plusAllStatus': 5
        }
    },
    {
        name: "braveWarrior",
        displayName: "勇猛な戦士",
        options: {
            'plusAllStatus': 10
        }
    },
    {
        name: "braveFighter",
        displayName: "勇猛な闘士",
        options: {
            'plusAllStatus': 20
        }
    },
    {
        name: "braveKnight",
        displayName: "勇猛な騎士",
        options: {
            'plusAllStatus': 30,
            'plusHitPoint': 500,
        }
    },
    {
        name: "victoriousKnight",
        displayName: "勝利の騎士",
        options: {
            'plusAllStatus': 40,
            'plusHitPoint': 1000,
        }
    },
    {
        name: "victoriousGuardian",
        displayName: "勝利の守護者",
        options: {
            'plusAllStatus': 50,
            'plusHitPoint': 1500,
            'plusAttack': 30,
        }
    },
    {
        name: 'victoriousLight',
        displayName: "勝利の光",
        options: {
            'plusAllStatus': 65,
            'plusHitPoint': 2500,
            'plusAttack': 50,
        }
    },
    {
        name: 'victoriousStar',
        displayName: "勝利の星",
        options: {
            'plusAllStatus': 100,
            'plusHitPoint': 6000,
            'plusAttack': 100,
        }
    },
    {
        name: "passionateChallenger",
        displayName: "情熱の挑戦者",
        options: {
            'plusAttack': 15,
            'plusDefense': 10,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "passionateWarrior",
        displayName: "情熱の戦士",
        options: {
            'plusAttack': 35,
            'plusDefense': 25,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "passionateFighter",
        displayName: "情熱の闘士",
        options: {
            'plusAttack': 60,
            'plusDefense': 40,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "passionateKnight",
        displayName: "情熱の騎士",
        options: {
            'plusAttack': 85,
            'plusDefense': 55,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "authorityKnight",
        displayName: "権能の騎士",
        options: {
            'plusAllStatus': 20,
            'plusAttack': 120,
            'plusDefense': 80,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "judgementGuardian",
        displayName: "審判の守護者",
        options: {
            'plusAllStatus': 40,
            'plusAttack': 155,
            'plusDefense': 105,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "obsidianLight",
        displayName: "深淵の光",
        options: {
            'plusAllStatus': 60,
            'plusAttack': 195,
            'plusDefense': 130,
            'multiplyPVEAttack': 10,
        }
    },
    {
        name: "overload",
        displayName: "覇王",
        options: {
            'plusAllStatus': 100,
            'plusAttack': 240,
            'plusDefense': 165,
            'multiplyPVEAttack': 15,
        }
    },
    {
        name: "legend",
        displayName: "伝説",
        options: {
            'plusAllStatus': 150,
            'plusAttack': 300,
            'plusDefense': 200,
            'multiplyPVEAttack': 20,
        }
    },
    {
        name: "myth",
        displayName: "神話",
        options: {
            'plusAllStatus': 500,
            'plusAttack': 360,
            'plusDefense': 240,
            'multiplyPVEAttack': 30,
        }
    },
    {
        name: "sixteenAnniversary",
        displayName: "16th Anniversary",
        options: {
            'plusAllStatus': 1600,
            'plusHitPoint': 16000,
            'plusMagicAttack': 16000,
        }
    },
    {
        name: "raconNightmare",
        displayName: "ラコンの悪夢",
        options: {
            'plusStrength': 1800,
            'plusMeleeAttack': 1800,
        }
    },
    {
        name: "darkTemptation",
        displayName: "暗黒の誘惑",
        options: {
            'plusIntelligence': 1800,
            'plusMagicAttack': 1800,
        }
    },
    {
        name: "chaosGhost",
        displayName: "混沌の亡霊",
        options: {
            'plusAgility': 1800,
            'plusRangeAttack': 1800,
        }
    },
    {
        name: "nightmareKnight",
        displayName: "悪夢の騎士",
        options: {
            'multiplyAttack': 18,
            'multiplyDefense': 18,
        }
    }
]