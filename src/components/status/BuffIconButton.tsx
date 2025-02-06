import React from "react";
import IconButton from "../common/IconButton";
import Tooltip from "../common/Tooltip";
import BuffTooltipContent from "./BuffTooltipContent";
import { Box, Checkbox, TextField } from "@mui/material";
import { Skill } from "../static/skill";
import { useAppliedSkillsDispatch } from "../../modules/context/useSkillsContext";

interface BuffIconButtonProps {
    skill: Skill;
}

export const BuffIconButton: React.FC<BuffIconButtonProps> = ({ skill }) => {
    const skillsDispatch = useAppliedSkillsDispatch();
    const [checked, setChecked] = React.useState(false);
    const [level, setLevel] = React.useState(7);
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(event.target.value));
        if (checked) {
            // change buff level if previous state is checked
            const level = Number(event.target.value);
            skillsDispatch({ type: "SET", skill: { name: skill.name, level: level, attributes: skill.attributes[level - 1] } });
        }
    }
    const handleCheckChange = () => {
        setChecked(!checked);
        if (checked) {
            // remove buff if previous state is checked
            skillsDispatch({ type: "REMOVE", name: skill.name });
        } else {
            // apply buff if previous state is unchecked
            skillsDispatch({ type: "SET", skill: { name: skill.name, level: level, attributes: skill.attributes[level - 1] } });
        }
    }

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Checkbox size="small" checked={checked} onChange={handleCheckChange} />
            <Tooltip content={<BuffTooltipContent name={skill.name} descriptions={skill.descriptions} level={level} />} >
                <IconButton backgroundImage={skill.icon} onClick={handleCheckChange} />
            </Tooltip>
            <TextField
                type="number"
                size="small"
                defaultValue={skill.max}
                onChange={handleLevelChange}
                sx={{
                    width: "50px",
                }}
                slotProps={{ htmlInput: { min: skill.min, max: skill.max } }}
            />

        </Box>
    );
}

export default BuffIconButton;