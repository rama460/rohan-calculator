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
        ],
        initialStatus: {
            strength: 35,
            vitality: 31,
            intelligence: 6,
            agility: 27,
            mentality: 11,
            dexterity: 30,
        }
    }
]