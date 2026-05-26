import React, { useState } from 'react';
import { PageContainer } from '../common/PageContainer';
import {
    Box,
    Typography,
    Stack,
    Alert,
    Tabs,
    Tab,
    Chip,
    Button
} from '@mui/material';
import {
    Functions as FunctionsIcon,
    Settings as SettingsIcon,
    Restore as RestoreIcon,
    FitnessCenter as StrengthIcon,
    Favorite as HealthIcon,
    Gavel as AttackIcon,
    Security as DefenseIcon,
    Speed as SpeedIcon
} from '@mui/icons-material';
import { CharactorStateType } from '../../modules/character/constants';
import { FormulaEditor } from './FormulaEditor';
import { useAtomValue, useSetAtom } from 'jotai';
import {
    uiCustomFormulasState,
} from '../../modules/state/ui';
import { DEFAULT_FORMULAS } from '../../static/default-formulas';
import { Formula as FormulaType } from '../../modules/state/custom-formulas';
import { parseFormulaString } from './formulaDescription';
import { FormulaCard } from './FormulaCard';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`formula-tabpanel-${index}`}
            aria-labelledby={`formula-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

export const Formula: React.FC = () => {
    // エディター状態
    const [editorOpen, setEditorOpen] = useState(false);
    const [editingFormula, setEditingFormula] = useState<{
        id: CharactorStateType;
        name: string;
        originalFormula: string;
    } | null>(null);

    // カスタム計算式の状態
    const customizedFormulas = useAtomValue(uiCustomFormulasState);
    const setCustomFormulas = useSetAtom(uiCustomFormulasState);
    const [tabValue, setTabValue] = useState(0);

    // すべてのカスタム式をリセット
    const handleResetAllFormulas = () => {
        // すべてのカスタム式を一括でクリア
        setCustomFormulas({} as Record<CharactorStateType, FormulaType>);
    };

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    // エディター開閉処理
    const openEditor = (id: CharactorStateType, name: string, originalFormula: string) => {
        setEditingFormula({ id, name, originalFormula });
        setEditorOpen(true);
    };

    const closeEditor = () => {
        setEditorOpen(false);
        setEditingFormula(null);
    };

    // デフォルト計算式から基本ステータス計算式を生成
    const basicStatusFormulas = [
        {
            id: '__strength' as CharactorStateType,
            name: '筋力 (Strength)',
            formula: DEFAULT_FORMULAS.__strength,
            components: parseFormulaString(DEFAULT_FORMULAS.__strength)
        },
        {
            id: '__vitality' as CharactorStateType,
            name: '体力 (Vitality)',
            formula: DEFAULT_FORMULAS.__vitality,
            components: parseFormulaString(DEFAULT_FORMULAS.__vitality)
        },
        {
            id: '__dexterity' as CharactorStateType,
            name: '器用 (Dexterity)',
            formula: DEFAULT_FORMULAS.__dexterity,
            components: parseFormulaString(DEFAULT_FORMULAS.__dexterity)
        },
        {
            id: '__intelligence' as CharactorStateType,
            name: '知性 (Intelligence)',
            formula: DEFAULT_FORMULAS.__intelligence,
            components: parseFormulaString(DEFAULT_FORMULAS.__intelligence)
        },
        {
            id: '__agility' as CharactorStateType,
            name: '敏捷 (Agility)',
            formula: DEFAULT_FORMULAS.__agility,
            components: parseFormulaString(DEFAULT_FORMULAS.__agility)
        },
        {
            id: '__mentality' as CharactorStateType,
            name: '精神 (Mentality)',
            formula: DEFAULT_FORMULAS.__mentality,
            components: parseFormulaString(DEFAULT_FORMULAS.__mentality)
        }
    ];

    // HP・MP計算式（仮のデータ）
    const hpMpFormulas = [
        {
            id: '__hitPoint' as CharactorStateType,
            name: 'HP (Hit Point)',
            formula: DEFAULT_FORMULAS.__hitPoint,
            components: parseFormulaString(DEFAULT_FORMULAS.__hitPoint)
        },
        {
            id: '__magicPoint' as CharactorStateType,
            name: 'MP (Magic Point)',
            formula: DEFAULT_FORMULAS.__magicPoint,
            components: parseFormulaString(DEFAULT_FORMULAS.__magicPoint)
        }
    ];

    // 攻撃力計算式（仮のデータ）
    const attackFormulas = [
        {
            id: '__meleeAttack' as CharactorStateType,
            name: '近接攻撃力 (Melee Attack)',
            formula: DEFAULT_FORMULAS.__meleeAttack,
            components: parseFormulaString(DEFAULT_FORMULAS.__meleeAttack)
        },
        {
            id: '__magicAttack' as CharactorStateType,
            name: '魔法攻撃力 (Magic Attack)',
            formula: DEFAULT_FORMULAS.__magicAttack,
            components: parseFormulaString(DEFAULT_FORMULAS.__magicAttack)
        },
        {
            id: '__rangeAttack' as CharactorStateType,
            name: '遠距離攻撃力 (Range Attack)',
            formula: DEFAULT_FORMULAS.__rangeAttack,
            components: parseFormulaString(DEFAULT_FORMULAS.__rangeAttack)
        }
    ];

    // 防御・命中・回避計算式（仮のデータ）
    const defenseFormulas = [
        {
            id: '__physicalDefense' as CharactorStateType,
            name: '物理防御力 (Physical Defense)',
            formula: DEFAULT_FORMULAS.__physicalDefense,
            components: parseFormulaString(DEFAULT_FORMULAS.__physicalDefense)
        },
        {
            id: '__magicalDefense' as CharactorStateType,
            name: '魔法防御力 (Magical Defense)',
            formula: DEFAULT_FORMULAS.__magicalDefense,
            components: parseFormulaString(DEFAULT_FORMULAS.__magicalDefense)
        },
        {
            id: '__accuracy' as CharactorStateType,
            name: '命中率 (Accuracy)',
            formula: DEFAULT_FORMULAS.__accuracy,
            components: parseFormulaString(DEFAULT_FORMULAS.__accuracy)
        },
        {
            id: '__dodging' as CharactorStateType,
            name: '回避率 (Dodging)',
            formula: DEFAULT_FORMULAS.__dodging,
            components: parseFormulaString(DEFAULT_FORMULAS.__dodging)
        },
        {
            id: '__resistance' as CharactorStateType,
            name: '全体抵抗 (Resistance)',
            formula: DEFAULT_FORMULAS.__resistance,
            components: parseFormulaString(DEFAULT_FORMULAS.__resistance)
        }
    ];

    // その他のステータス計算式（仮のデータ）
    const otherFormulas = [
        {
            id: '__movementSpeed' as CharactorStateType,
            name: '移動速度 (Movement Speed)',
            formula: DEFAULT_FORMULAS.__movementSpeed,
            components: parseFormulaString(DEFAULT_FORMULAS.__movementSpeed)
        },
        {
            id: '__attackSpeed' as CharactorStateType,
            name: '攻撃速度 (Attack Speed)',
            formula: DEFAULT_FORMULAS.__attackSpeed,
            components: parseFormulaString(DEFAULT_FORMULAS.__attackSpeed)
        },
        {
            id: '__hitPointRecovery' as CharactorStateType,
            name: 'HP回復 (HP Recovery)',
            formula: DEFAULT_FORMULAS.__hitPointRecovery,
            components: parseFormulaString(DEFAULT_FORMULAS.__hitPointRecovery)
        },
        {
            id: '__magicPointRecovery' as CharactorStateType,
            name: 'MP回復 (MP Recovery)',
            formula: DEFAULT_FORMULAS.__magicPointRecovery,
            components: parseFormulaString(DEFAULT_FORMULAS.__magicPointRecovery)
        }
    ];

    return (
        <PageContainer
            title="計算式"
            icon={<FunctionsIcon sx={{ fontSize: 32 }} />}
        >
            <Box sx={{ width: '100%' }}>
                {/* 概要説明 */}
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box flex={1}>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                このページでは、Rohan Calculatorで使用されているキャラクターステータスの計算式を詳しく解説します。
                                各計算式は実際のゲーム仕様に基づいて実装されており、装備・スキル・レベルなどの要素がどのように最終ステータスに影響するかを確認できます。
                            </Typography>
                            <Typography variant="body2" color="primary">
                                各計算式はカスタマイズ可能です。編集ボタンから独自の計算式に変更できます。保存した計算式はブラウザのキャッシュに保存されます。
                            </Typography>
                        </Box>
                        <Box display="flex" gap={1} ml={2} flexWrap="wrap" alignItems="center">
                            <Chip
                                label={`${Object.keys(customizedFormulas).length}個カスタム中`}
                                color={Object.keys(customizedFormulas).length > 0 ? "primary" : "default"}
                                size="small"
                                icon={<SettingsIcon />}
                            />
                            {Object.keys(customizedFormulas).length > 0 && (
                                <Button
                                    onClick={handleResetAllFormulas}
                                    size="small"
                                    variant="outlined"
                                    color="warning"
                                    startIcon={<RestoreIcon />}
                                    sx={{ fontSize: '0.75rem' }}
                                >
                                    全式リセット
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Alert>

                {/* タブ */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="計算式タブ">
                        <Tab
                            label="基本ステータス"
                            icon={<StrengthIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            label="HP・MP"
                            icon={<HealthIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            label="攻撃力"
                            icon={<AttackIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            label="防御・命中・回避・抵抗"
                            icon={<DefenseIcon />}
                            iconPosition="start"
                        />
                        <Tab
                            label="速度・回復"
                            icon={<SpeedIcon />}
                            iconPosition="start"
                        />
                    </Tabs>
                </Box>

                {/* 基本ステータスタブ */}
                <TabPanel value={tabValue} index={0}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        基本ステータス計算式
                    </Typography>

                    <Stack spacing={3}>
                        {basicStatusFormulas.map((stat, index) => (
                            <FormulaCard
                                key={index}
                                formulaId={stat.id}
                                formulaName={stat.name}
                                originalFormula={stat.formula}
                                components={stat.components}
                                onEdit={openEditor}
                            />
                        ))}
                    </Stack>
                </TabPanel>

                {/* HP・MPタブ */}
                <TabPanel value={tabValue} index={1}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        HP・MP計算式
                    </Typography>

                    <Stack spacing={3}>
                        {hpMpFormulas.map((stat, index) => (
                            <FormulaCard
                                key={index}
                                formulaId={stat.id}
                                formulaName={stat.name}
                                originalFormula={stat.formula}
                                components={stat.components}
                                onEdit={openEditor}
                            />
                        ))}
                    </Stack>
                </TabPanel>

                {/* 攻撃力タブ */}
                <TabPanel value={tabValue} index={2}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        攻撃力計算式
                    </Typography>

                    <Stack spacing={3}>
                        {attackFormulas.map((attack, index) => (
                            <FormulaCard
                                key={index}
                                formulaId={attack.id}
                                formulaName={attack.name}
                                originalFormula={attack.formula}
                                components={attack.components}
                                onEdit={openEditor}
                            />
                        ))}
                    </Stack>
                </TabPanel>

                {/* 防御・命中・回避・抵抗タブ */}
                <TabPanel value={tabValue} index={3}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        防御・命中・回避・抵抗計算式
                    </Typography>

                    <Stack spacing={3}>
                        {defenseFormulas.map((defense, index) => (
                            <FormulaCard
                                key={index}
                                formulaId={defense.id}
                                formulaName={defense.name}
                                originalFormula={defense.formula}
                                components={defense.components}
                                onEdit={openEditor}
                            />
                        ))}
                    </Stack>
                </TabPanel>

                {/* 速度・回復タブ */}
                <TabPanel value={tabValue} index={4}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                        速度・回復計算式
                    </Typography>

                    <Stack spacing={3}>
                        {otherFormulas.map((other, index) => (
                            <FormulaCard
                                key={index}
                                formulaId={other.id}
                                formulaName={other.name}
                                originalFormula={other.formula}
                                components={other.components}
                                onEdit={openEditor}
                            />
                        ))}
                    </Stack>
                </TabPanel>
            </Box>

            {/* フォーミュラエディター */}
            {editingFormula && (
                <FormulaEditor
                    open={editorOpen}
                    onClose={closeEditor}
                    formulaName={editingFormula.name}
                    initialFormula={editingFormula.originalFormula}
                    statusType={editingFormula.id}
                />
            )}

        </PageContainer>
    );
};

export default Formula;
