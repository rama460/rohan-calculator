import { useEffect, useState } from "react";
import { Item, ItemTemplate } from "../../components/static/items";
import { BuiltinOptionKeyType } from "../../components/static/options";
import { useSearchParams } from "react-router-dom";
import LZString from "lz-string";
import { debounce } from "@mui/material";
import { races } from "../../components/static/races";
import { useBasesContext } from "./useBasesContext";

export type QueryItemState = {
    n: string;
    b?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    a?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    c?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    e?: number;
}

const QueryKeyAbbrev = {
    weapon: "w",
    shield: "sh",
    arrow: "a",
    helmet: "he",
    tunic: "tu",
    leggings: "le",
    gauntlet: "g",
    boots: "b",
    accessory1: "ac1",
    accessory2: "ac2",
    accessory3: "ac3",
    accessory4: "ac4",
    glasses: "gl",
    hat: "ha",
    earrings: "ea",
    costume: "co",
    talismanH: "th",
    talismanG: "tg",
    talismanI: "ti",
    talismanB: "tb",
    talismanJ: "tj",
    talismanN: "tn",
    talismanE: "te",
    talismanR: "tr",
    talismanW: "tw",
    talismanQ: "tq",
    talismanS: "ts",
    pet: "p",
}

const queryFromItem = (item: Item | null) => {
    if (!item) {
        return null;
    }
    const query: QueryItemState = {
        n: item.name,
    }
    if (Object.keys(item.additionalOptions).length > 0) {
        query.a = item.additionalOptions;
    }
    if (Object.keys(item.craftedOptions).length > 0) {
        query.c = item.craftedOptions;
    }
    if (item.enchantLevel > 0) {
        query.e = item.enchantLevel;
    }

    return query;
}

const queryToItem = (query: QueryItemState, items: ItemTemplate[]) => {
    if (!query)
        return null;
    const itemTemplate = items.find((item) => item.name === query.n);
    if (!itemTemplate) {
        throw new Error(`Item not found: ${query.n}`);
    }
    const bases = useBasesContext();
    const baseOptions = {
        ...itemTemplate.fixedBaseOptions ?? {},
        ...itemTemplate.enchantableBaseOptions?.[query.e ?? 0] ?? {},
        ...itemTemplate.raceBaseOptions?.[races[bases.raceid].name] ?? {},
        ...itemTemplate.raceEnchantableBaseOptions?.[races[bases.raceid].name]?.[query.e ?? 0] ?? {},
    }
    const item: Item = {
        name: query.n,
        baseOptions: baseOptions,
        additionalOptions: query.a ?? {},
        craftedOptions: query.c ?? {},
        enchantLevel: query.e ?? 0,
        icon: itemTemplate.icon,
        availableRaces: itemTemplate.availableRaces,
        synergyKey: itemTemplate.synergyKey,
        synergyOptions: itemTemplate.synergyOptions,
    }
    if ("type" in itemTemplate)
        return {
            ...item,
            type: itemTemplate.type,
        }
    return item;

}
function useQueryItemObject(key: keyof typeof QueryKeyAbbrev, defaultValue: Item | null, items: ItemTemplate[]) {
    const [searchParams, setSearchParams] = useSearchParams();
    const savedValue = searchParams.get(QueryKeyAbbrev[key]);
    // 圧縮データを解凍
    const initialValue = savedValue
        ? queryToItem(JSON.parse(LZString.decompressFromEncodedURIComponent(savedValue)), items) : defaultValue;

    const [state, setState] = useState<Item | null>(initialValue);

    const updateParams = debounce((newState) => {
        if (!newState && searchParams.has(key)) {
            setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.delete(key);
                return newParams;
            }, { replace: true });
            return;
        }
        const compressed = LZString.compressToEncodedURIComponent(
            JSON.stringify(queryFromItem(newState))
        );
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set(QueryKeyAbbrev[key], compressed);
            return newParams;
        }, { replace: true });
    }, 1000);

    useEffect(() => {
        updateParams(state);
    }, [state]);

    return [state, setState] as const;
}

export default useQueryItemObject;