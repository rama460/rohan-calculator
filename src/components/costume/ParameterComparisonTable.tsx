import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAtomValue } from "jotai";
import { BuiltinOptions, getDisplayOptionName } from "../../static/options";
import { Item } from "../../static/items";
import { uiEquipmentAtomFamily } from "../../modules/state/ui";
import { EquipmentIconButton } from "../status/EquipmentIconButton";
import EquipmentDialog from "../status/EquipmentDialog";
import { buildSeriesData, displayCostumes, SeriesData } from "./costumeData";

type SeriesWithFinalStats = SeriesData & {
    finalStats: { [key: string]: number };
    itemCount: number;
};

type ComparisonMode = "costume" | "accessory" | "combined";

type CombinedComparisonSet = {
    id: string;
    name: string;
    costumeSeriesKey: string;
    accessorySeriesKey: string;
    arbitraryCostume?: Item;
    visible: boolean;
};

type CombinedSetWithFinalStats = CombinedComparisonSet & {
    displayName: string;
    costumeSeries?: SeriesWithFinalStats;
    accessorySeries?: SeriesWithFinalStats;
    finalStats: { [key: string]: number };
};

const comparisonModeLabels: Record<ComparisonMode, string> = {
    costume: "コスチューム系",
    accessory: "アクセサリー系",
    combined: "合算比較",
};

const getSeriesItemCount = (series: SeriesData): number => (
    series.category === "accessory"
        ? (series.accessories ?? []).length
        : [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length
);

const getSeriesKey = (series: SeriesData): string => `${series.category}:${series.synergyKey}`;

const getSeriesCategoryLabel = (series: SeriesData): string => (
    series.category === "accessory" ? "アクセサリー" : "コスチューム系"
);

interface DraggableHeaderProps {
    series: SeriesWithFinalStats;
    index: number;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
    equippedCostume?: unknown;
}

const DraggableHeader: React.FC<DraggableHeaderProps> = ({ series, index, moveColumn, equippedCostume }) => {
    const [isDragging, setIsDragging] = React.useState(false);

    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData("text/plain", index.toString());
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
        if (dragIndex !== index) {
            moveColumn(dragIndex, index);
        }
    };

    return (
        <TableCell
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            sx={{
                fontWeight: "bold",
                textAlign: "center",
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
                userSelect: "none",
                "&:hover": {
                    backgroundColor: "action.hover",
                },
            }}
        >
            <Box>
                <Typography variant="caption" display="block">
                    {series.seriesName}
                </Typography>
                <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                    {getSeriesCategoryLabel(series)}
                </Typography>
                <Chip
                    size="small"
                    label={(() => {
                        if (series.category === "costume" && series.itemCount === 3 && !series.costume && equippedCostume) {
                            return "3点+コス";
                        }
                        return `${series.itemCount}点`;
                    })()}
                    color={series.itemCount === 4 ? "primary" : "secondary"}
                    variant="outlined"
                    sx={{ mt: 0.5 }}
                />
            </Box>
        </TableCell>
    );
};

const getColorGradient = (value: number, minValue: number, maxValue: number) => {
    if (maxValue === minValue || value === 0) return "transparent";

    const normalized = (value - minValue) / (maxValue - minValue);
    let r, g, b;
    if (normalized < 0.5) {
        r = 255;
        g = Math.round(255 * (normalized * 2));
        b = 0;
    } else {
        r = Math.round(255 * (2 - normalized * 2));
        g = 255;
        b = 0;
    }

    return `rgba(${r}, ${g}, ${b}, 0.3)`;
};

const defaultVisibleSeries = [
    "ステラリス Ⅰ", "ステラリス Ⅱ", "ステラリス Ⅲ", "ジェネシス Ⅰ", "ジェネシス Ⅱ", "ジェネシス Ⅲ", "イグニス Ⅰ", "イグニス Ⅱ", "イグニス Ⅲ",
    "アルボス Ⅰ", "アルボス Ⅱ", "アルボス Ⅲ",
];

const findSeriesKeyByName = (seriesData: SeriesData[], category: SeriesData["category"], seriesName: string) => {
    const series = seriesData.find(item => item.category === category && item.seriesName === seriesName);
    return series ? getSeriesKey(series) : "";
};

