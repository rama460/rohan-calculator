import React from "react";
import IconButton from "../common/IconButton";
import Tooltip from "../common/Tooltip";
import BuffTooltipContent from "./BuffTooltipContent";
import { Box, Checkbox, TextField } from "@mui/material";

interface BuffIconButtonProps {
    name: string;
    icon: string;
    descriptions: string[];
    min: number;
    max: number;
}


export const BuffIconButton: React.FC<BuffIconButtonProps> = ({ name, icon, descriptions, min, max }) => {
    const [checked, setChecked] = React.useState(true);
    const [level, setLevel] = React.useState(7);
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(event.target.value));
    }
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Checkbox size="small" checked={checked} onChange={() => { setChecked(!checked) }} />
            <Tooltip content={<BuffTooltipContent name={name} descriptions={descriptions} level={level} />} >
                <IconButton backgroundImage={icon} onClick={() => { setChecked(!checked) }} />
            </Tooltip>
            <TextField
                type="number"
                size="small"
                defaultValue={max}
                onChange={handleLevelChange}
                sx={{
                    width: "50px",
                }}
                slotProps={{ htmlInput: { min: min, max: max } }}
                inputProps={{ style: { height: "5px" } }}
            />

        </Box>
    );
}

export default BuffIconButton;