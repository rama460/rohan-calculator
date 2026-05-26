import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { DEFAULT_FORMULAS, DEFAULT_FORMULA_DESCRIPTIONS } from "../../../static/default-formulas";
import { CharactorStateType } from "../../character/constants";
import { customFormulaStateFamily, customFormulasState, Formula } from "../custom-formulas";

export const uiCustomFormulaAtomFamily = atomFamily((formulaId: CharactorStateType) =>
    atom(
        (get) => get(customFormulaStateFamily(formulaId)),
        (_, set, formula: Formula | null) => {
            set(customFormulaStateFamily(formulaId), formula);
        }
    )
);

export const uiFormulaAtomFamily = atomFamily((formulaId: CharactorStateType) =>
    atom((get): Formula => {
        const customFormula = get(uiCustomFormulaAtomFamily(formulaId));

        if (customFormula?.isActive) {
            return {
                id: formulaId,
                name: formulaId,
                formula: customFormula.formula,
                isCustom: customFormula.isCustom,
                isActive: customFormula.isActive,
                description: customFormula.description,
                createdAt: customFormula.createdAt,
                updatedAt: customFormula.updatedAt,
                version: customFormula.version,
            };
        }

        return {
            id: formulaId,
            name: formulaId,
            formula: DEFAULT_FORMULAS[formulaId],
            isCustom: false,
            isActive: true,
            description: DEFAULT_FORMULA_DESCRIPTIONS[formulaId],
        };
    })
);

export const uiCustomFormulasState = atom(
    (get) => get(customFormulasState),
    (_, set, formulas: Record<CharactorStateType, Formula>) => {
        set(customFormulasState, formulas);
    }
);

export const uiIsFormulaCustomizedFamily = atomFamily((formulaId: CharactorStateType) =>
    atom((get) => {
        const formula = get(uiCustomFormulaAtomFamily(formulaId));
        return formula !== null && formula.isActive;
    })
);

export const resetUiCustomFormulaFamily = atomFamily((formulaId: CharactorStateType) =>
    atom(null, (_, set) => {
        set(uiCustomFormulaAtomFamily(formulaId), null);
    })
);
