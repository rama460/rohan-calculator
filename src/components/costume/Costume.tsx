import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Avatar,
    Box,
    Tabs,
    Tab,
    Chip,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { costumes, glasses, earrings, hats, ItemTemplate } from '../../static/items';
import { BuiltinOptions, getDisplayOptionName } from '../../static/options';
import BorderedTitleBox from '../common/BorderedTitleBox';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`costume-tabpanel-${index}`}
            aria-labelledby={`costume-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

interface ItemTableProps {
    items: ItemTemplate[];
    categoryName: string;
}

const ItemTable: React.FC<ItemTableProps> = ({ items, categoryName }) => {
    return (
        <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>アイコン</TableCell>
                        <TableCell>アイテム名</TableCell>
                        <TableCell>基本オプション</TableCell>
                        <TableCell>セットオプション</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={`${categoryName}-${item.id}`}>
                            <TableCell>
                                <Avatar
                                    src={item.icon}
                                    alt={item.name}
                                    sx={{ width: 32, height: 32 }}
                                />
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2">{item.name}</Typography>
                            </TableCell>
                            <TableCell>
                                {item.fixedBaseOptions ? (
                                    <Box>
                                        {Object.entries(item.fixedBaseOptions).map(([key, value]) => {
                                            const option = BuiltinOptions[key as keyof typeof BuiltinOptions];
                                            if (!option || !value) return null;
                                            return (
                                                <Typography
                                                    key={key}
                                                    variant="caption"
                                                    display="block"
                                                    sx={{ color: option.displayColor }}
                                                >
                                                    {getDisplayOptionName(option)}: {value}
                                                </Typography>
                                            );
                                        })}
                                    </Box>
                                ) : (
                                    <Typography variant="caption" color="textSecondary">
                                        なし
                                    </Typography>
                                )}
                            </TableCell>
                            <TableCell>
                                {item.synergyOptions ? (
                                    <Box>
                                        {Object.entries(item.synergyOptions).map(([setLevel, options]) => (
                                            <Box key={setLevel} sx={{ mb: 1, border: '1px solid #ddd', padding: 1, borderRadius: 1 }}>
                                                <Typography variant="caption" color="primary" display="block" sx={{ fontWeight: 'bold' }}>
                                                    {setLevel}セット効果:
                                                </Typography>
                                                {Object.entries(options).map(([optionKey, optionValue]) => {
                                                    const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
                                                    if (!option || !optionValue) return null;
                                                    return (
                                                        <Typography
                                                            key={optionKey}
                                                            variant="caption"
                                                            display="block"
                                                            sx={{ color: option.displayColor, ml: 1 }}
                                                        >
                                                            {getDisplayOptionName(option)}: {optionValue}
                                                        </Typography>
                                                    );
                                                })}
                                            </Box>
                                        ))}
                                    </Box>
                                ) : (
                                    <Typography variant="caption" color="textSecondary">
                                        なし
                                    </Typography>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

interface SeriesData {
    seriesName: string;
    synergyKey: string;
    costume?: ItemTemplate;
    glasses?: ItemTemplate;
    earrings?: ItemTemplate;
    hat?: ItemTemplate;
    totalStats: { [key: string]: number };
    synergyEffects: { [key: number]: { [key: string]: number } };
}

const SeriesComparisonTable: React.FC = () => {
    const buildSeriesData = (): SeriesData[] => {
        const seriesMap = new Map<string, SeriesData>();

        [...costumes, ...glasses, ...earrings, ...hats].forEach(item => {
            if (!item.synergyKey || !item.seriesName) return;

            if (!seriesMap.has(item.synergyKey)) {
                seriesMap.set(item.synergyKey, {
                    seriesName: item.seriesName,
                    synergyKey: item.synergyKey,
                    totalStats: {},
                    synergyEffects: item.synergyOptions || {}
                });
            }

            const series = seriesMap.get(item.synergyKey)!;

            if (costumes.includes(item)) {
                series.costume = item;
            } else if (glasses.includes(item)) {
                series.glasses = item;
            } else if (earrings.includes(item)) {
                series.earrings = item;
            } else if (hats.includes(item)) {
                series.hat = item;
            }
        });

        seriesMap.forEach(series => {
            const items = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean) as ItemTemplate[];

            items.forEach(item => {
                if (item.fixedBaseOptions) {
                    Object.entries(item.fixedBaseOptions).forEach(([key, value]) => {
                        series.totalStats[key] = (series.totalStats[key] || 0) + value;
                    });
                }
            });
        });

        return Array.from(seriesMap.values()).filter(series => {
            const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
            return itemCount >= 3;
        });
    };

    const seriesData = buildSeriesData();

    const getDisplayValue = (optionKey: string, value: number) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        if (!option) return value.toString();
        return getDisplayOptionName(option) + ': ' + value;
    };

    return (
        <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>シリーズ名</TableCell>
                        <TableCell>個別効果合計</TableCell>
                        <TableCell>2セット効果</TableCell>
                        <TableCell>3セット効果</TableCell>
                        <TableCell>4セット効果</TableCell>
                        <TableCell>最終合計効果</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {seriesData.map((series) => {
                        const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
                        const availableItems = [];
                        if (series.costume) availableItems.push('コスチューム');
                        if (series.glasses) availableItems.push('メガネ');
                        if (series.earrings) availableItems.push('イヤリング');
                        if (series.hat) availableItems.push('帽子');

                        return (
                            <TableRow key={series.synergyKey}>
                                <TableCell>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {series.seriesName}
                                    </Typography>
                                    <Box sx={{ mt: 1 }}>
                                        <Chip
                                            size="small"
                                            label={itemCount + "点セット"}
                                            color={itemCount === 4 ? "primary" : "secondary"}
                                            variant="outlined"
                                        />
                                        <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                                            {availableItems.join(', ')}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {Object.entries(series.totalStats).map(([key, value]) => (
                                            <Typography key={key} variant="caption" display="block">
                                                {getDisplayValue(key, value)}
                                            </Typography>
                                        ))}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {series.synergyEffects[2] ?
                                            Object.entries(series.synergyEffects[2]).map(([key, value]) => (
                                                <Typography key={key} variant="caption" display="block" color="primary">
                                                    {getDisplayValue(key, value)}
                                                </Typography>
                                            )) :
                                            <Typography variant="caption" color="textSecondary">なし</Typography>
                                        }
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {series.synergyEffects[3] ?
                                            Object.entries(series.synergyEffects[3]).map(([key, value]) => (
                                                <Typography key={key} variant="caption" display="block" color="primary">
                                                    {getDisplayValue(key, value)}
                                                </Typography>
                                            )) :
                                            <Typography variant="caption" color="textSecondary">なし</Typography>
                                        }
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {series.synergyEffects[4] ?
                                            Object.entries(series.synergyEffects[4]).map(([key, value]) => (
                                                <Typography key={key} variant="caption" display="block" color="primary">
                                                    {getDisplayValue(key, value)}
                                                </Typography>
                                            )) :
                                            <Typography variant="caption" color="textSecondary">なし</Typography>
                                        }
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {(() => {
                                            const finalStats: { [key: string]: number } = { ...series.totalStats };

                                            const maxSetEffect = Math.min(itemCount, 4);
                                            // 2セットから最大セットまで累積で加算
                                            for (let setCount = 2; setCount <= maxSetEffect; setCount++) {
                                                if (series.synergyEffects[setCount]) {
                                                    Object.entries(series.synergyEffects[setCount]).forEach(([key, value]) => {
                                                        finalStats[key] = (finalStats[key] || 0) + value;
                                                    });
                                                }
                                            }

                                            return Object.entries(finalStats).map(([key, value]) => (
                                                <Typography key={key} variant="caption" display="block" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                                                    {getDisplayValue(key, value)}
                                                </Typography>
                                            ));
                                        })()}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// HTML5 Drag and Drop APIを使用したドラッグ可能なヘッダーコンポーネント
interface DraggableHeaderProps {
    series: any;
    index: number;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableHeader: React.FC<DraggableHeaderProps> = ({ series, index, moveColumn }) => {
    const [isDragging, setIsDragging] = React.useState(false);

    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData('text/plain', index.toString());
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
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
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
                fontWeight: 'bold',
                textAlign: 'center',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                userSelect: 'none',
                '&:hover': {
                    backgroundColor: 'action.hover',
                },
            }}
        >
            <Box>
                <Typography variant="caption" display="block">
                    {series.seriesName}
                </Typography>
                <Chip
                    size="small"
                    label={`${series.itemCount}点`}
                    color={series.itemCount === 4 ? "primary" : "secondary"}
                    variant="outlined"
                    sx={{ mt: 0.5 }}
                />
            </Box>
        </TableCell>
    );
};

const ParameterComparisonTable: React.FC = () => {
    const buildSeriesData = (): SeriesData[] => {
        const seriesMap = new Map<string, SeriesData>();

        [...costumes, ...glasses, ...earrings, ...hats].forEach(item => {
            if (!item.synergyKey || !item.seriesName) return;

            if (!seriesMap.has(item.synergyKey)) {
                seriesMap.set(item.synergyKey, {
                    seriesName: item.seriesName,
                    synergyKey: item.synergyKey,
                    totalStats: {},
                    synergyEffects: item.synergyOptions || {}
                });
            }

            const series = seriesMap.get(item.synergyKey)!;

            if (costumes.includes(item)) {
                series.costume = item;
            } else if (glasses.includes(item)) {
                series.glasses = item;
            } else if (earrings.includes(item)) {
                series.earrings = item;
            } else if (hats.includes(item)) {
                series.hat = item;
            }
        });

        seriesMap.forEach(series => {
            const items = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean) as ItemTemplate[];

            items.forEach(item => {
                if (item.fixedBaseOptions) {
                    Object.entries(item.fixedBaseOptions).forEach(([key, value]) => {
                        series.totalStats[key] = (series.totalStats[key] || 0) + value;
                    });
                }
            });
        });

        return Array.from(seriesMap.values()).filter(series => {
            const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
            return itemCount >= 3;
        });
    };

    const seriesData = buildSeriesData();

    // 列の順序を管理するstate
    const [columnOrder, setColumnOrder] = React.useState<number[]>(() =>
        Array.from({ length: seriesData.length }, (_, i) => i)
    );

    // デフォルト表示するシリーズ名
    const defaultVisibleSeries = [
        'ロハ', 'ジェネシス Ⅰ', 'ジェネシス Ⅱ', 'ジェネシス Ⅲ', 'イグニス Ⅰ', 'イグニス Ⅱ', 'イグニス Ⅲ',
        'アルボス Ⅰ', 'アルボス Ⅱ', 'アルボス Ⅲ', 'ヴァリアント', 'ガルガンチュア', 'カタストロフ'
    ];

    // 列の表示/非表示を管理するstate
    const [visibleColumns, setVisibleColumns] = React.useState<boolean[]>(() =>
        Array.from({ length: seriesData.length }, (_, index) =>
            defaultVisibleSeries.includes(seriesData[index].seriesName)
        )
    );

    // 列を移動する関数
    const moveColumn = (dragIndex: number, hoverIndex: number) => {
        const newOrder = [...columnOrder];
        const draggedItem = newOrder[dragIndex];
        newOrder.splice(dragIndex, 1);
        newOrder.splice(hoverIndex, 0, draggedItem);
        setColumnOrder(newOrder);
    };

    // 列の表示/非表示を切り替える関数
    const toggleColumnVisibility = (index: number) => {
        const newVisibility = [...visibleColumns];
        newVisibility[index] = !newVisibility[index];
        setVisibleColumns(newVisibility);
    };

    // 全シリーズの最終ステータスを計算
    const seriesWithFinalStats = seriesData.map(series => {
        const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
        const finalStats: { [key: string]: number } = { ...series.totalStats };

        const maxSetEffect = Math.min(itemCount, 4);
        // 2セットから最大セットまで累積で加算
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
            itemCount
        };
    });

    // 全パラメータを収集
    const allParameters = new Set<string>();
    seriesWithFinalStats.forEach(series => {
        Object.keys(series.finalStats).forEach(key => allParameters.add(key));
    });

    const getDisplayName = (optionKey: string) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        return option ? getDisplayOptionName(option) : optionKey;
    };

    const formatValue = (value: number) => {
        return value.toLocaleString();
    };



    // 列の順序に従ってソートされ、かつ表示状態の列のみをフィルタリング
    const orderedSeriesWithFinalStats = columnOrder
        .map(index => ({ series: seriesWithFinalStats[index], originalIndex: index }))
        .filter(({ originalIndex }) => visibleColumns[originalIndex]);

    // 表示用のシリーズデータ
    const displayedSeries = orderedSeriesWithFinalStats.map(({ series }) => series);

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                パラメータ別比較（列をドラッグして並び替え可能）
            </Typography>

            {/* 列の表示設定 */}
            <Accordion sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2">列の表示設定</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                            <TableCell sx={{ fontWeight: 'bold' }}>パラメータ</TableCell>
                            {orderedSeriesWithFinalStats.map(({ series }, displayIndex) => (
                                <DraggableHeader
                                    key={series.synergyKey}
                                    series={series}
                                    index={displayIndex}
                                    moveColumn={(dragIndex, hoverIndex) => {
                                        // 表示されている列のみでのインデックスを元のインデックスに変換
                                        const dragOriginalIndex = orderedSeriesWithFinalStats[dragIndex].originalIndex;
                                        const hoverOriginalIndex = orderedSeriesWithFinalStats[hoverIndex].originalIndex;

                                        // 元のmoveColumn関数を使用
                                        const dragOrderIndex = columnOrder.indexOf(dragOriginalIndex);
                                        const hoverOrderIndex = columnOrder.indexOf(hoverOriginalIndex);
                                        moveColumn(dragOrderIndex, hoverOrderIndex);
                                    }}
                                />
                            ))}
                            <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>最高値</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.from(allParameters).map(parameter => {
                            const maxValue = Math.max(...displayedSeries.map(s => s.finalStats[parameter] || 0));

                            return (
                                <TableRow key={parameter}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>
                                        {getDisplayName(parameter)}
                                    </TableCell>
                                    {displayedSeries.map(series => {
                                        const value = series.finalStats[parameter] || 0;
                                        const isMax = value === maxValue && value > 0;

                                        return (
                                            <TableCell
                                                key={series.synergyKey}
                                                sx={{
                                                    textAlign: 'center',
                                                    backgroundColor: isMax ? 'success.light' : 'transparent',
                                                    fontWeight: isMax ? 'bold' : 'normal'
                                                }}
                                            >
                                                <Typography variant="body2" sx={{ color: isMax ? 'success.dark' : 'text.primary' }}>
                                                    {value > 0 ? formatValue(value) : '-'}
                                                </Typography>
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell sx={{ textAlign: 'center', backgroundColor: 'primary.light' }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                                            {maxValue > 0 ? (() => {
                                                const bestSeries = displayedSeries.find(s => (s.finalStats[parameter] || 0) === maxValue);
                                                return `${formatValue(maxValue)} (${bestSeries?.seriesName})`;
                                            })() : '-'}
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



export const Costume: React.FC = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <BorderedTitleBox title="コスチューム装備">
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="costume tabs">
                        <Tab label="コスチューム" id="costume-tab-0" />
                        <Tab label="メガネ" id="costume-tab-1" />
                        <Tab label="イヤリング" id="costume-tab-2" />
                        <Tab label="帽子" id="costume-tab-3" />
                        <Tab label="シリーズ合計" id="costume-tab-4" />
                        <Tab label="シリーズ比較" id="costume-tab-5" />
                    </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                    <ItemTable items={costumes} categoryName="costume" />
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <ItemTable items={glasses} categoryName="glasses" />
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <ItemTable items={earrings} categoryName="earrings" />
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                    <ItemTable items={hats} categoryName="hats" />
                </TabPanel>

                <TabPanel value={tabValue} index={4}>
                    <SeriesComparisonTable />
                </TabPanel>

                <TabPanel value={tabValue} index={5}>
                    <ParameterComparisonTable />
                </TabPanel>
            </Box>
        </BorderedTitleBox>
    );
};

export default Costume;
