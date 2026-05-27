import type { CharacterValueKey } from "../../modules/character/constants";

export type ComparisonValueItem = {
    key: CharacterValueKey;
    title: string;
};

export const comparisonValueItems: ComparisonValueItem[] = [
    { key: "__meleeAttack", title: "近距離攻撃力" },
    { key: "__rangeAttack", title: "遠距離攻撃力" },
    { key: "__magicAttack", title: "魔法攻撃力" },
    { key: "__physicalDefense", title: "物理防御力" },
    { key: "__magicalDefense", title: "魔法防御力" },
    { key: "__hitPoint", title: "HP" },
    { key: "__magicPoint", title: "MP" },
    { key: "__accuracy", title: "命中率" },
    { key: "__dodging", title: "回避率" },
    { key: "__resistance", title: "全体 抵抗" },
    { key: "__movementSpeed", title: "移動速度" },
    { key: "__attackSpeed", title: "攻撃速度" },
    { key: "__hitPointRecovery", title: "HP回復" },
    { key: "__magicPointRecovery", title: "MP回復" },
];
