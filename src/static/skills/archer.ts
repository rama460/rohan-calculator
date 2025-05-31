import { Skill } from "./skill";
import archer_blazing from "../../assets/skills/blazing.gif";
import archer_frozen from "../../assets/skills/frozen.gif";
import archer_darkness from "../../assets/skills/darkness.gif";
import archer_divine from "../../assets/skills/divine.gif";
import archer_psychic_pierce from "../../assets/skills/archer/HE_psychic_pierce.gif";
import archer_long_shot from "../../assets/skills/archer/HE_long_shot.gif";
import archer_enchant_arrow from "../../assets/skills/archer/HE_enchant_arrow.gif";
import archer_fainting_pierce from "../../assets/skills/archer/HE_fainting_pierce.gif";
import archer_breeding_shot from "../../assets/skills/archer/HE_breeding_shot.gif";
import archer_agility from "../../assets/skills/archer/HE_agility.gif";
import archer_brandish_kick from "../../assets/skills/archer/HE_brandish_kick.gif";
import archer_ensnare_shot from "../../assets/skills/archer/HE_ensnare_shot.gif";
import archer_feeble_arrow from "../../assets/skills/archer/HE_feeble_arrow.gif";
import archer_fatal from "../../assets/skills/archer/HE_fatal.gif";
import archer_sprint from "../../assets/skills/archer/HE_sprint.gif";
import archer_evade from "../../assets/skills/archer/HE_evade.gif";
import archer_root_pierce from "../../assets/skills/archer/HE_root_pierce.gif";
import archer_double_strike from "../../assets/skills/archer/HE_double_strike.gif";


