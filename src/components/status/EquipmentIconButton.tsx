import React, { useEffect } from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import EquipmentTooltipContent from "./EquipmentTooltipContent"
import EquipmentDialog from "./EquipmentDialog";
import { EquipmentDialogContent } from "./EquipmentDialogContent";
import { DefaultEquipmentTooltipContent } from "./DefaultEquipmentTooltipContent";
import anyBackground from "../../assets/backgrounds/any.png"
import { generateItem, Item, ItemTemplate } from "../static/items";
import { Equipments, useEquipmentsDispatch } from "../../modules/context/useEquipmentsContext";

interface EquipmentIconButtonProps {
    equipmentType: keyof Equipments
    title: string
    backgroundImage?: string
    items: ItemTemplate[]
    synergisticDependentItems?: (Item | null)[]
}

export const EquipmentIconButton: React.FC<EquipmentIconButtonProps> = ({ equipmentType, title, backgroundImage = anyBackground, items, synergisticDependentItems }) => {

    const equipmentDispatch = useEquipmentsDispatch();
    const [selectedItem, setSelectedItem] = React.useState<Item>(generateItem(items[0], 0, {}));
    const [equippedItem, setEquippedItem] = React.useState<Item | null>(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [synergisticCount, setSynergisticCount] = React.useState(0);
    const handleOpen = () => setOpenDialog(true);
    const handleConfirm = () => {
        setEquippedItem(selectedItem);
        setOpenDialog(false);
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
        if (equippedItem) {
            const count = synergisticDependentItems?.filter((item) => item?.synargisticKey === equippedItem.synargisticKey).length ?? 0;
            setSynergisticCount(count + 1);
        } else {
            setSynergisticCount(0);
        }
    }, [synergisticDependentItems])
    return (
        <>
            <Tooltip content={
                equippedItem ? <EquipmentTooltipContent currentItem={equippedItem} synergisticCount={synergisticCount} title={title} /> : <DefaultEquipmentTooltipContent content={title} />} >
                <IconButton backgroundImage={backgroundImage} image={equippedItem?.icon} onClick={handleOpen} />
            </Tooltip>
            <EquipmentDialog isOpen={openDialog} onConfirm={handleConfirm} onRemove={handleRemove} onCancel={handleCancel} title={title} equippedItem={equippedItem} >
                <EquipmentDialogContent itemTemplates={items} currentItem={selectedItem} setCurrentItem={setSelectedItem} />
            </EquipmentDialog>

        </>
    );
}

export default EquipmentIconButton;