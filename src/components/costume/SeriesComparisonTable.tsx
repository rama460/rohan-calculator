import {
    Box,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { BuiltinOptions, getDisplayOptionName } from "../../static/options";
import { uiEquipmentAtomFamily } from "../../modules/state/ui";
import { buildSeriesData, SeriesData } from "./costumeData";

const getSeriesItemCount = (series: SeriesData): number => (
    series.category === "accessory"
        ? (series.accessories ?? []).length
        : [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length
);

const getAvailableItemLabels = (series: SeriesData): string[] => {
    if (series.category === "accessory") {
        return (series.accessories ?? []).map((item) => item.name);
    }

    const availableItems = [];
    if (series.costume) availableItems.push("コスチューム");
    if (series.glasses) availableItems.push("メガネ");
    if (series.earrings) availableItems.push("イヤリング");
    if (series.hat) availableItems.push("帽子");
    return availableItems;
};

export const SeriesComparisonTable: React.FC = () => {
    const equippedCostume = useAtomValue(uiEquipmentAtomFamily("costume"));
    const seriesData = buildSeriesData();

    const getDisplayValue = (optionKey: string, value: number) => {
        const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
        if (!option) return value.toString();
        return getDisplayOptionName(option) + ": " + value;
    };

    return (
        <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>シリーズ名</TableCell>
                        <TableCell>個別効果合計</TableCell>
                        <TableCell>2セット効果</TableCell>
                        <TableCell>3セット効果</TableCell>
                        <TableCell>4セット効果</TableCell>
                        <TableCell>最終合計効果</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {seriesData.map((series) => {
                        const itemCount = getSeriesItemCount(series);
                        const availableItems = getAvailableItemLabels(series);

                        return (
                            <TableRow key={`${series.category}-${series.synergyKey}`}>
                                <TableCell>
                                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                        {series.seriesName}
                                    </Typography>
                                    <Box sx={{ mt: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0.5 }}>
                                        <Chip
                                            size="small"
                                            label={series.category === "accessory" ? "アクセサリー" : "コスチューム系"}
                                            color={series.category === "accessory" ? "info" : "default"}
                                            variant="outlined"
                                        />
                                        <Chip
                                            size="small"
                                            label={
                                                series.category === "costume" && itemCount === 3 && !series.costume && equippedCostume
                                                    ? "3点+コス"
                                                    : itemCount + "点セット"
                                            }
                                            color={itemCount === 4 ? "primary" : "secondary"}
                                            variant="outlined"
                                        />
                                        <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                                            {availableItems.join(", ")}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box>
                                        {Object.entries(series.totalStats).map(([key, value]) => (
                                            <Typography key={key} variant="caption" display="block">
                                                {getDisplayValue(key, value)}
                                            </Typography>
                                        ))}
                                    </Box>
                                </TableCell>
                                {[2, 3, 4].map((setCount) => (
                                    <TableCell key={setCount}>
                                        <Box>
                                            {series.synergyEffects[setCount] ?
                                                Object.entries(series.synergyEffects[setCount]).map(([key, value]) => (
                                                    <Typography key={key} variant="caption" display="block" color="primary">
                                                        {getDisplayValue(key, value)}
                                                    </Typography>
                                                )) :
                                                <Typography variant="caption" color="textSecondary">なし</Typography>
                                            }
                                        </Box>
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <Box>
                                        {(() => {
                                            const finalStats: { [key: string]: number } = { ...series.totalStats };
                                            const maxSetEffect = Math.min(itemCount, 4);

                                            for (let setCount = 2; setCount <= maxSetEffect; setCount++) {
                                                if (series.synergyEffects[setCount]) {
                                                    Object.entries(series.synergyEffects[setCount]).forEach(([key, value]) => {
                                                        finalStats[key] = (finalStats[key] || 0) + value;
                                                    });
                                                }
                                            }

                                            return Object.entries(finalStats).map(([key, value]) => (
                                                <Typography key={key} variant="caption" display="block" sx={{ fontWeight: "bold", color: "success.main" }}>
                                                    {getDisplayValue(key, value)}
                                                </Typography>
                                            ));
                                        })()}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
