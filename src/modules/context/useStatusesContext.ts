import React from "react";
import { races } from "../../components/static/races";

export type Status = {
    initial: number
    base: number,
    meta: number,
}

export type StatusType = "strength" | "vitality" |
    "dexterity" | "intelligence" | "agility" | "mentality"

export type Statuses = {
    [key in StatusType]: Status
}

export const initialStatuses: Statuses = {
    strength: { initial: races[0].initialStatus.strength, base: 0, meta: 0 },
    vitality: { initial: races[0].initialStatus.vitality, base: 0, meta: 0 },
    dexterity: { initial: races[0].initialStatus.dexterity, base: 0, meta: 0 },
    intelligence: { initial: races[0].initialStatus.intelligence, base: 0, meta: 0 },
    agility: { initial: races[0].initialStatus.agility, base: 0, meta: 0 },
    mentality: { initial: races[0].initialStatus.mentality, base: 0, meta: 0 },
}

export const StatusesContext = React.createContext<Statuses>(initialStatuses);

export const useStatusesContext = () => {
    return React.useContext(StatusesContext);
}
export type StatusesAction =
    | {
        type: "UPDATE_META"
        key: StatusType
        value: number
    } |
    {
        type: "UPDATE_BASE"
        key: StatusType
        value: number
    } |
    {
        type: "UPDATE_INITIAL"
        value: {
            [key in StatusType]: number
        }
    } |
    {
        type: "RESET"
    }

export const statusesReducer = (state: Statuses, action: StatusesAction): Statuses => {
    switch (action.type) {
        case "UPDATE_META":
            state[action.key].meta = action.value;
            break;
        case "UPDATE_BASE":
            state[action.key].base = action.value;
            break;
        case "UPDATE_INITIAL":
            Object.keys(action.value).forEach((key) => {
                state[key as StatusType].initial = action.value[key as StatusType];
            })
            break;
        case "RESET":
            Object.keys(state).forEach((key) => {
                state[key as StatusType].base = 0;
                state[key as StatusType].meta = 0;
            })
            break;
        default:
            throw new Error("Invalid action");
    }
    return { ...state }
}
export const StatusesDispatchContext = React.createContext<React.Dispatch<StatusesAction>>(() => undefined);
export const useStatusesDispatch = () => React.useContext(StatusesDispatchContext);