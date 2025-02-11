export type RaceName = "Human" | "Elf" | "HalfElf" | "Dan" | "Dekan" | "DarkElf" | "Giant" | "Trinity";
export type Race = {
    id: number;
    name: RaceName;
    displayName: string;
    abbrev: string;
    jobs: {
        id: number;
        displayName: string;
    }[];
    initialStatus: {
        strength: number;
        vitality: number;
        intelligence: number;
        agility: number;
        mentality: number;
        dexterity: number;
    }
    hitPointPerLevel: number;
    magicPointPerLevel: number;
    movementSpeed: number;
}
export const races: Race[] = [
    {
        id: 0,
        name: "Human",
        displayName: "ヒューマン",
        abbrev: "H",
        jobs: [
            {
                id: 0,
                displayName: "ナイト",
            },
            {
                id: 1,
                displayName: "ガーディアン",
            },
            {
                id: 2,
                displayName: "ディフェンダー",
            },
        ],
        initialStatus: {
            strength: 30,
            vitality: 36,
            intelligence: 9,
            agility: 25,
            mentality: 14,
            dexterity: 26,
        },
        hitPointPerLevel: 9,
        magicPointPerLevel: 5,
        movementSpeed: 600,
    },
    {
        id: 1,
        name: "Elf",
        displayName: "エルフ",
        abbrev: "E",
        jobs: [
            {
                id: 0,
                displayName: "ヒーラー"
            },
            {
                id: 1,
                displayName: "プリースト",
            },
            {
                id: 2,
                displayName: "テンプラー",
            },
        ],
        initialStatus: {
            strength: 10,
            vitality: 21,
            intelligence: 36,
            agility: 18,
            mentality: 40,
            dexterity: 15,
        },
        hitPointPerLevel: 5,
        magicPointPerLevel: 9,
        movementSpeed: 600,
    },
    {
        id: 2,
        name: "HalfElf",
        displayName: "ハーフエルフ",
        abbrev: "HE",
        jobs: [
            {
                id: 0,
                displayName: "アーチャー",
            },
            {
                id: 1,
                displayName: "レンジャー",
            },
            {
                id: 2,
                displayName: "スカウト",
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
        hitPointPerLevel: 7,
        magicPointPerLevel: 5,
        movementSpeed: 660,
    },
    {
        id: 3,
        name: "Dan",
        displayName: "ダン",
        abbrev: "D",
        jobs: [
            {
                id: 0,
                displayName: "アサシン",
            },
            {
                id: 1,
                displayName: "アヴェンジャー",
            },
            {
                id: 2,
                displayName: "プレデター",
            },
        ],
        initialStatus: {
            strength: 29,
            vitality: 26,
            intelligence: 10,
            agility: 30,
            mentality: 10,
            dexterity: 35,
        },
        hitPointPerLevel: 7,
        magicPointPerLevel: 7,
        movementSpeed: 600,
    },
    {
        id: 4,
        name: "Dekan",
        displayName: "デカン",
        abbrev: "DK",
        jobs: [
            {
                id: 0,
                displayName: "ドラゴンファイター"
            },
            {
                id: 1,
                displayName: "ドラゴンナイト",
            },
            {
                id: 2,
                displayName: "ドラゴンセージ",
            },
        ],
        initialStatus: {
            strength: 25,
            vitality: 25,
            intelligence: 20,
            agility: 25,
            mentality: 20,
            dexterity: 25,
        },
        hitPointPerLevel: 7,
        magicPointPerLevel: 7,
        movementSpeed: 600,
    },
    {
        id: 5,
        name: "DarkElf",
        displayName: "ダークエルフ",
        abbrev: "DE",
        jobs: [
            {
                id: 0,
                displayName: "メイジ",
            },
            {
                id: 1,
                displayName: "ウォーロック",
            },
            {
                id: 2,
                displayName: "ウィザード",
            },
        ],
        initialStatus: {
            strength: 10,
            vitality: 19,
            intelligence: 40,
            agility: 17,
            mentality: 34,
            dexterity: 20,
        },
        hitPointPerLevel: 5,
        magicPointPerLevel: 9,
        movementSpeed: 600,
    },
    {
        id: 6,
        name: "Giant",
        displayName: "ジャイアント",
        abbrev: "G",
        jobs: [
            {
                id: 0,
                displayName: "ウォリアー",
            },
            {
                id: 1,
                displayName: "バーサーカー",
            },
            {
                id: 2,
                displayName: "サベージ",
            },
        ],
        initialStatus: {
            strength: 35,
            vitality: 31,
            intelligence: 6,
            agility: 27,
            mentality: 11,
            dexterity: 30,
        },
        hitPointPerLevel: 8,
        magicPointPerLevel: 5,
        movementSpeed: 600,
    },
    {
        id: 7,
        name: "Trinity",
        displayName: "トリニティ",
        abbrev: "T",
        jobs: [
            {
                id: 0,
                displayName: "メル",
            },
            {
                id: 1,
                displayName: "ルミール",
            },
            {
                id: 2,
                displayName: "ノワール",
            },
        ],
        initialStatus: {
            strength: 30,
            vitality: 30,
            intelligence: 20,
            agility: 15,
            mentality: 30,
            dexterity: 15,
        },
        // TODO: temporary value
        hitPointPerLevel: 7,
        magicPointPerLevel: 7,
        movementSpeed: 600,
    }
]