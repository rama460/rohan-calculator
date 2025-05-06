import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { races } from "../static/races";
import { titles } from "../static/titles";
import Tooltip from "../common/Tooltip";
import TitleTooltipContent from "./TitleTooltipContent";
import { useAtom } from "jotai";
import { baseOptionStateFamily, titleNameState } from "../../modules/state/bases";
import { buffStateFamily } from "../../modules/state/skills";
import { skills } from "../static/skill";

interface BasePanelProps {
}


export const BasePanel: React.FC<BasePanelProps> = () => {
    console.log("render BasePanel");
    const [level, setLevel] = useAtom(baseOptionStateFamily("level"));
    const [heroLevel, setHeroLevel] = useAtom(baseOptionStateFamily("heroLevel"));
    const [raceid, setRaceid] = useAtom(baseOptionStateFamily("raceid"));
    const [jobid, setJobid] = useAtom(baseOptionStateFamily("jobid"));
    const [title, setTitle] = useAtom(titleNameState);
    const [buffStatuses, setBuffStatuses] = useAtom(buffStateFamily("Self"));
    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceid(Number(event.target.value as string));
        // unset all buffs
        setBuffStatuses([])
    }
    const handleJobChange = (event: SelectChangeEvent) => {
        console.log("job changed")
        setJobid(Number(event.target.value as string));
        // unset all buffs associated with the job, but remain the base job buffs (jobid = 0) 
        setBuffStatuses([...buffStatuses.filter((b) => {
            const skillSpec = skills.find(skill => skill.name === b.name)
            if (!skillSpec) {
                return false;
            }
            return skillSpec.raceid === raceid && (skillSpec.jobid === Number(event.target.value) || skillSpec.jobid === 0);;
        })]);
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
    return (
        <React.Fragment>
            <Box display="flex" alignItems="center" justifyContent={"space-between"}>
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" sx={{ textAlign: "left" }}>
                        Lv:
                    </Typography>
                    <TextField
                        type="number"
                        size="small"
                        value={level}
                        sx={{ width: "50px", "& .MuiInputBase-input": { fontSize: 10, height: 4, padding: 1 } }}
                        slotProps={{ htmlInput: { min: 1, max: 115 } }}
                        onChange={handleLevelChange}
                    />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" sx={{ textAlign: "left" }}>
                        征服者Lv:
                    </Typography>

                    <TextField
                        type="number"
                        size="small"
                        value={level == 115 ? heroLevel : 0}
                        disabled={level < 115}
                        sx={{ width: "50px", "& .MuiInputBase-input": { fontSize: 10, height: 4, padding: 1 } }}
                        slotProps={{ htmlInput: { min: 0, max: 50 } }}
                        onChange={handleHeroLevelChange}
                    />
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" sx={{ textAlign: "left" }}>
                        種族:
                    </Typography>
                    <FormControl size="small" sx={{ "& .MuiInputBase-input": { fontSize: 10, height: 4, padding: 1 } }}>
                        <Select
                            value={raceid.toString()}
                            onChange={handleRaceChange}
                        >
                            {races.map((race) => (
                                <MenuItem key={race.id} value={race.id}>{race.displayName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" sx={{ textAlign: "left" }}>
                        職業:
                    </Typography>
                    <FormControl size="small" sx={{ "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }}>
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
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" sx={{ textAlign: "left", width: "48px" }}>
                        称号:
                    </Typography>
                    <Tooltip content={<TitleTooltipContent title={title} />}>
                        <FormControl size="small" sx={{ "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }} >
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
            </Box>
        </React.Fragment >
    );
}
export default BasePanel;