export const characterStatusNames = [
    "strength",
    "vitality",
    "dexterity",
    "intelligence",
    "agility",
    "mentality",
] as const;

export type CharacterStatusKey = typeof characterStatusNames[number];

export type BaseOptionKeyType = "level" | "heroLevel" | "raceid" | "jobid";

export const characterValueKeys = [
    "__strength",
    "__vitality",
    "__dexterity",
    "__intelligence",
    "__agility",
    "__mentality",
    "__hitPoint",
    "__magicPoint",
    "__meleeAttack",
    "__magicAttack",
    "__rangeAttack",
    "__physicalDefense",
    "__magicalDefense",
    "__accuracy",
    "__dodging",
    "__resistance",
    "__hitPointRecovery",
    "__magicPointRecovery",
    "__movementSpeed",
    "__attackSpeed",
] as const;

export type CharacterValueKey = typeof characterValueKeys[number];

export const charactorStateNames = characterValueKeys;
export type CharactorStateType = CharacterValueKey;

export const equipmentSlotKeys = [
    "helmet",
    "gauntlet",
    "tunic",
    "leggings",
    "boots",
    "weapon",
    "shield",
    "arrow",
    "accessory1",
    "accessory2",
    "accessory3",
    "accessory4",
    "glasses",
    "hat",
    "earrings",
    "costume",
    "talismanH",
    "talismanG",
    "talismanI",
    "talismanB",
    "talismanJ",
    "talismanN",
    "talismanE",
    "talismanF",
    "talismanR",
    "talismanW",
    "talismanQ",
    "talismanS",
    "talismanT",
    "talismanK",
    "talismanL",
    "pet",
    "ride",
    "rune1",
    "rune2",
    "rune3",
    "rune4",
    "rune5",
    "rune6",
] as const;

export type EquipmentSlotKey = typeof equipmentSlotKeys[number];
export type EquipmentMap<T> = Record<EquipmentSlotKey, T>;

export const equipmentSlotIds: Record<EquipmentSlotKey, number> = {
    helmet: 0,
    gauntlet: 1,
    tunic: 2,
    leggings: 3,
    boots: 4,
    weapon: 5,
    shield: 6,
    arrow: 7,
    accessory1: 8,
    accessory2: 9,
    accessory3: 10,
    accessory4: 11,
    glasses: 12,
    hat: 13,
    earrings: 14,
    costume: 15,
    talismanH: 16,
    talismanG: 17,
    talismanI: 18,
    talismanB: 19,
    talismanJ: 20,
    talismanN: 21,
    talismanE: 22,
    talismanF: 23,
    talismanR: 24,
    talismanW: 25,
    talismanQ: 26,
    talismanS: 27,
    talismanT: 28,
    talismanK: 29,
    talismanL: 30,
    pet: 31,
    ride: 32,
    rune1: 33,
    rune2: 34,
    rune3: 35,
    rune4: 36,
    rune5: 37,
    rune6: 38,
};

export const equipmentSlotById = Object.fromEntries(
    Object.entries(equipmentSlotIds).map(([slot, id]) => [id, slot])
) as Record<number, EquipmentSlotKey>;
