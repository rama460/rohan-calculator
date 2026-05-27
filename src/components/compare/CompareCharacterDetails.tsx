import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { CharacterState } from "../../modules/character/types";
import type { CharacterStatusKey, CharacterValueKey } from "../../modules/character/constants";
import { characterStatusNames } from "../../modules/character/constants";
import { races } from "../../static/races";
import { titles } from "../../static/titles";
import { skills, SKillOriginNames } from "../../static/skills/skill";
import type { Skill, SkillOrigin } from "../../static/skills/skill";

type CompareCharacterDetailsProps = {
    character: CharacterState;
    values: Record<CharacterValueKey, number>;
    onChange: (character: CharacterState) => void;
};

const statusLabels: Record<CharacterStatusKey, string> = {
    strength: "力",
    vitality: "体力",
    intelligence: "知能",
    agility: "敏捷性",
    mentality: "精神力",
    dexterity: "瞬発力",
};

const originLabels: Record<SkillOrigin, string> = {
    Self: "自バフ",
    Group: "PTバフ",
    Guild: "ギルドバフ",
    Cash: "課金バフ",
};

const compactNumberFieldSx = {
    "& .MuiInputBase-input": {
        fontSize: 11,
        px: 0.5,
        py: 0.75,
        textAlign: "right",
    },
    "& .MuiInputLabel-root": {
        fontSize: 10,
    },
};

const getBuffCandidates = (character: CharacterState, origin: SkillOrigin): Skill[] => (
    skills.filter((skill) => {
        if (skill.origin !== origin || (skill.category !== "Buff" && skill.category !== "Passive")) {
            return false;
        }

        if (origin !== "Self") {
            return true;
        }

        return skill.raceid === Number(character.base.raceid) &&
            (skill.jobid === Number(character.base.jobid) || skill.jobid === 0);
    })
);

