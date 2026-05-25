import { Box, TextField, Typography, Chip } from "@mui/material";
import React from "react";
import { useAtom, useAtomValue } from "jotai";
import {
    uiAllocatedStatusAtomFamily,
    uiIsFormulaCustomizedFamily,
    uiMetaStatusAtomFamily,
} from "../../modules/state/ui";
import { CharacterStatusKey, CharacterValueKey } from "../../modules/character/constants";
import { activeCharacterValueAtomFamily } from "../../modules/state/appState";

interface StatusFieldProps {
    name: CharacterStatusKey;
    displayName: string;
}

export const StatusField: React.FC<StatusFieldProps> = ({ name, displayName }) => {
    const [base, setBase] = useAtom(uiAllocatedStatusAtomFamily(name));
    const [meta, setMeta] = useAtom(uiMetaStatusAtomFamily(name));
    const valueKey = `__${name}` as CharacterValueKey;
    const total = useAtomValue(activeCharacterValueAtomFamily(valueKey));
    const isCustomized = useAtomValue(uiIsFormulaCustomizedFamily(valueKey));

    const handleBaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBase(Number(event.target.value));
    }
    const handleMetaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMeta(Number(event.target.value));
    }

    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: "80px" }}>
                <Typography variant="caption" sx={{ textAlign: "center", minWidth: "50px" }}>
                    {displayName}
                </Typography>
                {isCustomized && (
                    <Chip
                        label="カスタム"
                        size="small"
                        variant="outlined"
                        color="primary"
                        sx={{
                            fontSize: '8px',
                            height: '16px',
                            ml: 0.5,
                            '& .MuiChip-label': {
                                px: 0.5
                            }
                        }}
                    />
                )}
            </Box>
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
                sx={{
                    width: "70px",
                    "& .MuiInputBase-input": {
                        fontSize: 10,
                        height: 5,
                        padding: 1,
                        fontWeight: isCustomized ? 'bold' : 'normal',
                        backgroundColor: isCustomized ? '#e3f2fd' : 'transparent'
                    }
                }}
                InputProps={{
                    readOnly: true
                }}
            />
        </Box>
    );
}
export default StatusField;
