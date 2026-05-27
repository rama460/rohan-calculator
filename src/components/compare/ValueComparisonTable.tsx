import {
    Box,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import type { CharacterValueKey } from "../../modules/character/constants";

type ComparisonValueItem = {
    key: CharacterValueKey;
    title: string;
};

const comparisonValueItems: ComparisonValueItem[] = [
    { key: "__meleeAttack", title: "近距離攻撃力" },
    { key: "__rangeAttack", title: "遠距離攻撃力" },
    { key: "__magicAttack", title: "魔法攻撃力" },
    { key: "__physicalDefense", title: "物理防御力" },
    { key: "__magicalDefense", title: "魔法防御力" },
    { key: "__hitPoint", title: "HP" },
    { key: "__magicPoint", title: "MP" },
    { key: "__accuracy", title: "命中率" },
    { key: "__dodging", title: "回避率" },
    { key: "__resistance", title: "全体 抵抗" },
    { key: "__movementSpeed", title: "移動速度" },
    { key: "__attackSpeed", title: "攻撃速度" },
    { key: "__hitPointRecovery", title: "HP回復" },
    { key: "__magicPointRecovery", title: "MP回復" },
];

type ValueComparisonTableProps = {
    leftValues: Record<CharacterValueKey, number>;
    rightValues: Record<CharacterValueKey, number>;
};

const numberFormatter = new Intl.NumberFormat("ja-JP");

const formatDiff = (diff: number): string => {
    if (diff > 0) {
        return `+${numberFormatter.format(diff)}`;
    }
    return numberFormatter.format(diff);
};

export const ValueComparisonTable: React.FC<ValueComparisonTableProps> = ({
    leftValues,
    rightValues,
}) => (
    <TableContainer>
        <Table size="small" aria-label="character value comparison">
            <TableHead>
                <TableRow>
                    <TableCell>項目</TableCell>
                    <TableCell align="right">左</TableCell>
                    <TableCell align="right">右</TableCell>
                    <TableCell align="right">差分</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {comparisonValueItems.map((item) => {
                    const left = leftValues[item.key] ?? 0;
                    const right = rightValues[item.key] ?? 0;
                    const diff = right - left;
                    return (
                        <TableRow key={item.key} hover>
                            <TableCell>
                                <Typography variant="body2">{item.title}</Typography>
                            </TableCell>
                            <TableCell align="right">{numberFormatter.format(left)}</TableCell>
                            <TableCell align="right">{numberFormatter.format(right)}</TableCell>
                            <TableCell align="right">
                                <Box display="flex" justifyContent="flex-end">
                                    <Chip
                                        label={formatDiff(diff)}
                                        size="small"
                                        color={diff > 0 ? "success" : diff < 0 ? "error" : "default"}
                                        variant={diff === 0 ? "outlined" : "filled"}
                                        sx={{ minWidth: 72 }}
                                    />
                                </Box>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </TableContainer>
);
