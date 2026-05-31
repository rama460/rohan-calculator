import React from "react";
import {
    Box,
    Chip,
    Collapse,
    IconButton,
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
    calculateDamage,
    createSkillAttackAction,
    type CombatDamageType,
} from "../../modules/combat";
import type { DamageCalculationResult, CombatFormulaTrace } from "../../modules/combat";
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

type FormulaDefinitionMap = {
    localFormulas: Map<string, string>;
    finalFormula: string;
};

type FormulaTreeNode = {
    name: string;
    depth: number;
    formula?: string;
    children: FormulaTreeNode[];
};

const numberFormatter = new Intl.NumberFormat("ja-JP", {
    maximumFractionDigits: 3,
});

const formatDamage = (value: number): string => value.toLocaleString();
const getDamageRange = (damage: number): { min: number; max: number } => ({
    min: Math.floor(damage * 0.9),
    max: Math.floor(damage * 1.1),
});
const formatDamageRange = (damage: number): string => {
    const range = getDamageRange(damage);

    return `${formatDamage(range.min)} - ${formatDamage(range.max)}`;
};

const removeComment = (line: string): string => {
    const commentIndex = line.indexOf("//");
    return commentIndex >= 0 ? line.slice(0, commentIndex) : line;
};

const parseFormulaDefinitions = (trace: CombatFormulaTrace | undefined): FormulaDefinitionMap => {
    const localFormulas = new Map<string, string>();
    const finalFormulaLines: string[] = [];

    trace?.formulaSource.split("\n").forEach((line) => {
        const cleanLine = removeComment(line).trim();
        if (!cleanLine) {
            return;
        }

        const localMatch = cleanLine.match(/^@([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
        if (localMatch) {
            localFormulas.set(localMatch[1], localMatch[2].trim());
            return;
        }

        finalFormulaLines.push(cleanLine);
    });

    return {
        localFormulas,
        finalFormula: finalFormulaLines.join(" "),
    };
};

const extractFormulaReferenceNames = (formula: string | undefined): string[] => {
    if (!formula) {
        return [];
    }

    return Array.from(formula.matchAll(/\{([^}]+)\}/g)).map((match) => match[1]);
};

const uniqueNames = (names: string[]): string[] => Array.from(new Set(names));

const buildFormulaTree = (trace: CombatFormulaTrace | undefined): FormulaTreeNode[] => {
    const definitions = parseFormulaDefinitions(trace);

    const buildNode = (name: string, depth: number, ancestors: ReadonlySet<string>): FormulaTreeNode => {
        const formula = definitions.localFormulas.get(name);
        const nextAncestors = new Set(ancestors);
        nextAncestors.add(name);
        const childNames = formula
            ? uniqueNames(extractFormulaReferenceNames(formula)).filter((childName) => !nextAncestors.has(childName))
            : [];

        return {
            name,
            depth,
            formula,
            children: childNames.map((childName) => buildNode(childName, depth + 1, nextAncestors)),
        };
    };

    return uniqueNames(extractFormulaReferenceNames(definitions.finalFormula))
        .map((name) => buildNode(name, 0, new Set()));
};

const flattenFormulaTree = (nodes: FormulaTreeNode[]): FormulaTreeNode[] => (
    nodes.flatMap((node) => [node, ...flattenFormulaTree(node.children)])
);

const getFormulaTreeRowKey = (node: FormulaTreeNode): string => `${node.depth}:${node.name}:${node.formula ?? ""}`;

const mergeFormulaTreeRows = (
    leftTrace: CombatFormulaTrace | undefined,
    rightTrace: CombatFormulaTrace | undefined,
): FormulaTreeNode[] => {
    const rows = [
        ...flattenFormulaTree(buildFormulaTree(leftTrace)),
        ...flattenFormulaTree(buildFormulaTree(rightTrace)),
    ];
    const seen = new Set<string>();

    return rows.filter((row) => {
        const key = getFormulaTreeRowKey(row);
        if (seen.has(key)) {
            return false;
        }

        seen.add(key);
        return true;
    });
};

const findTraceReferenceValue = (
    trace: CombatFormulaTrace | undefined,
    name: string,
): number | undefined => trace?.references.find((reference) => reference.name === name)?.value;

const getFinalFormula = (trace: CombatFormulaTrace | undefined): string => (
    parseFormulaDefinitions(trace).finalFormula
);

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
): DamageCalculationResult | undefined => {
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
    });
};

