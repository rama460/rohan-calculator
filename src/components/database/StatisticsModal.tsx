import React, { useMemo } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Chip,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { WeaponTemplate, ItemTemplate } from '../../static/items';

interface StatisticsModalProps {
    open: boolean;
    onClose: () => void;
    items: ((WeaponTemplate | ItemTemplate) & { category: string })[];
}

export const StatisticsModal: React.FC<StatisticsModalProps> = ({ open, onClose, items }) => {
    const statistics = useMemo(() => {
        const categoryStats: Record<string, number> = {};
        const raceStats: Record<string, number> = {};
        const typeStats: Record<string, number> = {};
        const seriesStats: Record<string, number> = {};

        items.forEach(item => {
            // カテゴリ統計
            categoryStats[item.category] = (categoryStats[item.category] || 0) + 1;

            // 種族統計
            if (item.availableRaces) {
                item.availableRaces.forEach(race => {
                    raceStats[race] = (raceStats[race] || 0) + 1;
                });
            } else {
                raceStats['全種族'] = (raceStats['全種族'] || 0) + 1;
            }

            // タイプ統計（武器の場合）
            if ('type' in item && item.type) {
                typeStats[item.type] = (typeStats[item.type] || 0) + 1;
            }

            // シリーズ統計
            if (item.seriesName) {
                seriesStats[item.seriesName] = (seriesStats[item.seriesName] || 0) + 1;
            }
        });

        return {
            total: items.length,
            categoryStats,
            raceStats,
            typeStats,
            seriesStats
        };
    }, [items]);

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
            Giant: 'ジャイアント',
            '全種族': '全種族'
        };
        return raceMap[race] || race;
    };

    const getWeaponTypeDisplayName = (type: string) => {
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
        return typeMap[type] || type;
    };

    const StatSection: React.FC<{ title: string; data: Record<string, number>; displayNameFn?: (key: string) => string }> = ({
        title,
        data,
        displayNameFn = (key) => key
    }) => (
        <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <List dense>
                {Object.entries(data)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 10)
                    .map(([key, count]) => (
                        <ListItem key={key} sx={{ py: 0.5 }}>
                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="body2">
                                            {displayNameFn(key)}
                                        </Typography>
                                        <Chip
                                            label={count}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                        />
                                    </Box>
                                }
                            />
                            <Divider sx={{ my: 0.5 }} />
                        </ListItem>
                    ))}
            </List>
        </Paper>
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">統計情報</Typography>
                    <Button onClick={onClose} sx={{ minWidth: 'auto', p: 1 }}>
                        <CloseIcon />
                    </Button>
                </Box>
            </DialogTitle>
            <DialogContent>
                {/* 総合統計 */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        総合統計
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{ p: 2, textAlign: 'center' }}>
                                <Typography variant="h4" color="primary">
                                    {statistics.total}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    総アイテム数
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{ p: 2, textAlign: 'center' }}>
                                <Typography variant="h4" color="secondary">
                                    {Object.keys(statistics.categoryStats).length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    カテゴリ数
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{ p: 2, textAlign: 'center' }}>
                                <Typography variant="h4" color="success.main">
                                    {Object.keys(statistics.typeStats).length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    武器タイプ数
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper sx={{ p: 2, textAlign: 'center' }}>
                                <Typography variant="h4" color="warning.main">
                                    {Object.keys(statistics.seriesStats).length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    シリーズ数
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* 詳細統計 */}
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    詳細統計
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StatSection
                            title="カテゴリ別アイテム数"
                            data={statistics.categoryStats}
                            displayNameFn={getCategoryDisplayName}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StatSection
                            title="種族別対応アイテム数"
                            data={statistics.raceStats}
                            displayNameFn={getRaceDisplayName}
                        />
                    </Grid>
                    {Object.keys(statistics.typeStats).length > 0 && (
                        <Grid item xs={12} md={6}>
                            <StatSection
                                title="武器タイプ別アイテム数"
                                data={statistics.typeStats}
                                displayNameFn={getWeaponTypeDisplayName}
                            />
                        </Grid>
                    )}
                    {Object.keys(statistics.seriesStats).length > 0 && (
                        <Grid item xs={12} md={6}>
                            <StatSection
                                title="シリーズ別アイテム数"
                                data={statistics.seriesStats}
                            />
                        </Grid>
                    )}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>閉じる</Button>
            </DialogActions>
        </Dialog>
    );
};