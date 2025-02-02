export type Option = {
    name: string;
    displayColor: string;
    displayName: string;
    unit: OptionUnit;
};


type OptionUnit = "percent" | "number";

export const BuiltinOptions = {
    'plusAllOption': {
        name: 'plusAllOption',
        displayColor: 'green',
        displayName: '全ての能力値',
        unit: 'number',
    },
    'plusStrength': {
        name: 'plusStrength',
        displayColor: 'green',
        displayName: '力',
        unit: 'number',
    },
    'plusVitality': {
        name: 'plusVitality',
        displayColor: 'green',
        displayName: '体力',
        unit: 'number',
    },
    'plusIntelligence': {
        name: 'plusIntelligence',
        displayColor: 'green',
        displayName: '知能',
        unit: 'number',
    },
    'plusAgility': {
        name: 'plusAgility',
        displayColor: 'green',
        displayName: '敏捷性',
        unit: 'number',
    },
    'plusMentality': {
        name: 'plusMentality',
        displayColor: 'green',
        displayName: '精神力',
        unit: 'number',
    },
    'plusDexterity': {
        name: 'plusDexterity',
        displayColor: 'green',
        displayName: '瞬発力',
        unit: 'number',
    },
    'plusHitPoint': {
        name: 'plusHitPoint',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'number',
    },
    'plusMagicPoint': {
        name: 'plusMagicPoint',
        displayColor: 'green',
        displayName: 'MP',
        unit: 'number',
    },
    'plusHitPointMultiplyStrength': {
        name: 'plusHitPointMultiplyStrength',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'number',
    },
    'plusHitPointMultiplyAgility': {
        name: 'plusHitPointMultiplyAgility',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'number',
    },
    'plusAttack': {
        name: 'plusAttack',
        displayColor: 'green',
        displayName: '攻撃力',
        unit: 'number',
    },
    'plusStatusAttack': {
        name: 'plusStatusAttack',
        displayColor: 'purple',
        displayName: '攻撃力',
        unit: 'number',
    },
    'plusMeleeAttack': {
        name: 'plusMeleeAttack',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
    },
    'plusRangeAttack': {
        name: 'plusRangeAttack',
        displayColor: 'green',
        displayName: '遠距離攻撃力',
        unit: 'number',
    },
    'plusMagicAttack': {
        name: 'plusMagicAttack',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'number',
    },
    'plusDefense': {
        name: 'plusDefense',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'number',
    },
    'multiplyAllOption': {
        name: 'multiplyAllOption',
        displayColor: 'green',
        displayName: '全ての能力値',
        unit: 'percent',
    },
    'multiplyStrength': {
        name: 'multiplyStrength',
        displayColor: 'green',
        displayName: '力',
        unit: 'percent',
    },
    'multiplyVitality': {
        name: 'multiplyVitality',
        displayColor: 'green',
        displayName: '体力',
        unit: 'percent',
    },
    'multiplyIntelligence': {
        name: 'multiplyIntelligence',
        displayColor: 'green',
        displayName: '知能',
        unit: 'percent',
    },
    'multiplyAgility': {
        name: 'multiplyAgility',
        displayColor: 'green',
        displayName: '敏捷性',
        unit: 'percent',
    },
    'multiplyMentality': {
        name: 'multiplyMentality',
        displayColor: 'green',
        displayName: '精神力',
        unit: 'percent',
    },
    'multiplyDexterity': {
        name: 'multiplyDexterity',
        displayColor: 'green',
        displayName: '瞬発力',
        unit: 'percent',
    },
    'multiplyHitPoint': {
        name: 'multiplyHitPoint',
        displayColor: 'green',
        displayName: 'HP',
        unit: 'percent',
    },
    'multiplyMagicPoint': {
        name: 'multiplyMagicPoint',
        displayColor: 'green',
        displayName: 'MP',
        unit: 'percent',
    },
    'multiplyAttack': {
        name: 'multiplyAttack',
        displayColor: 'green',
        displayName: '攻撃力',
        unit: 'percent',
    },
    'multiplyMeleeAttack': {
        name: 'multiplyMeleeAttack',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'percent',
    },
    'multiplyRangeAttack': {
        name: 'multiplyRangeAttack',
        displayColor: 'green',
        displayName: '遠距離攻撃力',
        unit: 'percent',
    },
    'multiplyMagicAttack': {
        name: 'multiplyMagicAttack',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'percent',
    },
    'multiplyDefense': {
        name: 'multiplyDefense',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'percent',
    },
    'multiplyPhysicalDefense': {
        name: 'multiplyPhysicalDefense',
        displayColor: 'green',
        displayName: '物理防御力',
        unit: 'percent',
    },
    'multiplyMagicalDefense': {
        name: 'multiplyMagicalDefense',
        displayColor: 'green',
        displayName: '魔法防御力',
        unit: 'percent',
    },
    'multiplyArmorDefense': {
        name: 'multiplyArmorDefense',
        displayColor: 'green',
        displayName: '鎧防御力',
        unit: 'percent',
    },
    'multiplyShieldDefense': {
        name: 'multiplyShieldDefense',
        displayColor: 'green',
        displayName: '盾防御力',
        unit: 'percent',
    },
    'multiplyPVEAttack': {
        name: 'multiplyPVEAttack',
        displayColor: 'green',
        displayName: 'PvE攻撃力',
        unit: 'percent',
    },
    'multiplyPVEDefense': {
        name: 'multiplyPVEDefense',
        displayColor: 'green',
        displayName: 'PvE防御力',
        unit: 'percent',
    },
    'multiplyPVPAttack': {
        name: 'multiplyPVPAttack',
        displayColor: 'green',
        displayName: 'PvP攻撃力',
        unit: 'percent',
    },
    'multiplyPVPDefense': {
        name: 'multiplyPVPDefense',
        displayColor: 'green',
        displayName: 'PvP防御力',
        unit: 'percent',
    },
    'multiplySkillAttack': {
        name: 'multiplySkillAttack',
        displayColor: 'green',
        displayName: 'スキル攻撃力',
        unit: 'percent',
    },
    'multiplySkillDefense': {
        name: 'multiplySkillDefense',
        displayColor: 'green',
        displayName: 'スキル防御力',
        unit: 'percent',
    },
    'multiplyEvasionRate': {
        name: 'multiplyEvasionRate',
        displayColor: 'green',
        displayName: '回避率',
        unit: 'percent',
    },
    'multiplyMovementSpeed': {
        name: 'multiplyMovingSpeed',
        displayColor: 'green',
        displayName: '移動速度',
        unit: 'percent',
    },
    'multiplyRideSpeed': {
        name: 'multiplyRideSpeed',
        displayColor: 'green',
        displayName: '乗騎速度',
        unit: 'percent',
    },
    'multiplyAttackSpeed': {
        name: 'multiplyAttackSpeed',
        displayColor: 'green',
        displayName: '攻撃速度',
        unit: 'percent',
    },
    // not affecting to displayed status
    'multiplyDamageReflectionRate': {
        name: 'multiplyDamageReflectionRate',
        displayColor: 'green',
        displayName: 'ダメージ反射率',
        unit: 'percent',
    },
    'multiplyNegationRate': {
        name: 'multiplyNegationRate',
        displayColor: 'green',
        displayName: '攻撃無効率',
        unit: 'percent',
    },
    'multiplyPotionRecovery': {
        name: 'multiplyPotionRecovery',
        displayColor: 'green',
        displayName: 'ポーション回復量',
        unit: 'percent',
    },
    'multiplyCriticalDamage': {
        name: 'multiplyCriticalDamage',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },
    'multiplyCriticalRate': {
        name: 'multiplyCriticalRate',
        displayColor: 'green',
        displayName: 'クリティカル率',
        unit: 'percent',
    },
    'multiplyShieldBlockRate': {
        name: 'multiplyShieldBlockRate',
        displayColor: 'green',
        displayName: '盾ブロック率',
        unit: 'percent',
    },
    'multiplyPhysicalBlockRate': {
        name: 'multiplyPhysicalBlockRate',
        displayColor: 'green',
        displayName: '物理ブロック率',
        unit: 'percent',
    },
    'multiplyPhysicalParryRate': {
        name: 'multiplyPhysicalParryRate',
        displayColor: 'green',
        displayName: '物理パリィ率',
        unit: 'percent',
    },
    'multiplyMagicalBlockRate': {
        name: 'multiplyMagicalBlockRate',
        displayColor: 'green',
        displayName: '魔法ブロック率',
        unit: 'percent',
    },
    'multiplyStunResistRate': {
        name: 'multiplyStanResistRate',
        displayColor: 'green',
        displayName: 'スタン耐性率',
        unit: 'percent',
    },
    'multiplyIncreaseDamageDealt': {
        name: 'multiplyIncreaseDamageDealt',
        displayColor: 'green',
        displayName: 'ダメージ増加率',
        unit: 'percent',
    },
    'multiplyDecreaseDamageTaken': {
        name: 'multiplyDecreaseDamageTaken',
        displayColor: 'green',
        displayName: 'ダメージ減少率',
        unit: 'percent',
    },
    'multiplyDecreaseDamageTakenMultiplyMentality': {
        name: 'multiplyDecreaseDamageTakenMultiplyMentality',
        displayColor: 'green',
        displayName: 'ダメージ減少率',
        unit: 'percent',
    },
    'multiplyDecreaseCriticalDamageTaken': {
        name: 'multiplyDecreaseCriticalDamageTaken',
        displayColor: 'green',
        displayName: 'クリティカルダメージ減少率',
        unit: 'percent',
    },
    'multiplyDecreaseCriticalDamageTakenMultiplyVitality': {
        name: 'multiplyDecreaseCriticalDamageTakenMultiplyVitality',
        displayColor: 'green',
        displayName: 'クリティカルダメージ減少率',
        unit: 'percent',
    },
    'multiplyDecreaseCriticalDamageTakenMultiplyIntelligence': {
        name: 'multiplyDecreaseCriticalDamageTakenMultiplyIntelligence',
        displayColor: 'green',
        displayName: 'クリティカルダメージ減少率',
        unit: 'percent',
    },
    'multiplyRangeSkillDamage': {
        name: 'multiplyRangeSkillDamage',
        displayColor: 'green',
        displayName: '範囲スキルダメージ増加率',
        unit: 'percent',
    },
    // critical damage dependents on any status
    'plusCriticalDamageMultiplyAgility': {
        name: 'plusCriticalDamageMultiplyAgility',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },
    'plusCriticalDamageMultiplyDexterity': {
        name: 'plusCriticalDamageMultiplyDexterity',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },
    'plusCriticalDamageMultiplyVitality': {
        name: 'plusCriticalDamageMultiplyVitality',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },
    'plusCriticalDamageMultiplyIntelligence': {
        name: 'plusCriticalDamageMultiplyIntelligence',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },
    'plusCriticalDamageMultiplyMentality': {
        name: 'plusCriticalDamageMultiplyMentality',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },
    'plusCriticalDamageMultiplyStrength': {
        name: 'plusCriticalDamageMultiplyStrength',
        displayColor: 'green',
        displayName: 'クリティカルダメージ',
        unit: 'percent',
    },

    // weapon master
    'multiplyWeaponAttack': {
        name: 'multiplyWeaponAttack',
        displayColor: 'green',
        displayName: '武器攻撃力',
        unit: 'percent',
    },
    'multiplySubWeaponAttack': {
        name: 'multiplySubWeaponAttack',
        displayColor: 'green',
        displayName: 'サブ武器攻撃力',
        unit: 'percent',
    },
    'multiplyArrowAttack': {
        name: 'multiplyArrowAttack',
        displayColor: 'green',
        displayName: '矢攻撃力',
        unit: 'percent',
    },
    // sword / polearm / dualsword mastery
    'plusMeleeAttackMultiplyStrength': {
        name: 'plusMeleeAttackMultiplyStrength',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
    },
    // blunt / zen mastery for dragon knight
    'plusMeleeAttackMultiplyVitality': {
        name: 'plusMeleeAttackMultiplyVitality',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
    },
    // staff mastery
    'plusMagicAttackMultiplyMentality': {
        name: 'plusMagicAttackMultiplyMentality',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'number',
    },
    'plusMagicAttackMultiplyIntelligence': {
        name: 'plusMagicAttackMultiplyIntelligence',
        displayColor: 'green',
        displayName: '魔法攻撃力',
        unit: 'number',
    },
    // zen mastery for dragon sage
    'plusMeleeAttackMultiplyIntelligence': {
        name: 'plusMeleeAttackMultiplyIntelligence',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
    },
    // crosbow / bow mastery
    'plusRangeAttackMultiplyAgility': {
        name: 'plusRangeAttackMultiplyAgility',
        displayColor: 'green',
        displayName: '遠距離攻撃力',
        unit: 'number',
    },
    // katar mastery
    'plusMeleeAttackMultiplyDexterity': {
        name: 'plusMeleeAttackMultiplyDexterity',
        displayColor: 'green',
        displayName: '近接攻撃力',
        unit: 'number',
    },

    'plusDefenseMultiplyIntelligence': {
        name: 'plusDefenseMultiplyIntelligence',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'number',
    },

    'multiplyHitPointAbsorbDamageRate': {
        name: 'multiplyHitPointAbsorbDamageRate',
        displayColor: 'green',
        displayName: 'HP吸収率',
        unit: 'percent',
    },
    'multiplyMagicPointAbsorbDamageRate': {
        name: 'multiplyMagicPointAbsorbDamageRate',
        displayColor: 'green',
        displayName: 'MP吸収率',
        unit: 'percent',
    },


} as const;


export const BuiltinOptionKeys = Object.keys(BuiltinOptions) as Array<keyof typeof BuiltinOptions>;
export type BuiltinOptionKeyType = (typeof BuiltinOptionKeys)[number];
