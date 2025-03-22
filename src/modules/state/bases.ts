import { atomWithHash } from "jotai-location";
import { titles } from "../../components/static/titles";
import { atom } from "jotai";
import { BuiltinOptionKeyType } from "../../components/static/options";
import { atomFamily } from "jotai/utils";

export const levelState = atomWithHash<number>("level", 115);
export const heroLevelState = atomWithHash<number>("heroLevel", 50);
export const raceidState = atomWithHash<number>("raceid", 0);
export const jobidState = atomWithHash<number>("jobid", 0);
export const titleNameState = atomWithHash<string>("title", "none");

export const titleOptionState = atomFamily((param: BuiltinOptionKeyType) =>
    atom((get) => {
        const titleName = get(titleNameState);
        const title = titles.find((title) => title.name === titleName);
        return title?.options?.[param] || 0;
    })
);

const baseDefaults = {
    level: 115,
    heroLevel: 50,
    raceid: 0,
    jobid: 0,
}

export type BaseOptionKeyType = "level" | "heroLevel" | "raceid" | "jobid";
export const baseOptionStateFamily = atomFamily((param: BaseOptionKeyType) =>
    atomWithHash(param, baseDefaults[param])
);
``