import Grid from "@mui/material/Grid2";
import { Skill, SkillOrigin } from "../../static/skill";
import BuffIconButton from "./BuffIconButton";
import { useAtom } from "jotai";
import { buffStateFamily } from "../../modules/state/skills";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
interface BuffGroupProps {
    title: string;
    buffOrigin: SkillOrigin;
    buffs: Skill[];
}

export const BuffGroup: React.FC<BuffGroupProps> = ({ title, buffOrigin, buffs }) => {
    const [buffStatuses, setBuffStatuses] = useAtom(buffStateFamily(buffOrigin));
    const setBuff = (buff: Skill, checked: boolean, level: number) => {
        if (checked) {
            if (buffStatuses.find((b) => b.name === buff.name)) {
                setBuffStatuses([...buffStatuses.filter((b) => b.name !== buff.name), { name: buff.name, level: level }]);
            } else {
                setBuffStatuses([...buffStatuses, { name: buff.name, level: level }]);
            }
        } else {
            setBuffStatuses([...buffStatuses.filter((b) => b.name !== buff.name)]);
        }
    }
    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent={"space-between"}>
                    <Typography variant="subtitle2">
                        {title}
                    </Typography>
                    <Box>
                        <Button onClick={() => setBuffStatuses([...buffs.map((buff) => ({ name: buff.name, level: buff.max }))])}>フルバフ</Button>
                        <Button onClick={() => setBuffStatuses([])}>リセット</Button>

                    </Box>
                </Box>
                <Grid container>
                    {buffs.map((buff, index) => (
                        <Grid key={index} size={{ md: 6, xs: 6 }}>
                            <BuffIconButton buffSpec={buff} buffState={buffStatuses.find((state) => state.name === buff.name) ?? undefined} setBuff={setBuff} />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>

        </Card>
    );
}