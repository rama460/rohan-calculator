import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StatusField from "./StatusField";
import React from "react";
import StatusFieldTitle from "./StatusFieldTitle";


interface StatusPanelProps {
    level: number;
    heroLevel: number;
}

const gainedPoint = (level: number, heroLevel: number) => {
    if (level < 51)
        return (level - 1) * 4;
    else if (level < 71)
        return 196 + (level - 50) * 6;
    else if (level < 101)
        return 196 + 120 + (level - 70) * 8;
    else
        return 196 + 120 + 240 + (level - 100) * 10 + heroLevel * 10;
}


export const StatusPanel: React.FC<StatusPanelProps> = ({ level, heroLevel }) => {
    const [point, setPoint] = React.useState(gainedPoint(level, heroLevel));
    const [str, setStr] = React.useState(0);
    const [sta, setSta] = React.useState(0);
    const [int, setInt] = React.useState(0);
    const [dex, setDex] = React.useState(0);
    const [men, setMen] = React.useState(0);
    const [ins, setIns] = React.useState(0);
    const [metaStr, setMetaStr] = React.useState(0);
    const [metaSta, setMetaSta] = React.useState(0);
    const [metaInt, setMetaInt] = React.useState(0);
    const [metaDex, setMetaDex] = React.useState(0);
    const [metaMen, setMetaMen] = React.useState(0);
    const [metaIns, setMetaIns] = React.useState(0);
    React.useEffect(() => {
        setPoint(gainedPoint(level, heroLevel));
    }, [level, heroLevel]);

    const handleStrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStr(Number(event.target.value));
    }
    const handleStaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSta(Number(event.target.value));
    }
    const handleIntChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInt(Number(event.target.value));
    }
    const handleDexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDex(Number(event.target.value));
    }
    const handleMenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMen(Number(event.target.value));
    }
    const handleInsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIns(Number(event.target.value));
    }
    const handleMetaStrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaStr(Number(event.target.value));
    }
    const handleMetaStaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaSta(Number(event.target.value));
    }
    const handleMetaIntChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaInt(Number(event.target.value));
    }
    const handleMetaDexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaDex(Number(event.target.value));
    }
    const handleMetaMenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaMen(Number(event.target.value));
    }
    const handleMetaInsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaIns(Number(event.target.value));
    }
    return (
        <Grid container columnSpacing={4}>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusFieldTitle />
            </Grid>
            <Grid size={{ md: 6, xs: 0 }}>
                <StatusFieldTitle />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="力" value={str + metaStr} onBaseChange={handleStrChange} onMetaChange={handleMetaStrChange} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="体力" value={sta + metaSta} onBaseChange={handleStaChange} onMetaChange={handleMetaStaChange} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="知能" value={int + metaInt} onBaseChange={handleIntChange} onMetaChange={handleMetaIntChange} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="敏捷性" value={dex + metaDex} onBaseChange={handleDexChange} onMetaChange={handleMetaDexChange} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="精神力" value={men + metaMen} onBaseChange={handleMenChange} onMetaChange={handleMetaMenChange} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="瞬発力" value={ins + metaIns} onBaseChange={handleInsChange} onMetaChange={handleMetaInsChange} />
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
                        value={point - str - sta - int - dex - men - ins}
                        sx={{ width: "100px", }}
                        slotProps={{ htmlInput: { min: 0, readOnly: true } }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}
export default StatusPanel;