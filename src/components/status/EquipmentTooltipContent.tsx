import { Box } from '@mui/material';
import { Item } from '../static/items.ts'
import { EquipmentTooltipContentRowProps, EquipmentTooltipContentRow } from "./EquipmentTooltipContentRow";
import React from 'react';
import { BuiltinOptionKeyType, BuiltinOptions } from '../static/options.ts';

interface EquipmentTooltipContentProps {
    currentItem: Item
    synergyCount: number
    title: string
    availableRaces?: string[]
}

export const EquipmentTooltipContent: React.FC<EquipmentTooltipContentProps> = ({ currentItem, synergyCount, title, availableRaces }) => {
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
            value: title,
            color: "white",
        },
        {
            name: "可能種族",
            value: availableRaces?.join(", ") ?? "ALL",
            color: "white",
        },
        ...Object.entries(currentItem.baseOptions).map(([key, value]) => ({
            name: BuiltinOptions[key as BuiltinOptionKeyType].displayName,
            value: value.toString(),
            color: BuiltinOptions[key as BuiltinOptionKeyType].displayColor,
        }))
    ]
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }} gap={1}>
            <div style={style}>
                {rows.map((row) => (
                    <EquipmentTooltipContentRow {...row} />
                ))}
            </div>
            {currentItem.synergyOptions && Object.entries(currentItem.synergyOptions).map(([requiredCount, options]) => (
                <div style={style}>
                    <div style={synergyCount >= Number(requiredCount) ? enabledStyle : disabledStyle}>
                        {requiredCount}セット：{Object.entries(options).map(([key, value]) => (
                            <div>
                                {BuiltinOptions[key as BuiltinOptionKeyType].displayName}: {value}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Box>
    );
}
export default EquipmentTooltipContent; 