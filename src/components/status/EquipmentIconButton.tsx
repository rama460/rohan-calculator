import React from "react";
import IconButton from "../common/IconButton"
import Tooltip from "../common/Tooltip"
import EquipmentTooltipContent from "./EquipmentTooltipContent"
import EquipmentDialog from "./EquipmentDialog";
import { TalismanDialogContent } from "./TalismanDialogContent";
import { DefaultEquipmentTooltipContent } from "./DefaultEquipmentTooltipContent";
import dagger from "../../assets/items/sample.jpg"
import anyBackground from "../../assets/backgrounds/any.png"
const talismans = [
    {
        id: 1,
        name: "Talisman 1",
        value: 1,
        baseOptions: [
            { name: "Option 1", value: 1 },
            { name: "Option 2", value: 2 },
        ],
        additionalOptions: [],
        customOptions: [],
        icon: dagger,
    },
    {
        id: 2,
        name: "Talisman 2",
        value: 2,
        baseOptions: [
            { name: "Option 4", value: 4 },
            { name: "Option 5", value: 5 },
        ],
        additionalOptions: [],
        customOptions: [],
        icon: dagger,
    },
    {
        id: 3,
        name: "Talisman 3",
        value: 3,
        baseOptions: [
            { name: "Option 7", value: 7 },
            { name: "Option 8", value: 8 },
        ],
        additionalOptions: [],
        customOptions: [],
        icon: dagger,
    },
]

export type Item = {
    id: number;
    name: string;
    value: number;
    baseOptions: {
        name: string;
        value: number;
    }[];
    additionalOptions: {
        name: string;
        value: number;
    }[];
    customOptions: {
        name: string;
        value: number;
    }[];
    icon: string;
}
interface EquipmentIconButtonProps {
    equipmentType: string
    backgroudImage?: string
    equippedItem: Item | null
    setEquippedItem: (item: Item | null) => void
}

export const EquipmentIconButton: React.FC<EquipmentIconButtonProps> = ({ equipmentType, backgroudImage = anyBackground, equippedItem, setEquippedItem }) => {
    // 
    const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleOpen = () => setOpenDialog(true);
    const handleConfirm = () => {
        setEquippedItem(selectedItem);
        setOpenDialog(false);
    }
    const handleCancel = () => {
        // FIXME: cancelするとダイアログが閉じる前に一瞬表示データが戻ってしまう
        setOpenDialog(false);
        setSelectedItem(equippedItem);
    }

    return (
        <>
            <Tooltip content={
                equippedItem ? <EquipmentTooltipContent currentItem={equippedItem} /> : <DefaultEquipmentTooltipContent content={equipmentType} />} >
                <IconButton backgroundImage={backgroudImage} image={equippedItem?.icon} onClick={handleOpen} />
            </Tooltip>
            <EquipmentDialog isOpen={openDialog} onConfirm={handleConfirm} onCancel={handleCancel} equipmentType={equipmentType} >
                <TalismanDialogContent items={talismans} currentItem={selectedItem} setCurrentItem={setSelectedItem} />
            </EquipmentDialog>

        </>
    );
}

export default EquipmentIconButton;