import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StatusField from "./StatusField";
import React from "react";
import StatusFieldTitle from "./StatusFieldTitle";
import { useAtomValue } from "jotai";
import { remainingPointsState } from "../../modules/state/statuses";


export const StatusPanel: React.FC = ({ }) => {
    console.log("render StatusPanel");
    const remainingPoints = useAtomValue(remainingPointsState);

    return (
        <Grid container columnSpacing={4}>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusFieldTitle />
            </Grid>
            <Grid size={{ md: 6, xs: 0 }}>
                <StatusFieldTitle />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="strength" displayName="力"
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="vitality" displayName="体力"
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="intelligence" displayName="知能"
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="agility" displayName="敏捷性"
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="mentality" displayName="精神力"
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="dexterity" displayName="瞬発力"
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <Box display="flex" alignItems="center" justifyContent={"space-between"} gap={2}>
                    <Typography variant="body1" sx={{ textAlign: "left" }}>
                        POINT
                    </Typography>
                    <TextField
                        type="number"
                        size="small"
                        value={remainingPoints}
                        sx={{ width: "100px", }}
                        slotProps={{ htmlInput: { min: 0, readOnly: true } }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}
export default StatusPanel;