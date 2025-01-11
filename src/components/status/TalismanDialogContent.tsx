import { Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react"
import { Item } from "./EquipmentIconButton";
import { EquipmentOption } from "./EquipmentOption";
import AddIcon from '@mui/icons-material/Add';



interface TalismanDialogContentProps {
    items: Item[];
    currentItem: Item | null;
    setCurrentItem: (item: Item | null) => void;
}

export const TalismanDialogContent: React.FC<TalismanDialogContentProps> = ({ items, currentItem, setCurrentItem }) => {
    const [id, setId] = React.useState(currentItem?.id.toString() || "");
    const handleChange = (event: SelectChangeEvent) => {
        setId(event.target.value as string);
        setCurrentItem(items.find((item) => item.id === Number(event.target.value)) || null);
    };
    return (
        <React.Fragment>
            <FormControl fullWidth size="small" sx={{ margin: "10px" }}>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={id}
                    label="Name"
                    onChange={handleChange}
                >
                    {items.map((item) => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {currentItem !== null ? (
                <>
                    <Divider />
                    {currentItem.baseOptions.map((option) => (
                        <EquipmentOption option={option} />
                    ))}
                    <Divider />
                    {currentItem.additionalOptions.map((option) => (
                        <EquipmentOption option={option} />
                    ))}
                    <Divider />
                    {currentItem.customOptions.map((option) => (
                        <EquipmentOption option={option} />
                    ))}
                    <Button onClick={() => {
                        currentItem.customOptions.push({ name: "Option", value: 0 });
                    }}>
                        <AddIcon />
                    </Button>
                </>
            ) : (
                <></>
            )}
        </React.Fragment>
    );
}