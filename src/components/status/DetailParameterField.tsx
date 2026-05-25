import { Box, TextField, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { BuiltinOptionKeyType, BuiltinOptions, getDisplayOptionName } from "../../static/options";
import { calculatedActiveCharacterAtom } from "../../modules/state/appState";

interface DetailParameterFieldProps {
    name: BuiltinOptionKeyType;
}

export const DetailParameterField: React.FC<DetailParameterFieldProps> = ({ name }) => {
    const value = useAtomValue(calculatedActiveCharacterAtom).aggregatedOptions[name] ?? 0;
    const option = BuiltinOptions[name]
    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
            <Typography variant="caption" sx={{ textAlign: "left" }}>
                {getDisplayOptionName(option)}
            </Typography>
            <TextField
                type="number"
                size="small"
                value={value}
                sx={{ width: "120px", "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }}
                slotProps={{ htmlInput: { min: 0, readOnly: true } }}
            />
        </Box>
    );
}
export default DetailParameterField;
