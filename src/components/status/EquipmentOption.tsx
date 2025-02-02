import { Box, TextField, Typography } from "@mui/material";
import { BuiltinOptionKeyType, BuiltinOptions } from "../static/options";

interface EquipmentOptionProps {
    name: BuiltinOptionKeyType;
    value: number;
}
export const EquipmentOption: React.FC<EquipmentOptionProps> = ({ name, value }) => {
    const equipmentOptionStyle: React.CSSProperties = {
        margin: "10px",
    }
    return (
        <Box display="flex" alignItems="center" gap={2} sx={equipmentOptionStyle}>
            <Typography variant="body1" sx={{ width: "200px", textAlign: "left" }}>
                {BuiltinOptions[name].displayName}:
            </Typography>
            <TextField
                type="number"
                size="small"
                value={value}
                sx={{ width: "100px", }}
            />
        </Box>
    );
}
export default EquipmentOption;