import React, { useEffect } from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import EquipmentTooltipContent from "./EquipmentTooltipContent"
import EquipmentDialog from "./EquipmentDialog";
import { EquipmentDialogContent } from "./EquipmentDialogContent";
import { DefaultEquipmentTooltipContent } from "./DefaultEquipmentTooltipContent";
import anyBackground from "../../assets/backgrounds/any.png"
import { generateItem, Item, ItemTemplate } from "../static/items";

interface EquipmentIconButtonProps {
    equipmentType: string
    backgroundImage?: string
    equippedItem: Item | null
    setEquippedItem: (item: Item | null) => void
    items: ItemTemplate[]
    synergisticDependentItems?: (Item | null)[]
}

export const EquipmentIconButton: React.FC<EquipmentIconButtonProps> = ({ equipmentType, backgroundImage = anyBackground, equippedItem, setEquippedItem, items, synergisticDependentItems }) => {

    const [selectedItem, setSelectedItem] = React.useState<Item>(generateItem(items[0], 0, []));
    const [openDialog, setOpenDialog] = React.useState(false);
    const [synergisticCount, setSynergisticCount] = React.useState(0);
    const handleOpen = () => setOpenDialog(true);
    const handleConfirm = () => {
        setEquippedItem(selectedItem);
        setOpenDialog(false);
    }
    const handleRemove = () => {
        setEquippedItem(null);
        setOpenDialog(false);
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
                equippedItem ? <EquipmentTooltipContent currentItem={equippedItem} synergisticCount={synergisticCount} /> : <DefaultEquipmentTooltipContent content={equipmentType} />} >
                <IconButton backgroundImage={backgroundImage} image={equippedItem?.icon} onClick={handleOpen} />
            </Tooltip>
            <EquipmentDialog isOpen={openDialog} onConfirm={handleConfirm} onRemove={handleRemove} onCancel={handleCancel} equipmentType={equipmentType} equippedItem={equippedItem} >
                <EquipmentDialogContent itemTemplates={items} currentItem={selectedItem} setCurrentItem={setSelectedItem} />
            </EquipmentDialog>

        </>
    );
}

export default EquipmentIconButton;