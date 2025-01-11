import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { races } from "../static/racs";

interface BasePanelProps {
    level: number;
    heroLevel: number;
    raceid: string;
    jobid: string;
    setLevel: (level: number) => void;
    setHeroLevel: (heroLevel: number) => void;
    setRaceid: (raceid: string) => void;
    setJobid: (jobid: string) => void;
}


export const BasePanel: React.FC<BasePanelProps> = ({ level, heroLevel, raceid, jobid, setLevel, setHeroLevel, setRaceid, setJobid }) => {
    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceid(event.target.value as string);
    }
    const handleJobChange = (event: SelectChangeEvent) => {
        setJobid(event.target.value as string);
    }

    return (
        <React.Fragment>
            <Box display="flex" alignItems="center" gap={2}>
                <Box display="flex" alignItems="center" gap={2}>
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
                        }}
                    />
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
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
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="body1" sx={{ textAlign: "left" }}>
                        種族:
                    </Typography>
                    <FormControl fullWidth size="small" sx={{ margin: "10px" }}>
                        <InputLabel id="demo-simple-select-label">Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={raceid}
                            label="Name"
                            onChange={handleRaceChange}
                        >
                            {races.map((race) => (
                                <MenuItem value={race.id}>{race.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="body1" sx={{ textAlign: "left" }}>
                        職業:
                    </Typography>
                    <FormControl fullWidth size="small" sx={{ margin: "10px" }}>
                        <InputLabel id="demo-simple-select-label">Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={jobid}
                            label="Name"
                            disabled={level < 50}
                            onChange={handleJobChange}
                        >
                            {races[Number(raceid)].jobs.map((job) => (
                                <MenuItem value={job.id}>{job.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
        </React.Fragment>
    );
}
export default BasePanel;