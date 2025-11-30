import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Grid,
    Chip,
    Stack,
    Divider,
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
import { Skill } from '../../static/skills/skill';

interface SkillDetailModalProps {
    open: boolean;
    onClose: () => void;
    skill: (Skill & { jobName: string }) | null;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ open, onClose, skill }) => {
    if (!skill) return null;

    const getJobDisplayName = (jobName: string) => {
        const jobMap: Record<string, string> = {
            archer: 'アーチャー',
            assassin: 'アサシン',
            avenger: 'アベンジャー',
            berserker: 'バーサーカー',
            defender: 'ディフェンダー',
            dragonfighter: 'ドラゴンファイター',
            dragonknight: 'ドラゴンナイト',
            dragonsage: 'ドラゴンセージ',
            guardian: 'ガーディアン',
            healer: 'ヒーラー',
            knight: 'ナイト',
            mage: 'メイジ',
            mer: 'マー',
            noir: 'ノワール',
            predator: 'プレデター',
            priest: 'プリースト',
            ranger: 'レンジャー',
            rumior: 'ルミオル',
            savage: 'サベージ',
            scout: 'スカウト',
            templar: 'テンプラー',
            warlock: 'ウォーロック',
            warrior: 'ウォーリアー',
            wizard: 'ウィザード',
            common: '共通',
            cash: 'キャッシュ',
            guild: 'ギルド'
        };
        return jobMap[jobName] || jobName;
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Passive':
                return 'secondary';
            case 'Buff':
                return 'success';
            case 'Attack':
                return 'error';
            case 'Debuff':
                return 'warning';
            default:
                return 'default';
        }
    };

    const getOriginColor = (origin: string) => {
        switch (origin) {
            case 'Self':
                return 'primary';
            case 'Group':
                return 'info';
            case 'Guild':
                return 'warning';
            case 'Cash':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">
                    {skill.displayName || skill.name}
                </Typography>
                <Button onClick={onClose} color="inherit" size="small">
                    <CloseIcon />
                </Button>
            </DialogTitle>

            <DialogContent>
                <Stack spacing={3}>
                    {/* スキル基本情報 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 80, height: 80, objectFit: 'contain' }}
                            image={skill.icon}
                            alt={skill.name}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">{skill.displayName || skill.name}</Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                内部名: {skill.name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                                <Chip
                                    label={getJobDisplayName(skill.jobName)}
                                    color="primary"
                                    variant="outlined"
                                />
                                <Chip
                                    label={skill.category}
                                    color={getCategoryColor(skill.category) as any}
                                    variant="outlined"
                                />
                                <Chip
                                    label={skill.origin}
                                    color={getOriginColor(skill.origin) as any}
                                    variant="outlined"
                                />
                            </Box>
                        </Box>
                    </Box>

                    <Divider />

                    {/* スキルレベル情報 */}
                    <Box>
                        <Typography variant="subtitle2" gutterBottom>
                            レベル情報
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Chip
                                    label={`最小レベル: ${skill.min}`}
                                    color="info"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Chip
                                    label={`最大レベル: ${skill.max}`}
                                    color="info"
                                    variant="outlined"
                                />
                            </Grid>
                            {skill.raceid !== undefined && (
                                <Grid item xs={6} sm={3}>
                                    <Chip
                                        label={`種族ID: ${skill.raceid}`}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                </Grid>
                            )}
                            {skill.jobid !== undefined && (
                                <Grid item xs={6} sm={3}>
                                    <Chip
                                        label={`職業ID: ${skill.jobid}`}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </Box>

                    {/* スキル説明 */}
                    {skill.descriptions && skill.descriptions.length > 0 && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                スキル説明
                            </Typography>
                            <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                                {skill.descriptions.map((desc, index) => (
                                    <Typography key={index} variant="body2" paragraph>
                                        {desc}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    )}

                    {/* スキル効果テーブル */}
                    {skill.attributes && Object.keys(skill.attributes).length > 0 && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                レベル別効果
                            </Typography>
                            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                                <Table stickyHeader size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bold' }}>レベル</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>効果</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Object.entries(skill.attributes).map(([level, effects]) => (
                                            <TableRow key={level}>
                                                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                                    Lv.{level}
                                                </TableCell>
                                                <TableCell>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {Object.entries(effects).map(([key, value]) => (
                                                            <Chip
                                                                key={key}
                                                                label={`${key}: ${value > 0 ? '+' : ''}${value}`}
                                                                size="small"
                                                                color={value > 0 ? 'success' : value < 0 ? 'error' : 'default'}
                                                                variant="outlined"
                                                                sx={{ fontSize: '0.7rem' }}
                                                            />
                                                        ))}
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
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

export default SkillDetailModal;