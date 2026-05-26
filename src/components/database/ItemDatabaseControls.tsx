import React from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CompareIcon from '@mui/icons-material/Compare';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import TableViewIcon from '@mui/icons-material/TableView';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { getRaceDisplayName } from './itemDatabaseData';

export type ItemDatabaseViewMode = 'card' | 'list' | 'table';

interface ItemDatabaseControlsProps {
    searchTerm: string;
    categoryFilter: string;
    raceFilter: string;
    viewMode: ItemDatabaseViewMode;
    compareMode: boolean;
    compareCount: number;
    filteredItemCount: number;
    onSearchTermChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onRaceChange: (value: string) => void;
    onViewModeChange: (viewMode: ItemDatabaseViewMode) => void;
    onCompareToggle: () => void;
    onCompareOpen: () => void;
    onStatsOpen: () => void;
    onExportJSON: () => void;
    onExportCSV: () => void;
}

export const ItemDatabaseControls: React.FC<ItemDatabaseControlsProps> = ({
    searchTerm,
    categoryFilter,
    raceFilter,
    viewMode,
    compareMode,
    compareCount,
    filteredItemCount,
    onSearchTermChange,
    onCategoryChange,
    onRaceChange,
    onViewModeChange,
    onCompareToggle,
    onCompareOpen,
    onStatsOpen,
    onExportJSON,
    onExportCSV,
}) => {
    const handleViewModeChange = (_event: React.MouseEvent<HTMLElement>, newViewMode: ItemDatabaseViewMode | null) => {
        if (newViewMode !== null) {
            onViewModeChange(newViewMode);
        }
    };

    const handleCategoryChange = (event: SelectChangeEvent) => {
        onCategoryChange(event.target.value);
    };

    const handleRaceChange = (event: SelectChangeEvent) => {
        onRaceChange(event.target.value);
    };

    return (
        <Box sx={{ mb: 3 }}>
            <Stack spacing={2}>
                <TextField
                    fullWidth
                    placeholder="アイテム名で検索..."
                    value={searchTerm}
                    onChange={(e) => onSearchTermChange(e.target.value)}
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
                                onClick={onCompareToggle}
                                variant={compareMode ? 'contained' : 'outlined'}
                                color={compareMode ? 'primary' : 'inherit'}
                            >
                                比較モード
                            </Button>
                            <Button
                                startIcon={<CompareIcon />}
                                onClick={onCompareOpen}
                                variant="outlined"
                                disabled={compareCount < 2}
                            >
                                比較 ({compareCount})
                            </Button>
                            <Button
                                startIcon={<BarChartIcon />}
                                onClick={onStatsOpen}
                                variant="outlined"
                            >
                                統計
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup size="small">
                            <Button
                                startIcon={<DownloadIcon />}
                                onClick={onExportJSON}
                                variant="outlined"
                            >
                                JSON
                            </Button>
                            <Button
                                startIcon={<DownloadIcon />}
                                onClick={onExportCSV}
                                variant="outlined"
                            >
                                CSV
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        {filteredItemCount} 件のアイテムが見つかりました
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};
