import React from 'react';
import { Box, useTheme } from '@mui/material';
import { SkillIconButton } from './SkillIconButton';
import { Skill } from '../../static/skills/skill';
import { checkPrerequisites, SkillConnection, SkillPosition } from './skillTreeData';
import { SkillDependencyLine } from './SkillDependencyLine';

interface SkillTreeGridProps {
    skillPositions: SkillPosition[];
    skillConnections: SkillConnection[];
    availableSkills: Skill[];
    skillLevels: { [skillName: string]: number };
    onSkillChange: (skillName: string, level: number) => void;
    minColumns?: number;
}

export const SkillTreeGrid: React.FC<SkillTreeGridProps> = ({
    skillPositions,
    skillConnections,
    availableSkills,
    skillLevels,
    onSkillChange,
    minColumns = 3,
}) => {
    const theme = useTheme();

    // スキルツリーグリッド作成 (7行構成：最小列数を指定可能)
    const createSkillGrid = (positions: SkillPosition[]) => {
        const maxRows = 7;
        const grid: (SkillPosition | undefined)[][] = [];

        // グリッド初期化
        for (let row = 0; row < maxRows; row++) {
            grid[row] = Array(Math.max(positions.filter(pos => pos.row === row).length, minColumns)).fill(undefined);
        }

        // レイアウト情報をグリッドに配置
        positions.forEach(pos => {
            if (pos.row < maxRows && pos.col < grid[pos.row].length) {
                grid[pos.row][pos.col] = pos;
            }
        });

        return grid;
    };

    // 接続線描画用の座標計算
    const getSkillGridPosition = (skillName: string) => {
        const position = skillPositions.find(pos => pos.skillName === skillName);
        if (!position) {
            console.warn(`Skill position not found for skill: ${skillName}`);
            return { x: 0, y: 0 };
        }
        // レイアウト値の定義
        const gridCellSizeX = 480 / grid[position.row].length; // CSS gridTemplateColumns の値
        const gridCellSizeY = 140; // グリッドセルのサイズ（px）
        const gap = 0; // theme.spacing(3) = 24px
        const padding = 0; // theme.spacing(2) = 16px

        // 行ごとの列数とコンテナ幅
        const rowMaxCols = grid[position.row].length;
        const containerWidth = rowMaxCols * gridCellSizeX + 3 * gap; // 最大幅（1行目基準）
        const rowWidth = rowMaxCols * gridCellSizeX + (rowMaxCols - 1) * gap;

        // 行の中央揃えオフセット
        const rowCenterOffset = (containerWidth - rowWidth) / 2;

        // グリッドセルの左上座標
        const cellX = padding + rowCenterOffset + position.col * (gridCellSizeX + gap);
        const cellY = padding + position.row * (gridCellSizeY + gap);

        // セル内でのアイコンの中央座標（グリッドセル90pxの中に80pxアイコンが中央配置）
        const iconCenterOffsetX = (gridCellSizeX) / 2;
        const iconCenterOffsetY = (gridCellSizeY) / 2;

        const x = cellX + iconCenterOffsetX;
        const y = cellY + iconCenterOffsetY;
        console.log(`Skill: ${skillName}, Grid Position: (${position.row}, ${position.col}), Coordinates: (${x}, ${y})`);
        return { x, y };
    };
    const getDependencyLineStart = (startSkillName: string, endSkillName: string) => {
        const { x: startX, y: startY } = getSkillGridPosition(startSkillName);
        const { x: endX, y: endY } = getSkillGridPosition(endSkillName);
        if (startY === endY) {
            if (endX > startX) {
                return { x: startX + 40, y: startY - 45 }; // アイコン右端少し手前でスタート
            } else {
                return { x: startX - 40, y: startY - 45 }; // アイコン左端少し手前でスタート
            }
        } else {
            return { x: startX, y: startY + 30 }; // アイコン下端からスタート
        }
    }
    const getDependencyLineEnd = (startSkillName: string, endSkillName: string) => {
        const { x: endX, y: endY } = getSkillGridPosition(endSkillName);
        const { x: startX, y: startY } = getSkillGridPosition(startSkillName);
        console.log(endSkillName, startSkillName, endX, startX, endY, startY)
        if (endX === startX) {
            return { x: endX, y: endY - 75 }; // アイコン上端で終了
        } else if (endX > startX) {
            return { x: endX - 40, y: endY - 45 }; // アイコン左端少し手前で終了
        } else {
            return { x: endX + 40, y: endY - 45 }; // アイコン右端少し手前で終了
        }
    }

    const grid = createSkillGrid(skillPositions);
    return (
        <Box
            sx={{
                minHeight: '760px', // 7行 × 90px + gaps
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`
            }}
        >

            <Box
                data-skill-tree-container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    margin: 2,
                }}>
                {/* スキルアイコンの行別配置 */}
                {grid.map((row, rowIndex) => {
                    return (
                        <Box
                            key={`row-${rowIndex}`}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: `repeat(${row.length}, ${480 / row.length}px)`,
                                justifyContent: 'center',
                                width: '100%'
                            }}
                        >
                            {row?.map((cell, colIndex) => {
                                const gridKey = `${rowIndex}-${colIndex}`;
                                if (cell) {
                                    const skill = availableSkills.find(s => s.name === cell.skillName);
                                    const skillLevel = skillLevels[cell.skillName] || 0;
                                    if (skill) {
                                        const isPrerequisitesMet = checkPrerequisites(skill.name, skillLevels, skillPositions, skillConnections);

                                        return (
                                            <Box justifyContent={'center'} alignItems={'center'} display={'flex'} key={gridKey} >
                                                <SkillIconButton
                                                    key={gridKey}
                                                    skill={skill}
                                                    skillLevel={skillLevel}
                                                    onSkillLevelChange={(skillName: string, newLevel: number) => {
                                                        onSkillChange(skillName, newLevel);
                                                    }}
                                                    isPrerequisitesMet={isPrerequisitesMet}
                                                />
                                            </Box>
                                        );
                                    }
                                } else {
                                    return <Box key={gridKey} sx={{ width: 80, height: 80 }} />; // 空セル
                                }

                            })}
                        </Box>
                    );
                })}

                {/* スキルツリーの接続線 */}
                {skillConnections.map((connection, index) => {
                    const fromPos = getDependencyLineStart(connection.from, connection.to);
                    const toPos = getDependencyLineEnd(connection.from, connection.to);

                    if (!fromPos || !toPos) return null;

                    // 前提スキルのレベル確認
                    const prerequisiteLevel = skillLevels[connection.from] || 0;
                    const isPrerequisiteMet = prerequisiteLevel > 0;

                    // 対象スキルが習得されているか確認
                    const targetLevel = skillLevels[connection.to] || 0;
                    const isTargetSkillLearned = targetLevel > 0;

                    return (
                        <SkillDependencyLine
                            key={`connection-${index}-${connection.from}-${connection.to}`}
                            fromPosition={fromPos}
                            toPosition={toPos}
                            isPrerequisiteMet={isPrerequisiteMet}
                            isTargetSkillLearned={isTargetSkillLearned}
                        />
                    );
                })}
            </Box>
        </Box>

    );
};

export default SkillTreeGrid;