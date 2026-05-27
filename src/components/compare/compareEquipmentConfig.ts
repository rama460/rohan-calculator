import backgroundAccessory from "../../assets/backgrounds/accessory.png";
import backgroundArrow from "../../assets/backgrounds/arrow.png";
import backgroundBoots from "../../assets/backgrounds/boots.png";
import backgroundCostume from "../../assets/backgrounds/costume.png";
import backgroundEarrings from "../../assets/backgrounds/earrings.png";
import backgroundGauntlet from "../../assets/backgrounds/gauntlet.png";
import backgroundGlasses from "../../assets/backgrounds/glasses.png";
import backgroundHat from "../../assets/backgrounds/hat.png";
import backgroundHelmet from "../../assets/backgrounds/helmet.png";
import backgroundLeggings from "../../assets/backgrounds/leggings.png";
import backgroundShield from "../../assets/backgrounds/shield.png";
import backgroundTunic from "../../assets/backgrounds/tunic.png";
import backgroundWeapon from "../../assets/backgrounds/weapon.png";
import type { EquipmentSlotKey } from "../../modules/character/constants";

export type CompareEquipmentSlotConfig = {
    slot: EquipmentSlotKey;
    title: string;
    gridColumn: number;
    gridRow: number;
    backgroundImage?: string;
};

export const compareEquipmentSlots: CompareEquipmentSlotConfig[] = [
    { slot: "helmet", title: "頭", gridColumn: 2, gridRow: 1, backgroundImage: backgroundHelmet },
    { slot: "gauntlet", title: "手", gridColumn: 1, gridRow: 2, backgroundImage: backgroundGauntlet },
    { slot: "tunic", title: "胴", gridColumn: 2, gridRow: 2, backgroundImage: backgroundTunic },
    { slot: "leggings", title: "脚", gridColumn: 2, gridRow: 3, backgroundImage: backgroundLeggings },
    { slot: "boots", title: "足", gridColumn: 2, gridRow: 4, backgroundImage: backgroundBoots },
    { slot: "accessory1", title: "アクセサリ1", gridColumn: 1, gridRow: 3, backgroundImage: backgroundAccessory },
    { slot: "accessory2", title: "アクセサリ2", gridColumn: 1, gridRow: 4, backgroundImage: backgroundAccessory },
    { slot: "accessory3", title: "アクセサリ3", gridColumn: 3, gridRow: 3, backgroundImage: backgroundAccessory },
    { slot: "accessory4", title: "アクセサリ4", gridColumn: 3, gridRow: 4, backgroundImage: backgroundAccessory },
    { slot: "weapon", title: "武器", gridColumn: 1, gridRow: 5, backgroundImage: backgroundWeapon },
    { slot: "shield", title: "盾", gridColumn: 2, gridRow: 5, backgroundImage: backgroundShield },
    { slot: "arrow", title: "矢", gridColumn: 3, gridRow: 5, backgroundImage: backgroundArrow },
    { slot: "glasses", title: "メガネ", gridColumn: 4, gridRow: 1, backgroundImage: backgroundGlasses },
    { slot: "hat", title: "帽子", gridColumn: 5, gridRow: 1, backgroundImage: backgroundHat },
    { slot: "earrings", title: "耳飾り", gridColumn: 6, gridRow: 1, backgroundImage: backgroundEarrings },
    { slot: "costume", title: "コスチューム", gridColumn: 4, gridRow: 2, backgroundImage: backgroundCostume },
    { slot: "pet", title: "ペット", gridColumn: 8, gridRow: 1 },
    { slot: "ride", title: "乗り物", gridColumn: 9, gridRow: 1 },
    { slot: "talismanK", title: "タリスマン タイプK", gridColumn: 5, gridRow: 3 },
    { slot: "talismanL", title: "タリスマン タイプL", gridColumn: 6, gridRow: 3 },
    { slot: "talismanF", title: "タリスマン タイプF", gridColumn: 7, gridRow: 3 },
    { slot: "talismanT", title: "タリスマン タイプT", gridColumn: 8, gridRow: 3 },
    { slot: "talismanS", title: "タリスマン タイプS", gridColumn: 9, gridRow: 3 },
    { slot: "talismanH", title: "タリスマン タイプH", gridColumn: 5, gridRow: 4 },
    { slot: "talismanG", title: "タリスマン タイプG", gridColumn: 6, gridRow: 4 },
    { slot: "talismanI", title: "タリスマン タイプI", gridColumn: 7, gridRow: 4 },
    { slot: "talismanB", title: "タリスマン タイプB", gridColumn: 8, gridRow: 4 },
    { slot: "talismanJ", title: "タリスマン タイプJ", gridColumn: 9, gridRow: 4 },
    { slot: "talismanN", title: "タリスマン タイプN", gridColumn: 5, gridRow: 5 },
    { slot: "talismanE", title: "タリスマン タイプE", gridColumn: 6, gridRow: 5 },
    { slot: "talismanR", title: "タリスマン タイプR", gridColumn: 7, gridRow: 5 },
    { slot: "talismanW", title: "タリスマン タイプW", gridColumn: 8, gridRow: 5 },
    { slot: "talismanQ", title: "タリスマン タイプQ", gridColumn: 9, gridRow: 5 },
    { slot: "rune1", title: "ルーン1", gridColumn: 4, gridRow: 7 },
    { slot: "rune2", title: "ルーン2", gridColumn: 5, gridRow: 7 },
    { slot: "rune3", title: "ルーン3", gridColumn: 6, gridRow: 7 },
    { slot: "rune4", title: "ルーン4", gridColumn: 7, gridRow: 7 },
    { slot: "rune5", title: "ルーン5", gridColumn: 8, gridRow: 7 },
    { slot: "rune6", title: "ルーン6", gridColumn: 9, gridRow: 7 },
];
