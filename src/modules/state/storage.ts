import { atom, useAtom } from "jotai";
import { atomFamily, atomWithStorage, RESET } from "jotai/utils";
import { Item } from "../../static/items";
import { BuffState } from "./skills";
import {
    compatibleAllocatedStatusAtomFamily,
    compatibleBaseAtomFamily,
    compatibleBuffsAtomFamily,
    compatibleEquipmentAtomFamily,
    compatibleMetaStatusAtomFamily,
    compatibleTitleAtom,
} from "./compat";

type StoredCharactorContext = {
    title: string;
    level: number;
    heroLevel: number;
    raceid: number;
    jobid: number;
    strength: number;
    vitality: number;
    dexterity: number;
    intelligence: number;
    agility: number;
    mentality: number;
    metaStrength: number;
    metaVitality: number;
    metaDexterity: number;
    metaIntelligence: number;
    metaAgility: number;
    metaMentality: number;
    helmet?: Item;
    gauntlet?: Item;
    tunic?: Item;
    leggings?: Item;
    boots?: Item;
    weapon?: Item;
    shield?: Item;
    arrow?: Item;
    accessory1?: Item;
    accessory2?: Item;
    accessory3?: Item;
    accessory4?: Item;
    glasses?: Item;
    hat?: Item;
    earrings?: Item;
    costume?: Item;
    talismanH?: Item;
    talismanG?: Item;
    talismanI?: Item;
    talismanB?: Item;
    talismanJ?: Item;
    talismanN?: Item;
    talismanE?: Item;
    talismanR?: Item;
    talismanW?: Item;
    talismanQ?: Item;
    talismanS?: Item;
    pet?: Item;
    ride?: Item;
    rune1?: Item;
    rune2?: Item;
    rune3?: Item;
    rune4?: Item;
    rune5?: Item;
    rune6?: Item;
    selfBuffStatuses: BuffState[];
    groupBuffStatuses: BuffState[];
    cashBuffStatuses: BuffState[];
    guildBuffStatuses: BuffState[];

}

type StoredCharactorContexts = {
    [key: string]: StoredCharactorContext;
}

const storedCharactorContexts = atomWithStorage<StoredCharactorContexts>("charactorContext", {});

export const contextNames = atom((get) => {
    const contexts = get(storedCharactorContexts);
    return Object.keys(contexts);
});
export const contextState = atomFamily((name: string) => {
    return atom((get) => {
        const contexts = get(storedCharactorContexts);
        return contexts[name] ?? {};
    }, (_, set, newValue: StoredCharactorContext | typeof RESET) => {
        set(storedCharactorContexts, (prev) => {
            if (newValue === RESET) {
                const rest = { ...prev };
                delete rest[name];
                return rest;
            }
            return {
                ...prev,
                [name]: {
                    ...newValue,
                }
            };
        }
        );
    });
});

