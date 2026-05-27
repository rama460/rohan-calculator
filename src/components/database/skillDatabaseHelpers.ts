import { ChipProps } from '@mui/material';

import { BuiltinOptions, getDisplayOptionName } from '../../static/options';
import { races } from '../../static/races';
import { Skill } from '../../static/skills/skill';

export type SkillDatabaseSkill = Skill & {
    jobName: string;
};

export const getRaceById = (raceId?: number) => {
    if (raceId === undefined) return null;
    return races.find(race => race.id === raceId) ?? null;
};

export const getJobById = (jobId?: number, raceId?: number) => {
    if (jobId === undefined) return null;
    const race = getRaceById(raceId);
    if (!race) return null;
    return race.jobs.find(job => job.id === jobId) ?? null;
};

export const getAvailableJobIds = (selectedRaceFilter: string) => {
    if (selectedRaceFilter === 'all') {
        const allJobIds = new Set<number>();
        races.forEach(race => {
            race.jobs.forEach(job => {
                allJobIds.add(job.id);
            });
        });
        return Array.from(allJobIds);
    }

    const raceId = parseInt(selectedRaceFilter);
    const race = getRaceById(raceId);
    return race ? race.jobs.map(job => job.id) : [];
};

export const getJobDisplayName = (jobName: string) => {
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
        guild: 'ギルド',
    };
    return jobMap[jobName] || jobName;
};

export const getCategoryColor = (category: string): ChipProps['color'] => {
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

export const getSkillRaceDisplayName = (skill: SkillDatabaseSkill) => {
    const race = getRaceById(skill.raceid);
    return race ? race.displayName : '不明';
};

export const getSkillJobDisplayName = (skill: SkillDatabaseSkill) => {
    const job = getJobById(skill.jobid, skill.raceid);
    return job ? job.displayName : '不明';
};

export const getSkillEffectDisplayName = (key: string, value: number) => {
    const option = BuiltinOptions[key as keyof typeof BuiltinOptions];
    if (option) {
        const displayName = getDisplayOptionName(option);
        return `${displayName}: ${value}`;
    }
    return `${key}: ${value}`;
};
