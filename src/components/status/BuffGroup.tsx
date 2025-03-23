import Grid from "@mui/material/Grid2";
import BorderedTitleBox from "../common/BorderedTitleBox";
import { Skill, SkillOrigin } from "../static/skill";
import BuffIconButton from "./BuffIconButton";
import { useAtom } from "jotai";
import { buffStateFamily } from "../../modules/state/skills";
import { Button } from "@mui/material";
interface BuffGroupProps {
    buffOrigin: SkillOrigin;
    buffs: Skill[];
}

export const BuffGroup: React.FC<BuffGroupProps> = ({ buffOrigin, buffs }) => {
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
        <BorderedTitleBox title={buffOrigin}>
            <Button onClick={() => setBuffStatuses([...buffs.map((buff) => ({ name: buff.name, level: buff.max }))])}>フルバフ</Button>
            <Button onClick={() => setBuffStatuses([])}>リセット</Button>
            <Grid container spacing={2}>
                {buffs.map((buff, index) => (
                    <Grid key={index} size={{ md: 6, xs: 6 }}>
                        <BuffIconButton buffSpec={buff} buffState={buffStatuses.find((state) => state.name === buff.name) ?? undefined} setBuff={setBuff} />
                    </Grid>
                ))}
            </Grid>
        </BorderedTitleBox>
    );
}