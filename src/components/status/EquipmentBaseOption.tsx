import { Box, Button, TextField, Typography } from "@mui/material";
import { BuiltinOptionKeyType, BuiltinOptions } from "../static/options";
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";

interface EquipmentBaseOptionProps {
    name: BuiltinOptionKeyType;
    value: number;
    index: number;
    options: { name: BuiltinOptionKeyType, value: number }[];
    setOptions: (options: { name: BuiltinOptionKeyType, value: number }[]) => void;
}
export const EquipmentBaseOption: React.FC<EquipmentBaseOptionProps> = ({ name, value, index, options, setOptions }) => {
    const equipmentOptionStyle: React.CSSProperties = {
        margin: "10px",
    }

    const handleOptionRemove = () => {
        // remove the option at the index
        options.splice(index, 1);
        setOptions([...options]);
    }

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} sx={equipmentOptionStyle}>
            <Typography variant="body1" sx={{ textAlign: "left", width: "200px" }}>
                {BuiltinOptions[name].displayName}
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <TextField
                    type="number"
                    size="small"
                    defaultValue={value}
                    value={value}
                    onChange={(event) => {
                        options[index] = { name: name as BuiltinOptionKeyType, value: Number(event.target.value) };
                        setOptions([...options]);
                    }}
                    sx={{ width: "100px", }}
                />
                <Button onClick={handleOptionRemove} >
                    <RemoveIcon />
                </Button>
            </Box>
        </Box >
    );
}
export default EquipmentBaseOption;