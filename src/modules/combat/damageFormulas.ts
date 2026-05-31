import type { CombatDamageFormulaId, CombatDamageType } from "./types";

export const DEFAULT_DAMAGE_FORMULAS: Record<CombatDamageFormulaId, string> = {
    normalMeleeAttack: `
@attack = {attacker.meleeAttack}
@defense = {defender.physicalDefense}
@pvpAttackMultiplier = (100 + {attacker.multiplyPVPAttack}) / 100
@pvpDefenseMultiplier = (100 + {defender.multiplyPVPDefense}) / 100

floor(max(1, ({attack} - {defense}) * {pvpAttackMultiplier} / {pvpDefenseMultiplier}))
`,
    normalRangeAttack: `
@attack = {attacker.rangeAttack}
@defense = {defender.physicalDefense}
@pvpAttackMultiplier = (100 + {attacker.multiplyPVPAttack}) / 100
@pvpDefenseMultiplier = (100 + {defender.multiplyPVPDefense}) / 100

floor(max(1, ({attack} - {defense}) * {pvpAttackMultiplier} / {pvpDefenseMultiplier}))
`,
    normalMagicAttack: `
@attack = {attacker.magicAttack}
@defense = {defender.magicalDefense}
@pvpAttackMultiplier = (100 + {attacker.multiplyPVPAttack}) / 100
@pvpDefenseMultiplier = (100 + {defender.multiplyPVPDefense}) / 100

floor(max(1, ({attack} - {defense}) * {pvpAttackMultiplier} / {pvpDefenseMultiplier}))
`,
};

export const NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE: Record<CombatDamageType, CombatDamageFormulaId> = {
    melee: "normalMeleeAttack",
    range: "normalRangeAttack",
    magic: "normalMagicAttack",
};
