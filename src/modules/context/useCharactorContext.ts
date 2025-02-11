import React from "react";
import { Statuses, StatusType } from "./useStatusesContext";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";
import { Bases } from "./useBasesContext";
import { races } from "../../components/static/races";

export type BuiltinCharactorDetailKey = "meleeAttack" | "hitPoint" | "magicPoint"

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

export const initialOptionContext: OptionContext = Object.assign({}, ...BuiltinOptionKeys.map((key) => ({ [key]: 0 }))) as OptionContext;

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
        hitPoint: 0,
        magicPoint: 0
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
        equiomentOptions: { [key in BuiltinOptionKeyType]: number }
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
                action.equiomentOptions["plusStrength"] +
                action.equiomentOptions["plusAllStatus"] +
                action.skillOptions["plusStrength"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusStrength"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equiomentOptions["multiplyStrength"] + action.equiomentOptions["multiplyAllStatus"] + action.skillOptions["multiplyStrength"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyStrength"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["vitality"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["vitality"].base +
                action.statuses["vitality"].meta +
                action.statuses["vitality"].initial +
                action.equiomentOptions["plusVitality"] +
                action.equiomentOptions["plusAllStatus"] +
                action.skillOptions["plusVitality"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusVitality"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equiomentOptions["multiplyVitality"] + action.equiomentOptions["multiplyAllStatus"] + action.skillOptions["multiplyVitality"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyVitality"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["intelligence"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["intelligence"].base +
                action.statuses["intelligence"].meta +
                action.statuses["intelligence"].initial +
                action.equiomentOptions["plusIntelligence"] +
                action.equiomentOptions["plusAllStatus"] +
                action.skillOptions["plusIntelligence"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusIntelligence"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equiomentOptions["multiplyIntelligence"] + action.equiomentOptions["multiplyAllStatus"] + action.skillOptions["multiplyIntelligence"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyIntelligence"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["agility"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["agility"].base +
                action.statuses["agility"].meta +
                action.statuses["agility"].initial +
                action.equiomentOptions["plusAgility"] +
                action.equiomentOptions["plusAllStatus"] +
                action.skillOptions["plusAgility"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusAgility"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equiomentOptions["multiplyAgility"] + action.equiomentOptions["multiplyAllStatus"] + action.skillOptions["multiplyAgility"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyAgility"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["mentality"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["mentality"].base +
                action.statuses["mentality"].meta +
                action.statuses["mentality"].initial +
                action.equiomentOptions["plusMentality"] +
                action.equiomentOptions["plusAllStatus"] +
                action.skillOptions["plusMentality"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusMentality"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equiomentOptions["multiplyMentality"] + action.equiomentOptions["multiplyAllStatus"] + action.skillOptions["multiplyMentality"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyMentality"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.status["dexterity"] = Math.floor((
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["dexterity"].base +
                action.statuses["dexterity"].meta +
                action.statuses["dexterity"].initial +
                action.equiomentOptions["plusDexterity"] +
                action.equiomentOptions["plusAllStatus"] +
                action.skillOptions["plusDexterity"] +
                action.skillOptions["plusAllStatus"] +
                action.synergyOptions["plusDexterity"] +
                action.synergyOptions["plusAllStatus"]) *
                (100 + action.equiomentOptions["multiplyDexterity"] + action.equiomentOptions["multiplyAllStatus"] + action.skillOptions["multiplyDexterity"] + action.skillOptions["multiplyAllStatus"] + action.synergyOptions["multiplyDexterity"] + action.synergyOptions["multiplyAllStatus"]) / 100);
            state.detail["hitPoint"] = ((
                action.bases.level * races[action.bases.raceid].hitPointPerLevel + (Math.floor(action.bases.level / 5) * (Math.floor(action.bases.level / 5) + 1)) * 5 +
                Math.floor(state.status.vitality) * 20 +
                action.equiomentOptions["plusHitPoint"] + action.skillOptions["plusHitPoint"] + action.synergyOptions["plusHitPoint"]) *
                (100 + action.equiomentOptions["multiplyHitPoint"] + action.skillOptions["multiplyHitPoint"] + action.synergyOptions["multiplyHitPoint"]) / 100
            )
            state.detail["magicPoint"] = ((
                action.bases.level * races[action.bases.raceid].magicPointPerLevel + Math.floor((Math.floor(action.bases.level / 5) * (Math.floor(action.bases.level / 5) + 1)) * 5 / 2) +
                Math.floor(state.status.mentality) * 10 +
                action.equiomentOptions["plusMagicPoint"] + action.skillOptions["plusMagicPoint"] + action.synergyOptions["plusMagicPoint"]) *
                (100 + action.equiomentOptions["multiplyMagicPoint"] + action.skillOptions["multiplyMagicPoint"] + action.synergyOptions["multiplyMagicPoint"]) / 100
            )
            break;
        default:
            throw new Error("Invalid action");
    }
    return { ...state }
}
export const CharactorDispatchContext = React.createContext<React.Dispatch<CharactorAction>>(() => undefined);
export const useCharactorDispatch = () => React.useContext(CharactorDispatchContext);