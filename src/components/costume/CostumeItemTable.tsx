import {
    Avatar,
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { ItemTemplate } from "../../static/items";
import { BuiltinOptions, getDisplayOptionName } from "../../static/options";

interface CostumeItemTableProps {
    items: ItemTemplate[];
    categoryName: string;
}

const getDisplayBaseOptions = (item: ItemTemplate): Record<string, number> => ({
    ...(item.enchantableBaseOptions?.[0] as Record<string, number> | undefined),
    ...(item.fixedBaseOptions as Record<string, number> | undefined),
});

export const CostumeItemTable: React.FC<CostumeItemTableProps> = ({ items, categoryName }) => (
    <TableContainer component={Paper} sx={{ mb: 2 }}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>アイコン</TableCell>
                    <TableCell>アイテム名</TableCell>
                    <TableCell>基本オプション</TableCell>
                    <TableCell>セットオプション</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item) => (
                    <TableRow key={`${categoryName}-${item.id}`}>
                        <TableCell>
                            <Avatar
                                src={item.icon}
                                alt={item.name}
                                sx={{ width: 32, height: 32 }}
                            />
                        </TableCell>
                        <TableCell>
                            <Typography variant="body2">{item.name}</Typography>
                        </TableCell>
                        <TableCell>
                            {Object.keys(getDisplayBaseOptions(item)).length > 0 ? (
                                <Box>
                                    {Object.entries(getDisplayBaseOptions(item)).map(([key, value]) => {
                                        const option = BuiltinOptions[key as keyof typeof BuiltinOptions];
                                        if (!option || !value) return null;
                                        return (
                                            <Typography
                                                key={key}
                                                variant="caption"
                                                display="block"
                                                sx={{ color: option.displayColor }}
                                            >
                                                {getDisplayOptionName(option)}: {value}
                                            </Typography>
                                        );
                                    })}
                                </Box>
                            ) : (
                                <Typography variant="caption" color="textSecondary">
                                    なし
                                </Typography>
                            )}
                        </TableCell>
                        <TableCell>
                            {item.synergyOptions ? (
                                <Box>
                                    {Object.entries(item.synergyOptions).map(([setLevel, options]) => (
                                        <Box key={setLevel} sx={{ mb: 1, border: "1px solid #ddd", padding: 1, borderRadius: 1 }}>
                                            <Typography variant="caption" color="primary" display="block" sx={{ fontWeight: "bold" }}>
                                                {setLevel}セット効果:
                                            </Typography>
                                            {Object.entries(options).map(([optionKey, optionValue]) => {
                                                const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
                                                if (!option || !optionValue) return null;
                                                return (
                                                    <Typography
                                                        key={optionKey}
                                                        variant="caption"
                                                        display="block"
                                                        sx={{ color: option.displayColor, ml: 1 }}
                                                    >
                                                        {getDisplayOptionName(option)}: {optionValue}
                                                    </Typography>
                                                );
                                            })}
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                <Typography variant="caption" color="textSecondary">
                                    なし
                                </Typography>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
