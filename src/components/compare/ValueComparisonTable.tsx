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

const formulaMathFunctions = {
    floor: Math.floor,
    ceil: Math.ceil,
    round: Math.round,
    max: Math.max,
    min: Math.min,
    abs: Math.abs,
    pow: Math.pow,
    sqrt: Math.sqrt,
} as const;

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

type TernaryParts = {
    condition: string;
    consequent: string;
    alternate: string;
};

const findTopLevelTernary = (formula: string): TernaryParts | undefined => {
    let depth = 0;
    let questionIndex = -1;

    for (let index = 0; index < formula.length; index += 1) {
        const char = formula[index];
        if (char === "(" || char === "{" || char === "[") {
            depth += 1;
        } else if (char === ")" || char === "}" || char === "]") {
            depth -= 1;
        } else if (char === "?" && depth === 0) {
            questionIndex = index;
            break;
        }
    }

    if (questionIndex < 0) {
        return undefined;
    }

    let nestedTernaryDepth = 0;
    for (let index = questionIndex + 1; index < formula.length; index += 1) {
        const char = formula[index];
        if (char === "(" || char === "{" || char === "[") {
            depth += 1;
        } else if (char === ")" || char === "}" || char === "]") {
            depth -= 1;
        } else if (char === "?" && depth === 0) {
            nestedTernaryDepth += 1;
        } else if (char === ":" && depth === 0) {
            if (nestedTernaryDepth === 0) {
                return {
                    condition: formula.slice(0, questionIndex).trim(),
                    consequent: formula.slice(questionIndex + 1, index).trim(),
                    alternate: formula.slice(index + 1).trim(),
                };
            }
            nestedTernaryDepth -= 1;
        }
    }

    return undefined;
};

const getReferenceExecutionName = (name: string): string =>
    `__ref_${name.replace(/[^A-Za-z0-9_$]/g, "_")}`;

const evaluateFormulaFragment = (
    formula: string | undefined,
    trace: FormulaTrace | undefined,
    definitions: FormulaDefinitionMap,
    resolving: ReadonlySet<string> = new Set()
): number | boolean | undefined => {
    if (!formula || !trace) {
        return undefined;
    }

    const executionContext: Record<string, unknown> = { ...formulaMathFunctions };
    let processedFormula = formula;

    uniqueNames(extractFormulaReferenceNames(formula)).forEach((name) => {
        const executionName = getReferenceExecutionName(name);
        const localFormula = definitions.localFormulas.get(name);
        const value = localFormula && !resolving.has(name)
            ? evaluateFormulaFragment(localFormula, trace, definitions, new Set([...resolving, name]))
            : findTraceReferenceValue(trace, name);

        executionContext[executionName] = value ?? 0;
        processedFormula = processedFormula.replace(
            new RegExp(`\\{${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\}`, "g"),
            executionName
        );
    });

    uniqueNames(extractContextValueNames(formula, trace, undefined)).forEach((name) => {
        executionContext[name] = trace.contextValues[name] ?? 0;
    });

    try {
        const func = new Function(...Object.keys(executionContext), `return (${processedFormula});`);
        const result = func(...Object.values(executionContext));
        return typeof result === "number" || typeof result === "boolean" ? result : undefined;
    } catch {
        return undefined;
    }
};

const getVisibleFormulaFragments = (
    formula: string | undefined,
    leftTrace: FormulaTrace | undefined,
    rightTrace: FormulaTrace | undefined,
    leftDefinitions: FormulaDefinitionMap,
    rightDefinitions: FormulaDefinitionMap
): string[] => {
    if (!formula) {
        return [];
    }

    const ternary = findTopLevelTernary(formula);
    if (!ternary) {
        return [formula];
    }

    const leftCondition = evaluateFormulaFragment(ternary.condition, leftTrace, leftDefinitions);
    const rightCondition = evaluateFormulaFragment(ternary.condition, rightTrace, rightDefinitions);
    const leftBoolean = typeof leftCondition === "boolean" ? leftCondition : undefined;
    const rightBoolean = typeof rightCondition === "boolean" ? rightCondition : undefined;

    if (leftBoolean === undefined || rightBoolean === undefined || leftBoolean !== rightBoolean) {
        return [formula];
    }

    const selectedBranch = leftBoolean ? ternary.consequent : ternary.alternate;
    return [
        ternary.condition,
        ...getVisibleFormulaFragments(
            selectedBranch,
            leftTrace,
            rightTrace,
            leftDefinitions,
            rightDefinitions
        ),
    ];
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
        const visibleFormulaFragments = getVisibleFormulaFragments(
            formula,
            leftTrace,
            rightTrace,
            leftDefinitions,
            rightDefinitions
        );

        const referenceChildren = visibleFormulaFragments.length > 0
            ? uniqueNames(visibleFormulaFragments.flatMap(extractFormulaReferenceNames))
                .filter((childName) => !nextAncestors.has(childName))
                .map((childName) => buildNode(childName, "formulaReference", depth + 1, nextAncestors))
            : [];
        const contextChildren = visibleFormulaFragments.length > 0
            ? uniqueNames(visibleFormulaFragments.flatMap((fragment) => extractContextValueNames(fragment, leftTrace, rightTrace)))
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

    const rootFormulaFragments = uniqueNames([
        ...getVisibleFormulaFragments(leftDefinitions.finalFormula, leftTrace, rightTrace, leftDefinitions, rightDefinitions),
        ...getVisibleFormulaFragments(rightDefinitions.finalFormula, leftTrace, rightTrace, leftDefinitions, rightDefinitions),
    ]);
    const rootReferenceNames = uniqueNames(rootFormulaFragments.flatMap(extractFormulaReferenceNames));
    const rootContextNames = uniqueNames(
        rootFormulaFragments.flatMap((fragment) => extractContextValueNames(fragment, leftTrace, rightTrace))
    );

    return [
        ...rootReferenceNames.map((name) => buildNode(name, "formulaReference", 0, new Set())),
        ...rootContextNames.map((name) => buildNode(name, "contextValue", 0, new Set())),
    ];
};

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

