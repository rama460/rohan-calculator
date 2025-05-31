import { Skill } from "./skill";

import mer_pentagram_of_light from "../../assets/skills/mer/ME_Pentagram_Of_Light.gif";
import mer_darkness_call from "../../assets/skills/mer/ME_Darkness_Call.gif";
import mer_tune_of_life from "../../assets/skills/mer/ME_Tune_Of_Life.gif";
import mer_vine_of_light from "../../assets/skills/mer/ME_Vine_Of_Light.gif";
import mer_potential_power from "../../assets/skills/mer/ME_Potential_Power.gif";

export const mer_skills: Skill[] = [
    {
        name: "pentagramOfLight",
        displayName: "ペンタグラムオブライト",
        icon: mer_pentagram_of_light,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に力50%、精神力50%ほど追加して5回攻撃。",
            "対象に力100%、精神力100%ほど追加して5回攻撃。",
            "対象に力150%、精神力150%ほど追加して5回攻撃。",
            "対象に力200%、精神力200%ほど追加して5回攻撃。",
            "対象に力250%、精神力250%ほど追加して5回攻撃。",
            "対象に力350%、精神力350%ほど追加して5回攻撃。",
            "対象に力500%、精神力500%ほど追加して5回攻撃。",
        ],
        attributes: {}
    },
    {
        name: "darknessCall",
        displayName: "ダークネスコール",
        icon: mer_darkness_call,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "選択した場所に存在する敵2体に力50%、精神力50%ほど増加したダメージ。",
            "選択した場所に存在する敵2体に力100%、精神力100%ほど増加したダメージ。",
            "選択した場所に存在する敵3体に力150%、精神力150%ほど増加したダメージ。",
            "選択した場所に存在する敵3体に力200%、精神力200%ほど増加したダメージ。",
            "選択した場所に存在する敵4体に力250%、精神力250%ほど増加したダメージ。",
            "選択した場所に存在する敵5体に力300%、精神力300%ほど増加したダメージ。",
            "選択した場所に存在する敵7体に力400%、精神力400%ほど増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "tuneOfLife",
        displayName: "チューンオブライフ",
        icon: mer_tune_of_life,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の全ての攻撃力を10%増加します。",
            "21分間、使用者の全ての攻撃力を14%増加します。",
            "24分間、使用者の全ての攻撃力を18%増加します。",
            "27分間、使用者の全ての攻撃力を22%増加します。",
            "30分間、使用者の全ての攻撃力を26%増加します。",
            "30分間、使用者の全ての攻撃力を30%増加します。",
            "120分間、使用者の全ての攻撃力を40%増加します。",
        ],
        attributes: {
            0: {
                multiplyAttack: 10,
            },
            1: {
                multiplyAttack: 14,
            },
            2: {
                multiplyAttack: 18,
            },
            3: {
                multiplyAttack: 22,
            },
            4: {
                multiplyAttack: 26,
            },
            5: {
                multiplyAttack: 30,
            },
            6: {
                multiplyAttack: 40,
            }
        }
    },
    {
        name: "vineOfLight",
        displayName: "ヴァインオブライト",
        icon: mer_vine_of_light,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "距離20ｍ以内の対象と使用者を5秒間拘束。",
            "距離20ｍ以内の対象と使用者を6秒間拘束。",
            "距離20ｍ以内の対象と使用者を7秒間拘束。",
            "距離20ｍ以内の対象と使用者を8秒間拘束。",
            "距離20ｍ以内の対象と使用者を9秒間拘束。",
            "距離20ｍ以内の対象と使用者を10秒間拘束。",
            "距離20ｍ以内の対象と使用者を12秒間拘束。",
        ],
        attributes: {}
    },
    {
        name: "potentialPower",
        displayName: "ポテンシャルパワー",
        icon: mer_potential_power,
        category: "Passive",
        origin: "Self",
        raceid: 7,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "使用していないスキルポイント1につきHP+500、MP+500、パッシブ",
            "使用していないスキルポイント1につきHP+1000、MP+1000、パッシブ",
            "使用していないスキルポイント1につきHP+1500、MP+1500、パッシブ",
            "使用していないスキルポイント1につきHP+2000、MP+2000、パッシブ",
            "使用していないスキルポイント1につきHP+2500、MP+2500、パッシブ",
        ],
        // TODO: implement custom logic
        attributes: {
        }
    },
]