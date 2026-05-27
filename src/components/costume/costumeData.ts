import { costumes, earrings, getItemTemplatesForDisplay, glasses, hats, ItemTemplate } from "../../static/items";

export interface SeriesData {
    seriesName: string;
    synergyKey: string;
    costume?: ItemTemplate;
    glasses?: ItemTemplate;
    earrings?: ItemTemplate;
    hat?: ItemTemplate;
    totalStats: { [key: string]: number };
    synergyEffects: { [key: number]: { [key: string]: number } };
}

export const displayCostumes = getItemTemplatesForDisplay(costumes);
export const displayGlasses = getItemTemplatesForDisplay(glasses);
export const displayEarrings = getItemTemplatesForDisplay(earrings);
export const displayHats = getItemTemplatesForDisplay(hats);

export const buildSeriesData = (): SeriesData[] => {
    const seriesMap = new Map<string, SeriesData>();

    [...displayCostumes, ...displayGlasses, ...displayEarrings, ...displayHats].forEach(item => {
        if (!item.synergyKey || !item.seriesName) return;

        if (!seriesMap.has(item.synergyKey)) {
            seriesMap.set(item.synergyKey, {
                seriesName: item.seriesName,
                synergyKey: item.synergyKey,
                totalStats: {},
                synergyEffects: item.synergyOptions || {}
            });
        }

        const series = seriesMap.get(item.synergyKey)!;

        if (displayCostumes.includes(item)) {
            series.costume = item;
        } else if (displayGlasses.includes(item)) {
            series.glasses = item;
        } else if (displayEarrings.includes(item)) {
            series.earrings = item;
        } else if (displayHats.includes(item)) {
            series.hat = item;
        }
    });

    seriesMap.forEach(series => {
        const items = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean) as ItemTemplate[];

        items.forEach(item => {
            if (item.fixedBaseOptions) {
                Object.entries(item.fixedBaseOptions).forEach(([key, value]) => {
                    series.totalStats[key] = (series.totalStats[key] || 0) + value;
                });
            }
        });
    });

    return Array.from(seriesMap.values()).filter(series => {
        const itemCount = [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
        return itemCount >= 3;
    });
};
