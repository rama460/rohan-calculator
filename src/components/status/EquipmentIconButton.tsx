import React from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import EquipmentTooltipContent from "./EquipmentTooltipContent"
import EquipmentDialog from "./EquipmentDialog";
import { DefaultEquipmentTooltipContent } from "./DefaultEquipmentTooltipContent";
import anyBackground from "../../assets/backgrounds/any.png"
import { ItemTemplate } from "../static/items";
import { useAtom, useAtomValue } from "jotai";
import { Equipments, equipmentStateFamily, equipmentSynergyCountState, selectedItemStateFamily } from "../../modules/state/items";


interface EquipmentIconButtonProps {
    equipmentType: keyof Equipments
    title: string
    backgroundImage?: string
    items: ItemTemplate[]
}

export const EquipmentIconButton: React.FC<EquipmentIconButtonProps> = ({ equipmentType, title, backgroundImage = anyBackground, items }) => {
    const [equippedItem, setEquippedItem] = useAtom(equipmentStateFamily(equipmentType));
    const [selectedItem, setSelectedItem] = useAtom(selectedItemStateFamily(equipmentType));
    const synergyCount = useAtomValue(equipmentSynergyCountState(equipmentType));

    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpen = () => setOpenDialog(true);
    const handleConfirm = () => {
        setOpenDialog(false);
        if (!selectedItem) {
            return;
        }
        setEquippedItem(selectedItem);
    }
    const handleRemove = () => {
        setEquippedItem(undefined);
        setOpenDialog(false);
    }
    const handleCancel = () => {
        // FIXME: cancelするとダイアログが閉じる前に一瞬表示データが戻ってしまう
        setOpenDialog(false);
        if (equippedItem) {
            setSelectedItem(equippedItem);
        }
    }
    return (
        <>
            <Tooltip content={
                equippedItem ? <EquipmentTooltipContent currentItem={equippedItem} synergyCount={synergyCount} title={title} /> : <DefaultEquipmentTooltipContent content={title} />} >
                <IconButton backgroundImage={backgroundImage} image={equippedItem?.icon} onClick={handleOpen} />
            </Tooltip>
            <EquipmentDialog
                equipmentType={equipmentType}
                isOpen={openDialog}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                onRemove={handleRemove}
                title={title}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                equippedItem={equippedItem}
                itemTemplates={items}
            />

        </>
    )
}

export default EquipmentIconButton;