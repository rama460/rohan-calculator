import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";



export default useQueryObject;
import LZString from "lz-string";

function useQueryObject<T>(key: string, defaultValue: T) {
    const [searchParams, setSearchParams] = useSearchParams();
    const savedValue = searchParams.get(key);

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
            newParams.set(key, compressed);
            return newParams;
        });
    }, [key, state, setSearchParams]);

    return [state, setState] as const;
}
