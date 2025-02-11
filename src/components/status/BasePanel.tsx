import { Box, Checkbox, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { races } from "../static/races";
import Grid from "@mui/material/Grid2";
import { useStatusesDispatch } from "../../modules/context/useStatusesContext";
import { useBasesDispatch } from "../../modules/context/useBasesContext";

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
    const [transcended, setTranscended] = React.useState(false);
    const basesDispatch = useBasesDispatch();
    const statusesDispatch = useStatusesDispatch();
    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceid(Number(event.target.value as string));
        statusesDispatch({ type: "UPDATE_INITIAL", value: races[Number(event.target.value)].initialStatus });
        basesDispatch({ type: "SET_RACEID", raceid: Number(event.target.value) });
    }
    const handleJobChange = (event: SelectChangeEvent) => {
        setJobid(Number(event.target.value as string));
        basesDispatch({ type: "SET_JOBID", jobid: Number(event.target.value) });
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
                                basesDispatch({ type: "SET_LEVEL", level: Number(event.target.value) });
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
                            value={level == 115 ? heroLevel : 0}
                            disabled={level < 115}
                            sx={{ width: "80px", }}
                            slotProps={{ htmlInput: { min: 0, max: 50 } }}
                            onChange={(event) => {
                                setHeroLevel(Number(event.target.value));
                                basesDispatch({ type: "SET_HERO_LEVEL", heroLevel: Number(event.target.value) });
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
                                    <MenuItem value={race.id}>{race.displayName}</MenuItem>
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
                                    <MenuItem value={job.id}>{job.displayName}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid size={{ md: 6, xs: 12 }}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="body1" sx={{ textAlign: "left", width: "48px" }}>
                            超越者:
                        </Typography>
                        <Checkbox
                            disabled={level < 115 || heroLevel < 50}
                            checked={(level < 115 || heroLevel < 50) ? false : transcended}
                            onChange={() => {
                                setTranscended(!transcended)
                                basesDispatch({ type: "SET_TRANSCENDED", transcended: !transcended });
                            }}
                        />
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