import React, { useState } from 'react';
import {
    Box,
    Divider,
    FormControlLabel,
    Paper,
    Switch,
    Typography,
} from '@mui/material';

import { FormulaListCard } from './FormulaListCard';
import { FormulaListItem } from './FormulaListTypes';

interface FormulaListProps {
    formulas: FormulaListItem[];
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
    const selectedCategory = 'all';

    const filteredFormulas = formulas.filter(formula => {
        const matchesCustom = !showCustomOnly || formula.isCustomized;
        const matchesCategory = selectedCategory === 'all' || formula.category === selectedCategory;
        return matchesCustom && matchesCategory;
    });

    const customizedCount = formulas.filter(formula => formula.isCustomized).length;

    return (
        <Box>
            <Paper sx={{ p: 2, mb: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={showCustomOnly}
                                    onChange={(event) => setShowCustomOnly(event.target.checked)}
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

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {filteredFormulas.map((formula) => (
                    <FormulaListCard
                        key={formula.id}
                        formula={formula}
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
