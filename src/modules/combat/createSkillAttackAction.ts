import type { Skill } from "../../static/skills/skill";
import { DEFAULT_DAMAGE_FORMULAS } from "./damageFormulas";
import type { CombatDamageFormulaId, SkillAttackAction } from "./types";

const isCombatDamageFormulaId = (formulaId: string): formulaId is CombatDamageFormulaId => {
    return formulaId in DEFAULT_DAMAGE_FORMULAS;
};

export const createSkillAttackAction = (
    skill: Skill,
    level: number,
): SkillAttackAction | undefined => {
    if (!skill.attack?.formulaId) {
        return undefined;
    }

    if (!isCombatDamageFormulaId(skill.attack.formulaId) && !skill.attack.formula) {
        return undefined;
    }

    return {
        type: "skillAttack",
        skillName: skill.name,
        level,
        formulaId: skill.attack.formulaId,
        formula: skill.attack.formula,
        damageType: skill.attack.damageType,
        parameters: skill.attack.parameters[level] ?? {},
    };
};
