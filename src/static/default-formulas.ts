import { CharactorStateType } from "../modules/state/charactor";

/**
 * デフォルト計算式の定義
 * 全ての計算式を文字列として保存し、統一的に扱う
 */
export const DEFAULT_FORMULAS: Record<CharactorStateType, string> = {
    // 基本ステータス
    __strength: `
// 基本筋力の計算
floor((strength + plusStrength + plusAllStatus) * (100 + multiplyStrength + multiplyAllStatus) / 100)
`,

    __vitality: `
// 基本体力の計算 - 精神力連動ボーナス含む
floor((vitality + plusVitality + plusAllStatus + floor(plusVitalityMultiplyMentality * {mentality} / 100)) * 
    (100 + multiplyVitality + multiplyAllStatus) / 100)
`,

    __dexterity: `
// 基本器用の計算
floor((dexterity + plusDexterity + plusAllStatus) * (100 + multiplyDexterity + multiplyAllStatus) / 100)
`,

    __intelligence: `
// 基本知性の計算
floor((intelligence + plusIntelligence + plusAllStatus) * (100 + multiplyIntelligence + multiplyAllStatus) / 100)
`,

    __agility: `
// 基本敏捷の計算
floor((agility + plusAgility + plusAllStatus) * (100 + multiplyAgility + multiplyAllStatus) / 100)
`,

    __mentality: `
// 基本精神の計算
floor((mentality + plusMentality + plusAllStatus) * (100 + multiplyMentality + multiplyAllStatus) / 100)
`,

    // 派生ステータス - 元の複雑な計算式
    __hitPoint: `
// HP計算 - レベル、種族、体力、装備ボーナスを含む複雑な計算
floor((level * raceHitPointPerLevel + floor(level / 5) * (floor(level / 5) + 1) * 5 + {vitality} * 20 + plusHitPoint) *
    (100 + multiplyHitPoint) / 100) +
plusHitPointMultiplyLevel * level + plusHitPointMultiplyHeroLevel * heroLevel +
plusHitPointMultiplyStrength * {strength} + plusHitPointMultiplyAgility * {agility}
`,

    __magicPoint: `
// MP計算 - レベル、種族、精神、装備ボーナスを含む計算
floor((level * raceMagicPointPerLevel + floor(floor(level / 5) * (floor(level / 5) + 1) * 5 / 2) + {mentality} * 10 + plusMagicPoint) * 
    (100 + multiplyMagicPoint) / 100) +
plusMagicPointMultiplyLevel * level + plusMagicPointMultiplyHeroLevel * heroLevel
`,

    __meleeAttack: `
// 近接攻撃力計算 - マスタリー有無で分岐する複雑な計算
meleeMastery > 0 ? 
// マスタリー有効時の計算
floor((
    floor((level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2) * 0.75) +
    floor({strength} * 3 * 0.75) +
    // マスタリーボーナス
    floor({dexterity} * plusMeleeAttackMultiplyDexterity / 100) +
    floor({strength} * plusMeleeAttackMultiplyStrength / 100) +
    floor({vitality} * plusMeleeAttackMultiplyVitality / 100) +
    floor({intelligence} * plusMeleeAttackMultiplyIntelligence / 100) +
    floor({magicAttack} * plusMeleeAttackMultiplyMagicAttack / 100) +
    // 武器攻撃力
    floor((
        floor(floor(weaponBaseMeleeAttack * (100 + multiplyBaseMeleeWeaponAttack) / 100) * (100 + multiplyWeaponAttack) / 100) +
        weaponEnchantMeleeAttack + plusMeleeAttack + plusAttack
    ) * (100 + multiplyMeleeWeaponAttack) / 100)
) * (100 + multiplyMeleeAttack + multiplyAttack) / 100) :
// マスタリー無効時の計算
floor((
    (level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2) +
    {strength} * 3 +
    floor((
        floor(floor(weaponBaseMeleeAttack * (100 + multiplyBaseMeleeWeaponAttack) / 100) * (100 + multiplyWeaponAttack) / 100) +
        weaponEnchantMeleeAttack + plusMeleeAttack + plusAttack
    ) * (100 + multiplyMeleeWeaponAttack) / 100)
) * (100 + multiplyMeleeAttack + multiplyAttack) / 100)
`,

    __magicAttack: `
// 魔法攻撃力計算 - マスタリー有無で分岐する複雑な計算
// マスタリー有効時の計算
magicMastery > 0 ? 
floor((
    floor((level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2) * 0.75) +
    floor({intelligence} * 3 * 0.75) +
    // マスタリーボーナス
    floor({intelligence} * plusMagicAttackMultiplyIntelligence / 100) +
    floor({mentality} * plusMagicAttackMultiplyMentality / 100) +
    // 武器攻撃力
    floor((
        floor(weaponBaseMagicAttack * (100 + multiplyWeaponAttack) / 100) +
        weaponEnchantMagicAttack + plusMagicAttack + plusAttack
    ) * (100 + multiplyMagicWeaponAttack) / 100)
) * (100 + multiplyMagicAttack + multiplyAttack) / 100) : 
// マスタリー無効時の計算
floor((
    (level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2) +
    {intelligence} * 3 +
    floor((
        floor(weaponBaseMagicAttack * (100 + multiplyWeaponAttack) / 100) +
        weaponEnchantMagicAttack + plusMagicAttack + plusAttack
    ) * (100 + multiplyMagicWeaponAttack) / 100)
) * (100 + multiplyMagicAttack + multiplyAttack) / 100)
`,

    __rangeAttack: `
// 遠距離攻撃力計算 - マスタリー有無で分岐し、矢攻撃力も含む複雑な計算
rangeMastery > 0 ? 
floor((
    floor((level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2) * 0.75) +
    floor({agility} * 3 * 0.75) +
    // マスタリーボーナス
    floor({agility} * plusRangeAttackMultiplyAgility / 100) +
    // 武器攻撃力（矢攻撃力含む）
    floor((
        floor((weaponBaseRangeAttack + floor(arrowAttack * (100 + multiplyArrowAttack) / 100 * (100 + multiplyShortTermArrowAttack) / 100)) * (100 + multiplyWeaponAttack) / 100) +
        weaponEnchantRangeAttack + plusRangeAttack + plusAttack
    ) * (100 + multiplyRangeWeaponAttack) / 100)
) * (100 + multiplyRangeAttack + multiplyAttack) / 100) :
// マスタリー無効時の計算
floor((
    (level > 70 ? level * 4 : level > 50 ? level * 3 : level * 2) +
    {agility} * 3 +
    // 武器攻撃力（矢攻撃力含む）
    floor((
        (weaponBaseRangeAttack + floor(arrowAttack * (100 + multiplyArrowAttack) / 100)) * (100 + multiplyWeaponAttack) / 100 +
        weaponEnchantRangeAttack + plusRangeAttack + plusAttack
    ) * (100 + multiplyRangeWeaponAttack) / 100)
) * (100 + multiplyRangeAttack + multiplyAttack) / 100)
`,

    __physicalDefense: `
// 物理防御力計算 - レベル、体力、筋力、防具、盾を含む複雑な計算
floor((
    (level > 70 ? level * 3 : level > 50 ? level * 2 : level) +
    {vitality} * 2 + {strength} +
    floor((physicalDefense + plusPhysicalDefense + plusDefense) * (100 + multiplyArmorDefense) / 100) +
    floor(shieldPhysicalDefense * (100 + multiplyShieldDefense) / 100) +
    floor((plusPhysicalDefenseMultiplyIntelligenceAndMentality) * 
            ({intelligence} + {mentality}) / 100)
) * (100 + multiplyPhysicalDefense + multiplyDefense) / 100)
`,

    __magicalDefense: `
// 魔法防御力計算 - レベル、精神、知性、防具、盾を含む複雑な計算
floor((
    (level > 70 ? level * 3 : level > 50 ? level * 2 : level) +
    {mentality} * 2 + {intelligence} + 
    floor((magicalDefense + plusMagicalDefense + plusDefense) * (100 + multiplyArmorDefense) / 100) +
    floor(shieldMagicalDefense * (100 + multiplyShieldDefense) / 100)
) * (100 + multiplyMagicalDefense + multiplyDefense) / 100)
`,

    __accuracy: `
// 命中率計算 - 敵速、レベル、装備ボーナスを含む計算
floor({agility} + floor(level / 2) + plusAccuracy * (100 + multiplyAccuracy) / 100)
`,

    __dodging: `
// 回避率計算 - 器用、レベル、装備ボーナスを含む計算
floor((floor({dexterity} * 1.2) + floor(level / 2) + plusDodging) * (100 + multiplyDodging) / 100)
`,

    __resistance: `
// 抵抗力計算 - 精神と知性の合計から15で割った値
floor(({mentality} + {intelligence}) / 15)
`,

    __hitPointRecovery: `
// HP回復力計算 - HPと体力の差分を元にした複雑な計算
floor(({hitPoint} - ({vitality} - floor(initialStatusVitality * (100 + multiplyVitality + multiplyAllStatus) / 100)) * 20) / 15) +
floor(({vitality} - initialStatusVitality * ((100 + multiplyVitality + multiplyAllStatus) / 100)) * 1.2)
`,

    __magicPointRecovery: `
// MP回復力計算 - MPと精神の差分を元にした複雑な計算
floor(({magicPoint} - ({mentality} - floor(initialStatusMentality * (100 + multiplyMentality + multiplyAllStatus) / 100)) * 10) / 15) +
floor(({mentality} - initialStatusMentality * ((100 + multiplyMentality + multiplyAllStatus) / 100)) * 8 / 15) + 1
`,

    __movementSpeed: `
// 移動速度計算 - 種族基本速度に移動速度と乗り物速度ボーナスを適用
floor(raceMovementSpeed * (100 + multiplyMovementSpeed + multiplyRideSpeed) / 100)
`,

    __attackSpeed: `
// 攻撃速度計算 - 武器攻撃速度に攻撃速度ボーナスを適用
floor((attackSpeed === 0 ? 2000 : attackSpeed) * 100 / (100 + multiplyAttackSpeed))
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