import React from "react";
import IconButton from "../common/IconButton";
import Tooltip from "../common/Tooltip";
import BuffTooltipContent from "./BuffTooltipContent";
import { Box, Checkbox, TextField } from "@mui/material";
import { AppliedSkill, Skill } from "../static/skill";

interface BuffIconButtonProps {
    skill: Skill;
    setAppliedSkills: React.Dispatch<React.SetStateAction<AppliedSkill[]>>;
}

export const BuffIconButton: React.FC<BuffIconButtonProps> = ({ skill, setAppliedSkills }) => {
    const [checked, setChecked] = React.useState(false);
    const [level, setLevel] = React.useState(7);
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(event.target.value));
        if (checked) {
            setAppliedSkills((prev: AppliedSkill[]) => {
                return prev.map((appliedSkill) => appliedSkill.name === skill.name ? { name: skill.name, level: Number(event.target.value), attributes: skill.attributes[Number(event.target.value) - 1] } : appliedSkill);
            });
        }
    }
    const handleCheckChange = () => {
        setChecked(!checked);
        setAppliedSkills((prev: AppliedSkill[]) => {
            if (checked) {
                return prev.filter((appliedSkill) => appliedSkill.name !== skill.name);
            } else {
                return [...prev, { name: skill.name, level: level, attributes: skill.attributes[level - 1] }];
            }
        });
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