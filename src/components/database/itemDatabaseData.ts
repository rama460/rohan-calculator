import {
    accessories,
    arrows,
    boots,
    b_talismans,
    costumes,
    e_talismans,
    earrings,
    f_talismans,
    g_talismans,
    gauntlets,
    getItemTemplatesForDisplay,
    glasses,
    h_talismans,
    hats,
    helmets,
    i_talismans,
    ItemTemplate,
    j_talismans,
    k_talismans,
    leggings,
    l_talismans,
    n_talismans,
    q_talismans,
    r_talismans,
    s_talismans,
    shields,
    t_talismans,
    tunics,
    w_talismans,
    weapons,
    WeaponTemplate,
} from "../../static/items";

export type ItemDatabaseCategory =
    | "weapon"
    | "shield"
    | "helmet"
    | "gauntlet"
    | "tunic"
    | "legging"
    | "boot"
    | "arrow"
    | "glasses"
    | "hat"
    | "earring"
    | "costume"
    | "accessory"
    | "talisman";

export type ItemDatabaseItem = (WeaponTemplate | ItemTemplate) & { category: string };

const categoryDisplayNames: Record<ItemDatabaseCategory, string> = {
    weapon: "武器",
    shield: "盾",
    helmet: "ヘルメット",
    gauntlet: "ガントレット",
    tunic: "チュニック",
    legging: "レギンス",
    boot: "ブーツ",
    arrow: "矢",
    glasses: "メガネ",
    hat: "帽子",
    earring: "イヤリング",
    costume: "コスチューム",
    accessory: "アクセサリー",
    talisman: "タリスマン",
};

const raceDisplayNames: Record<string, string> = {
    Human: "ヒューマン",
    Elf: "エルフ",
    HalfElf: "ハーフエルフ",
    Dan: "ダン",
    Dekan: "デカン",
    DarkElf: "ダークエルフ",
    Giant: "ジャイアント",
};

const weaponTypeDisplayNames: Record<string, string> = {
    dagger: "ダガー",
    sword: "ソード",
    axe: "アックス",
    blunt: "ブラント",
    dualsword: "デュアルソード",
    polearm: "ポールアーム",
    katar: "カタール",
    zen: "禅",
    staff: "スタッフ",
    bow: "ボウ",
    crossbow: "クロスボウ",
    glove: "グローブ",
    orb: "オーブ",
};

export const getCategoryDisplayName = (category: string): string =>
    categoryDisplayNames[category as ItemDatabaseCategory] || category;

export const getRaceDisplayName = (race: string): string =>
    raceDisplayNames[race] || race;

export const getWeaponTypeDisplayName = (type?: string): string =>
    type ? weaponTypeDisplayNames[type] || type : "";

export const getItemDatabaseItems = (): ItemDatabaseItem[] => {
    const allTalismans = getItemTemplatesForDisplay([
        ...b_talismans,
        ...j_talismans,
        ...h_talismans,
        ...g_talismans,
        ...i_talismans,
        ...n_talismans,
        ...e_talismans,
        ...f_talismans,
        ...r_talismans,
        ...w_talismans,
        ...q_talismans,
        ...s_talismans,
        ...t_talismans,
        ...k_talismans,
        ...l_talismans,
    ]);

    return [
        ...getItemTemplatesForDisplay(weapons).map(item => ({ ...item, category: "weapon" as const })),
        ...getItemTemplatesForDisplay(shields).map(item => ({ ...item, category: "shield" as const })),
        ...getItemTemplatesForDisplay(helmets).map(item => ({ ...item, category: "helmet" as const })),
        ...getItemTemplatesForDisplay(gauntlets).map(item => ({ ...item, category: "gauntlet" as const })),
        ...getItemTemplatesForDisplay(tunics).map(item => ({ ...item, category: "tunic" as const })),
        ...getItemTemplatesForDisplay(leggings).map(item => ({ ...item, category: "legging" as const })),
        ...getItemTemplatesForDisplay(boots).map(item => ({ ...item, category: "boot" as const })),
        ...getItemTemplatesForDisplay(arrows).map(item => ({ ...item, category: "arrow" as const })),
        ...getItemTemplatesForDisplay(glasses).map(item => ({ ...item, category: "glasses" as const })),
        ...getItemTemplatesForDisplay(hats).map(item => ({ ...item, category: "hat" as const })),
        ...getItemTemplatesForDisplay(earrings).map(item => ({ ...item, category: "earring" as const })),
        ...getItemTemplatesForDisplay(costumes).map(item => ({ ...item, category: "costume" as const })),
        ...getItemTemplatesForDisplay(accessories).map(item => ({ ...item, category: "accessory" as const })),
        ...allTalismans.map(item => ({ ...item, category: "talisman" as const })),
    ];
};
