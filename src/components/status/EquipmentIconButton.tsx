import React from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import EquipmentTooltipContent from "./EquipmentTooltipContent"
import EquipmentDialog from "./EquipmentDialog";
import { DefaultEquipmentTooltipContent } from "./DefaultEquipmentTooltipContent";
import anyBackground from "../../assets/backgrounds/any.png"
import { ItemTemplate } from "../static/items";
import { useAtom, useAtomValue } from "jotai";
import { Equipments, equipmentStateFamily, equipmentSynergyCountState } from "../../modules/state/items";


interface EquipmentIconButtonProps {
    equipmentType: keyof Equipments
    title: string
    backgroundImage?: string
    items: ItemTemplate[]
}

export const EquipmentIconButton: React.FC<EquipmentIconButtonProps> = ({ equipmentType, title, backgroundImage = anyBackground, items }) => {
    console.log(`render EquipmentIconButton ${equipmentType}`)
    const [equippedItem, setEquippedItem] = useAtom(equipmentStateFamily(equipmentType));
    const synergyCount = useAtomValue(equipmentSynergyCountState(equipmentType));
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);
    return (
        <>
            <Tooltip content={
                equippedItem ? <EquipmentTooltipContent currentItem={equippedItem} synergyCount={synergyCount} title={title} /> : <DefaultEquipmentTooltipContent content={title} />} >
                <IconButton backgroundImage={backgroundImage} image={equippedItem?.icon} onClick={handleOpen} />
            </Tooltip>
            <EquipmentDialog
                equipmentType={equipmentType}
                isOpen={openDialog}
                onClose={handleClose}
                title={title}
                equippedItem={equippedItem}
                setEquippedItem={setEquippedItem}
                itemTemplates={items}
            />

        </>
    )
}

export default EquipmentIconButton;