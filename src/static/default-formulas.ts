import { CharactorStateType } from "../modules/character/constants";

/**
 * デフォルト計算式の定義
 * 全ての計算式を文字列として保存し、統一的に扱う
 */
export const DEFAULT_FORMULAS: Record<CharactorStateType, string> = {
    // 基本ステータス
    __strength: `
// 基本筋力の計算
@baseStrength = strength + plusStrength + plusAllStatus
@strengthMultiplier = (100 + multiplyStrength + multiplyAllStatus) / 100
floor({baseStrength} * {strengthMultiplier})
`,

    __vitality: `
// 基本体力の計算 - 精神力連動ボーナス含む
@mentalityBonus = floor(plusVitalityMultiplyMentality * {mentality} / 100)
@baseVitality = vitality + plusVitality + plusAllStatus + {mentalityBonus}
@vitalityMultiplier = (100 + multiplyVitality + multiplyAllStatus) / 100
floor({baseVitality} * {vitalityMultiplier})
`,

    __dexterity: `
// 基本器用の計算
@baseDexterity = dexterity + plusDexterity + plusAllStatus
@dexterityMultiplier = (100 + multiplyDexterity + multiplyAllStatus) / 100
floor({baseDexterity} * {dexterityMultiplier})
`,

    __intelligence: `
// 基本知性の計算
@baseIntelligence = intelligence + plusIntelligence + plusAllStatus
@intelligenceMultiplier = (100 + multiplyIntelligence + multiplyAllStatus) / 100
floor({baseIntelligence} * {intelligenceMultiplier})
`,

    __agility: `
// 基本敏捷の計算
@baseAgility = agility + plusAgility + plusAllStatus
@agilityMultiplier = (100 + multiplyAgility + multiplyAllStatus) / 100
floor({baseAgility} * {agilityMultiplier})
`,

    __mentality: `
// 基本精神の計算
@baseMentality = mentality + plusMentality + plusAllStatus
@mentalityMultiplier = (100 + multiplyMentality + multiplyAllStatus) / 100
floor({baseMentality} * {mentalityMultiplier})
`,

    // 派生ステータス - 元の複雑な計算式
    __hitPoint: `
// HP計算 - レベル、種族、体力、装備ボーナスを含む複雑な計算
@levelHp = level * raceHitPointPerLevel
@levelBonusStep = floor(level / 5)
@levelBonusHp = {levelBonusStep} * ({levelBonusStep} + 1) * 5
@vitalityHp = {vitality} * 20
@baseHp = {levelHp} + {levelBonusHp} + {vitalityHp} + plusHitPoint
@hpMultiplier = (100 + multiplyHitPoint) / 100
@multipliedHp = floor({baseHp} * {hpMultiplier})
@levelHpBonus = plusHitPointMultiplyLevel * level + plusHitPointMultiplyHeroLevel * heroLevel
@statusHpBonus = plusHitPointMultiplyStrength * {strength} + plusHitPointMultiplyAgility * {agility}
{multipliedHp} + {levelHpBonus} + {statusHpBonus}
`,

    __magicPoint: `
// MP計算 - レベル、種族、精神、装備ボーナスを含む計算
@levelMp = level * raceMagicPointPerLevel
@levelBonusStep = floor(level / 5)
@levelBonusMp = floor({levelBonusStep} * ({levelBonusStep} + 1) * 5 / 2)
@mentalityMp = {mentality} * 10
@baseMp = {levelMp} + {levelBonusMp} + {mentalityMp} + plusMagicPoint
@mpMultiplier = (100 + multiplyMagicPoint) / 100
@multipliedMp = floor({baseMp} * {mpMultiplier})
@levelMpBonus = plusMagicPointMultiplyLevel * level + plusMagicPointMultiplyHeroLevel * heroLevel
{multipliedMp} + {levelMpBonus}
`,

    __meleeAttack: `
// 近接攻撃力計算 - マスタリー有無で分岐する複雑な計算
@levelAttack = level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2
@meleeWeaponBase = floor(weaponBaseMeleeAttack * (100 + multiplyBaseMeleeWeaponAttack) / 100)
@meleeWeaponAfterMultiplier = floor({meleeWeaponBase} * (100 + multiplyWeaponAttack) / 100)
@meleeWeaponAttack = floor(({meleeWeaponAfterMultiplier} + weaponEnchantMeleeAttack + plusMeleeAttack + plusAttack) * (100 + multiplyMeleeWeaponAttack) / 100)
@masteryLevelAttack = floor({levelAttack} * 0.75)
@masteryStrengthAttack = floor({strength} * 3 * 0.75)
@masteryBonus = floor({dexterity} * plusMeleeAttackMultiplyDexterity / 100) + floor({strength} * plusMeleeAttackMultiplyStrength / 100) + floor({vitality} * plusMeleeAttackMultiplyVitality / 100) + floor({intelligence} * plusMeleeAttackMultiplyIntelligence / 100) + floor({magicAttack} * plusMeleeAttackMultiplyMagicAttack / 100)
@masteryBaseAttack = {masteryLevelAttack} + {masteryStrengthAttack} + {masteryBonus} + {meleeWeaponAttack}
@normalBaseAttack = {levelAttack} + {strength} * 3 + {meleeWeaponAttack}
@attackMultiplier = (100 + multiplyMeleeAttack + multiplyAttack) / 100
meleeMastery > 0 ? floor({masteryBaseAttack} * {attackMultiplier}) : floor({normalBaseAttack} * {attackMultiplier})
`,

    __magicAttack: `
// 魔法攻撃力計算 - マスタリー有無で分岐する複雑な計算
@levelAttack = level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2
@magicWeaponAfterMultiplier = floor(weaponBaseMagicAttack * (100 + multiplyWeaponAttack) / 100)
@magicWeaponAttack = floor(({magicWeaponAfterMultiplier} + weaponEnchantMagicAttack + plusMagicAttack + plusAttack) * (100 + multiplyMagicWeaponAttack) / 100)
@masteryLevelAttack = floor({levelAttack} * 0.75)
@masteryIntelligenceAttack = floor({intelligence} * 3 * 0.75)
@masteryBonus = floor({intelligence} * plusMagicAttackMultiplyIntelligence / 100) + floor({mentality} * plusMagicAttackMultiplyMentality / 100)
@masteryBaseAttack = {masteryLevelAttack} + {masteryIntelligenceAttack} + {masteryBonus} + {magicWeaponAttack}
@normalBaseAttack = {levelAttack} + {intelligence} * 3 + {magicWeaponAttack}
@attackMultiplier = (100 + multiplyMagicAttack + multiplyAttack) / 100
magicMastery > 0 ? floor({masteryBaseAttack} * {attackMultiplier}) : floor({normalBaseAttack} * {attackMultiplier})
`,

    __rangeAttack: `
// 遠距離攻撃力計算 - マスタリー有無で分岐し、矢攻撃力も含む複雑な計算
@levelAttack = level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2
@shortTermArrowAttack = floor(arrowAttack * (100 + multiplyArrowAttack) / 100 * (100 + multiplyShortTermArrowAttack) / 100)
@normalArrowAttack = floor(arrowAttack * (100 + multiplyArrowAttack) / 100)
@masteryRangeWeaponBase = floor((weaponBaseRangeAttack + {shortTermArrowAttack}) * (100 + multiplyWeaponAttack) / 100)
@masteryRangeWeaponAttack = floor(({masteryRangeWeaponBase} + weaponEnchantRangeAttack + plusRangeAttack + plusAttack) * (100 + multiplyRangeWeaponAttack) / 100)
@normalRangeWeaponBase = (weaponBaseRangeAttack + {normalArrowAttack}) * (100 + multiplyWeaponAttack) / 100
@normalRangeWeaponAttack = floor(({normalRangeWeaponBase} + weaponEnchantRangeAttack + plusRangeAttack + plusAttack) * (100 + multiplyRangeWeaponAttack) / 100)
@masteryLevelAttack = floor({levelAttack} * 0.75)
@masteryAgilityAttack = floor({agility} * 3 * 0.75)
@masteryBonus = floor({agility} * plusRangeAttackMultiplyAgility / 100)
@masteryBaseAttack = {masteryLevelAttack} + {masteryAgilityAttack} + {masteryBonus} + {masteryRangeWeaponAttack}
@normalBaseAttack = {levelAttack} + {agility} * 3 + {normalRangeWeaponAttack}
@attackMultiplier = (100 + multiplyRangeAttack + multiplyAttack) / 100
rangeMastery > 0 ? floor({masteryBaseAttack} * {attackMultiplier}) : floor({normalBaseAttack} * {attackMultiplier})
`,

    __physicalDefense: `
// 物理防御力計算 - レベル、体力、筋力、防具、盾を含む複雑な計算
@levelDefense = level > 70 ? level * 3 : level > 50 ? level * 2 : level
@statusDefense = {vitality} * 2 + {strength}
@armorDefense = floor((physicalDefense + plusPhysicalDefense + plusDefense) * (100 + multiplyArmorDefense) / 100)
@shieldDefense = floor(shieldPhysicalDefense * (100 + multiplyShieldDefense) / 100)
@intelligenceMentalityDefense = floor(plusPhysicalDefenseMultiplyIntelligenceAndMentality * ({intelligence} + {mentality}) / 100)
@baseDefense = {levelDefense} + {statusDefense} + {armorDefense} + {shieldDefense} + {intelligenceMentalityDefense}
@defenseMultiplier = (100 + multiplyPhysicalDefense + multiplyDefense) / 100
floor({baseDefense} * {defenseMultiplier})
`,

    __magicalDefense: `
// 魔法防御力計算 - レベル、精神、知性、防具、盾を含む複雑な計算
@levelDefense = level > 70 ? level * 3 : level > 50 ? level * 2 : level
@statusDefense = {mentality} * 2 + {intelligence}
@armorDefense = floor((magicalDefense + plusMagicalDefense + plusDefense) * (100 + multiplyArmorDefense) / 100)
@shieldDefense = floor(shieldMagicalDefense * (100 + multiplyShieldDefense) / 100)
@baseDefense = {levelDefense} + {statusDefense} + {armorDefense} + {shieldDefense}
@defenseMultiplier = (100 + multiplyMagicalDefense + multiplyDefense) / 100
floor({baseDefense} * {defenseMultiplier})
`,

    __accuracy: `
// 命中率計算 - 敵速、レベル、装備ボーナスを含む計算
@levelAccuracy = floor(level / 2)
@accuracyBonus = plusAccuracy * (100 + multiplyAccuracy) / 100
floor({agility} + {levelAccuracy} + {accuracyBonus})
`,

    __dodging: `
// 回避率計算 - 器用、レベル、装備ボーナスを含む計算
@dexterityDodging = floor({dexterity} * 1.2)
@levelDodging = floor(level / 2)
@baseDodging = {dexterityDodging} + {levelDodging} + plusDodging
@dodgingMultiplier = (100 + multiplyDodging) / 100
floor({baseDodging} * {dodgingMultiplier})
`,

    __resistance: `
// 抵抗力計算 - 精神と知性の合計から15で割った値
@baseResistance = {mentality} + {intelligence}
floor({baseResistance} / 15)
`,

    __hitPointRecovery: `
// HP回復力計算 - HPと体力の差分を元にした複雑な計算
@vitalityMultiplier = (100 + multiplyVitality + multiplyAllStatus) / 100
@initialVitality = floor(initialStatusVitality * {vitalityMultiplier})
@hitPointRecoveryFromHp = floor(({hitPoint} - ({vitality} - {initialVitality}) * 20) / 15)
@hitPointRecoveryFromVitality = floor(({vitality} - initialStatusVitality * {vitalityMultiplier}) * 1.2)
{hitPointRecoveryFromHp} + {hitPointRecoveryFromVitality}
`,

    __magicPointRecovery: `
// MP回復力計算 - MPと精神の差分を元にした複雑な計算
@mentalityMultiplier = (100 + multiplyMentality + multiplyAllStatus) / 100
@initialMentality = floor(initialStatusMentality * {mentalityMultiplier})
@magicPointRecoveryFromMp = floor(({magicPoint} - ({mentality} - {initialMentality}) * 10) / 15)
@magicPointRecoveryFromMentality = floor(({mentality} - initialStatusMentality * {mentalityMultiplier}) * 8 / 15)
{magicPointRecoveryFromMp} + {magicPointRecoveryFromMentality} + 1
`,

    __movementSpeed: `
// 移動速度計算 - 種族基本速度に移動速度と乗り物速度ボーナスを適用
@movementSpeedMultiplier = (100 + multiplyMovementSpeed + multiplyRideSpeed) / 100
floor(raceMovementSpeed * {movementSpeedMultiplier})
`,

    __attackSpeed: `
// 攻撃速度計算 - 武器攻撃速度に攻撃速度ボーナスを適用
@baseAttackSpeed = attackSpeed === 0 ? 2000 : attackSpeed
@attackSpeedMultiplier = 100 / (100 + multiplyAttackSpeed)
floor({baseAttackSpeed} * {attackSpeedMultiplier})
`
};

