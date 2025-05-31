import { Skill } from "./skill";

import warrior_frozen from "../../assets/skills/frozen.gif";
import warrior_darkness from "../../assets/skills/darkness.gif";
import warrior_divine from "../../assets/skills/divine.gif";
import warrior_taunt_war from "../../assets/skills/warrior/G_Taunt_War.gif";
import warrior_blood_adrenaline from "../../assets/skills/warrior/G_Blood_Adrenaline.gif";
import warrior_bereave from "../../assets/skills/warrior/G_Bereave.gif";
import warrior_battle_chant from "../../assets/skills/warrior/G_Battle_Chant.gif";
import warrior_reap from "../../assets/skills/warrior/G_Reap.gif";
import warrior_find_hole from "../../assets/skills/warrior/G_Find_Hole.gif";
import warrior_rage from "../../assets/skills/warrior/G_Rage.gif";
import warrior_crush from "../../assets/skills/warrior/G_Crush.gif";
import warrior_power_surge from "../../assets/skills/warrior/G_Power_Surge.gif";
import warrior_life_force from "../../assets/skills/warrior/G_Life_Force.gif";
import warrior_rampage from "../../assets/skills/warrior/G_Rampage.gif";
import warrior_shoulder_charge from "../../assets/skills/warrior/G_Shoulder_Charge.gif";
import warrior_brute_force from "../../assets/skills/warrior/G_Brute_Force.gif";
import warrior_kidney_strike from "../../assets/skills/warrior/G_Kidney_Strike.gif";
import warrior_giant_shift from "../../assets/skills/warrior/G_Giant_Shift.gif";

