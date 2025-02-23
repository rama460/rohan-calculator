import { useEffect, useState } from "react";
import { Item, ItemTemplate } from "../../components/static/items";
import { BuiltinOptionKeyType } from "../../components/static/options";
import { useSearchParams } from "react-router-dom";
import LZString from "lz-string";
import { debounce } from "@mui/material";

export type QueryItemState = {
    name: string;
    baseOptions?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    additionalOptions?: {
        [key in BuiltinOptionKeyType]?: number;
    }
    enchantLevel?: number;
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
        name: item.name,
    }
    if (Object.keys(item.additionalOptions).length > 0) {
        query.additionalOptions = item.additionalOptions;
    }
    if (item.enchantLevel > 0) {
        query.enchantLevel = item.enchantLevel;
    }
    return query;
}

const queryToItem = (query: QueryItemState, items: ItemTemplate[]) => {
    if (!query)
        return null;
    const itemTemplate = items.find((item) => item.name === query.name);
    if (!itemTemplate) {
        throw new Error(`Item not found: ${query.name}`);
    }
    const item: Item = {
        name: query.name,
        baseOptions: itemTemplate.fixedBaseOptions ?? itemTemplate.enchantableBaseOptions?.[query.enchantLevel ?? 0] ?? {},
        additionalOptions: query.additionalOptions ?? {},
        enchantLevel: query.enchantLevel ?? 0,
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