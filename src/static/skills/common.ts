import unknown from "../../assets/unknown.png";
import { Skill } from "./skill";

export const common_skills: Skill[] = [
    {
        name: "heroicPower",
        displayName: "ヒロイックパワー",
        icon: unknown,
        category: "Passive",
        origin: "Self",
        raceid: -1,
        jobid: -1,
        min: 1,
        max: 5,
        descriptions: [
            "他のプレーヤーに対する防御力を5%増加させます。",
            "他のプレーヤーに対する防御力を10%増加させます。",
            "他のプレーヤーに対する防御力を15%増加させます。",
            "他のプレーヤーに対する防御力を20%増加させます。",
            "他のプレーヤーに対する防御力を25%増加させます。"
        ],
        attributes: {
            0: {
                multiplyPVPDefense: 5,
            },
            1: {
                multiplyPVPDefense: 10,
            },
            2: {
                multiplyPVPDefense: 15,
            },
            3: {
                multiplyPVPDefense: 20,
            },
            4: {
                multiplyPVPDefense: 25,
            }
        }
    },
]