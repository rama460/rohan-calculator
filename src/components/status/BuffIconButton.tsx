import React, { useEffect } from "react";
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
    const [checked, setChecked] = React.useState(!!buffState);
    const [level, setLevel] = React.useState(buffState?.level || buffSpec.max);
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(event.target.value));
        setBuff(buffSpec, checked, Number(event.target.value));
    }
    const handleCheckChange = () => {
        setChecked(!checked);
        setBuff(buffSpec, !checked, level);
    }
    useEffect(() => {
        // FIXME: buffState reset when job/race is changed but current atom depndency does not 
        /// follow that. so reluctantly reset the state here using useEffect.
        if (!buffState) {
            setChecked(false);
        }
    }, [buffState]);

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Checkbox size="small" checked={checked} onChange={handleCheckChange} />
            <Tooltip content={<BuffTooltipContent name={buffSpec.displayName} descriptions={buffSpec.descriptions} level={level} />} >
                <IconButton backgroundImage={buffSpec.icon} onClick={handleCheckChange} />
            </Tooltip>
            <TextField
                type="number"
                size="small"
                value={level}
                onChange={handleLevelChange}
                sx={{
                    width: "50px",
                }}
                slotProps={{ htmlInput: { min: buffSpec.min, max: buffSpec.max } }}
            />

        </Box>
    );
}

export default BuffIconButton;