export const warrior_skills: Skill[] = [
    {
        name: "frozen",
        displayName: "フローズン",
        icon: warrior_frozen,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "氷属性攻撃力+20% 氷属性防御力+10% 4%の確率で7秒間対象の移動速度を 10% 減少。",
            "氷属性攻撃力+40% 氷属性防御力+20% 5%の確率で7秒間対象の移動速度を 15% 減少。",
            "氷属性攻撃力+60% 氷属性防御力+30% 6%の確率で7秒間対象の移動速度を 20% 減少。",
            "氷属性攻撃力+80% 氷属性防御力+40% 7%の確率で7秒間対象の移動速度を 25% 減少。",
            "氷属性攻撃力+100% 氷属性防御力+50% 8%の確率で7秒間対象の移動速度を 30% 減少。",
        ],
        attributes: {}
    },
    {
        name: "darkness",
        displayName: "ダークネス",
        icon: warrior_darkness,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "暗黒属性攻撃力+20% 暗黒属性防御力+10% 4%の確立で7秒間、対象の攻撃速度を10%減少。",
            "暗黒属性攻撃力+40% 暗黒属性防御力+20% 5%の確立で7秒間、対象の攻撃速度を15%減少。",
            "暗黒属性攻撃力+60% 暗黒属性防御力+30% 6%の確立で7秒間、対象の攻撃速度を20%減少。",
            "暗黒属性攻撃力+80% 暗黒属性防御力+40% 7%の確立で7秒間、対象の攻撃速度を25%減少。",
            "暗黒属性攻撃力+100% 暗黒属性防御力+50% 8%の確立で7秒間、対象の攻撃速度を30%減少。",
        ],
        attributes: {}
    },
    {
        name: "divine",
        displayName: "ディバイン",
        icon: warrior_divine,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "神聖属性の攻撃力を20%増加させ、属性防御力を10%増加させる。4%の確率でダメージの5%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を40%増加させ、属性防御力を20%増加させる。5%の確率でダメージの6%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を60%増加させ、属性防御力を30%増加させる。6%の確率でダメージの7%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を80%増加させ、属性防御力を40%増加させる。7%の確率でダメージの8%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を100%増加させ、属性防御力を50%増加させる。8%の確率でダメージの10%を自分のMPとして吸収する。",
        ],
        attributes: {}
    },
    {
        name: "tauntWar",
        displayName: "タウントウォー",
        icon: warrior_taunt_war,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "ターゲットしたモンスターが自分を攻撃するようになる。パーティー時のみ使用可能"
        ],
        attributes: {}
    },
    {
        name: "bloodAdrenaline",
        displayName: "ブラッドアドレナリン",
        icon: warrior_blood_adrenaline,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、最大HPの25%消費し、近距離攻撃力10%とポーション回復効果50％を増加させる。",
            "20秒間、最大HPの25%消費し、近距離攻撃力12%とポーション回復効果50％を増加させる。",
            "20秒間、最大HPの25%消費し、近距離攻撃力14%とポーション回復効果50％を増加させる。",
            "20秒間、最大HPの25%消費し、近距離攻撃力16%とポーション回復効果50％を増加させる。",
            "20秒間、最大HPの25%消費し、近距離攻撃力18%とポーション回復効果50％を増加させる。",
            "20秒間、最大HPの20%消費し、近距離攻撃力22%とポーション回復効果50％を増加させる。",
            "20秒間、最大HPの10%消費し、近距離攻撃力30%とポーション回復効果50％を増加させる。"
        ],
        attributes: {
            0: {
                multiplyMeleeAttack: 10,
                multiplyPotionRecovery: 50,
            },
            1: {
                multiplyMeleeAttack: 12,
                multiplyPotionRecovery: 50,
            },
            2: {
                multiplyMeleeAttack: 14,
                multiplyPotionRecovery: 50,
            },
            3: {
                multiplyMeleeAttack: 16,
                multiplyPotionRecovery: 50,
            },
            4: {
                multiplyMeleeAttack: 18,
                multiplyPotionRecovery: 50,
            },
            5: {
                multiplyMeleeAttack: 22,
                multiplyPotionRecovery: 50,
            },
            6: {
                multiplyMeleeAttack: 30,
                multiplyPotionRecovery: 50,
            }
        }
    },
    {
        name: "bereave",
        displayName: "ビリーブ",
        icon: warrior_bereave,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の160%のダメージを与えます。",
            "対象に通常攻撃の170%のダメージを与えます。",
            "対象に通常攻撃の180%のダメージを与えます。",
            "対象に通常攻撃の190%のダメージを与えます。",
            "対象に通常攻撃の200%のダメージを与えます。",
            "対象に通常攻撃の210%のダメージを与えます。",
            "対象に通常攻撃の220%のダメージを与えます。",
        ],
        attributes: {}
    },
    {
        name: "battleChant",
        displayName: "バトルチャント",
        icon: warrior_battle_chant,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間使用者の力と敏捷の50%ほどのHPを増加させます。",
            "21分間使用者の力と敏捷の90%ほどのHPを増加させます。",
            "24分間使用者の力と敏捷の130%ほどのHPを増加させます。",
            "27分間使用者の力と敏捷の170%ほどのHPを増加させます。",
            "30分間使用者の力と敏捷の210%ほどのHPを増加させます。",
            "30分間使用者の力と敏捷の250%ほどのHPを増加させます。",
            "90分間使用者の力と敏捷の300%ほどのHPを増加させます。",
        ],
        attributes: {
            0: {
                plusHitPointMultiplyStrength: 50,
                plusHitPointMultiplyAgility: 50,
            },
            1: {
                plusHitPointMultiplyStrength: 90,
                plusHitPointMultiplyAgility: 90,
            },
            2: {
                plusHitPointMultiplyStrength: 130,
                plusHitPointMultiplyAgility: 130,
            },
            3: {
                plusHitPointMultiplyStrength: 170,
                plusHitPointMultiplyAgility: 170,
            },
            4: {
                plusHitPointMultiplyStrength: 210,
                plusHitPointMultiplyAgility: 210,
            },
            5: {
                plusHitPointMultiplyStrength: 250,
                plusHitPointMultiplyAgility: 250,
            },
            6: {
                plusHitPointMultiplyStrength: 300,
                plusHitPointMultiplyAgility: 300,
            }
        }
    },

    {
        name: "reap",
        displayName: "リプ",
        icon: warrior_reap,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の60％ほどの増加ダメージを与えます。",
            "対象に通常攻撃の70％ほどの増加ダメージを与えます。",
            "対象に通常攻撃の80％ほどの増加ダメージを与えます。",
            "対象に通常攻撃の90％ほどの増加ダメージを与えます。",
            "対象に通常攻撃の100％ほどの増加ダメージを与えます。",
            "対象に通常攻撃の110％ほどの増加ダメージを与えます。",
            "対象に通常攻撃の120％ほどの増加ダメージを与えます。",
        ],
        attributes: {}
    },

    {
        name: "findHole",
        displayName: "ファインドホール",
        icon: warrior_find_hole,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、ダメージの3%ほど使用者のHPを回復させます。",
            "21分間、ダメージの6%ほど使用者のHPを回復させます。",
            "24分間、ダメージの9%ほど使用者のHPを回復させます。",
            "27分間、ダメージの12%ほど使用者のHPを回復させます。",
            "30分間、ダメージの15%ほど使用者のHPを回復させます。",
            "30分間、ダメージの20%ほど使用者のHPを回復させます。",
            "90分間、ダメージの35%ほど使用者のHPを回復させます。",
        ],
        attributes: {
            0: {
                multiplyHitPointAbsorbDamageRate: 3,
            },
            1: {
                multiplyHitPointAbsorbDamageRate: 6,
            },
            2: {
                multiplyHitPointAbsorbDamageRate: 9,
            },
            3: {
                multiplyHitPointAbsorbDamageRate: 12,
            },
            4: {
                multiplyHitPointAbsorbDamageRate: 15,
            },
            5: {
                multiplyHitPointAbsorbDamageRate: 20,
            },
            6: {
                multiplyHitPointAbsorbDamageRate: 35,
            }
        }
    },
    {
        name: "rage",
        displayName: "レージ",
        icon: warrior_rage,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、クリティカル攻撃時に力と敏捷の230%ほど増加したダメージを与えます。",
            "21分間、クリティカル攻撃時に力と敏捷の280%ほど増加したダメージを与えます。",
            "24分間、クリティカル攻撃時に力と敏捷の330%ほど増加したダメージを与えます。",
            "27分間、クリティカル攻撃時に力と敏捷の380%ほど増加したダメージを与えます。",
            "30分間、クリティカル攻撃時に力と敏捷の430%ほど増加したダメージを与えます。",
            "30分間、クリティカル攻撃時に力と敏捷の500%ほど増加したダメージを与えます。",
            "90分間、クリティカル攻撃時に力と敏捷の600%ほど増加したダメージを与えます。",
        ],
        attributes: {
            0: {
                plusCriticalDamageMultiplyStrength: 230,
                plusCriticalDamageMultiplyAgility: 230,
            },
            1: {
                plusCriticalDamageMultiplyStrength: 280,
                plusCriticalDamageMultiplyAgility: 280,
            },
            2: {
                plusCriticalDamageMultiplyStrength: 330,
                plusCriticalDamageMultiplyAgility: 330,
            },
            3: {
                plusCriticalDamageMultiplyStrength: 380,
                plusCriticalDamageMultiplyAgility: 380,
            },
            4: {
                plusCriticalDamageMultiplyStrength: 430,
                plusCriticalDamageMultiplyAgility: 430,
            },
            5: {
                plusCriticalDamageMultiplyStrength: 500,
                plusCriticalDamageMultiplyAgility: 500,
            },
            6: {
                plusCriticalDamageMultiplyStrength: 600,
                plusCriticalDamageMultiplyAgility: 600,
            }
        }
    },
    {
        name: "crush",
        displayName: "クラッシュ",
        icon: warrior_crush,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、30%の確率で鍵が無くても宝箱を開けられます。失敗すると100のダメージを受けます。",
            "21分間、40%の確率で鍵が無くても宝箱を開けられます。失敗すると300のダメージを受けます。",
            "24分間、50%の確率で鍵が無くても宝箱を開けられます。失敗すると500のダメージを受けます。",
            "27分間、60%の確率で鍵が無くても宝箱を開けられます。失敗すると700のダメージを受けます。",
            "30分間、70%の確率で鍵が無くても宝箱を開けられます。失敗すると900のダメージを受けます。",
            "30分間、80%の確率で鍵が無くても宝箱を開けられます。失敗すると1200のダメージを受けます。",
            "90分間、90%の確率で鍵が無くても宝箱を開けられます。失敗すると1500のダメージを受けます。",
        ],
        attributes: {}
    },
    {
        name: "powerSurge",
        displayName: "パワーサージ",
        icon: warrior_power_surge,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "一直線上の対象に力の50%ほど増加したダメージを与えます。10%ほどずつダメージが減少します。",
            "一直線上の対象に力の60%ほど増加したダメージを与えます。9%ほどずつダメージが減少します。",
            "一直線上の対象に力の70%ほど増加したダメージを与えます。8%ほどずつダメージが減少します。",
            "一直線上の対象に力の80%ほど増加したダメージを与えます。7%ほどずつダメージが減少します。",
            "一直線上の対象に力の90%ほど増加したダメージを与えます。6%ほどずつダメージが減少します。",
            "一直線上の対象に力の110%ほど増加したダメージを与えます。5%ほどずつダメージが減少します。",
            "一直線上の対象に力の150%ほど増加したダメージを与えます。3%ほどずつダメージが減少します。",
        ],
        attributes: {}
    },
    {
        name: "lifeForce",
        displayName: "ライフフォース",
        icon: warrior_life_force,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、攻撃を受けた際にHPを500回復。",
            "18秒間、攻撃を受けた際にHPを1500回復。",
            "21秒間、攻撃を受けた際にHPを2500回復。",
            "24秒間、攻撃を受けた際にHPを3500回復。",
            "27秒間、攻撃を受けた際にHPを4500回復。",
            "30秒間、攻撃を受けた際にHPを6000回復。",
            "30秒間、攻撃を受けた際にHPを10000回復。",
        ],
        attributes: {}
    },
    {
        name: "rampage",
        displayName: "ラムページ",
        icon: warrior_rampage,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に力の300%ほど増加したダメージを与えます。",
            "対象に力の400%ほど増加したダメージを与えます。",
            "対象に力の500%ほど増加したダメージを与えます。",
            "対象に力の600%ほど増加したダメージを与えます。",
            "対象に力の700%ほど増加したダメージを与えます。",
            "対象に力の800%ほど増加したダメージを与えます。",
            "対象に力の1000%ほど増加したダメージを与えます。",
        ],
        attributes: {}
    },
    {
        name: "shoulderCharge",
        displayName: "ショルダーチャージ",
        icon: warrior_shoulder_charge,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に突進し、2秒間麻痺させます。",
            "対象に突進し、3秒間麻痺させます。",
            "対象に突進し、4秒間麻痺させます。",
            "対象に突進し、5秒間麻痺させます。",
            "対象に突進し、6秒間麻痺させます。",
            "対象に突進し、7秒間麻痺させます。",
            "対象に突進し、8秒間麻痺させます。",
        ],
        attributes: {}
    },

    {
        name: "bruteForce",
        displayName: "ブルートフォース",
        icon: warrior_brute_force,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者のクリティカル攻撃率が3%増加します。",
            "21分間、使用者のクリティカル攻撃率が4%増加します。",
            "24分間、使用者のクリティカル攻撃率が5%増加します。",
            "27分間、使用者のクリティカル攻撃率が6%増加します。",
            "30分間、使用者のクリティカル攻撃率が7%増加します。",
            "30分間、使用者のクリティカル攻撃率が8%増加します。",
            "90分間、使用者のクリティカル攻撃率が10%増加します。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 3,
            },
            1: {
                plusCriticalRate: 4,
            },
            2: {
                plusCriticalRate: 5,
            },
            3: {
                plusCriticalRate: 6,
            },
            4: {
                plusCriticalRate: 7,
            },
            5: {
                plusCriticalRate: 8,
            },
            6: {
                plusCriticalRate: 10,
            }
        }
    },
    {
        name: "kidneyStrike",
        displayName: "キドニーストライキ",
        icon: warrior_kidney_strike,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、対象に通常攻撃の50%ほどのダメージを5回与えます。",
            "18秒間、対象に通常攻撃の50%ほどのダメージを6回与えます。",
            "21秒間、対象に通常攻撃の50%ほどのダメージを7回与えます。",
            "24秒間、対象に通常攻撃の50%ほどのダメージを8回与えます。",
            "27秒間、対象に通常攻撃の50%ほどのダメージを9回与えます。",
            "30秒間、対象に通常攻撃の50%ほどのダメージを10回与えます。",
            "45秒間、対象に通常攻撃の50%ほどのダメージを11回与えます。",
        ],
        attributes: {}
    },
    {
        name: "giantShift",
        displayName: "ジャイアントシフト",
        icon: warrior_giant_shift,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象を中心に通常攻撃より50%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を15減少させます。",
            "対象を中心に通常攻撃より60%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を25減少させます。",
            "対象を中心に通常攻撃より70%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を35減少させます。",
            "対象を中心に通常攻撃より80%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を45減少させます。",
            "対象を中心に通常攻撃より90%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を55減少させます。",
            "対象を中心に通常攻撃より100%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を70減少させます。",
            "対象を中心に通常攻撃より110%ほど増加した広域攻撃を行い、10秒間対象の全ての能力値を100減少させます。",
        ],
        attributes: {}
    }
]