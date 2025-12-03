import { removeComments } from "./formula-calculator";
import { BuiltinOptions } from "../../static/options";
import { CharactorStateType } from "../state/charactor";

// 安全なevalのための変数名パターン
const ALLOWED_VARIABLE_PATTERN = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;


// 危険な文字列パターン（セキュリティチェック）
const DANGEROUS_PATTERNS = [
    /constructor/i,
    /prototype/i,
    /__proto__/i,
    /eval/i,
    /function/i,
    /return/i,
    /window/i,
    /document/i,
    /global/i,
    /process/i,
    /require/i,
    /import/i,
    /export/i,
    /console/i,
    /alert/i,
];

// 詳細なバリデーション結果の型定義
export interface ValidationError {
    type: 'syntax' | 'security' | 'variable' | 'function' | 'circular';
    message: string;
    line?: number;
    column?: number;
    suggestion?: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
    warnings: ValidationError[];
    suggestions: string[];
}

// 数学関数のホワイトリスト
export const allowedMathFunctions = {
    floor: Math.floor,
    ceil: Math.ceil,
    round: Math.round,
    max: Math.max,
    min: Math.min,
    abs: Math.abs,
    pow: Math.pow,
    sqrt: Math.sqrt,
} as const;

// 特殊変数の定義
const CONST_VARIABLES = [
    'initialStatusStrength', 'initialStatusVitality', 'initialStatusIntelligence',
    'initialStatusAgility', 'initialStatusMentality', 'initialStatusDexterity',
    'raceHitPointPerLevel', 'raceMagicPointPerLevel', 'raceMovementSpeed'
];

// 中間変数の定義
const BUILTIN_INTERMEDIATE_VARIABLE = [
    '{strength}', '{vitality}', '{dexterity}', '{intelligence}',
    '{agility}', '{mentality}', '{hitPoint}', '{magicPoint}',
    '{meleeAttack}', '{magicAttack}', '{rangeAttack}',
    '{physicalDefense}', '{magicalDefense}', '{accuracy}',
    '{dodging}', '{resistance}', '{movementSpeed}',
    '{attackSpeed}', '{hitPointRecovery}', '{magicPointRecovery}',
];

/**
 * 四則演算の規則をバリデーションする関数
 */
