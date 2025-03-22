import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomFamily } from "jotai/utils";
import { heroLevelState, levelState, raceidState } from "./bases";
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


export const baseStatusState = atomFamily((param: StatusType) =>
    atomWithHash<number>(`${param}_base`, 0)
);
export const metaStatusState = atomFamily((param: StatusType) =>
    atomWithHash<number>(`${param}_meta`, 0)
);

export const initialStatusState = atomFamily((param: StatusType) => {
    return atom<number>((get) => races[get(raceidState)].initialStatus[param]);
});

export const remainingPointsState = atom((get) => {
    const level = get(levelState);
    const heroLevel = get(heroLevelState);
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

