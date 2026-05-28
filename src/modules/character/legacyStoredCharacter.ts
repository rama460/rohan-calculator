import type { Item } from "../../static/items";
import { SKillOriginNames, type SkillOrigin } from "../../static/skills/skill";
import {
    characterStatusNames,
    type CharacterStatusKey,
    equipmentSlotKeys,
    type EquipmentSlotKey,
} from "./constants";
import { createDefaultBuffs } from "./defaults";
import type { CharacterState, OptionMap, SkillLevelMap } from "./types";
import { normalizeBuffState } from "../normalize/normalizeBuff";
import { normalizeEquipmentItem } from "../normalize/normalizeEquipment";

type LegacyStoredEquipmentItem = Omit<Item, "baseOptions" | "additionalOptions" | "craftedOptions"> & {
    baseOptions?: Record<string, number>;
    additionalOptions?: Record<string, number>;
    craftedOptions?: Record<string, number>;
};

type LegacyStoredBuff = {
    name: string;
    level: number;
};

type LegacyStoredCharacter = {
    title?: string;
    level?: number;
    heroLevel?: number;
    raceid?: number;
    jobid?: number;
    primaryJobSkillLevels?: SkillLevelMap;
    secondaryJobSkillLevels?: SkillLevelMap;
} & Partial<Record<CharacterStatusKey, number>>
    & Partial<Record<`meta${Capitalize<CharacterStatusKey>}`, number>>
    & Partial<Record<EquipmentSlotKey, LegacyStoredEquipmentItem>>
    & Partial<Record<`${Lowercase<SkillOrigin>}BuffStatuses`, LegacyStoredBuff[]>>;

type StoredCharacterContextsInput = Record<string, unknown>;

const statusMetaKeys: Record<CharacterStatusKey, `meta${Capitalize<CharacterStatusKey>}`> = {
    strength: "metaStrength",
    vitality: "metaVitality",
    dexterity: "metaDexterity",
    intelligence: "metaIntelligence",
    agility: "metaAgility",
    mentality: "metaMentality",
};

const buffStatusKeys: Record<SkillOrigin, `${Lowercase<SkillOrigin>}BuffStatuses`> = {
    Self: "selfBuffStatuses",
    Group: "groupBuffStatuses",
    Guild: "guildBuffStatuses",
    Cash: "cashBuffStatuses",
};

const isRecord = (value: unknown): value is Record<string, unknown> => (
    typeof value === "object" && value !== null
);

export const isCharacterState = (value: unknown): value is CharacterState => (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.name === "string" &&
    isRecord(value.base) &&
    isRecord(value.statuses) &&
    isRecord(value.equipment) &&
    isRecord(value.buffs) &&
    isRecord(value.skillLevels)
);

const isLegacyStoredCharacter = (value: unknown): value is LegacyStoredCharacter => (
    isRecord(value) &&
    !isCharacterState(value) &&
    (
        typeof value.level === "number" ||
        typeof value.heroLevel === "number" ||
        typeof value.raceid === "number" ||
        typeof value.jobid === "number" ||
        characterStatusNames.some((status) => typeof value[status] === "number") ||
        equipmentSlotKeys.some((slot) => isRecord(value[slot]))
    )
);

const readNumber = (value: unknown, defaultValue: number): number => (
    typeof value === "number" && Number.isFinite(value) ? value : defaultValue
);

const readSkillLevels = (value: unknown): SkillLevelMap => {
    if (!isRecord(value)) {
        return {};
    }

    return Object.fromEntries(
        Object.entries(value).filter(([, level]) => typeof level === "number")
    ) as SkillLevelMap;
};

const sanitizeOptionMap = (options?: Record<string, number>): OptionMap => {
    if (!options) {
        return {};
    }

    return Object.fromEntries(
        Object.entries(options).filter(([key, value]) => key !== "none" && typeof value === "number")
    ) as OptionMap;
};

const normalizeLegacyEquipment = (
    equipment: LegacyStoredEquipmentItem,
    slot: EquipmentSlotKey,
    raceid: number,
    jobid: number
) => normalizeEquipmentItem(
    {
        ...equipment,
        enchantLevel: readNumber(equipment.enchantLevel, 0),
        baseOptions: sanitizeOptionMap(equipment.baseOptions),
        additionalOptions: sanitizeOptionMap(equipment.additionalOptions),
        craftedOptions: sanitizeOptionMap(equipment.craftedOptions),
    },
    slot,
    raceid,
    jobid
);

export const migrateLegacyStoredCharacter = (
    name: string,
    value: unknown
): CharacterState | undefined => {
    if (isCharacterState(value)) {
        return value;
    }

    if (!isLegacyStoredCharacter(value)) {
        return undefined;
    }

    const raceid = readNumber(value.raceid, 0);
    const jobid = readNumber(value.jobid, 0);
    const equipment = Object.fromEntries(
        equipmentSlotKeys.flatMap((slot) => {
            const item = value[slot];
            if (!item) {
                return [];
            }

            const normalized = normalizeLegacyEquipment(item, slot, raceid, jobid);
            return normalized ? [[slot, normalized]] : [];
        })
    ) as CharacterState["equipment"];

    const buffs = {
        ...createDefaultBuffs(),
        ...Object.fromEntries(
            SKillOriginNames.map((origin) => [
                origin,
                (value[buffStatusKeys[origin]] ?? []).flatMap((buff) => {
                    const normalized = normalizeBuffState(buff, origin, raceid, jobid);
                    return normalized ? [normalized] : [];
                }),
            ])
        ),
    };

    return {
        id: "main",
        name,
        base: {
            level: readNumber(value.level, 115),
            heroLevel: readNumber(value.heroLevel, 50),
            raceid,
            jobid,
            title: typeof value.title === "string" ? value.title : "none",
        },
        statuses: {
            allocated: Object.fromEntries(
                characterStatusNames.map((status) => [status, readNumber(value[status], 0)])
            ) as CharacterState["statuses"]["allocated"],
            meta: Object.fromEntries(
                characterStatusNames.map((status) => [status, readNumber(value[statusMetaKeys[status]], 0)])
            ) as CharacterState["statuses"]["meta"],
        },
        equipment,
        buffs,
        skillLevels: {
            primary: readSkillLevels(value.primaryJobSkillLevels),
            secondary: readSkillLevels(value.secondaryJobSkillLevels),
        },
    };
};

export const migrateStoredCharacterContexts = (
    contexts: StoredCharacterContextsInput
): Record<string, CharacterState> => (
    Object.fromEntries(
        Object.entries(contexts).flatMap(([name, context]) => {
            const migrated = migrateLegacyStoredCharacter(name, context);
            return migrated ? [[name, migrated]] : [];
        })
    )
);
