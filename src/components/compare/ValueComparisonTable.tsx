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

type FormulaDefinitionMap = {
    localFormulas: Map<string, string>;
    finalFormula: string;
};

type FormulaTreeNode = {
    name: string;
    source: "formulaReference" | "contextValue";
    depth: number;
    formula?: string;
    children: FormulaTreeNode[];
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

const findIntermediateValue = (
    references: FormulaReferenceTrace[],
    name: string
): number | undefined => references.find((reference) => reference.name === name)?.value;

const removeComment = (line: string): string => {
    const commentIndex = line.indexOf("//");
    return commentIndex >= 0 ? line.slice(0, commentIndex) : line;
};

const parseFormulaDefinitions = (trace: FormulaTrace | undefined): FormulaDefinitionMap => {
    const localFormulas = new Map<string, string>();
    const finalFormulaLines: string[] = [];

    trace?.formulaSource.split("\n").forEach((line) => {
        const cleanLine = removeComment(line).trim();
        if (!cleanLine) {
            return;
        }

        const localMatch = cleanLine.match(/^@([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
        if (localMatch) {
            localFormulas.set(localMatch[1], localMatch[2].trim());
            return;
        }

        finalFormulaLines.push(cleanLine);
    });

    return {
        localFormulas,
        finalFormula: finalFormulaLines.join(" "),
    };
};

const extractFormulaReferenceNames = (formula: string | undefined): string[] => {
    if (!formula) {
        return [];
    }

    return Array.from(formula.matchAll(/\{([^}]+)\}/g)).map((match) => match[1]);
};

const ignoredIdentifierNames = new Set([
    "abs",
    "ceil",
    "false",
    "floor",
    "max",
    "min",
    "null",
    "pow",
    "round",
    "sqrt",
    "true",
    "undefined",
]);

const extractContextValueNames = (
    formula: string | undefined,
    leftTrace: FormulaTrace | undefined,
    rightTrace: FormulaTrace | undefined
): string[] => {
    if (!formula) {
        return [];
    }

    const contextValueNames = new Set([
        ...Object.keys(leftTrace?.contextValues ?? {}),
        ...Object.keys(rightTrace?.contextValues ?? {}),
    ]);
    const formulaWithoutReferences = formula.replace(/\{[^}]+\}/g, " ");

    return Array.from(formulaWithoutReferences.matchAll(/\b[A-Za-z_$][A-Za-z0-9_$]*\b/g))
        .map((match) => match[0])
        .filter((name) => contextValueNames.has(name) && !ignoredIdentifierNames.has(name));
};

const uniqueNames = (names: string[]): string[] => Array.from(new Set(names));

const buildFormulaTree = (
    leftTrace: FormulaTrace | undefined,
    rightTrace: FormulaTrace | undefined
): FormulaTreeNode[] => {
    const leftDefinitions = parseFormulaDefinitions(leftTrace);
    const rightDefinitions = parseFormulaDefinitions(rightTrace);

    const buildNode = (
        name: string,
        source: FormulaTreeNode["source"],
        depth: number,
        ancestors: ReadonlySet<string>
    ): FormulaTreeNode => {
        const formula = leftDefinitions.localFormulas.get(name) ?? rightDefinitions.localFormulas.get(name);
        const nextAncestors = new Set(ancestors);
        nextAncestors.add(name);

        const referenceChildren = formula
            ? uniqueNames(extractFormulaReferenceNames(formula))
                .filter((childName) => !nextAncestors.has(childName))
                .map((childName) => buildNode(childName, "formulaReference", depth + 1, nextAncestors))
            : [];
        const contextChildren = formula
            ? uniqueNames(extractContextValueNames(formula, leftTrace, rightTrace))
                .map((childName) => buildNode(childName, "contextValue", depth + 1, nextAncestors))
            : [];

        return {
            name,
            source,
            depth,
            formula,
            children: [...referenceChildren, ...contextChildren],
        };
    };

    const rootReferenceNames = uniqueNames([
        ...extractFormulaReferenceNames(leftDefinitions.finalFormula),
        ...extractFormulaReferenceNames(rightDefinitions.finalFormula),
    ]);
    const rootContextNames = uniqueNames([
        ...extractContextValueNames(leftDefinitions.finalFormula, leftTrace, rightTrace),
        ...extractContextValueNames(rightDefinitions.finalFormula, leftTrace, rightTrace),
    ]);

    return [
        ...rootReferenceNames.map((name) => buildNode(name, "formulaReference", 0, new Set())),
        ...rootContextNames.map((name) => buildNode(name, "contextValue", 0, new Set())),
    ];
};

const flattenFormulaTree = (nodes: FormulaTreeNode[]): FormulaTreeNode[] => (
    nodes.flatMap((node) => [node, ...flattenFormulaTree(node.children)])
);

const findTraceReferenceValue = (
    trace: FormulaTrace | undefined,
    name: string
): number | undefined => trace?.references.find((reference) => reference.name === name)?.value;

const findContextValue = (
    trace: FormulaTrace | undefined,
    name: string
): number | undefined => trace?.contextValues[name];

const findFormulaTreeNodeValue = (
    trace: FormulaTrace | undefined,
    localReferences: FormulaReferenceTrace[],
    node: FormulaTreeNode
): number | undefined => {
    if (node.source === "contextValue") {
        return findContextValue(trace, node.name);
    }

    return findTraceReferenceValue(trace, node.name)
        ?? findIntermediateValue(localReferences, node.name);
};

const getFinalFormula = (
    leftTrace: FormulaTrace | undefined,
    rightTrace: FormulaTrace | undefined
): string => (
    parseFormulaDefinitions(leftTrace).finalFormula ||
    parseFormulaDefinitions(rightTrace).finalFormula
);

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
                        const formulaTreeRows = flattenFormulaTree(buildFormulaTree(
                            leftTraces[item.key],
                            rightTraces[item.key]
                        ));
                        const finalFormula = getFinalFormula(leftTraces[item.key], rightTraces[item.key]);
                        const isExpanded = expandedKeys.has(item.key);

                        return (
                            <React.Fragment key={item.key}>
                                <TableRow
                                    hover
                                    onClick={() => {
                                        if (formulaTreeRows.length > 0) {
                                            toggleExpanded(item.key);
                                        }
                                    }}
                                    sx={{
                                        cursor: formulaTreeRows.length > 0 ? "pointer" : "default",
                                    }}
                                >
                                    <TableCell>
                                        <IconButton
                                            size="small"
                                            disabled={formulaTreeRows.length === 0}
                                            aria-label={`${item.title} の中間ステータスを表示`}
                                        >
                                            {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <Box>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Typography variant="body2">{item.title}</Typography>
                                                <Chip
                                                    label={`${formulaTreeRows.length} 件`}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{ height: 20 }}
                                                />
                                            </Box>
                                            {isExpanded && finalFormula && (
                                                <Typography
                                                    variant="caption"
                                                    color="text.disabled"
                                                    sx={{ display: "block", lineHeight: 1.2, mt: 0.25 }}
                                                >
                                                    {finalFormula}
                                                </Typography>
                                            )}
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
                                                {formulaTreeRows.length === 0 ? (
                                                    <Typography variant="body2" color="text.secondary">
                                                        計算要素はありません
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
                                                            {formulaTreeRows.map((node, index) => {
                                                                const leftValue = findFormulaTreeNodeValue(leftTraces[item.key], leftReferences, node);
                                                                const rightValue = findFormulaTreeNodeValue(rightTraces[item.key], rightReferences, node);
                                                                const intermediateDiff = (rightValue ?? 0) - (leftValue ?? 0);

                                                                return (
                                                                    <TableRow key={`${node.source}-${node.name}-${node.depth}-${index}`}>
                                                                        <TableCell>
                                                                            <Box
                                                                                sx={{
                                                                                    pl: node.depth * 2,
                                                                                    borderLeft: node.depth > 0 ? "1px solid" : "none",
                                                                                    borderColor: "divider",
                                                                                }}
                                                                            >
                                                                                <Typography variant="body2" color="text.secondary">
                                                                                    {node.name}
                                                                                </Typography>
                                                                                {node.formula && (
                                                                                    <Typography
                                                                                        variant="caption"
                                                                                        color="text.disabled"
                                                                                        sx={{ display: "block", lineHeight: 1.2 }}
                                                                                    >
                                                                                        {node.formula}
                                                                                    </Typography>
                                                                                )}
                                                                            </Box>
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
