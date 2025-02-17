export type Option = {
    name: string;
    displayColor: string;
    displayName: string;
    unit: OptionUnit;
    operationType: OptionOperationType;
};


export type OptionUnit = "percent" | "number" | "static";
export type OptionOperationType = "absolute" | "plus" | "multiply";

export const BuiltinOptions = {
    'meleeAttack': {
        name: 'meleeAttack',
        displayColor: 'white',
        displayName: '近接攻撃力',
        unit: 'number',
        operationType: 'absolute',
    },
    'rangeAttack': {
        name: 'rangeAttack',
        displayColor: 'white',
        displayName: '遠距離攻撃力',
        unit: 'number',
        operationType: 'absolute',
    },
    'magicAttack': {
        name: 'magicAttack',
        displayColor: 'white',
        displayName: '魔法攻撃力',
        unit: 'number',
        operationType: 'absolute',
    },
    'arrowAttack': {
        name: 'arrowAttack',
        displayColor: 'white',
        displayName: '矢攻撃力',
        unit: 'number',
        operationType: 'absolute',
    },
    'physicalDefense': {
        name: 'physicalDefense',
        displayColor: 'white',
        displayName: '物理防御力',
        unit: 'number',
        operationType: 'absolute',
    },
    'magicalDefense': {
        name: 'magicalDefense',
        displayColor: 'white',
        displayName: '魔法防御力',
        unit: 'number',
        operationType: 'absolute',
    },
    'plusAllStatus': {
        name: 'plusAllStatus',
        displayColor: 'green',
        displayName: '全ての能力値',
        unit: 'number',
        operationType: 'plus',
    },
    'plusStrength': {
        name: 'plusStrength',
        displayColor: 'green',
        displayName: '力',
        unit: 'number',
        operationType: 'plus',
    },
    'plusVitality': {
        name: 'plusVitality',
        displayColor: 'green',
        displayName: '体力',
        unit: 'number',
        operationType: 'plus',
    },
    'plusIntelligence': {
        name: 'plusIntelligence',
        displayColor: 'green',
        displayName: '知能',
        unit: 'number',
        operationType: 'plus',
    },
    'plusAgility': {
        name: 'plusAgility',
        displayColor: 'green',
        displayName: '敏捷性',
        unit: 'number',
        operationType: 'plus'
    },
    'plusMentality': {
        name: 'plusMentality',
        displayColor: 'green',
        displayName: '精神力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusDexterity': {
        name: 'plusDexterity',
        displayColor: 'green',
        displayName: '瞬発力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusHitPoint': {
        name: 'plusHitPoint',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'number',
        operationType: 'plus'
    },
    'plusMagicPoint': {
        name: 'plusMagicPoint',
        displayColor: 'green',
        displayName: 'MP',
        unit: 'number',
        operationType: 'plus'
    },
    'plusHitPointMultiplyStrength': {
        name: 'plusHitPointMultiplyStrength',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'number',
        operationType: 'plus'
    },
    'plusHitPointMultiplyAgility': {
        name: 'plusHitPointMultiplyAgility',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'number',
        operationType: 'plus'
    },
    'plusAttack': {
        name: 'plusAttack',
        displayColor: 'green',
        displayName: '攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusStatusAttack': {
        name: 'plusStatusAttack',
        displayColor: 'purple',
        displayName: 'ステータス攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusMeleeAttack': {
        name: 'plusMeleeAttack',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusRangeAttack': {
        name: 'plusRangeAttack',
        displayColor: 'green',
        displayName: '遠距離攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusMagicAttack': {
        name: 'plusMagicAttack',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusDefense': {
        name: 'plusDefense',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusPhysicalDefense': {
        name: 'plusPhysicalDefense',
        displayColor: 'green',
        displayName: '物理防御力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusMagicalDefense': {
        name: 'plusMagicalDefense',
        displayColor: 'green',
        displayName: '魔法防御力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusAccuracy': {
        name: 'plusAccuracy',
        displayColor: 'green',
        displayName: '命中率',
        unit: 'number',
        operationType: 'plus'
    },
    'plusDodging': {
        name: 'plusDodging',
        displayColor: 'green',
        displayName: '回避率',
        unit: 'number',
        operationType: 'plus'
    },
    'multiplyAllStatus': {
        name: 'multiplyAllStatus',
        displayColor: 'green',
        displayName: '全ての能力値',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyStrength': {
        name: 'multiplyStrength',
        displayColor: 'green',
        displayName: '力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyVitality': {
        name: 'multiplyVitality',
        displayColor: 'green',
        displayName: '体力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyIntelligence': {
        name: 'multiplyIntelligence',
        displayColor: 'green',
        displayName: '知能',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyAgility': {
        name: 'multiplyAgility',
        displayColor: 'green',
        displayName: '敏捷性',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMentality': {
        name: 'multiplyMentality',
        displayColor: 'green',
        displayName: '精神力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDexterity': {
        name: 'multiplyDexterity',
        displayColor: 'green',
        displayName: '瞬発力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyHitPoint': {
        name: 'multiplyHitPoint',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMagicPoint': {
        name: 'multiplyMagicPoint',
        displayColor: 'green',
        displayName: 'MP',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyAttack': {
        name: 'multiplyAttack',
        displayColor: 'green',
        displayName: '攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMeleeAttack': {
        name: 'multiplyMeleeAttack',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyRangeAttack': {
        name: 'multiplyRangeAttack',
        displayColor: 'green',
        displayName: '遠距離攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMagicAttack': {
        name: 'multiplyMagicAttack',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDefense': {
        name: 'multiplyDefense',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPhysicalDefense': {
        name: 'multiplyPhysicalDefense',
        displayColor: 'green',
        displayName: '物理防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMagicalDefense': {
        name: 'multiplyMagicalDefense',
        displayColor: 'green',
        displayName: '魔法防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyArmorDefense': {
        name: 'multiplyArmorDefense',
        displayColor: 'green',
        displayName: '鎧防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyShieldDefense': {
        name: 'multiplyShieldDefense',
        displayColor: 'green',
        displayName: '盾防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPVEAttack': {
        name: 'multiplyPVEAttack',
        displayColor: 'green',
        displayName: 'PvE攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPVEDefense': {
        name: 'multiplyPVEDefense',
        displayColor: 'green',
        displayName: 'PvE防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPVPAttack': {
        name: 'multiplyPVPAttack',
        displayColor: 'green',
        displayName: 'PvP攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPVPDefense': {
        name: 'multiplyPVPDefense',
        displayColor: 'green',
        displayName: 'PvP防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplySkillAttack': {
        name: 'multiplySkillAttack',
        displayColor: 'green',
        displayName: 'スキル攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplySkillDefense': {
        name: 'multiplySkillDefense',
        displayColor: 'green',
        displayName: 'スキル防御力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMovementSpeed': {
        name: 'multiplyMovingSpeed',
        displayColor: 'green',
        displayName: '移動速度',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyRideSpeed': {
        name: 'multiplyRideSpeed',
        displayColor: 'green',
        displayName: '乗騎速度',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyAttackSpeed': {
        name: 'multiplyAttackSpeed',
        displayColor: 'green',
        displayName: '攻撃速度',
        unit: 'percent',
        operationType: 'multiply'
    },
    // not affecting to displayed status
    'multiplyDamageReflectionRate': {
        name: 'multiplyDamageReflectionRate',
        displayColor: 'green',
        displayName: 'ダメージ反射率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyNegationRate': {
        name: 'multiplyNegationRate',
        displayColor: 'green',
        displayName: '攻撃無効率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPotionRecovery': {
        name: 'multiplyPotionRecovery',
        displayColor: 'green',
        displayName: 'ポーション回復量',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyCriticalDamage': {
        name: 'multiplyCriticalDamage',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyCriticalRate': {
        name: 'multiplyCriticalRate',
        displayColor: 'green',
        displayName: 'クリティカル率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyShieldBlockRate': {
        name: 'multiplyShieldBlockRate',
        displayColor: 'green',
        displayName: '盾ブロック率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPhysicalBlockRate': {
        name: 'multiplyPhysicalBlockRate',
        displayColor: 'green',
        displayName: '物理ブロック率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyPhysicalParryRate': {
        name: 'multiplyPhysicalParryRate',
        displayColor: 'green',
        displayName: '物理パリィ率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMagicalBlockRate': {
        name: 'multiplyMagicalBlockRate',
        displayColor: 'green',
        displayName: '魔法ブロック率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyStunResistRate': {
        name: 'multiplyStanResistRate',
        displayColor: 'green',
        displayName: 'スタン耐性率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyIncreaseDamageDealt': {
        name: 'multiplyIncreaseDamageDealt',
        displayColor: 'green',
        displayName: 'ダメージ増加率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDecreaseDamageTaken': {
        name: 'multiplyDecreaseDamageTaken',
        displayColor: 'green',
        displayName: 'ダメージ減少率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDecreaseDamageTakenMultiplyMentality': {
        name: 'multiplyDecreaseDamageTakenMultiplyMentality',
        displayColor: 'green',
        displayName: 'ダメージ減少率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDecreaseCriticalDamageTaken': {
        name: 'multiplyDecreaseCriticalDamageTaken',
        displayColor: 'green',
        displayName: 'クリティカルダメージ減少率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDecreaseCriticalDamageTakenMultiplyVitality': {
        name: 'multiplyDecreaseCriticalDamageTakenMultiplyVitality',
        displayColor: 'green',
        displayName: 'クリティカルダメージ減少率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDecreaseCriticalDamageTakenMultiplyIntelligence': {
        name: 'multiplyDecreaseCriticalDamageTakenMultiplyIntelligence',
        displayColor: 'green',
        displayName: 'クリティカルダメージ減少率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyRangeSkillDamage': {
        name: 'multiplyRangeSkillDamage',
        displayColor: 'green',
        displayName: '範囲スキルダメージ増加率',
        unit: 'percent',
        operationType: 'multiply'
    },
    // critical damage dependents on any status
    'plusCriticalDamageMultiplyAgility': {
        name: 'plusCriticalDamageMultiplyAgility',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },
    'plusCriticalDamageMultiplyDexterity': {
        name: 'plusCriticalDamageMultiplyDexterity',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },
    'plusCriticalDamageMultiplyVitality': {
        name: 'plusCriticalDamageMultiplyVitality',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },
    'plusCriticalDamageMultiplyIntelligence': {
        name: 'plusCriticalDamageMultiplyIntelligence',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },
    'plusCriticalDamageMultiplyMentality': {
        name: 'plusCriticalDamageMultiplyMentality',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },
    'plusCriticalDamageMultiplyStrength': {
        name: 'plusCriticalDamageMultiplyStrength',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
        operationType: 'multiply'
    },

    // weapon master
    'multiplyWeaponAttack': {
        name: 'multiplyWeaponAttack',
        displayColor: 'green',
        displayName: '武器攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplySubWeaponAttack': {
        name: 'multiplySubWeaponAttack',
        displayColor: 'green',
        displayName: 'サブ武器攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyArrowAttack': {
        name: 'multiplyArrowAttack',
        displayColor: 'green',
        displayName: '矢攻撃力',
        unit: 'percent',
        operationType: 'multiply'
    },
    // sword / polearm / dualsword mastery
    'plusMeleeAttackMultiplyStrength': {
        name: 'plusMeleeAttackMultiplyStrength',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    // blunt / zen mastery for dragon knight
    'plusMeleeAttackMultiplyVitality': {
        name: 'plusMeleeAttackMultiplyVitality',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    // staff mastery
    'plusMagicAttackMultiplyMentality': {
        name: 'plusMagicAttackMultiplyMentality',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    'plusMagicAttackMultiplyIntelligence': {
        name: 'plusMagicAttackMultiplyIntelligence',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    // zen mastery for dragon sage
    'plusMeleeAttackMultiplyIntelligence': {
        name: 'plusMeleeAttackMultiplyIntelligence',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    // crosbow / bow mastery
    'plusRangeAttackMultiplyAgility': {
        name: 'plusRangeAttackMultiplyAgility',
        displayColor: 'green',
        displayName: '遠距離攻撃力',
        unit: 'number',
        operationType: 'plus'
    },
    // katar mastery
    'plusMeleeAttackMultiplyDexterity': {
        name: 'plusMeleeAttackMultiplyDexterity',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
        operationType: 'plus'
    },

    'plusDefenseMultiplyIntelligence': {
        name: 'plusDefenseMultiplyIntelligence',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'number',
        operationType: 'plus'
    },

    'multiplyHitPointAbsorbDamageRate': {
        name: 'multiplyHitPointAbsorbDamageRate',
        displayColor: 'green',
        displayName: 'HP吸収率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyMagicPointAbsorbDamageRate': {
        name: 'multiplyMagicPointAbsorbDamageRate',
        displayColor: 'green',
        displayName: 'MP吸収率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyAccuracy': {
        name: 'multiplyAccuracy',
        displayColor: 'green',
        displayName: '命中率',
        unit: 'percent',
        operationType: 'multiply'
    },
    'multiplyDodging': {
        name: 'multiplyDodging',
        displayColor: 'green',
        displayName: '回避率',
        unit: 'percent',
        operationType: 'multiply'
    },


} as const;


export const BuiltinOptionKeys = Object.keys(BuiltinOptions) as Array<keyof typeof BuiltinOptions>;
export type BuiltinOptionKeyType = (typeof BuiltinOptionKeys)[number];
