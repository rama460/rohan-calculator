import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    CardContent,
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';
import {
    Code as CodeIcon,
    ExpandMore as ExpandMoreIcon,
    Refresh as RefreshIcon,
} from '@mui/icons-material';
import { useAtomValue, useSetAtom } from 'jotai';

import { CharactorStateType } from '../../modules/character/constants';
import {
    resetUiCustomFormulaFamily,
    uiCustomFormulaAtomFamily,
    uiIsFormulaCustomizedFamily,
} from '../../modules/state/ui';
import { FormulaComponents } from './formulaDescription';

interface FormulaActionsProps {
    formulaId: CharactorStateType;
    formulaName: string;
    originalFormula: string;
    onEdit: (id: CharactorStateType, name: string, originalFormula: string) => void;
}

const FormulaActions: React.FC<FormulaActionsProps> = ({
    formulaId,
    formulaName,
    originalFormula,
    onEdit,
}) => {
    const isCustomized = useAtomValue(uiIsFormulaCustomizedFamily(formulaId));
    const resetFormula = useSetAtom(resetUiCustomFormulaFamily(formulaId));

    return (
        <Box display="flex" gap={0.5} alignItems="center">
            {isCustomized && (
                <Chip
                    label="カスタム"
                    size="small"
                    color="primary"
                    variant="outlined"
                />
            )}
            <Tooltip title="計算式を編集">
                <IconButton
                    size="small"
                    onClick={() => onEdit(formulaId, formulaName, originalFormula)}
                    color="primary"
                >
                    <CodeIcon fontSize="small" />
                </IconButton>
            </Tooltip>
            {isCustomized && (
                <Tooltip title="元の計算式に戻す">
                    <IconButton
                        size="small"
                        onClick={() => resetFormula()}
                        color="warning"
                    >
                        <RefreshIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    );
};

interface ComponentSectionProps {
    title: string;
    color: string;
    components: string[];
}

const ComponentSection: React.FC<ComponentSectionProps> = ({ title, color, components }) => {
    if (components.length === 0) {
        return null;
    }

    return (
        <Box>
            <Typography variant="body2" fontWeight="bold" color={color} gutterBottom>
                {title}
            </Typography>
            <List dense sx={{ pl: 2 }}>
                {components.map((component, idx) => (
                    <ListItem key={idx} sx={{ py: 0.2 }}>
                        <ListItemText
                            primary={component}
                            primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.secondary',
                                sx: { fontFamily: 'monospace', fontSize: '0.8rem' }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

interface FormulaCardProps {
    formulaId: CharactorStateType;
    formulaName: string;
    originalFormula: string;
    components: FormulaComponents;
    onEdit: (id: CharactorStateType, name: string, originalFormula: string) => void;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({
    formulaId,
    formulaName,
    originalFormula,
    components,
    onEdit,
}) => {
    const customFormula = useAtomValue(uiCustomFormulaAtomFamily(formulaId));
    const displayFormula = customFormula?.formula || originalFormula;
    const componentCount = [
        components.basicVariables.length,
        components.specialVariables.length,
        components.raceVariables.length,
        components.mathFunctions.length,
        components.otherVariables.length,
    ].reduce((sum, count) => sum + count, 0);

    return (
        <Card elevation={2}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="h6" color="primary">
                        {formulaName}
                    </Typography>
                    <FormulaActions
                        formulaId={formulaId}
                        formulaName={formulaName}
                        originalFormula={originalFormula}
                        onEdit={onEdit}
                    />
                </Box>

                <Paper sx={{ p: 2, mb: 2, backgroundColor: 'grey.50' }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        計算式:
                    </Typography>
                    <Typography
                        variant="body2"
                        component="pre"
                        sx={{
                            fontFamily: 'monospace',
                            fontSize: '0.82rem',
                            whiteSpace: 'pre-wrap',
                            margin: 0
                        }}
                    >
                        {displayFormula}
                    </Typography>
                </Paper>

                <Accordion defaultExpanded={false}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2">
                            構成要素 ({componentCount}個の変数・関数を使用)
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={2}>
                            <ComponentSection title="📊 基本変数" color="primary" components={components.basicVariables} />
                            <ComponentSection title="✨ 特殊変数 (計算結果参照)" color="secondary" components={components.specialVariables} />
                            <ComponentSection title="🧬 種族情報" color="info.main" components={components.raceVariables} />
                            <ComponentSection title="🧮 数学関数" color="success.main" components={components.mathFunctions} />
                            <ComponentSection title="🔧 その他の変数" color="warning.main" components={components.otherVariables} />

                            {componentCount === 0 && (
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                    この計算式は定数のみで構成されています。
                                </Typography>
                            )}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
        </Card>
    );
};
