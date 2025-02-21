import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { StatusType, useStatusesDispatch } from "../../modules/context/useStatusesContext";
import { useCharactorContext } from "../../modules/context/useCharactorContext";
import useQueryObject from "../../modules/context/useQueryState";

interface StatusFieldProps {
    name: StatusType;
    displayName: string;
}

export const StatusField: React.FC<StatusFieldProps> = ({ name, displayName }) => {
    const [base, setBase] = useQueryObject(`${name}_base`, 0);
    const [meta, setMeta] = useQueryObject(`${name}_meta`, 0);
    const statusesDispatch = useStatusesDispatch();
    const charactor = useCharactorContext();
    const handleBaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBase(Number(event.target.value));
    }
    const handleMetaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMeta(Number(event.target.value));
    }
    useEffect(() => {
        statusesDispatch({ type: "UPDATE_BASE", key: name as StatusType, value: base });
    }, [base]);
    useEffect(() => {
        statusesDispatch({ type: "UPDATE_META", key: name as StatusType, value: meta });
    }, [meta]);

    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
            <Typography variant="body1" sx={{ textAlign: "center", width: "60px" }}>
                {displayName}
            </Typography>
            <TextField
                type="number"
                size="small"
                defaultValue={0}
                value={base}
                sx={{ width: "100px", }}
                slotProps={{ htmlInput: { min: 0 } }}
                onChange={handleBaseChange}
            />
            <TextField
                type="number"
                size="small"
                defaultValue={0}
                value={meta}
                sx={{ width: "100px", }}
                slotProps={{ htmlInput: { min: 0 } }}
                onChange={handleMetaChange}
            />
            <TextField
                type="number"
                size="small"
                value={charactor.status[name]}
                sx={{ width: "100px", }}
            />
        </Box>
    );
}
export default StatusField;