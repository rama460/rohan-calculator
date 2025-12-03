import { atom } from "jotai";
import { atomFamily, atomWithStorage } from "jotai/utils";
import { CharactorStateType } from "./charactor";
import { DEFAULT_FORMULAS, DEFAULT_FORMULA_DESCRIPTIONS } from "../../static/default-formulas";

// 計算式の型定義
export interface Formula {
    id: string;
    name: string;
    formula: string;            // 計算式（デフォルトまたはカスタム）
    isCustom: boolean;          // カスタム計算式かどうか
    isActive: boolean;          // 有効/無効
    description?: string;       // 説明
    createdAt?: number;         // 作成日時（カスタムの場合のみ）
    updatedAt?: number;         // 更新日時（カスタムの場合のみ）
    version?: number;           // バージョン（互換性管理用）
}

// 利用可能な変数・関数の型定義
export interface FormulaContext {
    // 基本ステータス
    level: number;
    heroLevel: number;
    raceid: number;
    jobid: number;

    // 装備・バフからの修正値
    [key: string]: number;
}



// カスタム計算式の保存（ローカルストレージ）
export const customFormulasState = atomWithStorage<Record<CharactorStateType, Formula>>(
    "customFormulas",
    {} as Record<CharactorStateType, Formula>
);

// 統合計算式の取得（デフォルト + カスタム）
export const formulaStateFamily = atomFamily((formulaId: CharactorStateType) => {
    return atom((get) => {
        const customFormulas = get(customFormulasState);
        const customFormula = customFormulas[formulaId];

        if (customFormula && customFormula.isActive) {
            // カスタム計算式が有効な場合
            return {
                id: formulaId,
                name: formulaId,
                formula: customFormula.formula,
                isCustom: customFormula.isCustom,
                isActive: customFormula.isActive,
                description: customFormula.description,
                createdAt: customFormula.createdAt,
                updatedAt: customFormula.updatedAt,
                version: customFormula.version
            } as Formula;
        } else {
            // デフォルト計算式を使用
            return {
                id: formulaId,
                name: formulaId,
                formula: DEFAULT_FORMULAS[formulaId],
                isCustom: false,
                isActive: true,
                description: DEFAULT_FORMULA_DESCRIPTIONS[formulaId]
            } as Formula;
        }
    });
});

// 計算式の値を取得（統合版）
export const formulaValueFamily = atomFamily((_formulaId: CharactorStateType) => {
    return atom((_get) => {
        // 実際の計算はcharactor.tsで実装される
        // この値は後でcharactor.tsで実装される計算ロジックに置き換える
        return 0; // プレースホルダー
    });
});

// 特定の計算式のカスタマイズ状態
export const customFormulaStateFamily = atomFamily((formulaId: CharactorStateType) => {
    return atom(
        (get) => {
            const formulas = get(customFormulasState);
            return formulas[formulaId] || null;
        },
        (get, set, newFormula: Formula | null) => {
            const formulas = get(customFormulasState);
            if (newFormula === null) {
                // 削除
                const { [formulaId]: _, ...rest } = formulas;
                set(customFormulasState, rest as Record<CharactorStateType, Formula>);
            } else {
                // 追加・更新
                set(customFormulasState, {
                    ...formulas,
                    [formulaId]: newFormula
                });
            }
        }
    );
});

// 計算式がカスタマイズされているかどうか
export const isFormulaCustomizedFamily = atomFamily((formulaId: CharactorStateType) => {
    return atom((get) => {
        const formula = get(customFormulaStateFamily(formulaId));
        return formula !== null && formula.isActive;
    });
});

// カスタマイズされた計算式の一覧
export const customizedFormulasState = atom((get) => {
    const formulas = get(customFormulasState);
    return Object.entries(formulas)
        .filter(([_, formula]) => formula.isActive)
        .reduce((acc, [key, formula]) => {
            acc[key as CharactorStateType] = formula;
            return acc;
        }, {} as Record<CharactorStateType, Formula>);
});

// カスタム計算式のリセット
export const resetCustomFormulaFamily = atomFamily((formulaId: CharactorStateType) => {
    return atom(null, (_, set) => {
        set(customFormulaStateFamily(formulaId), null);
    });
});

// 全てのカスタム計算式のリセット
export const resetAllCustomFormulasState = atom(null, (_, set) => {
    set(customFormulasState, {} as Record<CharactorStateType, Formula>);
});

// カスタム計算式の有効/無効切り替え
export const toggleCustomFormulaFamily = atomFamily((formulaId: CharactorStateType) => {
    return atom(null, (get, set) => {
        const formula = get(customFormulaStateFamily(formulaId));
        if (formula) {
            set(customFormulaStateFamily(formulaId), {
                ...formula,
                isActive: !formula.isActive,
                updatedAt: Date.now()
            });
        }
    });
});

// 計算式のバックアップ・復元用
export const exportCustomFormulasState = atom((get) => {
    const formulas = get(customFormulasState);
    return {
        formulas,
        exportedAt: Date.now(),
        version: 1
    };
});

export const importCustomFormulasState = atom(null, (_, set, importData: any) => {
    try {
        if (importData.version === 1 && importData.formulas) {
            set(customFormulasState, importData.formulas);
            return { success: true, message: "インポートが完了しました" };
        }
        throw new Error("無効なデータ形式です");
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "インポートに失敗しました"
        };
    }
});