import type { CombatDamageFormulaId, CombatDamageType } from "./types";

export const DEFAULT_DAMAGE_FORMULAS: Record<CombatDamageFormulaId, string> = {
    normalMeleeAttack: `
@attack = {attacker.meleeAttack}
@defense = {defender.physicalDefense}
@pvpDamageMultiplier = (100 + {attacker.multiplyPVPAttack} - {defender.multiplyPVPDefense}) / 100
@DamageMultiplierByItem = (100 - {defender.multiplyDecreaseDamageTaken} * (100 - {attacker.multiplyDecreaseDamageTakenPenetration}) / 100 ) / 100
@DamageMultiplierByBuff = (100 + {attacker.multiplyIncreaseDamageDealtBySkill} - {defender.multiplyDecreaseDamageDealtBySkill}) / 100
@DamageMultiplierByHeroicPower = (100 - {defender.multiplyPVPDefenseByHeroicPower}) / 100

floor(max(1, ({attack} - {defense}) * {pvpDamageMultiplier} * {DamageMultiplierByItem} * {DamageMultiplierByBuff} * {DamageMultiplierByHeroicPower}) / 10)
`,
    normalRangeAttack: `
@attack = {attacker.rangeAttack}
@defense = {defender.physicalDefense}
@pvpDamageMultiplier = (100 + {attacker.multiplyPVPAttack} - {defender.multiplyPVPDefense}) / 100
@DamageMultiplierByItem = (100 - {defender.multiplyDecreaseDamageTaken} * (100 - {attacker.multiplyDecreaseDamageTakenPenetration}) / 100 ) / 100
@DamageMultiplierByBuff = (100 + {attacker.multiplyIncreaseDamageDealtBySkill} - {defender.multiplyDecreaseDamageDealtBySkill}) / 100
@DamageMultiplierByHeroicPower = (100 - {defender.multiplyPVPDefenseByHeroicPower}) / 100

floor(max(1, ({attack} - {defense}) * {pvpDamageMultiplier} * {DamageMultiplierByItem} * {DamageMultiplierByBuff} * {DamageMultiplierByHeroicPower}) / 10)
`,
    normalMagicAttack: `
@attack = {attacker.magicAttack}
@defense = {defender.magicalDefense}
@pvpDamageMultiplier = (100 + {attacker.multiplyPVPAttack} - {defender.multiplyPVPDefense}) / 100
@DamageMultiplierByItem = (100 - {defender.multiplyDecreaseDamageTaken} * (100 - {attacker.multiplyDecreaseDamageTakenPenetration}) / 100 ) / 100
@DamageMultiplierByBuff = (100 + {attacker.multiplyIncreaseDamageDealtBySkill} - {defender.multiplyDecreaseDamageDealtBySkill}) / 100
@DamageMultiplierByHeroicPower = (100 - {defender.multiplyPVPDefenseByHeroicPower}) / 100

floor(max(1, ({attack} - {defense}) * {pvpDamageMultiplier} * {DamageMultiplierByItem} * {DamageMultiplierByBuff} * {DamageMultiplierByHeroicPower}) / 10)
`,
    additionalNormalAttackDamage: `
@additionalDamage = {normalAttackDamage} * {skill.normalAttackAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {normalAttackDamage} + {additionalDamage}) * {skillDamageMultiplier})
`,
    additionalDefenseIgnoredNormalAttackDamage: `
@additionalDamage = {defenseIgnoredNormalAttackDamage} * {skill.normalAttackAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {defenseIgnoredNormalAttackDamage} + {additionalDamage}) * {skillDamageMultiplier})
`,
    additionalDamageReductionIgnoredNormalAttackDamage: `
@additionalDamage = {damageReductionIgnoredNormalAttackDamage} * {skill.normalAttackAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {damageReductionIgnoredNormalAttackDamage} + {additionalDamage}) * {skillDamageMultiplier})
`,
    additionalDefenseAndDamageReductionIgnoredNormalAttackDamage: `
@additionalDamage = {defenseAndDamageReductionIgnoredNormalAttackDamage} * {skill.normalAttackAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {defenseAndDamageReductionIgnoredNormalAttackDamage} + {additionalDamage}) * {skillDamageMultiplier})
`,
    additionalStrengthBasedNormalAttackDamage: `
@statusAdditionalDamage = {attacker.strength} * {skill.statusAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor((max(1, {normalAttackDamage}*10 + {statusAdditionalDamage}) * {skillDamageMultiplier})/10)
`,
    additionalVitalityBasedNormalAttackDamage: `
@statusAdditionalDamage = {attacker.vitality} * {skill.statusAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {normalAttackDamage} + {statusAdditionalDamage}) * {skillDamageMultiplier})
`,
    additionalDexterityBasedNormalAttackDamage: `
@statusAdditionalDamage = {attacker.dexterity} * {skill.statusAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {normalAttackDamage} + {statusAdditionalDamage}) * {skillDamageMultiplier})
`,
    additionalIntelligenceBasedNormalAttackDamage: `
@statusAdditionalDamage = {attacker.intelligence} * {skill.statusAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {normalAttackDamage} + {statusAdditionalDamage}) * {skillDamageMultiplier})
`,
    additionalAgilityBasedNormalAttackDamage: `
@statusAdditionalDamage = {attacker.agility} * {skill.statusAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {normalAttackDamage} + {statusAdditionalDamage}) * {skillDamageMultiplier})
`,
    additionalMentalityBasedNormalAttackDamage: `
@statusAdditionalDamage = {attacker.mentality} * {skill.statusAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100

floor(max(1, {normalAttackDamage} + {statusAdditionalDamage}) * {skillDamageMultiplier})
`,
    multiHitAdditionalNormalAttackDamage: `
@additionalDamage = {normalAttackDamage} * {skill.normalAttackAdditionalDamageRate} / 100
@skillDamageMultiplier = (100 + {attacker.multiplySkillAttack} - {defender.multiplySkillDefense}) / 100
@singleHitDamage = floor(max(1, {normalAttackDamage} + {additionalDamage}) * {skillDamageMultiplier})
@hitCount = {skill.hitCount}

floor({singleHitDamage} * {hitCount})
`,
    criticalDamage: `
@damageBeforeCritical = {baseDamage}
@criticalDamageMultiplier = (150 + {attacker.multiplyCriticalDamage} - {defender.multiplyDecreaseCriticalDamageTaken}) / 100

floor(max(0, {damageBeforeCritical} * {criticalDamageMultiplier}))
`,
};

export const NORMAL_ATTACK_FORMULA_BY_DAMAGE_TYPE: Record<CombatDamageType, CombatDamageFormulaId> = {
    melee: "normalMeleeAttack",
    range: "normalRangeAttack",
    magic: "normalMagicAttack",
};
