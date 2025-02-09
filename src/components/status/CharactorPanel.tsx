import Grid from "@mui/material/Grid2";
import CharactorParameterField from "./CharactorParameterField";
import { useCharactorContext } from "../../modules/context/useCharactorContext";


interface CharactorPanelProps {
}

export const CharactorPanel: React.FC<CharactorPanelProps> = () => {
    const charactor = useCharactorContext()
    return (
        <Grid container columnSpacing={4}>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="近距離攻撃力" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="全体 抵抗" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="遠距離攻撃力" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="命中率" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="魔法攻撃力" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="回避率" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="物理防御力" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="移動速度" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="魔法防御力" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="攻撃速度" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="HP" value={charactor.detail.hitPoint} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="HP回復" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="MP" value={0} />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <CharactorParameterField name="MP回復" value={0} />
            </Grid>
        </Grid>
    )
}
export default CharactorPanel;