function validateArithmeticRules(formula: string): ValidationError[] {
    const errors: ValidationError[] = [];

    // 空白および改行を除去して解析しやすくする
    const cleanFormula = formula.replace(/\s+/g, '').replace(/\/\/.*$/gm, '');

    // 1. 連続する演算子のチェック (例: ++, --, */, etc.)
    const consecutiveOperators = /[+\-*/]{2,}/g;
    const consecutiveMatches = cleanFormula.match(consecutiveOperators);
    if (consecutiveMatches) {
        errors.push({
            type: 'syntax',
            message: `連続する演算子が含まれています: ${consecutiveMatches.join(', ')}`,
            suggestion: '演算子の間に数値や変数を配置してください'
        });
    }

    // 2. 演算子で始まる・終わる式のチェック (単項マイナスは除く)
    if (/^[*/+]/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '式が演算子で始まっています',
            suggestion: '式は数値、変数、または括弧で始めてください'
        });
    }

    if (/[+\-*/]$/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '式が演算子で終わっています',
            suggestion: '演算子の後に数値や変数を配置してください'
        });
    }

    // 3. 括弧の直後/直前の演算子チェック
    if (/\([+*/]/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '開き括弧の直後に演算子があります',
            suggestion: '括弧内は数値、変数、または単項マイナスで始めてください'
        });
    }

    if (/[+\-*/]\)/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '閉じ括弧の直前に演算子があります',
            suggestion: '括弧を閉じる前に数値や変数を配置してください'
        });
    }

    // 4. 空の括弧のチェック
    if (/\(\s*\)/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '空の括弧があります',
            suggestion: '括弧内に式を記述してください'
        });
    }

    // 5. 関数呼び出しの後の演算子チェック
    const functionCallPattern = /\w+\([^)]*\)\s*([+\-*/])/g;
    let match;
    while ((match = functionCallPattern.exec(cleanFormula)) !== null) {
        // 正常な場合なので、このチェックは削除または調整が必要
    }

    // 6. 数値の直後に括弧や変数がある場合のチェック (乗算の省略は許可しない)
    if (/\d\s*[a-zA-Z_(]/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '数値の直後に変数や括弧があります',
            suggestion: '乗算を明示的に * で記述してください (例: 2*x, 3*(y+1))'
        });
    }

    // 7. 変数の直後に括弧がある場合のチェック (関数呼び出し以外)
    const variableParenPattern = /[a-zA-Z_]\w*\s*\(/g;
    const functionNames = Object.keys(allowedMathFunctions);
    const specialVariables = CONST_VARIABLES.concat(BUILTIN_INTERMEDIATE_VARIABLE);

    while ((match = variableParenPattern.exec(formula)) !== null) {
        const varName = match[0].replace(/\s*\(/, '');
        if (!functionNames.includes(varName) && !specialVariables.includes(varName) && !/^getter$/.test(varName)) {
            errors.push({
                type: 'syntax',
                message: `変数 "${varName}" の直後に括弧があります`,
                suggestion: '乗算を明示的に * で記述するか、関数名を確認してください'
            });
        }
    }

    // 8. 小数点のチェック
    if (/\d+\.\d*\.\d*/.test(cleanFormula)) {
        errors.push({
            type: 'syntax',
            message: '数値に複数の小数点が含まれています',
            suggestion: '小数点は1つの数値につき1個まででです'
        });
    }

    // 9. ゼロ除算のリスク警告
    if (/\/\s*0(?![.\d])/.test(formula)) {
        errors.push({
            type: 'syntax',
            message: 'ゼロ除算が含まれています',
            suggestion: 'ゼロ以外の値で割るようにしてください'
        });
    }

    // 10. 数値の連続チェック (例: 123 456, 1.23 4.56)
    if (/\d+(\.\d+)?\s+\d+(\.\d+)?/.test(formula)) {
        errors.push({
            type: 'syntax',
            message: '連続する数値が含まれています',
            suggestion: '数値間に演算子を配置するか、乗算を明示的に * で記述してください (例: 12 * 34, 1.5 + 2.5)'
        });
    }

    return errors;
}


// 数式コンテキストの型定義
export interface FormulaContext {
    [key: string]: { formula: string } | null;
}

/**
 * 中間変数の循環参照をチェック
 */
function validateCircularReferences(
    formula: string,
    statusType: CharactorStateType,
    formulaContext: FormulaContext
): ValidationError[] {
    const errors: ValidationError[] = [];

    // 中間変数{XXX}を抽出
    const intermediateVariableMatches = formula.match(/\{([^}]+)\}/g);
    if (!intermediateVariableMatches) return errors;

    // 循環参照の検出
    const referencedVariables = new Set<string>();
    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    function checkCircularReference(varName: string): boolean {
        if (recursionStack.has(varName)) {
            // 循環参照を発見
            return true;
        }

        if (visited.has(varName)) {
            // 既にチェック済み
            return false;
        }

        visited.add(varName);
        recursionStack.add(varName);

        try {
            // formulaContextから中間変数の式を取得
            const nestedFormula = formulaContext[varName];

            if (nestedFormula && nestedFormula.formula) {
                const nestedIntermediateVariables = nestedFormula.formula.match(/\{([^}]+)\}/g);
                if (nestedIntermediateVariables) {
                    for (const nestedVar of nestedIntermediateVariables) {
                        const nestedVarName = nestedVar.slice(1, -1); // {XXX} → XXX
                        if (checkCircularReference(nestedVarName)) {
                            return true;
                        }
                    }
                }
            }
        } catch (error) {
            // エラーが発生した場合は警告として扱う
            console.warn(`循環参照チェック中にエラー: ${varName}`, error);
        }

        recursionStack.delete(varName);
        return false;
    }

    // 現在の変数から参照される各中間変数をチェック
    for (const match of intermediateVariableMatches) {
        const varName = match.slice(1, -1); // {XXX} → XXX
        referencedVariables.add(varName);

        // 自己参照のチェック
        if (varName === statusType) {
            errors.push({
                type: 'circular',
                message: `自己参照が検出されました: ${statusType}`,
                suggestion: '変数は自分自身を参照できません'
            });
            continue;
        }

        // 循環参照のチェック
        if (checkCircularReference(varName)) {
            errors.push({
                type: 'circular',
                message: `循環参照が検出されました: ${varName} → ... → ${varName}`,
                suggestion: '変数間の参照関係を見直してください'
            });
        }
    }

    return errors;
}

