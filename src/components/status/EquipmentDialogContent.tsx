import { Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react"
import { ItemTemplate, Item, getInitialBaseOtions } from '../static/items.ts'
import { EquipmentOption } from "./EquipmentOption";
import AddIcon from '@mui/icons-material/Add';
import { BuiltinOptionKeyType } from "../static/options.ts";
import { useBasesContext } from "../../modules/context/useBasesContext.ts";
import { races } from "../static/races.ts";
import EquipmentBaseOption from "./EquipmentBaseOption.tsx";
import { Equipments } from "../../modules/context/useEquipmentsContext.ts";
import EquipmentCraftedOption from "./EquipmentCraftedOption.tsx";


interface EquipmentDialogContentProps {
    equipmentType: keyof Equipments
    itemTemplates: ItemTemplate[];
    currentItem: Item | null;
    setCurrentItem: (item: Item) => void;
}

// FIXME: Reconsider the data structure of Item / Options, and states in this component
// Because in the UI, the options need to hold the order to display, 
// but the Item / Option data structure is not suitable for that because of hash.
const hashToArray = (hash: { [key in BuiltinOptionKeyType]?: number }, minimumLength: number | undefined = undefined): { name: BuiltinOptionKeyType, value: number }[] => {
    const a = Object.entries(hash).map(([name, value]) => ({ name: name as BuiltinOptionKeyType, value: value }));
    if (minimumLength !== undefined) {
        for (let i = a.length; i < minimumLength; i++) {
            a.push({ name: "none", value: 0 });
        }
    }
    return a;
}
const ArrayToHash = (array: { name: BuiltinOptionKeyType, value: number }[]): { [key in BuiltinOptionKeyType]?: number } => {
    return Object.assign({}, ...array.map((option) => ({ [option.name]: option.value })));
}


export const EquipmentDialogContent: React.FC<EquipmentDialogContentProps> = ({ equipmentType, itemTemplates, currentItem, setCurrentItem }) => {
    const bases = useBasesContext();

    const availableItemTemplates = itemTemplates.filter((template) => template.availableRaces?.some(
        (r) => r === races[bases.raceid].name) ?? true)
    const [name, setName] = React.useState(
        currentItem ? currentItem.name : (
            availableItemTemplates.length > 0 ?
                availableItemTemplates[0].name : "none"));
    const [enchantLevel, setEnchantLevel] = React.useState(
        currentItem ? currentItem.enchantLevel :
            0);
    const [selectedItemTemplate, setSelectedItemTemplate] = React.useState<ItemTemplate>(
        currentItem ? availableItemTemplates.find((template) => (template.name === currentItem.name)) ?? availableItemTemplates[0] : availableItemTemplates[0])
    const [baseOptions, setBaseOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        currentItem ? hashToArray(currentItem.baseOptions) :
            hashToArray(getInitialBaseOtions(availableItemTemplates[0], bases.raceid, enchantLevel))
    );
    const [craftedOptions, setCraftedOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        currentItem ? hashToArray(currentItem.craftedOptions ?? {}, selectedItemTemplate.sockets) : (
            selectedItemTemplate.sockets ?
                Array.from(
                    { length: selectedItemTemplate.sockets }, (_) => ({ name: "none", value: 0 })
                ) : []
        )
    );

    const [additionalOptions, setAdditionalOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        currentItem ? hashToArray(currentItem.additionalOptions) :
            []);
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
        const selectedItemTemplate: ItemTemplate = availableItemTemplates.find((itemTemplate) => itemTemplate.name === event.target.value) || itemTemplates[0];
        setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, bases.raceid, enchantLevel)));
        setSelectedItemTemplate(selectedItemTemplate);
    };

    React.useEffect(() => {
        setCurrentItem({
            enchantLevel: enchantLevel,
            baseOptions: ArrayToHash(baseOptions),
            additionalOptions: ArrayToHash(additionalOptions),
            craftedOptions: ArrayToHash(craftedOptions),
            ...selectedItemTemplate
        })
    }, [baseOptions, additionalOptions, craftedOptions])
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
                selectedItemTemplate.enchantableBaseOptions || selectedItemTemplate.raceEnchantableBaseOptions ? (
                    <FormControl size="small" sx={{ margin: "10px" }}>
                        <TextField
                            value={enchantLevel}
                            label="強化値"
                            size="small"
                            type="number"
                            onChange={(event) => {
                                setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, bases.raceid, Number(event.target.value))));
                                setEnchantLevel(Number(event.target.value));
                            }}
                            sx={{ width: "70px" }}
                            slotProps={{ htmlInput: { min: 0 } }}
                        />
                    </FormControl>
                ) : (<></>)
            }
            <Divider />
            <Typography >基本オプション</Typography>
            {baseOptions.map((option, index) => (
                <EquipmentBaseOption name={option.name} value={option.value} index={index} options={baseOptions} setOptions={setBaseOptions} />
            ))}
            {
                selectedItemTemplate.sockets && selectedItemTemplate.sockets > 0 ? (
                    <>
                        <Divider />
                        <Typography>
                            生産オプション
                        </Typography>
                        {
                            craftedOptions.map((option, index) => (
                                <EquipmentCraftedOption name={option.name} value={option.value} equipmentType={equipmentType} index={index} options={craftedOptions} setOptions={setCraftedOptions} />
                            ))
                        }
                    </>) : (<></>)
            }
            <Divider />
            <Typography>追加オプション</Typography>
            {
                additionalOptions.map((option, index) => (
                    <EquipmentOption name={option.name} value={option.value} index={index} options={additionalOptions} setOptions={setAdditionalOptions} />
                ))
            }
            <Button onClick={() => {
                additionalOptions.push({ name: "none", value: 0 });
                setAdditionalOptions([...additionalOptions]);
            }}>
                <AddIcon />
            </Button>
        </React.Fragment >
    );
}