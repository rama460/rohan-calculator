import React from 'react';
import { Box } from '@mui/material';
import { SkillTreeGrid } from './SkillTreeGrid';
import { Skill } from '../../static/skills/skill';
import { Job } from '../../static/races';
import { SkillTreeLayout } from './skillTreeData';


interface FullSkillTreeProps {
    // キャラクター情報
    characterLevel: number;
    primaryJob: Job;
    secondaryJob?: Job;

    // スキル情報
    allSkills: Skill[];
    skillTreeLayouts: SkillTreeLayout[];

    // スキルツリーの状態
    primaryJobSkillLevels: { [skillName: string]: number };
    secondaryJobSkillLevels: { [skillName: string]: number };

    // ハンドラー
    onSkillChange: (skillName: string, level: number) => void;
}

export const FullSkillTree: React.FC<FullSkillTreeProps> = ({
    primaryJob,
    secondaryJob,
    allSkills,
    skillTreeLayouts,
    onSkillChange,
    primaryJobSkillLevels,
    secondaryJobSkillLevels,
}) => {

    // 各職業のスキルツリーレイアウトを取得
    const primarySkillTree = skillTreeLayouts.find(layout => layout.name === primaryJob.name) || { skillPositions: [], skillConnections: [] };
    const secondarySkillTree = secondaryJob ? skillTreeLayouts.find(layout => layout.name === secondaryJob.name) : null;
    return (
        <Box sx={{ width: '100%' }}>

            {/* スキルツリー表示 */}
            <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 2
            }}>
                <Box
                    sx={{
                        minHeight: '760px', // 7行 × 90px + gaps
                    }}
                >
                    <SkillTreeGrid
                        skillPositions={primarySkillTree.skillPositions}
                        skillConnections={primarySkillTree.skillConnections}
                        availableSkills={allSkills.filter(skill => skill.jobid === primaryJob.id)}
                        skillLevels={primaryJobSkillLevels}
                        onSkillChange={onSkillChange}
                        minColumns={3}
                        jobName={primaryJob.displayName}
                    />
                </Box>
                {secondaryJob && secondarySkillTree && (
                    <Box
                        sx={{
                            minHeight: '760px',
                        }}
                    >
                        <SkillTreeGrid
                            skillPositions={secondarySkillTree.skillPositions}
                            skillConnections={secondarySkillTree.skillConnections}
                            availableSkills={allSkills.filter(skill => skill.jobid === secondaryJob.id || skill.jobid === -1)}
                            skillLevels={secondaryJobSkillLevels}
                            onSkillChange={onSkillChange}
                            minColumns={4}
                            jobName={secondaryJob.displayName}
                        />
                    </Box>
                )}
            </Box>


        </Box>
    );
};