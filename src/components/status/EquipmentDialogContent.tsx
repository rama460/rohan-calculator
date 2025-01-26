import { Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React from "react"
import { ItemTemplate, Item, generateItem } from '../static/items.ts'
import { EquipmentOption } from "./EquipmentOption";
import AddIcon from '@mui/icons-material/Add';
import { Option } from "../static/options.ts";



interface EquipmentDialogContentProps {
    itemTemplates: ItemTemplate[];
    currentItem: Item;
    setCurrentItem: (item: Item) => void;
}

export const EquipmentDialogContent: React.FC<EquipmentDialogContentProps> = ({ itemTemplates, setCurrentItem }) => {
    // FIXME: ダイアログオープン時に表示される装備を全選択したもの or 装備中のものにする
    const [name, setName] = React.useState(itemTemplates[0].name);
    const [enchantLevel, setEnchantLevel] = React.useState(0);
    const [additionalOptions, setAdditionalOptions] = React.useState<Option[]>([]);
    const [selectedItemTemplate, setSelectedItemTemplate] = React.useState<ItemTemplate>(itemTemplates[0]);
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
        const selectedItemTemplate: ItemTemplate = itemTemplates.find((itemTemplate) => itemTemplate.name === event.target.value) || itemTemplates[0];
        setCurrentItem(generateItem(selectedItemTemplate, enchantLevel, additionalOptions));
        setSelectedItemTemplate(selectedItemTemplate);
    };

    return (
        <React.Fragment>
            <FormControl size="small" sx={{ margin: "10px" }}>
                <InputLabel>Name</InputLabel>
                <Select
                    value={name}
                    label="Name"
                    onChange={handleChange}
                >
                    {itemTemplates.map((itemTemplate) => (
                        <MenuItem value={itemTemplate.name}>{itemTemplate.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {
                selectedItemTemplate.enchantableBaseOptions ? (
                    <FormControl size="small" sx={{ margin: "10px" }}>
                        <TextField
                            value={enchantLevel}
                            label="強化値"
                            size="small"
                            type="number"
                            onChange={(event) => {
                                setCurrentItem(generateItem(selectedItemTemplate, Number(event.target.value), additionalOptions));
                                setEnchantLevel(Number(event.target.value));
                            }}
                            sx={{ width: "70px" }}
                            slotProps={{ htmlInput: { min: 0 } }}
                        />
                    </FormControl>
                ) : (<></>)
            }
            <Divider />
            {selectedItemTemplate.fixedBaseOptions?.map((option) => (
                <EquipmentOption option={option} />
            ))}
            {selectedItemTemplate.enchantableBaseOptions?.at(enchantLevel)?.map((option) => (
                <EquipmentOption option={option} />
            )) ?? (
                    selectedItemTemplate.enchantableBaseOptions?.at(-1)?.map((option) => (
                        <EquipmentOption option={option} />
                    ))
                )
            }

            <Divider />
            {additionalOptions.map((option) => (
                <EquipmentOption option={option} />
            ))}
            <Button onClick={() => {
                setAdditionalOptions([...additionalOptions, { name: "Option", value: 0, displayName: "Option", displayColor: "white", unit: "number" }]);
            }}>
                <AddIcon />
            </Button>
        </React.Fragment>
    );
}