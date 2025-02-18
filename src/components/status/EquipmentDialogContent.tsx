import { Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React from "react"
import { ItemTemplate, Item, getInitialBaseOtions } from '../static/items.ts'
import { EquipmentOption } from "./EquipmentOption";
import AddIcon from '@mui/icons-material/Add';
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../static/options.ts";
import { useBasesContext } from "../../modules/context/useBasesContext.ts";
import { races } from "../static/races.ts";



interface EquipmentDialogContentProps {
    itemTemplates: ItemTemplate[];
    currentItem: Item | null;
    setCurrentItem: (item: Item) => void;
}

// FIXME: Reconsider the data structure of Item / Options, and states in this component
// Because in the UI, the options need to hold the order to display, 
// but the Item / Option data structure is not suitable for that because of hash.
const hashToArray = (hash: { [key in BuiltinOptionKeyType]?: number }): { name: BuiltinOptionKeyType, value: number }[] => {
    return Object.entries(hash).map(([name, value]) => ({ name: name as BuiltinOptionKeyType, value: value }));
}
const ArrayToHash = (array: { name: BuiltinOptionKeyType, value: number }[]): { [key in BuiltinOptionKeyType]?: number } => {
    return Object.assign({}, ...array.map((option) => ({ [option.name]: option.value })));
}


export const EquipmentDialogContent: React.FC<EquipmentDialogContentProps> = ({ itemTemplates, currentItem, setCurrentItem }) => {
    const bases = useBasesContext();
    const availableItemTemplates = itemTemplates.filter((template) => template.availableRaces?.some(
        (r) => r === races[bases.raceid].name) ?? true)
    const [name, setName] = React.useState(
        currentItem ? currentItem.name :
            availableItemTemplates[0].name);
    const [enchantLevel, setEnchantLevel] = React.useState(
        currentItem ? currentItem.enchantLevel :
            0);
    const [baseOptions, setBaseOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        currentItem ? hashToArray(currentItem.baseOptions) :
            hashToArray(getInitialBaseOtions(availableItemTemplates[0], enchantLevel))
    );
    const [additionalOptions, setAdditionalOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        currentItem ? hashToArray(currentItem.additionalOptions) :
            []);
    const [selectedItemTemplate, setSelectedItemTemplate] = React.useState<ItemTemplate>(availableItemTemplates[0]);
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
        const selectedItemTemplate: ItemTemplate = availableItemTemplates.find((itemTemplate) => itemTemplate.name === event.target.value) || itemTemplates[0];
        setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, enchantLevel)));
        setSelectedItemTemplate(selectedItemTemplate);
    };

    React.useEffect(() => {
        setCurrentItem({
            enchantLevel: enchantLevel,
            baseOptions: ArrayToHash(baseOptions),
            additionalOptions: ArrayToHash(additionalOptions),
            ...selectedItemTemplate
        })
    }, [baseOptions, additionalOptions])

    return (
        <React.Fragment>
            <FormControl size="small" sx={{ margin: "10px" }}>
                <InputLabel>Name</InputLabel>
                <Select
                    value={name}
                    label="Name"
                    onChange={handleChange}
                >
                    {availableItemTemplates.map(
                        (itemTemplate) => (
                            <MenuItem value={itemTemplate.name}>{itemTemplate.name}</MenuItem>
                        )
                    )}
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
                                setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, Number(event.target.value))));
                                setEnchantLevel(Number(event.target.value));
                            }}
                            sx={{ width: "70px" }}
                            slotProps={{ htmlInput: { min: 0 } }}
                        />
                    </FormControl>
                ) : (<></>)
            }
            <Divider />
            {baseOptions.map((option, index) => (
                <EquipmentOption name={option.name} value={option.value} index={index} options={baseOptions} setOptions={setBaseOptions} />
            ))}


            <Divider />
            {additionalOptions.map((option, index) => (
                <EquipmentOption name={option.name} value={option.value} index={index} options={additionalOptions} setOptions={setAdditionalOptions} />
            ))}
            <Button onClick={() => {
                const unused = BuiltinOptionKeys.find((name) => additionalOptions.some((option) => option.name === name) === false);
                if (unused !== undefined)
                    additionalOptions.push({ name: unused, value: 0 });
                setAdditionalOptions([...additionalOptions]);
            }}>
                <AddIcon />
            </Button>
        </React.Fragment >
    );
}