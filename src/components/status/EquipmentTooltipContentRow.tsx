import React from "react";
import { OptionUnit } from "../static/options";


export type EquipmentTooltipContentRowProps = {
    name?: string;
    value: string;
    color?: string;
    unit?: OptionUnit;
}

export const EquipmentTooltipContentRow: React.FC<EquipmentTooltipContentRowProps> = ({ name, value, color = "white", unit }) => {
    const style: React.CSSProperties = {
        color: `${color}`,
        textAlign: "center",
    }
    return (
        <div style={style}>
            {name !== undefined ? (<>{name}: </>) : (<></>)}
            {unit === undefined ? value : (
                unit == "percent" ? `${value}%` : `+${value}`
            )}<br />
        </div>
    );
}

export default EquipmentTooltipContentRow;