const isZeroInBothTraces = (
    leftValue: number | undefined,
    rightValue: number | undefined
): boolean => leftValue === 0 && rightValue === 0;

const countVisibleFormulaTreeNodes = (
    nodes: FormulaTreeNode[],
    leftTrace: FormulaTrace | undefined,
    rightTrace: FormulaTrace | undefined,
    leftReferences: FormulaReferenceTrace[],
    rightReferences: FormulaReferenceTrace[]
): number => nodes.reduce((count, node) => {
    const leftValue = findFormulaTreeNodeValue(leftTrace, leftReferences, node);
    const rightValue = findFormulaTreeNodeValue(rightTrace, rightReferences, node);
    if (isZeroInBothTraces(leftValue, rightValue)) {
        return count + 1;
    }

    return count + 1 + countVisibleFormulaTreeNodes(
        node.children,
        leftTrace,
        rightTrace,
        leftReferences,
        rightReferences
    );
}, 0);

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
                        const leftTrace = leftTraces[item.key];
                        const rightTrace = rightTraces[item.key];
                        const leftReferences = getLocalIntermediates(leftTraces[item.key]);
                        const rightReferences = getLocalIntermediates(rightTraces[item.key]);
                        const formulaTree = buildFormulaTree(leftTrace, rightTrace);
                        const formulaTreeRowCount = countVisibleFormulaTreeNodes(
                            formulaTree,
                            leftTrace,
                            rightTrace,
                            leftReferences,
                            rightReferences
                        );
                        const finalFormula = getFinalFormula(leftTraces[item.key], rightTraces[item.key]);
                        const isExpanded = expandedKeys.has(item.key);

                        return (
                            <React.Fragment key={item.key}>
                                <TableRow
                                    hover
                                    onClick={() => {
                                        if (formulaTreeRowCount > 0) {
                                            toggleExpanded(item.key);
                                        }
                                    }}
                                    sx={{
                                        cursor: formulaTreeRowCount > 0 ? "pointer" : "default",
                                    }}
                                >
                                    <TableCell>
                                        <IconButton
                                            size="small"
                                            disabled={formulaTreeRowCount === 0}
                                            aria-label={`${item.title} の中間ステータスを表示`}
                                        >
                                            {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <Box>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Typography variant="body2">{item.title}</Typography>
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
                                                {formulaTreeRowCount === 0 ? (
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
                                                            <FormulaTreeRows
                                                                nodes={formulaTree}
                                                                leftTrace={leftTrace}
                                                                rightTrace={rightTrace}
                                                                leftReferences={leftReferences}
                                                                rightReferences={rightReferences}
                                                            />
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

type FormulaTreeRowsProps = {
    nodes: FormulaTreeNode[];
    leftTrace: FormulaTrace | undefined;
    rightTrace: FormulaTrace | undefined;
    leftReferences: FormulaReferenceTrace[];
    rightReferences: FormulaReferenceTrace[];
};

const FormulaTreeRows: React.FC<FormulaTreeRowsProps> = ({
    nodes,
    leftTrace,
    rightTrace,
    leftReferences,
    rightReferences,
}) => (
    <>
        {nodes.map((node, index) => {
            const leftValue = findFormulaTreeNodeValue(leftTrace, leftReferences, node);
            const rightValue = findFormulaTreeNodeValue(rightTrace, rightReferences, node);
            const intermediateDiff = (rightValue ?? 0) - (leftValue ?? 0);
            const isZeroLeaf = isZeroInBothTraces(leftValue, rightValue);

            return (
                <React.Fragment key={`${node.source}-${node.name}-${node.depth}-${index}`}>
                    <TableRow
                        sx={{
                            opacity: isZeroLeaf ? 0.45 : 1,
                            "& .MuiTableCell-root": {
                                color: isZeroLeaf ? "text.disabled" : undefined,
                            },
                        }}
                    >
                        <TableCell>
                            <Box
                                sx={{
                                    pl: node.depth * 2,
                                    borderLeft: node.depth > 0 ? "1px solid" : "none",
                                    borderColor: "divider",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color={isZeroLeaf ? "text.disabled" : "text.secondary"}
                                >
                                    {node.name}
                                </Typography>
                                {!isZeroLeaf && node.formula && (
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
                                    sx={{
                                        minWidth: 72,
                                        opacity: isZeroLeaf ? 0.7 : 1,
                                    }}
                                />
                            </Box>
                        </TableCell>
                    </TableRow>
                    {!isZeroLeaf && node.children.length > 0 && (
                        <FormulaTreeRows
                            nodes={node.children}
                            leftTrace={leftTrace}
                            rightTrace={rightTrace}
                            leftReferences={leftReferences}
                            rightReferences={rightReferences}
                        />
                    )}
                </React.Fragment>
            );
        })}
    </>
);