export const CompareCharacterDetails: React.FC<CompareCharacterDetailsProps> = ({
    character,
    values,
    onChange,
}) => {
    const updateBase = <K extends keyof CharacterState["base"]>(
        key: K,
        value: CharacterState["base"][K]
    ) => {
        onChange({
            ...character,
            base: {
                ...character.base,
                [key]: value,
            },
        });
    };

    const updateStatus = (
        type: keyof CharacterState["statuses"],
        key: CharacterStatusKey,
        value: number
    ) => {
        onChange({
            ...character,
            statuses: {
                ...character.statuses,
                [type]: {
                    ...character.statuses[type],
                    [key]: value,
                },
            },
        });
    };

    const setOriginBuffs = (origin: SkillOrigin, buffIds: number[]) => {
        onChange({
            ...character,
            buffs: {
                ...character.buffs,
                [origin]: buffIds.map((skillId) => ({
                    skillId,
                    level: skills[skillId]?.max ?? 1,
                })),
            },
        });
    };

    const toggleBuff = (origin: SkillOrigin, skillId: number, checked: boolean) => {
        const currentBuffs = character.buffs[origin] ?? [];
        const nextBuffIds = checked
            ? [...currentBuffs.filter((buff) => buff.skillId !== skillId).map((buff) => buff.skillId), skillId]
            : currentBuffs.filter((buff) => buff.skillId !== skillId).map((buff) => buff.skillId);
        setOriginBuffs(origin, nextBuffIds);
    };

    const updateBuffLevel = (origin: SkillOrigin, skillId: number, level: number) => {
        onChange({
            ...character,
            buffs: {
                ...character.buffs,
                [origin]: (character.buffs[origin] ?? []).map((buff) => (
                    buff.skillId === skillId ? { ...buff, level } : buff
                )),
            },
        });
    };

    const numericRaceId = Number(character.base.raceid);
    const numericJobId = Number(character.base.jobid);
    const initialStatuses = races[numericRaceId].initialStatus;

    return (
        <Accordion variant="outlined" disableGutters sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2">詳細条件</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            基本情報
                        </Typography>
                        <Grid container spacing={1.5}>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Lv"
                                    type="number"
                                    size="small"
                                    value={character.base.level}
                                    slotProps={{ htmlInput: { min: 1, max: 115 } }}
                                    onChange={(event) => {
                                        const level = Number(event.target.value);
                                        onChange({
                                            ...character,
                                            base: {
                                                ...character.base,
                                                level,
                                                heroLevel: level < 115 ? 0 : character.base.heroLevel,
                                                jobid: level < 50 ? 0 : character.base.jobid,
                                            },
                                            buffs: level < 50 ? {
                                                ...character.buffs,
                                                Self: [],
                                            } : character.buffs,
                                        });
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <TextField
                                    fullWidth
                                    label="征服者Lv"
                                    type="number"
                                    size="small"
                                    value={character.base.level === 115 ? character.base.heroLevel : 0}
                                    disabled={character.base.level < 115}
                                    slotProps={{ htmlInput: { min: 0, max: 50 } }}
                                    onChange={(event) => updateBase("heroLevel", Number(event.target.value))}
                                />
                            </Grid>
                            <Grid size={{ xs: 6, md: 3 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>種族</InputLabel>
                                    <Select
                                        label="種族"
                                        value={String(numericRaceId)}
                                        onChange={(event) => {
                                            onChange({
                                                ...character,
                                                base: {
                                                    ...character.base,
                                                    raceid: Number(event.target.value),
                                                    jobid: 0,
                                                },
                                                buffs: {
                                                    ...character.buffs,
                                                    Self: [],
                                                },
                                            });
                                        }}
                                    >
                                        {races.map((race) => (
                                            <MenuItem key={race.id} value={race.id}>
                                                {race.displayName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 6, md: 3 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>職業</InputLabel>
                                    <Select
                                        label="職業"
                                        value={String(numericJobId)}
                                        disabled={character.base.level < 50}
                                        onChange={(event) => {
                                            const nextJobId = Number(event.target.value);
                                            onChange({
                                                ...character,
                                                base: {
                                                    ...character.base,
                                                    jobid: nextJobId,
                                                },
                                                buffs: {
                                                    ...character.buffs,
                                                    Self: (character.buffs.Self ?? []).filter((buff) => {
                                                        const skill = skills[buff.skillId];
                                                        return skill?.raceid === numericRaceId &&
                                                            (skill.jobid === nextJobId || skill.jobid === 0);
                                                    }),
                                                },
                                            });
                                        }}
                                    >
                                        {races[numericRaceId].jobs.map((job) => (
                                            <MenuItem key={job.id} value={job.id}>
                                                {job.displayName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, md: 2 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>称号</InputLabel>
                                    <Select
                                        label="称号"
                                        value={character.base.title}
                                        onChange={(event) => updateBase("title", event.target.value)}
                                    >
                                        <MenuItem value="none">なし</MenuItem>
                                        {titles.map((title) => (
                                            <MenuItem key={title.name} value={title.name}>
                                                {title.displayName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            ステータス
                        </Typography>
                        <Grid container spacing={1}>
                            {characterStatusNames.map((status) => (
                                <Grid key={status} size={{ xs: 12, md: 6 }}>
                                    <Box
                                        display="grid"
                                        gridTemplateColumns="64px 56px 1fr 1fr 64px"
                                        gap={1}
                                        alignItems="center"
                                    >
                                        <Typography variant="caption">{statusLabels[status]}</Typography>
                                        <TextField
                                            label="初"
                                            type="number"
                                            size="small"
                                            value={initialStatuses[status]}
                                            sx={compactNumberFieldSx}
                                            slotProps={{ htmlInput: { readOnly: true } }}
                                        />
                                        <TextField
                                            label="振"
                                            type="number"
                                            size="small"
                                            value={character.statuses.allocated[status]}
                                            sx={compactNumberFieldSx}
                                            slotProps={{ htmlInput: { min: 0 } }}
                                            onChange={(event) => updateStatus("allocated", status, Number(event.target.value))}
                                        />
                                        <TextField
                                            label="補"
                                            type="number"
                                            size="small"
                                            value={character.statuses.meta[status]}
                                            sx={compactNumberFieldSx}
                                            onChange={(event) => updateStatus("meta", status, Number(event.target.value))}
                                        />
                                        <TextField
                                            label="計"
                                            type="number"
                                            size="small"
                                            value={values[`__${status}` as CharacterValueKey] ?? 0}
                                            sx={compactNumberFieldSx}
                                            slotProps={{ htmlInput: { readOnly: true } }}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>

                    <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>
                            バフ
                        </Typography>
                        <Grid container spacing={2}>
                            {SKillOriginNames.map((origin) => {
                                const candidates = getBuffCandidates(character, origin);
                                const selectedBuffs = character.buffs[origin] ?? [];
                                const selectedBuffIds = new Set(selectedBuffs.map((buff) => buff.skillId));

                                return (
                                    <Grid key={origin} size={{ xs: 12, md: 6 }}>
                                        <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ mb: 1 }}>
                                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                                {originLabels[origin]}
                                            </Typography>
                                            <Box>
                                                <Button size="small" onClick={() => setOriginBuffs(origin, candidates.map((skill) => skills.indexOf(skill)))}>
                                                    フル
                                                </Button>
                                                <Button size="small" onClick={() => setOriginBuffs(origin, [])}>
                                                    リセット
                                                </Button>
                                            </Box>
                                        </Box>
                                        <Stack spacing={0.5}>
                                            {candidates.map((skill) => {
                                                const skillId = skills.indexOf(skill);
                                                const buff = selectedBuffs.find((candidate) => candidate.skillId === skillId);
                                                return (
                                                    <Box
                                                        key={`${origin}-${skill.name}-${skillId}`}
                                                        display="grid"
                                                        gridTemplateColumns="1fr 72px"
                                                        gap={1}
                                                        alignItems="center"
                                                    >
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    size="small"
                                                                    checked={selectedBuffIds.has(skillId)}
                                                                    onChange={(event) => toggleBuff(origin, skillId, event.target.checked)}
                                                                />
                                                            }
                                                            label={<Typography variant="caption">{skill.displayName}</Typography>}
                                                        />
                                                        <TextField
                                                            type="number"
                                                            size="small"
                                                            value={buff?.level ?? skill.max}
                                                            disabled={!buff}
                                                            slotProps={{ htmlInput: { min: skill.min, max: skill.max } }}
                                                            onChange={(event) => updateBuffLevel(origin, skillId, Number(event.target.value))}
                                                        />
                                                    </Box>
                                                );
                                            })}
                                        </Stack>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Paper>
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
};
