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
    ButtonGroup
} from '@mui/material';
import { SkillCategory, skills, Skill } from '../../static/skills/skill';
import { races } from '../../static/races';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import { SkillDetailModal } from './SkillDetailModal';
import { exportToJSON, exportToCSV, flattenDataForExport } from './exportUtils';
import { SkillDatabaseList } from './SkillDatabaseList';
import {
    getAvailableJobIds,
    getJobById,
    getJobDisplayName,
    SkillDatabaseSkill,
} from './skillDatabaseHelpers';

const SKILLS_PER_PAGE = 20;

export const SkillDatabase: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobFilter, setJobFilter] = useState('all'); // タイプフィルタ（既存のorigin基準）
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [raceFilter, setRaceFilter] = useState('all'); // 種族フィルタ（raceid基準）
    const [professionFilter, setProfessionFilter] = useState('all'); // 職業フィルタ（jobid基準）
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedSkill, setSelectedSkill] = useState<SkillDatabaseSkill | null>(null);
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

    // 利用可能な職業リスト
    const availableJobs = useMemo(() => {
        return getAvailableJobIds(raceFilter);
    }, [raceFilter]);

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

        // タイプフィルター（既存のjobFilter、originベース）
        if (jobFilter !== 'all') {
            filtered = filtered.filter(skill => skill.jobName === jobFilter);
        }

        // カテゴリフィルター
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(skill => skill.categories.includes(categoryFilter as SkillCategory));
        }

        // 種族フィルター（raceidベース）
        if (raceFilter !== 'all') {
            const raceId = parseInt(raceFilter);
            filtered = filtered.filter(skill => skill.raceid === raceId);
        }

        // 職業フィルター（jobidベース）
        if (professionFilter !== 'all') {
            const jobId = parseInt(professionFilter);
            filtered = filtered.filter(skill => skill.jobid === jobId);
        }

        return filtered;
    }, [allSkills, searchTerm, jobFilter, categoryFilter, raceFilter, professionFilter]);

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

    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceFilter(event.target.value);
        setProfessionFilter('all'); // 種族変更時は職業フィルターをリセット
        setCurrentPage(1);
    };

    const handleProfessionChange = (event: SelectChangeEvent) => {
        setProfessionFilter(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const handleSkillClick = (skill: SkillDatabaseSkill) => {
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
                            <InputLabel>タイプ</InputLabel>
                            <Select
                                value={jobFilter}
                                label="タイプ"
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

                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>種族</InputLabel>
                            <Select
                                value={raceFilter}
                                label="種族"
                                onChange={handleRaceChange}
                            >
                                <MenuItem value="all">すべて</MenuItem>
                                {races.map((race) => (
                                    <MenuItem key={race.id} value={race.id.toString()}>
                                        {race.displayName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>職業</InputLabel>
                            <Select
                                value={professionFilter}
                                label="職業"
                                onChange={handleProfessionChange}
                            >
                                <MenuItem value="all">すべて</MenuItem>
                                {availableJobs.map((jobId) => {
                                    // 現在選択されている種族での職業名を取得
                                    const raceId = raceFilter === 'all' ? undefined : parseInt(raceFilter);
                                    const job = getJobById(jobId, raceId);
                                    if (!job) return null;

                                    return (
                                        <MenuItem key={jobId} value={jobId.toString()}>
                                            {job.displayName}
                                        </MenuItem>
                                    );
                                }).filter(Boolean)}
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

            <SkillDatabaseList skills={paginatedSkills} onSkillClick={handleSkillClick} />

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
