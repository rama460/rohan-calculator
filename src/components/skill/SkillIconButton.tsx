import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Tooltip } from '@mui/material';
import { Skill } from '../../static/skills/skill';

interface SkillIconButtonProps {
    skill: Skill;
    skillLevel: number;
    onSkillLevelChange: (skillName: string, newLevel: number) => void;
    isPrerequisitesMet: boolean;
}

export const SkillIconButton: React.FC<SkillIconButtonProps> = ({
    skill,
    skillLevel,
    onSkillLevelChange,
    isPrerequisitesMet,
}) => {
    // tooltip表示状態を手動で制御
    const [tooltipOpen, setTooltipOpen] = useState(false);
    // 最大レベルはスキル固有のmaxを使用
    const actualMaxLevel = skill.max === 7 ? 5 : skill.max;

    // レベル変更ハンドラー
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSkillLevelChange(skill.name, parseInt(event.target.value) || 0);
    };

    // スキルの外観を決定
    const getSkillAppearance = () => {
        const isLearned = skillLevel > 0;

        if (!isPrerequisitesMet && !isLearned) {
            // 無効または前提条件未満足かつ未習得
            return {
                filter: 'grayscale(100%) brightness(0.4)',
                opacity: 0.5,
                border: '2px solid #ff4444'
            };
        } else if (!isLearned) {
            // 習得可能だが未習得
            return {
                filter: 'grayscale(50%) brightness(0.8)',
                opacity: 0.8,
                border: '2px solid #888888'
            };
        } else {
            // 習得済み
            return {
                filter: 'none',
                opacity: 1,
                border: '2px solid #1976d2'
            };
        }
    };

    // ツールチップのコンテンツを生成
    const generateTooltipContent = () => {
        const lines = [`${skill.displayName || skill.name}`];

        // スキルの説明を追加
        if (skill.descriptions && skill.descriptions.length > 0) {
            lines.push('', ...skill.descriptions.map((desc, index) => `Lv${index + 1}: ${desc}`));
        }

        if (!isPrerequisitesMet && skillLevel === 0) {
            lines.push('', '⚠️ 前提スキルが不足しています');
        }

        return lines.join('\n');
    };

    const appearance = getSkillAppearance();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                width: 160,
                height: 140,
            }}
        >
            {/* スキルアイコン */}
            <Tooltip
                title={
                    <Typography
                        component="pre"
                        variant="body2"
                        sx={{ whiteSpace: 'pre-line', fontFamily: 'monospace' }}
                    >
                        {generateTooltipContent()}
                    </Typography>
                }
                arrow
                placement="top"
                open={tooltipOpen}
                disableHoverListener={true}
                disableTouchListener={true}
                disableInteractive={true}
                PopperProps={{
                    modifiers: [
                        {
                            name: 'flip',
                            enabled: false,
                        },
                        {
                            name: 'preventOverflow',
                            options: {
                                enabled: false,
                            },
                        },
                    ],
                }}
            >
                <Box
                    sx={{
                        display: 'inline-block',
                        position: 'relative',
                        width: 32,
                        height: 32
                    }}
                    onMouseEnter={(e) => {
                        // 32x32pxのアイコン領域内かどうかを厳密にチェック
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        if (x >= 0 && x <= 32 && y >= 0 && y <= 32) {
                            setTooltipOpen(true);
                        }
                    }}
                    onMouseMove={(e) => {
                        // マウス移動中も32x32px領域内かチェック
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        if (x < 0 || x > 32 || y < 0 || y > 32) {
                            setTooltipOpen(false);
                        } else if (!tooltipOpen) {
                            setTooltipOpen(true);
                        }
                    }}
                    onMouseLeave={() => {
                        // アイコンから離れたら即座にtooltipを非表示
                        setTooltipOpen(false);
                    }}
                >
                    <IconButton
                        sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '0px',
                            padding: 0,
                            backgroundImage: `url(${skill.icon})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            ...appearance,

                            '&:disabled': {
                                opacity: 0.3,
                                cursor: 'not-allowed'
                            }
                        }}
                        disabled={!isPrerequisitesMet && skillLevel === 0}
                        onClick={() => {
                            // 無効状態でなければクリックを処理
                            if (isPrerequisitesMet || skillLevel > 0) {
                                const newLevel = skillLevel < actualMaxLevel ? skillLevel + 1 : actualMaxLevel;
                                onSkillLevelChange(skill.name, newLevel);
                            }
                        }}
                    >
                    </IconButton>
                </Box>
            </Tooltip>

            {/* レベル入力フィールド */}
            <TextField
                size="small"
                type="number"
                value={skillLevel}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    // 無効状態でなければ変更を処理
                    if (isPrerequisitesMet || skillLevel > 0) {
                        handleLevelChange(event);
                    }
                }}
                inputProps={{
                    min: 0,
                    max: actualMaxLevel,
                    style: { textAlign: 'center' }
                }}
                sx={{
                    width: 50,
                    '& .MuiInputBase-input': {
                        fontSize: '0.8rem',
                        padding: '4px 8px',
                    },
                    '& .MuiInputBase-input:disabled': {
                        // disabledでもポインターイベントを有効にしてtooltipが表示されるように
                        pointerEvents: 'auto',
                        WebkitTextFillColor: 'rgba(0, 0, 0, 0.38)'
                    }
                }}
                disabled={(!isPrerequisitesMet && skillLevel === 0)}
            />

            {/* スキル名 */}
            <Typography
                variant="caption"
                sx={{
                    textAlign: 'center',
                    fontSize: '0.7rem',
                    lineHeight: 1,
                    height: '2.2em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    opacity: 1
                }}
            >
                {skill.displayName || skill.name}
            </Typography>
        </Box>
    );
};