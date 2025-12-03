import { atom } from "jotai";
import { allOptionAggregorStateFamily } from "./options";
import { atomFamily } from "jotai/utils";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../static/options";
import { BaseOptionKeyType, baseOptionStateFamily } from "./bases";
import { races } from "../../static/races";
import { FormulaContext, formulaStateFamily } from "./custom-formulas";
import { executeCustomFormula } from "../formula/formula-calculator";

export const charactorStateNames = [
    "__strength",
    "__vitality",
    "__dexterity",
    "__intelligence",
    "__agility",
    "__mentality",
    "__hitPoint",
    "__magicPoint",
    "__meleeAttack",
    "__magicAttack",
    "__rangeAttack",
    "__physicalDefense",
    "__magicalDefense",
    "__accuracy",
    "__dodging",
    "__resistance",
    "__hitPointRecovery",
    "__magicPointRecovery",
    "__movementSpeed",
    "__attackSpeed",
] as const;

export type CharactorStateType = typeof charactorStateNames[number];

// 統合計算システムで使用するゲッター関数を作成
function createCalculationGetter(get: any): (key: string) => number {
    return (key: string): number => {
        if (BuiltinOptionKeys.includes(key as BuiltinOptionKeyType)) {
            return get(allOptionAggregorStateFamily(key as BuiltinOptionKeyType));
        } else {
            return get(baseOptionStateFamily(key as BaseOptionKeyType));
        }
    };
}

// 特殊変数のマッピング関数
function createSpecialVariableGetter(get: any): (key: string) => number {
    return (key: string): number => {
        // 種族関連の特殊変数を処理
        if (key.startsWith('race') || key.startsWith('initialStatus')) {
            const raceid = get(baseOptionStateFamily('raceid'));
            const raceData = races[raceid];

            switch (key) {
                case 'raceHitPointPerLevel':
                    return raceData.hitPointPerLevel;
                case 'raceMagicPointPerLevel':
                    return raceData.magicPointPerLevel;
                case 'raceMovementSpeed':
                    return raceData.movementSpeed;
                case 'initialStatusStrength':
                    return raceData.initialStatus.strength;
                case 'initialStatusVitality':
                    return raceData.initialStatus.vitality;
                case 'initialStatusIntelligence':
                    return raceData.initialStatus.intelligence;
                case 'initialStatusAgility':
                    return raceData.initialStatus.agility;
                case 'initialStatusMentality':
                    return raceData.initialStatus.mentality;
                case 'initialStatusDexterity':
                    return raceData.initialStatus.dexterity;
            }
        }

        // 通常の変数は基本ゲッターを使用
        return createCalculationGetter(get)(key);
    };
}

export const charactorStateFamily = atomFamily((key: CharactorStateType) => {
    return atom((get) => {
        // 統合計算式を取得（デフォルトまたはカスタム）
        const formula = get(formulaStateFamily(key));

        try {
            // 基本的なゲッター関数
            const basicGetter = createCalculationGetter(get);

            // 特殊変数を含む拡張ゲッター関数
            const extendedGetter = createSpecialVariableGetter(get);

            // 基本的なコンテキストを作成（種族依存パラメータを含む）
            const baseContext: FormulaContext = {
                level: get(baseOptionStateFamily("level")),
                heroLevel: get(baseOptionStateFamily("heroLevel")),
                raceid: get(baseOptionStateFamily("raceid")),
                jobid: get(baseOptionStateFamily("jobid")),
                strength: basicGetter("strength"),
                vitality: basicGetter("vitality"),
                dexterity: basicGetter("dexterity"),
                intelligence: basicGetter("intelligence"),
                agility: basicGetter("agility"),
                mentality: basicGetter("mentality"),
                // 種族依存パラメータ
                raceHitPointPerLevel: extendedGetter("raceHitPointPerLevel"),
                raceMagicPointPerLevel: extendedGetter("raceMagicPointPerLevel"),
                raceMovementSpeed: extendedGetter("raceMovementSpeed"),
                initialStatusStrength: extendedGetter("initialStatusStrength"),
                initialStatusVitality: extendedGetter("initialStatusVitality"),
                initialStatusIntelligence: extendedGetter("initialStatusIntelligence"),
                initialStatusAgility: extendedGetter("initialStatusAgility"),
                initialStatusMentality: extendedGetter("initialStatusMentality"),
                initialStatusDexterity: extendedGetter("initialStatusDexterity"),
            };


            // 計算式を実行
            const result = executeCustomFormula(
                formula.formula,
                baseContext,
                get
            );

            if (result.success && typeof result.result === 'number') {
                return result.result;
            }

            // エラーが発生した場合は一時的に0を返す（後でフォールバック実装）
            console.warn(`Formula failed for ${key}:`, result.error);
            return 0;

        } catch (error) {
            console.warn(`Formula error for ${key}:`, error);
            return 0;
        }
    });
});

