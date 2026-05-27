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
import type { AggregatedOptions } from "../../modules/character/types";
import { BuiltinOptions } from "../../static/options";
import type { BuiltinOptionKeyType } from "../../static/options";

type CombatModifierComparisonTableProps = {
    leftOptions: AggregatedOptions;
    rightOptions: AggregatedOptions;
};

type CombatModifierItem = {
    key: BuiltinOptionKeyType;
    label?: string;
};

const combatModifierItems: CombatModifierItem[] = [
    { key: "multiplyPVPAttack", label: "+PVP攻撃力%" },
    { key: "multiplyPVEAttack", label: "+PVE攻撃力%" },
    { key: "multiplyPVPDefense", label: "+PVP防御力%" },
    { key: "multiplyPVEDefense", label: "+PVE防御力%" },
    { key: "multiplyNegationRate", label: "ダメージ無効化率" },
    { key: "plusDamageReflection" },
    { key: "multiplyDamageReflectionRate" },
    { key: "plusCriticalRate" },
    { key: "multiplyCriticalRate" },
    { key: "multiplyCriticalDamage", label: "クリティカルダメージ%" },
    { key: "multiplyShieldBlockRate", label: "盾ブロック率%" },
    { key: "multiplyPhysicalParryRate", label: "物理パリィ率%" },
    { key: "multiplyPhysicalBlockRate", label: "物理ブロック率%" },
    { key: "multiplyMagicalBlockRate", label: "魔法ブロック率%" },
    { key: "multiplyDecreaseDamageTaken", label: "ダメージ減少率%" },
    { key: "multiplyDecreaseDamageTakenPenetration", label: "ダメージ減少率貫通%" },
    { key: "multiplyDefensePenetration", label: "防御貫通率%" },
    { key: "plusCriticalDamageMultiplyStrength" },
    { key: "plusCriticalDamageMultiplyVitality" },
    { key: "plusCriticalDamageMultiplyDexterity" },
    { key: "plusCriticalDamageMultiplyIntelligence" },
    { key: "plusCriticalDamageMultiplyAgility" },
    { key: "plusCriticalDamageMultiplyMentality" },
];

const numberFormatter = new Intl.NumberFormat("ja-JP", {
    maximumFractionDigits: 3,
});

const formatDiff = (diff: number): string => {
    if (diff > 0) {
        return `+${numberFormatter.format(diff)}`;
    }
    return numberFormatter.format(diff);
};

const getOptionValue = (options: AggregatedOptions, key: BuiltinOptionKeyType): number => (
    options[key] ?? 0
);

export const CombatModifierComparisonTable: React.FC<CombatModifierComparisonTableProps> = ({
    leftOptions,
    rightOptions,
}) => (
    <TableContainer>
        <Table
            size="small"
            aria-label="combat modifier comparison"
            sx={{
                "& .MuiTableCell-root": {
                    px: 1,
                    py: 0.5,
                },
            }}
        >
            <TableHead>
                <TableRow>
                    <TableCell>項目</TableCell>
                    <TableCell align="right">左</TableCell>
                    <TableCell align="right">右</TableCell>
                    <TableCell align="right">差分</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {combatModifierItems.map((item) => {
                    const left = getOptionValue(leftOptions, item.key);
                    const right = getOptionValue(rightOptions, item.key);
                    const diff = right - left;
                    const option = BuiltinOptions[item.key];

                    return (
                        <TableRow key={item.key} hover>
                            <TableCell>
                                <Typography variant="body2">
                                    {item.label ?? option.displayName}
                                </Typography>
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
