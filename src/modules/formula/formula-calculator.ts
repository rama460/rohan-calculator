import { FormulaContext, formulaStateFamily } from "../state/custom-formulas";
import { BuiltinOptions } from "../../static/options";
import { CharactorStateType } from "../state/charactor";
import { allOptionAggregorStateFamily } from "../state/options";
import { allowedMathFunctions } from "./formula-validator";
/**
 * カスタム計算式の実行エンジン
 * 安全性を考慮してFunction constructorを使用し、限定された変数・関数のみアクセス可能
 */



/**
 * 計算式からコメントを除去する関数
 * //から改行までをコメントとして扱い、実行時には除去する
 */
export function removeComments(formula: string): string {
    return formula
        .split('\n')
        .map(line => {
            const commentIndex = line.indexOf('//');
            return commentIndex !== -1 ? line.substring(0, commentIndex) : line;
        })
        .join('\n')
        .trim();
}

/**
 * 計算式から必要なパラメータを抽出する関数
 */
function extractRequiredParameters(formula: string): Set<string> {
    const requiredParams = new Set<string>();

    // 直接参照される変数名を抽出（BuiltinOptionsのキーのみ）
    const BUILTIN_OPTION_KEYS = Object.keys(BuiltinOptions).filter(key => key !== 'none');
    const variableMatches = formula.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g);

    if (variableMatches) {
        variableMatches.forEach(variable => {
            // 数学関数、基本変数、予約語を除外
            if (BUILTIN_OPTION_KEYS.includes(variable) &&
                !Object.keys(allowedMathFunctions).includes(variable) &&
                !['level', 'heroLevel', 'raceid', 'jobid',
                    'strength', 'vitality', 'dexterity', 'intelligence', 'agility', 'mentality',
                    'true', 'false', 'null', 'undefined', 'return', 'function'].includes(variable)) {
                requiredParams.add(variable);
            }
        });
    }

    return requiredParams;
}

/**
 * 必要なパラメータのみをatomから取得してコンテキストに追加
 */
function addRequiredParametersToContext(
    executionContext: Record<string, any>,
    requiredParams: Set<string>,
    getter: any
): void {
    for (const param of requiredParams) {
        try {
            // atomから値を取得
            const value = getter(allOptionAggregorStateFamily(param as keyof typeof BuiltinOptions));
            executionContext[param] = value;
        } catch (error) {
            // 取得に失敗した場合はデフォルト値を設定
            console.warn(`パラメータ ${param} の取得に失敗:`, error);
            executionContext[param] = 0;
        }
    }
}


/**
 * カスタム計算式を実行
 */
export function executeCustomFormula(
    formula: string,
    context: FormulaContext,
    getter: any
): { success: boolean; result?: number; error?: string } {
    try {
        // コメントを除去
        const preprocessedFormula = removeComments(formula);

        // contextをそのまま使用（外部から全てのパラメータが設定済み）
        const executionContext = {
            ...context,
            // 数学関数
            ...allowedMathFunctions,
        };

        // 式に含まれる中間変数({XXX}形式)を網羅的に確認
        const intermediateVariables = new Set<string>();
        const intermediateVariablePattern = /\{([^}]+)\}/g;
        let match;
        let processedFormula = preprocessedFormula;

        while ((match = intermediateVariablePattern.exec(preprocessedFormula)) !== null) {
            const variableName = match[1];
            const replacementVar = `__${variableName}`;

            intermediateVariables.add(replacementVar);

            // 計算式中の{XXX}を__XXXに置き換え
            processedFormula = processedFormula.replace(new RegExp(`\\{${variableName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\}`, 'g'), replacementVar);
        }

        // 検出された中間変数に対してネスト評価を設定
        for (const intermediateVar of intermediateVariables) {

            try {
                const nestedFormulaState = formulaStateFamily(intermediateVar as CharactorStateType);
                const nestedFormula = getter(nestedFormulaState);

                Object.defineProperty(executionContext, intermediateVar, {
                    get: () => {
                        try {
                            if (nestedFormula && nestedFormula.isActive) {
                                return executeCustomFormula(
                                    nestedFormula.formula,
                                    context,
                                    getter
                                ).result || 0;
                            } else {
                                // デフォルト計算式を使用
                                const defaultFormulaState = formulaStateFamily(intermediateVar as CharactorStateType);
                                const defaultFormula = getter(defaultFormulaState);
                                return executeCustomFormula(
                                    defaultFormula.formula,
                                    context,
                                    getter
                                ).result || 0;
                            }
                        } catch (error) {
                            console.warn(`中間変数 ${intermediateVar} の計算に失敗:`, error);
                            return 0;
                        }
                    },
                    enumerable: true
                });
            } catch (error) {
                console.warn(`中間変数 ${intermediateVar} のセットアップに失敗:`, error);
            }
        }

        // 計算式から必要なパラメータを抽出して動的にコンテキストに追加
        const requiredParams = extractRequiredParameters(processedFormula);
        addRequiredParametersToContext(executionContext, requiredParams, getter);

        const fullContext = executionContext;

        // Function constructorで安全に実行（置き換え後の式を使用）
        const parameterNames = Object.keys(fullContext);
        const parameterValues = Object.values(fullContext);
        const func = new Function(...parameterNames, `return (${processedFormula});`);
        const result = func(...parameterValues);

        // 結果の妥当性チェック
        if (typeof result !== 'number') {
            return { success: false, error: "計算結果が数値ではありません" };
        }

        if (!isFinite(result)) {
            return { success: false, error: "計算結果が無限大またはNaNです" };
        }

        return { success: true, result: Math.floor(result) };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "計算エラーが発生しました"
        };
    }
}

