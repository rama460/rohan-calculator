import React from "react";
import { CharactorContext, CharactorDispatchContext, charactorReducer, initialCharactor, initialOptionContext } from "../../modules/context/useCharactorContext";
import { initialStatuses, StatusesContext, StatusesDispatchContext, statusesReducer } from "../../modules/context/useStatusesContext";
import { AppliedSkillsContext, AppliedSkillsDispatchContext, skillsReducer } from "../../modules/context/useSkillsContext";
import { EquipmentsContext, EquipmentsDispatchContext, equipmentsReducer, initialEquipments } from "../../modules/context/useEquipmentsContext";
import { BuiltinOptionKeyType } from "../static/options";
import { reduceEquipments, reduceSkills } from "../../modules/context/reduce";
import { BasesContext, BasesDispatchContext, basesReducer, initialBases } from "../../modules/context/useBasesContext";

interface ContextProps {
    children: React.ReactNode
}

export const Context: React.FC<ContextProps> = ({ children }) => {
    const [optionContext, setOptionContext] = React.useState<{ [key in BuiltinOptionKeyType]: number }>(initialOptionContext);
    const [skillContext, setSkillContext] = React.useState<{ [key in BuiltinOptionKeyType]: number }>(initialOptionContext);
    const [bases, basesDispatch] = React.useReducer(basesReducer, initialBases);
    const [equipments, equipmentsDispatch] = React.useReducer(equipmentsReducer, initialEquipments);
    const [appliedSkills, appliedSkillsDispatch] = React.useReducer(skillsReducer, []);
    const [statuses, statusesDispatch] = React.useReducer(statusesReducer, initialStatuses);
    const [charactor, charactorDispatch] = React.useReducer(charactorReducer, initialCharactor);
    React.useEffect(() => {
        const options = reduceEquipments(Object.values(equipments));
        setOptionContext(options);
        charactorDispatch({ type: "UPDATE_STATUS", bases, statuses, equiomentOptions: options, skillOptions: skillContext });

    }, [equipments]);
    React.useEffect(() => {
        const options = reduceSkills(appliedSkills);
        setSkillContext(options);
        charactorDispatch({ type: "UPDATE_STATUS", bases, statuses, equiomentOptions: optionContext, skillOptions: options });
    }, [appliedSkills]);
    React.useEffect(() => {
        charactorDispatch({ type: "UPDATE_STATUS", bases, statuses, equiomentOptions: optionContext, skillOptions: skillContext });
    }, [statuses]);

    return (
        <BasesContext.Provider value={bases}>
            <BasesDispatchContext.Provider value={basesDispatch}>
                <EquipmentsContext.Provider value={equipments}>
                    <EquipmentsDispatchContext.Provider value={equipmentsDispatch}>
                        <AppliedSkillsContext.Provider value={appliedSkills}>
                            <AppliedSkillsDispatchContext.Provider value={appliedSkillsDispatch}>
                                <StatusesContext.Provider value={statuses}>
                                    <StatusesDispatchContext.Provider value={statusesDispatch}>
                                        <CharactorContext.Provider value={charactor}>
                                            <CharactorDispatchContext.Provider value={charactorDispatch}>
                                                {children}
                                            </CharactorDispatchContext.Provider>
                                        </CharactorContext.Provider>
                                    </StatusesDispatchContext.Provider>
                                </StatusesContext.Provider>
                            </AppliedSkillsDispatchContext.Provider>
                        </AppliedSkillsContext.Provider>
                    </EquipmentsDispatchContext.Provider>
                </EquipmentsContext.Provider>
            </BasesDispatchContext.Provider>
        </BasesContext.Provider>
    )
} 