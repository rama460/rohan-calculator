
type Option = {
    name: string;
    displayColor: string;
    displayName: string;
    unit: OptionUnit;
};

type OptionUnit = "percent" | "number";

type Options = {
    [key: string]: Option;
}
export const BuiltinOptions: Options = {
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
    'plusDeffense': {
        name: 'plusDeffense',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'number',
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
    'multiplyDeffense': {
        name: 'multiplyDeffense',
        displayColor: 'green',
        displayName: '防御力',
        unit: 'percent',
    },
    'multiplyPVEAttack': {
        name: 'multiplyPVEAttack',
        displayColor: 'green',
        displayName: 'PvE攻撃力',
        unit: 'percent',
    },
    'multiplyPVEDeffense': {
        name: 'multiplyPVEDeffense',
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
    'multiplyPVPDeffense': {
        name: 'multiplyPVPDeffense',
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
    'multiplySkillDeffense': {
        name: 'multiplySkillDeffense',
        displayColor: 'green',
        displayName: 'スキル防御力',
        unit: 'percent',
    },
    // not affecting to displayed status
    'multiplyReflectionRate': {
        name: 'multiplyReflectionRate',
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
}