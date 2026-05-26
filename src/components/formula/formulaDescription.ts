import { BuiltinOptions } from "../../static/options";

export type FormulaComponents = {
    basicVariables: string[];
    specialVariables: string[];
    raceVariables: string[];
    mathFunctions: string[];
    otherVariables: string[];
};

const getMathFunctionDescription = (func: string): string => {
    const descriptions: Record<string, string> = {
        floor: "小数点以下切り捨て",
        ceil: "小数点以下切り上げ",
        round: "四捨五入",
        abs: "絶対値",
        max: "最大値を選択",
        min: "最小値を選択",
        pow: "べき乗計算",
        sqrt: "平方根",
        sin: "サイン関数",
        cos: "コサイン関数",
        tan: "タンジェント関数",
    };
    return descriptions[func] || "数学関数";
};

export const parseFormulaString = (formulaStr: string): FormulaComponents => {
    const components: FormulaComponents = {
        basicVariables: [],
        specialVariables: [],
        raceVariables: [],
        mathFunctions: [],
        otherVariables: [],
    };

    const basicVarMap: Record<string, string> = {
        level: "キャラクターレベル",
        heroLevel: "ヒーローレベル",
        raceid: "種族 ID",
        jobid: "職業 ID",
        strength: "基本筋力値",
        vitality: "基本体力値",
        dexterity: "基本器用値",
        intelligence: "基本知性値",
        agility: "基本敏捷値",
        mentality: "基本精神値",
    };

    Object.entries(basicVarMap).forEach(([varName, description]) => {
        if (formulaStr.includes(varName)) {
            components.basicVariables.push(`${varName}: ${description}`);
        }
    });

    const specialVarMap: Record<string, string> = {
        "${strength}": "計算済み筋力値",
        "${vitality}": "計算済み体力値",
        "${dexterity}": "計算済み器用値",
        "${intelligence}": "計算済み知性値",
        "${agility}": "計算済み敏捷値",
        "${mentality}": "計算済み精神値",
    };

    Object.entries(specialVarMap).forEach(([varName, description]) => {
        if (formulaStr.includes(varName)) {
            components.specialVariables.push(`${varName}: ${description}`);
        }
    });

    const raceVarMap: Record<string, string> = {
        raceHitPointPerLevel: "種族ごとのレベル当たりHP増加量",
        raceMagicPointPerLevel: "種族ごとのレベル当たりMP増加量",
        raceMovementSpeed: "種族ごとの基本移動速度",
    };

    Object.entries(raceVarMap).forEach(([varName, description]) => {
        if (formulaStr.includes(varName)) {
            components.raceVariables.push(`${varName}: ${description}`);
        }
    });

    const mathFunctions = ["floor", "ceil", "round", "abs", "max", "min", "pow", "sqrt"];
    mathFunctions.forEach(func => {
        if (formulaStr.includes(`${func}(`)) {
            components.mathFunctions.push(`${func}(): 数学関数 - ${getMathFunctionDescription(func)}`);
        }
    });

    Object.entries(BuiltinOptions).forEach(([optionKey, optionDef]) => {
        if (optionKey !== "none" && formulaStr.includes(optionKey)) {
            const category = optionKey.startsWith("plus") ? "加算ボーナス" :
                optionKey.startsWith("multiply") ? "乗算ボーナス" :
                    optionKey.startsWith("weapon") ? "武器関連" :
                        optionKey.startsWith("armor") || optionKey.startsWith("shield") ? "防具関連" :
                            "その他パラメータ";
            components.otherVariables.push(`${optionKey}: ${optionDef.displayName} (${category})`);
        }
    });

    return components;
};
