import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { races } from "../../../static/races";
import { getInitialSkillLevelsForJob } from "../../../components/skill/skillTreeData";
import type { SkillLevelMap } from "../../character/types";
import {
    activeCharacterBaseAtomFamily,
    activeCharacterSkillLevelsAtomFamily,
} from "../activeCharacterAtoms";
import {
    primaryJobSkillLevelsWithDefaultsAtom,
    secondaryJobSkillLevelsWithDefaultsAtom,
} from "../skillLevels";

const getDefaultSkillLevels = (
    type: "primary" | "secondary",
    raceid: number,
    jobid: number
): SkillLevelMap => {
    const race = races.find((candidate) => candidate.id === raceid);
    const job = type === "primary"
        ? race?.jobs[0]
        : race?.jobs[jobid];
    return getInitialSkillLevelsForJob(job);
};

export const compatibleSkillLevelsWithDefaultsAtomFamily = atomFamily((type: "primary" | "secondary") =>
    atom(
        (get) => {
            const levels = get(activeCharacterSkillLevelsAtomFamily(type));
            if (Object.keys(levels).length > 0) {
                return levels;
            }

            return getDefaultSkillLevels(
                type,
                Number(get(activeCharacterBaseAtomFamily("raceid"))),
                type === "primary" ? 0 : Number(get(activeCharacterBaseAtomFamily("jobid")))
            );
        },
        (_, set, levels: SkillLevelMap) => {
            set(activeCharacterSkillLevelsAtomFamily(type), levels);
            set(
                type === "primary"
                    ? primaryJobSkillLevelsWithDefaultsAtom
                    : secondaryJobSkillLevelsWithDefaultsAtom,
                levels
            );
        }
    )
);

export const compatibleUsedSkillPointsAtom = atom((get) => {
    const primarySkills = get(compatibleSkillLevelsWithDefaultsAtomFamily("primary"));
    const secondarySkills = get(compatibleSkillLevelsWithDefaultsAtomFamily("secondary"));

    return [...Object.values(primarySkills), ...Object.values(secondarySkills)]
        .reduce((sum, level) => sum + level, 0);
});
