import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BuiltinOptionKeys, BuiltinOptionKeyType, BuiltinOptions, getDisplayOptionName } from "../../static/options";
import { OptionMap } from "../../modules/character/types";

type DetailOptionDisplayFieldProps = {
    name: BuiltinOptionKeyType;
    value: number;
};

export const DetailOptionDisplayField: React.FC<DetailOptionDisplayFieldProps> = ({ name, value }) => {
    const option = BuiltinOptions[name];

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
            <Typography variant="caption" sx={{ textAlign: "left" }}>
                {getDisplayOptionName(option)}
            </Typography>
            <TextField
                type="number"
                size="small"
                value={value}
                sx={{ width: "120px", "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }}
                slotProps={{ htmlInput: { min: 0, readOnly: true } }}
            />
        </Box>
    );
};

type DetailOptionsViewProps = {
    options: OptionMap;
};

export const DetailOptionsView: React.FC<DetailOptionsViewProps> = ({ options }) => (
    <Grid container columnSpacing={4}>
        {BuiltinOptionKeys.filter((option) => option !== "none").map((option) => (
            <Grid size={{ md: 6, xs: 12 }} key={option}>
                <DetailOptionDisplayField
                    name={option}
                    value={options[option] ?? 0}
                />
            </Grid>
        ))}
    </Grid>
);
