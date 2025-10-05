import React from 'react';
import {
    Box,
    Typography,
    Chip,
    Stack,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Card,
    CardContent
} from '@mui/material';
import { useAtom } from 'jotai';
import { baseOptionStateFamily } from '../../modules/state/bases';
import {
    primaryJobSkillLevelsWithDefaultsAtom,
    secondaryJobSkillLevelsWithDefaultsAtom,
    skillJobIdAtom,
    usedSkillPointsAtom
} from '../../modules/state/skillLevels';
import { races } from '../../static/races';
import { skills } from '../../static/skills/skill';
import { FullSkillTree } from './FullSkillTree';
import { getInitialSkillLevelsForJob, sampleSkillTreeLayouts } from './skillTreeData';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { PageContainer } from '../common/PageContainer';


export const Skill: React.FC = () => {

    const [raceid, setRaceid] = useAtom(baseOptionStateFamily("raceid"));
    // Skill画面専用のjobidを使用
    const [jobid, setJobid] = useAtom(skillJobIdAtom);
    const [characterLevel, setCharacterLevel] = useAtom(baseOptionStateFamily("level"));
    // レベルに基づくスキルポイント計算（level - 1、最低0ポイント）
    const availableSkillPoints = Math.max((characterLevel || 1) - 1, 0);

    // 現在選択されている種族・職業の情報を取得
    const currentRace = races.find(r => r.id === raceid) || races[0];
    const currentPrimaryJob = currentRace.jobs[0];
    const currentSecondaryJob = currentRace.jobs.find(j => j.id !== 0 && j.id === jobid);

    // Skill levels using atoms with hash storage
    const [primaryJobSkillLevels, setPrimaryJobSkillLevels] = useAtom(primaryJobSkillLevelsWithDefaultsAtom);
    const [secondaryJobSkillLevels, setSecondaryJobSkillLevels] = useAtom(secondaryJobSkillLevelsWithDefaultsAtom);
    const [usedSkillPoints] = useAtom(usedSkillPointsAtom);

    // 現在の種族のスキル一覧を取得
    const availableSkills = skills.filter(skill =>
        skill.raceid === raceid || skill.raceid === -1
    );

    const remainingSkillPoints = availableSkillPoints - usedSkillPoints;

    // スキル設定関数（スキルポイント制限付き + 前提条件チェック）
    const setSkill = (skillName: string, level: number) => {

        if (primaryJobSkillLevels.hasOwnProperty(skillName)) {
            const currentLevel = primaryJobSkillLevels[skillName];
            const delta = level - currentLevel;
            if (delta > 0 && remainingSkillPoints < delta) {
                // スキルポイント不足
                return;
            }
            setPrimaryJobSkillLevels({ ...primaryJobSkillLevels, [skillName]: level });
        }
        else if (secondaryJobSkillLevels.hasOwnProperty(skillName)) {
            const currentLevel = secondaryJobSkillLevels[skillName];
            const delta = level - currentLevel;
            if (delta > 0 && remainingSkillPoints < delta) {
                // スキルポイント不足
                return;
            }
            setSecondaryJobSkillLevels({ ...secondaryJobSkillLevels, [skillName]: level });
        }
    };

    // スキルリセット機能
    const handleResetAllSkills = () => {
        setPrimaryJobSkillLevels(getInitialSkillLevelsForJob(currentPrimaryJob));
        setSecondaryJobSkillLevels(getInitialSkillLevelsForJob(currentSecondaryJob));
    };

    // 種族変更ハンドラー
    const handleRaceChange = (event: any) => {
        setRaceid(event.target.value);
        setJobid(1); // 種族変更時に職業をリセット（0または適切なデフォルト値）
        const race = races.find(r => r.id === event.target.value);
        setPrimaryJobSkillLevels(getInitialSkillLevelsForJob(race?.jobs[0]));
        setSecondaryJobSkillLevels(getInitialSkillLevelsForJob(race?.jobs[1]));
    };

    // 職業変更ハンドラー
    const handleJobChange = (event: any) => {
        setJobid(event.target.value);
        const secondaryJob = currentRace?.jobs.find(j => j.id !== 0 && j.id === event.target.value);
        setSecondaryJobSkillLevels(getInitialSkillLevelsForJob(secondaryJob));
    };

    // レベル変更ハンドラー
    const handleLevelChange = (event: any) => {
        const newLevel = parseInt(event.target.value) || 1;
        setCharacterLevel(Math.max(1, Math.min(newLevel, 115))); // 1-115の範囲に制限
    };

    return (
        <PageContainer
            title="スキルツリー"
            icon={<AutoFixHighIcon sx={{ fontSize: 32 }} />}
        >
            <Card>
                <CardContent>

                    {/* キャラクター設定 & スキルポイント情報 */}
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                                <Typography variant="h6">
                                    キャラクター設定 & スキルポイント情報
                                </Typography>
                                {usedSkillPoints > 0 && (
                                    <Button
                                        variant="outlined"
                                        color="warning"
                                        onClick={handleResetAllSkills}
                                        size="small"
                                    >
                                        スキルリセット
                                    </Button>
                                )}
                            </Box>

                            {/* キャラクター設定 */}
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                    基本情報
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" sx={{ gap: 2 }}>
                                    <FormControl size="small" sx={{ minWidth: 120 }}>
                                        <InputLabel>種族</InputLabel>
                                        <Select
                                            value={raceid}
                                            label="種族"
                                            onChange={handleRaceChange}
                                        >
                                            {races.map((race) => (
                                                <MenuItem key={race.id} value={race.id}>
                                                    {race.displayName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    {currentRace && (
                                        <FormControl size="small" sx={{ minWidth: 120 }}>
                                            <InputLabel>職業</InputLabel>
                                            <Select
                                                value={characterLevel! < 50 ? "-1" : jobid}
                                                label="職業"
                                                onChange={handleJobChange}
                                                disabled={characterLevel! < 50 || currentRace.jobs.length < 2}
                                                displayEmpty
                                            >
                                                {characterLevel! < 50 && (
                                                    <MenuItem value="-1" disabled>
                                                        未選択
                                                    </MenuItem>
                                                )}
                                                {currentRace.jobs.filter(job => job.id !== 0).map((job) => (
                                                    <MenuItem key={job.id} value={job.id}>
                                                        {job.displayName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}

                                    <TextField
                                        size="small"
                                        label="レベル"
                                        type="number"
                                        value={characterLevel || 1}
                                        onChange={handleLevelChange}
                                        inputProps={{ min: 1, max: 150 }}
                                        sx={{ width: 100 }}
                                    />
                                </Stack>
                            </Box>

                            {/* スキルポイント情報 */}
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                    スキルポイント
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" sx={{ gap: 1 }}>
                                    <Chip
                                        icon={<TrendingUpIcon />}
                                        label={`使用済み: ${usedSkillPoints} pt`}
                                        color="info"
                                        size="small"
                                    />
                                    <Chip
                                        label={`利用可能: ${availableSkillPoints} pt`}
                                        color="default"
                                        size="small"
                                    />
                                    <Chip
                                        label={`残り: ${remainingSkillPoints} pt`}
                                        color={usedSkillPoints > availableSkillPoints ? 'error' : 'success'}
                                        size="small"
                                    />
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* スキルツリー表示 */}
                    <Card>
                        <CardContent>
                            <FullSkillTree
                                characterLevel={characterLevel || 1}
                                primaryJob={currentPrimaryJob}
                                secondaryJob={currentSecondaryJob}
                                allSkills={availableSkills}
                                skillTreeLayouts={sampleSkillTreeLayouts}
                                onSkillChange={setSkill}
                                primaryJobSkillLevels={primaryJobSkillLevels}
                                secondaryJobSkillLevels={secondaryJobSkillLevels}
                            />
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </PageContainer>
    );
};

export default Skill;
