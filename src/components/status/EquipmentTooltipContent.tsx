import { Box } from '@mui/material';
import { Item } from '../static/items.ts'
import { EquipmentTooltipContentRowProps, EquipmentTooltipContentRow } from "./EquipmentTooltipContentRow";
import React from 'react';
import { BuiltinOptionKeyType, BuiltinOptions } from '../static/options.ts';
import { races } from '../static/races.ts';

interface EquipmentTooltipContentProps {
    currentItem: Item
    synergyCount: number
    title: string
}

export const EquipmentTooltipContent: React.FC<EquipmentTooltipContentProps> = ({ currentItem, synergyCount, title }) => {
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
            value: currentItem.enchantLevel === 0 ? currentItem.name : `${currentItem.name} +${currentItem.enchantLevel}`,
            color: "red",
        },
        {
            value: title,
            color: "white",
        },
        {
            name: "可能種族",
            value: currentItem.availableRaces?.map((r) => races.find((rr) => rr.name === r)?.abbrev).join(", ") ?? "ALL",
            color: "white",
        },
        ...Object.entries(currentItem.baseOptions).map(([key, value]) => ({
            name: BuiltinOptions[key as BuiltinOptionKeyType].displayName,
            value: value.toString(),
            color: BuiltinOptions[key as BuiltinOptionKeyType].displayColor,
            operationType: BuiltinOptions[key as BuiltinOptionKeyType].operationType,
        })),
        ...Object.entries(currentItem.additionalOptions).filter(([key, _]) => (key !== "none")).map(([key, value]) => ({
            name: BuiltinOptions[key as BuiltinOptionKeyType].displayName,
            value: value.toString(),
            color: BuiltinOptions[key as BuiltinOptionKeyType].displayColor,
            operationType: BuiltinOptions[key as BuiltinOptionKeyType].operationType,
        })),
        ...Object.entries(currentItem.craftedOptions).filter(([key, _]) => (key !== "none")).map(([key, value]) => ({
            name: BuiltinOptions[key as BuiltinOptionKeyType].displayName,
            value: value.toString(),
            color: "purple",
            operationType: BuiltinOptions[key as BuiltinOptionKeyType].operationType,
        })),
    ]
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }} gap={1}>
            <div style={style}>
                {rows.map((row, index) => (
                    <EquipmentTooltipContentRow key={index} {...row} />
                ))}
            </div>
            {currentItem.synergyOptions && Object.entries(currentItem.synergyOptions).map(([requiredCount, options]) => (
                <div style={style}>
                    <div style={synergyCount >= Number(requiredCount) ? enabledStyle : disabledStyle}>
                        {requiredCount}セット：{Object.entries(options).map(([key, value], index) => (
                            <EquipmentTooltipContentRow key={index} name={BuiltinOptions[key as BuiltinOptionKeyType].displayName} value={value.toString()} color={BuiltinOptions[key as BuiltinOptionKeyType].displayColor} operationType={BuiltinOptions[key as BuiltinOptionKeyType].operationType} />
                        ))}
                    </div>
                </div>
            ))}
        </Box>
    );
}
export default EquipmentTooltipContent; 