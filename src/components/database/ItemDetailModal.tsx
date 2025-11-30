import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Chip,
    Stack,
    Divider,
    CardMedia
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { WeaponTemplate, ItemTemplate } from '../../static/items';
import { BuiltinOptions, getDisplayOptionName } from '../../static/options';

interface ItemDetailModalProps {
    open: boolean;
    onClose: () => void;
    item: (WeaponTemplate | ItemTemplate) & { category: string } | null;
    allItems?: ((WeaponTemplate | ItemTemplate) & { category: string })[];
    onItemClick?: (item: (WeaponTemplate | ItemTemplate) & { category: string }) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ open, onClose, item, allItems = [], onItemClick }) => {
    if (!item) return null;

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

    const getOptionDisplayName = (optionKey: string, value: number) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        if (option) {
            return `${getDisplayOptionName(option)}: ${value > 0 ? '+' : ''}${value}`;
        }
        return `${optionKey}: ${value > 0 ? '+' : ''}${value}`;
    };

    const renderSynergyOptions = (options: { [key: number]: { [key: string]: number } } | undefined) => {
        if (!options || Object.keys(options).length === 0) return null;

        return (
            <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                    シナジー効果
                </Typography>
                <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                    {Object.entries(options).map(([setCount, effects]) => (
                        <Box key={setCount} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                {setCount}セット効果
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                {Object.entries(effects).map(([key, value]) => (
                                    <Chip
                                        key={key}
                                        label={getOptionDisplayName(key, value)}
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                        sx={{ fontSize: '0.7rem' }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
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

    const renderBaseOptions = (options: { [key: string]: number } | undefined, title: string) => {
        if (!options || Object.keys(options).length === 0) return null;

        return (
            <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {Object.entries(options).map(([key, value]) => (
                        <Chip
                            key={key}
                            label={getOptionDisplayName(key, value)}
                            size="small"
                            color={value > 0 ? 'success' : 'default'}
                            variant="outlined"
                        />
                    ))}
                </Box>
            </Box>
        );
    };

    const renderEnchantableOptions = (options: { [level: number]: { [key: string]: number } } | undefined) => {
        if (!options || Object.keys(options).length === 0) return null;

        return (
            <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                    エンチャント効果
                </Typography>
                <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
                    {Object.entries(options).map(([level, effects]) => (
                        <Box key={level} sx={{ mb: 1, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                レベル {level}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                {Object.entries(effects).map(([key, value]) => (
                                    <Chip
                                        key={key}
                                        label={getOptionDisplayName(key, value)}
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                        sx={{ fontSize: '0.7rem' }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    };

    // 関連アイテムを取得
    const getRelatedItems = () => {
        if (!allItems.length) return [];

        const related: typeof allItems = [];

        // 同シリーズアイテム
        if (item.seriesName) {
            const sameSeriesItems = allItems.filter(i =>
                i.seriesName === item.seriesName &&
                !(i.id === item.id && i.category === item.category)
            ).slice(0, 3);
            related.push(...sameSeriesItems);
        }

        // 同カテゴリアイテム（まだ3個未満の場合）
        if (related.length < 3) {
            const sameCategoryItems = allItems.filter(i =>
                i.category === item.category &&
                !(i.id === item.id && i.category === item.category) &&
                !related.some(r => r.id === i.id && r.category === i.category)
            ).slice(0, 3 - related.length);
            related.push(...sameCategoryItems);
        }

        // 同タイプアイテム（武器の場合、まだ3個未満の場合）
        if (related.length < 3 && 'type' in item && item.type) {
            const sameTypeItems = allItems.filter(i =>
                'type' in i && i.type === item.type &&
                !(i.id === item.id && i.category === item.category) &&
                !related.some(r => r.id === i.id && r.category === i.category)
            ).slice(0, 3 - related.length);
            related.push(...sameTypeItems);
        }

        return related;
    };

    const relatedItems = getRelatedItems();

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">
                    {item.name}
                </Typography>
                <Button onClick={onClose} color="inherit" size="small">
                    <CloseIcon />
                </Button>
            </DialogTitle>

            <DialogContent>
                <Stack spacing={3}>
                    {/* アイテム基本情報 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 80, height: 80, objectFit: 'contain' }}
                            image={item.icon}
                            alt={item.name}
                        />
                        <Box>
                            <Typography variant="h6">{item.name}</Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                <Chip
                                    label={getCategoryDisplayName(item.category)}
                                    color="primary"
                                    variant="outlined"
                                />
                                {'type' in item && item.type && (
                                    <Chip
                                        label={getWeaponTypeDisplayName(item.type)}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                )}
                            </Box>
                        </Box>
                    </Box>

                    <Divider />

                    {/* 使用可能種族 */}
                    {item.availableRaces && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                使用可能種族
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {item.availableRaces.map((race) => (
                                    <Chip
                                        key={race}
                                        label={getRaceDisplayName(race)}
                                        size="small"
                                        color="info"
                                        variant="outlined"
                                    />
                                ))}
                            </Box>
                        </Box>
                    )}

                    {/* ソケット数 */}
                    {item.sockets && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                ソケット数
                            </Typography>
                            <Chip
                                label={`${item.sockets} ソケット`}
                                color="warning"
                                variant="outlined"
                            />
                        </Box>
                    )}

                    {/* 固定オプション */}
                    {'fixedBaseOptions' in item && renderBaseOptions(item.fixedBaseOptions, '固定オプション')}

                    {/* エンチャント可能オプション */}
                    {'enchantableBaseOptions' in item && renderEnchantableOptions(item.enchantableBaseOptions)}

                    {/* 種族別オプション */}
                    {'raceBaseOptions' in item && item.raceBaseOptions && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                種族別オプション
                            </Typography>
                            {Object.entries(item.raceBaseOptions).map(([race, options]) => (
                                <Box key={race} sx={{ mb: 2 }}>
                                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                        {race}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                                        {Object.entries(options).map(([key, value]) => (
                                            <Chip
                                                key={key}
                                                label={getOptionDisplayName(key, value)}
                                                size="small"
                                                color="info"
                                                variant="outlined"
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {/* シナジー効果 */}
                    {'synergyOptions' in item && renderSynergyOptions(item.synergyOptions)}

                    {/* シリーズ名 */}
                    {item.seriesName && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                シリーズ名
                            </Typography>
                            <Chip
                                label={item.seriesName}
                                color="info"
                                variant="outlined"
                            />
                        </Box>
                    )}

                    {/* 関連アイテム */}
                    {relatedItems.length > 0 && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                関連アイテム
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                {relatedItems.map((relatedItem) => (
                                    <Box
                                        key={`${relatedItem.category}-${relatedItem.id}`}
                                        onClick={() => onItemClick?.(relatedItem)}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            p: 1,
                                            border: 1,
                                            borderColor: 'divider',
                                            borderRadius: 1,
                                            cursor: onItemClick ? 'pointer' : 'default',
                                            '&:hover': onItemClick ? {
                                                backgroundColor: 'action.hover'
                                            } : {}
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={relatedItem.icon}
                                            alt={relatedItem.name}
                                            sx={{ width: 24, height: 24, objectFit: 'contain' }}
                                        />
                                        <Typography variant="body2" sx={{ flexGrow: 1 }}>
                                            {relatedItem.name}
                                        </Typography>
                                        <Chip
                                            label={getCategoryDisplayName(relatedItem.category)}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary">
                    閉じる
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ItemDetailModal;