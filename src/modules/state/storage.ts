import { atom, useAtom } from "jotai";
import { atomFamily, atomWithStorage, RESET } from "jotai/utils";
import { baseOptionStateFamily, titleNameState } from "./bases";
import { baseStatusState, metaStatusState } from "./statuses";
import { equipmentStateFamily } from "./items";
import { Item } from "../../components/static/items";
import { BuffState, buffStateFamily } from "./skills";

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
                const { [name]: _, ...rest } = prev;
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
    const [title, setTitle] = useAtom(titleNameState)
    const [level, setLevel] = useAtom(baseOptionStateFamily("level"));
    const [heroLevel, setHeroLevel] = useAtom(baseOptionStateFamily("heroLevel"));
    const [raceid, setRaceid] = useAtom(baseOptionStateFamily("raceid"));
    const [jobid, setJobid] = useAtom(baseOptionStateFamily("jobid"));
    // status
    const [strength, setStrength] = useAtom(baseStatusState("strength"));
    const [vitality, setVitality] = useAtom(baseStatusState("vitality"));
    const [dexterity, setDexterity] = useAtom(baseStatusState("dexterity"));
    const [intelligence, setIntelligence] = useAtom(baseStatusState("intelligence"));
    const [agility, setAgility] = useAtom(baseStatusState("agility"));
    const [mentality, setMentality] = useAtom(baseStatusState("mentality"));
    const [metaStrength, setMetaStrength] = useAtom(metaStatusState("strength"));
    const [metaVitality, setMetaVitality] = useAtom(metaStatusState("vitality"));
    const [metaDexterity, setMetaDexterity] = useAtom(metaStatusState("dexterity"));
    const [metaIntelligence, setMetaIntelligence] = useAtom(metaStatusState("intelligence"));
    const [metaAgility, setMetaAgility] = useAtom(metaStatusState("agility"));
    const [metaMentality, setMetaMentality] = useAtom(metaStatusState("mentality"));
    // equipment
    const [helmet, setHelmet] = useAtom(equipmentStateFamily("helmet"));
    const [gauntlet, setGaundlet] = useAtom(equipmentStateFamily("gauntlet"));
    const [tunic, setTunic] = useAtom(equipmentStateFamily("tunic"));
    const [leggings, setLeggings] = useAtom(equipmentStateFamily("leggings"));
    const [boots, setBoots] = useAtom(equipmentStateFamily("boots"));
    const [weapon, setWeapon] = useAtom(equipmentStateFamily("weapon"));
    const [shield, setShield] = useAtom(equipmentStateFamily("shield"));
    const [arrow, setArrow] = useAtom(equipmentStateFamily("arrow"));
    const [accessory1, setAccessory1] = useAtom(equipmentStateFamily("accessory1"));
    const [accessory2, setAccessory2] = useAtom(equipmentStateFamily("accessory2"));
    const [accessory3, setAccessory3] = useAtom(equipmentStateFamily("accessory3"));
    const [accessory4, setAccessory4] = useAtom(equipmentStateFamily("accessory4"));
    const [glasses, setGlasses] = useAtom(equipmentStateFamily("glasses"));
    const [hat, setHat] = useAtom(equipmentStateFamily("hat"));
    const [earrings, setEarrings] = useAtom(equipmentStateFamily("earrings"));
    const [costume, setCostume] = useAtom(equipmentStateFamily("costume"));
    const [talismanH, setTalismanH] = useAtom(equipmentStateFamily("talismanH"));
    const [talismanG, setTalismanG] = useAtom(equipmentStateFamily("talismanG"));
    const [talismanI, setTalismanI] = useAtom(equipmentStateFamily("talismanI"));
    const [talismanB, setTalismanB] = useAtom(equipmentStateFamily("talismanB"));
    const [talismanJ, setTalismanJ] = useAtom(equipmentStateFamily("talismanJ"));
    const [talismanN, setTalismanN] = useAtom(equipmentStateFamily("talismanN"));
    const [talismanE, setTalismanE] = useAtom(equipmentStateFamily("talismanE"));
    const [talismanR, setTalismanR] = useAtom(equipmentStateFamily("talismanR"));
    const [talismanW, setTalismanW] = useAtom(equipmentStateFamily("talismanW"));
    const [talismanQ, setTalismanQ] = useAtom(equipmentStateFamily("talismanQ"));
    const [talismanS, setTalismanS] = useAtom(equipmentStateFamily("talismanS"));
    const [pet, setPet] = useAtom(equipmentStateFamily("pet"));
    const [ride, setRide] = useAtom(equipmentStateFamily("ride"));
    const [rune1, setRune1] = useAtom(equipmentStateFamily("rune1"));
    const [rune2, setRune2] = useAtom(equipmentStateFamily("rune2"));
    const [rune3, setRune3] = useAtom(equipmentStateFamily("rune3"));
    const [rune4, setRune4] = useAtom(equipmentStateFamily("rune4"));
    const [rune5, setRune5] = useAtom(equipmentStateFamily("rune5"));
    const [rune6, setRune6] = useAtom(equipmentStateFamily("rune6"));

    // buffs
    const [selfBuffStatuses, setSelfBuffStatuses] = useAtom(buffStateFamily("Self"));
    const [groupBuffStatuses, setGroupBuffStatuses] = useAtom(buffStateFamily("Group"));
    const [cashBuffStatuses, setCashBuffStatuses] = useAtom(buffStateFamily("Cash"));
    const [guildBuffStatuses, setGuildBuffStatuses] = useAtom(buffStateFamily("Guild"));

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
            title,
            level,
            heroLevel,
            raceid,
            jobid,
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