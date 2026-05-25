import Grid from "@mui/material/Grid2";
import { skills } from "../../static/skills/skill";
import { useAtomValue } from "jotai";
import { compatibleBaseAtomFamily } from "../../modules/state/compat";
import { BuffGroup } from "./BuffGroup";

export const BuffPanel: React.FC = () => {
    console.log("render BuffPanel");
    const raceid = Number(useAtomValue(compatibleBaseAtomFamily("raceid")));
    const jobid = Number(useAtomValue(compatibleBaseAtomFamily("jobid")));
    const selfBuffs = skills.filter(skill => skill.origin === "Self" && skill.raceid === raceid && (skill.jobid === jobid || skill.jobid === 0));
    const groupBuff = skills.filter(skill => skill.origin === "Group");
    const cashBuff = skills.filter(skill => skill.origin === "Cash");
    const guildBuff = skills.filter(skill => skill.origin === "Guild");
    return (
        <Grid container spacing={1}>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup title="自バフ" buffOrigin="Self" buffs={selfBuffs} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup title="PTバフ" buffOrigin="Group" buffs={groupBuff} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup title="課金バフ" buffOrigin="Cash" buffs={cashBuff} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BuffGroup title="ギルドバフ" buffOrigin="Guild" buffs={guildBuff} />
            </Grid>
        </Grid >
    )
}

export default BuffPanel;
