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
    CardMedia,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { WeaponTemplate, ItemTemplate } from '../../static/items';
import { BuiltinOptions, getDisplayOptionName } from '../../static/options';

interface ItemCompareModalProps {
    open: boolean;
    onClose: () => void;
    items: ((WeaponTemplate | ItemTemplate) & { category: string })[];
}

export const ItemCompareModal: React.FC<ItemCompareModalProps> = ({ open, onClose, items }) => {
    if (items.length < 2) return null;

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

    const getOptionDisplayName = (optionKey: string) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        if (option) {
            return getDisplayOptionName(option);
        }
        return optionKey;
    };

    // 全アイテムから固定オプションを収集
    const allOptions = new Set<string>();
    items.forEach(item => {
        if ('fixedBaseOptions' in item && item.fixedBaseOptions) {
            Object.keys(item.fixedBaseOptions).forEach(key => allOptions.add(key));
        }
    });

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">アイテム比較 ({items.length}件)</Typography>
                    <Button onClick={onClose} sx={{ minWidth: 'auto', p: 1 }}>
                        <CloseIcon />
                    </Button>
                </Box>
            </DialogTitle>
            <DialogContent>
                {/* 基本情報比較 */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        基本情報
                    </Typography>
                    <TableContainer component={Paper} sx={{ mb: 2 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>項目</TableCell>
                                    {items.map((item, index) => (
                                        <TableCell key={index} align="center">
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                                                <CardMedia
                                                    component="img"
                                                    image={item.icon}
                                                    alt={item.name}
                                                    sx={{ width: 32, height: 32, objectFit: 'contain' }}
                                                />
                                                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>カテゴリ</TableCell>
                                    {items.map((item, index) => (
                                        <TableCell key={index} align="center">
                                            <Chip
                                                label={getCategoryDisplayName(item.category)}
                                                size="small"
                                                color="primary"
                                                variant="outlined"
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                                {'type' in items[0] && (
                                    <TableRow>
                                        <TableCell>タイプ</TableCell>
                                        {items.map((item, index) => (
                                            <TableCell key={index} align="center">
                                                {'type' in item && item.type ? (
                                                    <Chip
                                                        label={getWeaponTypeDisplayName(item.type)}
                                                        size="small"
                                                        color="secondary"
                                                        variant="outlined"
                                                    />
                                                ) : '-'}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                )}
                                <TableRow>
                                    <TableCell>対応種族</TableCell>
                                    {items.map((item, index) => (
                                        <TableCell key={index} align="center">
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                                                {item.availableRaces ? (
                                                    item.availableRaces.map(race => (
                                                        <Chip
                                                            key={race}
                                                            label={getRaceDisplayName(race)}
                                                            size="small"
                                                            variant="outlined"
                                                            sx={{ fontSize: '0.6rem', height: 18 }}
                                                        />
                                                    ))
                                                ) : (
                                                    <Typography variant="caption">全種族</Typography>
                                                )}
                                            </Box>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* オプション比較 */}
                {allOptions.size > 0 && (
                    <Box>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            固定オプション比較
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>オプション</TableCell>
                                        {items.map((item, index) => (
                                            <TableCell key={index} align="center">
                                                {item.name}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Array.from(allOptions).map(optionKey => (
                                        <TableRow key={optionKey}>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                    {getOptionDisplayName(optionKey)}
                                                </Typography>
                                            </TableCell>
                                            {items.map((item, index) => {
                                                const value = 'fixedBaseOptions' in item && item.fixedBaseOptions
                                                    ? (item.fixedBaseOptions as any)[optionKey] || 0
                                                    : 0;

                                                return (
                                                    <TableCell key={index} align="center">
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                fontWeight: value > 0 ? 'bold' : 'normal',
                                                                color: value > 0 ? 'success.main' : 'text.secondary'
                                                            }}
                                                        >
                                                            {value > 0 ? `+${value}` : '-'}
                                                        </Typography>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>閉じる</Button>
            </DialogActions>
        </Dialog>
    );
};