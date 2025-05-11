import { Box, Typography } from "@mui/material";
import React from "react";

interface BorderedTitleBoxProps {
    title: string;
    children: React.ReactNode;
}

const BorderedTitleBox: React.FC<BorderedTitleBoxProps> = ({ title, children }) => {
    return (
        <Box sx={{ border: "1px solid black", width: "100%", margin: "10px", padding: "10px" }}>
            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                {title}
            </Typography>
            {children}
        </Box>

    );
}
export default BorderedTitleBox;