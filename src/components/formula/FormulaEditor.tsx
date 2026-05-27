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
    uiCustomFormulaAtomFamily,
    uiFormulaAtomFamily,
} from '../../modules/state/ui';
import { CharactorStateType } from '../../modules/character/constants';
import { validateFormula, FormulaContext } from '../../modules/formula/formula-validator';
import { FormulaEditorHelp } from './FormulaEditorHelp';
import { configureFormulaEditorMonaco, MonacoApi } from './formulaEditorMonaco';

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
    const [customFormula, setCustomFormula] = useAtom(uiCustomFormulaAtomFamily(statusType));

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
        configureFormulaEditorMonaco(monaco);
    };

    // 中間変数の数式を個別に取得
    const strengthFormula = useAtomValue(uiFormulaAtomFamily('__strength'));
    const vitalityFormula = useAtomValue(uiFormulaAtomFamily('__vitality'));
    const dexterityFormula = useAtomValue(uiFormulaAtomFamily('__dexterity'));
    const intelligenceFormula = useAtomValue(uiFormulaAtomFamily('__intelligence'));
    const agilityFormula = useAtomValue(uiFormulaAtomFamily('__agility'));
    const mentalityFormula = useAtomValue(uiFormulaAtomFamily('__mentality'));
    const hitPointFormula = useAtomValue(uiFormulaAtomFamily('__hitPoint'));
    const magicPointFormula = useAtomValue(uiFormulaAtomFamily('__magicPoint'));
    const meleeAttackFormula = useAtomValue(uiFormulaAtomFamily('__meleeAttack'));
    const magicAttackFormula = useAtomValue(uiFormulaAtomFamily('__magicAttack'));
    const rangeAttackFormula = useAtomValue(uiFormulaAtomFamily('__rangeAttack'));
    const physicalDefenseFormula = useAtomValue(uiFormulaAtomFamily('__physicalDefense'));
    const magicalDefenseFormula = useAtomValue(uiFormulaAtomFamily('__magicalDefense'));
    const accuracyFormula = useAtomValue(uiFormulaAtomFamily('__accuracy'));
    const dodgingFormula = useAtomValue(uiFormulaAtomFamily('__dodging'));
    const resistanceFormula = useAtomValue(uiFormulaAtomFamily('__resistance'));
    const movementSpeedFormula = useAtomValue(uiFormulaAtomFamily('__movementSpeed'));
    const attackSpeedFormula = useAtomValue(uiFormulaAtomFamily('__attackSpeed'));
    const hitPointRecoveryFormula = useAtomValue(uiFormulaAtomFamily('__hitPointRecovery'));
    const magicPointRecoveryFormula = useAtomValue(uiFormulaAtomFamily('__magicPointRecovery'));

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

                {activeTab === 1 && <FormulaEditorHelp />}
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
