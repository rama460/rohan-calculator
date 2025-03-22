import { atomFamily } from "jotai/utils";
import { SkillOrigin } from "../../components/static/skill";
import { atomWithHash } from "jotai-location";

export const buffStateFamily = atomFamily((origin: SkillOrigin) => {
    return atomWithHash<{ name: string, level: number }[]>(origin, []);
});