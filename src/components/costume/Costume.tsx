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
    Box,
    Tabs,
    Tab,
    Chip,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { BuiltinOptions, getDisplayOptionName } from '../../static/options';
import { EquipmentIconButton } from '../status/EquipmentIconButton';
import { useAtomValue } from 'jotai';
import { uiEquipmentAtomFamily } from '../../modules/state/ui';
import { PageContainer } from '../common/PageContainer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { CostumeItemTable } from './CostumeItemTable';
import {
    buildSeriesData,
    displayCostumes,
    displayEarrings,
    displayGlasses,
    displayHats,
    SeriesData,
} from './costumeData';
import { SeriesComparisonTable } from './SeriesComparisonTable';

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

// HTML5 Drag and Drop APIを使用したドラッグ可能なヘッダーコンポーネント
interface DraggableHeaderProps {
    series: SeriesData & { itemCount: number };
    index: number;
    moveColumn: (dragIndex: number, hoverIndex: number) => void;
    equippedCostume?: unknown;
}

const DraggableHeader: React.FC<DraggableHeaderProps> = ({ series, index, moveColumn, equippedCostume }) => {
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

const ParameterComparisonTable: React.FC = () => {
    // 数値の高低に応じて色のグラディエーションを生成する関数
    const getColorGradient = (value: number, minValue: number, maxValue: number) => {
        if (maxValue === minValue || value === 0) return 'transparent'; // 全て同じ値か0の場合は透明

        const normalized = (value - minValue) / (maxValue - minValue);

        // 数値の大小に応じて色を決定 (赤→黄→緑のグラディエーション)
        let r, g, b;
        if (normalized < 0.5) {
            // 低い値: 赤から黄色へ (0.0 → 0.5)
            r = 255;
            g = Math.round(255 * (normalized * 2));
            b = 0;
        } else {
            // 高い値: 黄色から緑へ (0.5 → 1.0)
            r = Math.round(255 * (2 - normalized * 2));
            g = 255;
            b = 0;
        }

        // 透明度を調整して背景色として使用
        return `rgba(${r}, ${g}, ${b}, 0.3)`;
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

    // ソート関連のstate
    const [sortParameter, setSortParameter] = React.useState<string | null>(null);
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');

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

    // すべての列を表示する関数
    const showAllColumns = () => {
        setVisibleColumns(new Array(seriesData.length).fill(true));
    };

    // すべての列を非表示にする関数
    const hideAllColumns = () => {
        setVisibleColumns(new Array(seriesData.length).fill(false));
    };

    // デフォルト表示に戻す関数
    const resetToDefaultColumns = () => {
        setVisibleColumns(
            Array.from({ length: seriesData.length }, (_, index) =>
                defaultVisibleSeries.includes(seriesData[index].seriesName)
            )
        );
    };

    // パラメータによるソート処理（昇順 → 降順 → 非ソートの3段階）
    const handleParameterSort = (parameter: string) => {
        if (sortParameter === parameter) {
            if (sortOrder === 'desc') {
                setSortOrder('asc');
            } else if (sortOrder === 'asc') {
                // 非ソートに戻す
                setSortParameter(null);
                setSortOrder('desc');
            }
        } else {
            // 新しいパラメータでソート開始（降順から）
            setSortParameter(parameter);
            setSortOrder('desc');
        }
    };

    // 装備されたコスチュームの情報を取得
    const equippedCostume = useAtomValue(uiEquipmentAtomFamily('costume'));

    // 全シリーズの最終ステータスを計算
    const seriesWithFinalStats = seriesData.map(series => {
        const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
        const finalStats: { [key: string]: number } = { ...series.totalStats };

        // 3点セットでコスチュームが装備されている場合、そのステータスを追加
        if (itemCount === 3 && !series.costume && equippedCostume) {
            // baseOptions (基本オプション)
            if (equippedCostume.baseOptions) {
                Object.entries(equippedCostume.baseOptions).forEach(([key, value]) => {
                    if (typeof value === 'number') {
                        finalStats[key] = (finalStats[key] || 0) + value;
                    }
                });
            }

            // craftedOptions (製作オプション/ソケットオプション)
            if (equippedCostume.craftedOptions) {
                Object.entries(equippedCostume.craftedOptions).forEach(([key, value]) => {
                    if (typeof value === 'number') {
                        finalStats[key] = (finalStats[key] || 0) + value;
                    }
                });
            }

            // additionalOptions (追加オプション)
            if (equippedCostume.additionalOptions) {
                Object.entries(equippedCostume.additionalOptions).forEach(([key, value]) => {
                    if (typeof value === 'number') {
                        finalStats[key] = (finalStats[key] || 0) + value;
                    }
                });
            }
        }

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
    let orderedSeriesWithFinalStats = columnOrder
        .map(index => ({ series: seriesWithFinalStats[index], originalIndex: index }))
        .filter(({ originalIndex }) => visibleColumns[originalIndex]);

    // ソート処理
    if (sortParameter) {
        orderedSeriesWithFinalStats = [...orderedSeriesWithFinalStats].sort((a, b) => {
            const valueA = a.series.finalStats[sortParameter] || 0;
            const valueB = b.series.finalStats[sortParameter] || 0;

            if (sortOrder === 'desc') {
                return valueB - valueA;
            } else {
                return valueA - valueB;
            }
        });
    }

    // 表示用のシリーズデータ
    const displayedSeries = orderedSeriesWithFinalStats.map(({ series }) => series);

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                パラメータ別比較（列をドラッグして並び替え可能）
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, p: 2, backgroundColor: 'info.light', borderRadius: 1 }}>
                <strong>シリーズ比較について:</strong><br />
                • 4点セット: コスチューム、メガネ、イヤリング、帽子の全4点で構成<br />
                • 3点セット: メガネ、イヤリング、帽子の3点で構成されるが、コスチューム部分には任意の装備を設定可能<br />
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                パラメータ名をクリックするとその値で列をソートできます（降順 → 昇順 → 非ソート）
                {sortParameter && (
                    <span style={{ color: '#1976d2', fontWeight: 'bold' }}>
                        {' '}• 現在のソート: {getDisplayName(sortParameter)} ({sortOrder === 'asc' ? '昇順' : '降順'})
                    </span>
                )}
            </Typography>

            {/* 列の表示設定 */}
            <Accordion sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2">列の表示設定</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* 一括操作ボタン */}
                    <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={showAllColumns}
                        >
                            すべて表示
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={hideAllColumns}
                        >
                            すべてクリア
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={resetToDefaultColumns}
                        >
                            デフォルトに戻す
                        </Button>
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
                            <TableCell sx={{ fontWeight: 'bold' }}>パラメータ</TableCell>
                            {orderedSeriesWithFinalStats.map(({ series }, displayIndex) => (
                                <DraggableHeader
                                    key={series.synergyKey}
                                    series={series}
                                    index={displayIndex}
                                    equippedCostume={equippedCostume}
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
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', backgroundColor: 'action.hover' }}>コスチューム設定</TableCell>
                            {orderedSeriesWithFinalStats.map(({ series }) => {
                                const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
                                return (
                                    <TableCell key={`costume-${series.synergyKey}`} sx={{ textAlign: 'center', backgroundColor: 'action.hover' }}>
                                        {itemCount === 4 ? (
                                            // 4点セットの場合は設定不可のメッセージを表示
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
                                                    セット装備済み
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' }}>
                                                    （設定不要）
                                                </Typography>
                                            </Box>
                                        ) : (
                                            // 3点セットの場合はコスチューム設定可能
                                            <>
                                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                    <EquipmentIconButton
                                                        equipmentType="costume"
                                                        title={`コスチューム (${series.seriesName})`}
                                                        items={(() => {
                                                            // 同じシリーズにコスチュームがある場合はそれのみ
                                                            if (series.costume) {
                                                                return displayCostumes.filter(costume => costume.synergyKey === series.synergyKey);
                                                            }
                                                            // 同じシリーズにコスチュームがない場合は全てのコスチューム
                                                            else {
                                                                return displayCostumes;
                                                            }
                                                        })()}
                                                    />
                                                </Box>
                                                {!series.costume && (
                                                    <Typography variant="caption" color="info.main" display="block" sx={{ textAlign: 'center', mt: 0.5, fontSize: '0.65rem' }}>
                                                        任意装備可能
                                                    </Typography>
                                                )}
                                            </>
                                        )}
                                    </TableCell>
                                );
                            })}
                            <TableCell sx={{ backgroundColor: 'action.hover', textAlign: 'center' }}>
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
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                            },
                                            backgroundColor: sortParameter === parameter ? 'primary.light' : 'inherit',
                                            color: sortParameter === parameter ? 'primary.contrastText' : 'inherit'
                                        }}
                                        onClick={() => handleParameterSort(parameter)}
                                    >
                                        {getDisplayName(parameter)}
                                        {sortParameter === parameter && (
                                            <span style={{ marginLeft: '4px' }}>
                                                {sortOrder === 'desc' ? '↓' : '↑'}
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
                                                    textAlign: 'center',
                                                    backgroundColor,
                                                    border: isMax ? '2px solid #2e7d32' : '1px solid rgba(224, 224, 224, 1)',
                                                    fontWeight: isMax ? 'bold' : 'normal'
                                                }}
                                            >
                                                <Typography variant="body2" sx={{
                                                    color: isMax ? '#1b5e20' : 'text.primary',
                                                    fontWeight: isMax ? 'bold' : 'normal'
                                                }}>
                                                    {value > 0 ? formatValue(value) : '-'}
                                                </Typography>
                                            </TableCell>
                                        );
                                    })}
                                    <TableCell sx={{
                                        textAlign: 'center',
                                        backgroundColor: 'success.main',
                                        border: '2px solid #1b5e20'
                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
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
        <PageContainer
            title="コスチューム装備"
            icon={<CheckroomIcon sx={{ fontSize: 32 }} />}
        >
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
                    <CostumeItemTable items={displayCostumes} categoryName="costume" />
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <CostumeItemTable items={displayGlasses} categoryName="glasses" />
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <CostumeItemTable items={displayEarrings} categoryName="earrings" />
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                    <CostumeItemTable items={displayHats} categoryName="hats" />
                </TabPanel>

                <TabPanel value={tabValue} index={4}>
                    <SeriesComparisonTable />
                </TabPanel>

                <TabPanel value={tabValue} index={5}>
                    <ParameterComparisonTable />
                </TabPanel>
            </Box>
        </PageContainer>
    );
};

export default Costume;
