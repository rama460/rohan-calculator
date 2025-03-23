import Grid from "@mui/material/Grid2";
import { BuiltinOptionKeys } from "../static/options";
import DetailParameterField from "./DetailParameterField";

export const DetailPanel = () => {
    return (
        <Grid container columnSpacing={4}>
            {BuiltinOptionKeys.filter((option) => option !== "none").map((option, index) => {
                return (
                    <Grid size={{ md: 6, xs: 12 }} key={index}>
                        <DetailParameterField name={option} />
                    </Grid>
                );
            }
            )}
        </Grid>

    );
}