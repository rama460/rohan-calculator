import React, { useState, useMemo } from 'react';
import {
    Box,
    TextField,
    Card,
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
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    ButtonGroup
} from '@mui/material';
import { skills, Skill } from '../../static/skills/skill';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import { SkillDetailModal } from './SkillDetailModal';
import { exportToJSON, exportToCSV, flattenDataForExport } from './exportUtils';

interface SkillDatabaseProps {
    // プロップスは後で追加可能
}

const SKILLS_PER_PAGE = 20;

export const SkillDatabase: React.FC<SkillDatabaseProps> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobFilter, setJobFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSkill, setSelectedSkill] = useState<(typeof allSkills)[0] | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    // 全スキルデータを統合（skillsは配列）
    const allSkillsGrouped = useMemo(() => {
        const groupedSkills: { [jobName: string]: Skill[] } = {};

        // skillsは配列なので、originまたはjobidによってグループ化
        skills.forEach(skill => {
            const groupKey = skill.origin || 'other';
            if (!groupedSkills[groupKey]) {
                groupedSkills[groupKey] = [];
            }
            groupedSkills[groupKey].push(skill);
        });

        return groupedSkills;
    }, []);

    // 全スキルを平坦化（既にskillsが配列なのでそのまま使用）
    const allSkills = useMemo(() => {
        return skills.map(skill => ({
            ...skill,
            jobName: skill.origin || 'other'
        }));
    }, []);

    // フィルタリングされたスキル
    const filteredSkills = useMemo(() => {
        let filtered = allSkills;

        // 検索フィルター
        if (searchTerm) {
            filtered = filtered.filter(skill =>
                skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                skill.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                skill.descriptions.some(desc => desc.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // ジョブフィルター
        if (jobFilter !== 'all') {
            filtered = filtered.filter(skill => skill.jobName === jobFilter);
        }

        // カテゴリフィルター
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(skill => skill.category === categoryFilter);
        }

        return filtered;
    }, [allSkills, searchTerm, jobFilter, categoryFilter]);

    // ページネーション
    const totalPages = Math.ceil(filteredSkills.length / SKILLS_PER_PAGE);
    const startIndex = (currentPage - 1) * SKILLS_PER_PAGE;
    const paginatedSkills = filteredSkills.slice(startIndex, startIndex + SKILLS_PER_PAGE);

    const handleJobChange = (event: SelectChangeEvent) => {
        setJobFilter(event.target.value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategoryFilter(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleSkillClick = (skill: typeof allSkills[0]) => {
        setSelectedSkill(skill);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedSkill(null);
    };

    const handleExportJSON = () => {
        const exportData = flattenDataForExport(filteredSkills);
        exportToJSON(exportData, 'rohan-skills');
    };

    const handleExportCSV = () => {
        const exportData = flattenDataForExport(filteredSkills);
        exportToCSV(exportData, 'rohan-skills');
    };

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

    return (
        <Box>
            {/* 検索・フィルタリングエリア */}
            <Box sx={{ mb: 3 }}>
                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        placeholder="スキル名・説明で検索..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                        }}
                    />

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <FormControl size="small" sx={{ minWidth: 150 }}>
                            <InputLabel>職業</InputLabel>
                            <Select
                                value={jobFilter}
                                label="職業"
                                onChange={handleJobChange}
                            >
                                <MenuItem value="all">すべて</MenuItem>
                                {Object.keys(allSkillsGrouped).map((jobName) => (
                                    <MenuItem key={jobName} value={jobName}>
                                        {getJobDisplayName(jobName)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>カテゴリ</InputLabel>
                            <Select
                                value={categoryFilter}
                                label="カテゴリ"
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value="all">すべて</MenuItem>
                                <MenuItem value="Passive">パッシブ</MenuItem>
                                <MenuItem value="Buff">バフ</MenuItem>
                                <MenuItem value="Attack">アタック</MenuItem>
                                <MenuItem value="Other">その他</MenuItem>
                                <MenuItem value="Debuff">デバフ</MenuItem>
                            </Select>
                        </FormControl>

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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                            {filteredSkills.length} 件のスキルが見つかりました
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            {/* スキル一覧 */}
            <Stack spacing={2}>
                {paginatedSkills.map((skill, index) => (
                    <Card key={`${skill.jobName}-${skill.name}-${index}`}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 40, height: 40, objectFit: 'contain' }}
                                        image={skill.icon}
                                        alt={skill.name}
                                    />
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                                            {skill.displayName || skill.name}
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 1, mt: 0.5, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Chip
                                                    label={getJobDisplayName(skill.jobName)}
                                                    size="small"
                                                    color="primary"
                                                    variant="outlined"
                                                />
                                                <Chip
                                                    label={skill.category}
                                                    size="small"
                                                    color={getCategoryColor(skill.category) as any}
                                                    variant="outlined"
                                                />
                                            </Box>
                                            <Button
                                                size="small"
                                                variant="outlined"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSkillClick(skill);
                                                }}
                                            >
                                                詳細
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack spacing={2}>
                                    {skill.descriptions && skill.descriptions.length > 0 && (
                                        <Box>
                                            <Typography variant="subtitle2" gutterBottom>
                                                説明
                                            </Typography>
                                            {skill.descriptions.map((desc, i) => (
                                                <Typography key={i} variant="body2" color="text.secondary">
                                                    {desc}
                                                </Typography>
                                            ))}
                                        </Box>
                                    )}

                                    <Box>
                                        <Typography variant="subtitle2">
                                            レベル範囲: {skill.min} - {skill.max}
                                        </Typography>
                                    </Box>

                                    {skill.attributes && Object.keys(skill.attributes).length > 0 && (
                                        <Box>
                                            <Typography variant="subtitle2" gutterBottom>
                                                スキル効果
                                            </Typography>
                                            <Box sx={{ maxHeight: 200, overflow: 'auto' }}>
                                                {Object.entries(skill.attributes).slice(0, 5).map(([level, effects]) => (
                                                    <Typography key={level} variant="body2" color="text.secondary">
                                                        Lv.{level}: {Object.entries(effects).map(([key, value]) => `${key}: ${value}`).join(', ')}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </Box>
                                    )}
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                ))}
            </Stack>

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

            {/* スキル詳細モーダル */}
            <SkillDetailModal
                open={modalOpen}
                onClose={handleModalClose}
                skill={selectedSkill}
            />
        </Box>
    );
};

export default SkillDatabase;