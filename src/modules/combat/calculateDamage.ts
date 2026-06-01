import { NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE } from "./damageFormulas";
import { evaluateCombatFormula } from "./evaluateCombatFormula";
import type {
    CombatDamageFormulaId,
    DamageCalculationInput,
    DamageCalculationResult,
    SkillAttackAction,
} from "./types";

const getFormulaId = (input: DamageCalculationInput): CombatDamageFormulaId => {
    if (input.action.type === "skillAttack") {
        return input.action.formulaId;
    }

    if (input.action.type === "criticalDamage") {
        return "criticalDamage";
    }

    return NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE[input.action.damageType];
};

const getNormalAttackDamage = (
    input: DamageCalculationInput,
    action: SkillAttackAction,
): number | undefined => {
    if (!action.damageType) {
        return undefined;
    }

    const normalAttackFormulaId = NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE[action.damageType];
    const normalAttackResult = evaluateCombatFormula(normalAttackFormulaId, {
        attacker: input.attacker,
        defender: input.defender,
    });

    return normalAttackResult.result ?? 0;
};

const getDefenseIgnoredNormalAttackDamage = (
    input: DamageCalculationInput,
    action: SkillAttackAction,
): number | undefined => {
    if (!action.damageType) {
        return undefined;
    }

    const normalAttackFormulaId = NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE[action.damageType];
    const defender = {
        ...input.defender,
        values: {
            ...input.defender.values,
            __physicalDefense: 0,
            __magicalDefense: 0,
        },
    };
    const normalAttackResult = evaluateCombatFormula(normalAttackFormulaId, {
        attacker: input.attacker,
        defender,
    });

    return normalAttackResult.result ?? 0;
};

export const calculateDamage = (input: DamageCalculationInput): DamageCalculationResult => {
    const formulaId = getFormulaId(input);
    let combatContext: Record<string, number> | undefined;

    if (input.action.type === "skillAttack") {
        combatContext = {
            normalAttackDamage: getNormalAttackDamage(input, input.action) ?? 0,
            defenseIgnoredNormalAttackDamage: getDefenseIgnoredNormalAttackDamage(input, input.action) ?? 0,
        };
    }

    if (input.action.type === "criticalDamage") {
        combatContext = {
            baseDamage: input.action.baseDamage,
        };
    }

    const skillParameters = input.action.type === "skillAttack"
        ? {
            ...input.action.parameters,
            ...input.skillParameters,
        }
        : input.skillParameters;

    const result = evaluateCombatFormula(formulaId, {
        attacker: input.attacker,
        defender: input.defender,
        skillParameters,
        combatContext,
    });

    return {
        action: input.action,
        formulaId,
        damage: result.result ?? 0,
        rawDamage: result.rawResult ?? 0,
        trace: result.trace,
    };
};
