import { Box, Typography } from "@mui/material";

interface BuffTooltipContentProps {
    name: string;
    descriptions: string[];
    level: number;
}

export const BuffTooltipContent: React.FC<BuffTooltipContentProps> = ({ name, descriptions, level }) => {
    const style: React.CSSProperties = {
        opacity: 0.8,
        backgroundColor: "black",
        border: "solid",
        width: "max-content",
    }
    const contentStyle: React.CSSProperties = {
        color: "white",
        textAlign: "left",
    }
    return (
        <Box style={style}>
            <Box style={contentStyle}>
                <Typography variant="body1">
                    {name}
                </Typography>
                {descriptions.map((description, index) => (
                    level === index + 1 ? <Typography variant="body2" sx={
                        {
                            textDecoration: "underline",
                            fontWeight: "bold",

                        }
                    }>{description}</Typography> :
                        <Typography variant="body2">{description}</Typography>
                ))}
            </Box>
        </Box>
    );
}

export default BuffTooltipContent;