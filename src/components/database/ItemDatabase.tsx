import React, { useState, useMemo } from 'react';
import {
    Box,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Pagination,
    SelectChangeEvent,
    Button,
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import { RaceNameOrTrinityJobName } from '../../static/races';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import TableViewIcon from '@mui/icons-material/TableView';
import CompareIcon from '@mui/icons-material/Compare';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ItemDetailModal } from './ItemDetailModal';
import { ItemCompareModal } from './ItemCompareModal';
import { StatisticsModal } from './StatisticsModal';
import { exportToJSON, exportToCSV, flattenDataForExport } from './exportUtils';
import {
    getItemDatabaseItems,
    getRaceDisplayName,
    ItemDatabaseItem,
} from './itemDatabaseData';
import { ItemCardView, ItemListView, ItemTableView } from './ItemDatabaseViews';

const ITEMS_PER_PAGE = 12;

export const ItemDatabase: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [raceFilter, setRaceFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<ItemDatabaseItem | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'card' | 'list' | 'table'>('card');
    const [compareItems, setCompareItems] = useState<ItemDatabaseItem[]>([]);
    const [compareMode, setCompareMode] = useState(false);
    const [compareModalOpen, setCompareModalOpen] = useState(false);
    const [statsModalOpen, setStatsModalOpen] = useState(false);

    const allItems = useMemo(() => getItemDatabaseItems(), []);

    // フィルタリングされたアイテム
    const filteredItems = useMemo(() => {
        let filtered = allItems;

        // 検索フィルター
        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // カテゴリフィルター
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(item => item.category === categoryFilter);
        }

        // 種族フィルター
        if (raceFilter !== 'all') {
            filtered = filtered.filter(item =>
                !item.availableRaces || item.availableRaces.includes(raceFilter as RaceNameOrTrinityJobName)
            );
        }

        return filtered;
    }, [allItems, searchTerm, categoryFilter, raceFilter]);

    // ページネーション
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategoryFilter(event.target.value);
        setCurrentPage(1);
    };

    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceFilter(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleItemClick = (item: typeof allItems[0]) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedItem(null);
    };

    const handleViewModeChange = (_event: React.MouseEvent<HTMLElement>, newViewMode: 'card' | 'list' | 'table' | null) => {
        if (newViewMode !== null) {
            setViewMode(newViewMode);
            setCurrentPage(1); // ページをリセット
        }
    };

    const handleCompareToggle = () => {
        setCompareMode(!compareMode);
        if (compareMode) {
            setCompareItems([]);
        }
    };

    const handleItemSelect = (item: typeof allItems[0]) => {
        if (compareMode) {
            if (compareItems.find(i => i.id === item.id && i.category === item.category)) {
                setCompareItems(compareItems.filter(i => !(i.id === item.id && i.category === item.category)));
            } else if (compareItems.length < 4) {
                setCompareItems([...compareItems, item]);
            }
        } else {
            handleItemClick(item);
        }
    };

    const handleCompareModalOpen = () => {
        if (compareItems.length >= 2) {
            setCompareModalOpen(true);
        }
    };

    const handleCompareModalClose = () => {
        setCompareModalOpen(false);
    };

    const handleExportJSON = () => {
        const exportData = flattenDataForExport(filteredItems);
        exportToJSON(exportData, 'rohan-items');
    };

    const handleExportCSV = () => {
        const exportData = flattenDataForExport(filteredItems);
        exportToCSV(exportData, 'rohan-items');
    };

    const renderCurrentView = () => {
        const viewProps = {
            items: paginatedItems,
            compareItems,
            compareMode,
            onItemSelect: handleItemSelect,
        };

        switch (viewMode) {
            case 'list':
                return <ItemListView {...viewProps} />;
            case 'table':
                return <ItemTableView {...viewProps} />;
            default:
                return <ItemCardView {...viewProps} />;
        }
    };

    return (
        <Box>
            {/* 検索・フィルタリングエリア */}
            <Box sx={{ mb: 3 }}>
                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        placeholder="アイテム名で検索..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                        }}
                    />

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>カテゴリ</InputLabel>
                            <Select
                                value={categoryFilter}
                                label="カテゴリ"
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value="all">すべて</MenuItem>
                                <MenuItem value="weapon">武器</MenuItem>
                                <MenuItem value="shield">盾</MenuItem>
                                <MenuItem value="helmet">ヘルメット</MenuItem>
                                <MenuItem value="gauntlet">ガントレット</MenuItem>
                                <MenuItem value="tunic">チュニック</MenuItem>
                                <MenuItem value="legging">レギンス</MenuItem>
                                <MenuItem value="boot">ブーツ</MenuItem>
                                <MenuItem value="arrow">矢</MenuItem>
                                <MenuItem value="glasses">メガネ</MenuItem>
                                <MenuItem value="hat">帽子</MenuItem>
                                <MenuItem value="earring">イヤリング</MenuItem>
                                <MenuItem value="costume">コスチューム</MenuItem>
                                <MenuItem value="accessory">アクセサリー</MenuItem>
                                <MenuItem value="talisman">タリスマン</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>種族</InputLabel>
                            <Select
                                value={raceFilter}
                                label="種族"
                                onChange={handleRaceChange}
                            >
                                <MenuItem value="all">すべて</MenuItem>
                                <MenuItem value="Human">{getRaceDisplayName('Human')}</MenuItem>
                                <MenuItem value="Elf">{getRaceDisplayName('Elf')}</MenuItem>
                                <MenuItem value="HalfElf">{getRaceDisplayName('HalfElf')}</MenuItem>
                                <MenuItem value="Dan">{getRaceDisplayName('Dan')}</MenuItem>
                                <MenuItem value="Dekan">{getRaceDisplayName('Dekan')}</MenuItem>
                                <MenuItem value="DarkElf">{getRaceDisplayName('DarkElf')}</MenuItem>
                                <MenuItem value="Giant">{getRaceDisplayName('Giant')}</MenuItem>
                            </Select>
                        </FormControl>

                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                            <ToggleButtonGroup
                                value={viewMode}
                                exclusive
                                onChange={handleViewModeChange}
                                size="small"
                            >
                                <ToggleButton value="card" aria-label="カード表示">
                                    <ViewModuleIcon />
                                </ToggleButton>
                                <ToggleButton value="list" aria-label="リスト表示">
                                    <ViewListIcon />
                                </ToggleButton>
                                <ToggleButton value="table" aria-label="テーブル表示">
                                    <TableViewIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>

                            <ButtonGroup size="small">
                                <Button
                                    startIcon={compareMode ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                                    onClick={handleCompareToggle}
                                    variant={compareMode ? "contained" : "outlined"}
                                    color={compareMode ? "primary" : "inherit"}
                                >
                                    比較モード
                                </Button>
                                <Button
                                    startIcon={<CompareIcon />}
                                    onClick={handleCompareModalOpen}
                                    variant="outlined"
                                    disabled={compareItems.length < 2}
                                >
                                    比較 ({compareItems.length})
                                </Button>
                                <Button
                                    startIcon={<BarChartIcon />}
                                    onClick={() => setStatsModalOpen(true)}
                                    variant="outlined"
                                >
                                    統計
                                </Button>
                            </ButtonGroup>

                            <ButtonGroup size="small">
                                <Button
                                    startIcon={<DownloadIcon />}
                                    onClick={handleExportJSON}
                                    variant="outlined"
                                >
                                    JSON
                                </Button>
                                <Button
                                    startIcon={<DownloadIcon />}
                                    onClick={handleExportCSV}
                                    variant="outlined"
                                >
                                    CSV
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            {filteredItems.length} 件のアイテムが見つかりました
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* アイテム一覧 */}
            {renderCurrentView()}

            {/* ページネーション */}
            {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Box>
            )}

            {/* アイテム詳細モーダル */}
            <ItemDetailModal
                open={modalOpen}
                onClose={handleModalClose}
                item={selectedItem}
                allItems={allItems}
                onItemClick={(item) => {
                    setSelectedItem(item);
                }}
            />

            {/* アイテム比較モーダル */}
            <ItemCompareModal
                open={compareModalOpen}
                onClose={handleCompareModalClose}
                items={compareItems}
            />

            {/* 統計情報モーダル */}
            <StatisticsModal
                open={statsModalOpen}
                onClose={() => setStatsModalOpen(false)}
                items={filteredItems}
            />
        </Box>
    );
};

export default ItemDatabase;
