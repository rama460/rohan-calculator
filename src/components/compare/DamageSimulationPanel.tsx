import React from "react";
import {
    Box,
    Chip,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import {
    calculateDamage,
    createSkillAttackAction,
    type CombatDamageType,
} from "../../modules/combat";
import type { CalculatedCharacter } from "../../modules/character/types";
import { resolveEquipment } from "../../modules/resolve";
import { BuiltinWeaponTypes } from "../../static/items";
import type { WeaponType } from "../../static/items";
import { hasSkillCategory, skills } from "../../static/skills/skill";
import type { Skill } from "../../static/skills/skill";

type DamageSimulationPanelProps = {
    left: CalculatedCharacter;
    right: CalculatedCharacter;
};

const formatDamage = (value: number): string => value.toLocaleString();

const meleeWeaponTypes = new Set<WeaponType>([
    "sword",
    "dagger",
    "blunt",
    "axe",
    "katar",
    "zen",
    "dualsword",
    "polearm",
    "glove",
]);
const rangeWeaponTypes = new Set<WeaponType>(["bow", "crossbow"]);
const magicWeaponTypes = new Set<WeaponType>(["wand", "staff", "orb"]);

const getSkillKey = (skill: Skill): string => `${skill.raceid ?? "all"}-${skill.jobid ?? "all"}-${skill.name}`;

const getDamageTypeByWeaponType = (weaponType: WeaponType): CombatDamageType | undefined => {
    if (meleeWeaponTypes.has(weaponType)) {
        return "melee";
    }
    if (rangeWeaponTypes.has(weaponType)) {
        return "range";
    }
    if (magicWeaponTypes.has(weaponType)) {
        return "magic";
    }
    return undefined;
};

const getEquippedWeapon = (character: CalculatedCharacter) => (
    resolveEquipment(
        "weapon",
        character.character.equipment.weapon,
        Number(character.character.base.raceid),
        Number(character.character.base.jobid),
    )
);

const getAvailableAttackSkills = (character: CalculatedCharacter): Skill[] => {
    const raceid = Number(character.character.base.raceid);
    const jobid = Number(character.character.base.jobid);

    return skills.filter((skill) => (
        hasSkillCategory(skill, "Attack") &&
        skill.raceid === raceid &&
        (skill.jobid === 0 || skill.jobid === jobid)
    ));
};

const getCharacterSkillLevel = (character: CalculatedCharacter, skill: Skill): number => {
    const skillLevels = skill.jobid === 0
        ? character.character.skillLevels.primary
        : character.character.skillLevels.secondary;
    const currentLevel = skillLevels[skill.name] ?? 0;

    return currentLevel > 0 ? currentLevel : skill.max;
};

const calculateSkillDamage = (
    attacker: CalculatedCharacter,
    defender: CalculatedCharacter,
    skill: Skill,
    level: number,
): number | undefined => {
    const skillAction = createSkillAttackAction(
        skill,
        level,
    );

    if (!skillAction) {
        return undefined;
    }

    return calculateDamage({
        attacker,
        defender,
        action: skillAction,
    }).damage;
};

export const DamageSimulationPanel: React.FC<DamageSimulationPanelProps> = ({
    left,
    right,
}) => {
    const [attackerSide, setAttackerSide] = React.useState<"left" | "right">("left");
    const [skillLevelOverrides, setSkillLevelOverrides] = React.useState<Record<string, number>>({});
    const attacker = attackerSide === "left" ? left : right;
    const defender = attackerSide === "left" ? right : left;
    const attackerLabel = attackerSide === "left" ? "左" : "右";
    const defenderLabel = attackerSide === "left" ? "右" : "左";
    const leftAttackSkills = React.useMemo(
        () => getAvailableAttackSkills(left),
        [left],
    );
    const rightAttackSkills = React.useMemo(
        () => getAvailableAttackSkills(right),
        [right],
    );
    const attackSkills = attackerSide === "left" ? leftAttackSkills : rightAttackSkills;
    const attackerWeapon = getEquippedWeapon(attacker);
    const normalAttackDamageType = attackerWeapon?.template.type
        ? getDamageTypeByWeaponType(attackerWeapon.template.type)
        : undefined;
    const normalAttackDamage = normalAttackDamageType
        ? calculateDamage({
            attacker,
            defender,
            action: {
                type: "normalAttack",
                damageType: normalAttackDamageType,
            },
        })
        : undefined;

    const getLevelOverrideKey = (skill: Skill): string => `${attackerSide}:${getSkillKey(skill)}`;
    const getDisplayedSkillLevel = (skill: Skill): number => (
        skillLevelOverrides[getLevelOverrideKey(skill)] ?? getCharacterSkillLevel(attacker, skill)
    );
    const setDisplayedSkillLevel = (skill: Skill, level: number) => {
        setSkillLevelOverrides((current) => ({
            ...current,
            [getLevelOverrideKey(skill)]: level,
        }));
    };

    return (
        <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    ダメージシミュレーション
                </Typography>
                <ToggleButtonGroup
                    size="small"
                    exclusive
                    value={attackerSide}
                    onChange={(_, nextSide: "left" | "right" | null) => {
                        if (nextSide) {
                            setAttackerSide(nextSide);
                        }
                    }}
                >
                    <ToggleButton value="left">左</ToggleButton>
                    <ToggleButton value="right">右</ToggleButton>
                </ToggleButtonGroup>
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
                            <TableCell>攻撃</TableCell>
                            <TableCell sx={{ width: 96 }}>種別</TableCell>
                            <TableCell align="right">{attackerLabel} → {defenderLabel}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell>通常攻撃</TableCell>
                            <TableCell>
                                {attackerWeapon?.template.type
                                    ? BuiltinWeaponTypes[attackerWeapon.template.type].displayName
                                    : "-"}
                            </TableCell>
                            <TableCell align="right">
                                {normalAttackDamage ? formatDamage(normalAttackDamage.damage) : "-"}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ mt: 2, mb: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    攻撃スキル
                </Typography>
                <Chip size="small" label={`${attackSkills.length} 件`} />
            </Box>
            <TableContainer>
                <Table
                    size="small"
                    aria-label="skill damage simulation"
                    sx={{
                        tableLayout: "fixed",
                        "& .MuiTableCell-root": {
                            px: 1,
                            py: 0.5,
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>スキル</TableCell>
                            <TableCell align="right" sx={{ width: 96 }}>Lv</TableCell>
                            <TableCell align="right">{attackerLabel} → {defenderLabel}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attackSkills.map((skill) => {
                            const level = getDisplayedSkillLevel(skill);
                            const damage = calculateSkillDamage(attacker, defender, skill, level);

                            return (
                                <TableRow key={getSkillKey(skill)} hover>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={1} sx={{ minWidth: 0 }}>
                                            <Box
                                                component="img"
                                                src={skill.icon}
                                                alt=""
                                                sx={{
                                                    width: 28,
                                                    height: 28,
                                                    flex: "0 0 auto",
                                                    borderRadius: 0.5,
                                                }}
                                            />
                                            <Box sx={{ minWidth: 0 }}>
                                                <Typography variant="body2" noWrap>
                                                    {skill.displayName}
                                                </Typography>
                                                {!skill.attack && (
                                                    <Typography variant="caption" color="text.secondary" noWrap>
                                                        式未設定
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Select
                                            size="small"
                                            value={String(level)}
                                            onChange={(event) => setDisplayedSkillLevel(skill, Number(event.target.value))}
                                            sx={{
                                                minWidth: 72,
                                                "& .MuiSelect-select": {
                                                    py: 0.25,
                                                    pr: 3,
                                                    textAlign: "right",
                                                },
                                            }}
                                        >
                                            {Array.from(
                                                { length: skill.max - skill.min + 1 },
                                                (_, index) => skill.min + index,
                                            ).map((nextLevel) => (
                                                <MenuItem key={nextLevel} value={String(nextLevel)}>
                                                    {nextLevel}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </TableCell>
                                    <TableCell align="right">
                                        {damage === undefined ? "-" : formatDamage(damage)}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
