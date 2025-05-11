import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BasePanel from "./BasePanel";
import EquipmentPanel from "./EquipmentPanel";
import StatusPanel from "./StatusPanel";
import CharactorPanel from "./CharactorPanel";
import BuffPanel from "./BuffPanel";
import { DetailPanel } from "./DetailPanel";
import { StatusResetButton } from "./StatusResetButton";
import { EquipmentResetButton } from "./EquipmentResetButton";
import React from "react";
import CharactorContextTitle from "./CharactorContextTitle";
import { BaseResetButton } from "./BaseResetButton";

interface CharactorContextProps {
    index: number
}

export const CharactorContext: React.FC<CharactorContextProps> = ({ index }) => {
    return (
        <Card>
            <CardContent>
                <CharactorContextTitle index={index} />
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">
                                        ベース
                                    </Typography>
                                    <BaseResetButton />
                                </Box>
                                <BasePanel />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">
                                        ステータス
                                    </Typography>
                                    <StatusResetButton />
                                </Box>
                                <StatusPanel />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">
                                        装備
                                    </Typography>
                                    <EquipmentResetButton />
                                </Box>
                                <EquipmentPanel />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    キャラクター情報
                                </Typography>
                                <CharactorPanel />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    バフ
                                </Typography>
                                <BuffPanel />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{ md: 12, xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    詳細
                                </Typography>
                                <DetailPanel />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}
export default CharactorContext;