export const archer_skills: Skill[] = [

    {
        name: "blazing",
        displayName: "ブレイジング",
        icon: archer_blazing,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "火属性攻撃力+20% 火属性防御力+10%4%の確率でダメージの5%を自分のHPとして吸収。",
            "火属性攻撃力+40% 火属性防御力+20%5%の確率でダメージの6%を自分のHPとして吸収。",
            "火属性攻撃力+60% 火属性防御力+30%6%の確率でダメージの7%を自分のHPとして吸収。",
            "火属性攻撃力+80% 火属性防御力+40%7%の確率でダメージの8%を自分のHPとして吸収。",
            "火属性攻撃力+100% 火属性防御力+50%8%の確率でダメージの10%を自分のHPとして吸収。"
        ],
        attributes: {}
    },
    {
        name: "frozen",
        displayName: "フローズン",
        icon: archer_frozen,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "氷属性攻撃力+20% 氷属性防御力+10%4%の確率で7秒間対象の移動速度を10%減少。",
            "氷属性攻撃力+40% 氷属性防御力+20%5%の確率で7秒間対象の移動速度を15%減少。",
            "氷属性攻撃力+60% 氷属性防御力+30%6%の確率で7秒間対象の移動速度を20%減少。",
            "氷属性攻撃力+80% 氷属性防御力+40%7%の確率で7秒間対象の移動速度を25%減少。",
            "氷属性攻撃力+100% 氷属性防御力+50%8%の確率で7秒間対象の移動速度を30%減少。"
        ],
        attributes: {}
    },
    {
        name: "darkness",
        displayName: "ダークネス",
        icon: archer_darkness,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "暗黒属性攻撃力+20% 暗黒属性防御力+10%4%の確立で7秒間、対象の攻撃速度を10%減少。",
            "暗黒属性攻撃力+40% 暗黒属性防御力+20%5%の確立で7秒間、対象の攻撃速度を15%減少。",
            "暗黒属性攻撃力+60% 暗黒属性防御力+30%6%の確立で7秒間、対象の攻撃速度を20%減少。",
            "暗黒属性攻撃力+80% 暗黒属性防御力+40%7%の確立で7秒間、対象の攻撃速度を25%減少。",
            "暗黒属性攻撃力+100% 暗黒属性防御力+50%8%の確立で7秒間、対象の攻撃速度を30%減少。"
        ],
        attributes: {}
    },
    {
        name: "divine",
        displayName: "ディバイン",
        icon: archer_divine,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "神聖属性攻撃力+20% 神聖属性防御力+10%4% 確率でダメージの 5%を自分のMPで吸収。",
            "神聖属性攻撃力+40% 神聖属性防御力+20%5% 確率でダメージの 6%を自分のMPで吸収。",
            "神聖属性攻撃力+60% 神聖属性防御力+30%6% 確率でダメージの 7%を自分のMPで吸収。",
            "神聖属性攻撃力+80% 神聖属性防御力+40%7% 確率でダメージの 8%を自分のMPで吸収。",
            "神聖属性攻撃力+100% 神聖属性防御力+50%8% 確率でダメージの 10%を自分のMPで吸収。"
        ],
        attributes: {}
    },
    {
        name: "psychicPierce",
        displayName: "サイキックピアス",
        icon: archer_psychic_pierce,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の60%の追加ダメージ。",
            "対象に通常攻撃の80%の追加ダメージ。",
            "対象に通常攻撃の100%の追加ダメージ。",
            "対象に通常攻撃の120%の追加ダメージ。",
            "対象に通常攻撃の140%の追加ダメージ。",
            "対象に通常攻撃の160%の追加ダメージ。",
            "対象に通常攻撃の250%の追加ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "longShot",
        displayName: "ロングショット",
        icon: archer_long_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、詠唱者の遠距離武器の射程距離を10%増加。",
            "10分間、詠唱者の遠距離武器の射程距離を15%増加。",
            "15分間、詠唱者の遠距離武器の射程距離を20%増加。",
            "20分間、詠唱者の遠距離武器の射程距離を25%増加。",
            "25分間、詠唱者の遠距離武器の射程距離を35%増加。",
            "30分間、詠唱者の遠距離武器の射程距離を45%増加。",
            "60分間、詠唱者の遠距離武器の射程距離を60%増加。"
        ],
        attributes: {}
    },
    {
        name: "enchantArrow",
        displayName: "エンチャントアロー",
        icon: archer_enchant_arrow,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、矢とボルトの攻撃力を10%増加させます。",
            "21分間、矢とボルトの攻撃力を15%増加させます。",
            "24分間、矢とボルトの攻撃力を20%増加させます。",
            "27分間、矢とボルトの攻撃力を25%増加させます。",
            "30分間、矢とボルトの攻撃力を30%増加させます。",
            "30分間、矢とボルトの攻撃力を35%増加させます。",
            "120分間、矢とボルトの攻撃力を40%増加させます。",
        ],
        attributes: {
            0: {
                multiplyArrowAttack: 10,
            },
            1: {
                multiplyArrowAttack: 15,
            },
            2: {
                multiplyArrowAttack: 20,
            },
            3: {
                multiplyArrowAttack: 25,
            },
            4: {
                multiplyArrowAttack: 30,
            },
            5: {
                multiplyArrowAttack: 35,
            },
            6: {
                multiplyArrowAttack: 40,
            }
        }
    },
    {
        name: "faintingPierce",
        displayName: "フェインティングピアス",
        icon: archer_fainting_pierce,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、サイキックピアススキル命中時、30%の確率で10秒間50%移動速度減少。",
            "21分間、サイキックピアススキル命中時、40%の確率で10秒間50%移動速度減少。",
            "24分間、サイキックピアススキル命中時、50%の確率で10秒間50%移動速度減少。",
            "27分間、サイキックピアススキル命中時、60%の確率で10秒間50%移動速度減少。",
            "30分間、サイキックピアススキル命中時、70%の確率で10秒間50%移動速度減少。",
            "30分間、サイキックピアススキル命中時、80%の確率で10秒間50%移動速度減少。",
            "90分間、サイキックピアススキル命中時、100%の確率で10秒間50%移動速度減少。"
        ],
        attributes: {}
    },
    {
        name: "breedingShot",
        displayName: "ブリーディングショット",
        icon: archer_breeding_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "通常攻撃 70%のダメージを 3秒ごとに 5回追加攻撃。",
            "通常攻撃 70%のダメージを 3秒ごとに 6回追加攻撃。",
            "通常攻撃 70%のダメージを 3秒ごとに 7回追加攻撃。",
            "通常攻撃 70%のダメージを 3秒ごとに 8回追加攻撃。",
            "通常攻撃 70%のダメージを 3秒ごとに 9回追加攻撃。",
            "通常攻撃 70%のダメージを 3秒ごとに 10回追加攻撃。",
            "通常攻撃 80%のダメージを 3秒ごとに 15回追加攻撃。"
        ],
        attributes: {}
    },
    {
        name: "agility",
        displayName: "アジリティ",
        icon: archer_agility,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の敏捷性を10%増加させます。",
            "21分間、使用者の敏捷性を15%増加させます。",
            "24分間、使用者の敏捷性を20%増加させます。",
            "27分間、使用者の敏捷性を25%増加させます。",
            "30分間、使用者の敏捷性を30%増加させます。",
            "30分間、使用者の敏捷性を35%増加させます。",
            "120分間、使用者の敏捷性を50%増加させます。",
        ],
        attributes: {
            0: {
                multiplyAgility: 10,
            },
            1: {
                multiplyAgility: 15,
            },
            2: {
                multiplyAgility: 20,
            },
            3: {
                multiplyAgility: 25,
            },
            4: {
                multiplyAgility: 30,
            },
            5: {
                multiplyAgility: 35,
            },
            6: {
                multiplyAgility: 50,
            }
        }
    },
    {
        name: "brandishKick",
        displayName: "ブランデッシュキック",
        icon: archer_brandish_kick,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "50%確率で5秒間スタン。近距離攻撃力による追加ダメージ。",
            "55%確率で6秒間スタン。近距離攻撃力による追加ダメージ。",
            "60%確率で7秒間スタン。近距離攻撃力による追加ダメージ。",
            "65%確率で8秒間スタン。近距離攻撃力による追加ダメージ。",
            "70%確率で9秒間スタン。近距離攻撃力による追加ダメージ。",
            "80%確率で10秒間スタン。近距離攻撃力による追加ダメージ。",
            "100%確率で10秒間スタン。近距離攻撃力による追加ダメージ。"
        ],
        attributes: {}
    },
    {
        name: "inSnareShot",
        displayName: "インスネアショット",
        icon: archer_ensnare_shot,
        category: "Debuff",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "3秒間、対象の移動速度を30%減少。",
            "4秒間、対象の移動速度を30%減少。",
            "5秒間、対象の移動速度を30%減少。",
            "6秒間、対象の移動速度を30%減少。",
            "7秒間、対象の移動速度を30%減少。",
            "8秒間、対象の移動速度を30%減少。",
            "9秒間、対象の移動速度を30%減少。"
        ],
        attributes: {}
    },
    {
        name: "feebleArrow",
        displayName: "フィーブルアロー",
        icon: archer_feeble_arrow,
        category: "Debuff",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、対象の力を8%減少。",
            "15秒間、対象の力を12%減少。",
            "15秒間、対象の力を16%減少。",
            "15秒間、対象の力を20%減少。",
            "15秒間、対象の力を25%減少。",
            "15秒間、対象の力を30%減少。",
            "15秒間、対象の力を40%減少。"
        ],
        attributes: {}
    },

    {
        name: "fatal",
        displayName: "フェイタル",
        icon: archer_fatal,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、クリティカル攻撃時に敏捷性の100%ほどダメージを増加させます。",
            "21分間、クリティカル攻撃時に敏捷性の150%ほどダメージを増加させます。",
            "24分間、クリティカル攻撃時に敏捷性の200%ほどダメージを増加させます。",
            "27分間、クリティカル攻撃時に敏捷性の250%ほどダメージを増加させます。",
            "30分間、クリティカル攻撃時に敏捷性の350%ほどダメージを増加させます。",
            "30分間、クリティカル攻撃時に敏捷性の500%ほどダメージを増加させます。",
            "120分間、クリティカル攻撃時に敏捷性の700%ほどダメージを増加させます。",
        ],
        attributes: {
            0: {
                plusCriticalDamageMultiplyAgility: 100,
            },
            1: {
                plusCriticalDamageMultiplyAgility: 150,
            },
            2: {
                plusCriticalDamageMultiplyAgility: 200,
            },
            3: {
                plusCriticalDamageMultiplyAgility: 250,
            },
            4: {
                plusCriticalDamageMultiplyAgility: 350,
            },
            5: {
                plusCriticalDamageMultiplyAgility: 500,
            },
            6: {
                plusCriticalDamageMultiplyAgility: 700,
            }
        }
    },
    {
        name: "sprint",
        displayName: "スプリント",
        icon: archer_sprint,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18秒間、使用者の移動速度を20%増加させます。",
            "21秒間、使用者の移動速度を40%増加させます。",
            "24秒間、使用者の移動速度を60%増加させます。",
            "27秒間、使用者の移動速度を80%増加させます。",
            "30秒間、使用者の移動速度を100%増加させます。",
            "30秒間、使用者の移動速度を120%増加させます。",
            "30秒間、使用者の移動速度を140%増加させます。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 20,
            },
            1: {
                multiplyMovementSpeed: 40,
            },
            2: {
                multiplyMovementSpeed: 60,
            },
            3: {
                multiplyMovementSpeed: 80,
            },
            4: {
                multiplyMovementSpeed: 100,
            },
            5: {
                multiplyMovementSpeed: 120,
            },
            6: {
                multiplyMovementSpeed: 140,
            }
        }
    },
    {
        name: "evade",
        displayName: "イベイド",
        icon: archer_evade,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の回避率を15%増加させます。",
            "21分間、使用者の回避率を20%増加させます。",
            "24分間、使用者の回避率を25%増加させます。",
            "27分間、使用者の回避率を30%増加させます。",
            "30分間、使用者の回避率を35%増加させます。",
            "30分間、使用者の回避率を40%増加させます。",
            "120分間、使用者の回避率を50%増加させます。",
        ],
        attributes: {
            0: {
                multiplyDodging: 15,
            },
            1: {
                multiplyDodging: 20,
            },
            2: {
                multiplyDodging: 25,
            },
            3: {
                multiplyDodging: 30,
            },
            4: {
                multiplyDodging: 35,
            },
            5: {
                multiplyDodging: 40,
            },
            6: {
                multiplyDodging: 50,
            }
        }
    },
    {
        name: "rootPierce",
        displayName: "ルートピアス",
        icon: archer_root_pierce,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "通常攻撃ダメージ。60%の確率で5秒間移動不可(ルート)。",
            "通常攻撃に10%増加したダメージ。70%の確率で5秒間移動不可(ルート)。",
            "通常攻撃に20%増加したダメージ。80%の確率で5秒間移動不可(ルート)。",
            "通常攻撃に30%増加したダメージ。90%の確率で5秒間移動不可(ルート)。",
            "通常攻撃に40%増加したダメージ。100%の確率で5秒間移動不可(ルート)。",
            "通常攻撃に50%増加したダメージ。100%の確率で7秒間移動不可(ルート)。",
            "通常攻撃に60%増加したダメージ。100%の確率で10秒間移動不可(ルート)。",
        ],
        attributes: {}
    },
    {
        name: "doubleStrike",
        displayName: "ダブルストライク",
        icon: archer_double_strike,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "20%追加されたダメージで2回連続攻撃します。",
            "40%追加されたダメージで2回連続攻撃します。",
            "60%追加されたダメージで2回連続攻撃します。",
            "80%追加されたダメージで2回連続攻撃します。",
            "100%追加されたダメージで2回連続攻撃します。",
            "120%追加されたダメージで2回連続攻撃します。",
            "140%追加されたダメージで2回連続攻撃します。"
        ],
        attributes: {}
    }
]