import React from "react";
import { OptionOperationType } from "../../static/options";


export type EquipmentTooltipContentRowProps = {
    name?: string;
    value: string;
    color?: string;
    operationType?: OptionOperationType;
}

export const EquipmentTooltipContentRow: React.FC<EquipmentTooltipContentRowProps> = ({ name, value, color = "white", operationType }) => {
    const style: React.CSSProperties = {
        color: `${color}`,
        textAlign: "center",
    }
    return (
        <div style={style}>
            {name !== undefined ? (<>{name}: </>) : (<></>)}
            {(operationType === undefined || operationType === "absolute") ? value : (
                operationType === "multiply" ? `${value}%` : `+${value}`
            )}<br />
        </div>
    );
}

export default EquipmentTooltipContentRow;