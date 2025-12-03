import Grid from "@mui/material/Grid2";
import CharactorParameterField from "./CharactorParameterField";


interface CharactorPanelProps {
}

export const CharactorPanel: React.FC<CharactorPanelProps> = () => {
    console.log("render CharactorPanel");
    return (
        <Grid container columnSpacing={2}>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__meleeAttack" title="近距離攻撃力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__resistance" title="全体 抵抗" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__rangeAttack" title="遠距離攻撃力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__accuracy" title="命中率" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__magicAttack" title="魔法攻撃力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__dodging" title="回避率" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__physicalDefense" title="物理防御力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__movementSpeed" title="移動速度" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__magicalDefense" title="魔法防御力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__attackSpeed" title="攻撃速度" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__hitPoint" title="HP" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__hitPointRecovery" title="HP回復" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__magicPoint" title="MP" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="__magicPointRecovery" title="MP回復" />
            </Grid>
        </Grid>
    )
}
export default CharactorPanel;