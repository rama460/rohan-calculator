import LZString from "lz-string";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../static/options";
import { SKillOriginNames, SkillOrigin } from "../../static/skills/skill";
import { titles } from "../../static/titles";
import { createDefaultAppState } from "./defaults";
import {
    characterStatusNames,
    CharacterStatusKey,
    equipmentSlotById,
    equipmentSlotIds,
    equipmentSlotKeys,
    EquipmentSlotKey,
} from "./constants";
import {
    AppState,
    BuffLeafState,
    CharacterId,
    CharacterState,
    EquipmentLeafState,
    OptionMap,
    SkillLevelMap,
} from "./types";

type SerializedOptionMap = Record<number, number>;
type SerializedBaseState = [number, number, number, number, number | string];
type SerializedStatusState = [SerializedOptionMap?, SerializedOptionMap?];
type SerializedEquipmentEntry = [
    number,
    number,
    (number | null)?,
    (SerializedOptionMap | null)?,
    (SerializedOptionMap | null)?,
    SerializedOptionMap?,
];
type SerializedBuffEntry = [number, Array<[number, number]>];
type SerializedSkillLevels = [SkillLevelMap?, SkillLevelMap?];

type SerializedCharacterState = {
    i: CharacterId;
    n: string;
    b: SerializedBaseState;
    s?: SerializedStatusState;
    e?: SerializedEquipmentEntry[];
    u?: SerializedBuffEntry[];
    k?: SerializedSkillLevels;
};

export type SerializedAppState = {
    v: 2;
    a: CharacterId;
    c: SerializedCharacterState[];
};

type LegacySerializedEquipmentLeafState = {
    t: number;
    e?: number;
    b?: SerializedOptionMap;
    a?: SerializedOptionMap;
    c?: SerializedOptionMap;
};

type LegacySerializedBuffLeafState = {
    s: number;
    l: number;
};

type LegacySerializedCharacterState = {
    i: CharacterId;
    n: string;
    b: {
        l: number;
        h: number;
        r: number;
        j: number;
        t: string;
    };
    s: {
        a: Record<number, number>;
        m: Record<number, number>;
    };
    e: Partial<Record<EquipmentSlotKey, LegacySerializedEquipmentLeafState>>;
    u: Record<SkillOrigin, LegacySerializedBuffLeafState[]>;
    k: {
        p: SkillLevelMap;
        s: SkillLevelMap;
    };
};

type LegacySerializedAppState = {
    v: 1;
    a: CharacterId;
    c: Record<CharacterId, LegacySerializedCharacterState>;
};

const skillOriginIds: Record<SkillOrigin, number> = {
    Self: 0,
    Group: 1,
    Guild: 2,
    Cash: 3,
};

const skillOriginById = Object.fromEntries(
    Object.entries(skillOriginIds).map(([origin, id]) => [id, origin])
) as Record<number, SkillOrigin>;

const isEmptyObject = (value?: object): boolean =>
    !value || Object.keys(value).length === 0;

const getOptionId = (key: BuiltinOptionKeyType): number => BuiltinOptionKeys.indexOf(key);
const getOptionKey = (id: number): BuiltinOptionKeyType | undefined => BuiltinOptionKeys[id];
const getStatusId = (key: CharacterStatusKey): number => characterStatusNames.indexOf(key);
const getStatusKey = (id: number): CharacterStatusKey | undefined => characterStatusNames[id];
const getTitleId = (key: string): number => titles.findIndex((title) => title.name === key);
const getTitleKey = (idOrKey: number | string): string => {
    if (typeof idOrKey === "string") {
        return idOrKey;
    }
    return titles[idOrKey]?.name ?? "none";
};

const serializeOptionMap = (
    options?: OptionMap,
    omitZero = false
): SerializedOptionMap | undefined => {
    if (!options || Object.keys(options).length === 0) {
        return undefined;
    }

    const serialized = Object.fromEntries(
        Object.entries(options)
            .filter(([, value]) => value !== undefined && (!omitZero || value !== 0))
            .map(([key, value]) => [getOptionId(key as BuiltinOptionKeyType), value])
    );

    return Object.keys(serialized).length > 0 ? serialized : undefined;
};

const deserializeOptionMap = (options?: SerializedOptionMap | null): OptionMap | undefined => {
    if (!options) {
        return undefined;
    }

    return Object.fromEntries(
        Object.entries(options)
            .map(([id, value]) => [getOptionKey(Number(id)), value] as const)
            .filter(([key]) => key !== undefined)
    ) as OptionMap;
};

const serializeStatusMap = (values: Record<CharacterStatusKey, number>): SerializedOptionMap | undefined => {
    const serialized = Object.fromEntries(
        Object.entries(values)
            .filter(([, value]) => value !== 0)
            .map(([key, value]) => [getStatusId(key as CharacterStatusKey), value])
    );

    return Object.keys(serialized).length > 0 ? serialized : undefined;
};

