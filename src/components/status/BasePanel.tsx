import { Box, Checkbox, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { races } from "../static/races";
import Grid from "@mui/material/Grid2";
import { useStatusesDispatch } from "../../modules/context/useStatusesContext";
import { useBasesDispatch } from "../../modules/context/useBasesContext";
import { titles } from "../static/titles";
import useQueryObject from "../../modules/context/useQueryState";
import Tooltip from "../common/Tooltip";
import TitleTooltipContent from "./TitleTooltipContent";

interface BasePanelProps {
}


export const BasePanel: React.FC<BasePanelProps> = () => {

    const [level, setLevel] = useQueryObject("level", 115);
    const [heroLevel, setHeroLevel] = useQueryObject("heroLevel", 50);
    const [raceid, setRaceid] = useQueryObject("raceid", 0);
    const [jobid, setJobid] = useQueryObject("jobid", 0);
    const [transcended, setTranscended] = React.useState(false);
    const [title, setTitle] = useQueryObject("title", "none");

    const basesDispatch = useBasesDispatch();
    const statusesDispatch = useStatusesDispatch();
    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceid(Number(event.target.value as string));
    }
    const handleJobChange = (event: SelectChangeEvent) => {
        setJobid(Number(event.target.value as string));
    }
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLevel(Number(event.target.value));
        if (Number(event.target.value) < 115) {
            setHeroLevel(0);
        }
        if (Number(event.target.value) < 50) {
            setJobid(0);
        }
    }
    const handleHeroLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeroLevel(Number(event.target.value));
    }
    useEffect(() => {
        statusesDispatch({ type: "UPDATE_INITIAL", value: races[raceid].initialStatus });
        basesDispatch({ type: "SET_RACEID", raceid: raceid });
    }, [raceid])
    useEffect(() => {
        basesDispatch({ type: "SET_JOBID", jobid: jobid });
    }, [jobid])
    useEffect(() => {
        basesDispatch({ type: "SET_LEVEL", level: level });
    }, [level])
    useEffect(() => {
        basesDispatch({ type: "SET_HERO_LEVEL", heroLevel: heroLevel });
    }, [heroLevel])
    useEffect(() => {
        basesDispatch({ type: "SET_TITLE", title: title });
    }, [title])
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
                            value={level}
                            sx={{ width: "80px", }}
                            slotProps={{ htmlInput: { min: 1, max: 115 } }}
                            onChange={handleLevelChange}
                        />
                        <Typography variant="body1" sx={{ textAlign: "left" }}>
                            征服者レベル:
                        </Typography>
                        <TextField
                            type="number"
                            size="small"
                            value={level == 115 ? heroLevel : 0}
                            disabled={level < 115}
                            sx={{ width: "80px", }}
                            slotProps={{ htmlInput: { min: 0, max: 50 } }}
                            onChange={handleHeroLevelChange}
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
                                    <MenuItem key={race.id} value={race.id}>{race.displayName}</MenuItem>
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
                                    <MenuItem key={job.id} value={job.id}>{job.displayName}</MenuItem>
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
                        <Tooltip content={<TitleTooltipContent title={title} />}>
                            <FormControl size="small" >
                                <Select
                                    defaultValue="none"
                                    value={title}
                                    onChange={(event) => {
                                        setTitle(event.target.value as string)
                                    }}
                                >
                                    <MenuItem key={-1} value="none">なし</MenuItem>
                                    {
                                        titles.map((title, index) => (
                                            <MenuItem key={index} value={title.name}>{title.displayName}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment >
    );
}
export default BasePanel;