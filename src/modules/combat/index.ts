export { calculateDamage } from "./calculateDamage";
export { evaluateCombatFormula } from "./evaluateCombatFormula";
export {
    DEFAULT_DAMAGE_FORMULAS,
    NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE,
} from "./damageFormulas";
export type {
    CombatAction,
    CombatDamageFormulaId,
    CombatDamageType,
    CombatFormulaContext,
    CombatFormulaEvaluationResult,
    CombatFormulaReferenceTrace,
    CombatFormulaReferenceSource,
    CombatFormulaTrace,
    CombatSide,
    DamageCalculationInput,
    DamageCalculationResult,
    NormalAttackAction,
} from "./types";
