import { Box, Chip, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CharacterValueKey } from "../../modules/character/constants";

export type CharacterValueViewItem = {
    key: CharacterValueKey;
    title: string;
};

const defaultCharacterValueViewItems: CharacterValueViewItem[] = [
    { key: "__meleeAttack", title: "近距離攻撃力" },
    { key: "__resistance", title: "全体 抵抗" },
    { key: "__rangeAttack", title: "遠距離攻撃力" },
    { key: "__accuracy", title: "命中率" },
    { key: "__magicAttack", title: "魔法攻撃力" },
    { key: "__dodging", title: "回避率" },
    { key: "__physicalDefense", title: "物理防御力" },
    { key: "__movementSpeed", title: "移動速度" },
    { key: "__magicalDefense", title: "魔法防御力" },
    { key: "__attackSpeed", title: "攻撃速度" },
    { key: "__hitPoint", title: "HP" },
    { key: "__hitPointRecovery", title: "HP回復" },
    { key: "__magicPoint", title: "MP" },
    { key: "__magicPointRecovery", title: "MP回復" },
];

type CharacterValueDisplayFieldProps = {
    title: string;
    value: number;
    isCustomized?: boolean;
};

export const CharacterValueDisplayField: React.FC<CharacterValueDisplayFieldProps> = ({
    title,
    value,
    isCustomized = false,
}) => (
    <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
        <Box display="flex" alignItems="center" gap={0.5} flex={1}>
            <Typography
                variant="caption"
                sx={{
                    textAlign: "left",
                    color: "text.primary",
                    fontWeight: "normal",
                }}
            >
                {title}
            </Typography>
            {isCustomized && (
                <Chip
                    label="カスタム"
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{
                        fontSize: "8px",
                        height: "16px",
                        ml: 0.5,
                        "& .MuiChip-label": {
                            px: 0.5,
                        },
                    }}
                />
            )}
        </Box>
        <TextField
            type="text"
            size="small"
            value={value}
            sx={{
                width: "70px",
                "& .MuiInputBase-input": {
                    fontSize: 10,
                    height: 5,
                    padding: 1,
                    fontWeight: isCustomized ? "bold" : "normal",
                    backgroundColor: isCustomized ? "#e3f2fd" : "transparent",
                },
            }}
            InputProps={{
                readOnly: true,
            }}
        />
    </Box>
);

type CharacterValuesViewProps = {
    values: Record<CharacterValueKey, number>;
    customizedKeys?: ReadonlySet<CharacterValueKey>;
    items?: CharacterValueViewItem[];
};

export const CharacterValuesView: React.FC<CharacterValuesViewProps> = ({
    values,
    customizedKeys = new Set(),
    items = defaultCharacterValueViewItems,
}) => (
    <Grid container columnSpacing={2}>
        {items.map((item) => (
            <Grid key={item.key} size={{ md: 6, xs: 6 }}>
                <CharacterValueDisplayField
                    title={item.title}
                    value={values[item.key] ?? 0}
                    isCustomized={customizedKeys.has(item.key)}
                />
            </Grid>
        ))}
    </Grid>
);
