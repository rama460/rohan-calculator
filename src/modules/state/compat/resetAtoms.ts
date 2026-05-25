import { atom } from "jotai";
import { compatibleBaseAtomFamily, compatibleTitleAtom } from "./baseAtoms";
import { compatibleBuffsAtomFamily } from "./buffAtoms";
import { resetCompatibleEquipmentAtom } from "./equipmentAtoms";
import { resetCompatibleStatusAtom } from "./statusAtoms";

export const resetCompatibleBaseAtom = atom(null, (_, set) => {
    set(compatibleBaseAtomFamily("level"), 115);
    set(compatibleBaseAtomFamily("heroLevel"), 50);
    set(compatibleBaseAtomFamily("raceid"), 0);
    set(compatibleBaseAtomFamily("jobid"), 0);
    set(compatibleTitleAtom, "none");
    set(compatibleBuffsAtomFamily("Self"), []);
});

export const resetCompatibleCharacterContextAtom = atom(null, (_, set) => {
    set(resetCompatibleStatusAtom);
    set(resetCompatibleEquipmentAtom);
    set(resetCompatibleBaseAtom);
    set(compatibleBuffsAtomFamily("Self"), []);
    set(compatibleBuffsAtomFamily("Group"), []);
    set(compatibleBuffsAtomFamily("Guild"), []);
    set(compatibleBuffsAtomFamily("Cash"), []);
});
