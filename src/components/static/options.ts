
type FixedOption = {
    name: string;
    displayColor: string;
    displayName: string;
    unit: OptionUnit;
};

export type Option = {
    value: number;
} & FixedOption;
type OptionUnit = "percent" | "number";

const createOptionTemplate = (fixedOption: FixedOption) => (value: number): Option => {
    return {
        ...fixedOption,
        value: value,
    };
}


export const plusAllOption = createOptionTemplate({
    name: 'plusAllOption',
    displayColor: 'green',
    displayName: '全ての能力値',
    unit: 'number',
});

export const plusStrength = createOptionTemplate({
    name: 'plusStrength',
    displayColor: 'green',
    displayName: '力',
    unit: 'number',
});

export const plusVitality = createOptionTemplate({
    name: 'plusVitality',
    displayColor: 'green',
    displayName: '体力',
    unit: 'number',
});

export const plusIntelligence = createOptionTemplate({
    name: 'plusIntelligence',
    displayColor: 'green',
    displayName: '知能',
    unit: 'number',
});

export const plusAgility = createOptionTemplate({
    name: 'plusAgility',
    displayColor: 'green',
    displayName: '敏捷性',
    unit: 'number',
});

export const plusMentality = createOptionTemplate({
    name: 'plusMentality',
    displayColor: 'green',
    displayName: '精神力',
    unit: 'number',
});

export const plusDexterity = createOptionTemplate({
    name: 'plusDexterity',
    displayColor: 'green',
    displayName: '瞬発力',
    unit: 'number',
});

export const plusHitPoint = createOptionTemplate({
    name: 'plusHitPoint',
    displayColor: 'green',
    displayName: 'HP',
    unit: 'number',
});

export const plusMagicPoint = createOptionTemplate({
    name: 'plusMagicPoint',
    displayColor: 'green',
    displayName: 'MP',
    unit: 'number',
});


export const plusAttack = createOptionTemplate({
    name: 'plusAttack',
    displayColor: 'green',
    displayName: '攻撃力',
    unit: 'number',
});

export const plusStatusAttack = createOptionTemplate({
    name: 'plusStatusAttack',
    displayColor: 'purple',
    displayName: '攻撃力',
    unit: 'number',
});

export const plusDeffense = createOptionTemplate({
    name: 'plusDeffense',
    displayColor: 'green',
    displayName: '防御力',
    unit: 'number',
});


export const multiplyHitPoint = createOptionTemplate({
    name: 'multiplyHitPoint',
    displayColor: 'green',
    displayName: 'HP',
    unit: 'percent',
});

export const multiplyMagicPoint = createOptionTemplate({
    name: 'multiplyMagicPoint',
    displayColor: 'green',
    displayName: 'MP',
    unit: 'percent',
});


export const multiplyAttack = createOptionTemplate({
    name: 'multiplyAttack',
    displayColor: 'green',
    displayName: '攻撃力',
    unit: 'percent',
});

export const multiplyDeffense = createOptionTemplate({
    name: 'multiplyDeffense',
    displayColor: 'green',
    displayName: '防御力',
    unit: 'percent',
});

export const multiplyPVEAttack = createOptionTemplate({
    name: 'multiplyPVEAttack',
    displayColor: 'green',
    displayName: 'PvE攻撃力',
    unit: 'percent',
});

export const multiplyPVEDeffense = createOptionTemplate({
    name: 'multiplyPVEDeffense',
    displayColor: 'green',
    displayName: 'PvE防御力',
    unit: 'percent',
});

export const multiplyPVPAttack = createOptionTemplate({
    name: 'multiplyPVPAttack',
    displayColor: 'green',
    displayName: 'PvP攻撃力',
    unit: 'percent',
});

export const multiplyPVPDeffense = createOptionTemplate({
    name: 'multiplyPVPDeffense',
    displayColor: 'green',
    displayName: 'PvP防御力',
    unit: 'percent',
});

export const multiplySkillAttack = createOptionTemplate({
    name: 'multiplySkillAttack',
    displayColor: 'green',
    displayName: 'スキル攻撃力',
    unit: 'percent',
});

export const multiplySkillDeffense = createOptionTemplate({
    name: 'multiplySkillDeffense',
    displayColor: 'green',
    displayName: 'スキル防御力',
    unit: 'percent',
});


// not affecting to displayed status
export const multiplyReflectionRate = createOptionTemplate({
    name: 'multiplyReflectionRate',
    displayColor: 'green',
    displayName: 'ダメージ反射率',
    unit: 'percent',
});

export const multiplyNegationRate = createOptionTemplate({
    name: 'multiplyNegationRate',
    displayColor: 'green',
    displayName: '攻撃無効率',
    unit: 'percent',
});
export const multiplyPotionRecovery = createOptionTemplate({
    name: 'multiplyPotionRecovery',
    displayColor: 'green',
    displayName: 'ポーション回復量',
    unit: 'percent',
});