import { Box, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StatusField from "./StatusField";
import React from "react";
import StatusFieldTitle from "./StatusFieldTitle";
import { races } from "../static/racs";
import { OptionContext } from "../../modules/context/CharactorContext";


interface StatusPanelProps {
    level: number;
    heroLevel: number;
    raceid: number;
    options: OptionContext;
    skills: OptionContext;
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


export const StatusPanel: React.FC<StatusPanelProps> = ({ level, heroLevel, raceid, options, skills }) => {
    const [point, setPoint] = React.useState(gainedPoint(level, heroLevel));
    const [strength, setStrength] = React.useState(0);
    const [vitality, setVitality] = React.useState(0);
    const [intelligence, setIntelligence] = React.useState(0);
    const [agility, setAgility] = React.useState(0);
    const [mentality, setMentality] = React.useState(0);
    const [dexterity, setDexterity] = React.useState(0);
    const [metaStrength, setMetaStrength] = React.useState(0);
    const [metaVitality, setMetaVitality] = React.useState(0);
    const [metaIntelligence, setMetaIntelligence] = React.useState(0);
    const [metaAgility, setMetaAgility] = React.useState(0);
    const [metaMentality, setMetaMentality] = React.useState(0);
    const [metaDexterity, setMetaDexterity] = React.useState(0);
    React.useEffect(() => {
        setPoint(gainedPoint(level, heroLevel));
    }, [level, heroLevel]);

    const handleStrengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStrength(Number(event.target.value));
    }
    const handleVitalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVitality(Number(event.target.value));
    }
    const handleIntelligenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIntelligence(Number(event.target.value));
    }
    const handleAgilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgility(Number(event.target.value));
    }
    const handleMentalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMentality(Number(event.target.value));
    }
    const handleDexterityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDexterity(Number(event.target.value));
    }
    const handleMetaStrengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaStrength(Number(event.target.value));
    }
    const handleMetaVitalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaVitality(Number(event.target.value));
    }
    const handleMetaIntelligenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaIntelligence(Number(event.target.value));
    }
    const handleMetaAgilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaAgility(Number(event.target.value));
    }
    const handleMetaMentalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaMentality(Number(event.target.value));
    }
    const handleMetaDexterityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMetaDexterity(Number(event.target.value));
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
                <StatusField name="力"
                    value={(strength + metaStrength + races[Number(raceid)].initialStatus.strength + options.plusAllOption + options.plusStrength) * ((100 + options.multiplyStrength + skills.multiplyStrength + skills.multiplyAllOption) / 100)}
                    onBaseChange={handleStrengthChange}
                    onMetaChange={handleMetaStrengthChange}
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="体力"
                    value={(vitality + metaVitality + races[Number(raceid)].initialStatus.vitality + options.plusAllOption + options.plusVitality) * ((100 + options.multiplyVitality + skills.multiplyVitality + skills.multiplyAllOption) / 100)}
                    onBaseChange={handleVitalityChange}
                    onMetaChange={handleMetaVitalityChange}
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="知能"
                    value={(intelligence + metaIntelligence + races[Number(raceid)].initialStatus.intelligence + options.plusAllOption + options.plusIntelligence) * (100 + options.multiplyIntelligence + skills.multiplyIntelligence + skills.multiplyAllOption) / 100}
                    onBaseChange={handleIntelligenceChange}
                    onMetaChange={handleMetaIntelligenceChange}
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="敏捷性"
                    value={(agility + metaAgility + races[Number(raceid)].initialStatus.agility + options.plusAllOption + options.plusAgility) * (100 + options.multiplyAgility + skills.multiplyAgility + skills.multiplyAllOption) / 100}
                    onBaseChange={handleAgilityChange}
                    onMetaChange={handleMetaAgilityChange}
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="精神力"
                    value={(mentality + metaMentality + races[Number(raceid)].initialStatus.mentality + options.plusAllOption + options.plusMentality) * (100 + options.multiplyMentality + skills.multiplyMentality + skills.multiplyAllOption) / 100}
                    onBaseChange={handleMentalityChange}
                    onMetaChange={handleMetaMentalityChange}
                />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <StatusField name="瞬発力"
                    value={(dexterity + metaDexterity + races[Number(raceid)].initialStatus.dexterity + options.plusAllOption + options.plusDexterity) * (100 + options.multiplyDexterity + skills.multiplyDexterity + skills.multiplyAllOption) / 100}
                    onBaseChange={handleDexterityChange}
                    onMetaChange={handleMetaDexterityChange}
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
                        value={point - strength - vitality - intelligence - agility - mentality - dexterity}
                        sx={{ width: "100px", }}
                        slotProps={{ htmlInput: { min: 0, readOnly: true } }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}
export default StatusPanel;