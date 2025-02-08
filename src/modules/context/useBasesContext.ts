import React from "react";

export type Bases = {
    level: number;
    heroLevel: number;
    raceid: number;
    jobid: number;
    transcended: boolean;
    title: string | null;
}

export const initialBases: Bases = {
    level: 115,
    heroLevel: 50,
    raceid: 0,
    jobid: 0,
    transcended: false,
    title: null
}
export const BasesContext = React.createContext<Bases>(initialBases);

export const useBasesContext = () => {
    return React.useContext(BasesContext);
}

export type BasesAction =
    | {
        type: "SET_LEVEL"
        level: number
    } | {
        type: "SET_HERO_LEVEL"
        heroLevel: number
    } | {
        type: "SET_RACEID"
        raceid: number
    } | {
        type: "SET_JOBID"
        jobid: number
    } | {
        type: "SET_TRANSCENDED"
        transcended: boolean
    } | {
        type: "SET_TITLE"
        title: string
    }

export const basesReducer = (state: Bases, action: BasesAction): Bases => {
    switch (action.type) {
        case "SET_LEVEL":
            return { ...state, level: action.level }
        case "SET_HERO_LEVEL":
            return { ...state, heroLevel: action.heroLevel }
        case "SET_RACEID":
            return { ...state, raceid: action.raceid }
        case "SET_JOBID":
            return { ...state, jobid: action.jobid }
        case "SET_TRANSCENDED":
            return { ...state, transcended: action.transcended }
        case "SET_TITLE":
            return { ...state, title: action.title }
        default:
            throw new Error("Invalid action");
    }
}
export const BasesDispatchContext = React.createContext<React.Dispatch<BasesAction>>(() => undefined);
export const useBasesDispatch = () => React.useContext(BasesDispatchContext);
