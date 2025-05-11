import { Box, TextField, Typography } from "@mui/material";
import { charactorStateFamily, CharactorStateType } from "../../modules/state/charactor";
import { useAtomValue } from "jotai";

interface CharactorParameterFieldProps {
    name: CharactorStateType;
    title: string;
}

export const CharactorParameterField: React.FC<CharactorParameterFieldProps> = ({ name, title }) => {
    const value = useAtomValue(charactorStateFamily(name));
    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={1}>
            <Typography variant="caption" sx={{ textAlign: "left" }}>
                {title}
            </Typography>
            <TextField
                type="text"
                size="small"
                value={value}
                sx={{ width: "70px", "& .MuiInputBase-input": { fontSize: 10, height: 4, padding: 1 } }}
                slotProps={{ htmlInput: { min: 0, readOnly: true } }}
            />
        </Box>
    );
}
export default CharactorParameterField;