/**
 * 改善された計算式バリデーション
 */
export function validateFormula(
    formula: string,
    statusType: CharactorStateType,
    formulaContext?: FormulaContext
): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationError[] = [];
    const suggestions: string[] = [];
    try {

        // コメントを除去した式で以降のバリデーションを実行
        const cleanFormula = removeComments(formula);
        // 空文字列チェック
        if (!cleanFormula.trim()) {
            errors.push({
                type: 'syntax',
                message: '計算式が空です',
                suggestion: 'サンプルテンプレートから開始してみてください'
            });
            return { isValid: false, errors, warnings, suggestions };
        }

        // 危険なパターンのチェック（コメント除去後の式をチェック）
        for (const pattern of DANGEROUS_PATTERNS) {
            if (pattern.test(cleanFormula)) {
                errors.push({
                    type: 'security',
                    message: `危険な文字列が含まれています: ${pattern.source}`,
                    suggestion: '安全な数学関数のみを使用してください'
                });
            }
        }

        // 基本的な文法チェック（コメント除去後の式をチェック）
        const openParens = (cleanFormula.match(/\(/g) || []).length;
        const closeParens = (cleanFormula.match(/\)/g) || []).length;
        if (openParens !== closeParens) {
            errors.push({
                type: 'syntax',
                message: `括弧の対応が正しくありません (開始: ${openParens}, 終了: ${closeParens})`,
                suggestion: '括弧の数を確認してください'
            });
        }

        // より詳細な構文チェック（コメント除去後の式をチェック）
        const invalidChars = cleanFormula.match(/[^\w\s+\-*/(){}.,'">=<!&|?:]/g);
        if (invalidChars) {
            errors.push({
                type: 'syntax',
                message: `無効な文字が含まれています: ${invalidChars.join(', ')}`,
                suggestion: '英数字、演算子、括弧のみを使用してください'
            });
        }

        // 四則演算の規則チェック
        const arithmeticErrors = validateArithmeticRules(cleanFormula);
        errors.push(...arithmeticErrors);

        // 変数名の妥当性チェック（コメント除去後の式をチェック）
        const variableMatches = cleanFormula.match(/(?:\{[a-zA-Z_][a-zA-Z0-9_]*\}|[a-zA-Z_$][a-zA-Z0-9_$]*)/g);
        if (variableMatches) {
            const allowedVars = new Set([
                // 基本ステータス
                'level', 'heroLevel', 'raceid', 'jobid',
                'strength', 'vitality', 'dexterity', 'intelligence', 'agility', 'mentality',
                // 特殊変数
                ...CONST_VARIABLES,
                // 中間変数
                ...BUILTIN_INTERMEDIATE_VARIABLE,
                // 数学関数
                ...Object.keys(allowedMathFunctions),
                // src/static/options.ts の BuiltinOptions から取得
                ...Object.keys(BuiltinOptions),
            ]);

            const unknownVars: string[] = [];
            for (const variable of variableMatches) {
                if (!allowedVars.has(variable)) {
                    // getter関数パターンをチェック
                    unknownVars.push(variable);
                }
            }

            if (unknownVars.length > 0) {
                errors.push({
                    type: 'variable',
                    message: `未定義の変数が含まれています: ${unknownVars.join(', ')}`,
                    suggestion: '利用可能な変数名を確認してください'
                });
            }
        }

        // 中間変数の循環参照チェック（formulaContextが提供されている場合のみ）
        if (formulaContext) {
            const circularErrors = validateCircularReferences(cleanFormula, statusType, formulaContext);
            errors.push(...circularErrors);
        }

        // 実際の計算による検証（構文エラーがない場合のみ）
        if (errors.length === 0) {
            const executionErrors = validateFormulaByExecution(cleanFormula);
            errors.push(...executionErrors);
        }

        const isValid = errors.length === 0;
        return { isValid, errors, warnings, suggestions };

    } catch (error) {
        errors.push({
            type: 'syntax',
            message: error instanceof Error ? error.message : "不明なエラーが発生しました",
            suggestion: '構文を確認してください'
        });
        return { isValid: false, errors, warnings, suggestions };
    }
}

/**
 * 式を実際に計算して検証する関数
 * 検出した変数を適当な数値に置き換えて実行可能性をチェック
 */
export function validateFormulaByExecution(formula: string): ValidationError[] {
    const errors: ValidationError[] = [];

    try {
        // コメントを除去
        const cleanFormula = removeComments(formula);

        if (!cleanFormula.trim()) {
            return errors; // 空の式は実行検証をスキップ
        }

        // 変数を検出して置き換えマップを作成
        const variableMap = createVariableSubstitutionMap(cleanFormula);

        // 変数を数値に置き換えた式を作成
        let testFormula = cleanFormula;
        for (const [variable, value] of Object.entries(variableMap)) {
            // 単語境界を使って正確に置き換え
            const regex = new RegExp(`\\b${variable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
            testFormula = testFormula.replace(regex, value.toString());
        }


        // 中間変数 {XXX} を数値に置き換え
        testFormula = testFormula.replace(/\{([^}]+)\}/g, () => {
            return Math.floor(Math.random() * 100 + 1).toString(); // 1-100のランダム値
        });

        // 実際に計算を試行
        const result = evaluateTestFormula(testFormula);

        // 結果の妥当性をチェック
        if (typeof result !== 'number') {
            errors.push({
                type: 'syntax',
                message: '計算結果が数値になりません',
                suggestion: '式の構文を確認してください'
            });
        } else if (!isFinite(result)) {
            errors.push({
                type: 'syntax',
                message: '計算結果が無限大またはNaNになります',
                suggestion: 'ゼロ除算や不正な演算がないか確認してください'
            });
        }

    } catch (error) {
        errors.push({
            type: 'syntax',
            message: `実行時エラー: ${error instanceof Error ? error.message : '不明なエラー'}`,
            suggestion: '式の構文が正しいか確認してください'
        });
    }

    return errors;
}

/**
 * 変数の置き換えマップを作成
 */
function createVariableSubstitutionMap(formula: string): Record<string, number> {
    const variableMap: Record<string, number> = {};

    // 基本ステータス変数のテストデータ
    const basicStats = {
        level: 50,
        heroLevel: 10,
        raceid: 1,
        jobid: 1,
        strength: 100,
        vitality: 80,
        dexterity: 90,
        intelligence: 70,
        agility: 85,
        mentality: 75
    };

    // 種族関連変数のテストデータ
    const raceStats = {
        initialStatusStrength: 20,
        initialStatusVitality: 25,
        initialStatusIntelligence: 15,
        initialStatusAgility: 18,
        initialStatusMentality: 12,
        initialStatusDexterity: 22,
        raceHitPointPerLevel: 15,
        raceMagicPointPerLevel: 10,
        raceMovementSpeed: 100
    };

    // 数学関数は置き換えない（そのまま使用）
    const mathFunctions = Object.keys(allowedMathFunctions);

    // 式から変数を抽出
    const variables = formula.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g) || [];

    for (const variable of variables) {
        // 数学関数は除外
        if (mathFunctions.includes(variable)) {
            continue;
        }

        // 基本ステータス
        if (variable in basicStats) {
            variableMap[variable] = basicStats[variable as keyof typeof basicStats];
        }
        // 種族関連
        else if (variable in raceStats) {
            variableMap[variable] = raceStats[variable as keyof typeof raceStats];
        }
        // options.tsの変数（ランダム値を割り当て）
        else if (Object.keys(BuiltinOptions).includes(variable)) {
            variableMap[variable] = Math.floor(Math.random() * 50 + 1); // 1-50のランダム値
        }
        // その他の未知の変数
        else if (ALLOWED_VARIABLE_PATTERN.test(variable) &&
            !['true', 'false', 'null', 'undefined', 'getter'].includes(variable)) {
            variableMap[variable] = Math.floor(Math.random() * 10 + 1); // 1-10のランダム値
        }
    }

    return variableMap;
}

/**
 * テスト用の安全な式評価
 */
function evaluateTestFormula(formula: string): number {
    // 数学関数を含むコンテキストを作成
    const context = {
        ...allowedMathFunctions,
        // 安全のため一部の危険な関数を無効化
        eval: undefined,
        Function: undefined,
        setTimeout: undefined,
        setInterval: undefined,
    };

    // Functionコンストラクタを使用して安全に評価
    const paramNames = Object.keys(context);
    const paramValues = Object.values(context);

    try {
        const func = new Function(...paramNames, `return (${formula});`);
        return func(...paramValues);
    } catch (error) {
        throw new Error(`計算エラー: ${error instanceof Error ? error.message : '不明なエラー'}`);
    }
}
