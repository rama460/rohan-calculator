import { atomWithHash } from "jotai-location";
import LZString from "lz-string";

export const atomWithCompressedHash = <T>(key: string, initialValue: T) => {
    return atomWithHash<T>(key, initialValue, {
        serialize: (value) => LZString.compressToEncodedURIComponent(JSON.stringify(value)),
        deserialize: (value) => JSON.parse(LZString.decompressFromEncodedURIComponent(value)),
    });
}
