import { Item } from "../../components/static/items";

export type Equipments = {
    helmet: Item | null;
    gauntlet: Item | null;
    tunic: Item | null;
    leggings: Item | null;
    boots: Item | null;
    weapon: Item | null;
    shield: Item | null;
    arrow: Item | null;
    accessory1: Item | null;
    accessory2: Item | null;
    accessory3: Item | null;
    accessory4: Item | null;
    glasses: Item | null;
    hat: Item | null;
    earrings: Item | null;
    costume: Item | null;
    talismanH: Item | null;
    talismanG: Item | null;
    talismanI: Item | null;
    talismanB: Item | null;
    talismanJ: Item | null;
    talismanN: Item | null;
    talismanE: Item | null;
    talismanR: Item | null;
    talismanW: Item | null;
    talismanQ: Item | null;
    talismanS: Item | null;
    pet: Item | null;
}
export type CharactorContext = {
    level: number;
    heroLevel: number;
    raceid: number;
    jobid: number;
    equipments: Equipments;
    buffs: {
    }
}

export type OptionContext = {
    [key: string]: number;
}