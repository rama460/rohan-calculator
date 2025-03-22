import { atom } from "jotai";
import { allOptionAggregorStateFamily } from "./options";
import { atomFamily } from "jotai/utils";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";
import { BaseOptionKeyType, baseOptionStateFamily } from "./bases";
import { races } from "../../components/static/races";

export const charactorStateNames = [
    "strength",
    "vitality",
    "dexterity",
    "intelligence",
    "agility",
    "mentality",
    "hitPoint",
    "magicPoint",
    "meleeAttack",
    "magicAttack",
    "rangeAttack",
    "physicalDefense",
    "magicalDefense",
    "accuracy",
    "dodging",
    "resistance",
    "hitPointRecovery",
    "magicPointRecovery",
    "movementSpeed",
    "attackSpeed",
] as const;

export type CharactorStateType = typeof charactorStateNames[number];

const calculateStrength = (getter: (key: BuiltinOptionKeyType) => number): number => {
    return Math.floor((getter("strength") + getter("plusStrength") + getter("plusAllStatus")) *
        (100 + getter("multiplyStrength") + getter("multiplyAllStatus")) / 100);
}
const calculateVitality = (getter: (key: BuiltinOptionKeyType) => number): number => {
    return Math.floor((getter("vitality") + getter("plusVitality") + getter("plusAllStatus")) *
        (100 + getter("multiplyVitality") + getter("multiplyAllStatus")) / 100);
}
const calculateDexterity = (getter: (key: BuiltinOptionKeyType) => number): number => {
    return Math.floor((getter("dexterity") + getter("plusDexterity") + getter("plusAllStatus")) *
        (100 + getter("multiplyDexterity") + getter("multiplyAllStatus")) / 100);
}
const calculateIntelligence = (getter: (key: BuiltinOptionKeyType) => number): number => {
    return Math.floor((getter("intelligence") + getter("plusIntelligence") + getter("plusAllStatus")) *
        (100 + getter("multiplyIntelligence") + getter("multiplyAllStatus")) / 100);
}
const calculateAgility = (getter: (key: BuiltinOptionKeyType) => number): number => {
    return Math.floor((getter("agility") + getter("plusAgility") + getter("plusAllStatus")) *
        (100 + getter("multiplyAgility") + getter("multiplyAllStatus")) / 100);
}
const calculateMentality = (getter: (key: BuiltinOptionKeyType) => number): number => {
    return Math.floor((getter("mentality") + getter("plusMentality") + getter("plusAllStatus")) *
        (100 + getter("multiplyMentality") + getter("multiplyAllStatus")) / 100);
}
const calculateHitPoint = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor(
        (
            getter("level") * races[getter("raceid")].hitPointPerLevel +
            (Math.floor(getter("level") / 5) * (Math.floor(getter("level") / 5) + 1) * 5) +
            calculateVitality(getter) * 20 +
            getter("plusHitPoint")
        ) * (100 + getter("multiplyHitPoint")) / 100) +
        getter("plusHitPointMultiplyLevel") * getter("level") +
        getter("plusHitPointMultiplyHeroLevel") * getter("heroLevel") +
        getter("plusHitPointMultiplyStrength") * calculateStrength(getter) +
        getter("plusHitPointMultiplyAgility") * calculateAgility(getter);
}
const calculateMagicPoint = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor(
        (
            getter("level") * races[getter("raceid")].magicPointPerLevel +
            (Math.floor(getter("level") / 5) * (Math.floor(getter("level") / 5) + 1) * 5 / 2) +
            calculateMentality(getter) * 10 +
            getter("plusMagicPoint")
        ) * (100 + getter("multiplyMagicPoint")) / 100) +
        getter("plusMagicPointMultiplyLevel") * getter("level") +
        getter("plusMagicPointMultiplyHeroLevel") * getter("heroLevel");
}
const calculateMeleeAttack = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    const levelAttack = getter("level") > 70 ? getter("level") * 4 : getter("level") > 50 ? getter("level") * 3 : getter("level") * 2
    return getter("meleeMastery") > 0 ? Math.floor((
        Math.floor(levelAttack * 0.75) +
        Math.floor(calculateStrength(getter) * 3 * 0.75) +
        // mastery bonus
        Math.floor(calculateDexterity(getter) * getter("plusMeleeAttackMultiplyDexterity") / 100) +
        Math.floor(calculateStrength(getter) * getter("plusMeleeAttackMultiplyStrength") / 100) +
        Math.floor(calculateVitality(getter) * getter("plusMeleeAttackMultiplyVitality") / 100) +
        Math.floor(calculateIntelligence(getter) * getter("plusMeleeAttackMultiplyIntelligence") / 100) +
        Math.floor(calculateMagicAttack(getter) * getter("plusMeleeAttackMultiplyMagicAttack") / 100) +
        // weapons
        Math.floor(
            (
                getter("meleeAttack") + getter("plusMeleeAttack") + getter("plusAttack")
            ) * (
                100 + getter("multiplyWeaponAttack")
            ) / 100
        )
    ) * (
            100 + getter("multiplyMeleeAttack") + getter("multiplyAttack")
        ) / 100
    ) : Math.floor(
        (
            levelAttack +
            calculateStrength(getter) * 3 +
            Math.floor(
                (
                    getter("meleeAttack") + getter("plusMeleeAttack") + getter("plusAttack")
                ) * (
                    100 + getter("multiplyWeaponAttack")
                ) / 100
            )
        ) * (
            100 + getter("multiplyMeleeAttack") + getter("multiplyAttack")
        ) / 100)
}
const calculateMagicAttack = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    const levelAttack = getter("level") > 70 ? getter("level") * 4 : getter("level") > 50 ? getter("level") * 3 : getter("level") * 2
    return getter("magicMastery") > 0 ? Math.floor((
        Math.floor(levelAttack * 0.75) +
        Math.floor(calculateIntelligence(getter) * 3 * 0.75) +
        // mastery bonus
        Math.floor(calculateIntelligence(getter) * getter("plusMagicAttackMultiplyIntelligence") / 100) +
        Math.floor(calculateMentality(getter) * getter("plusMagicAttackMultiplyMentality") / 100) +
        // weapons
        Math.floor(
            (
                getter("magicAttack") + getter("plusMagicAttack") + getter("plusAttack")
            ) * (
                100 + getter("multiplyWeaponAttack")
            ) / 100
        )
    ) * (
            100 + getter("multiplyMagicAttack") + getter("multiplyAttack")
        ) / 100
    ) : Math.floor(
        (
            levelAttack +
            calculateIntelligence(getter) * 3 +
            // weapons
            Math.floor(
                (
                    getter("magicAttack") + getter("plusMagicAttack") + getter("plusAttack")
                ) * (
                    100 + getter("multiplyWeaponAttack")
                ) / 100
            )
        ) * (
            100 + getter("multiplyMagicAttack") + getter("multiplyAttack")
        ) / 100)

}
const calculateRangeAttack = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    const levelAttack = getter("level") > 70 ? getter("level") * 4 : getter("level") > 50 ? getter("level") * 3 : getter("level") * 2
    return getter("rangeMastery") > 0 ? Math.floor((
        Math.floor(levelAttack * 0.75) +
        Math.floor(calculateAgility(getter) * 3 * 0.75) +
        // mastery bonus
        Math.floor(calculateAgility(getter) * getter("plusRangeAttackMultiplyAgility") / 100) +
        // weapons
        Math.floor(
            (
                getter("rangeAttack") + getter("plusRangeAttack") + getter("plusAttack") +
                Math.floor(getter("arrowAttack") * (100 + getter("multiplyArrowAttack")) / 100)
            ) * (
                100 + getter("multiplyWeaponAttack")
            ) / 100
        )
    ) * (
            100 + getter("multiplyRangeAttack") + getter("multiplyAttack")
        ) / 100
    ) : Math.floor(
        (
            levelAttack +
            calculateAgility(getter) * 3 +
            // weapons
            Math.floor(
                (
                    getter("rangeAttack") + getter("plusRangeAttack") + getter("plusAttack") +
                    Math.floor(getter("arrowAttack") * (100 + getter("multiplyArrowAttack")) / 100)
                ) * (
                    100 + getter("multiplyWeaponAttack")
                ) / 100
            )
        ) * (
            100 + getter("multiplyRangeAttack") + getter("multiplyAttack")
        ) / 100
    )

}
const calculatePhysicalDefense = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor((
        (getter("level") > 70 ? getter("level") * 3 : getter("level") > 50 ? getter("level") * 2 : getter("level")) +
        calculateVitality(getter) * 2 +
        calculateStrength(getter) +
        getter("physicalDefense") + getter("plusPhysicalDefense") + getter("plusDefense") +
        Math.floor((getter("plusPhysicalDefenseMultiplyIntelligenceAndMentality")) * (calculateIntelligence(getter) + calculateMentality(getter)) / 100)
    ) * (100 + getter("multiplyPhysicalDefense") + getter("multiplyDefense") + getter("multiplyArmorDefense")) / 100);
}
const calculateMagicalDefense = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor((
        (getter("level") > 70 ? getter("level") * 3 : getter("level") > 50 ? getter("level") * 2 : getter("level")) +
        calculateMentality(getter) * 2 +
        calculateIntelligence(getter) +
        getter("magicalDefense") + getter("plusMagicalDefense") + getter("plusDefense")
    ) * (100 + getter("multiplyMagicalDefense") + getter("multiplyDefense") + getter("multiplyArmorDefense")) / 100);
}
const calculateAccuracy = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor(
        calculateAgility(getter) +
        Math.floor(getter("level") / 2) +
        getter("plusAccuracy") * (100 + getter("multiplyAccuracy")) / 100)
}
const calculateDodging = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor((
        Math.floor(calculateDexterity(getter) * 1.2) +
        Math.floor(getter("level") / 2) +
        getter("plusDodging")) * (100 + getter("multiplyDodging")) / 100)
}
const calculateResistance = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor(
        (calculateMentality(getter) + calculateIntelligence(getter)) / 15
    )
}
const calculateHitPointRecovery = (_: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return 1
}
const calculateMagicPointRecovery = (_: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return 1
}
// FIXME: expression is incorrect
// correct expression is some parameters are multiplied not added

