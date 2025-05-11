import Grid from "@mui/material/Grid2";
import CharactorParameterField from "./CharactorParameterField";


interface CharactorPanelProps {
}

export const CharactorPanel: React.FC<CharactorPanelProps> = () => {
    console.log("render CharactorPanel");
    return (
        <Grid container columnSpacing={2}>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="meleeAttack" title="近距離攻撃力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="resistance" title="全体 抵抗" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="rangeAttack" title="遠距離攻撃力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="accuracy" title="命中率" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="magicAttack" title="魔法攻撃力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="dodging" title="回避率" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="physicalDefense" title="物理防御力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="movementSpeed" title="移動速度" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="magicalDefense" title="魔法防御力" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="attackSpeed" title="攻撃速度" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="hitPoint" title="HP" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="hitPointRecovery" title="HP回復" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="magicPoint" title="MP" />
            </Grid>
            <Grid size={{ md: 6, xs: 6 }}>
                <CharactorParameterField name="magicPointRecovery" title="MP回復" />
            </Grid>
        </Grid>
    )
}
export default CharactorPanel;