import React from "react";
import IconButton from "../common/IconButton";
import Tooltip from "../common/Tooltip";
import BuffTooltipContent from "./BuffTooltipContent";
import { Box, Checkbox, TextField } from "@mui/material";
import { Skill } from "../static/skill";

interface BuffIconButtonProps {
    buffSpec: Skill;
    buffState?: { name: string, level: number };
    setBuff: (buff: Skill, checked: boolean, level: number) => void;
}

export const BuffIconButton: React.FC<BuffIconButtonProps> = ({ buffSpec, buffState, setBuff }) => {
    const [level, setLevel] = React.useState(buffState?.level || buffSpec.max);
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(event.target.value));
        setBuff(buffSpec, !!buffState, Number(event.target.value));
    }
    const handleCheckChange = () => {
        setBuff(buffSpec, !!!buffState, level);
    }

    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Checkbox size="small" checked={!!buffState} onChange={handleCheckChange} />
            <Tooltip content={<BuffTooltipContent name={buffSpec.displayName} descriptions={buffSpec.descriptions} level={level} />} >
                <IconButton backgroundImage={buffSpec.icon} onClick={handleCheckChange} />
            </Tooltip>
            <TextField
                type="number"
                size="small"
                value={buffState?.level || level}
                onChange={handleLevelChange}
                sx={{
                    width: "50px", "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 }
                }}
                slotProps={{ htmlInput: { min: buffSpec.min, max: buffSpec.max } }}
            />

        </Box>
    );
}

export default BuffIconButton;