import Grid from "@mui/material/Grid2";
import { skills } from "../static/skill";
import { useAtomValue } from "jotai";
import { jobidState, raceidState } from "../../modules/state/bases";
import { BuffGroup } from "./BuffGroup";
interface BuffPanelProps {
}

export const BuffPanel: React.FC<BuffPanelProps> = () => {
    console.log("render BuffPanel");
    const raceid = useAtomValue(raceidState);
    const jobid = useAtomValue(jobidState);
    const selfBuffs = skills.filter(skill => skill.origin === "Self" && skill.raceid === raceid && (skill.jobid === jobid || skill.jobid === 0));
    const groupBuff = skills.filter(skill => skill.origin === "Group");
    const cashBuff = skills.filter(skill => skill.origin === "Cash");
    const guildBuff = skills.filter(skill => skill.origin === "Guild");
    return (
        <Grid container spacing={4}>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup buffOrigin="Self" buffs={selfBuffs} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup buffOrigin="Group" buffs={groupBuff} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup buffOrigin="Cash" buffs={cashBuff} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup buffOrigin="Guild" buffs={guildBuff} />
            </Grid>
        </Grid >
    )
}

export default BuffPanel;