import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react"
import { ItemTemplate, Item, getInitialBaseOtions } from '../static/items.ts'
import { EquipmentOption } from "./EquipmentOption";
import AddIcon from '@mui/icons-material/Add';
import { BuiltinOptionKeyType } from "../static/options.ts";
import { races } from "../static/races.ts";
import EquipmentBaseOption from "./EquipmentBaseOption.tsx";
import EquipmentCraftedOption from "./EquipmentCraftedOption.tsx";
import { useAtomValue } from "jotai";
import { baseOptionStateFamily } from "../../modules/state/bases.ts";
import { Equipments } from "../../modules/state/items.ts";

// FIXME: refactor this big component
interface EquipmentDialogProps {
    equipmentType: keyof Equipments
    isOpen: boolean;
    onClose: () => void;
    title: string;
    equippedItem: Item | undefined;
    setEquippedItem: (item: Item | undefined) => void;
    itemTemplates: ItemTemplate[];
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

export const EquipmentDialog: React.FC<EquipmentDialogProps> = ({ equipmentType, isOpen, onClose, title, equippedItem, setEquippedItem, itemTemplates }) => {
    const raceid = useAtomValue(baseOptionStateFamily("raceid"));
    const jobid = useAtomValue(baseOptionStateFamily("jobid"));

    const availableItemTemplates = itemTemplates.filter((template) => template.availableRaces?.some(
        (r) => (r === races[raceid].name || r === races[raceid].jobs[jobid].name)) ?? true)

    const [name, setName] = React.useState(
        equippedItem ? equippedItem.name : (
            availableItemTemplates.length > 0 ?
                availableItemTemplates[0].name : "none"));
    const [enchantLevel, setEnchantLevel] = React.useState(
        equippedItem ? equippedItem.enchantLevel :
            0);
    const [selectedItemTemplate, setSelectedItemTemplate] = React.useState<ItemTemplate>(
        equippedItem ? availableItemTemplates.find((template) => (template.name === equippedItem.name)) ?? availableItemTemplates[0] : availableItemTemplates[0])
    const [baseOptions, setBaseOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        equippedItem ? hashToArray(equippedItem.baseOptions) :
            availableItemTemplates.length > 0 ?
                hashToArray(getInitialBaseOtions(availableItemTemplates[0], raceid, jobid, enchantLevel)) : []
    );
    const [craftedOptions, setCraftedOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        equippedItem ? hashToArray(equippedItem.craftedOptions ?? {}, selectedItemTemplate.sockets) : (
            selectedItemTemplate.sockets ?
                Array.from(
                    { length: selectedItemTemplate.sockets }, (_) => ({ name: "none", value: 0 })
                ) : []
        )
    );
    const [additionalOptions, setAdditionalOptions] = React.useState<{ name: BuiltinOptionKeyType, value: number }[]>(
        equippedItem ? hashToArray(equippedItem.additionalOptions) :
            []);
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
        const selectedItemTemplate: ItemTemplate = availableItemTemplates.find((itemTemplate) => itemTemplate.name === event.target.value) || itemTemplates[0];
        setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, raceid, jobid, enchantLevel)));
        if (!selectedItemTemplate.sockets)
            setCraftedOptions([]);
        else if (craftedOptions.length > selectedItemTemplate.sockets) {
            setCraftedOptions(craftedOptions.slice(0, selectedItemTemplate.sockets));
        } else {
            setCraftedOptions([
                ...craftedOptions,
                ...Array.from(
                    { length: selectedItemTemplate.sockets - craftedOptions.length }, (_) => ({ name: "none" as BuiltinOptionKeyType, value: 0 })
                )]);
        }
        setSelectedItemTemplate(selectedItemTemplate);
    };

    const handleConfirm = () => {
        setEquippedItem({
            enchantLevel: enchantLevel,
            baseOptions: ArrayToHash(baseOptions),
            additionalOptions: ArrayToHash(additionalOptions),
            craftedOptions: ArrayToHash(craftedOptions),
            ...selectedItemTemplate
        })
        onClose();
    }
    const handleReset = () => {
        setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, raceid, jobid, enchantLevel)));
        setCraftedOptions(
            selectedItemTemplate.sockets ?
                Array.from(
                    { length: selectedItemTemplate.sockets }, (_) => ({ name: "none", value: 0 })
                ) : []);
        setAdditionalOptions([]);
    }

    const handleRemove = () => {
        setEquippedItem(undefined);
        onClose();
    }

    const handleCancel = () => {
        setName(equippedItem ? equippedItem.name : name);
        setEnchantLevel(equippedItem ? equippedItem.enchantLevel : enchantLevel);
        setBaseOptions(equippedItem ? hashToArray(equippedItem.baseOptions) : baseOptions);
        setCraftedOptions(equippedItem ? hashToArray(equippedItem.craftedOptions ?? {}, selectedItemTemplate.sockets) : craftedOptions);
        setAdditionalOptions(equippedItem ? hashToArray(equippedItem.additionalOptions) : additionalOptions);
        setSelectedItemTemplate(equippedItem ? availableItemTemplates.find((template) => (template.name === equippedItem.name)) ?? availableItemTemplates[0] : selectedItemTemplate);
        onClose();
    }

    React.useEffect(() => {
        setName(equippedItem ? equippedItem.name : name);
        setEnchantLevel(equippedItem ? equippedItem.enchantLevel : enchantLevel);
        setBaseOptions(equippedItem ? hashToArray(equippedItem.baseOptions) : baseOptions);
        setCraftedOptions(equippedItem ? hashToArray(equippedItem.craftedOptions ?? {}, selectedItemTemplate.sockets) : craftedOptions);
        setAdditionalOptions(equippedItem ? hashToArray(equippedItem.additionalOptions) : additionalOptions);
        setSelectedItemTemplate(equippedItem ? availableItemTemplates.find((template) => (template.name === equippedItem.name)) ?? availableItemTemplates[0] : selectedItemTemplate);

    }, [equippedItem]);
    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                sx={{
                }}
            >
                <DialogTitle sx={{ fontSize: "30px" }} >
                    {title}
                </DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                    <img src={selectedItemTemplate.icon} alt={selectedItemTemplate.name} style={{ width: "32px", height: "32px", padding: "15px", textAlign: "left" }} />
                    <FormControl size="small" sx={{ margin: "10px" }}>
                        <InputLabel>Name</InputLabel>
                        <Select
                            value={name}
                            label="Name"
                            onChange={handleChange}
                        >
                            {availableItemTemplates.map(
                                (itemTemplate, index) => (
                                    <MenuItem key={index} value={itemTemplate.name}>{itemTemplate.name}</MenuItem>
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
                                        setBaseOptions(hashToArray(getInitialBaseOtions(selectedItemTemplate, raceid, jobid, Number(event.target.value))));
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
                        <EquipmentBaseOption key={index} name={option.name} value={option.value} index={index} options={baseOptions} setOptions={setBaseOptions} />
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
                                        <EquipmentCraftedOption key={index} name={option.name} value={option.value} equipmentType={equipmentType} template={selectedItemTemplate} index={index} options={craftedOptions} setOptions={setCraftedOptions} />
                                    ))
                                }
                            </>) : (<></>)
                    }
                    <Divider />
                    <Typography>追加オプション</Typography>
                    {
                        additionalOptions.map((option, index) => (
                            <EquipmentOption key={index} name={option.name} value={option.value} index={index} options={additionalOptions} setOptions={setAdditionalOptions} />
                        ))
                    }
                    <Button onClick={() => {
                        additionalOptions.push({ name: "none", value: 0 });
                        setAdditionalOptions([...additionalOptions]);
                    }}>
                        <AddIcon />
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleReset} >
                        リセット
                    </Button>
                    <Button onClick={handleConfirm} >
                        装備
                    </Button>
                    {equippedItem ? <Button onClick={handleRemove} >
                        解除
                    </Button> : <></>}
                    <Button onClick={handleCancel} >
                        キャンセル
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
export default EquipmentDialog;