export type FormulaComplexity = 'low' | 'medium' | 'high';

export interface FormulaListItem {
    id: string;
    name: string;
    category: string;
    formula: string;
    components: string[];
    isCustomized: boolean;
    complexity: FormulaComplexity;
    performance: number;
}
