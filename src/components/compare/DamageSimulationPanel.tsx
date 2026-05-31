import React from "react";
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
import { calculateDamage, type CombatDamageType } from "../../modules/combat";
import type { CalculatedCharacter } from "../../modules/character/types";

type DamageSimulationPanelProps = {
    left: CalculatedCharacter;
    right: CalculatedCharacter;
};

type DamageRow = {
    damageType: CombatDamageType;
    label: string;
};

const damageRows: DamageRow[] = [
    { damageType: "melee", label: "近接" },
    { damageType: "range", label: "遠距離" },
    { damageType: "magic", label: "魔法" },
];

const formatDamage = (value: number): string => value.toLocaleString();

export const DamageSimulationPanel: React.FC<DamageSimulationPanelProps> = ({
    left,
    right,
}) => {
    const rows = damageRows.map((row) => {
        const leftToRight = calculateDamage({
            attacker: left,
            defender: right,
            action: {
                type: "normalAttack",
                damageType: row.damageType,
            },
        });
        const rightToLeft = calculateDamage({
            attacker: right,
            defender: left,
            action: {
                type: "normalAttack",
                damageType: row.damageType,
            },
        });

        return {
            ...row,
            leftToRight,
            rightToLeft,
            difference: leftToRight.damage - rightToLeft.damage,
        };
    });

    return (
        <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    ダメージシミュレーション
                </Typography>
                <Chip size="small" label="通常攻撃" />
            </Box>
            <TableContainer>
                <Table
                    size="small"
                    aria-label="damage simulation"
                    sx={{
                        tableLayout: "fixed",
                        "& .MuiTableCell-root": {
                            px: 1,
                            py: 0.5,
                            whiteSpace: "nowrap",
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 80 }}>種別</TableCell>
                            <TableCell align="right">左 → 右</TableCell>
                            <TableCell align="right">右 → 左</TableCell>
                            <TableCell align="right" sx={{ width: 96 }}>差分</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.damageType} hover>
                                <TableCell>{row.label}</TableCell>
                                <TableCell align="right">{formatDamage(row.leftToRight.damage)}</TableCell>
                                <TableCell align="right">{formatDamage(row.rightToLeft.damage)}</TableCell>
                                <TableCell align="right">
                                    {row.difference > 0 ? "+" : ""}{formatDamage(row.difference)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
