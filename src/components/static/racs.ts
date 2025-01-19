export type Race = {
    id: number;
    name: string;
    jobs: {
        id: number;
        name: string;
    }[];
    initialStatus: {
        strength: number;
        vitality: number;
        intelligence: number;
        agility: number;
        mentality: number;
        dexterity: number;
    }
}
export const races: Race[] = [
    {
        id: 0,
        name: "ヒューマン",
        jobs: [
            {
                id: 0,
                name: "ナイト",
            },
            {
                id: 1,
                name: "ガーディアン",
            },
            {
                id: 2,
                name: "ディフェンダー",
            },
        ],
        initialStatus: {
            strength: 30,
            vitality: 36,
            intelligence: 9,
            agility: 25,
            mentality: 14,
            dexterity: 26,
        }
    },
    {
        id: 1,
        name: "エルフ",
        jobs: [
            {
                id: 0,
                name: "ヒーラー"
            },
            {
                id: 1,
                name: "プリースト",
            },
            {
                id: 2,
                name: "テンプラー",
            },
        ],
        initialStatus: {
            strength: 10,
            vitality: 21,
            intelligence: 36,
            agility: 18,
            mentality: 40,
            dexterity: 15,
        }
    },
    {
        id: 2,
        name: "ハーフエルフ",
        jobs: [
            {
                id: 0,
                name: "アーチャー",
            },
            {
                id: 1,
                name: "レンジャー",
            },
            {
                id: 2,
                name: "スカウト",
            },
        ],
        initialStatus: {
            strength: 20,
            vitality: 26,
            intelligence: 13,
            agility: 40,
            mentality: 14,
            dexterity: 27,
        },
    },
    {
        id: 3,
        name: "ダン",
        jobs: [
            {
                id: 0,
                name: "アサシン",
            },
            {
                id: 1,
                name: "アヴェンジャー",
            },
            {
                id: 2,
                name: "プレデター",
            },
        ],
        initialStatus: {
            strength: 29,
            vitality: 26,
            intelligence: 10,
            agility: 30,
            mentality: 10,
            dexterity: 35,
        }
    },
    {
        id: 4,
        name: "デカン",
        jobs: [
            {
                id: 0,
                name: "ドラゴンファイター"
            },
            {
                id: 1,
                name: "ドラゴンナイト",
            },
            {
                id: 2,
                name: "ドラゴンセージ",
            },
        ],
        initialStatus: {
            strength: 25,
            vitality: 25,
            intelligence: 20,
            agility: 25,
            mentality: 20,
            dexterity: 25,
        }
    },
    {
        id: 5,
        name: "ダークエルフ",
        jobs: [
            {
                id: 0,
                name: "メイジ",
            },
            {
                id: 1,
                name: "ウォーロック",
            },
            {
                id: 2,
                name: "ウィザード",
            },
        ],
        initialStatus: {
            strength: 10,
            vitality: 19,
            intelligence: 40,
            agility: 17,
            mentality: 34,
            dexterity: 20,
        }
    },
    {
        id: 6,
        name: "ジャイアント",
        jobs: [
            {
                id: 0,
                name: "ウォリアー",
            },
            {
                id: 1,
                name: "バーサーカー",
            },
            {
                id: 2,
                name: "サベージ",
            },
        ],
        initialStatus: {
            strength: 35,
            vitality: 31,
            intelligence: 6,
            agility: 27,
            mentality: 11,
            dexterity: 30,
        }
    },
    {
        id: 7,
        name: "トリニティ",
        jobs: [
            {
                id: 0,
                name: "メル",
            },
            {
                id: 1,
                name: "ルミール",
            },
            {
                id: 2,
                name: "ノワール",
            },
        ],
        initialStatus: {
            strength: 30,
            vitality: 30,
            intelligence: 20,
            agility: 15,
            mentality: 30,
            dexterity: 15,
        }
    }
]