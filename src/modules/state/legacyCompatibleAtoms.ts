import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { skills, SkillOrigin } from "../../static/skills/skill";
import type { BuffLeafState, CharacterBaseState } from "../character/types";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterBuffsAtomFamily,
} from "./activeCharacterAtoms";
import { baseOptionStateFamily, BaseOptionKeyType, titleNameState } from "./bases";
import { BuffState, buffStateFamily } from "./skills";

export const compatibleBaseAtomFamily = atomFamily((key: BaseOptionKeyType) =>
    atom(
        (get) => get(activeCharacterBaseAtomFamily(key)),
        (_, set, value: CharacterBaseState[typeof key]) => {
            set(activeCharacterBaseAtomFamily(key), value);
            set(baseOptionStateFamily(key), value);
        }
    )
);

export const compatibleTitleAtom = atom(
    (get) => get(activeCharacterBaseAtomFamily("title")),
    (_, set, title: string) => {
        set(activeCharacterBaseAtomFamily("title"), title);
        set(titleNameState, title);
    }
);

const toBuffLeafState = (buff: BuffState): BuffLeafState | undefined => {
    const skillId = skills.findIndex((skill) => skill.name === buff.name);
    if (skillId < 0) {
        return undefined;
    }

    return {
        skillId,
        level: buff.level,
    };
};

const toBuffState = (buff: BuffLeafState): BuffState | undefined => {
    const skill = skills[buff.skillId];
    if (!skill) {
        return undefined;
    }

    return {
        name: skill.name,
        level: buff.level,
    };
};

export const compatibleBuffsAtomFamily = atomFamily((origin: SkillOrigin) =>
    atom(
        (get) => get(activeCharacterBuffsAtomFamily(origin)).flatMap((buff) => {
            const legacyBuff = toBuffState(buff);
            return legacyBuff ? [legacyBuff] : [];
        }),
        (_, set, buffs: BuffState[]) => {
            set(activeCharacterBuffsAtomFamily(origin), buffs.flatMap((buff) => {
                const nextBuff = toBuffLeafState(buff);
                return nextBuff ? [nextBuff] : [];
            }));
            set(buffStateFamily(origin), buffs);
        }
    )
);

export const resetCompatibleBaseAtom = atom(null, (_, set) => {
    set(compatibleBaseAtomFamily("level"), 115);
    set(compatibleBaseAtomFamily("heroLevel"), 50);
    set(compatibleBaseAtomFamily("raceid"), 0);
    set(compatibleBaseAtomFamily("jobid"), 0);
    set(compatibleTitleAtom, "none");
    set(compatibleBuffsAtomFamily("Self"), []);
});
