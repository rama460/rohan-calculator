import React from "react";

interface IconButtonProps {
    backgroundImage: string;
    image?: string;
    onClick?: () => void;
    width?: number;
    height?: number;
}

const IconButton: React.FC<IconButtonProps> = ({ backgroundImage, image, onClick, width = 32, height = 32 }) => {
    const currentImage = image || backgroundImage;
    const buttonStyle: React.CSSProperties = {
        width: width + 2,
        height: height + 2,
        backgroundImage: `url(${currentImage})`,
        backgroundPosition: "center",
        border: "1px solid black",
        borderRadius: "0",
        cursor: "pointer",
        outline: "none",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
    };

    return <button style={buttonStyle} onClick={onClick} />;
};

export default IconButton;
