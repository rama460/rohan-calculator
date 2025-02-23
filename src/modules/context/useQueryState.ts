import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";



export default useQueryObject;
import LZString from "lz-string";
const QueryKeyAbbrev = {
    level: "l",
    heroLevel: "hl",
    raceid: "r",
    jobid: "j",
    title: "t",
    strength_base: "sb",
    vitality_base: "vb",
    intelligence_base: "ib",
    agility_base: "ab",
    mentality_base: "mb",
    dexterity_base: "db",
    strength_meta: "sm",
    vitality_meta: "vm",
    intelligence_meta: "im",
    agility_meta: "am",
    mentality_meta: "mm",
    dexterity_meta: "dm",

}
function useQueryObject<T>(key: keyof typeof QueryKeyAbbrev, defaultValue: T) {
    const [searchParams, setSearchParams] = useSearchParams();
    const savedValue = searchParams.get(QueryKeyAbbrev[key]);

    // 圧縮データを解凍
    const initialValue = savedValue
        ? JSON.parse(LZString.decompressFromEncodedURIComponent(savedValue)) : defaultValue;

    const [state, setState] = useState<T>(initialValue);

    useEffect(() => {
        const compressed = LZString.compressToEncodedURIComponent(
            JSON.stringify(state)
        );
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set(QueryKeyAbbrev[key], compressed);
            return newParams;
        }, { replace: true });
    }, [state]);

    return [state, setState] as const;
}
