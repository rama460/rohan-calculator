import { Item } from "./EquipmentIconButton";
import { EquipmentTooltipContentRowProps, EquipmentTooltipContentRow } from "./EquipmentTooltipContentRow";

interface EquipmentTooltipContentProps {
    currentItem: Item
}

export const EquipmentTooltipContent: React.FC<EquipmentTooltipContentProps> = ({ currentItem }) => {
    const style = {
        opacity: 0.5,
        backgroundColor: "black",
        border: "solid",
        width: "max-content",
    }
    const rows: EquipmentTooltipContentRowProps[] = [
        {
            value: currentItem.name,
            color: "red",
        },
        {
            value: "スタッフ",
            color: "white",
        },
        {
            name: "可能種族",
            value: "E, HE",
            color: "white",
        },
    ]
    console.log(rows);
    return (
        <div style={style}>
            {rows.map((row) => (
                <EquipmentTooltipContentRow {...row} />
            ))}
        </div>
    );
}
export default EquipmentTooltipContent; 