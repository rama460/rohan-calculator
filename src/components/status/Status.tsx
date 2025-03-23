import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BasePanel from "./BasePanel";
import EquipmentPanel from "./EquipmentPanel";
import StatusPanel from "./StatusPanel";
import CharactorPanel from "./CharactorPanel";
import BuffPanel from "./BuffPanel";
import BorderedTitleBox from "../common/BorderedTitleBox";
import { DetailPanel } from "./DetailPanel";


export const Status = () => {
    return (
        <Box sx={{ width: "100vw", paddingTop: "100px" }}>
            <Container maxWidth="md">
                <Grid container rowSpacing={1} columnSpacing={5}>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <BorderedTitleBox title="Base">
                            <BasePanel />
                        </BorderedTitleBox>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <BorderedTitleBox title="Status">
                            <StatusPanel />
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
                        <BorderedTitleBox title="Charactor">
                            <CharactorPanel />
                        </BorderedTitleBox>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <BorderedTitleBox title="Buff">
                            <BuffPanel />
                        </BorderedTitleBox>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <BorderedTitleBox title="Details">
                            <DetailPanel />
                        </BorderedTitleBox>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
export default Status;