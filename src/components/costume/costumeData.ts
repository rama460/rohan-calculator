import { accessories, costumes, earrings, getItemTemplatesForDisplay, glasses, hats, ItemTemplate } from "../../static/items";

export type SeriesCategory = "costume" | "accessory";

export interface SeriesData {
    seriesName: string;
    synergyKey: string;
    category: SeriesCategory;
    costume?: ItemTemplate;
    glasses?: ItemTemplate;
    earrings?: ItemTemplate;
    hat?: ItemTemplate;
    accessories?: ItemTemplate[];
    totalStats: { [key: string]: number };
    synergyEffects: { [key: number]: { [key: string]: number } };
}

export const displayCostumes = getItemTemplatesForDisplay(costumes);
export const displayGlasses = getItemTemplatesForDisplay(glasses);
export const displayEarrings = getItemTemplatesForDisplay(earrings);
export const displayHats = getItemTemplatesForDisplay(hats);
export const displayAccessories = getItemTemplatesForDisplay(accessories);

const accessorySeriesNames: Record<string, string> = {
    genesis1: "ジェネシス Ⅰ",
    genesis2: "ジェネシス Ⅱ",
    genesis3: "ジェネシス Ⅲ",
    ignis1: "イグニス Ⅰ",
    ignis2: "イグニス Ⅱ",
    ignis3: "イグニス Ⅲ",
    albos1: "アルボス Ⅰ",
    albos2: "アルボス Ⅱ",
    albos3: "アルボス Ⅲ",
    chaos: "ケイオス",
    megas: "メイガス",
};

const getSeriesMapKey = (category: SeriesCategory, synergyKey: string) => `${category}:${synergyKey}`;

const addFixedOptions = (target: { [key: string]: number }, item: ItemTemplate) => {
    if (!item.fixedBaseOptions) {
        return;
    }

    Object.entries(item.fixedBaseOptions).forEach(([key, value]) => {
        target[key] = (target[key] || 0) + value;
    });
};

export const buildSeriesData = (): SeriesData[] => {
    const seriesMap = new Map<string, SeriesData>();

    [...displayCostumes, ...displayGlasses, ...displayEarrings, ...displayHats].forEach(item => {
        if (!item.synergyKey || !item.seriesName) return;
        const mapKey = getSeriesMapKey("costume", item.synergyKey);

        if (!seriesMap.has(mapKey)) {
            seriesMap.set(mapKey, {
                seriesName: item.seriesName,
                synergyKey: item.synergyKey,
                category: "costume",
                totalStats: {},
                synergyEffects: item.synergyOptions || {}
            });
        }

        const series = seriesMap.get(mapKey)!;

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

    displayAccessories.forEach(item => {
        if (!item.synergyKey) return;
        const mapKey = getSeriesMapKey("accessory", item.synergyKey);

        if (!seriesMap.has(mapKey)) {
            seriesMap.set(mapKey, {
                seriesName: accessorySeriesNames[item.synergyKey] ?? item.synergyKey,
                synergyKey: item.synergyKey,
                category: "accessory",
                accessories: [],
                totalStats: {},
                synergyEffects: item.synergyOptions || {}
            });
        }

        const series = seriesMap.get(mapKey)!;
        series.accessories = [...(series.accessories ?? []), item];
    });

    seriesMap.forEach(series => {
        const items = [
            series.costume,
            series.glasses,
            series.earrings,
            series.hat,
            ...(series.accessories ?? []),
        ].filter(Boolean) as ItemTemplate[];

        items.forEach(item => addFixedOptions(series.totalStats, item));
    });

    return Array.from(seriesMap.values()).filter(series => {
        const itemCount = series.category === "accessory"
            ? (series.accessories ?? []).length
            : [series.costume, series.glasses, series.earrings, series.hat].filter(Boolean).length;
        return itemCount >= 3;
    });
};
