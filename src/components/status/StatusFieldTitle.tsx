import { Box, Typography } from "@mui/material"

export const StatusFieldTitle: React.FC = () => {
    return (

        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
            <Typography variant="body1" sx={{ textAlign: "center", width: "60px" }}>

            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", width: "100px" }}>
                基本
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", width: "100px" }}>
                超越
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", width: "100px" }}>
                実際
            </Typography>
        </Box>
    )
}

export default StatusFieldTitle;