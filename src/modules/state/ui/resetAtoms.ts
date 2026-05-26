import { atom } from "jotai";
import { uiBaseAtomFamily, uiTitleAtom } from "./baseAtoms";
import { uiBuffsAtomFamily } from "./buffAtoms";
import { resetUiEquipmentAtom } from "./equipmentAtoms";
import { resetUiStatusAtom } from "./statusAtoms";

export const resetUiBaseAtom = atom(null, (_, set) => {
    set(uiBaseAtomFamily("level"), 115);
    set(uiBaseAtomFamily("heroLevel"), 50);
    set(uiBaseAtomFamily("raceid"), 0);
    set(uiBaseAtomFamily("jobid"), 0);
    set(uiTitleAtom, "none");
    set(uiBuffsAtomFamily("Self"), []);
});

export const resetUiCharacterContextAtom = atom(null, (_, set) => {
    set(resetUiStatusAtom);
    set(resetUiEquipmentAtom);
    set(resetUiBaseAtom);
    set(uiBuffsAtomFamily("Self"), []);
    set(uiBuffsAtomFamily("Group"), []);
    set(uiBuffsAtomFamily("Guild"), []);
    set(uiBuffsAtomFamily("Cash"), []);
});
