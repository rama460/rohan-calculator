import React from "react";
import { AppliedSkill } from "../../components/static/skill";


export const AppliedSkillsContext = React.createContext<AppliedSkill[]>([]);

export const useAppliedSkills = () => {
    return React.useContext(AppliedSkillsContext);
}

export type AppliedSkillsAction =
    | {
        type: "SET"
        skill: AppliedSkill
    } | {
        type: "REMOVE"
        name: string
    } | {
        type: "CLEAR"
    }

export const skillsReducer = (state: AppliedSkill[], action: AppliedSkillsAction): AppliedSkill[] => {
    switch (action.type) {
        case "SET":
            return [...state.filter((skill) => skill.name !== action.skill.name), action.skill];
        case "REMOVE":
            return [...state.filter((skill) => skill.name !== action.name)]
        case "CLEAR":
            return [];
        default:
            throw new Error("Invalid action");
    }

}

export const AppliedSkillsDispatchContext = React.createContext<React.Dispatch<AppliedSkillsAction>>(() => undefined);
export const useAppliedSkillsDispatch = () => React.useContext(AppliedSkillsDispatchContext);