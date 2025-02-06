import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BasePanel from "./BasePanel";
import EquipmentPanel from "./EquipmentPanel";
import StatusPanel from "./StatusPanel";
import CharactorPanel from "./CharactorPanel";
import BuffPanel from "./BuffPanel";
import React from "react";
import BorderedTitleBox from "../common/BorderedTitleBox";
import { Context } from "./Context";


export const Status = () => {
    const [level, setLevel] = React.useState(115);
    const [heroLevel, setHeroLevel] = React.useState(50);
    const [raceid, setRaceid] = React.useState<number>(0);
    const [jobid, setJobid] = React.useState<number>(0);
    return (
        <Context>

            <Box sx={{ width: "100vw", paddingTop: "100px" }}>
                <Container maxWidth="md">
                    <Grid container rowSpacing={1} columnSpacing={5}>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <BorderedTitleBox title="Base">
                                <BasePanel level={level} heroLevel={heroLevel} raceid={raceid} jobid={jobid} setLevel={setLevel} setHeroLevel={setHeroLevel} setRaceid={setRaceid} setJobid={setJobid} />
                            </BorderedTitleBox>
                        </Grid>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <BorderedTitleBox title="Status">
                                <StatusPanel
                                    level={level}
                                    heroLevel={heroLevel}
                                    raceid={raceid}
                                />
                            </BorderedTitleBox>
                        </Grid>
                        <Grid size={{ md: 6, xs: 12 }}>
                            <BorderedTitleBox title="Equipment">
                                <EquipmentPanel />
                            </BorderedTitleBox>
                        </Grid>
                        <Grid size={{ md: 6, xs: 12 }}>
                            <BorderedTitleBox title="Inventory">
                                <div>Not Implemented</div>
                            </BorderedTitleBox>
                        </Grid>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <BorderedTitleBox title="Details">
                                <CharactorPanel />
                            </BorderedTitleBox>
                        </Grid>
                        <Grid size={{ md: 12, xs: 12 }}>
                            <BorderedTitleBox title="Buff">
                                <BuffPanel raceid={raceid} jobid={jobid} />
                            </BorderedTitleBox>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Context>
    );
}
export default Status;