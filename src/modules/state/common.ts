import { atomWithHash } from "jotai-location";
import LZString from "lz-string";

export const atomWithCompressedHash = <T>(key: string, initialValue: T) => {
    return atomWithHash<T>(key, initialValue, {
        serialize: (value) => LZString.compressToEncodedURIComponent(JSON.stringify(value)),
        deserialize: (value) => JSON.parse(LZString.decompressFromEncodedURIComponent(value)),
    });
}

// TODO: Confider about implementing the custom atoms to convert list parameter to its index to minify the state size.
// TODO: Implement value validator for atomWithHash to prevent invalid value from being set.