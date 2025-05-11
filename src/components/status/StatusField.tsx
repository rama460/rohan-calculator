import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { baseStatusState, metaStatusState, StatusType } from "../../modules/state/statuses";
import { charactorStateFamily } from "../../modules/state/charactor";

interface StatusFieldProps {
    name: StatusType;
    displayName: string;
}

export const StatusField: React.FC<StatusFieldProps> = ({ name, displayName }) => {
    const [base, setBase] = useAtom(baseStatusState(name));
    const [meta, setMeta] = useAtom(metaStatusState(name));
    const total = useAtomValue(charactorStateFamily(name));
    const handleBaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBase(Number(event.target.value));
    }
    const handleMetaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMeta(Number(event.target.value));
    }

    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={0}>
            <Typography variant="caption" sx={{ textAlign: "center", width: "60px" }}>
                {displayName}
            </Typography>
            <TextField
                type="number"
                size="small"
                value={base}
                sx={{ width: "70px", "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }}
                slotProps={{ htmlInput: { min: 0 } }}
                onChange={handleBaseChange}
            />
            <TextField
                type="number"
                size="small"
                value={meta}
                sx={{ width: "70px", "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }}
                slotProps={{ htmlInput: { min: 0 } }}
                onChange={handleMetaChange}
            />
            <TextField
                type="number"
                size="small"
                value={total}
                sx={{ width: "70px", "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }}
            />
        </Box>
    );
}
export default StatusField;