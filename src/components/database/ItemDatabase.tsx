import React, { useState, useMemo } from 'react';
import {
    Box,
    TextField,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    Pagination,
    SelectChangeEvent,
    Button,
    ButtonGroup,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import {
    weapons,
    shields,
    helmets,
    gauntlets,
    tunics,
    arrows,
    leggings,
    boots,
    glasses,
    hats,
    earrings,
    costumes,
    accessories,
    b_talismans,
    j_talismans,
    h_talismans,
    g_talismans,
    i_talismans,
    n_talismans,
    e_talismans,
    f_talismans,
    r_talismans,
    w_talismans,
    q_talismans,
    s_talismans,
    t_talismans,
    k_talismans,
    l_talismans
} from '../../static/items';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import TableViewIcon from '@mui/icons-material/TableView';
import { ItemDetailModal } from './ItemDetailModal';
import { exportToJSON, exportToCSV, flattenDataForExport } from './exportUtils';

interface ItemDatabaseProps {
    // プロップスは後で追加可能
}

const ITEMS_PER_PAGE = 12;

export const ItemDatabase: React.FC<ItemDatabaseProps> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [raceFilter, setRaceFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<(typeof allItems)[0] | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [viewMode, setViewMode] = useState<'card' | 'list' | 'table'>('card');

    // 全アイテムデータを統合
    const allItems = useMemo(() => {
        // タリスマンを統合
        const allTalismans = [
            ...b_talismans,
            ...j_talismans,
            ...h_talismans,
            ...g_talismans,
            ...i_talismans,
            ...n_talismans,
            ...e_talismans,
            ...f_talismans,
            ...r_talismans,
            ...w_talismans,
            ...q_talismans,
            ...s_talismans,
            ...t_talismans,
            ...k_talismans,
            ...l_talismans
        ];

        const itemsWithCategory = [
            ...weapons.map(item => ({ ...item, category: 'weapon' as const })),
            ...shields.map(item => ({ ...item, category: 'shield' as const })),
            ...helmets.map(item => ({ ...item, category: 'helmet' as const })),
            ...gauntlets.map(item => ({ ...item, category: 'gauntlet' as const })),
            ...tunics.map(item => ({ ...item, category: 'tunic' as const })),
            ...leggings.map(item => ({ ...item, category: 'legging' as const })),
            ...boots.map(item => ({ ...item, category: 'boot' as const })),
            ...arrows.map(item => ({ ...item, category: 'arrow' as const })),
            ...glasses.map(item => ({ ...item, category: 'glasses' as const })),
            ...hats.map(item => ({ ...item, category: 'hat' as const })),
            ...earrings.map(item => ({ ...item, category: 'earring' as const })),
            ...costumes.map(item => ({ ...item, category: 'costume' as const })),
            ...accessories.map(item => ({ ...item, category: 'accessory' as const })),
            ...allTalismans.map(item => ({ ...item, category: 'talisman' as const }))
        ];
        return itemsWithCategory;
    }, []);

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
                !item.availableRaces || item.availableRaces.includes(raceFilter as any)
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

    const handleExportJSON = () => {
        const exportData = flattenDataForExport(filteredItems);
        exportToJSON(exportData, 'rohan-items');
    };

    const handleExportCSV = () => {
        const exportData = flattenDataForExport(filteredItems);
        exportToCSV(exportData, 'rohan-items');
    };

    const getCategoryDisplayName = (category: string) => {
        const categoryMap: Record<string, string> = {
            weapon: '武器',
            shield: '盾',
            helmet: 'ヘルメット',
            gauntlet: 'ガントレット',
            tunic: 'チュニック',
            legging: 'レギンス',
            boot: 'ブーツ',
            arrow: '矢',
            glasses: 'メガネ',
            hat: '帽子',
            earring: 'イヤリング',
            costume: 'コスチューム',
            accessory: 'アクセサリー',
            talisman: 'タリスマン'
        };
        return categoryMap[category] || category;
    };

    const getRaceDisplayName = (race: string) => {
        const raceMap: Record<string, string> = {
            Human: 'ヒューマン',
            Elf: 'エルフ',
            HalfElf: 'ハーフエルフ',
            Dan: 'ダン',
            Dekan: 'デカン',
            DarkElf: 'ダークエルフ',
            Giant: 'ジャイアント'
        };
        return raceMap[race] || race;
    };

    const getWeaponTypeDisplayName = (type?: string) => {
        const typeMap: Record<string, string> = {
            dagger: 'ダガー',
            sword: 'ソード',
            axe: 'アックス',
            blunt: 'ブラント',
            dualsword: 'デュアルソード',
            polearm: 'ポールアーム',
            katar: 'カタール',
            zen: '禅',
            staff: 'スタッフ',
            bow: 'ボウ',
            crossbow: 'クロスボウ',
            glove: 'グローブ',
            orb: 'オーブ'
        };
        return type ? typeMap[type] || type : '';
    };

    const renderCardView = () => (
        <Grid container spacing={2}>
            {paginatedItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={`${item.category}-${item.id}`}>
                    <Card
                        onClick={() => handleItemClick(item)}
                        sx={{
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 3
                            }
                        }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <CardMedia
                                    component="img"
                                    image={item.icon}
                                    alt={item.name}
                                    sx={{
                                        width: 32,
                                        height: 32,
                                        objectFit: 'contain',
                                        backgroundColor: 'grey.100',
                                        borderRadius: 1,
                                        flexShrink: 0
                                    }}
                                />
                                <Typography variant="h6" component="h3" sx={{ fontSize: '0.9rem', flexGrow: 1 }}>
                                    {item.name}
                                </Typography>
                            </Box>

                            <Stack spacing={1}>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />

                                {'type' in item && item.type && (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                )}

                                {item.availableRaces && (
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">
                                            使用可能種族:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                            {item.availableRaces.slice(0, 3).map((race) => (
                                                <Chip
                                                    key={race}
                                                    label={getRaceDisplayName(race)}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{ fontSize: '0.7rem', height: 20 }}
                                                />
                                            ))}
                                            {item.availableRaces.length > 3 && (
                                                <Typography variant="caption" color="text.secondary">
                                                    +{item.availableRaces.length - 3}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );

    const renderListView = () => (
        <List>
            {paginatedItems.map((item) => (
                <ListItem
                    key={`${item.category}-${item.id}`}
                    onClick={() => handleItemClick(item)}
                    sx={{
                        cursor: 'pointer',
                        border: 1,
                        borderColor: 'divider',
                        borderRadius: 1,
                        mb: 1,
                        '&:hover': {
                            backgroundColor: 'action.hover'
                        }
                    }}
                >
                    <ListItemAvatar>
                        <Avatar
                            src={item.icon}
                            alt={item.name}
                            sx={{ width: 40, height: 40, backgroundColor: 'grey.100' }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />
                                {'type' in item && item.type && (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                )}
                                {item.availableRaces && item.availableRaces.length > 0 && (
                                    <Chip
                                        label={`${item.availableRaces.length}種族対応`}
                                        size="small"
                                        variant="outlined"
                                    />
                                )}
                            </Box>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );

    const renderTableView = () => (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>アイコン</TableCell>
                        <TableCell>名前</TableCell>
                        <TableCell>カテゴリ</TableCell>
                        <TableCell>タイプ</TableCell>
                        <TableCell>対応種族数</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {paginatedItems.map((item) => (
                        <TableRow
                            key={`${item.category}-${item.id}`}
                            onClick={() => handleItemClick(item)}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'action.hover'
                                }
                            }}
                        >
                            <TableCell>
                                <Avatar
                                    src={item.icon}
                                    alt={item.name}
                                    sx={{ width: 32, height: 32, backgroundColor: 'grey.100' }}
                                />
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                />
                            </TableCell>
                            <TableCell>
                                {'type' in item && item.type ? (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                    />
                                ) : '-'}
                            </TableCell>
                            <TableCell>
                                {item.availableRaces ? item.availableRaces.length : '全種族'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    const renderCurrentView = () => {
        switch (viewMode) {
            case 'list':
                return renderListView();
            case 'table':
                return renderTableView();
            default:
                return renderCardView();
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

                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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
            />
        </Box>
    );
};

export default ItemDatabase;