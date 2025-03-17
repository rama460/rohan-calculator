import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { BuiltinOptionKeys, BuiltinOptionKeyType, BuiltinOptions, getDisplayOptionName } from "../static/options";
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";

interface EquipmentOptionProps {
    name: BuiltinOptionKeyType;
    value: number;
    index: number;
    options: { name: BuiltinOptionKeyType, value: number }[];
    setOptions: (options: { name: BuiltinOptionKeyType, value: number }[]) => void;
}
export const EquipmentOption: React.FC<EquipmentOptionProps> = ({ name, value, index, options, setOptions }) => {
    const equipmentOptionStyle: React.CSSProperties = {
        margin: "10px",
    }
    const handleOptionChange = (event: SelectChangeEvent) => {
        // assign the new value to the same index as the old value
        options[index] = { name: event.target.value as BuiltinOptionKeyType, value: value };
        setOptions([...options])
    }

    const handleOptionRemove = () => {
        // remove the option at the index
        options.splice(index, 1);
        setOptions([...options]);
    }

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} sx={equipmentOptionStyle}>
            <FormControl size="small">
                <Select
                    defaultValue="none"
                    value={name}
                    onChange={handleOptionChange}
                >
                    {BuiltinOptionKeys.filter((n) => !(options.some((option) => option.name === n)) || n == name || n == "none").map((name, index) => (
                        <MenuItem key={index} value={name}>{getDisplayOptionName(BuiltinOptions[name])}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <TextField
                    type="number"
                    size="small"
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
export default EquipmentOption;