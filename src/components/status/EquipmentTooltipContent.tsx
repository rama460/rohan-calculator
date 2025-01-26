import { Box } from '@mui/material';
import { Item } from '../static/items.ts'
import { EquipmentTooltipContentRowProps, EquipmentTooltipContentRow } from "./EquipmentTooltipContentRow";
import React from 'react';

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
        ...currentItem.baseOptions.map((option) => ({
            name: option.displayName,
            value: option.value.toString(),
            color: option.displayColor,
        }))
    ]
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }} gap={1}>
            <div style={style}>
                {rows.map((row) => (
                    <EquipmentTooltipContentRow {...row} />
                ))}
            </div>
            {currentItem.synergisticOptions?.map((synergisticOption) => (
                <div style={style}>
                    <div style={synergisticCount >= synergisticOption.requiredCount ? enabledStyle : disabledStyle}>
                        {synergisticOption.requiredCount}セット：{synergisticOption.options.map((option) => (
                            <div>
                                {option.displayName}: {option.value}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Box>
    );
}
export default EquipmentTooltipContent; 