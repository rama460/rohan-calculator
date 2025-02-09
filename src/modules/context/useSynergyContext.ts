import React from "react";
import { SynergyKey } from "../../components/static/items";
import { BuiltinOptionKeyType } from "../../components/static/options";



export type Synergy = {
    [key in SynergyKey]?: {
        [key in BuiltinOptionKeyType]?: number
    }[]
}

export type SynergyOption = {
    [key: number]: {
        [key in BuiltinOptionKeyType]?: number
    }
}

export const SynergyContext = React.createContext<Synergy>({});
export const useSynergyContext = () => {
    return React.useContext(SynergyContext);
}
export type SynergyAction =
    | {
        type: "UPDATE"
        synergyOption: SynergyOption
        count: number
        synergyKey: SynergyKey
    }

export const synergyReducer = (state: Synergy, action: SynergyAction): Synergy => {
    switch (action.type) {
        case "UPDATE":
            state[action.synergyKey] = []
            Object.entries(action.synergyOption).forEach(([key, value]) => {
                if (Number(key) <= action.count) {
                    state[action.synergyKey]?.push(value)
                }
            })
            console.log(state)
            return { ...state };
        default:
            throw new Error("Invalid action");
    }

}
export const SynergyDispatchContext = React.createContext<React.Dispatch<SynergyAction>>(() => undefined);
export const useSynergyDispatch = () => React.useContext(SynergyDispatchContext);
