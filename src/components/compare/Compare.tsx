import React from "react";
import {
    Box,
    Button,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PageContainer from "../common/PageContainer";
import { CompareEquipmentGrid } from "./CompareEquipmentGrid";
import { CompareCharacterDetails } from "./CompareCharacterDetails";
import { ValueComparisonTable } from "./ValueComparisonTable";
import { compareEquipmentSlots } from "./compareEquipmentConfig";
import { appStateAtom } from "../../modules/state/appState";
import { customFormulasState } from "../../modules/state/custom-formulas";
import type { Formula } from "../../modules/state/custom-formulas";
import { storedCharacterContextsAtom } from "../../modules/state/storage";
import { calculateCharacter } from "../../modules/calculation";
import type { CharacterState } from "../../modules/character/types";
import type { CharacterValueKey } from "../../modules/character/constants";
import { resolveEquipment } from "../../modules/resolve";
import { useAtom, useAtomValue } from "jotai";

type ComparisonSide = "left" | "right";
type CompareCharacterSource = {
    id: string;
    label: string;
    character: CharacterState;
};

const compareSlotIds: Record<ComparisonSide, string> = {
    left: "compare-left",
    right: "compare-right",
};

const compareSlotLabels: Record<ComparisonSide, string> = {
    left: "A",
    right: "B",
};

const cloneCharacter = (character: CharacterState, id: string, name: string): CharacterState => ({
    ...JSON.parse(JSON.stringify(character)),
    id,
    name,
});

const createCompareSlotCharacter = (character: CharacterState, side: ComparisonSide): CharacterState => (
    cloneCharacter(character, compareSlotIds[side], `${character.name} ${compareSlotLabels[side]}`)
);

const isCompareSlotId = (id: string): boolean => Object.values(compareSlotIds).includes(id);

const getEquipmentName = (character: CharacterState, slotTitle: string, slot: typeof compareEquipmentSlots[number]["slot"]) => {
    const equipment = resolveEquipment(
        slot,
        character.equipment[slot],
        Number(character.base.raceid),
        Number(character.base.jobid)
    );
    if (!equipment) {
        return { slotTitle, name: "未装備" };
    }

    return {
        slotTitle,
        name: equipment.enchantLevel
            ? `${equipment.template.name} +${equipment.enchantLevel}`
            : equipment.template.name,
    };
};

export const Compare: React.FC = () => {
    const [appState, setAppState] = useAtom(appStateAtom);
    const storedCharacterContexts = useAtomValue(storedCharacterContextsAtom);
    const customFormulas = useAtomValue(customFormulasState) as Partial<Record<CharacterValueKey, Formula>>;
    const baseCharacter = appState.characters[appState.activeCharacterId] ?? Object.values(appState.characters)[0];
    const leftCharacter = appState.characters[compareSlotIds.left] ?? createCompareSlotCharacter(baseCharacter, "left");
    const rightCharacter = appState.characters[compareSlotIds.right] ?? createCompareSlotCharacter(baseCharacter, "right");

    const characterSources = React.useMemo<CompareCharacterSource[]>(() => {
        const appCharacters = Object.values(appState.characters)
            .filter((character) => !isCompareSlotId(character.id))
            .map((character) => ({
            id: `app:${character.id}`,
            label: `${character.name} (作業中)`,
            character,
        }));
        const storedCharacters = Object.entries(storedCharacterContexts).map(([name, character]) => ({
            id: `storage:${name}`,
            label: `${name} (保存済み)`,
            character: {
                ...character,
                name: character.name || name,
            },
        }));

        return [...storedCharacters, ...appCharacters];
    }, [appState.characters, storedCharacterContexts]);
    const activeSourceId = characterSources.find((source) => source.character.id === baseCharacter.id)?.id ?? characterSources[0]?.id ?? "";

    const [leftSourceId, setLeftSourceId] = React.useState(activeSourceId);
    const [rightSourceId, setRightSourceId] = React.useState(activeSourceId);

    React.useEffect(() => {
        if (appState.characters[compareSlotIds.left] && appState.characters[compareSlotIds.right]) {
            return;
        }

        setAppState({
            ...appState,
            characters: {
                ...appState.characters,
                ...(appState.characters[compareSlotIds.left]
                    ? {}
                    : { [compareSlotIds.left]: createCompareSlotCharacter(baseCharacter, "left") }),
                ...(appState.characters[compareSlotIds.right]
                    ? {}
                    : { [compareSlotIds.right]: createCompareSlotCharacter(baseCharacter, "right") }),
            },
        });
    }, [appState, baseCharacter, setAppState]);

    const setCompareCharacter = React.useCallback((side: ComparisonSide, character: CharacterState) => {
        setAppState({
            ...appState,
            characters: {
                ...appState.characters,
                [compareSlotIds[side]]: {
                    ...character,
                    id: compareSlotIds[side],
                },
            },
        });
    }, [appState, setAppState]);

    const loadCharacter = (side: ComparisonSide, characterId: string) => {
        const source = characterSources.find((candidate) => candidate.id === characterId)?.character;
        if (!source) {
            return;
        }

        setCompareCharacter(side, createCompareSlotCharacter(source, side));
    };

    const copyLeftToRight = () => {
        setCompareCharacter("right", createCompareSlotCharacter(leftCharacter, "right"));
    };

    const copyRightToLeft = () => {
        setCompareCharacter("left", createCompareSlotCharacter(rightCharacter, "left"));
    };

    const leftCalculated = React.useMemo(
        () => calculateCharacter(leftCharacter, customFormulas),
        [customFormulas, leftCharacter]
    );
    const rightCalculated = React.useMemo(
        () => calculateCharacter(rightCharacter, customFormulas),
        [customFormulas, rightCharacter]
    );

    const equipmentDifferences = compareEquipmentSlots
        .map((config) => ({
            config,
            left: getEquipmentName(leftCharacter, config.title, config.slot),
            right: getEquipmentName(rightCharacter, config.title, config.slot),
        }))
        .filter(({ left, right }) => left.name !== right.name);

    return (
        <PageContainer
            title="キャラクター比較"
            icon={<CompareArrowsIcon fontSize="large" />}
            subtitle="装備を変えながら、ステータスと差分を確認します"
        >
            <Stack spacing={3} sx={{ pb: 4 }}>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>左キャラクター</InputLabel>
                                <Select
                                    label="左キャラクター"
                                    value={leftSourceId}
                                    onChange={(event) => {
                                        setLeftSourceId(event.target.value);
                                        loadCharacter("left", event.target.value);
                                    }}
                                >
                                    {characterSources.map((source) => (
                                        <MenuItem key={source.id} value={source.id}>
                                            {source.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <Stack direction="row" spacing={1} justifyContent="center">
                                <Button
                                    size="small"
                                    variant="outlined"
                                    startIcon={<ContentCopyIcon />}
                                    onClick={copyLeftToRight}
                                >
                                    右へ
                                </Button>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    startIcon={<ContentCopyIcon />}
                                    onClick={copyRightToLeft}
                                >
                                    左へ
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel>右キャラクター</InputLabel>
                                <Select
                                    label="右キャラクター"
                                    value={rightSourceId}
                                    onChange={(event) => {
                                        setRightSourceId(event.target.value);
                                        loadCharacter("right", event.target.value);
                                    }}
                                >
                                    {characterSources.map((source) => (
                                        <MenuItem key={source.id} value={source.id}>
                                            {source.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Paper variant="outlined" sx={{ p: 2, borderRadius: 1, height: "100%" }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {leftCharacter.name}
                            </Typography>
                            <CompareEquipmentGrid
                                title="装備"
                                character={leftCharacter}
                                onChange={(character) => setCompareCharacter("left", character)}
                            />
                            <CompareCharacterDetails
                                character={leftCharacter}
                                onChange={(character) => setCompareCharacter("left", character)}
                            />
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <Paper variant="outlined" sx={{ p: 2, borderRadius: 1, height: "100%" }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {rightCharacter.name}
                            </Typography>
                            <CompareEquipmentGrid
                                title="装備"
                                character={rightCharacter}
                                onChange={(character) => setCompareCharacter("right", character)}
                            />
                            <CompareCharacterDetails
                                character={rightCharacter}
                                onChange={(character) => setCompareCharacter("right", character)}
                            />
                        </Paper>
                    </Grid>
                </Grid>

                <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        ステータス差分
                    </Typography>
                    <ValueComparisonTable
                        leftValues={leftCalculated.values}
                        rightValues={rightCalculated.values}
                    />
                </Paper>

                <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
                        <Typography variant="h6">装備差分</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {equipmentDifferences.length} 件
                        </Typography>
                    </Box>
                    <Divider sx={{ my: 1.5 }} />
                    {equipmentDifferences.length === 0 ? (
                        <Typography variant="body2" color="text.secondary">
                            装備差分はありません
                        </Typography>
                    ) : (
                        <TableContainer>
                            <Table size="small" aria-label="equipment difference">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>部位</TableCell>
                                        <TableCell>左</TableCell>
                                        <TableCell>右</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {equipmentDifferences.map(({ config, left, right }) => (
                                        <TableRow key={config.slot} hover>
                                            <TableCell>{config.title}</TableCell>
                                            <TableCell>{left.name}</TableCell>
                                            <TableCell>{right.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Paper>
            </Stack>
        </PageContainer>
    );
};

export default Compare;
