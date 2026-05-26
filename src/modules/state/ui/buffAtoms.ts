import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { skills, SkillOrigin } from "../../../static/skills/skill";
import type { BuffLeafState } from "../../character/types";
import { BuffState, normalizeBuffState } from "../../normalize";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterBuffsAtomFamily,
} from "../activeCharacterAtoms";

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

export const uiBuffsAtomFamily = atomFamily((origin: SkillOrigin) =>
    atom(
        (get) => get(activeCharacterBuffsAtomFamily(origin)).flatMap((buff) => {
            const uiBuff = toBuffState(buff);
            return uiBuff ? [uiBuff] : [];
        }),
        (get, set, buffs: BuffState[]) => {
            set(activeCharacterBuffsAtomFamily(origin), buffs.flatMap((buff) => {
                const nextBuff = normalizeBuffState(
                    buff,
                    origin,
                    Number(get(activeCharacterBaseAtomFamily("raceid"))),
                    Number(get(activeCharacterBaseAtomFamily("jobid")))
                );
                return nextBuff ? [nextBuff] : [];
            }));
        }
    )
);