const calculateMovementSpeed = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor(races[getter("raceid")].movementSpeed *
        (100 + getter("multiplyMovementSpeed") + getter("multiplyRideSpeed")) / 100
    )
}
const calculateAttackSpeed = (getter: (key: BuiltinOptionKeyType | BaseOptionKeyType) => number): number => {
    return Math.floor(
        (getter("attackSpeed") === 0 ? 2000 : getter("attackSpeed")) * (100) /
        (100 + getter("multiplyAttackSpeed"))
    )
}

const StateExpressionMap = {
    "strength": calculateStrength,
    "vitality": calculateVitality,
    "dexterity": calculateDexterity,
    "intelligence": calculateIntelligence,
    "agility": calculateAgility,
    "mentality": calculateMentality,
    "hitPoint": calculateHitPoint,
    "magicPoint": calculateMagicPoint,
    "meleeAttack": calculateMeleeAttack,
    "magicAttack": calculateMagicAttack,
    "rangeAttack": calculateRangeAttack,
    "physicalDefense": calculatePhysicalDefense,
    "magicalDefense": calculateMagicalDefense,
    "accuracy": calculateAccuracy,
    "dodging": calculateDodging,
    "resistance": calculateResistance,
    "hitPointRecovery": calculateHitPointRecovery,
    "magicPointRecovery": calculateMagicPointRecovery,
    "movementSpeed": calculateMovementSpeed,
    "attackSpeed": calculateAttackSpeed,
}

export const charactorStateFamily = atomFamily((key: CharactorStateType) => {
    return atom((get) => {
        return StateExpressionMap[key]((optionKey: BuiltinOptionKeyType | BaseOptionKeyType) => {
            if (BuiltinOptionKeys.includes(optionKey as BuiltinOptionKeyType))
                return get(allOptionAggregorStateFamily(optionKey as BuiltinOptionKeyType));
            else
                return get(baseOptionStateFamily(optionKey as BaseOptionKeyType));
        });
    });
});

