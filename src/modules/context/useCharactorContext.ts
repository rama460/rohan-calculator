import React from "react";
import { Statuses, StatusType } from "./useStatusesContext";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";
import { Bases } from "./useBasesContext";
import { races } from "../../components/static/races";

export type BuiltinCharactorDetailKey = "meleeAttack" | "rangeAttack" | "magicAttack" | "hitPoint" | "magicPoint" | "physicalDefense" | "magicalDefense" | "accuracy" | "dodging" | "hitPointRecovery" | "magicPointRecovery" | "movementSpeed" | "attackSpeed" | "resistance"

export type Charactor = {
    status: {
        [key in StatusType]: number
    },
    detail: {
        [key in BuiltinCharactorDetailKey]: number
    },
    expression: {

    }
}
export type OptionContext = {
    [key in BuiltinOptionKeyType]: number
}

export const initialOptionContext: OptionContext = Object.assign(
    {}, ...BuiltinOptionKeys.map((key: BuiltinOptionKeyType) => (
        { [key]: key === "attackSpeed" ? 2000 : 0 }
    ))) as OptionContext;

export const initialCharactor: Charactor = {
    status: {
        strength: 0,
        vitality: 0,
        dexterity: 0,
        intelligence: 0,
        agility: 0,
        mentality: 0,
    },
    detail: {
        meleeAttack: 0,
        rangeAttack: 0,
        magicAttack: 0,
        hitPoint: 0,
        magicPoint: 0,
        physicalDefense: 0,
        magicalDefense: 0,
        accuracy: 0,
        dodging: 0,
        hitPointRecovery: 0,
        magicPointRecovery: 0,
        movementSpeed: 0,
        attackSpeed: 0,
        resistance: 0
    },
    expression: {

    }
}

export const CharactorContext = React.createContext<Charactor>(initialCharactor);

export const useCharactorContext = () => {
    return React.useContext(CharactorContext);
}

export type CharactorAction =
    | {
        type: "UPDATE_STATUS"
        bases: Bases
        statuses: Statuses
        equipmentOptions: { [key in BuiltinOptionKeyType]: number }
        skillOptions: { [key in BuiltinOptionKeyType]: number }
        synergyOptions: { [key in BuiltinOptionKeyType]: number }
    }

