import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    Chip,
    FormControlLabel,
    FormGroup,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAtomValue } from "jotai";
import { BuiltinOptions, getDisplayOptionName } from "../../static/options";
import { uiEquipmentAtomFamily } from "../../modules/state/ui";
import { EquipmentIconButton } from "../status/EquipmentIconButton";
import { buildSeriesData, displayCostumes, SeriesData } from "./costumeData";

interface DraggableHeaderProps {
    series: SeriesData & { itemCount: number };
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
                <Chip
                    size="small"
                    label={(() => {
                        if (series.itemCount === 3 && !series.costume && equippedCostume) {
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
    "ロハ", "ジェネシス Ⅰ", "ジェネシス Ⅱ", "ジェネシス Ⅲ", "イグニス Ⅰ", "イグニス Ⅱ", "イグニス Ⅲ",
    "アルボス Ⅰ", "アルボス Ⅱ", "アルボス Ⅲ", "ヴァリアント", "ガルガンチュア", "カタストロフ",
];

export const ParameterComparisonTable: React.FC = () => {
    const seriesData = buildSeriesData();
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

    const showAllColumns = () => {
        setVisibleColumns(new Array(seriesData.length).fill(true));
    };

    const hideAllColumns = () => {
        setVisibleColumns(new Array(seriesData.length).fill(false));
    };

    const resetToDefaultColumns = () => {
        setVisibleColumns(
            Array.from({ length: seriesData.length }, (_, index) =>
                defaultVisibleSeries.includes(seriesData[index].seriesName)
            )
        );
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

    const seriesWithFinalStats = seriesData.map(series => {
        const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
        const finalStats: { [key: string]: number } = { ...series.totalStats };

        if (itemCount === 3 && !series.costume && equippedCostume) {
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

    const allParameters = new Set<string>();
    seriesWithFinalStats.forEach(series => {
        Object.keys(series.finalStats).forEach(key => allParameters.add(key));
    });

    const getDisplayName = (optionKey: string) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        return option ? getDisplayOptionName(option) : optionKey;
    };

    const formatValue = (value: number) => value.toLocaleString();

    let orderedSeriesWithFinalStats = columnOrder
        .map(index => ({ series: seriesWithFinalStats[index], originalIndex: index }))
        .filter(({ originalIndex }) => visibleColumns[originalIndex]);

    if (sortParameter) {
        orderedSeriesWithFinalStats = [...orderedSeriesWithFinalStats].sort((a, b) => {
            const valueA = a.series.finalStats[sortParameter] || 0;
            const valueB = b.series.finalStats[sortParameter] || 0;

            return sortOrder === "desc" ? valueB - valueA : valueA - valueB;
        });
    }

    const displayedSeries = orderedSeriesWithFinalStats.map(({ series }) => series);

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                パラメータ別比較（列をドラッグして並び替え可能）
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, p: 2, backgroundColor: "info.light", borderRadius: 1 }}>
                <strong>シリーズ比較について:</strong><br />
                • 4点セット: コスチューム、メガネ、イヤリング、帽子の全4点で構成<br />
                • 3点セット: メガネ、イヤリング、帽子の3点で構成されるが、コスチューム部分には任意の装備を設定可能<br />
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
                        <Button size="small" variant="outlined" onClick={showAllColumns}>すべて表示</Button>
                        <Button size="small" variant="outlined" onClick={hideAllColumns}>すべてクリア</Button>
                        <Button size="small" variant="outlined" onClick={resetToDefaultColumns}>デフォルトに戻す</Button>
                    </Box>

                    <FormGroup row>
                        {seriesData.map((series, index) => (
                            <FormControlLabel
                                key={series.synergyKey}
                                control={
                                    <Checkbox
                                        checked={visibleColumns[index]}
                                        onChange={() => toggleColumnVisibility(index)}
                                    />
                                }
                                label={series.seriesName}
                            />
                        ))}
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
                                    key={series.synergyKey}
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
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold", backgroundColor: "action.hover" }}>コスチューム設定</TableCell>
                            {orderedSeriesWithFinalStats.map(({ series }) => {
                                const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
                                return (
                                    <TableCell key={`costume-${series.synergyKey}`} sx={{ textAlign: "center", backgroundColor: "action.hover" }}>
                                        {itemCount === 4 ? (
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
                                                key={series.synergyKey}
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
                                                return `${formatValue(maxValue)} (${bestSeries?.seriesName})`;
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
