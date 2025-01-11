import { Box, TextField, Typography } from "@mui/material";

interface CharactorParameterFieldProps {
    name: string;
    value: number;
    color?: string;
}

export const CharactorParameterField: React.FC<CharactorParameterFieldProps> = ({ name, value, color = "white" }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
                {name}
            </Typography>
            <TextField
                type="number"
                size="small"
                defaultValue={0}
                value={value}
                sx={{ width: "100px", }}
                slotProps={{ htmlInput: { min: 0, readOnly: true } }}
            />
        </Box>
    );
}
export default CharactorParameterField;