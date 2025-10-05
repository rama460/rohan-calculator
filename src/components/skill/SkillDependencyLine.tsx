import React from 'react';
import { Box } from '@mui/material';

interface SkillDependencyLineProps {
    /** 依存関係の開始点（前提スキル）の座標 */
    fromPosition: {
        x: number;
        y: number;
    };
    /** 依存関係の終了点（対象スキル）の座標 */
    toPosition: {
        x: number;
        y: number;
    };
    /** 前提スキルが満たされているかどうか */
    isPrerequisiteMet: boolean;
    /** 対象スキルが習得されているかどうか */
    isTargetSkillLearned: boolean;
    /** 線の太さ（デフォルト: 2px） */
    strokeWidth?: number;
    /** 矢印のサイズ（デフォルト: 8px） */
    arrowSize?: number;
}

export const SkillDependencyLine: React.FC<SkillDependencyLineProps> = ({
    fromPosition,
    toPosition,
    isPrerequisiteMet,
    isTargetSkillLearned,
    strokeWidth = 2,
    arrowSize = 8
}) => {
    // 線の色と透明度を決定
    const getLineStyle = () => {
        if (isTargetSkillLearned && isPrerequisiteMet) {
            // 対象スキルが習得済みかつ前提満足：黒色、実線
            return {
                stroke: '#000000',
                opacity: 1,
                strokeDasharray: 'none',
                strokeWidth: strokeWidth
            };
        } else if (isPrerequisiteMet) {
            // 前提条件が満たされているが未習得：黒色、点線（習得可能状態）
            return {
                stroke: '#000000',
                opacity: 1,
                strokeDasharray: '4 4',
                strokeWidth: strokeWidth
            };
        } else {
            // 前提条件が満たされていない場合：薄い灰色、点線（習得不可状態）
            return {
                stroke: '#cccccc',
                opacity: 1,
                strokeDasharray: '4 4',
                strokeWidth: strokeWidth
            };
        }
    };

    // 矢印の方向を計算
    const calculateArrow = () => {
        const dx = toPosition.x - fromPosition.x;
        const dy = toPosition.y - fromPosition.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        if (length === 0) return null;

        // 正規化されたベクトル
        const unitX = dx / length;
        const unitY = dy / length;

        // 状態に応じて矢印サイズを調整
        let adjustedArrowSize = arrowSize;
        if (isTargetSkillLearned && isPrerequisiteMet) {
            adjustedArrowSize = arrowSize * 1.2; // 習得済みは大きく
        } else if (!isPrerequisiteMet) {
            adjustedArrowSize = arrowSize * 0.8; // 習得不可は小さく
        }

        // 矢印の頂点
        const arrowTipX = toPosition.x;
        const arrowTipY = toPosition.y;

        // 矢印の左右の点
        const perpX = -unitY;
        const perpY = unitX;

        const arrowLeft = {
            x: arrowTipX - unitX * adjustedArrowSize + perpX * (adjustedArrowSize / 2),
            y: arrowTipY - unitY * adjustedArrowSize + perpY * (adjustedArrowSize / 2)
        };

        const arrowRight = {
            x: arrowTipX - unitX * adjustedArrowSize - perpX * (adjustedArrowSize / 2),
            y: arrowTipY - unitY * adjustedArrowSize - perpY * (adjustedArrowSize / 2)
        };

        return {
            tip: { x: arrowTipX, y: arrowTipY },
            left: arrowLeft,
            right: arrowRight,
            size: adjustedArrowSize
        };
    };

    const lineStyle = getLineStyle();
    const arrow = calculateArrow();

    // SVGのviewBoxを計算（両端を含む最小の矩形）
    const minX = Math.min(fromPosition.x, toPosition.x) - arrowSize;
    const minY = Math.min(fromPosition.y, toPosition.y) - arrowSize;
    const maxX = Math.max(fromPosition.x, toPosition.x) + arrowSize;
    const maxY = Math.max(fromPosition.y, toPosition.y) + arrowSize;

    const width = maxX - minX;
    const height = maxY - minY;

    return (
        <Box
            sx={{
                position: 'absolute',
                left: minX,
                top: minY,
                width: width,
                height: height,
                pointerEvents: 'none',
                zIndex: 1
            }}
        >
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                style={{ overflow: 'visible' }}
            >
                {/* メイン線 */}
                <line
                    x1={fromPosition.x - minX}
                    y1={fromPosition.y - minY}
                    x2={toPosition.x - minX}
                    y2={toPosition.y - minY}
                    stroke={lineStyle.stroke}
                    strokeWidth={lineStyle.strokeWidth || strokeWidth}
                    opacity={lineStyle.opacity}
                    strokeDasharray={lineStyle.strokeDasharray}
                />

                {/* 矢印 */}
                {arrow && (
                    <polygon
                        points={`
                            ${arrow.tip.x - minX},${arrow.tip.y - minY}
                            ${arrow.left.x - minX},${arrow.left.y - minY}
                            ${arrow.right.x - minX},${arrow.right.y - minY}
                        `}
                        fill={lineStyle.stroke}
                        opacity={lineStyle.opacity}
                    />
                )}
            </svg>
        </Box>
    );
};