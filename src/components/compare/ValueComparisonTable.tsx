import {
    Box,
    Chip,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import type { CharacterValueKey } from "../../modules/character/constants";
import type { FormulaReferenceTrace, FormulaTrace } from "../../modules/character/types";
import { comparisonValueItems } from "./comparisonValueItems";

type ValueComparisonTableProps = {
    leftValues: Record<CharacterValueKey, number>;
    rightValues: Record<CharacterValueKey, number>;
    leftTraces: Partial<Record<CharacterValueKey, FormulaTrace>>;
    rightTraces: Partial<Record<CharacterValueKey, FormulaTrace>>;
};

const numberFormatter = new Intl.NumberFormat("ja-JP", {
    maximumFractionDigits: 3,
});

const formatDiff = (diff: number): string => {
    if (diff > 0) {
        return `+${numberFormatter.format(diff)}`;
    }
    return numberFormatter.format(diff);
};

const getLocalIntermediates = (trace: FormulaTrace | undefined): FormulaReferenceTrace[] => (
    trace?.references.filter((reference) => reference.source === "localIntermediate") ?? []
);

const getIntermediateNames = (
    leftReferences: FormulaReferenceTrace[],
    rightReferences: FormulaReferenceTrace[]
): string[] => (
    Array.from(new Set([
        ...leftReferences.map((reference) => reference.name),
        ...rightReferences.map((reference) => reference.name),
    ]))
);

const findIntermediateValue = (
    references: FormulaReferenceTrace[],
    name: string
): number | undefined => references.find((reference) => reference.name === name)?.value;

export const ValueComparisonTable: React.FC<ValueComparisonTableProps> = ({
    leftValues,
    rightValues,
    leftTraces,
    rightTraces,
}) => {
    const [expandedKeys, setExpandedKeys] = React.useState<ReadonlySet<CharacterValueKey>>(
        () => new Set()
    );

    const toggleExpanded = (key: CharacterValueKey) => {
        setExpandedKeys((current) => {
            const next = new Set(current);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    return (
        <TableContainer>
            <Table
                size="small"
                aria-label="character value comparison"
                sx={{
                    "& .MuiTableCell-root": {
                        px: 1,
                        py: 0.5,
                    },
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: 40 }} />
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
                        const leftReferences = getLocalIntermediates(leftTraces[item.key]);
                        const rightReferences = getLocalIntermediates(rightTraces[item.key]);
                        const intermediateNames = getIntermediateNames(leftReferences, rightReferences);
                        const isExpanded = expandedKeys.has(item.key);

                        return (
                            <React.Fragment key={item.key}>
                                <TableRow
                                    hover
                                    onClick={() => {
                                        if (intermediateNames.length > 0) {
                                            toggleExpanded(item.key);
                                        }
                                    }}
                                    sx={{
                                        cursor: intermediateNames.length > 0 ? "pointer" : "default",
                                    }}
                                >
                                    <TableCell>
                                        <IconButton
                                            size="small"
                                            disabled={intermediateNames.length === 0}
                                            aria-label={`${item.title} の中間ステータスを表示`}
                                        >
                                            {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={1}>
                                            <Typography variant="body2">{item.title}</Typography>
                                            <Chip
                                                label={`${intermediateNames.length} 件`}
                                                size="small"
                                                variant="outlined"
                                                sx={{ height: 20 }}
                                            />
                                        </Box>
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
                                <TableRow>
                                    <TableCell colSpan={5} sx={{ p: 0, borderBottom: isExpanded ? undefined : 0 }}>
                                        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                            <Box sx={{ p: 1, backgroundColor: "action.hover" }}>
                                                {intermediateNames.length === 0 ? (
                                                    <Typography variant="body2" color="text.secondary">
                                                        中間ステータスはありません
                                                    </Typography>
                                                ) : (
                                                    <Table
                                                        size="small"
                                                        aria-label={`${item.title} intermediate comparison`}
                                                        sx={{
                                                            "& .MuiTableCell-root": {
                                                                px: 1,
                                                                py: 0.25,
                                                            },
                                                        }}
                                                    >
                                                        <TableBody>
                                                            {intermediateNames.map((name) => {
                                                                const leftValue = findIntermediateValue(leftReferences, name);
                                                                const rightValue = findIntermediateValue(rightReferences, name);
                                                                const intermediateDiff = (rightValue ?? 0) - (leftValue ?? 0);

                                                                return (
                                                                    <TableRow key={name}>
                                                                        <TableCell>
                                                                            <Typography variant="body2" color="text.secondary">
                                                                                {name}
                                                                            </Typography>
                                                                        </TableCell>
                                                                        <TableCell align="right">
                                                                            {leftValue === undefined ? "-" : numberFormatter.format(leftValue)}
                                                                        </TableCell>
                                                                        <TableCell align="right">
                                                                            {rightValue === undefined ? "-" : numberFormatter.format(rightValue)}
                                                                        </TableCell>
                                                                        <TableCell align="right">
                                                                            <Box display="flex" justifyContent="flex-end">
                                                                                <Chip
                                                                                    label={formatDiff(intermediateDiff)}
                                                                                    size="small"
                                                                                    color={intermediateDiff > 0 ? "success" : intermediateDiff < 0 ? "error" : "default"}
                                                                                    variant={intermediateDiff === 0 ? "outlined" : "filled"}
                                                                                    sx={{ minWidth: 72 }}
                                                                                />
                                                                            </Box>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                );
                                                            })}
                                                        </TableBody>
                                                    </Table>
                                                )}
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
