import React from "react";
import { Statuses, StatusType } from "./useStatusesContext";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";
import { Bases } from "./useBasesContext";

export type BuiltinCharactorDetailKey = "meleeAttack" | ""

export type Charactor = {
    status: {
        [key in StatusType]: number
    },
    detail: {

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
    }

export const charactorReducer = (state: Charactor, action: CharactorAction): Charactor => {
    switch (action.type) {
        case "UPDATE_STATUS":
            state.status["strength"] = (
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["strength"].base +
                action.statuses["strength"].meta +
                action.statuses["strength"].initial +
                action.equiomentOptions["plusStrength"] +
                action.equiomentOptions["plusAllOption"] +
                action.skillOptions["plusStrength"] +
                action.skillOptions["plusAllOption"]) *
                (100 + action.equiomentOptions["multiplyStrength"] + action.equiomentOptions["multiplyAllOption"] + action.skillOptions["multiplyStrength"] + action.skillOptions["multiplyAllOption"]) / 100;
            state.status["vitality"] = (
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["vitality"].base +
                action.statuses["vitality"].meta +
                action.statuses["vitality"].initial +
                action.equiomentOptions["plusVitality"] +
                action.equiomentOptions["plusAllOption"] +
                action.skillOptions["plusVitality"] +
                action.skillOptions["plusAllOption"]) *
                (100 + action.equiomentOptions["multiplyVitality"] + action.equiomentOptions["multiplyAllOption"] + action.skillOptions["multiplyVitality"] + action.skillOptions["multiplyAllOption"]) / 100;
            state.status["intelligence"] = (
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["intelligence"].base +
                action.statuses["intelligence"].meta +
                action.statuses["intelligence"].initial +
                action.equiomentOptions["plusIntelligence"] +
                action.equiomentOptions["plusAllOption"] +
                action.skillOptions["plusIntelligence"] +
                action.skillOptions["plusAllOption"]) *
                (100 + action.equiomentOptions["multiplyIntelligence"] + action.equiomentOptions["multiplyAllOption"] + action.skillOptions["multiplyIntelligence"] + action.skillOptions["multiplyAllOption"]) / 100;
            state.status["agility"] = (
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["agility"].base +
                action.statuses["agility"].meta +
                action.statuses["agility"].initial +
                action.equiomentOptions["plusAgility"] +
                action.equiomentOptions["plusAllOption"] +
                action.skillOptions["plusAgility"] +
                action.skillOptions["plusAllOption"]) *
                (100 + action.equiomentOptions["multiplyAgility"] + action.equiomentOptions["multiplyAllOption"] + action.skillOptions["multiplyAgility"] + action.skillOptions["multiplyAllOption"]) / 100;
            state.status["mentality"] = (
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["mentality"].base +
                action.statuses["mentality"].meta +
                action.statuses["mentality"].initial +
                action.equiomentOptions["plusMentality"] +
                action.equiomentOptions["plusAllOption"] +
                action.skillOptions["plusMentality"] +
                action.skillOptions["plusAllOption"]) *
                (100 + action.equiomentOptions["multiplyMentality"] + action.equiomentOptions["multiplyAllOption"] + action.skillOptions["multiplyMentality"] + action.skillOptions["multiplyAllOption"]) / 100;
            state.status["dexterity"] = (
                (action.bases.heroLevel > 0 ? 100 : 0) +
                action.statuses["dexterity"].base +
                action.statuses["dexterity"].meta +
                action.statuses["dexterity"].initial +
                action.equiomentOptions["plusDexterity"] +
                action.equiomentOptions["plusAllOption"] +
                action.skillOptions["plusDexterity"] +
                action.skillOptions["plusAllOption"]) *
                (100 + action.equiomentOptions["multiplyDexterity"] + action.equiomentOptions["multiplyAllOption"] + action.skillOptions["multiplyDexterity"] + action.skillOptions["multiplyAllOption"]) / 100;
            break;
        default:
            throw new Error("Invalid action");
    }
    return { ...state }
}
export const CharactorDispatchContext = React.createContext<React.Dispatch<CharactorAction>>(() => undefined);
export const useCharactorDispatch = () => React.useContext(CharactorDispatchContext);