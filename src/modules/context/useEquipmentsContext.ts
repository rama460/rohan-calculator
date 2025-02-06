import React from "react";
import { Item } from "../../components/static/items";


export type Equipments = {
    helmet: Item | null;
    gauntlet: Item | null;
    tunic: Item | null;
    leggings: Item | null;
    boots: Item | null;
    weapon: Item | null;
    shield: Item | null;
    arrow: Item | null;
    accessory1: Item | null;
    accessory2: Item | null;
    accessory3: Item | null;
    accessory4: Item | null;
    glasses: Item | null;
    hat: Item | null;
    earrings: Item | null;
    costume: Item | null;
    talismanH: Item | null;
    talismanG: Item | null;
    talismanI: Item | null;
    talismanB: Item | null;
    talismanJ: Item | null;
    talismanN: Item | null;
    talismanE: Item | null;
    talismanR: Item | null;
    talismanW: Item | null;
    talismanQ: Item | null;
    talismanS: Item | null;
    pet: Item | null;
}

export const initialEquipments: Equipments = {
    helmet: null,
    gauntlet: null,
    tunic: null,
    leggings: null,
    boots: null,
    weapon: null,
    shield: null,
    arrow: null,
    accessory1: null,
    accessory2: null,
    accessory3: null,
    accessory4: null,
    glasses: null,
    hat: null,
    earrings: null,
    costume: null,
    talismanH: null,
    talismanG: null,
    talismanI: null,
    talismanB: null,
    talismanJ: null,
    talismanN: null,
    talismanE: null,
    talismanR: null,
    talismanW: null,
    talismanQ: null,
    talismanS: null,
    pet: null,

}

export const EquipmentsContext = React.createContext<Equipments>(initialEquipments);

export const useEquipments = () => {
    return React.useContext(EquipmentsContext);
}

export type EquipmentAction =
    | {
        type: "SET"
        key: keyof Equipments
        item: Item
    } | {
        type: "REMOVE"
        key: keyof Equipments
    }

export const equipmentsReducer = (state: Equipments, action: EquipmentAction): Equipments => {
    switch (action.type) {
        case "SET":
            state[action.key] = action.item;
            break;
        case "REMOVE":
            state[action.key] = null;
            break;
        default:
            throw new Error("Invalid action");
    }
    return { ...state }

}

export const EquipmentsDispatchContext = React.createContext<React.Dispatch<EquipmentAction>>(() => undefined);
export const useEquipmentsDispatch = () => React.useContext(EquipmentsDispatchContext);