const deserializeStatusMap = (values?: SerializedOptionMap): Record<CharacterStatusKey, number> => {
    const restored = Object.fromEntries(
        characterStatusNames.map((status) => [status, 0])
    ) as Record<CharacterStatusKey, number>;

    Object.entries(values ?? {}).forEach(([id, value]) => {
        const key = getStatusKey(Number(id));
        if (key) {
            restored[key] = value;
        }
    });

    return restored;
};

const trimEquipmentEntry = (entry: SerializedEquipmentEntry): SerializedEquipmentEntry => {
    let lastDefinedIndex = entry.length - 1;
    while (lastDefinedIndex > 1 && entry[lastDefinedIndex] === undefined) {
        lastDefinedIndex -= 1;
    }

    const trimmed = entry.slice(0, lastDefinedIndex + 1) as SerializedEquipmentEntry;
    for (let index = 2; index < trimmed.length; index += 1) {
        if (trimmed[index] === undefined) {
            trimmed[index] = null;
        }
    }

    return trimmed;
};

const serializeEquipment = (
    equipment: CharacterState["equipment"]
): SerializedCharacterState["e"] => {
    const serialized = equipmentSlotKeys.flatMap((slot): SerializedEquipmentEntry[] => {
        const item = equipment[slot];
        if (!item) {
            return [];
        }

        const baseOverrides = serializeOptionMap(item.baseOverrides);
        const additionalOptions = serializeOptionMap(item.additionalOptions, true);
        const craftedOptions = serializeOptionMap(item.craftedOptions, true);
        return [trimEquipmentEntry([
            equipmentSlotIds[slot],
            item.templateId,
            item.enchantLevel && item.enchantLevel !== 0 ? item.enchantLevel : undefined,
            baseOverrides,
            additionalOptions,
            craftedOptions,
        ])];
    });

    return serialized.length > 0 ? serialized : undefined;
};

const deserializeEquipment = (
    equipment?: SerializedCharacterState["e"]
): CharacterState["equipment"] => {
    if (!equipment) {
        return {};
    }

    return Object.fromEntries(
        equipment.flatMap((item): Array<[EquipmentSlotKey, EquipmentLeafState]> => {
            const [slotId, templateId, enchantLevel, baseOverrides, additionalOptions, craftedOptions] = item;
            const slot = equipmentSlotById[slotId];
            if (!slot) {
                return [];
            }

            return [[slot, {
                templateId,
                enchantLevel: enchantLevel ?? undefined,
                baseOverrides: deserializeOptionMap(baseOverrides),
                additionalOptions: deserializeOptionMap(additionalOptions),
                craftedOptions: deserializeOptionMap(craftedOptions),
            }]];
        })
    ) as Partial<Record<EquipmentSlotKey, EquipmentLeafState>>;
};

const serializeBuffs = (buffs: CharacterState["buffs"]): SerializedCharacterState["u"] => {
    const serialized = SKillOriginNames.flatMap((origin): SerializedBuffEntry[] => {
        const originBuffs = buffs[origin];
        if (originBuffs.length === 0) {
            return [];
        }

        return [[
            skillOriginIds[origin],
            originBuffs.map((buff) => [buff.skillId, buff.level]),
        ]];
    });

    return serialized.length > 0 ? serialized : undefined;
};

const deserializeBuffs = (buffs?: SerializedCharacterState["u"]): CharacterState["buffs"] => {
    const restored = Object.fromEntries(
        SKillOriginNames.map((origin) => [origin, [] as BuffLeafState[]])
    ) as CharacterState["buffs"];

    (buffs ?? []).forEach(([originId, originBuffs]) => {
        const origin = skillOriginById[originId];
        if (!origin) {
            return;
        }

        restored[origin] = originBuffs.map(([skillId, level]): BuffLeafState => ({
            skillId,
            level,
        }));
    });

    return restored;
};

const serializeSkillLevels = (
    skillLevels: CharacterState["skillLevels"]
): SerializedCharacterState["k"] => {
    if (isEmptyObject(skillLevels.primary) && isEmptyObject(skillLevels.secondary)) {
        return undefined;
    }

    return [
        isEmptyObject(skillLevels.primary) ? undefined : skillLevels.primary,
        isEmptyObject(skillLevels.secondary) ? undefined : skillLevels.secondary,
    ];
};

const deserializeSkillLevels = (skillLevels?: SerializedCharacterState["k"]): CharacterState["skillLevels"] => {
    return {
        primary: skillLevels?.[0] ?? {},
        secondary: skillLevels?.[1] ?? {},
    };
};

