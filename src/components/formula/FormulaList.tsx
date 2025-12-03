import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    Grid,
    Alert,
    Divider,
    Tooltip,
    IconButton,
    Switch,
    FormControlLabel,
    Paper,
    LinearProgress,
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    Edit as EditIcon,
    Refresh as RefreshIcon,
    PlayArrow as PlayIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
    Code as CodeIcon,
    TrendingUp as TrendingUpIcon,
    Security as SecurityIcon,
} from '@mui/icons-material';

interface FormulaCardProps {
    id: string;
    name: string;
    category: string;
    formula: string;
    components: string[];
    isCustomized: boolean;
    complexity: 'low' | 'medium' | 'high';
    performance: number; // ms
    onEdit: () => void;
    onReset: () => void;
    onTest: () => void;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({
    name,
    category,
    formula,
    components,
    isCustomized,
    complexity,
    performance,
    onEdit,
    onReset,
    onTest,
}) => {
    const [showFormula, setShowFormula] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const getComplexityColor = (complexity: string) => {
        switch (complexity) {
            case 'low': return 'success';
            case 'medium': return 'warning';
            case 'high': return 'error';
            default: return 'default';
        }
    };

    const getPerformanceColor = (perf: number) => {
        if (perf < 1) return 'success';
        if (perf < 5) return 'warning';
        return 'error';
    };

    return (
        <Card
            elevation={isCustomized ? 4 : 2}
            sx={{
                transition: 'all 0.3s ease-in-out',
                border: isCustomized ? 2 : 0,
                borderColor: isCustomized ? 'primary.main' : 'transparent',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                },
            }}
        >
            <CardContent>
                {/* ヘッダー部分 */}
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Box flex={1}>
                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                            <Typography variant="h6" color="primary">
                                {name}
                            </Typography>
                            {isCustomized && (
                                <Chip
                                    label="カスタム"
                                    size="small"
                                    color="primary"
                                    icon={<CodeIcon />}
                                />
                            )}
                        </Box>

                        <Box display="flex" gap={1} flexWrap="wrap" mb={1}>
                            <Chip
                                label={`複雑度: ${complexity}`}
                                size="small"
                                color={getComplexityColor(complexity) as any}
                                variant="outlined"
                            />
                            <Chip
                                label={`${performance.toFixed(2)}ms`}
                                size="small"
                                color={getPerformanceColor(performance) as any}
                                variant="outlined"
                                icon={<TrendingUpIcon />}
                            />
                            <Chip
                                label={category}
                                size="small"
                                variant="outlined"
                            />
                        </Box>
                    </Box>

                    {/* アクションボタン */}
                    <Box display="flex" gap={0.5}>
                        <Tooltip title="計算式を表示/非表示">
                            <IconButton
                                size="small"
                                onClick={() => setShowFormula(!showFormula)}
                            >
                                {showFormula ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="テスト実行">
                            <IconButton size="small" onClick={onTest}>
                                <PlayIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="計算式を編集">
                            <IconButton size="small" onClick={onEdit} color="primary">
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        {isCustomized && (
                            <Tooltip title="元の計算式に戻す">
                                <IconButton size="small" onClick={onReset} color="warning">
                                    <RefreshIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                </Box>

                {/* 計算式表示 */}
                {showFormula && (
                    <Paper
                        sx={{
                            p: 2,
                            mb: 2,
                            backgroundColor: 'grey.50',
                            border: 1,
                            borderColor: 'grey.300',
                        }}
                    >
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="subtitle2" color="text.secondary">
                                計算式:
                            </Typography>
                            <Tooltip title="安全性検証済み">
                                <SecurityIcon color="success" fontSize="small" />
                            </Tooltip>
                        </Box>
                        <Box
                            sx={{
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                backgroundColor: '#1e1e1e',
                                color: '#d4d4d4',
                                p: 1.5,
                                borderRadius: 1,
                                overflow: 'auto',
                                maxHeight: 200,
                            }}
                        >
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                                {formula}
                            </pre>
                        </Box>
                    </Paper>
                )}

                {/* 詳細情報（アコーディオン） */}
                <Accordion
                    expanded={expanded}
                    onChange={() => setExpanded(!expanded)}
                    elevation={0}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ px: 0, minHeight: 'auto' }}
                    >
                        <Typography variant="subtitle2">
                            構成要素と詳細情報
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                                <Typography variant="subtitle2" gutterBottom>
                                    構成要素:
                                </Typography>
                                <Box>
                                    {components.map((component, idx) => (
                                        <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                                            • {component}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle2" gutterBottom>
                                    パフォーマンス:
                                </Typography>
                                <Box sx={{ mb: 1 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        実行時間: {performance.toFixed(2)}ms
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={Math.min(performance * 10, 100)}
                                        color={getPerformanceColor(performance) as any}
                                        sx={{ mt: 0.5 }}
                                    />
                                </Box>
                                {isCustomized && (
                                    <Alert severity="info" sx={{ mt: 1 }}>
                                        <Typography variant="caption">
                                            カスタム計算式が適用されています
                                        </Typography>
                                    </Alert>
                                )}
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    );
};

// フォーミュラ一覧コンポーネント
interface FormulaListProps {
    formulas: Array<{
        id: string;
        name: string;
        category: string;
        formula: string;
        components: string[];
        isCustomized: boolean;
        complexity: 'low' | 'medium' | 'high';
        performance: number;
    }>;
    onEditFormula: (id: string, name: string, formula: string) => void;
    onResetFormula: (id: string) => void;
    onTestFormula: (id: string) => void;
}

export const FormulaList: React.FC<FormulaListProps> = ({
    formulas,
    onEditFormula,
    onResetFormula,
    onTestFormula,
}) => {
    const [showCustomOnly, setShowCustomOnly] = useState(false);
    const selectedCategory = 'all'; // 将来の拡張用に保持

    const filteredFormulas = formulas.filter(formula => {
        const matchesCustom = !showCustomOnly || formula.isCustomized;
        const matchesCategory = selectedCategory === 'all' || formula.category === selectedCategory;
        return matchesCustom && matchesCategory;
    });

    const customizedCount = formulas.filter(f => f.isCustomized).length;

    return (
        <Box>
            {/* フィルターコントロール */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={showCustomOnly}
                                    onChange={(e) => setShowCustomOnly(e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="カスタム計算式のみ表示"
                        />

                        <Divider orientation="vertical" flexItem />

                        <Typography variant="body2" color="text.secondary">
                            {customizedCount > 0 ? (
                                <>
                                    <strong>{customizedCount}</strong>個の計算式がカスタマイズされています
                                </>
                            ) : (
                                'カスタマイズされた計算式はありません'
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Paper>

            {/* 計算式カード一覧 */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {filteredFormulas.map((formula) => (
                    <FormulaCard
                        key={formula.id}
                        id={formula.id}
                        name={formula.name}
                        category={formula.category}
                        formula={formula.formula}
                        components={formula.components}
                        isCustomized={formula.isCustomized}
                        complexity={formula.complexity}
                        performance={formula.performance}
                        onEdit={() => onEditFormula(formula.id, formula.name, formula.formula)}
                        onReset={() => onResetFormula(formula.id)}
                        onTest={() => onTestFormula(formula.id)}
                    />
                ))}
            </Box>

            {filteredFormulas.length === 0 && (
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        {showCustomOnly ? 'カスタム計算式が見つかりません' : '計算式が見つかりません'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {showCustomOnly
                            ? '計算式を編集してカスタマイズしてみてください'
                            : 'フィルター条件を変更してください'
                        }
                    </Typography>
                </Paper>
            )}
        </Box>
    );
};