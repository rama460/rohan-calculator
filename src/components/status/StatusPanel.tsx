import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StatusField from "./StatusField";
import React from "react";
import StatusFieldTitle from "./StatusFieldTitle";
import { Statuses, StatusType, useStatusesContext } from "../../modules/context/useStatusesContext";
import { useBasesContext } from "../../modules/context/useBasesContext";


interface StatusPanelProps {
}

const gainedPoint = (level: number, heroLevel: number, statuses: Statuses) => {
    const used = Object.keys(statuses).reduce((acc, key) => (
        acc + statuses[key as StatusType].base
    ), 0);
    if (level < 51)
        return (level - 1) * 4 - used;
    else if (level < 71)
        return 196 + (level - 50) * 6 - used;
    else if (level < 101)
        return 196 + 120 + (level - 70) * 8 - used;
    else
        return 196 + 120 + 240 + (level - 100) * 10 + heroLevel * 10 - used;
}


export const StatusPanel: React.FC<StatusPanelProps> = ({ }) => {
    const statuses = useStatusesContext();
    const bases = useBasesContext();
    const [point, setPoint] = React.useState(gainedPoint(bases.level, bases.heroLevel, statuses));
    React.useEffect(() => {
        setPoint(gainedPoint(bases.level, bases.heroLevel, statuses));
    }, [bases.level, bases.heroLevel, statuses]);

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
                        defaultValue={0}
                        value={point}
                        sx={{ width: "100px", }}
                        slotProps={{ htmlInput: { min: 0, readOnly: true } }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}
export default StatusPanel;