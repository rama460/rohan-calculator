import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { BuiltinOptionKeyType, BuiltinOptions, getCraftedOptions, getDisplayOptionName } from "../static/options";
import RemoveIcon from '@mui/icons-material/Remove';
import React from "react";
import { Equipments, selectedItemStateFamily } from "../../modules/state/items";
import { useAtomValue } from "jotai";

interface EquipmentCraftedOptionProps {
    name: BuiltinOptionKeyType;
    value: number;
    equipmentType: keyof Equipments;
    index: number;
    options: { name: BuiltinOptionKeyType, value: number }[];
    setOptions: (options: { name: BuiltinOptionKeyType, value: number }[]) => void;
}
export const EquipmentCraftedOption: React.FC<EquipmentCraftedOptionProps> = ({ name, value, equipmentType, index, options, setOptions }) => {
    const item = useAtomValue(selectedItemStateFamily(equipmentType));
    const EquipmentCraftedOptionStyle: React.CSSProperties = {
        margin: "10px",
    }
    const handleOptionChange = (event: SelectChangeEvent) => {
        // assign the new value to the same index as the old value
        options[index] = {
            name: event.target.value as BuiltinOptionKeyType,
            value: getCraftedOptions(equipmentType, item)[event.target.value as BuiltinOptionKeyType] ?? 0
        };
        setOptions([...options])
    }

    const handleOptionRemove = () => {
        // remove the option at the index
        options.splice(index, 1);
        setOptions([...options]);
    }

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} sx={EquipmentCraftedOptionStyle}>
            <FormControl size="small">
                <Select
                    defaultValue={name}
                    value={name}
                    onChange={handleOptionChange}
                >
                    <MenuItem key={-1} value="none">なし</MenuItem>
                    {Object.keys(getCraftedOptions(equipmentType, item)).filter((n) => !(options.some((option) => option.name === n)) || n == name).map((name, index) => (
                        <MenuItem key={index} value={name}>{getDisplayOptionName(BuiltinOptions[name as BuiltinOptionKeyType])}</MenuItem>
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
export default EquipmentCraftedOption;