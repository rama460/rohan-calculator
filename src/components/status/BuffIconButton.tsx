import React from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import helmet from "../../assets/backgrounds/helmet.png"
import BuffTooltipContent from "./BuffTooltipContent";
import { Box, Checkbox, TextField } from "@mui/material";

interface BuffIconButtonProps {
    icon: string;
}


export const BuffIconButton: React.FC<BuffIconButtonProps> = () => {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Checkbox />
            <Tooltip content={<BuffTooltipContent />} >
                <IconButton backgroundImage={helmet} />
            </Tooltip>
            <TextField
                type="number"
                size="small"
                defaultValue={1}
                sx={{
                    width: "50px",
                }}
                slotProps={{ htmlInput: { min: 1, max: 7 } }}
                inputProps={{ style: { height: "5px" } }}
            />

        </Box>
    );
}

export default BuffIconButton;