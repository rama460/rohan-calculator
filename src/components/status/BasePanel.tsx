import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React from "react";
import { races } from "../../static/races";
import { titles } from "../../static/titles";
import Tooltip from "../common/Tooltip";
import TitleTooltipContent from "./TitleTooltipContent";
import { useAtom } from "jotai";
import {
    uiBaseAtomFamily,
    uiBuffsAtomFamily,
    uiTitleAtom,
} from "../../modules/state/ui";
import { skills } from "../../static/skills/skill";

export const BasePanel: React.FC = () => {
    const [level, setLevel] = useAtom(uiBaseAtomFamily("level"));
    const [heroLevel, setHeroLevel] = useAtom(uiBaseAtomFamily("heroLevel"));
    const [raceid, setRaceid] = useAtom(uiBaseAtomFamily("raceid"));
    const [jobid, setJobid] = useAtom(uiBaseAtomFamily("jobid"));
    const [title, setTitle] = useAtom(uiTitleAtom);
    const [buffStatuses, setBuffStatuses] = useAtom(uiBuffsAtomFamily("Self"));
    const numericLevel = Number(level);
    const numericHeroLevel = Number(heroLevel);
    const numericRaceid = Number(raceid);
    const numericJobid = Number(jobid);
    const titleName = String(title);
    const handleRaceChange = (event: SelectChangeEvent) => {
        setRaceid(Number(event.target.value as string));
        // unset all buffs
        setBuffStatuses([])
    }
    const handleJobChange = (event: SelectChangeEvent) => {
        setJobid(Number(event.target.value as string));
        // unset all buffs associated with the job, but remain the base job buffs (jobid = 0) 
        setBuffStatuses([...buffStatuses.filter((b) => {
            const skillSpec = skills.find(skill => skill.name === b.name)
            if (!skillSpec) {
                return false;
            }
            return skillSpec.raceid === numericRaceid && (skillSpec.jobid === Number(event.target.value) || skillSpec.jobid === 0);;
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
                        value={numericLevel}
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
                        value={numericLevel == 115 ? numericHeroLevel : 0}
                        disabled={numericLevel < 115}
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
                            value={numericRaceid.toString()}
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
                            value={numericJobid.toString()}
                            disabled={numericLevel < 50}
                            onChange={handleJobChange}
                        >
                            {races[numericRaceid].jobs.map((job) => (
                                <MenuItem key={job.id} value={job.id}>{job.displayName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" sx={{ textAlign: "left", width: "48px" }}>
                        称号:
                    </Typography>
                    <Tooltip content={<TitleTooltipContent title={titleName} />}>
                        <FormControl size="small" sx={{ "& .MuiInputBase-input": { fontSize: 10, height: 5, padding: 1 } }} >
                            <Select
                                defaultValue="none"
                                value={titleName}
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
