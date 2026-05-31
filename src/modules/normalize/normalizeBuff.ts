import { isSkillAvailableForCharacter, skills, SkillOrigin } from "../../static/skills/skill";
import type { BuffLeafState } from "../character/types";

export type BuffState = {
    name: string;
    level: number;
};

export const normalizeBuffState = (
    buff: BuffState,
    origin: SkillOrigin,
    raceid?: number,
    jobid?: number
): BuffLeafState | undefined => {
    const skillId = skills.findIndex((skill) => {
        if (skill.name !== buff.name || skill.origin !== origin) {
            return false;
        }

        if (origin !== "Self" || raceid === undefined || jobid === undefined) {
            return true;
        }

        return isSkillAvailableForCharacter(skill, raceid, jobid);
    });
    if (skillId < 0) {
        return undefined;
    }

    return {
        skillId,
        level: buff.level,
    };
};
