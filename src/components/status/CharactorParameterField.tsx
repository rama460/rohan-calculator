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
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
                {title}
            </Typography>
            <TextField
                type="number"
                size="small"
                value={value}
                sx={{ width: "120px", }}
                slotProps={{ htmlInput: { min: 0, readOnly: true } }}
            />
        </Box>
    );
}
export default CharactorParameterField;