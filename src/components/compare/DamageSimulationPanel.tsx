import React from "react";
import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
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
import {
    calculateDamage,
    createSkillAttackAction,
    type CombatDamageType,
} from "../../modules/combat";
import type { CalculatedCharacter } from "../../modules/character/types";
import { hasSkillCategory, skills } from "../../static/skills/skill";
import type { Skill } from "../../static/skills/skill";

type DamageSimulationPanelProps = {
    left: CalculatedCharacter;
    right: CalculatedCharacter;
};

type DamageRow = {
    damageType: CombatDamageType;
    label: string;
};

const damageRows: DamageRow[] = [
    { damageType: "melee", label: "近接" },
    { damageType: "range", label: "遠距離" },
    { damageType: "magic", label: "魔法" },
];

const formatDamage = (value: number): string => value.toLocaleString();

const getAvailableAttackSkills = (character: CalculatedCharacter): Skill[] => {
    const raceid = Number(character.character.base.raceid);
    const jobid = Number(character.character.base.jobid);

    return skills.filter((skill) => (
        hasSkillCategory(skill, "Attack") &&
        skill.raceid === raceid &&
        (skill.jobid === 0 || skill.jobid === jobid)
    ));
};

export const DamageSimulationPanel: React.FC<DamageSimulationPanelProps> = ({
    left,
    right,
}) => {
    const [attackerSide, setAttackerSide] = React.useState<"left" | "right">("left");
    const attacker = attackerSide === "left" ? left : right;
    const defender = attackerSide === "left" ? right : left;
    const availableAttackSkills = React.useMemo(
        () => getAvailableAttackSkills(attacker),
        [attacker],
    );
    const [selectedSkillName, setSelectedSkillName] = React.useState("");
    const selectedSkill = availableAttackSkills.find((skill) => skill.name === selectedSkillName) ?? availableAttackSkills[0];
    const [selectedSkillLevel, setSelectedSkillLevel] = React.useState(1);

    React.useEffect(() => {
        const nextSkill = availableAttackSkills[0];
        setSelectedSkillName(nextSkill?.name ?? "");
        setSelectedSkillLevel(nextSkill?.max ?? 1);
    }, [availableAttackSkills]);

    React.useEffect(() => {
        if (!selectedSkill) {
            return;
        }
        setSelectedSkillLevel((currentLevel) => Math.min(Math.max(currentLevel, selectedSkill.min), selectedSkill.max));
    }, [selectedSkill]);

    const rows = damageRows.map((row) => {
        const leftToRight = calculateDamage({
            attacker: left,
            defender: right,
            action: {
                type: "normalAttack",
                damageType: row.damageType,
            },
        });
        const rightToLeft = calculateDamage({
            attacker: right,
            defender: left,
            action: {
                type: "normalAttack",
                damageType: row.damageType,
            },
        });

        return {
            ...row,
            leftToRight,
            rightToLeft,
            difference: leftToRight.damage - rightToLeft.damage,
        };
    });
    const skillAction = selectedSkill
        ? createSkillAttackAction(selectedSkill, selectedSkillLevel)
        : undefined;
    const skillDamage = skillAction
        ? calculateDamage({
            attacker,
            defender,
            action: skillAction,
        })
        : undefined;

    return (
        <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    ダメージシミュレーション
                </Typography>
                <Chip size="small" label="通常攻撃" />
            </Box>
            <TableContainer>
                <Table
                    size="small"
                    aria-label="damage simulation"
                    sx={{
                        tableLayout: "fixed",
                        "& .MuiTableCell-root": {
                            px: 1,
                            py: 0.5,
                            whiteSpace: "nowrap",
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 80 }}>種別</TableCell>
                            <TableCell align="right">左 → 右</TableCell>
                            <TableCell align="right">右 → 左</TableCell>
                            <TableCell align="right" sx={{ width: 96 }}>差分</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.damageType} hover>
                                <TableCell>{row.label}</TableCell>
                                <TableCell align="right">{formatDamage(row.leftToRight.damage)}</TableCell>
                                <TableCell align="right">{formatDamage(row.rightToLeft.damage)}</TableCell>
                                <TableCell align="right">
                                    {row.difference > 0 ? "+" : ""}{formatDamage(row.difference)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} sx={{ mt: 2 }} alignItems={{ md: "center" }}>
                <FormControl size="small" sx={{ minWidth: 132 }}>
                    <InputLabel>攻撃者</InputLabel>
                    <Select
                        label="攻撃者"
                        value={attackerSide}
                        onChange={(event) => setAttackerSide(event.target.value as "left" | "right")}
                    >
                        <MenuItem value="left">左</MenuItem>
                        <MenuItem value="right">右</MenuItem>
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 240, flex: 1 }}>
                    <InputLabel>攻撃スキル</InputLabel>
                    <Select
                        label="攻撃スキル"
                        value={selectedSkill?.name ?? ""}
                        onChange={(event) => {
                            const nextSkill = availableAttackSkills.find((skill) => skill.name === event.target.value);
                            setSelectedSkillName(event.target.value);
                            setSelectedSkillLevel(nextSkill?.max ?? 1);
                        }}
                    >
                        {availableAttackSkills.map((skill) => (
                            <MenuItem key={`${skill.raceid}-${skill.jobid}-${skill.name}`} value={skill.name}>
                                {skill.displayName}{skill.attack ? "" : "（式未設定）"}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 96 }}>
                    <InputLabel>Lv</InputLabel>
                    <Select
                        label="Lv"
                        value={String(selectedSkillLevel)}
                        onChange={(event) => setSelectedSkillLevel(Number(event.target.value))}
                        disabled={!selectedSkill}
                    >
                        {selectedSkill && Array.from(
                            { length: selectedSkill.max - selectedSkill.min + 1 },
                            (_, index) => selectedSkill.min + index,
                        ).map((level) => (
                            <MenuItem key={level} value={String(level)}>
                                {level}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box sx={{ minWidth: 180, textAlign: { xs: "left", md: "right" } }}>
                    <Typography variant="caption" color="text.secondary">
                        スキルダメージ
                    </Typography>
                    <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                        {skillDamage ? formatDamage(skillDamage.damage) : "-"}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};