const createDefaultCombinedSets = (seriesData: SeriesData[]): CombinedComparisonSet[] => [
    {
        id: "combined-1",
        name: "",
        costumeSeriesKey: findSeriesKeyByName(seriesData, "costume", "ステラリス Ⅲ"),
        accessorySeriesKey: findSeriesKeyByName(seriesData, "accessory", "アルボス Ⅲ"),
        visible: true,
    },
    {
        id: "combined-2",
        name: "",
        costumeSeriesKey: findSeriesKeyByName(seriesData, "costume", "イグニス Ⅲ"),
        accessorySeriesKey: findSeriesKeyByName(seriesData, "accessory", "ジェネシス Ⅲ"),
        visible: true,
    },
];

const addStats = (...statsList: Array<{ [key: string]: number } | undefined>) => {
    const total: { [key: string]: number } = {};

    statsList.forEach(stats => {
        Object.entries(stats ?? {}).forEach(([key, value]) => {
            total[key] = (total[key] || 0) + value;
        });
    });

    return total;
};

const getItemStats = (item?: Item) => {
    if (!item) {
        return {};
    }

    return addStats(item.baseOptions, item.craftedOptions, item.additionalOptions);
};

const requiresArbitraryCostume = (series?: SeriesWithFinalStats) => (
    Boolean(series && series.category === "costume" && series.itemCount === 3 && !series.costume)
);

