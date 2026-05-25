import React, { useState, useMemo, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    Typography,
    Alert,
    TextField,
    Tabs,
    Tab,
    Paper,
} from '@mui/material';
import Editor from '@monaco-editor/react';
import {
    Code as CodeIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
    Help as HelpIcon,
} from '@mui/icons-material';
import { useAtom, useAtomValue } from 'jotai';
import { Formula } from '../../modules/state/custom-formulas';
import {
    compatibleCustomFormulaAtomFamily,
    compatibleFormulaAtomFamily,
} from '../../modules/state/legacyCompatibleAtoms';
import { CharactorStateType } from '../../modules/state/charactor';
import { validateFormula, FormulaContext } from '../../modules/formula/formula-validator';

type MonacoApi = {
    languages: {
        register: (language: { id: string }) => void;
        setMonarchTokensProvider: (languageId: string, provider: unknown) => void;
    };
    editor: {
        defineTheme: (themeName: string, themeData: unknown) => void;
        setTheme: (themeName: string) => void;
    };
};

interface FormulaEditorProps {
    open: boolean;
    onClose: () => void;
    formulaName: string;
    initialFormula: string;
    statusType: CharactorStateType; // 保存先のステータス種類
}

export const FormulaEditor: React.FC<FormulaEditorProps> = ({
    open,
    onClose,
    formulaName,
    initialFormula,
    statusType,
}) => {
    const [customFormula, setCustomFormula] = useAtom(compatibleCustomFormulaAtomFamily(statusType));

    // 初期値の決定：custom formulaがあればそれを使用、なければinitialFormulaを使用
    const [formula, setFormula] = useState(customFormula?.formula || initialFormula);
    const [name, setName] = useState(customFormula?.name || formulaName);
    const [description, setDescription] = useState(customFormula?.description || '');
    const [activeTab, setActiveTab] = useState(0);

    // エディターの高さを動的に計算
    const calculateEditorHeight = useMemo(() => {
        const lineCount = formula ? formula.split('\n').length : 1;
        const minLines = 4;
        const maxLines = 20;
        const actualLines = Math.max(minLines, Math.min(maxLines, lineCount));
        return `${actualLines * 20 + 40}px`; // 行高 20px + パディング 40px
    }, [formula]);

    // エディタが開かれた時に状態を更新
    useEffect(() => {
        if (open) {
            setFormula(customFormula?.formula || initialFormula);
            setName(customFormula?.name || formulaName);
            setDescription(customFormula?.description || '');
        }
    }, [open, customFormula, initialFormula, formulaName]);

    // Monaco Editorの初期化設定
    const handleEditorDidMount = (_editor: unknown, monaco: MonacoApi) => {
        // カスタム言語の定義
        monaco.languages.register({ id: 'rohan-formula' });

        // トークナイザーの設定
        monaco.languages.setMonarchTokensProvider('rohan-formula', {
            tokenizer: {
                root: [
                    // Comments
                    [/\/\/.*$/, 'comment'],
                    // Math functions
                    [/\b(floor|ceil|round|abs|max|min|pow|sqrt|sin|cos|tan)\b/, 'keyword'],
                    // Special variables (calculated)
                    [/\b(calculated[A-Za-z]+)\b/, 'type.identifier'],
                    // Race variables
                    [/\b(initialStatus[A-Za-z]+|race[A-Za-z]+)\b/, 'predefined'],
                    // Basic variables
                    [/\b(level|heroLevel|raceid|jobid|strength|vitality|dexterity|intelligence|agility|mentality)\b/, 'variable'],
                    // Numbers
                    [/\d+\.?\d*/, 'number'],
                    // Operators
                    [/[+\-*/()%]/, 'operator'],
                    // Other variables
                    [/[a-zA-Z][a-zA-Z0-9_]*/, 'string'],
                ]
            }
        });

        // テーマの設定
        monaco.editor.defineTheme('rohan-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
                { token: 'keyword', foreground: '569cd6' },
                { token: 'type.identifier', foreground: '9cdcfe' },
                { token: 'predefined', foreground: '4fc1ff' },
                { token: 'variable', foreground: 'dcdcaa' },
                { token: 'number', foreground: 'b5cea8' },
                { token: 'operator', foreground: 'd4d4d4' },
                { token: 'string', foreground: 'ce9178' },
            ],
            colors: {
                'editor.background': '#1e1e1e',
            }
        });

        monaco.editor.setTheme('rohan-dark');
    };

    // 中間変数の数式を個別に取得
    const strengthFormula = useAtomValue(compatibleFormulaAtomFamily('__strength'));
    const vitalityFormula = useAtomValue(compatibleFormulaAtomFamily('__vitality'));
    const dexterityFormula = useAtomValue(compatibleFormulaAtomFamily('__dexterity'));
    const intelligenceFormula = useAtomValue(compatibleFormulaAtomFamily('__intelligence'));
    const agilityFormula = useAtomValue(compatibleFormulaAtomFamily('__agility'));
    const mentalityFormula = useAtomValue(compatibleFormulaAtomFamily('__mentality'));
    const hitPointFormula = useAtomValue(compatibleFormulaAtomFamily('__hitPoint'));
    const magicPointFormula = useAtomValue(compatibleFormulaAtomFamily('__magicPoint'));
    const meleeAttackFormula = useAtomValue(compatibleFormulaAtomFamily('__meleeAttack'));
    const magicAttackFormula = useAtomValue(compatibleFormulaAtomFamily('__magicAttack'));
    const rangeAttackFormula = useAtomValue(compatibleFormulaAtomFamily('__rangeAttack'));
    const physicalDefenseFormula = useAtomValue(compatibleFormulaAtomFamily('__physicalDefense'));
    const magicalDefenseFormula = useAtomValue(compatibleFormulaAtomFamily('__magicalDefense'));
    const accuracyFormula = useAtomValue(compatibleFormulaAtomFamily('__accuracy'));
    const dodgingFormula = useAtomValue(compatibleFormulaAtomFamily('__dodging'));
    const resistanceFormula = useAtomValue(compatibleFormulaAtomFamily('__resistance'));
    const movementSpeedFormula = useAtomValue(compatibleFormulaAtomFamily('__movementSpeed'));
    const attackSpeedFormula = useAtomValue(compatibleFormulaAtomFamily('__attackSpeed'));
    const hitPointRecoveryFormula = useAtomValue(compatibleFormulaAtomFamily('__hitPointRecovery'));
    const magicPointRecoveryFormula = useAtomValue(compatibleFormulaAtomFamily('__magicPointRecovery'));

    // formulaContextを作成
    const formulaContext: FormulaContext = useMemo(() => ({
        strength: strengthFormula,
        vitality: vitalityFormula,
        dexterity: dexterityFormula,
        intelligence: intelligenceFormula,
        agility: agilityFormula,
        mentality: mentalityFormula,
        hitPoint: hitPointFormula,
        magicPoint: magicPointFormula,
        meleeAttack: meleeAttackFormula,
        magicAttack: magicAttackFormula,
        rangeAttack: rangeAttackFormula,
        physicalDefense: physicalDefenseFormula,
        magicalDefense: magicalDefenseFormula,
        accuracy: accuracyFormula,
        dodging: dodgingFormula,
        resistance: resistanceFormula,
        movementSpeed: movementSpeedFormula,
        attackSpeed: attackSpeedFormula,
        hitPointRecovery: hitPointRecoveryFormula,
        magicPointRecovery: magicPointRecoveryFormula,
    }), [
        strengthFormula, vitalityFormula, dexterityFormula, intelligenceFormula,
        agilityFormula, mentalityFormula, hitPointFormula, magicPointFormula,
        meleeAttackFormula, magicAttackFormula, rangeAttackFormula, physicalDefenseFormula,
        magicalDefenseFormula, accuracyFormula, dodgingFormula, resistanceFormula,
        movementSpeedFormula, attackSpeedFormula, hitPointRecoveryFormula, magicPointRecoveryFormula
    ]);

    // リアルタイムvalidation
    const validation = useMemo(() => {
        if (!formula.trim()) return null;

        return validateFormula(formula, statusType, formulaContext);
    }, [formula, statusType, formulaContext]);

    // フォーミュラ保存
    const handleSave = () => {

        // カスタムフォーミュラとして保存
        const newCustomFormula: Formula = {
            id: `${statusType}_${Date.now()}`,
            formula: formula.trim(),
            name: name || `${statusType}の計算式`,
            description: description || 'FormulaEditorで作成された計算式',
            isActive: true,
            isCustom: true,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            version: 1,
        };

        // 実際に保存
        setCustomFormula(newCustomFormula);

        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{
                sx: {
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <DialogTitle>
                <Box display="flex" alignItems="center" gap={1}>
                    <CodeIcon />
                    <Typography variant="h6">計算式エディター</Typography>
                </Box>
            </DialogTitle>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)}>
                    <Tab icon={<CodeIcon />} label="エディター" />
                    <Tab icon={<HelpIcon />} label="ヘルプ" />
                </Tabs>
            </Box>

            <DialogContent sx={{ flex: 1, p: 0 }}>
                {/* エディタータブ */}
                {activeTab === 0 && (
                    <Box sx={{ p: 2, minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                fullWidth
                                label="計算式名"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="説明 (オプション)"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                multiline
                                rows={2}
                                sx={{ mb: 2 }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1">
                                計算式:
                            </Typography>
                        </Box>

                        <Paper sx={{ p: 0, bgcolor: '#1e1e1e', minHeight: calculateEditorHeight, borderRadius: 1 }}>
                            <Editor
                                height={calculateEditorHeight}
                                language="rohan-formula"
                                theme="rohan-dark"
                                value={formula}
                                onChange={(value) => setFormula(value || '')}
                                onMount={handleEditorDidMount}
                                options={{
                                    fontSize: 14,
                                    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                                    minimap: { enabled: false },
                                    scrollBeyondLastLine: false,
                                    scrollbar: {
                                        vertical: 'auto',
                                        horizontal: 'auto',
                                        verticalScrollbarSize: 10,
                                        horizontalScrollbarSize: 10,
                                    },
                                    wordWrap: 'on',
                                    lineNumbers: 'on',
                                    folding: false,
                                    glyphMargin: false,
                                    lineDecorationsWidth: 10,
                                    lineNumbersMinChars: 3,
                                    renderLineHighlight: 'none',
                                    contextmenu: false,
                                    quickSuggestions: false,
                                    suggestOnTriggerCharacters: false,
                                    acceptSuggestionOnEnter: 'off',
                                    tabCompletion: 'off',
                                    wordBasedSuggestions: 'off',
                                    parameterHints: { enabled: false },
                                    autoClosingBrackets: 'always',
                                    autoClosingQuotes: 'always',
                                    automaticLayout: true,
                                }}
                            />
                        </Paper>

                        {/* リアルタイムバリデーション結果表示 */}
                        {validation && (
                            !validation.isValid ? (
                                <Alert severity="error" sx={{ mt: 1 }}>
                                    エラー: {validation.errors[0]?.message}
                                </Alert>
                            ) : validation.warnings.length > 0 ? (
                                <Alert severity="warning" sx={{ mt: 1 }}>
                                    警告: {validation.warnings[0]?.message}
                                </Alert>
                            ) : (
                                <Alert severity="success" sx={{ mt: 1 }}>
                                    計算式は有効です
                                </Alert>
                            )
                        )}


                    </Box>
                )}

                {/* ヘルプタブ */}
                {activeTab === 1 && (
                    <Box sx={{ p: 2, height: '60vh', overflow: 'auto' }}>
                        <Typography variant="h6" gutterBottom>
                            計算式ガイド
                        </Typography>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">📊 基本変数:</Typography>
                            <Typography variant="body2" component="div">
                                • <strong>level</strong> - キャラクターレベル<br />
                                • <strong>heroLevel</strong> - 超越レベル<br />
                                • <strong>raceid</strong> - 種族ID (1=ヒューマン, 2=エルフ, 3=ハーフエルフ, 4=ダン, 5=デカン, 6=ダークエルフ, 7=トリニティ)<br />
                                • <strong>jobid</strong> - 職業ID<br />
                                • <strong>strength, vitality, dexterity, intelligence, agility, mentality</strong> - 基本ステータス
                            </Typography>
                        </Alert>

                        <Alert severity="warning" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">🔗 中間変数 (他のステータスを参照):</Typography>
                            <Typography variant="body2" component="div">
                                <strong>波括弧 { } で囲んで使用:</strong><br />
                                • <strong>{`{strength}`}</strong> - 計算済み筋力値<br />
                                • <strong>{`{vitality}`}</strong> - 計算済み体力値<br />
                                • <strong>{`{hitPoint}`}</strong> - 計算済みHP値<br />
                                • <strong>{`{meleeAttack}`}</strong> - 計算済み近接攻撃力<br />
                                ⚠️ 循環参照するとエラーになります
                            </Typography>
                        </Alert>

                        <Alert severity="success" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">🧮 数学関数:</Typography>
                            <Typography variant="body2" component="div">
                                • <strong>floor(x)</strong> - 小数点以下切り捨て<br />
                                • <strong>ceil(x)</strong> - 小数点以下切り上げ<br />
                                • <strong>round(x)</strong> - 四捨五入<br />
                                • <strong>abs(x)</strong> - 絶対値<br />
                                • <strong>min(a,b), max(a,b)</strong> - 最小値・最大値<br />
                                • <strong>pow(x,y)</strong> - x の y 乗<br />
                                • <strong>sqrt(x)</strong> - 平方根
                            </Typography>
                        </Alert>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">🏷️ 装備・バフオプション変数:</Typography>
                            <Typography variant="body2" component="div">
                                <strong>options.ts から自動取得:</strong><br />
                                • <strong>plusStrength, plusVitality</strong> - Plus系ステータス<br />
                                • <strong>weaponAttack, equipmentDefense</strong> - 装備系ボーナス<br />
                                • <strong>buffStrength, temporaryAttack</strong> - バフ系ボーナス<br />
                                • <strong>baseHP, baseMP</strong> - 基礎値系<br />
                                ※ 利用可能な変数は自動で検証されます
                            </Typography>
                        </Alert>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">🌟 種族関連変数:</Typography>
                            <Typography variant="body2" component="div">
                                • <strong>initialStatusStrength</strong> - 種族初期筋力<br />
                                • <strong>initialStatusVitality</strong> - 種族初期体力<br />
                                • <strong>raceHitPointPerLevel</strong> - レベル毎HP増加<br />
                                • <strong>raceMagicPointPerLevel</strong> - レベル毎MP増加<br />
                                • <strong>raceMovementSpeed</strong> - 種族移動速度
                            </Typography>
                        </Alert>

                        <Alert severity="info" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">💬 コメント機能:</Typography>
                            <Typography variant="body2" component="div">
                                • <strong>//</strong> から行末まではコメント<br />
                                • 計算には影響しないため、説明や注釈に使用<br />
                                • 複雑な式の説明に活用してください
                            </Typography>
                        </Alert>

                        <Alert severity="success" sx={{ mb: 2 }}>
                            <Typography variant="subtitle2">✅ 自動バリデーション機能:</Typography>
                            <Typography variant="body2" component="div">
                                • <strong>構文チェック</strong> - 括弧の対応、演算子の妥当性<br />
                                • <strong>変数名検証</strong> - 未定義変数の検出<br />
                                • <strong>循環参照検出</strong> - 中間変数の相互参照チェック<br />
                                • <strong>実行テスト</strong> - 実際の計算可能性を検証<br />
                                ❌ エラーがある場合は保存できません
                            </Typography>
                        </Alert>
                    </Box>
                )}
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <Button onClick={onClose} startIcon={<CancelIcon />}>
                    キャンセル
                </Button>
                <Button
                    onClick={handleSave}
                    variant="contained"
                    startIcon={<SaveIcon />}
                    disabled={!formula.trim() || !name.trim() || (validation?.isValid === false)}
                >
                    保存
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormulaEditor;
