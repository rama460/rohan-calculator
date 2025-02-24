import React, { useRef } from "react";

// ツールチップ内に表示するためのprops
type Props = {
    content: React.ReactNode;
    children: React.ReactNode;
};

export const Tooltip: React.FC<Props> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleMouseEnter = () => {
        if (!ref.current) return;
        ref.current.style.opacity = "1";
        ref.current.style.visibility = "visible";
    };
    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.opacity = "0";
        ref.current.style.visibility = "hidden";
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        ref.current.style.top = `${e.clientY - 50}px`;
        ref.current.style.left = `${e.clientX + 50}px`;
    }
    const contentStyle: React.CSSProperties = {
        position: "fixed",
        opacity: 0,
        visibility: "hidden",
        zIndex: 1000,
    }
    return (
        <div>
            <div style={contentStyle} ref={ref}>
                {props.content}
            </div>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
                {props.children}
            </div>
        </div>
    );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
