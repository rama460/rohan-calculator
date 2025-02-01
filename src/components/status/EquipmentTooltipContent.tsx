import { Box } from '@mui/material';
import { Item } from '../static/items.ts'
import { EquipmentTooltipContentRowProps, EquipmentTooltipContentRow } from "./EquipmentTooltipContentRow";
import React from 'react';
import { BuiltinOptions } from '../static/options.ts';

interface EquipmentTooltipContentProps {
    currentItem: Item
    synergisticCount: number
    equipmentType: string
    availableRaces?: string[]
}

export const EquipmentTooltipContent: React.FC<EquipmentTooltipContentProps> = ({ currentItem, synergisticCount, equipmentType, availableRaces }) => {
    const style = {
        opacity: 0.8,
        backgroundColor: "black",
        border: "solid",
        width: "max-content",
    }
    const disabledStyle: React.CSSProperties = {
        color: "gray",
    }
    const enabledStyle = {
        color: "white",
    }
    const rows: EquipmentTooltipContentRowProps[] = [
        {
            value: currentItem.name,
            color: "red",
        },
        {
            value: equipmentType,
            color: "white",
        },
        {
            name: "可能種族",
            value: availableRaces?.join(", ") ?? "ALL",
            color: "white",
        },
        ...Object.entries(currentItem.baseOptions).map(([key, value]) => ({
            name: BuiltinOptions[key].displayName,
            value: value.toString(),
            color: BuiltinOptions[key].displayColor,
        }))
    ]
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }} gap={1}>
            <div style={style}>
                {rows.map((row) => (
                    <EquipmentTooltipContentRow {...row} />
                ))}
            </div>
            {currentItem.synergisticOptions && Object.entries(currentItem.synergisticOptions).map(([requiredCount, options]) => (
                <div style={style}>
                    <div style={synergisticCount >= Number(requiredCount) ? enabledStyle : disabledStyle}>
                        {requiredCount}セット：{Object.entries(options).map(([key, value]) => (
                            <div>
                                {BuiltinOptions[key].displayName}: {value}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Box>
    );
}
export default EquipmentTooltipContent; 