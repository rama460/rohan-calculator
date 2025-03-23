import { atomWithHash } from "jotai-location";
import { titles } from "../../components/static/titles";
import { atom } from "jotai";
import { BuiltinOptionKeyType } from "../../components/static/options";
import { atomFamily } from "jotai/utils";

export const titleNameState = atomWithHash<string>("title", "none",
    {
        serialize: (value) => titles.findIndex((title) => title.name === value).toString() ?? "-1",
        deserialize: (value) => titles[Number(value)]?.name ?? "none",
    }
);

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
// primitive atom for base panel on url hash always starts with "b"
export const baseOptionStateFamily = atomFamily((param: BaseOptionKeyType) =>
    atomWithHash(`b${param[0]}`, baseDefaults[param])
);
``