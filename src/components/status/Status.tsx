import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BasePanel from "./BasePanel";
import EquipmentPanel from "./EquipmentPanel";
import StatusPanel from "./StatusPanel";
import CharactorPanel from "./CharactorPanel";
import BuffPanel from "./BuffPanel";
import React from "react";
import BorderedTitleBox from "../common/BorderedTitleBox";
import { Item } from "../static/items";
import { BuiltinOptionKeyType } from "../static/options";
import { reduceEquipments, reduceSkills } from "../../modules/context/reduce";
import { AppliedSkill } from "../static/skill";

export const Status = () => {
    const [level, setLevel] = React.useState(115);
    const [heroLevel, setHeroLevel] = React.useState(50);
    const [raceid, setRaceid] = React.useState<number>(0);
    const [jobid, setJobid] = React.useState<number>(0);
    const [equippedHelmet, setEquippedHelmet] = React.useState<Item | null>(null);
    const [equippedGauntlet, setEquippedGauntlet] = React.useState<Item | null>(null);
    const [equippedTunic, setEquippedTunic] = React.useState<Item | null>(null);
    const [equippedLeggings, setEquippedLeggings] = React.useState<Item | null>(null);
    const [equippedBoots, setEquippedBoots] = React.useState<Item | null>(null);
    const [equippedWeapon, setEquippedWeapon] = React.useState<Item | null>(null);
    const [equippedShield, setEquippedShield] = React.useState<Item | null>(null);
    const [equippedArrow, setEquippedArrow] = React.useState<Item | null>(null);
    const [equippedAccessory1, setEquippedAccessory1] = React.useState<Item | null>(null);
    const [equippedAccessory2, setEquippedAccessory2] = React.useState<Item | null>(null);
    const [equippedAccessory3, setEquippedAccessory3] = React.useState<Item | null>(null);
    const [equippedAccessory4, setEquippedAccessory4] = React.useState<Item | null>(null);
    const [equippedGlasses, setEquippedGlasses] = React.useState<Item | null>(null);
    const [equippedHat, setEquippedHat] = React.useState<Item | null>(null);
    const [equippedEarrings, setEquippedEarrings] = React.useState<Item | null>(null);
    const [equippedCostume, setEquippedCostume] = React.useState<Item | null>(null);
    const [equippedTalismanH, setEquippedTalismanH] = React.useState<Item | null>(null);
    const [equippedTalismanG, setEquippedTalismanG] = React.useState<Item | null>(null);
    const [equippedTalismanI, setEquippedTalismanI] = React.useState<Item | null>(null);
    const [equippedTalismanB, setEquippedTalismanB] = React.useState<Item | null>(null);
    const [equippedTalismanJ, setEquippedTalismanJ] = React.useState<Item | null>(null);
    const [equippedTalismanN, setEquippedTalismanN] = React.useState<Item | null>(null);
    const [equippedTalismanE, setEquippedTalismanE] = React.useState<Item | null>(null);
    const [equippedTalismanR, setEquippedTalismanR] = React.useState<Item | null>(null);
    const [equippedTalismanW, setEquippedTalismanW] = React.useState<Item | null>(null);
    const [equippedTalismanQ, setEquippedTalismanQ] = React.useState<Item | null>(null);
    const [equippedTalismanS, setEquippedTalismanS] = React.useState<Item | null>(null);
    const [equippedPet, setEquippedPet] = React.useState<Item | null>(null);
    const [appliedSkills, setAppliedSkills] = React.useState<AppliedSkill[]>([]);
    const [optionContext, setOptionContext] = React.useState<{ [key in BuiltinOptionKeyType]?: number }>({});
    const [skillContext, setSkillContext] = React.useState<{ [key in BuiltinOptionKeyType]?: number }>({});
    React.useEffect(() => {
        setOptionContext(reduceEquipments([
            equippedHelmet,
            equippedGauntlet,
            equippedTunic,
            equippedLeggings,
            equippedBoots,
            equippedWeapon,
            equippedShield,
            equippedArrow,
            equippedAccessory1,
            equippedAccessory2,
            equippedAccessory3,
            equippedAccessory4,
            equippedGlasses,
            equippedHat,
            equippedEarrings,
            equippedCostume,
            equippedTalismanH,
            equippedTalismanG,
            equippedTalismanI,
            equippedTalismanB,
            equippedTalismanJ,
            equippedTalismanN,
            equippedTalismanE,
            equippedTalismanR,
            equippedTalismanW,
            equippedTalismanQ,
            equippedTalismanS,
            equippedPet
        ]));
    }, [level, heroLevel, raceid, jobid, equippedHelmet, equippedGauntlet, equippedTunic, equippedLeggings, equippedBoots, equippedWeapon, equippedShield, equippedArrow, equippedAccessory1, equippedAccessory2, equippedAccessory3, equippedAccessory4, equippedGlasses, equippedHat, equippedEarrings, equippedCostume, equippedTalismanH, equippedTalismanG, equippedTalismanI, equippedTalismanB, equippedTalismanJ, equippedTalismanN, equippedTalismanE, equippedTalismanR, equippedTalismanW, equippedTalismanQ, equippedTalismanS, equippedPet]);

    React.useEffect(() => {
        setSkillContext(reduceSkills(appliedSkills));
    }, [appliedSkills]);
    return (
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
                                options={optionContext}
                                skills={skillContext}
                            />
                        </BorderedTitleBox>
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }}>
                        <BorderedTitleBox title="Equipment">
                            <EquipmentPanel
                                equippedHelmet={equippedHelmet}
                                setEquippedHelmet={setEquippedHelmet}
                                equippedGauntlet={equippedGauntlet}
                                setEquippedGauntlet={setEquippedGauntlet}
                                equippedTunic={equippedTunic}
                                setEquippedTunic={setEquippedTunic}
                                equippedLeggings={equippedLeggings}
                                setEquippedLeggings={setEquippedLeggings}
                                equippedBoots={equippedBoots}
                                setEquippedBoots={setEquippedBoots}
                                equippedWeapon={equippedWeapon}
                                setEquippedWeapon={setEquippedWeapon}
                                equippedShield={equippedShield}
                                setEquippedShield={setEquippedShield}
                                equippedArrow={equippedArrow}
                                setEquippedArrow={setEquippedArrow}
                                equippedAccessory1={equippedAccessory1}
                                setEquippedAccessory1={setEquippedAccessory1}
                                equippedAccessory2={equippedAccessory2}
                                setEquippedAccessory2={setEquippedAccessory2}
                                equippedAccessory3={equippedAccessory3}
                                setEquippedAccessory3={setEquippedAccessory3}
                                equippedAccessory4={equippedAccessory4}
                                setEquippedAccessory4={setEquippedAccessory4}
                                equippedGlasses={equippedGlasses}
                                setEquippedGlasses={setEquippedGlasses}
                                equippedHat={equippedHat}
                                setEquippedHat={setEquippedHat}
                                equippedEarrings={equippedEarrings}
                                setEquippedEarrings={setEquippedEarrings}
                                equippedCostume={equippedCostume}
                                setEquippedCostume={setEquippedCostume}
                                equippedTalismanH={equippedTalismanH}
                                setEquippedTalismanH={setEquippedTalismanH}
                                equippedTalismanG={equippedTalismanG}
                                setEquippedTalismanG={setEquippedTalismanG}
                                equippedTalismanI={equippedTalismanI}
                                setEquippedTalismanI={setEquippedTalismanI}
                                equippedTalismanB={equippedTalismanB}
                                setEquippedTalismanB={setEquippedTalismanB}
                                equippedTalismanJ={equippedTalismanJ}
                                setEquippedTalismanJ={setEquippedTalismanJ}
                                equippedTalismanN={equippedTalismanN}
                                setEquippedTalismanN={setEquippedTalismanN}
                                equippedTalismanE={equippedTalismanE}
                                setEquippedTalismanE={setEquippedTalismanE}
                                equippedTalismanR={equippedTalismanR}
                                setEquippedTalismanR={setEquippedTalismanR}
                                equippedTalismanW={equippedTalismanW}
                                setEquippedTalismanW={setEquippedTalismanW}
                                equippedTalismanQ={equippedTalismanQ}
                                setEquippedTalismanQ={setEquippedTalismanQ}
                                equippedTalismanS={equippedTalismanS}
                                setEquippedTalismanS={setEquippedTalismanS}
                                equippedPet={equippedPet}
                                setEquippedPet={setEquippedPet}
                            />
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
                            <BuffPanel raceid={raceid} jobid={jobid} setAppliedSkills={setAppliedSkills} />
                        </BorderedTitleBox>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
export default Status;