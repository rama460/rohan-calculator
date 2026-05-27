import React, { useState, useMemo } from 'react';
import {
    Box,
    Pagination,
} from '@mui/material';
import { RaceNameOrTrinityJobName } from '../../static/races';
import { ItemDetailModal } from './ItemDetailModal';
import { ItemCompareModal } from './ItemCompareModal';
import { StatisticsModal } from './StatisticsModal';
import { exportToJSON, exportToCSV, flattenDataForExport } from './exportUtils';
import {
    getItemDatabaseItems,
    ItemDatabaseItem,
} from './itemDatabaseData';
import { ItemDatabaseControls, ItemDatabaseViewMode } from './ItemDatabaseControls';
import { ItemCardView, ItemListView, ItemTableView } from './ItemDatabaseViews';

const ITEMS_PER_PAGE = 12;

export const ItemDatabase: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [raceFilter, setRaceFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<ItemDatabaseItem | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<ItemDatabaseViewMode>('card');
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

    const handleCategoryChange = (value: string) => {
        setCategoryFilter(value);
        setCurrentPage(1);
    };

    const handleRaceChange = (value: string) => {
        setRaceFilter(value);
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

    const handleViewModeChange = (newViewMode: ItemDatabaseViewMode) => {
        setViewMode(newViewMode);
        setCurrentPage(1);
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
            <ItemDatabaseControls
                searchTerm={searchTerm}
                categoryFilter={categoryFilter}
                raceFilter={raceFilter}
                viewMode={viewMode}
                compareMode={compareMode}
                compareCount={compareItems.length}
                filteredItemCount={filteredItems.length}
                onSearchTermChange={setSearchTerm}
                onCategoryChange={handleCategoryChange}
                onRaceChange={handleRaceChange}
                onViewModeChange={handleViewModeChange}
                onCompareToggle={handleCompareToggle}
                onCompareOpen={handleCompareModalOpen}
                onStatsOpen={() => setStatsModalOpen(true)}
                onExportJSON={handleExportJSON}
                onExportCSV={handleExportCSV}
            />

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
