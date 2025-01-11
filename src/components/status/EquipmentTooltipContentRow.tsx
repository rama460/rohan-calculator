import React from "react";


export type EquipmentTooltipContentRowProps = {
    name?: string;
    value: string;
    color?: string;
}

export const EquipmentTooltipContentRow: React.FC<EquipmentTooltipContentRowProps> = ({ name, value, color = "white" }) => {
    const style: React.CSSProperties = {
        color: `${color}`,
        textAlign: "center",
    }
    return (
        <div style={style}>
            {name !== undefined ? (<>{name}: </>) : (<></>)}{value}<br />
        </div>
    );
}

export default EquipmentTooltipContentRow;