const calculateCriticalDamage = (
    baseResult: DamageCalculationResult | undefined,
    attacker: CalculatedCharacter,
    defender: CalculatedCharacter,
): DamageCalculationResult | undefined => {
    if (!baseResult) {
        return undefined;
    }

    return calculateDamage({
        attacker,
        defender,
        action: {
            type: "criticalDamage",
            baseDamage: baseResult.damage,
        },
    });
};

type DamageTraceRowsProps = {
    result: DamageCalculationResult | undefined;
    criticalResult: DamageCalculationResult | undefined;
};

const DamageTraceRows: React.FC<DamageTraceRowsProps> = ({ result, criticalResult }) => {
    const trace = result?.trace;
    const criticalTrace = criticalResult?.trace;
    const formulaTreeRows = mergeFormulaTreeRows(trace, criticalTrace);
    const finalFormula = getFinalFormula(trace);
    const criticalFinalFormula = getFinalFormula(criticalTrace);

    if (!trace) {
        return (
            <Typography variant="body2" color="text.secondary">
                計算式はありません
            </Typography>
        );
    }

    return (
        <Box sx={{ p: 1, backgroundColor: "action.hover" }}>
            {finalFormula && (
                <Typography variant="caption" color="text.disabled" sx={{ display: "block", lineHeight: 1.2, mb: 0.75 }}>
                    ダメージ: {finalFormula}
                </Typography>
            )}
            {criticalFinalFormula && (
                <Typography variant="caption" color="text.disabled" sx={{ display: "block", lineHeight: 1.2, mb: 0.75 }}>
                    クリティカル: {criticalFinalFormula}
                </Typography>
            )}
            <Table
                size="small"
                aria-label="damage calculation trace"
                sx={{
                    "& .MuiTableCell-root": {
                        px: 1,
                        py: 0.25,
                    },
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell>項目</TableCell>
                        <TableCell align="right" sx={{ width: 180 }}>ダメージ</TableCell>
                        <TableCell align="right" sx={{ width: 180 }}>クリティカル</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formulaTreeRows.map((node, index) => {
                        const value = findTraceReferenceValue(trace, node.name);
                        const criticalValue = findTraceReferenceValue(criticalTrace, node.name);

                        return (
                            <TableRow key={`${node.name}-${node.depth}-${index}`}>
                                <TableCell>
                                    <Box
                                        sx={{
                                            pl: node.depth * 2,
                                            borderLeft: node.depth > 0 ? "1px solid" : "none",
                                            borderColor: "divider",
                                        }}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {node.name}
                                        </Typography>
                                        {node.formula && (
                                            <Typography
                                                variant="caption"
                                                color="text.disabled"
                                                sx={{ display: "block", lineHeight: 1.2 }}
                                            >
                                                {node.formula}
                                            </Typography>
                                        )}
                                    </Box>
                                </TableCell>
                                <TableCell align="right" sx={{ width: 180 }}>
                                    {value === undefined ? "-" : numberFormatter.format(value)}
                                </TableCell>
                                <TableCell align="right" sx={{ width: 180 }}>
                                    {criticalValue === undefined ? "-" : numberFormatter.format(criticalValue)}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    <TableRow>
                        <TableCell>
                            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                result
                            </Typography>
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>
                            {numberFormatter.format(result.damage)}
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: "bold" }}>
                            {criticalResult ? numberFormatter.format(criticalResult.damage) : "-"}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
};

export const DamageSimulationPanel: React.FC<DamageSimulationPanelProps> = ({
    left,
    right,
}) => {
    const [attackerSide, setAttackerSide] = React.useState<"left" | "right">("left");
    const [skillLevelOverrides, setSkillLevelOverrides] = React.useState<Record<string, number>>({});
    const [expandedKeys, setExpandedKeys] = React.useState<ReadonlySet<string>>(() => new Set());
    const attacker = attackerSide === "left" ? left : right;
    const defender = attackerSide === "left" ? right : left;
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
    const normalCriticalDamage = calculateCriticalDamage(normalAttackDamage, attacker, defender);

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
    const toggleExpanded = (key: string) => {
        setExpandedKeys((current) => {
            const next = new Set(current);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };
    const normalAttackExpandedKey = `${attackerSide}:normalAttack`;
    const isNormalAttackExpanded = expandedKeys.has(normalAttackExpandedKey);

    return (
        <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} sx={{ mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    ダメージシミュレーション
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="caption" color="text.secondary">
                        攻撃者
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
                        sx={{
                            "& .MuiToggleButton-root.Mui-selected": {
                                bgcolor: "primary.main",
                                borderColor: "primary.main",
                                color: "primary.contrastText",
                                fontWeight: "bold",
                                "&:hover": {
                                    bgcolor: "primary.dark",
                                },
                            },
                        }}
                    >
                        <ToggleButton value="left">左</ToggleButton>
                        <ToggleButton value="right">右</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
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
                            <TableCell sx={{ width: 40 }} />
                            <TableCell>攻撃</TableCell>
                            <TableCell sx={{ width: 96 }}>種別</TableCell>
                            <TableCell align="right">ダメージ</TableCell>
                            <TableCell align="right">クリティカル</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            hover
                            onClick={() => {
                                if (normalAttackDamage) {
                                    toggleExpanded(normalAttackExpandedKey);
                                }
                            }}
                            sx={{
                                cursor: normalAttackDamage ? "pointer" : "default",
                            }}
                        >
                            <TableCell sx={{ width: 40 }}>
                                <IconButton
                                    size="small"
                                    disabled={!normalAttackDamage}
                                    aria-label="通常攻撃の計算過程を表示"
                                >
                                    {isNormalAttackExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                </IconButton>
                            </TableCell>
                            <TableCell>通常攻撃</TableCell>
                            <TableCell>
                                {attackerWeapon?.template.type
                                    ? BuiltinWeaponTypes[attackerWeapon.template.type].displayName
                                    : "-"}
                            </TableCell>
                            <TableCell align="right">
                                {normalAttackDamage ? formatDamageRange(normalAttackDamage.damage) : "-"}
                            </TableCell>
                            <TableCell align="right">
                                {normalCriticalDamage ? formatDamageRange(normalCriticalDamage.damage) : "-"}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={5} sx={{ p: 0, borderBottom: isNormalAttackExpanded ? undefined : 0 }}>
                                <Collapse in={isNormalAttackExpanded} timeout="auto" unmountOnExit>
                                    <DamageTraceRows
                                        result={normalAttackDamage}
                                        criticalResult={normalCriticalDamage}
                                    />
                                </Collapse>
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
                            <TableCell sx={{ width: 40 }} />
                            <TableCell>スキル</TableCell>
                            <TableCell align="right" sx={{ width: 96 }}>Lv</TableCell>
                            <TableCell align="right">ダメージ</TableCell>
                            <TableCell align="right">クリティカル</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attackSkills.map((skill) => {
                            const level = getDisplayedSkillLevel(skill);
                            const damage = calculateSkillDamage(attacker, defender, skill, level);
                            const criticalDamage = calculateCriticalDamage(damage, attacker, defender);
                            const expandedKey = `${attackerSide}:skill:${getSkillKey(skill)}`;
                            const isExpanded = expandedKeys.has(expandedKey);

                            return (
                                <React.Fragment key={getSkillKey(skill)}>
                                    <TableRow
                                        hover
                                        onClick={() => {
                                            if (damage) {
                                                toggleExpanded(expandedKey);
                                            }
                                        }}
                                        sx={{
                                            cursor: damage ? "pointer" : "default",
                                        }}
                                    >
                                        <TableCell>
                                            <IconButton
                                                size="small"
                                                disabled={!damage}
                                                aria-label={`${skill.displayName} の計算過程を表示`}
                                            >
                                                {isExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                                            </IconButton>
                                        </TableCell>
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
                                        <TableCell align="right" onClick={(event) => event.stopPropagation()}>
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
                                            {damage === undefined ? "-" : formatDamageRange(damage.damage)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {criticalDamage === undefined ? "-" : formatDamageRange(criticalDamage.damage)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={5} sx={{ p: 0, borderBottom: isExpanded ? undefined : 0 }}>
                                            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                                                <DamageTraceRows
                                                    result={damage}
                                                    criticalResult={criticalDamage}
                                                />
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
