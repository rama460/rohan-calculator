import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomFamily } from "jotai/utils";
import { baseOptionStateFamily } from "./bases";
import { races } from "../../components/static/races";

export const statuses = [
    "strength",
    "vitality",
    "dexterity",
    "intelligence",
    "agility",
    "mentality",
] as const;

export type Status = {
    initial: number
    base: number,
    meta: number,
}

export type StatusType = typeof statuses[number]

export type Statuses = {
    [key in StatusType]: Status
}

// primitive atom for status panel on url hash always starts with "s"
export const baseStatusState = atomFamily((param: StatusType) =>
    atomWithHash<number>(`s${param[0]}b`, 0)
);
export const metaStatusState = atomFamily((param: StatusType) =>
    atomWithHash<number>(`s${param[0]}m`, 0)
);

export const initialStatusState = atomFamily((param: StatusType) => {
    return atom<number>((get) => races[get(baseOptionStateFamily("raceid"))].initialStatus[param]);
});

export const remainingPointsState = atom((get) => {
    const level = get(baseOptionStateFamily("level"));
    const heroLevel = get(baseOptionStateFamily("heroLevel"));
    const used = statuses.map(
        (status) => get(baseStatusState(status))
    ).reduce((acc, cur) => acc + cur, 0);
    if (level < 51)
        return (level - 1) * 4 - used;
    else if (level < 71)
        return 196 + (level - 50) * 6 - used;
    else if (level < 101)
        return 196 + 120 + (level - 70) * 8 - used;
    else
        return 196 + 120 + 240 + (level - 100) * 10 + heroLevel * 10 - used;
});

