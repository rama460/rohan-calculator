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
