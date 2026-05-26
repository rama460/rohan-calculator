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
import { Formula as FormulaType } from '../../modules/state/custom-formulas';
import { FormulaCard } from './FormulaCard';
import {
    attackFormulas,
    basicStatusFormulas,
    defenseFormulas,
    hpMpFormulas,
    otherFormulas,
} from './formulaGroups';

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
