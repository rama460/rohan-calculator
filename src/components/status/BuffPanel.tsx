import Grid from "@mui/material/Grid2";
import BuffIconButton from "./BuffIconButton";
import { skills } from "../static/skill";
import BorderedTitleBox from "../common/BorderedTitleBox";
import { useBasesContext } from "../../modules/context/useBasesContext";
interface BuffPanelProps {
}

export const BuffPanel: React.FC<BuffPanelProps> = () => {
    const bases = useBasesContext();
    return (
        <Grid container spacing={4}>
            <Grid size={{ md: 6, xs: 12 }}>
                <BorderedTitleBox title="自バフ">
                    <Grid container spacing={2}>
                        {skills.filter(skill => skill.raceid === bases.raceid && (skill.jobid === bases.jobid || skill.jobid === 0) && (skill.type === "Buff" || skill.type === "Passive")).map((skill) => (
                            <Grid size={{ md: 6, xs: 6 }}>
                                <BuffIconButton skill={skill} />
                            </Grid>
                        ))}
                    </Grid>
                </BorderedTitleBox>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BorderedTitleBox title="PTバフ">
                    <Grid container spacing={2}>
                        {skills.filter(skill => skill.type === "Group").map((skill) => (
                            <Grid size={{ md: 6, xs: 6 }}>
                                <BuffIconButton skill={skill} />
                            </Grid>
                        ))}
                    </Grid>
                </BorderedTitleBox>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BorderedTitleBox title="課金バフ">
                    <Grid container spacing={2}>
                        {skills.filter(skill => skill.type === "Cash").map((skill) => (
                            <Grid size={{ md: 6, xs: 6 }}>
                                <BuffIconButton skill={skill} />
                            </Grid>
                        ))}
                    </Grid>
                </BorderedTitleBox>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <BorderedTitleBox title="ギルドバフ">
                    <Grid container spacing={2}>
                        {skills.filter(skill => skill.type === "Guild").map((skill) => (
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