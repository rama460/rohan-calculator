import { atom } from "jotai";
import { atomWithCompressedHash } from "./common";
import { getInitialSkillLevelsForJob } from "../../components/skill/skillTreeData";
import { baseOptionStateFamily } from "./bases";
import { races } from "../../static/races";
import { atomWithHash } from "jotai-location";

// Skill level atoms for primary and secondary jobs
// Using compressed hash to handle potentially large skill data efficiently
const primaryJobSkillLevelsAtom = atomWithCompressedHash<{ [skillName: string]: number }>("pskills", {});

const secondaryJobSkillLevelsAtom = atomWithCompressedHash<{ [skillName: string]: number }>("sskills", {});
// Skill画面専用のjobid atom（初期値を1に設定）
export const skillJobIdAtom = atomWithHash('skillJobId', 1);


export const primaryJobSkillLevelsWithDefaultsAtom = atom(
    (get) => {
        const levels = get(primaryJobSkillLevelsAtom);
        if (Object.keys(levels).length === 0) {
            const raceid = get(baseOptionStateFamily("raceid"));
            return getInitialSkillLevelsForJob(races.find(r => r.id === raceid)?.jobs[0]);
        }
        return levels;
    }, (_, set, updates: { [skillName: string]: number }) => {
        set(primaryJobSkillLevelsAtom, { ...updates });
    }
);

export const secondaryJobSkillLevelsWithDefaultsAtom = atom(
    (get) => {
        const levels = get(secondaryJobSkillLevelsAtom);
        if (Object.keys(levels).length === 0) {
            const raceid = get(baseOptionStateFamily("raceid"));
            const jobid: number = get(skillJobIdAtom);
            return getInitialSkillLevelsForJob(races.find(r => r.id === raceid)?.jobs[jobid]);
        }
        return levels;
    }, (_, set, updates: { [skillName: string]: number }) => {
        set(secondaryJobSkillLevelsAtom, { ...updates });
    }
);

// Total used skill points atom
export const usedSkillPointsAtom = atom((get) => {
    const primarySkills = get(primaryJobSkillLevelsAtom);
    const secondarySkills = get(secondaryJobSkillLevelsAtom);

    const primaryTotal = Object.values(primarySkills).reduce((sum, level) => sum + level, 0);
    const secondaryTotal = Object.values(secondarySkills).reduce((sum, level) => sum + level, 0);

    return primaryTotal + secondaryTotal;
});