export const charactorReducer = (state: Charactor, action: CharactorAction): Charactor => {
    switch (action.type) {
        case "UPDATE_STATUS":
            state.status["strength"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["strength"].base +
                action.statuses["strength"].meta +
                action.statuses["strength"].initial +
                action.equipmentOptions["plusStrength"] +
                action.equipmentOptions["plusAllStatus"] +
                action.skillOptions["plusStrength"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusStrength"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equipmentOptions["multiplyStrength"] + action.equipmentOptions["multiplyAllStatus"] + action.skillOptions["multiplyStrength"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyStrength"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["vitality"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["vitality"].base +
                action.statuses["vitality"].meta +
                action.statuses["vitality"].initial +
                action.equipmentOptions["plusVitality"] +
                action.equipmentOptions["plusAllStatus"] +
                action.skillOptions["plusVitality"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusVitality"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equipmentOptions["multiplyVitality"] + action.equipmentOptions["multiplyAllStatus"] + action.skillOptions["multiplyVitality"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyVitality"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["intelligence"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["intelligence"].base +
                action.statuses["intelligence"].meta +
                action.statuses["intelligence"].initial +
                action.equipmentOptions["plusIntelligence"] +
                action.equipmentOptions["plusAllStatus"] +
                action.skillOptions["plusIntelligence"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusIntelligence"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equipmentOptions["multiplyIntelligence"] + action.equipmentOptions["multiplyAllStatus"] + action.skillOptions["multiplyIntelligence"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyIntelligence"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["agility"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["agility"].base +
                action.statuses["agility"].meta +
                action.statuses["agility"].initial +
                action.equipmentOptions["plusAgility"] +
                action.equipmentOptions["plusAllStatus"] +
                action.skillOptions["plusAgility"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusAgility"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equipmentOptions["multiplyAgility"] + action.equipmentOptions["multiplyAllStatus"] + action.skillOptions["multiplyAgility"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyAgility"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["mentality"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["mentality"].base +
                action.statuses["mentality"].meta +
                action.statuses["mentality"].initial +
                action.equipmentOptions["plusMentality"] +
                action.equipmentOptions["plusAllStatus"] +
                action.skillOptions["plusMentality"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusMentality"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equipmentOptions["multiplyMentality"] + action.equipmentOptions["multiplyAllStatus"] + action.skillOptions["multiplyMentality"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyMentality"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["dexterity"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["dexterity"].base +
                action.statuses["dexterity"].meta +
                action.statuses["dexterity"].initial +
                action.equipmentOptions["plusDexterity"] +
                action.equipmentOptions["plusAllStatus"] +
                action.skillOptions["plusDexterity"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusDexterity"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equipmentOptions["multiplyDexterity"] + action.equipmentOptions["multiplyAllStatus"] + action.skillOptions["multiplyDexterity"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyDexterity"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.detail["hitPoint"] = Math.floor((
                action.bases.level * races[action.bases.raceid].hitPointPerLevel + (Math.floor(action.bases.level / 5) * (Math.floor(action.bases.level / 5) + 1)) * 5 +
                Math.floor(state.status.vitality) * 20 +
                action.equipmentOptions["plusHitPoint"] + action.skillOptions["plusHitPoint"] + action.synergyOptions["plusHitPoint"]) *
                (100 + action.equipmentOptions["multiplyHitPoint"] + action.skillOptions["multiplyHitPoint"] + action.synergyOptions["multiplyHitPoint"]) / 100 +
                action.skillOptions["plusHitPointMultiplyLevel"] * action.bases.level +
                action.skillOptions["plusHitPointMultiplyHeroLevel"] * action.bases.heroLevel +
                action.skillOptions["plusHitPointMultiplyStrength"] * state.status.strength +
                action.skillOptions["plusHitPointMultiplyAgility"] * state.status.agility
            )
            state.detail["magicPoint"] = Math.floor((
                action.bases.level * races[action.bases.raceid].magicPointPerLevel + Math.floor((Math.floor(action.bases.level / 5) * (Math.floor(action.bases.level / 5) + 1)) * 5 / 2) +
                Math.floor(state.status.mentality) * 10 +
                action.equipmentOptions["plusMagicPoint"] + action.skillOptions["plusMagicPoint"] + action.synergyOptions["plusMagicPoint"]) *
                (100 + action.equipmentOptions["multiplyMagicPoint"] + action.skillOptions["multiplyMagicPoint"] + action.synergyOptions["multiplyMagicPoint"]) / 100 +
                action.skillOptions["plusMagicPointMultiplyLevel"] * action.bases.level +
                action.skillOptions["plusMagicPointMultiplyHeroLevel"] * action.bases.heroLevel
            )
            state.detail["physicalDefense"] = Math.floor(((
                action.bases.level > 70 ? action.bases.level * 3 : (action.bases.level > 50 ? action.bases.level * 2 : action.bases.level)) +
                Math.floor(state.status.vitality) * 2 +
                Math.floor(state.status.strength) +
                action.equipmentOptions["physicalDefense"] + action.skillOptions["physicalDefense"] + action.synergyOptions["physicalDefense"] +
                action.equipmentOptions["plusPhysicalDefense"] + action.skillOptions["plusPhysicalDefense"] + action.synergyOptions["plusPhysicalDefense"] +
                action.equipmentOptions["plusDefense"] + action.skillOptions["plusDefense"] + action.synergyOptions["plusDefense"] +
                Math.floor((state.status.intelligence + state.status.mentality) * (
                    action.equipmentOptions["plusPhysicalDefenseMultiplyIntelligenceAndMentality"] +
                    action.skillOptions["plusPhysicalDefenseMultiplyIntelligenceAndMentality"] +
                    action.synergyOptions["plusPhysicalDefenseMultiplyIntelligenceAndMentality"]) / 100)) *
                (100 + action.equipmentOptions["multiplyPhysicalDefense"] + action.skillOptions["multiplyPhysicalDefense"] + action.synergyOptions["multiplyPhysicalDefense"] +
                    action.equipmentOptions["multiplyDefense"] + action.skillOptions["multiplyDefense"] + action.synergyOptions["multiplyDefense"] +
                    action.equipmentOptions["multiplyArmorDefense"] + action.skillOptions["multiplyArmorDefense"] + action.synergyOptions["multiplyArmorDefense"]
                ) / 100)
            state.detail["magicalDefense"] = Math.floor(((
                action.bases.level > 70 ? action.bases.level * 3 : (action.bases.level > 50 ? action.bases.level * 2 : action.bases.level)) +
                Math.floor(state.status.mentality) * 2 +
                Math.floor(state.status.intelligence) +
                action.equipmentOptions["magicalDefense"] + action.skillOptions["magicalDefense"] + action.synergyOptions["magicalDefense"] +
                action.equipmentOptions["plusMagicalDefense"] + action.skillOptions["plusMagicalDefense"] + action.synergyOptions["plusMagicalDefense"] +
                action.equipmentOptions["plusDefense"] + action.skillOptions["plusDefense"] + action.synergyOptions["plusDefense"]) *
                (100 + action.equipmentOptions["multiplyMagicalDefense"] + action.skillOptions["multiplyMagicalDefense"] + action.synergyOptions["multiplyMagicalDefense"] +
                    action.equipmentOptions["multiplyDefense"] + action.skillOptions["multiplyDefense"] + action.synergyOptions["multiplyDefense"] +
                    action.equipmentOptions["multiplyArmorDefense"] + action.skillOptions["multiplyArmorDefense"] + action.synergyOptions["multiplyArmorDefense"]) / 100)

            state.detail["accuracy"] = Math.floor((
                state.status.agility +
                Math.floor(action.bases.level / 2) +
                action.equipmentOptions["plusAccuracy"] + action.skillOptions["plusAccuracy"] + action.synergyOptions["plusAccuracy"]) *
                (100 + action.equipmentOptions["multiplyAccuracy"] + action.skillOptions["multiplyAccuracy"] + action.synergyOptions["multiplyAccuracy"]) / 100)
            state.detail["dodging"] = Math.floor((
                (state.status.dexterity * 1.2) +
                Math.floor(action.bases.level / 2) +
                action.equipmentOptions["plusDodging"] + action.skillOptions["plusDodging"] + action.synergyOptions["plusDodging"]) *
                (100 + action.equipmentOptions["multiplyDodging"] + action.skillOptions["multiplyDodging"] + action.synergyOptions["multiplyDodging"]) / 100)
            state.detail["hitPointRecovery"] = Math.floor(1)
            state.detail["magicPointRecovery"] = Math.floor(1)
            state.detail["resistance"] = Math.floor(
                (state.status.mentality + state.status.intelligence) / 15
            )
            state.detail["movementSpeed"] = Math.floor(
                races[action.bases.raceid].movementSpeed *
                (100 + action.equipmentOptions["multiplyMovementSpeed"] + action.synergyOptions["multiplyMovementSpeed"] +
                    action.equipmentOptions["multiplyRideSpeed"] + action.synergyOptions["multiplyRideSpeed"] + action.skillOptions["multiplyRideSpeed"]) / 100 *
                (100 + action.skillOptions["multiplyMovementSpeed"]) / 100)
            state.detail["meleeAttack"] = calcMeleeAttack(state, action)
            state.detail["rangeAttack"] = calcRangeAttack(state, action)
            state.detail["magicAttack"] = calcMagicAttack(state, action)
            state.detail["attackSpeed"] = Math.floor(
                action.equipmentOptions["attackSpeed"] *
                (100) / (100 + action.equipmentOptions["multiplyAttackSpeed"] + action.skillOptions["multiplyAttackSpeed"] + action.synergyOptions["multiplyAttackSpeed"])
            )
            break;
        default:
            throw new Error("Invalid action");
    }
    return { ...state }
}
export const CharactorDispatchContext = React.createContext<React.Dispatch<CharactorAction>>(() => undefined);
export const useCharactorDispatch = () => React.useContext(CharactorDispatchContext);

const calcLvAttack = (lv: number) => {
    if (lv <= 50) {
        return lv * 2
    } else if (lv <= 70) {
        return lv * 3
    } else {
        return lv * 4
    }
}
const calcMeleeMasteryAttack = (state: Charactor, action: CharactorAction) => {
    if (action.skillOptions.plusMeleeAttackMultiplyDexterity > 0)
        return Math.floor(state.status.dexterity * action.skillOptions.plusMeleeAttackMultiplyDexterity / 100)
    else if (action.skillOptions.plusMeleeAttackMultiplyStrength > 0)
        return Math.floor(state.status.strength * action.skillOptions.plusMeleeAttackMultiplyStrength / 100)
    else if (action.skillOptions.plusMeleeAttackMultiplyVitality > 0)
        return Math.floor(state.status.vitality * action.skillOptions.plusMeleeAttackMultiplyVitality / 100)
    else if (action.skillOptions.plusMeleeAttackMultiplyIntelligence > 0)
        return Math.floor(state.status.intelligence * action.skillOptions.plusMeleeAttackMultiplyIntelligence / 100)
    else
        return 0
}
const calcRangeMasteryAttack = (state: Charactor, action: CharactorAction) => {
    if (action.skillOptions.plusRangeAttackMultiplyAgility > 0) {
        return Math.floor(state.status.agility * action.skillOptions.plusRangeAttackMultiplyAgility / 100)
    }
    else
        return 0
}
const calcMagicMasteryAttack = (state: Charactor, action: CharactorAction) => {
    if (action.skillOptions.plusMagicAttackMultiplyIntelligence > 0)
        return Math.floor(state.status.intelligence * action.skillOptions.plusMagicAttackMultiplyIntelligence / 100)
    else if (action.skillOptions.plusMagicAttackMultiplyMentality > 0)
        return Math.floor(state.status.mentality * action.skillOptions.plusMagicAttackMultiplyMentality / 100)
    else
        return 0
}
const calcMeleeAttack = (state: Charactor, action: CharactorAction) => {

    const isMastery = Object.keys(action.skillOptions).filter(
        (key) => key.search("^plusMeleeAttackMultiply") > -1).some(
            (key) => action.skillOptions[key as BuiltinOptionKeyType] > 0)
    if (isMastery) {
        return Math.floor(
            (
                Math.floor(calcLvAttack(action.bases.level) * 0.75) +
                Math.floor(state.status.strength * 3 * 0.75) +
                calcMeleeMasteryAttack(state, action) +
                // templer blunt mastery
                Math.floor(calcMagicAttack(state, action) * action.skillOptions["plusMeleeAttackMultiplyMagicAttack"] / 100) +
                Math.floor((action.equipmentOptions["meleeAttack"] + action.equipmentOptions["plusMeleeAttack"] + action.skillOptions["plusMeleeAttack"] + action.synergyOptions["plusMeleeAttack"] +
                    action.equipmentOptions["plusAttack"] + action.skillOptions["plusAttack"] + action.synergyOptions["plusAttack"]
                ) * (100 + action.equipmentOptions["multiplyWeaponAttack"] + action.skillOptions["multiplyWeaponAttack"] + action.synergyOptions["multiplyWeaponAttack"]) / 100)
            ) * (
                100 + action.equipmentOptions["multiplyMeleeAttack"] + action.skillOptions["multiplyMeleeAttack"] + action.synergyOptions["multiplyMeleeAttack"]
                + action.equipmentOptions["multiplyAttack"] + action.skillOptions["multiplyAttack"] + action.synergyOptions["multiplyAttack"]
            ) / 100)
    } else {
        return Math.floor(
            (
                calcLvAttack(action.bases.level) +
                state.status.strength * 3 +
                Math.floor((action.equipmentOptions["meleeAttack"] + action.equipmentOptions["plusMeleeAttack"] + action.skillOptions["plusMeleeAttack"] + action.synergyOptions["plusMeleeAttack"] +
                    action.equipmentOptions["plusAttack"] + action.skillOptions["plusAttack"] + action.synergyOptions["plusAttack"]
                ))
            ) * (
                100 + action.equipmentOptions["multiplyMeleeAttack"] + action.skillOptions["multiplyMeleeAttack"] + action.synergyOptions["multiplyMeleeAttack"]
                + action.equipmentOptions["multiplyAttack"] + action.skillOptions["multiplyAttack"] + action.synergyOptions["multiplyAttack"]
            ) / 100)
    }
}

const calcRangeAttack = (state: Charactor, action: CharactorAction) => {
    const isMastery = Object.keys(action.skillOptions).filter(
        (key) => key.search("^plusRangeAttackMultiply") > -1).some(
            (key) => action.skillOptions[key as BuiltinOptionKeyType] > 0)
    if (isMastery) {
        return Math.floor(
            (
                Math.floor(calcLvAttack(action.bases.level) * 0.75) +
                Math.floor(state.status.agility * 3 * 0.75) +
                calcRangeMasteryAttack(state, action) +
                Math.floor((action.equipmentOptions["rangeAttack"] +
                    // FIXME: multiply arrow attack options are isolated and multiply each other.
                    // for example, enchant arrow and kael's arrow option values are not sum but multiply each other.
                    Math.floor(action.equipmentOptions["arrowAttack"] * (100 + action.skillOptions["multiplyArrowAttack"]) / 100) +
                    action.equipmentOptions["plusRangeAttack"] + action.skillOptions["plusRangeAttack"] + action.synergyOptions["plusRangeAttack"] +
                    action.equipmentOptions["plusAttack"] + action.skillOptions["plusAttack"] + action.synergyOptions["plusAttack"]
                ) * (100 + action.equipmentOptions["multiplyWeaponAttack"] + action.skillOptions["multiplyWeaponAttack"] + action.synergyOptions["multiplyWeaponAttack"]) / 100)
            ) * (
                100 + action.equipmentOptions["multiplyRangeAttack"] + action.skillOptions["multiplyRangeAttack"] + action.synergyOptions["multiplyRangeAttack"]
                + action.equipmentOptions["multiplyAttack"] + action.skillOptions["multiplyAttack"] + action.synergyOptions["multiplyAttack"]
            ) / 100)
    } else {
        return Math.floor(
            (
                calcLvAttack(action.bases.level) +
                state.status.agility * 3 +
                Math.floor((action.equipmentOptions["rangeAttack"] +
                    Math.floor(action.equipmentOptions["arrowAttack"] * (100 + action.skillOptions["multiplyArrowAttack"]) / 100) +
                    action.equipmentOptions["plusRangeAttack"] + action.skillOptions["plusRangeAttack"] + action.synergyOptions["plusRangeAttack"] +
                    action.equipmentOptions["plusAttack"] + action.skillOptions["plusAttack"] + action.synergyOptions["plusAttack"]
                ))
            ) * (
                100 + action.equipmentOptions["multiplyRangeAttack"] + action.skillOptions["multiplyRangeAttack"] + action.synergyOptions["multiplyRangeAttack"]
                + action.equipmentOptions["multiplyAttack"] + action.skillOptions["multiplyAttack"] + action.synergyOptions["multiplyAttack"]
            ) / 100)
    }
}

const calcMagicAttack = (state: Charactor, action: CharactorAction) => {
    const isMastery = Object.keys(action.skillOptions).filter(
        (key) => key.search("^plusMagicAttackMultiply") > -1).some(
            (key) => action.skillOptions[key as BuiltinOptionKeyType] > 0)
    if (isMastery) {
        return Math.floor(
            (
                Math.floor(calcLvAttack(action.bases.level) * 0.75) +
                Math.floor(state.status.intelligence * 3 * 0.75) +
                calcMagicMasteryAttack(state, action) +
                Math.floor((action.equipmentOptions["magicAttack"] + action.equipmentOptions["plusMagicAttack"] + action.skillOptions["plusMagicAttack"] + action.synergyOptions["plusMagicAttack"] +
                    action.equipmentOptions["plusAttack"] + action.skillOptions["plusAttack"] + action.synergyOptions["plusAttack"]
                ) * (100 + action.equipmentOptions["multiplyWeaponAttack"] + action.skillOptions["multiplyWeaponAttack"] + action.synergyOptions["multiplyWeaponAttack"]) / 100)
            ) * (
                100 + action.equipmentOptions["multiplyMagicAttack"] + action.skillOptions["multiplyMagicAttack"] + action.synergyOptions["multiplyMagicAttack"]
                + action.equipmentOptions["multiplyAttack"] + action.skillOptions["multiplyAttack"] + action.synergyOptions["multiplyAttack"]
            ) / 100)
    } else {
        return Math.floor(
            (
                calcLvAttack(action.bases.level) +
                state.status.intelligence * 3 +
                Math.floor((action.equipmentOptions["magicAttack"] + action.equipmentOptions["plusMagicAttack"] + action.skillOptions["plusMagicAttack"] + action.synergyOptions["plusMagicAttack"] +
                    action.equipmentOptions["plusAttack"] + action.skillOptions["plusAttack"] + action.synergyOptions["plusAttack"]
                ))
            ) * (
                100 + action.equipmentOptions["multiplyMagicAttack"] + action.skillOptions["multiplyMagicAttack"] + action.synergyOptions["multiplyMagicAttack"]
                + action.equipmentOptions["multiplyAttack"] + action.skillOptions["multiplyAttack"] + action.synergyOptions["multiplyAttack"]
            ) / 100)
    }
}