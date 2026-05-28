import LZString from "lz-string";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../static/options";
import { SKillOriginNames, SkillOrigin } from "../../static/skills/skill";
import { titles } from "../../static/titles";
import { characterStatusNames, CharacterStatusKey, EquipmentSlotKey } from "./constants";
import { createDefaultBuffs } from "./defaults";
import { encodeAppState } from "./serialize";
import {
    AppState,
    CharacterState,
    EquipmentLeafState,
    OptionMap,
    SkillLevelMap,
} from "./types";

type LegacyEquipmentItem = {
    n: number;
    e?: number;
    b?: Record<string, number>;
    a?: Record<string, number>;
    c?: Record<string, number>;
};

type LegacyBuffItem = {
    n: number;
    l: number;
};

const legacyEquipmentKeys: Record<EquipmentSlotKey, string> = {
    helmet: "eh",
    gauntlet: "eg",
    tunic: "et",
    leggings: "el",
    boots: "eb",
    weapon: "ew",
    shield: "es",
    arrow: "ea",
    accessory1: "e1",
    accessory2: "e2",
    accessory3: "e3",
    accessory4: "e4",
    glasses: "ecg",
    hat: "ech",
    earrings: "ece",
    costume: "ecc",
    talismanH: "eth",
    talismanG: "etg",
    talismanI: "eti",
    talismanB: "etb",
    talismanJ: "etj",
    talismanN: "etn",
    talismanE: "ete",
    talismanF: "etf",
    talismanR: "etr",
    talismanW: "etw",
    talismanQ: "etq",
    talismanS: "ets",
    talismanT: "ett",
    talismanK: "etk",
    talismanL: "etl",
    pet: "ep",
    ride: "er",
    rune1: "er1",
    rune2: "er2",
    rune3: "er3",
    rune4: "er4",
    rune5: "er5",
    rune6: "er6",
};

const legacyStatusPrefixes: Record<CharacterStatusKey, string> = {
    strength: "ss",
    vitality: "sv",
    dexterity: "sd",
    intelligence: "si",
    agility: "sa",
    mentality: "sm",
};

const legacyBuffKeys: Record<SkillOrigin, string> = {
    Self: "BSe",
    Group: "BGr",
    Guild: "BGu",
    Cash: "BCa",
};

const legacyHashKeys = new Set([
    "bl",
    "bh",
    "br",
    "bj",
    "title",
    "pskills",
    "sskills",
    ...Object.values(legacyEquipmentKeys),
    ...Object.values(legacyBuffKeys),
    ...Object.values(legacyStatusPrefixes).flatMap((prefix) => [`${prefix}b`, `${prefix}m`]),
]);

export const getLegacyUrlHash = (input: string): string => {
    const hashIndex = input.indexOf("#");
    if (hashIndex >= 0) {
        return input.slice(hashIndex + 1);
    }

    return input.startsWith("?") ? input.slice(1) : input;
};

export const getUrlBeforeHash = (input: string): string => {
    const hashIndex = input.indexOf("#");
    if (hashIndex >= 0) {
        return input.slice(0, hashIndex);
    }

    return "";
};

export const isLegacyUrlHash = (hash: string): boolean => {
    const params = new URLSearchParams(getLegacyUrlHash(hash));
    return !params.has("c") && Array.from(params.keys()).some((key) => legacyHashKeys.has(key));
};

