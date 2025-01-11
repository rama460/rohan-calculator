import { Box, TextField, Typography } from "@mui/material";

interface StatusFieldProps {
    name: string;
    value: number;
    onBaseChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMetaChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StatusField: React.FC<StatusFieldProps> = ({ name, value, onBaseChange, onMetaChange }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
            <Typography variant="body1" sx={{ textAlign: "center", width: "60px" }}>
                {name}
            </Typography>
            <TextField
                type="number"
                size="small"
                defaultValue={0}
                sx={{ width: "100px", }}
                slotProps={{ htmlInput: { min: 0 } }}
                onChange={onBaseChange}
            />
            <TextField
                type="number"
                size="small"
                defaultValue={0}
                sx={{ width: "100px", }}
                slotProps={{ htmlInput: { min: 0 } }}
                onChange={onMetaChange}
            />
            <TextField
                type="number"
                size="small"
                value={value}
                sx={{ width: "100px", }}
            />
        </Box>
    );
}
export default StatusField;