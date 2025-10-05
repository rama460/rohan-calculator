import { atom } from "jotai";
import { atomWithCompressedHash } from "./common";

// Skill level atoms for primary and secondary jobs
// Using compressed hash to handle potentially large skill data efficiently
export const primaryJobSkillLevelsAtom = atomWithCompressedHash<{ [skillName: string]: number }>("pskills", {});

export const secondaryJobSkillLevelsAtom = atomWithCompressedHash<{ [skillName: string]: number }>("sskills", {});

// Combined skill levels atom for calculations
export const combinedSkillLevelsAtom = atom((get) => {
    const primarySkills = get(primaryJobSkillLevelsAtom);
    const secondarySkills = get(secondaryJobSkillLevelsAtom);
    return { ...primarySkills, ...secondarySkills };
});

// Total used skill points atom
export const usedSkillPointsAtom = atom((get) => {
    const primarySkills = get(primaryJobSkillLevelsAtom);
    const secondarySkills = get(secondaryJobSkillLevelsAtom);

    const primaryTotal = Object.values(primarySkills).reduce((sum, level) => sum + level, 0);
    const secondaryTotal = Object.values(secondarySkills).reduce((sum, level) => sum + level, 0);

    return primaryTotal + secondaryTotal;
});

// Reset all skills atom
export const resetAllSkillsAtom = atom(null, (_, set) => {
    set(primaryJobSkillLevelsAtom, {});
    set(secondaryJobSkillLevelsAtom, {});
});