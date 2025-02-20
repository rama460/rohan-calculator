import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function useQueryObject<T>(key: string, defaultValue: T) {
    const [searchParams, setSearchParams] = useSearchParams();
    const savedValue = searchParams.get(key);

    const initialValue = savedValue ? JSON.parse(decodeURIComponent(savedValue)) : defaultValue;
    const [state, setState] = useState<T>(initialValue);

    useEffect(() => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set(key, encodeURIComponent(JSON.stringify(state)));
            return newParams;
        });
    }, [key, state, setSearchParams]);

    return [state, setState] as const;
}

export default useQueryObject;