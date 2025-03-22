import { atomFamily } from "jotai/utils";
import { SkillOrigin, skills } from "../../components/static/skill";
import { atom } from "jotai";
import { atomWithCompressedHash } from "./common";

export const buffStateMinifiedMamily = atomFamily((origin: SkillOrigin) => {
    return atomWithCompressedHash<{ n: number, l: number }[]>(origin, []);
})
export const buffStateFamily = atomFamily((origin: SkillOrigin) => {
    return atom(
        (get) => {
            const minified = get(buffStateMinifiedMamily(origin))
            return minified.map((buff) => {
                return {
                    name: skills.at(buff.n)?.name ?? "",
                    level: buff.l,
                }
            })
        },
        (_, set, update: { name: string, level: number }[]) => {
            set(buffStateMinifiedMamily(origin), update.map((buff) => {
                return {
                    n: skills.findIndex((skill) => skill.name === buff.name),
                    l: buff.level,
                }
            }))
        })
});
