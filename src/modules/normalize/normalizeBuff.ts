import { skills } from "../../static/skills/skill";
import type { BuffLeafState } from "../character/types";

export type BuffState = {
    name: string;
    level: number;
};

export const normalizeBuffState = (buff: BuffState): BuffLeafState | undefined => {
    const skillId = skills.findIndex((skill) => skill.name === buff.name);
    if (skillId < 0) {
        return undefined;
    }

    return {
        skillId,
        level: buff.level,
    };
};
