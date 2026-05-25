import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { skills, SkillOrigin } from "../../../static/skills/skill";
import type { BuffLeafState } from "../../character/types";
import { normalizeBuffState } from "../../normalize";
import { activeCharacterBuffsAtomFamily } from "../activeCharacterAtoms";
import { BuffState, buffStateFamily } from "../skills";

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
                const nextBuff = normalizeBuffState(buff);
                return nextBuff ? [nextBuff] : [];
            }));
            set(buffStateFamily(origin), buffs);
        }
    )
);
