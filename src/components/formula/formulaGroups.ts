import { CharactorStateType } from '../../modules/character/constants';
import { DEFAULT_FORMULAS } from '../../static/default-formulas';
import { FormulaComponents, parseFormulaString } from './formulaDescription';

export interface FormulaEntry {
    id: CharactorStateType;
    name: string;
    formula: string;
    components: FormulaComponents;
}

const createFormulaEntry = (id: keyof typeof DEFAULT_FORMULAS & CharactorStateType, name: string): FormulaEntry => {
    const formula = DEFAULT_FORMULAS[id];

    return {
        id,
        name,
        formula,
        components: parseFormulaString(formula),
    };
};

export const basicStatusFormulas: FormulaEntry[] = [
    createFormulaEntry('__strength', '筋力 (Strength)'),
    createFormulaEntry('__vitality', '体力 (Vitality)'),
    createFormulaEntry('__dexterity', '器用 (Dexterity)'),
    createFormulaEntry('__intelligence', '知性 (Intelligence)'),
    createFormulaEntry('__agility', '敏捷 (Agility)'),
    createFormulaEntry('__mentality', '精神 (Mentality)'),
];

export const hpMpFormulas: FormulaEntry[] = [
    createFormulaEntry('__hitPoint', 'HP (Hit Point)'),
    createFormulaEntry('__magicPoint', 'MP (Magic Point)'),
];

export const attackFormulas: FormulaEntry[] = [
    createFormulaEntry('__meleeAttack', '近接攻撃力 (Melee Attack)'),
    createFormulaEntry('__magicAttack', '魔法攻撃力 (Magic Attack)'),
    createFormulaEntry('__rangeAttack', '遠距離攻撃力 (Range Attack)'),
];

export const defenseFormulas: FormulaEntry[] = [
    createFormulaEntry('__physicalDefense', '物理防御力 (Physical Defense)'),
    createFormulaEntry('__magicalDefense', '魔法防御力 (Magical Defense)'),
    createFormulaEntry('__accuracy', '命中率 (Accuracy)'),
    createFormulaEntry('__dodging', '回避率 (Dodging)'),
    createFormulaEntry('__resistance', '全体抵抗 (Resistance)'),
];

export const otherFormulas: FormulaEntry[] = [
    createFormulaEntry('__movementSpeed', '移動速度 (Movement Speed)'),
    createFormulaEntry('__attackSpeed', '攻撃速度 (Attack Speed)'),
    createFormulaEntry('__hitPointRecovery', 'HP回復 (HP Recovery)'),
    createFormulaEntry('__magicPointRecovery', 'MP回復 (MP Recovery)'),
];
