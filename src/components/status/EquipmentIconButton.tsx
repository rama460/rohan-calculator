import React, { useEffect } from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import EquipmentTooltipContent from "./EquipmentTooltipContent"
import EquipmentDialog from "./EquipmentDialog";
import { EquipmentDialogContent } from "./EquipmentDialogContent";
import { DefaultEquipmentTooltipContent } from "./DefaultEquipmentTooltipContent";
import anyBackground from "../../assets/backgrounds/any.png"
import { Item, ItemTemplate } from "../static/items";
import { Equipments, useEquipments, useEquipmentsDispatch } from "../../modules/context/useEquipmentsContext";
import { useSynergyDispatch } from "../../modules/context/useSynergyContext";
import useQueryObject from "../../modules/context/useQueryState";


interface EquipmentIconButtonProps {
    equipmentType: keyof Equipments
    title: string
    backgroundImage?: string
    items: ItemTemplate[]
}

export const EquipmentIconButton: React.FC<EquipmentIconButtonProps> = ({ equipmentType, title, backgroundImage = anyBackground, items }) => {

    const equipmentDispatch = useEquipmentsDispatch();
    const equipments = useEquipments();
    const synergyDispatch = useSynergyDispatch();
    const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);
    const [equippedItem, setEquippedItem] = useQueryObject<Item | null>(equipmentType, null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [synergyCount, setSynergisticCount] = React.useState(0);
    const handleOpen = () => setOpenDialog(true);
    const handleConfirm = () => {
        setOpenDialog(false);
        if (!selectedItem) {
            return;
        }
        setEquippedItem(selectedItem);
        equipmentDispatch({ type: "SET", key: equipmentType, item: selectedItem });
    }
    const handleRemove = () => {
        setEquippedItem(null);
        setOpenDialog(false);
        equipmentDispatch({ type: "REMOVE", key: equipmentType });
    }
    const handleCancel = () => {
        // FIXME: cancelするとダイアログが閉じる前に一瞬表示データが戻ってしまう
        setOpenDialog(false);
        if (equippedItem) {
            setSelectedItem(equippedItem);
        }
    }
    useEffect(() => {
        if (equippedItem && equippedItem?.synergyKey && equippedItem?.synergyOptions) {
            const count = Object.values(equipments).filter((item) => item?.synergyKey === equippedItem.synergyKey).length ?? 0;
            setSynergisticCount(count);
            synergyDispatch({ type: "UPDATE", synergyOption: equippedItem.synergyOptions, count: count, synergyKey: equippedItem.synergyKey });
        } else {
            setSynergisticCount(0);
        }
    }, [equipments])
    return (
        <>
            <Tooltip content={
                equippedItem ? <EquipmentTooltipContent currentItem={equippedItem} synergyCount={synergyCount} title={title} /> : <DefaultEquipmentTooltipContent content={title} />} >
                <IconButton backgroundImage={backgroundImage} image={equippedItem?.icon} onClick={handleOpen} />
            </Tooltip>
            <EquipmentDialog isOpen={openDialog} onConfirm={handleConfirm} onRemove={handleRemove} onCancel={handleCancel} title={title} equippedItem={equippedItem} >
                <EquipmentDialogContent itemTemplates={items} currentItem={selectedItem} setCurrentItem={setSelectedItem} />
            </EquipmentDialog>

        </>
    );
}

export default EquipmentIconButton;