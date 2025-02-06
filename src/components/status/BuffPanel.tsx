import Grid from "@mui/material/Grid2";
import BuffIconButton from "./BuffIconButton";
import { skills } from "../static/skill";
import BorderedTitleBox from "../common/BorderedTitleBox";
interface BuffPanelProps {
    raceid: number;
    jobid: number;
}

export const BuffPanel: React.FC<BuffPanelProps> = ({ raceid, jobid }) => {
    return (
        <Grid container spacing={4}>
            <Grid size={{ md: 6, xs: 12 }}>
                <BorderedTitleBox title="Self Buff">
                    <Grid container spacing={2}>
                        {skills.filter(skill => skill.raceid === raceid && (skill.jobid === jobid || skill.jobid === 0) && (skill.type === "Buff" || skill.type === "Passive")).map((skill) => (
                            <Grid size={{ md: 6, xs: 6 }}>
                                <BuffIconButton skill={skill} />
                            </Grid>
                        ))}
                    </Grid>
                </BorderedTitleBox>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BorderedTitleBox title="Group Buff">
                    <Grid container spacing={2}>
                        {skills.filter(skill => skill.type === "Group").map((skill) => (
                            <Grid size={{ md: 6, xs: 6 }}>
                                <BuffIconButton skill={skill} />
                            </Grid>
                        ))}
                    </Grid>
                </BorderedTitleBox>
            </Grid>
        </Grid >
    )
}

export default BuffPanel;