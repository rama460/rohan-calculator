import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { races } from "../static/racs";
import Grid from "@mui/material/Grid2";
interface BasePanelProps {
    level: number;
    heroLevel: number;
    raceid: number;
    jobid: number;
    setLevel: (level: number) => void;
    setHeroLevel: (heroLevel: number) => void;
    setRaceid: (raceid: number) => void;
    setJobid: (jobid: number) => void;
}


export const BasePanel: React.FC<BasePanelProps> = ({ level, heroLevel, raceid, jobid, setLevel, setHeroLevel, setRaceid, setJobid }) => {
    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceid(Number(event.target.value as string));
    }
    const handleJobChange = (event: SelectChangeEvent) => {
        setJobid(Number(event.target.value as string));
    }

    return (
        <React.Fragment>
            <Grid container columnSpacing={2}>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Box display="flex" alignItems="center" justifyContent={"space-between"}>
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            Lv:
                        </Typography>
                        <TextField
                            type="number"
                            size="small"
                            defaultValue={115}
                            sx={{ width: "80px", }}
                            slotProps={{ htmlInput: { min: 1, max: 115 } }}
                            onChange={(event) => {
                                setLevel(Number(event.target.value));
                                if (Number(event.target.value) < 50) {
                                    setJobid(0);
                                }
                            }}
                        />
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            征服者レベル:
                        </Typography>
                        <TextField
                            type="number"
                            size="small"
                            defaultValue={50}
                            value={heroLevel}
                            sx={{ width: "80px", }}
                            slotProps={{ htmlInput: { min: 0, max: 50 } }}
                            onChange={(event) => {
                                setHeroLevel(Number(event.target.value));
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Box display="flex" alignItems="center" justifyContent={"space-between"}>
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            種族:
                        </Typography>
                        <FormControl size="small">
                            <Select
                                value={raceid.toString()}
                                onChange={handleRaceChange}
                            >
                                {races.map((race) => (
                                    <MenuItem value={race.id}>{race.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            職業:
                        </Typography>
                        <FormControl size="small">
                            <Select
                                value={jobid.toString()}
                                disabled={level < 50}
                                onChange={handleJobChange}
                            >
                                {races[Number(raceid)].jobs.map((job) => (
                                    <MenuItem value={job.id}>{job.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="body1" sx={{ textAlign: "left", width: "48px" }}>
                            称号:
                        </Typography>
                        <FormControl size="small" >
                            <Select
                                value={jobid}
                            >
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default BasePanel;