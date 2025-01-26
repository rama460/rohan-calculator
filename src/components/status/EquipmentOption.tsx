import { Box, TextField, Typography } from "@mui/material";
import { Option } from "../static/options";

interface EquipmentOptionProps {
    option: Option
}
export const EquipmentOption: React.FC<EquipmentOptionProps> = ({ option }) => {
    const equipmentOptionStyle: React.CSSProperties = {
        margin: "10px",

    }
    return (
        <Box display="flex" alignItems="center" gap={2} sx={equipmentOptionStyle}>
            <Typography variant="body1" sx={{ width: "200px", textAlign: "left" }}>
                {option.displayName}:
            </Typography>
            <TextField
                type="number"
                size="small"
                value={option.value}
                sx={{ width: "100px", }}
            />
        </Box>
    );
}
export default EquipmentOption;