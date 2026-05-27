import React, { useState } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Card,
    CardContent,
    Chip,
    ChipProps,
    Grid,
    IconButton,
    LinearProgress,
    LinearProgressProps,
    Paper,
    Tooltip,
    Typography,
} from '@mui/material';
import {
    Code as CodeIcon,
    Edit as EditIcon,
    ExpandMore as ExpandMoreIcon,
    PlayArrow as PlayIcon,
    Refresh as RefreshIcon,
    Security as SecurityIcon,
    TrendingUp as TrendingUpIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';

import { FormulaComplexity, FormulaListItem } from './FormulaListTypes';

interface FormulaListCardProps {
    formula: FormulaListItem;
    onEdit: () => void;
    onReset: () => void;
    onTest: () => void;
}

const getComplexityColor = (complexity: FormulaComplexity): ChipProps['color'] => {
    switch (complexity) {
        case 'low':
            return 'success';
        case 'medium':
            return 'warning';
        case 'high':
            return 'error';
    }
};

const getPerformanceColor = (performance: number): ChipProps['color'] => {
    if (performance < 1) return 'success';
    if (performance < 5) return 'warning';
    return 'error';
};

const getProgressPerformanceColor = (performance: number): LinearProgressProps['color'] => {
    if (performance < 1) return 'success';
    if (performance < 5) return 'warning';
    return 'error';
};

export const FormulaListCard: React.FC<FormulaListCardProps> = ({
    formula,
    onEdit,
    onReset,
    onTest,
}) => {
    const [showFormula, setShowFormula] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            elevation={formula.isCustomized ? 4 : 2}
            sx={{
                transition: 'all 0.3s ease-in-out',
                border: formula.isCustomized ? 2 : 0,
                borderColor: formula.isCustomized ? 'primary.main' : 'transparent',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 6,
                },
            }}
        >
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Box flex={1}>
                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                            <Typography variant="h6" color="primary">
                                {formula.name}
                            </Typography>
                            {formula.isCustomized && (
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
                                label={`複雑度: ${formula.complexity}`}
                                size="small"
                                color={getComplexityColor(formula.complexity)}
                                variant="outlined"
                            />
                            <Chip
                                label={`${formula.performance.toFixed(2)}ms`}
                                size="small"
                                color={getPerformanceColor(formula.performance)}
                                variant="outlined"
                                icon={<TrendingUpIcon />}
                            />
                            <Chip
                                label={formula.category}
                                size="small"
                                variant="outlined"
                            />
                        </Box>
                    </Box>

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
                        {formula.isCustomized && (
                            <Tooltip title="元の計算式に戻す">
                                <IconButton size="small" onClick={onReset} color="warning">
                                    <RefreshIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                </Box>

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
                                {formula.formula}
                            </pre>
                        </Box>
                    </Paper>
                )}

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
                                    {formula.components.map((component, idx) => (
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
                                        実行時間: {formula.performance.toFixed(2)}ms
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={Math.min(formula.performance * 10, 100)}
                                        color={getProgressPerformanceColor(formula.performance)}
                                        sx={{ mt: 0.5 }}
                                    />
                                </Box>
                                {formula.isCustomized && (
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