/**
 * デフォルト計算式の説明
 */
export const DEFAULT_FORMULA_DESCRIPTIONS: Record<CharactorStateType, string> = {
    __strength: "基本筋力値に装備・バフによる修正を適用",
    __vitality: "基本体力値に装備・バフによる修正を適用（精神力連動ボーナス含む）",
    __dexterity: "基本器用値に装備・バフによる修正を適用",
    __intelligence: "基本知性値に装備・バフによる修正を適用",
    __agility: "基本敏捷値に装備・バフによる修正を適用",
    __mentality: "基本精神値に装備・バフによる修正を適用",
    __hitPoint: "レベル・種族・体力・装備によるHP計算",
    __magicPoint: "レベル・種族・精神・装備によるMP計算",
    __meleeAttack: "近接マスタリー有効時の攻撃力計算（筋力・器用・武器ベース）",
    __magicAttack: "魔法マスタリー有効時の攻撃力計算（知性・精神・武器ベース）",
    __rangeAttack: "遠距離マスタリー有効時の攻撃力計算（器用・敏捷・武器ベース）",
    __physicalDefense: "体力・器用・防具による物理防御力計算",
    __magicalDefense: "知性・精神・防具による魔法防御力計算",
    __accuracy: "器用・レベルによる命中率計算",
    __dodging: "器用・レベルによる回避率計算",
    __resistance: "知性・精神による状態異常抵抗力計算",
    __hitPointRecovery: "体力による自然HP回復量計算",
    __magicPointRecovery: "精神による自然MP回復量計算",
    __movementSpeed: "種族基本値に装備・バフによる移動速度計算",
    __attackSpeed: "武器攻撃速度に装備・バフによる攻撃速度計算"
};
