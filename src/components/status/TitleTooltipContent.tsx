import { Box } from '@mui/material';
import React from 'react';
import { BuiltinOptionKeyType, BuiltinOptions } from '../static/options.ts';
import { titles } from '../static/titles.ts';
import EquipmentTooltipContentRow from './EquipmentTooltipContentRow.tsx';

interface TitleTooltipContentProps {
    title: string
}

export const TitleTooltipContent: React.FC<TitleTooltipContentProps> = ({ title }) => {
    const style: React.CSSProperties = {
        opacity: 0.8,
        backgroundColor: "black",
        border: "solid",
        width: "max-content",
        color: "white",
        textAlign: "center",
    }
    const tilteOptions = titles.filter((t) => t.name === title)[0];
    return (
        <Box sx={{ display: "flex", flexDirection: "row" }} gap={1}>
            <div style={style}>
                {titles.filter((t) => t.name === title)[0].displayName}
                <br />
                {...Object.entries(tilteOptions.options).map(([name, value]) => (
                    <EquipmentTooltipContentRow name={BuiltinOptions[name as BuiltinOptionKeyType].displayName} value={value.toString()} color={BuiltinOptions[name as BuiltinOptionKeyType].displayColor} operationType={BuiltinOptions[name as BuiltinOptionKeyType].operationType} />
                ))}
            </div>
        </Box>
    );
}
export default TitleTooltipContent; 