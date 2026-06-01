import type { BuiltinOptionKeyType } from "../../static/options";
import type { CharacterValueKey } from "../character/constants";
import type { CalculatedCharacter } from "../character/types";

export type CombatDamageFormulaId =
    | "normalMeleeAttack"
    | "normalRangeAttack"
    | "normalMagicAttack"
    | "additionalNormalAttackDamage"
    | "additionalDefenseIgnoredNormalAttackDamage"
    | "criticalDamage";

export type CombatDamageType = "melee" | "range" | "magic";

export type NormalAttackAction = {
    type: "normalAttack";
    damageType: CombatDamageType;
};

export type SkillAttackAction = {
    type: "skillAttack";
    skillName: string;
    level: number;
    formulaId: CombatDamageFormulaId;
    damageType?: CombatDamageType;
    parameters: Record<string, number>;
};

export type CriticalDamageAction = {
    type: "criticalDamage";
    baseDamage: number;
};

export type CombatAction = NormalAttackAction | SkillAttackAction | CriticalDamageAction;

export type CombatSide = "attacker" | "defender";

export type CombatFormulaReferenceSource =
    | CombatSide
    | "skill"
    | "combatContext"
    | "localIntermediate";

export type CombatFormulaReferenceTrace = {
    name: string;
    source: CombatFormulaReferenceSource;
    value: number;
    valueKey?: CharacterValueKey;
    optionKey?: BuiltinOptionKeyType;
    formula?: string;
    processedFormula?: string;
};

export type CombatFormulaTrace = {
    formulaId: CombatDamageFormulaId;
    formulaSource: string;
    processedFormula: string;
    references: CombatFormulaReferenceTrace[];
    contextValues: Record<string, number>;
    rawResult?: number;
    result?: number;
    error?: string;
};

export type CombatFormulaEvaluationResult = {
    success: boolean;
    result?: number;
    rawResult?: number;
    error?: string;
    trace: CombatFormulaTrace;
};

export type CombatFormulaContext = {
    attacker: CalculatedCharacter;
    defender: CalculatedCharacter;
    skillParameters?: Record<string, number>;
    combatContext?: Record<string, number>;
};

export type DamageCalculationInput = {
    attacker: CalculatedCharacter;
    defender: CalculatedCharacter;
    action: CombatAction;
    skillParameters?: Record<string, number>;
};

export type DamageCalculationResult = {
    action: CombatAction;
    formulaId: CombatDamageFormulaId;
    damage: number;
    rawDamage: number;
    trace: CombatFormulaTrace;
};
