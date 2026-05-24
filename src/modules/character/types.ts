import { BuiltinOptionKeyType } from "../../static/options";
import { Job, Race } from "../../static/races";
import { ItemTemplate } from "../../static/items";
import { Title } from "../../static/titles";
import { SkillOrigin } from "../../static/skills/skill";
import { Skill } from "../../static/skills/skill";
import { CharactorStateType } from "../state/charactor";
import { EquipmentSlotType } from "../state/items";
import { StatusType } from "../state/statuses";
import { Formula } from "../state/custom-formulas";

export type CharacterId = string;
export type OptionMap = Partial<Record<BuiltinOptionKeyType, number>>;
export type SkillLevelMap = Record<string, number>;

export type CharacterBaseState = {
    level: number;
    heroLevel: number;
    raceid: number;
    jobid: number;
    title: string;
};

export type CharacterStatusState = {
    allocated: Record<StatusType, number>;
    meta: Record<StatusType, number>;
};

export type EquipmentLeafState = {
    templateId: number;
    enchantLevel?: number;
    baseOverrides?: OptionMap;
    additionalOptions?: OptionMap;
    craftedOptions?: OptionMap;
};

export type BuffLeafState = {
    skillId: number;
    level: number;
};

export type CharacterState = {
    id: CharacterId;
    name: string;
    base: CharacterBaseState;
    statuses: CharacterStatusState;
    equipment: Partial<Record<EquipmentSlotType, EquipmentLeafState>>;
    buffs: Record<SkillOrigin, BuffLeafState[]>;
    skillLevels: {
        primary: SkillLevelMap;
        secondary: SkillLevelMap;
    };
    customFormulas: Partial<Record<CharactorStateType, Formula>>;
};

export type AppState = {
    version: 1;
    activeCharacterId: CharacterId;
    characters: Record<CharacterId, CharacterState>;
};

export type ResolvedEquipment = EquipmentLeafState & {
    slot: EquipmentSlotType;
    template: ItemTemplate;
    options: {
        base: OptionMap;
        additional: OptionMap;
        crafted: OptionMap;
    };
};

export type ResolvedBuff = BuffLeafState & {
    origin: SkillOrigin;
    skill: Skill;
    options: OptionMap;
};

export type ResolvedCharacter = CharacterState & {
    race: Race;
    job: Job;
    title?: Title;
    resolvedEquipment: Partial<Record<EquipmentSlotType, ResolvedEquipment>>;
    resolvedBuffs: Record<SkillOrigin, ResolvedBuff[]>;
};

export type OptionSourceType =
    | "baseStatus"
    | "metaStatus"
    | "initialStatus"
    | "equipment"
    | "equipmentSynergy"
    | "buff"
    | "title"
    | "heroBonus";

export type OptionSource = {
    type: OptionSourceType;
    options: OptionMap;
    label?: string;
    characterId?: CharacterId;
    slot?: EquipmentSlotType;
    origin?: SkillOrigin;
};

export type AggregatedOptions = OptionMap;

export type CalculatedCharacter = {
    character: CharacterState;
    optionSources: OptionSource[];
    aggregatedOptions: AggregatedOptions;
    values: Record<CharactorStateType, number>;
};
