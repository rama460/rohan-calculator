import { NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE } from "./damageFormulas";
import { evaluateCombatFormula } from "./evaluateCombatFormula";
import type {
    CombatDamageFormulaId,
    DamageCalculationInput,
    DamageCalculationResult,
} from "./types";

const getFormulaId = (input: DamageCalculationInput): CombatDamageFormulaId => {
    return NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE[input.action.damageType];
};

export const calculateDamage = (input: DamageCalculationInput): DamageCalculationResult => {
    const formulaId = getFormulaId(input);
    const result = evaluateCombatFormula(formulaId, {
        attacker: input.attacker,
        defender: input.defender,
        skillParameters: input.skillParameters,
    });

    return {
        action: input.action,
        formulaId,
        damage: result.result ?? 0,
        rawDamage: result.rawResult ?? 0,
        trace: result.trace,
    };
};
