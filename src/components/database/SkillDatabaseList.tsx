import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardMedia,
    Chip,
    Stack,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    getCategoryColor,
    getJobDisplayName,
    getSkillEffectDisplayName,
    getSkillJobDisplayName,
    getSkillRaceDisplayName,
    SkillDatabaseSkill,
} from './skillDatabaseHelpers';

interface SkillDatabaseListProps {
    skills: SkillDatabaseSkill[];
    onSkillClick: (skill: SkillDatabaseSkill) => void;
}

export const SkillDatabaseList: React.FC<SkillDatabaseListProps> = ({ skills, onSkillClick }) => (
    <Stack spacing={2}>
        {skills.map((skill, index) => (
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
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        <Chip
                                            label={getJobDisplayName(skill.jobName)}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                        />
                                        {skill.categories.map((category) => (
                                            <Chip
                                                key={category}
                                                label={category}
                                                size="small"
                                                color={getCategoryColor(category)}
                                                variant="outlined"
                                            />
                                        ))}
                                        {skill.raceid !== undefined && (
                                            <Chip
                                                label={getSkillRaceDisplayName(skill)}
                                                size="small"
                                                color="secondary"
                                                variant="outlined"
                                                sx={{ fontSize: '0.7rem', height: 20 }}
                                            />
                                        )}
                                        {skill.jobid !== undefined && (
                                            <Chip
                                                label={getSkillJobDisplayName(skill)}
                                                size="small"
                                                color="info"
                                                variant="outlined"
                                                sx={{ fontSize: '0.7rem', height: 20 }}
                                            />
                                        )}
                                    </Box>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSkillClick(skill);
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

                            {(skill.raceid !== undefined || skill.jobid !== undefined) && (
                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>
                                        使用可能情報
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                        {skill.raceid !== undefined && (
                                            <Chip
                                                label={`種族: ${getSkillRaceDisplayName(skill)}`}
                                                size="small"
                                                color="secondary"
                                                variant="outlined"
                                            />
                                        )}
                                        {skill.jobid !== undefined && (
                                            <Chip
                                                label={`職業: ${getSkillJobDisplayName(skill)}`}
                                                size="small"
                                                color="info"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>
                                </Box>
                            )}

                            {skill.attributes && Object.keys(skill.attributes).length > 0 && (
                                <Box>
                                    <Typography variant="subtitle2" gutterBottom>
                                        スキル効果
                                    </Typography>
                                    <Box sx={{ maxHeight: 200, overflow: 'auto' }}>
                                        {Object.entries(skill.attributes).slice(0, 5).map(([level, effects]) => (
                                            <Typography key={level} variant="body2" color="text.secondary">
                                                Lv.{level}: {Object.entries(effects).map(([key, value]) =>
                                                    getSkillEffectDisplayName(key, value)
                                                ).join(', ')}
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
);
