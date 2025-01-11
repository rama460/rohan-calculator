
export type DefaultEquipmentTooltipContentProps = {
    content: string;
};

export const DefaultEquipmentTooltipContent: React.FC<DefaultEquipmentTooltipContentProps> = ({ content }) => {
    const style = {
        opacity: 0.5,
        backgroundColor: "black",
        border: "solid",
        width: "max-content",
    }

    const contentStyle: React.CSSProperties = {
        color: "white",
        textAlign: "center",
    }
    return (
        <div style={style} >
            <div style={contentStyle}>
                {content}
            </div>
        </div>
    );
};


export default DefaultEquipmentTooltipContent;