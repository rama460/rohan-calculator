import { atomFamily } from "jotai/utils";
import { SkillOrigin, skills } from "../../static/skill";
import { atom } from "jotai";
import { atomWithCompressedHash } from "./common";

export type BuffState = {
    name: string;
    level: number;
}
// primitive atom for buff panel on url hash always starts with "B"
const buffStateMinifiedFamily = atomFamily((origin: SkillOrigin) => {
    return atomWithCompressedHash<{ n: number, l: number }[]>(`B${origin[0]}${origin[1]}`, []);
})
export const buffStateFamily = atomFamily((origin: SkillOrigin) => {
    return atom(
        (get) => {
            const minified = get(buffStateMinifiedFamily(origin))
            return minified.map((buff) => {
                return {
                    name: skills.at(buff.n)?.name ?? "",
                    level: buff.l,
                }
            })
        },
        (_, set, update: BuffState[]) => {
            set(buffStateMinifiedFamily(origin), update.map((buff) => {
                return {
                    n: skills.findIndex((skill) => skill.name === buff.name),
                    l: buff.level,
                }
            }))
        })
});