export const useStorageContext = (name: string) => {
    const [context, setContext] = useAtom(contextState(name));
    // hash state on url
    // base
    const [title, setTitle] = useAtom(compatibleTitleAtom)
    const [level, setLevel] = useAtom(compatibleBaseAtomFamily("level"));
    const [heroLevel, setHeroLevel] = useAtom(compatibleBaseAtomFamily("heroLevel"));
    const [raceid, setRaceid] = useAtom(compatibleBaseAtomFamily("raceid"));
    const [jobid, setJobid] = useAtom(compatibleBaseAtomFamily("jobid"));
    // status
    const [strength, setStrength] = useAtom(compatibleAllocatedStatusAtomFamily("strength"));
    const [vitality, setVitality] = useAtom(compatibleAllocatedStatusAtomFamily("vitality"));
    const [dexterity, setDexterity] = useAtom(compatibleAllocatedStatusAtomFamily("dexterity"));
    const [intelligence, setIntelligence] = useAtom(compatibleAllocatedStatusAtomFamily("intelligence"));
    const [agility, setAgility] = useAtom(compatibleAllocatedStatusAtomFamily("agility"));
    const [mentality, setMentality] = useAtom(compatibleAllocatedStatusAtomFamily("mentality"));
    const [metaStrength, setMetaStrength] = useAtom(compatibleMetaStatusAtomFamily("strength"));
    const [metaVitality, setMetaVitality] = useAtom(compatibleMetaStatusAtomFamily("vitality"));
    const [metaDexterity, setMetaDexterity] = useAtom(compatibleMetaStatusAtomFamily("dexterity"));
    const [metaIntelligence, setMetaIntelligence] = useAtom(compatibleMetaStatusAtomFamily("intelligence"));
    const [metaAgility, setMetaAgility] = useAtom(compatibleMetaStatusAtomFamily("agility"));
    const [metaMentality, setMetaMentality] = useAtom(compatibleMetaStatusAtomFamily("mentality"));
    // equipment
    const [helmet, setHelmet] = useAtom(compatibleEquipmentAtomFamily("helmet"));
    const [gauntlet, setGaundlet] = useAtom(compatibleEquipmentAtomFamily("gauntlet"));
    const [tunic, setTunic] = useAtom(compatibleEquipmentAtomFamily("tunic"));
    const [leggings, setLeggings] = useAtom(compatibleEquipmentAtomFamily("leggings"));
    const [boots, setBoots] = useAtom(compatibleEquipmentAtomFamily("boots"));
    const [weapon, setWeapon] = useAtom(compatibleEquipmentAtomFamily("weapon"));
    const [shield, setShield] = useAtom(compatibleEquipmentAtomFamily("shield"));
    const [arrow, setArrow] = useAtom(compatibleEquipmentAtomFamily("arrow"));
    const [accessory1, setAccessory1] = useAtom(compatibleEquipmentAtomFamily("accessory1"));
    const [accessory2, setAccessory2] = useAtom(compatibleEquipmentAtomFamily("accessory2"));
    const [accessory3, setAccessory3] = useAtom(compatibleEquipmentAtomFamily("accessory3"));
    const [accessory4, setAccessory4] = useAtom(compatibleEquipmentAtomFamily("accessory4"));
    const [glasses, setGlasses] = useAtom(compatibleEquipmentAtomFamily("glasses"));
    const [hat, setHat] = useAtom(compatibleEquipmentAtomFamily("hat"));
    const [earrings, setEarrings] = useAtom(compatibleEquipmentAtomFamily("earrings"));
    const [costume, setCostume] = useAtom(compatibleEquipmentAtomFamily("costume"));
    const [talismanH, setTalismanH] = useAtom(compatibleEquipmentAtomFamily("talismanH"));
    const [talismanG, setTalismanG] = useAtom(compatibleEquipmentAtomFamily("talismanG"));
    const [talismanI, setTalismanI] = useAtom(compatibleEquipmentAtomFamily("talismanI"));
    const [talismanB, setTalismanB] = useAtom(compatibleEquipmentAtomFamily("talismanB"));
    const [talismanJ, setTalismanJ] = useAtom(compatibleEquipmentAtomFamily("talismanJ"));
    const [talismanN, setTalismanN] = useAtom(compatibleEquipmentAtomFamily("talismanN"));
    const [talismanE, setTalismanE] = useAtom(compatibleEquipmentAtomFamily("talismanE"));
    const [talismanR, setTalismanR] = useAtom(compatibleEquipmentAtomFamily("talismanR"));
    const [talismanW, setTalismanW] = useAtom(compatibleEquipmentAtomFamily("talismanW"));
    const [talismanQ, setTalismanQ] = useAtom(compatibleEquipmentAtomFamily("talismanQ"));
    const [talismanS, setTalismanS] = useAtom(compatibleEquipmentAtomFamily("talismanS"));
    const [pet, setPet] = useAtom(compatibleEquipmentAtomFamily("pet"));
    const [ride, setRide] = useAtom(compatibleEquipmentAtomFamily("ride"));
    const [rune1, setRune1] = useAtom(compatibleEquipmentAtomFamily("rune1"));
    const [rune2, setRune2] = useAtom(compatibleEquipmentAtomFamily("rune2"));
    const [rune3, setRune3] = useAtom(compatibleEquipmentAtomFamily("rune3"));
    const [rune4, setRune4] = useAtom(compatibleEquipmentAtomFamily("rune4"));
    const [rune5, setRune5] = useAtom(compatibleEquipmentAtomFamily("rune5"));
    const [rune6, setRune6] = useAtom(compatibleEquipmentAtomFamily("rune6"));

    // buffs
    const [selfBuffStatuses, setSelfBuffStatuses] = useAtom(compatibleBuffsAtomFamily("Self"));
    const [groupBuffStatuses, setGroupBuffStatuses] = useAtom(compatibleBuffsAtomFamily("Group"));
    const [cashBuffStatuses, setCashBuffStatuses] = useAtom(compatibleBuffsAtomFamily("Cash"));
    const [guildBuffStatuses, setGuildBuffStatuses] = useAtom(compatibleBuffsAtomFamily("Guild"));

    const loadContext = () => {
        setTitle(context.title);
        setLevel(context.level);
        setHeroLevel(context.heroLevel);
        setRaceid(context.raceid);
        setJobid(context.jobid);
        setStrength(context.strength);
        setVitality(context.vitality);
        setDexterity(context.dexterity);
        setIntelligence(context.intelligence);
        setAgility(context.agility);
        setMentality(context.mentality);
        setMetaStrength(context.metaStrength);
        setMetaVitality(context.metaVitality);
        setMetaDexterity(context.metaDexterity);
        setMetaIntelligence(context.metaIntelligence);
        setMetaAgility(context.metaAgility);
        setMetaMentality(context.metaMentality);
        setHelmet(context.helmet);
        setGaundlet(context.gauntlet);
        setTunic(context.tunic);
        setLeggings(context.leggings);
        setBoots(context.boots);
        setWeapon(context.weapon);
        setShield(context.shield);
        setArrow(context.arrow);
        setAccessory1(context.accessory1);
        setAccessory2(context.accessory2);
        setAccessory3(context.accessory3);
        setAccessory4(context.accessory4);
        setGlasses(context.glasses);
        setHat(context.hat);
        setEarrings(context.earrings);
        setCostume(context.costume);
        setTalismanH(context.talismanH);
        setTalismanG(context.talismanG);
        setTalismanI(context.talismanI);
        setTalismanB(context.talismanB);
        setTalismanJ(context.talismanJ);
        setTalismanN(context.talismanN);
        setTalismanE(context.talismanE);
        setTalismanR(context.talismanR);
        setTalismanW(context.talismanW);
        setTalismanQ(context.talismanQ);
        setTalismanS(context.talismanS);
        setPet(context.pet);
        setRide(context.ride);
        setRune1(context.rune1);
        setRune2(context.rune2);
        setRune3(context.rune3);
        setRune4(context.rune4);
        setRune5(context.rune5);
        setRune6(context.rune6);
        setSelfBuffStatuses(context.selfBuffStatuses);
        setGroupBuffStatuses(context.groupBuffStatuses);
        setCashBuffStatuses(context.cashBuffStatuses);
        setGuildBuffStatuses(context.guildBuffStatuses);
    }
    const saveContext = () => {
        setContext({
            ...context,
            title: String(title),
            level: Number(level),
            heroLevel: Number(heroLevel),
            raceid: Number(raceid),
            jobid: Number(jobid),
            strength,
            vitality,
            dexterity,
            intelligence,
            agility,
            mentality,
            metaStrength,
            metaVitality,
            metaDexterity,
            metaIntelligence,
            metaAgility,
            metaMentality,
            helmet,
            gauntlet,
            tunic,
            leggings,
            boots,
            weapon,
            shield,
            arrow,
            accessory1,
            accessory2,
            accessory3,
            accessory4,
            glasses,
            hat,
            earrings,
            costume,
            talismanH,
            talismanG,
            talismanI,
            talismanB,
            talismanJ,
            talismanN,
            talismanE,
            talismanR,
            talismanW,
            talismanQ,
            talismanS,
            pet,
            ride,
            rune1,
            rune2,
            rune3,
            rune4,
            rune5,
            rune6,
            selfBuffStatuses,
            groupBuffStatuses,
            cashBuffStatuses,
            guildBuffStatuses,
        });
    }
    return [loadContext, saveContext] as const;
}
