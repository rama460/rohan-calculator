export type Race = {
    id: number;
    name: string;
    jobs: {
        id: number;
        name: string;
    }[];
}
export const races: Race[] = [
    {
        id: 0,
        name: "Human",
        jobs: [
            {
                id: 0,
                name: "Guardian",
            },
            {
                id: 1,
                name: "Defender",
            },
        ]
    },
    {
        id: 1,
        name: "Elf",
        jobs: [
            {
                id: 0,
                name: "Priest",
            },
            {
                id: 1,
                name: "Templer",
            },
        ]
    },
    {
        id: 2,
        name: "Half Elf",
        jobs: [
            {
                id: 0,
                name: "Reneger",
            },
            {
                id: 1,
                name: "Scout",
            },
        ]
    },
    {
        id: 3,
        name: "Dark Elf",
        jobs: [
            {
                id: 0,
                name: "Warlock",
            },
            {
                id: 1,
                name: "wizard",
            },
        ]
    },
    {
        id: 4,
        name: "Dhan",
        jobs: [
            {
                id: 0,
                name: "Predator",
            },
            {
                id: 1,
                name: "Avenger",
            },
        ]
    },
    {
        id: 5,
        name: "Dekan",
        jobs: [
            {
                id: 0,
                name: "Dragon Night",
            },
            {
                id: 1,
                name: "Dragon Sage",
            },
        ]
    },
    {
        id: 6,
        name: "Giant",
        jobs: [
            {
                id: 0,
                name: "Berserker",
            },
            {
                id: 1,
                name: "Savage",
            },
        ]
    }
]