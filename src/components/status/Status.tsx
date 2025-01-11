import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BasePanel from "./BasePanel";
import EquipmentPanel from "./EquipmentPanel";
import StatusPanel from "./StatusPanel";
import CharactorPanel from "./CharactorPanel";
import BuffPanel from "./BuffPanel";
import React from "react";

export const Status = () => {
    const [level, setLevel] = React.useState(115);
    const [heroLevel, setHeroLevel] = React.useState(50);
    const [raceid, setRaceid] = React.useState("0");
    const [jobid, setJobid] = React.useState("0");

    return (
        <Box sx={{ width: "100vw", paddingTop: "100px" }}>
            <Container maxWidth="md">
                <Grid container spacing={5}>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "10px", padding: "10px", width: "100%" }}>
                            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                                Base
                            </Typography>
                            <BasePanel level={level} heroLevel={heroLevel} raceid={raceid} jobid={jobid} setLevel={setLevel} setHeroLevel={setHeroLevel} setRaceid={setRaceid} setJobid={setJobid} />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "10px", padding: "10px", width: "100%" }}>
                            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                                Status
                            </Typography>
                            <StatusPanel level={level} heroLevel={heroLevel} />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "10px", padding: "10px", width: "100%" }}>
                            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                                Equipment
                            </Typography>
                            <EquipmentPanel />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "10px", padding: "10px", width: "100%" }}>
                            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                                Inventory
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "10px", padding: "10px", width: "100%" }}>
                            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                                Details
                            </Typography>
                            <CharactorPanel />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Box sx={{ border: "1px solid black", borderRadius: "10px", padding: "10px", width: "100%" }}>
                            <Typography sx={{ position: "relative", top: "0", left: "0", width: "max-content", backgroundColor: "white", transform: 'translateY(-70%)', padding: "10px" }}>
                                Buffs
                            </Typography>
                            <BuffPanel />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
export default Status;