import { WeaponTemplate, ItemTemplate } from '../../static/items';
import { BuiltinOptions, getDisplayOptionName } from '../../static/options';

export type ItemDetailItem = (WeaponTemplate | ItemTemplate) & { category: string };

export const getOptionDisplayName = (optionKey: string, value: number) => {
    const option = BuiltinOptions[optionKey as keyof typeof BuiltinOptions];
    if (option) {
        return `${getDisplayOptionName(option)}: ${value > 0 ? '+' : ''}${value}`;
    }
    return `${optionKey}: ${value > 0 ? '+' : ''}${value}`;
};

export const getRaceDisplayName = (race: string) => {
    const raceMap: Record<string, string> = {
        Human: 'ヒューマン',
        Elf: 'エルフ',
        HalfElf: 'ハーフエルフ',
        Dan: 'ダン',
        Dekan: 'デカン',
        DarkElf: 'ダークエルフ',
        Giant: 'ジャイアント',
    };
    return raceMap[race] || race;
};

export const getRelatedItems = (item: ItemDetailItem, allItems: ItemDetailItem[]) => {
    if (!allItems.length) return [];

    const related: ItemDetailItem[] = [];

    if (item.seriesName) {
        const sameSeriesItems = allItems.filter(candidate =>
            candidate.seriesName === item.seriesName &&
            !(candidate.id === item.id && candidate.category === item.category)
        ).slice(0, 3);
        related.push(...sameSeriesItems);
    }

    if (related.length < 3) {
        const sameCategoryItems = allItems.filter(candidate =>
            candidate.category === item.category &&
            !(candidate.id === item.id && candidate.category === item.category) &&
            !related.some(relatedItem => relatedItem.id === candidate.id && relatedItem.category === candidate.category)
        ).slice(0, 3 - related.length);
        related.push(...sameCategoryItems);
    }

    if (related.length < 3 && 'type' in item && item.type) {
        const sameTypeItems = allItems.filter(candidate =>
            'type' in candidate && candidate.type === item.type &&
            !(candidate.id === item.id && candidate.category === item.category) &&
            !related.some(relatedItem => relatedItem.id === candidate.id && relatedItem.category === candidate.category)
        ).slice(0, 3 - related.length);
        related.push(...sameTypeItems);
    }

    return related;
};
