import { Box, TextField, Typography } from "@mui/material";

interface EquipmentOptionProps {
    option: {
        name: string;
        value: number;
    }
}
export const EquipmentOption: React.FC<EquipmentOptionProps> = ({ option }) => {
    const equipmentOptionStyle: React.CSSProperties = {
        margin: "10px",

    }
    return (
        <Box display="flex" alignItems="center" gap={2} sx={equipmentOptionStyle}>
            <Typography variant="body1" sx={{ width: "200px", textAlign: "left" }}>
                {option.name}:
            </Typography>
            <TextField
                type="number"
                size="small"
                defaultValue={option.value}
                sx={{ width: "80px", }}
            />
        </Box>
    );
}
export default EquipmentOption;