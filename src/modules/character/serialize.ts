import LZString from "lz-string";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../static/options";
import { SKillOriginNames, SkillOrigin } from "../../static/skills/skill";
import { createDefaultAppState } from "./defaults";
import {
    characterStatusNames,
    CharacterStatusKey,
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

type SerializedEquipmentLeafState = {
    t: number;
    e?: number;
    b?: SerializedOptionMap;
    a?: SerializedOptionMap;
    c?: SerializedOptionMap;
};

type SerializedBuffLeafState = {
    s: number;
    l: number;
};

type SerializedCharacterState = {
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
    e: Partial<Record<EquipmentSlotKey, SerializedEquipmentLeafState>>;
    u: Record<SkillOrigin, SerializedBuffLeafState[]>;
    k: {
        p: SkillLevelMap;
        s: SkillLevelMap;
    };
};

export type SerializedAppState = {
    v: 1;
    a: CharacterId;
    c: Record<CharacterId, SerializedCharacterState>;
};

const getOptionId = (key: BuiltinOptionKeyType): number => BuiltinOptionKeys.indexOf(key);
const getOptionKey = (id: number): BuiltinOptionKeyType | undefined => BuiltinOptionKeys[id];
const getStatusId = (key: CharacterStatusKey): number => characterStatusNames.indexOf(key);
const getStatusKey = (id: number): CharacterStatusKey | undefined => characterStatusNames[id];
const serializeOptionMap = (options?: OptionMap): SerializedOptionMap | undefined => {
    if (!options || Object.keys(options).length === 0) {
        return undefined;
    }

    return Object.fromEntries(
        Object.entries(options)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => [getOptionId(key as BuiltinOptionKeyType), value])
    );
};

const deserializeOptionMap = (options?: SerializedOptionMap): OptionMap | undefined => {
    if (!options) {
        return undefined;
    }

    return Object.fromEntries(
        Object.entries(options)
            .map(([id, value]) => [getOptionKey(Number(id)), value] as const)
            .filter(([key]) => key !== undefined)
    ) as OptionMap;
};

const serializeStatusMap = (values: Record<CharacterStatusKey, number>): Record<number, number> => {
    return Object.fromEntries(
        Object.entries(values)
            .filter(([, value]) => value !== 0)
            .map(([key, value]) => [getStatusId(key as CharacterStatusKey), value])
    );
};

const deserializeStatusMap = (values: Record<number, number>): Record<CharacterStatusKey, number> => {
    const restored = Object.fromEntries(
        characterStatusNames.map((status) => [status, 0])
    ) as Record<CharacterStatusKey, number>;

    Object.entries(values).forEach(([id, value]) => {
        const key = getStatusKey(Number(id));
        if (key) {
            restored[key] = value;
        }
    });

    return restored;
};

const serializeEquipment = (
    equipment: CharacterState["equipment"]
): SerializedCharacterState["e"] => {
    return Object.fromEntries(
        equipmentSlotKeys.flatMap((slot) => {
            const item = equipment[slot];
            if (!item) {
                return [];
            }

            const serialized: SerializedEquipmentLeafState = {
                t: item.templateId,
            };
            if (item.enchantLevel !== undefined && item.enchantLevel !== 0) {
                serialized.e = item.enchantLevel;
            }
            const baseOverrides = serializeOptionMap(item.baseOverrides);
            const additionalOptions = serializeOptionMap(item.additionalOptions);
            const craftedOptions = serializeOptionMap(item.craftedOptions);
            if (baseOverrides) {
                serialized.b = baseOverrides;
            }
            if (additionalOptions) {
                serialized.a = additionalOptions;
            }
            if (craftedOptions) {
                serialized.c = craftedOptions;
            }

            return [[slot, serialized]];
        })
    );
};

const deserializeEquipment = (
    equipment: SerializedCharacterState["e"]
): CharacterState["equipment"] => {
    return Object.fromEntries(
        equipmentSlotKeys.flatMap((slot) => {
            const item = equipment[slot];
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
    ) as Partial<Record<EquipmentSlotKey, EquipmentLeafState>>;
};

const serializeBuffs = (buffs: CharacterState["buffs"]): SerializedCharacterState["u"] => {
    return Object.fromEntries(
        SKillOriginNames.map((origin) => [
            origin,
            buffs[origin].map((buff) => ({
                s: buff.skillId,
                l: buff.level,
            })),
        ])
    ) as SerializedCharacterState["u"];
};

const deserializeBuffs = (buffs: SerializedCharacterState["u"]): CharacterState["buffs"] => {
    return Object.fromEntries(
        SKillOriginNames.map((origin) => [
            origin,
            (buffs[origin] ?? []).map((buff): BuffLeafState => ({
                skillId: buff.s,
                level: buff.l,
            })),
        ])
    ) as CharacterState["buffs"];
};

export const serializeCharacterState = (character: CharacterState): SerializedCharacterState => {
    return {
        i: character.id,
        n: character.name,
        b: {
            l: character.base.level,
            h: character.base.heroLevel,
            r: character.base.raceid,
            j: character.base.jobid,
            t: character.base.title,
        },
        s: {
            a: serializeStatusMap(character.statuses.allocated),
            m: serializeStatusMap(character.statuses.meta),
        },
        e: serializeEquipment(character.equipment),
        u: serializeBuffs(character.buffs),
        k: {
            p: character.skillLevels.primary,
            s: character.skillLevels.secondary,
        },
    };
};

export const deserializeCharacterState = (character: SerializedCharacterState): CharacterState => {
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
        equipment: deserializeEquipment(character.e),
        buffs: deserializeBuffs(character.u),
        skillLevels: {
            primary: character.k.p,
            secondary: character.k.s,
        },
        customFormulas: {},
    };
};

export const serializeAppState = (state: AppState): SerializedAppState => {
    return {
        v: state.version,
        a: state.activeCharacterId,
        c: Object.fromEntries(
            Object.entries(state.characters).map(([id, character]) => [
                id,
                serializeCharacterState(character),
            ])
        ),
    };
};

export const deserializeAppState = (state: SerializedAppState): AppState => {
    return {
        version: state.v,
        activeCharacterId: state.a,
        characters: Object.fromEntries(
            Object.entries(state.c).map(([id, character]) => [
                id,
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

    return JSON.parse(decompressed) as SerializedAppState;
};

export const encodeAppState = (state: AppState): string => {
    return encodeSerializedAppState(serializeAppState(state));
};

export const decodeAppState = (value: string): AppState => {
    return deserializeAppState(decodeSerializedAppState(value));
};