export const ParameterComparisonTable: React.FC = () => {
    const seriesData = buildSeriesData();
    const [comparisonMode, setComparisonMode] = React.useState<ComparisonMode>("costume");
    const [columnOrder, setColumnOrder] = React.useState<number[]>(() =>
        Array.from({ length: seriesData.length }, (_, i) => i)
    );
    const [visibleColumns, setVisibleColumns] = React.useState<boolean[]>(() =>
        Array.from({ length: seriesData.length }, (_, index) =>
            defaultVisibleSeries.includes(seriesData[index].seriesName)
        )
    );
    const [sortParameter, setSortParameter] = React.useState<string | null>(null);
    const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("desc");
    const [combinedSets, setCombinedSets] = React.useState<CombinedComparisonSet[]>(() =>
        createDefaultCombinedSets(seriesData)
    );
    const [editingCombinedSetId, setEditingCombinedSetId] = React.useState<string | null>(null);
    const equippedCostume = useAtomValue(uiEquipmentAtomFamily("costume"));

    const moveColumn = (dragIndex: number, hoverIndex: number) => {
        const newOrder = [...columnOrder];
        const draggedItem = newOrder[dragIndex];
        newOrder.splice(dragIndex, 1);
        newOrder.splice(hoverIndex, 0, draggedItem);
        setColumnOrder(newOrder);
    };

    const toggleColumnVisibility = (index: number) => {
        const newVisibility = [...visibleColumns];
        newVisibility[index] = !newVisibility[index];
        setVisibleColumns(newVisibility);
    };

    const currentCategory = comparisonMode === "accessory" ? "accessory" : "costume";
    const currentCategoryIndexes = seriesData.flatMap((series, index) =>
        series.category === currentCategory ? [index] : []
    );

    const showAllColumns = () => {
        const newVisibility = [...visibleColumns];
        currentCategoryIndexes.forEach((index) => {
            newVisibility[index] = true;
        });
        setVisibleColumns(newVisibility);
    };

    const hideAllColumns = () => {
        const newVisibility = [...visibleColumns];
        currentCategoryIndexes.forEach((index) => {
            newVisibility[index] = false;
        });
        setVisibleColumns(newVisibility);
    };

    const resetToDefaultColumns = () => {
        const newVisibility = [...visibleColumns];
        currentCategoryIndexes.forEach((index) => {
            newVisibility[index] = defaultVisibleSeries.includes(seriesData[index].seriesName);
        });
        setVisibleColumns(newVisibility);
    };

    const handleParameterSort = (parameter: string) => {
        if (sortParameter === parameter) {
            if (sortOrder === "desc") {
                setSortOrder("asc");
            } else if (sortOrder === "asc") {
                setSortParameter(null);
                setSortOrder("desc");
            }
        } else {
            setSortParameter(parameter);
            setSortOrder("desc");
        }
    };

    const updateCombinedSet = (id: string, changes: Partial<CombinedComparisonSet>) => {
        setCombinedSets(sets => sets.map(set => (
            set.id === id ? { ...set, ...changes } : set
        )));
    };

    const addCombinedSet = () => {
        const defaultCostumeSeriesKey = findSeriesKeyByName(seriesData, "costume", "ステラリス Ⅲ");
        const defaultAccessorySeriesKey = findSeriesKeyByName(seriesData, "accessory", "アルボス Ⅲ");
        const firstCostumeSeries = seriesData.find(series => series.category === "costume");
        const firstAccessorySeries = seriesData.find(series => series.category === "accessory");
        const costumeSeriesKey = defaultCostumeSeriesKey || (firstCostumeSeries ? getSeriesKey(firstCostumeSeries) : "");
        const accessorySeriesKey = defaultAccessorySeriesKey || (firstAccessorySeries ? getSeriesKey(firstAccessorySeries) : "");

        setCombinedSets(sets => [
            ...sets,
            {
                id: `combined-${Date.now()}`,
                name: "",
                costumeSeriesKey,
                accessorySeriesKey,
                visible: true,
            },
        ]);
    };

    const removeCombinedSet = (id: string) => {
        setCombinedSets(sets => sets.filter(set => set.id !== id));
    };

    const seriesWithFinalStats: SeriesWithFinalStats[] = seriesData.map(series => {
        const itemCount = getSeriesItemCount(series);
        const finalStats: { [key: string]: number } = { ...series.totalStats };

        if (series.category === "costume" && itemCount === 3 && !series.costume && equippedCostume) {
            Object.entries(equippedCostume.baseOptions ?? {}).forEach(([key, value]) => {
                if (typeof value === "number") {
                    finalStats[key] = (finalStats[key] || 0) + value;
                }
            });
            Object.entries(equippedCostume.craftedOptions ?? {}).forEach(([key, value]) => {
                if (typeof value === "number") {
                    finalStats[key] = (finalStats[key] || 0) + value;
                }
            });
            Object.entries(equippedCostume.additionalOptions ?? {}).forEach(([key, value]) => {
                if (typeof value === "number") {
                    finalStats[key] = (finalStats[key] || 0) + value;
                }
            });
        }

        const maxSetEffect = Math.min(itemCount, 4);
        for (let setCount = 2; setCount <= maxSetEffect; setCount++) {
            if (series.synergyEffects[setCount]) {
                Object.entries(series.synergyEffects[setCount]).forEach(([key, value]) => {
                    finalStats[key] = (finalStats[key] || 0) + value;
                });
            }
        }

        return {
            ...series,
            finalStats,
            itemCount,
        };
    });

    const getDisplayName = (optionKey: string) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        return option ? getDisplayOptionName(option) : optionKey;
    };

    const formatValue = (value: number) => value.toLocaleString();

    let orderedSeriesWithFinalStats = columnOrder
        .map(index => ({ series: seriesWithFinalStats[index], originalIndex: index }))
        .filter(({ series, originalIndex }) => (
            series.category === currentCategory &&
            visibleColumns[originalIndex]
        ));

    if (sortParameter) {
        orderedSeriesWithFinalStats = [...orderedSeriesWithFinalStats].sort((a, b) => {
            const valueA = a.series.finalStats[sortParameter] || 0;
            const valueB = b.series.finalStats[sortParameter] || 0;

            return sortOrder === "desc" ? valueB - valueA : valueA - valueB;
        });
    }

    const displayedSeries = orderedSeriesWithFinalStats.map(({ series }) => series);
    const allParameters = new Set<string>();
    displayedSeries.forEach(series => {
        Object.keys(series.finalStats).forEach(key => allParameters.add(key));
    });

    const modeDescription = comparisonMode === "costume"
        ? "コスチューム、メガネ、イヤリング、帽子のセット効果を比較します。3点セットでは任意のコスチューム装備を反映できます。"
        : "リング、ブローチ、ブレスレット、ネックレスのアクセサリーセット効果を比較します。";

    if (comparisonMode === "combined") {
        const seriesByKey = new Map(seriesWithFinalStats.map(series => [getSeriesKey(series), series]));
        const costumeSeries = seriesWithFinalStats.filter(series => series.category === "costume");
        const accessorySeries = seriesWithFinalStats.filter(series => series.category === "accessory");

        let combinedSetsWithFinalStats: CombinedSetWithFinalStats[] = combinedSets
            .filter(set => set.visible)
            .map(set => {
                const costumeSeriesItem = seriesByKey.get(set.costumeSeriesKey);
                const accessorySeriesItem = seriesByKey.get(set.accessorySeriesKey);
                const arbitraryCostumeStats = requiresArbitraryCostume(costumeSeriesItem)
                    ? getItemStats(set.arbitraryCostume)
                    : undefined;
                const autoName = [
                    costumeSeriesItem?.seriesName,
                    accessorySeriesItem?.seriesName,
                ].filter(Boolean).join(" + ");

                return {
                    ...set,
                    displayName: set.name.trim() || autoName || "未設定",
                    costumeSeries: costumeSeriesItem,
                    accessorySeries: accessorySeriesItem,
                    finalStats: addStats(costumeSeriesItem?.finalStats, arbitraryCostumeStats, accessorySeriesItem?.finalStats),
                };
            });

        if (sortParameter) {
            combinedSetsWithFinalStats = [...combinedSetsWithFinalStats].sort((a, b) => {
                const valueA = a.finalStats[sortParameter] || 0;
                const valueB = b.finalStats[sortParameter] || 0;

                return sortOrder === "desc" ? valueB - valueA : valueA - valueB;
            });
        }

        const combinedParameters = new Set<string>();
        combinedSetsWithFinalStats.forEach(set => {
            Object.keys(set.finalStats).forEach(key => combinedParameters.add(key));
        });

        return (
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                    合算比較
                </Typography>
                <Tabs
                    value={comparisonMode}
                    onChange={(_, value: ComparisonMode) => setComparisonMode(value)}
                    sx={{ mb: 2, borderBottom: 1, borderColor: "divider" }}
                >
                    <Tab value="costume" label={comparisonModeLabels.costume} />
                    <Tab value="accessory" label={comparisonModeLabels.accessory} />
                    <Tab value="combined" label={comparisonModeLabels.combined} />
                </Tabs>
                <Typography variant="body2" sx={{ mb: 2, p: 2, backgroundColor: "info.light", borderRadius: 1 }}>
                    <strong>合算比較について:</strong><br />
                    コスチューム系シリーズとアクセサリー系シリーズを組み合わせた比較セットを作成し、候補同士の総合値を比較します。
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                    パラメータ名をクリックするとその値で列をソートできます（降順 → 昇順 → 非ソート）
                    {sortParameter && (
                        <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                            {" "}• 現在のソート: {getDisplayName(sortParameter)} ({sortOrder === "asc" ? "昇順" : "降順"})
                        </span>
                    )}
                </Typography>

                <Accordion sx={{ mb: 2 }} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle2">比較セット</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2, mb: 2 }}>
                            {combinedSets.map((set, index) => (
                                <Paper key={set.id} variant="outlined" sx={{ p: 2 }}>
                                    {(() => {
                                        const selectedCostumeSeries = seriesByKey.get(set.costumeSeriesKey);
                                        const showArbitraryCostume = requiresArbitraryCostume(selectedCostumeSeries);

                                        return (
                                            <>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5, gap: 1 }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={set.visible}
                                                    onChange={event => updateCombinedSet(set.id, { visible: event.target.checked })}
                                                />
                                            }
                                            label={`セット${index + 1}`}
                                        />
                                        <IconButton
                                            size="small"
                                            onClick={() => removeCombinedSet(set.id)}
                                            disabled={combinedSets.length <= 1}
                                            aria-label="比較セットを削除"
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                    <TextField
                                        size="small"
                                        label="表示名"
                                        value={set.name}
                                        onChange={event => updateCombinedSet(set.id, { name: event.target.value })}
                                        fullWidth
                                        sx={{ mb: 1.5 }}
                                        placeholder="未入力なら自動生成"
                                    />
                                    <FormControl size="small" fullWidth sx={{ mb: 1.5 }}>
                                        <InputLabel>コスチューム系</InputLabel>
                                        <Select
                                            label="コスチューム系"
                                            value={set.costumeSeriesKey}
                                            onChange={event => updateCombinedSet(set.id, { costumeSeriesKey: event.target.value })}
                                        >
                                            {costumeSeries.map(series => (
                                                <MenuItem key={getSeriesKey(series)} value={getSeriesKey(series)}>
                                                    {series.seriesName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {showArbitraryCostume && (
                                        <Box sx={{ mb: 1.5 }}>
                                            <Button
                                                size="small"
                                                variant="outlined"
                                                fullWidth
                                                onClick={() => setEditingCombinedSetId(set.id)}
                                            >
                                                任意コスチューム設定
                                            </Button>
                                            <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
                                                {set.arbitraryCostume?.name ?? "未設定"}
                                            </Typography>
                                            <EquipmentDialog
                                                equipmentType="costume"
                                                isOpen={editingCombinedSetId === set.id}
                                                onClose={() => setEditingCombinedSetId(null)}
                                                title={`任意コスチューム (${set.name.trim() || `セット${index + 1}`})`}
                                                equippedItem={set.arbitraryCostume}
                                                setEquippedItem={item => updateCombinedSet(set.id, { arbitraryCostume: item })}
                                                itemTemplates={displayCostumes}
                                            />
                                        </Box>
                                    )}
                                    <FormControl size="small" fullWidth>
                                        <InputLabel>アクセサリー系</InputLabel>
                                        <Select
                                            label="アクセサリー系"
                                            value={set.accessorySeriesKey}
                                            onChange={event => updateCombinedSet(set.id, { accessorySeriesKey: event.target.value })}
                                        >
                                            {accessorySeries.map(series => (
                                                <MenuItem key={getSeriesKey(series)} value={getSeriesKey(series)}>
                                                    {series.seriesName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                            </>
                                        );
                                    })()}
                                </Paper>
                            ))}
                        </Box>
                        <Button size="small" variant="outlined" startIcon={<AddIcon />} onClick={addCombinedSet}>
                            比較セットを追加
                        </Button>
                    </AccordionDetails>
                </Accordion>

                {combinedSetsWithFinalStats.length === 0 ? (
                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            表示対象の比較セットがありません。
                        </Typography>
                    </Paper>
                ) : (
                    <TableContainer component={Paper} sx={{ mb: 2 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }}>パラメータ</TableCell>
                                    {combinedSetsWithFinalStats.map(set => (
                                        <TableCell key={set.id} sx={{ fontWeight: "bold", textAlign: "center", minWidth: 120 }}>
                                            {set.name.trim() && (
                                                <Typography variant="caption" display="block">
                                                    {set.name.trim()}
                                                </Typography>
                                            )}
                                            <Typography variant="caption" display="block" color={set.name.trim() ? "text.secondary" : "text.primary"} sx={{ fontSize: "0.65rem", fontWeight: set.name.trim() ? "normal" : "bold" }}>
                                                {set.costumeSeries?.seriesName ?? "未設定"}
                                            </Typography>
                                            <Typography variant="caption" display="block" color={set.name.trim() ? "text.secondary" : "text.primary"} sx={{ fontSize: "0.65rem", fontWeight: set.name.trim() ? "normal" : "bold" }}>
                                                {set.accessorySeries?.seriesName ?? "未設定"}
                                            </Typography>
                                            {requiresArbitraryCostume(set.costumeSeries) && (
                                                <Typography variant="caption" display="block" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                                                    任意: {set.arbitraryCostume?.name ?? "未設定"}
                                                </Typography>
                                            )}
                                        </TableCell>
                                    ))}
                                    <TableCell sx={{ fontWeight: "bold", textAlign: "center", minWidth: 140 }}>最高値</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.from(combinedParameters).map(parameter => {
                                    const values = combinedSetsWithFinalStats.map(set => set.finalStats[parameter] || 0);
                                    const maxValue = Math.max(...values);
                                    const minValue = Math.min(...values);

                                    return (
                                        <TableRow key={parameter}>
                                            <TableCell
                                                sx={{
                                                    fontWeight: "bold",
                                                    cursor: "pointer",
                                                    "&:hover": {
                                                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                                                    },
                                                    backgroundColor: sortParameter === parameter ? "primary.light" : "inherit",
                                                    color: sortParameter === parameter ? "primary.contrastText" : "inherit",
                                                }}
                                                onClick={() => handleParameterSort(parameter)}
                                            >
                                                {getDisplayName(parameter)}
                                                {sortParameter === parameter && (
                                                    <span style={{ marginLeft: "4px" }}>
                                                        {sortOrder === "desc" ? "↓" : "↑"}
                                                    </span>
                                                )}
                                            </TableCell>
                                            {combinedSetsWithFinalStats.map(set => {
                                                const value = set.finalStats[parameter] || 0;
                                                const backgroundColor = getColorGradient(value, minValue, maxValue);
                                                const isMax = value === maxValue && value > 0;

                                                return (
                                                    <TableCell
                                                        key={set.id}
                                                        sx={{
                                                            textAlign: "center",
                                                            backgroundColor,
                                                            border: isMax ? "2px solid #2e7d32" : "1px solid rgba(224, 224, 224, 1)",
                                                            fontWeight: isMax ? "bold" : "normal",
                                                        }}
                                                    >
                                                        <Typography variant="body2" sx={{
                                                            color: isMax ? "#1b5e20" : "text.primary",
                                                            fontWeight: isMax ? "bold" : "normal",
                                                        }}>
                                                            {value > 0 ? formatValue(value) : "-"}
                                                        </Typography>
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell sx={{
                                                textAlign: "center",
                                                backgroundColor: "success.main",
                                                border: "2px solid #1b5e20",
                                            }}>
                                                <Typography variant="body2" sx={{ fontWeight: "bold", color: "white" }}>
                                                    {maxValue > 0 ? (() => {
                                                        const bestSet = combinedSetsWithFinalStats.find(set => (set.finalStats[parameter] || 0) === maxValue);
                                                        return `${formatValue(maxValue)} (${bestSet?.displayName ?? ""})`;
                                                    })() : "-"}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        );
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                パラメータ別比較（列をドラッグして並び替え可能）
            </Typography>
            <Tabs
                value={comparisonMode}
                onChange={(_, value: ComparisonMode) => setComparisonMode(value)}
                sx={{ mb: 2, borderBottom: 1, borderColor: "divider" }}
            >
                <Tab value="costume" label={comparisonModeLabels.costume} />
                <Tab value="accessory" label={comparisonModeLabels.accessory} />
                <Tab value="combined" label={comparisonModeLabels.combined} />
            </Tabs>
            <Typography variant="body2" sx={{ mb: 2, p: 2, backgroundColor: "info.light", borderRadius: 1 }}>
                <strong>シリーズ比較について:</strong><br />
                {modeDescription}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                パラメータ名をクリックするとその値で列をソートできます（降順 → 昇順 → 非ソート）
                {sortParameter && (
                    <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                        {" "}• 現在のソート: {getDisplayName(sortParameter)} ({sortOrder === "asc" ? "昇順" : "降順"})
                    </span>
                )}
            </Typography>

            <Accordion sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2">列の表示設定</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ mb: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                        <Button size="small" variant="outlined" onClick={showAllColumns}>このカテゴリをすべて表示</Button>
                        <Button size="small" variant="outlined" onClick={hideAllColumns}>このカテゴリをすべてクリア</Button>
                        <Button size="small" variant="outlined" onClick={resetToDefaultColumns}>デフォルトに戻す</Button>
                    </Box>

                    <FormGroup row>
                        {currentCategoryIndexes.map((index) => {
                            const series = seriesData[index];
                            return (
                                <FormControlLabel
                                    key={getSeriesKey(series)}
                                    control={
                                        <Checkbox
                                            checked={visibleColumns[index]}
                                            onChange={() => toggleColumnVisibility(index)}
                                        />
                                    }
                                    label={series.seriesName}
                                />
                            );
                        })}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>パラメータ</TableCell>
                            {orderedSeriesWithFinalStats.map(({ series }, displayIndex) => (
                                <DraggableHeader
                                    key={getSeriesKey(series)}
                                    series={series}
                                    index={displayIndex}
                                    equippedCostume={equippedCostume}
                                    moveColumn={(dragIndex, hoverIndex) => {
                                        const dragOriginalIndex = orderedSeriesWithFinalStats[dragIndex].originalIndex;
                                        const hoverOriginalIndex = orderedSeriesWithFinalStats[hoverIndex].originalIndex;
                                        const dragOrderIndex = columnOrder.indexOf(dragOriginalIndex);
                                        const hoverOrderIndex = columnOrder.indexOf(hoverOriginalIndex);
                                        moveColumn(dragOrderIndex, hoverOrderIndex);
                                    }}
                                />
                            ))}
                            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>最高値</TableCell>
                        </TableRow>
                        {comparisonMode === "costume" && (
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold", backgroundColor: "action.hover" }}>装備設定</TableCell>
                                {orderedSeriesWithFinalStats.map(({ series }) => {
                                    return (
                                        <TableCell key={`equipment-${getSeriesKey(series)}`} sx={{ textAlign: "center", backgroundColor: "action.hover" }}>
                                            {series.itemCount === 4 ? (
                                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                                                        セット装備済み
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.6rem" }}>
                                                        （設定不要）
                                                    </Typography>
                                                </Box>
                                            ) : (
                                                <>
                                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                        <EquipmentIconButton
                                                            equipmentType="costume"
                                                            title={`コスチューム (${series.seriesName})`}
                                                            items={series.costume
                                                                ? displayCostumes.filter(costume => costume.synergyKey === series.synergyKey)
                                                                : displayCostumes
                                                            }
                                                        />
                                                    </Box>
                                                    {!series.costume && (
                                                        <Typography variant="caption" color="info.main" display="block" sx={{ textAlign: "center", mt: 0.5, fontSize: "0.65rem" }}>
                                                            任意装備可能
                                                        </Typography>
                                                    )}
                                                </>
                                            )}
                                        </TableCell>
                                    );
                                })}
                                <TableCell sx={{ backgroundColor: "action.hover", textAlign: "center" }}>
                                    <Typography variant="caption" color="text.secondary">
                                        設定
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableHead>
                    <TableBody>
                        {Array.from(allParameters).map(parameter => {
                            const values = displayedSeries.map(s => s.finalStats[parameter] || 0);
                            const maxValue = Math.max(...values);
                            const minValue = Math.min(...values);

                            return (
                                <TableRow key={parameter}>
                                    <TableCell
                                        sx={{
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 0, 0, 0.04)",
                                            },
                                            backgroundColor: sortParameter === parameter ? "primary.light" : "inherit",
                                            color: sortParameter === parameter ? "primary.contrastText" : "inherit",
                                        }}
                                        onClick={() => handleParameterSort(parameter)}
                                    >
                                        {getDisplayName(parameter)}
                                        {sortParameter === parameter && (
                                            <span style={{ marginLeft: "4px" }}>
                                                {sortOrder === "desc" ? "↓" : "↑"}
                                            </span>
                                        )}
                                    </TableCell>
                                    {displayedSeries.map(series => {
                                        const value = series.finalStats[parameter] || 0;
                                        const backgroundColor = getColorGradient(value, minValue, maxValue);
                                        const isMax = value === maxValue && value > 0;

                                        return (
                                            <TableCell
                                                key={getSeriesKey(series)}
                                                sx={{
                                                    textAlign: "center",
                                                    backgroundColor,
                                                    border: isMax ? "2px solid #2e7d32" : "1px solid rgba(224, 224, 224, 1)",
                                                    fontWeight: isMax ? "bold" : "normal",
                                                }}
                                            >
                                                <Typography variant="body2" sx={{
                                                    color: isMax ? "#1b5e20" : "text.primary",
                                                    fontWeight: isMax ? "bold" : "normal",
                                                }}>
                                                    {value > 0 ? formatValue(value) : "-"}
                                                </Typography>
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell sx={{
                                        textAlign: "center",
                                        backgroundColor: "success.main",
                                        border: "2px solid #1b5e20",
                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: "bold", color: "white" }}>
                                            {maxValue > 0 ? (() => {
                                                const bestSeries = displayedSeries.find(s => (s.finalStats[parameter] || 0) === maxValue);
                                                return `${formatValue(maxValue)} (${bestSeries?.seriesName} / ${bestSeries ? getSeriesCategoryLabel(bestSeries) : ""})`;
                                            })() : "-"}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