const readNumber = (params: URLSearchParams, key: string, defaultValue: number): number => {
    const value = params.get(key);
    if (value === null || value === "") {
        return defaultValue;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : defaultValue;
};

const readCompressedJson = <T>(
    params: URLSearchParams,
    key: string,
    defaultValue: T
): T => {
    const value = params.get(key);
    if (!value) {
        return defaultValue;
    }

    const decompressed = LZString.decompressFromEncodedURIComponent(value.split(" ").join("+"));
    if (!decompressed) {
        return defaultValue;
    }

    return JSON.parse(decompressed) as T;
};

const mapOptionIds = (options?: Record<string, number>): OptionMap | undefined => {
    if (!options) {
        return undefined;
    }

    const mapped = Object.fromEntries(
        Object.entries(options).flatMap(([id, value]) => {
            const key = BuiltinOptionKeys[Number(id)] as BuiltinOptionKeyType | undefined;
            return key === undefined || value === undefined ? [] : [[key, value]];
        })
    ) as OptionMap;

    return Object.keys(mapped).length > 0 ? mapped : undefined;
};

const compactEquipment = (equipment: EquipmentLeafState): EquipmentLeafState => (
    Object.fromEntries(
        Object.entries(equipment).filter(([, value]) => value !== undefined)
    ) as EquipmentLeafState
);

const convertEquipment = (params: URLSearchParams): CharacterState["equipment"] => (
    Object.fromEntries(
        Object.entries(legacyEquipmentKeys).flatMap(([slot, key]) => {
            const legacyItem = readCompressedJson<LegacyEquipmentItem | undefined>(params, key, undefined);
            if (!legacyItem) {
                return [];
            }

            return [[slot, compactEquipment({
                templateId: legacyItem.n,
                enchantLevel: legacyItem.e && legacyItem.e > 0 ? legacyItem.e : undefined,
                baseOverrides: mapOptionIds(legacyItem.b),
                additionalOptions: mapOptionIds(legacyItem.a),
                craftedOptions: mapOptionIds(legacyItem.c),
            })]];
        })
    ) as CharacterState["equipment"]
);

const convertStatuses = (params: URLSearchParams): CharacterState["statuses"] => ({
    allocated: Object.fromEntries(
        characterStatusNames.map((status) => [
            status,
            readNumber(params, `${legacyStatusPrefixes[status]}b`, 0),
        ])
    ) as CharacterState["statuses"]["allocated"],
    meta: Object.fromEntries(
        characterStatusNames.map((status) => [
            status,
            readNumber(params, `${legacyStatusPrefixes[status]}m`, 0),
        ])
    ) as CharacterState["statuses"]["meta"],
});

const convertBuffs = (params: URLSearchParams): CharacterState["buffs"] => ({
    ...createDefaultBuffs(),
    ...Object.fromEntries(
        SKillOriginNames.map((origin) => [
            origin,
            readCompressedJson<LegacyBuffItem[]>(params, legacyBuffKeys[origin], []).map((buff) => ({
                skillId: buff.n,
                level: buff.l,
            })),
        ])
    ),
});

export const convertLegacyHashToAppState = (hash: string): AppState => {
    const params = new URLSearchParams(getLegacyUrlHash(hash));
    const titleId = readNumber(params, "title", -1);
    const character: CharacterState = {
        id: "main",
        name: "Character",
        base: {
            level: readNumber(params, "bl", 115),
            heroLevel: readNumber(params, "bh", 50),
            raceid: readNumber(params, "br", 0),
            jobid: readNumber(params, "bj", 0),
            title: titles[titleId]?.name ?? "none",
        },
        statuses: convertStatuses(params),
        equipment: convertEquipment(params),
        buffs: convertBuffs(params),
        skillLevels: {
            primary: readCompressedJson<SkillLevelMap>(params, "pskills", {}),
            secondary: readCompressedJson<SkillLevelMap>(params, "sskills", {}),
        },
    };

    return {
        version: 1,
        activeCharacterId: character.id,
        characters: {
            [character.id]: character,
        },
    };
};

export const convertLegacyUrl = (input: string): string => {
    const hash = getLegacyUrlHash(input);
    const encoded = encodeAppState(convertLegacyHashToAppState(hash));
    const baseUrl = getUrlBeforeHash(input);

    return `${baseUrl}#c=${encoded}`;
};

export const migrateLegacyHashInLocation = (
    location: Location,
    history: History
): boolean => {
    if (!isLegacyUrlHash(location.hash)) {
        return false;
    }

    const nextUrl = `${location.pathname}${location.search}${convertLegacyUrl(location.hash)}`;
    history.replaceState(history.state, "", nextUrl);
    return true;
};