export const serializeCharacterState = (character: CharacterState): SerializedCharacterState => {
    const titleId = getTitleId(character.base.title);
    const allocated = serializeStatusMap(character.statuses.allocated);
    const meta = serializeStatusMap(character.statuses.meta);
    const serialized: SerializedCharacterState = {
        i: character.id,
        n: character.name,
        b: [
            character.base.level,
            character.base.heroLevel,
            character.base.raceid,
            character.base.jobid,
            titleId >= 0 ? titleId : character.base.title,
        ],
    };

    if (allocated || meta) {
        serialized.s = [allocated, meta];
    }

    const equipment = serializeEquipment(character.equipment);
    if (equipment) {
        serialized.e = equipment;
    }

    const buffs = serializeBuffs(character.buffs);
    if (buffs) {
        serialized.u = buffs;
    }

    const skillLevels = serializeSkillLevels(character.skillLevels);
    if (skillLevels) {
        serialized.k = skillLevels;
    }

    return serialized;
};

export const deserializeCharacterState = (character: SerializedCharacterState): CharacterState => {
    return {
        id: character.i,
        name: character.n,
        base: {
            level: character.b[0],
            heroLevel: character.b[1],
            raceid: character.b[2],
            jobid: character.b[3],
            title: getTitleKey(character.b[4]),
        },
        statuses: {
            allocated: deserializeStatusMap(character.s?.[0]),
            meta: deserializeStatusMap(character.s?.[1]),
        },
        equipment: deserializeEquipment(character.e),
        buffs: deserializeBuffs(character.u),
        skillLevels: deserializeSkillLevels(character.k),
    };
};

const deserializeLegacyCharacterState = (character: LegacySerializedCharacterState): CharacterState => {
    return {
        id: character.i,
        name: character.n,
        base: {
            level: character.b.l,
            heroLevel: character.b.h,
            raceid: character.b.r,
            jobid: character.b.j,
            title: character.b.t,
        },
        statuses: {
            allocated: deserializeStatusMap(character.s.a),
            meta: deserializeStatusMap(character.s.m),
        },
        equipment: Object.fromEntries(
            equipmentSlotKeys.flatMap((slot) => {
                const item = character.e[slot];
                if (!item) {
                    return [];
                }

                const restored: EquipmentLeafState = {
                    templateId: item.t,
                    enchantLevel: item.e,
                    baseOverrides: deserializeOptionMap(item.b),
                    additionalOptions: deserializeOptionMap(item.a),
                    craftedOptions: deserializeOptionMap(item.c),
                };

                return [[slot, restored]];
            })
        ) as Partial<Record<EquipmentSlotKey, EquipmentLeafState>>,
        buffs: Object.fromEntries(
            SKillOriginNames.map((origin) => [
                origin,
                (character.u[origin] ?? []).map((buff): BuffLeafState => ({
                    skillId: buff.s,
                    level: buff.l,
                })),
            ])
        ) as CharacterState["buffs"],
        skillLevels: {
            primary: character.k.p,
            secondary: character.k.s,
        },
    };
};

const migrateLegacyAppState = (state: LegacySerializedAppState): SerializedAppState => {
    const appState: AppState = {
        version: 1,
        activeCharacterId: state.a,
        characters: Object.fromEntries(
            Object.entries(state.c).map(([id, character]) => [
                id,
                deserializeLegacyCharacterState(character),
            ])
        ),
    };

    return serializeAppState(appState);
};

export const serializeAppState = (state: AppState): SerializedAppState => {
    return {
        v: 2,
        a: state.activeCharacterId,
        c: Object.values(state.characters).map(serializeCharacterState),
    };
};

export const deserializeAppState = (state: SerializedAppState): AppState => {
    return {
        version: 1,
        activeCharacterId: state.a,
        characters: Object.fromEntries(
            state.c.map((character) => [
                character.i,
                deserializeCharacterState(character),
            ])
        ),
    };
};

export const encodeSerializedAppState = (state: SerializedAppState): string => {
    return LZString.compressToEncodedURIComponent(JSON.stringify(state));
};

export const decodeSerializedAppState = (value: string): SerializedAppState => {
    const decompressed = LZString.decompressFromEncodedURIComponent(value);
    if (!decompressed) {
        return serializeAppState(createDefaultAppState());
    }

    const parsed = JSON.parse(decompressed) as SerializedAppState | LegacySerializedAppState;
    if (parsed.v === 1) {
        return migrateLegacyAppState(parsed);
    }

    return parsed;
};

export const encodeAppState = (state: AppState): string => {
    return encodeSerializedAppState(serializeAppState(state));
};

export const decodeAppState = (value: string): AppState => {
    return deserializeAppState(decodeSerializedAppState(value));
};
