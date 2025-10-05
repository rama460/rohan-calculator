import { Skill } from "./skill";

import guardian_sword_mastery from "../../assets/skills/guardian/ga_Sword_Mastery.gif";
import guardian_aim_blow from "../../assets/skills/guardian/ga_Aim_Blow.gif";
import guardian_physical_blow from "../../assets/skills/guardian/ga_Physical_Blow.gif";
import guardian_taunt_roar from "../../assets/skills/guardian/ga_Taunt_Roar.gif";
import guardian_rush from "../../assets/skills/guardian/ga_Rush.gif";
import guardian_war_cry from "../../assets/skills/guardian/ga_War_Cry.gif";
import guardian_crazy_strength from "../../assets/skills/guardian/ga_Crazy_Strength.gif";
import guardian_final_crash from "../../assets/skills/guardian/ga_Final_Crash.gif";
import guardian_crazy_swing from "../../assets/skills/guardian/ga_Crazy_Swing.gif";
import guardian_blue_drain from "../../assets/skills/guardian/ga_Blue_Drain.gif";
import guardian_order_swing from "../../assets/skills/guardian/ga_Order_Swing.gif";
import guardian_heavy_weapon from "../../assets/skills/guardian/ga_Heavy_Weapon.gif";
import guardian_critical_aura from "../../assets/skills/guardian/ga_Critical_Aura.gif";
import guardian_straight_repulse from "../../assets/skills/guardian/ga_Straight_Repulse.gif";
import guardian_roha_bless from "../../assets/skills/guardian/ga_Roha_Bless.gif";
import guardian_knight_symbol from "../../assets/skills/guardian/ga_Knight_Symbol.gif";
import guardian_stone_skin from "../../assets/skills/guardian/ga_Stone_Skin.gif";
import guardian_stunner from "../../assets/skills/guardian/ga_Stunner.gif";
import guardian_knights_mind from "../../assets/skills/guardian/ga_Knights_Mind.gif";
import guardian_overload from "../../assets/skills/guardian/ga_Overload.gif";

export const guardian_skills: Skill[] = [
    {
        name: "swordMastery",
        displayName: "ソードマスタリー",
        icon: guardian_sword_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、短剣・片手剣の攻撃力及びオプション攻撃力が19%増加、力の14％ほど近距離攻撃力が増加。",
            "21分間、短剣・片手剣の攻撃力及びオプション攻撃力が38%増加、力の28％ほど近距離攻撃力が増加。",
            "24分間、短剣・片手剣の攻撃力及びオプション攻撃力が58%増加、力の42％ほど近距離攻撃力が増加。",
            "27分間、短剣・片手剣の攻撃力及びオプション攻撃力が77%増加、力の56％ほど近距離攻撃力が増加。",
            "30分間、短剣・片手剣の攻撃力及びオプション攻撃力が96%増加、力の70％ほど近距離攻撃力が増加。",
            "30分間、短剣・片手剣の攻撃力及びオプション攻撃力が134%増加、力の98％ほど近距離攻撃力が増加。",
            "120分間、短剣・片手剣の攻撃力及びオプション攻撃力が192%増加、力の139％ほど近距離攻撃力が増加。"
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 19,
                plusMeleeAttackMultiplyStrength: 14,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 38,
                plusMeleeAttackMultiplyStrength: 28,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 58,
                plusMeleeAttackMultiplyStrength: 42,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 77,
                plusMeleeAttackMultiplyStrength: 56,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 96,
                plusMeleeAttackMultiplyStrength: 70,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 134,
                plusMeleeAttackMultiplyStrength: 98,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 192,
                plusMeleeAttackMultiplyStrength: 139,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "aimBlow",
        displayName: "エイムブロー",
        icon: guardian_aim_blow,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、補助武器着用時、攻撃を5%の確率で受け止めてクリティカル確率を1%増加させます。",
            "21分間、補助武器着用時、攻撃を7%の確率で受け止めてクリティカル確率を2%増加させます。",
            "24分間、補助武器着用時、攻撃を9%の確率で受け止めてクリティカル確率を3%増加させます。",
            "27分間、補助武器着用時、攻撃を11%の確率で受け止めてクリティカル確率を4%増加させます。",
            "30分間、補助武器着用時、攻撃を13%の確率で受け止めてクリティカル確率を5%増加させます。",
            "30分間、補助武器着用時、攻撃を15%の確率で受け止めてクリティカル確率を7%増加させます。",
            "120分間、補助武器着用時、攻撃を20%の確率で受け止めてクリティカル確率を10%増加させます。"
        ],
        attributes: {
            0: {
                plusCriticalRate: 1,
                multiplyPhysicalBlockRate: 5,
            },
            1: {
                plusCriticalRate: 2,
                multiplyPhysicalBlockRate: 7,
            },
            2: {
                plusCriticalRate: 3,
                multiplyPhysicalBlockRate: 9,
            },
            3: {
                plusCriticalRate: 4,
                multiplyPhysicalBlockRate: 11,
            },
            4: {
                plusCriticalRate: 5,
                multiplyPhysicalBlockRate: 13,
            },
            5: {
                plusCriticalRate: 7,
                multiplyPhysicalBlockRate: 15,
            },
            6: {
                plusCriticalRate: 10,
                multiplyPhysicalBlockRate: 20,
            }
        }
    },
    {
        name: "physicalBlow",
        displayName: "フィジカルブロー",
        icon: guardian_physical_blow,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間詠唱者のHPを18%増加させます。",
            "21分間詠唱者のHPを21%増加させます。",
            "24分間詠唱者のHPを24%増加させます。",
            "27分間詠唱者のHPを27%増加させます。",
            "30分間詠唱者のHPを30%増加させます。",
            "30分間詠唱者のHPを35%増加させます。",
            "120分間詠唱者のHPを40%増加させます。"
        ],
        attributes: {
            0: {
                multiplyHitPoint: 18,
            },
            1: {
                multiplyHitPoint: 21,
            },
            2: {
                multiplyHitPoint: 24,
            },
            3: {
                multiplyHitPoint: 27,
            },
            4: {
                multiplyHitPoint: 30,
            },
            5: {
                multiplyHitPoint: 35,
            },
            6: {
                multiplyHitPoint: 40,
            }
        }
    },
    {
        name: "tauntRoar",
        displayName: "タウントロアー",
        icon: guardian_taunt_roar,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "10秒間、周囲のモンスターが自分を攻撃するようにします. パーティーの時にだけ使用可能です。"
        ],
        attributes: {
        }
    },
    {
        name: "rush",
        displayName: "ラッシュ",
        icon: guardian_rush,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 6秒間麻痺させます。"
        ],
        attributes: {}
    },
    {
        name: "warCry",
        displayName: "ウォークライ",
        icon: guardian_war_cry,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間 15メートル内のすべての対象の物理攻撃力を15%減少させます。",
            "30秒間 15メートル内のすべての対象の物理攻撃力を20%減少させます。",
            "30秒間 15メートル内のすべての対象の物理攻撃力を25%減少させます。",
            "30秒間 15メートル内のすべての対象の物理攻撃力を30%減少させます。",
            "30秒間 15メートル内のすべての対象の物理攻撃力を35%減少させます。",
            "60秒間 15メートル内のすべての対象の物理攻撃力を40%減少させます。",
            "90秒間 15メートル内のすべての対象の物理攻撃力を60%減少させます。"
        ],
        attributes: {}
    },
    {
        name: "crazyStrength",
        displayName: "クレイジーストレングス",
        icon: guardian_crazy_strength,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間対象の力を15%増加させます。",
            "21分間対象の力を20%増加させます。",
            "24分間対象の力を25%増加させます。",
            "27分間対象の力を30%増加させます。",
            "30分間対象の力を35%増加させます。",
            "30分間対象の力を40%増加させます。",
            "120分間対象の力を60%増加させます。"
        ],
        attributes: {
            0: {
                multiplyStrength: 15,
            },
            1: {
                multiplyStrength: 20,
            },
            2: {
                multiplyStrength: 25,
            },
            3: {
                multiplyStrength: 30,
            },
            4: {
                multiplyStrength: 35,
            },
            5: {
                multiplyStrength: 40,
            },
            6: {
                multiplyStrength: 60,
            }
        }
    },

    {
        name: "finalCrash",
        displayName: "ファイナルクラッシュ",
        icon: guardian_final_crash,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象にダメージ 120% 増加した攻撃をします.",
            "対象にダメージ 130% 増加した攻撃をします.",
            "対象にダメージ 150% 増加した攻撃をします.",
            "対象にダメージ 170% 増加した攻撃をします.",
            "対象にダメージ 180% 増加した攻撃をします.",
            "対象にダメージ 200% 増加した攻撃をします.",
            "対象にダメージ 220% 増加した攻撃をします."
        ],
        attributes: {}
    },
    {
        name: "crazySwing",
        displayName: "クレイジースイング",
        icon: guardian_crazy_swing,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間攻撃速度50%とダメージ10%増加させます。",
            "10秒間攻撃速度55%とダメージ15%増加させます。",
            "10秒間攻撃速度60%とダメージ20%増加させます。",
            "10秒間攻撃速度65%とダメージ25%増加させます。",
            "10秒間攻撃速度70%とダメージ30%増加させます。",
            "10秒間攻撃速度80%とダメージ40%増加させます。",
            "10秒間攻撃速度100%とダメージ50%増加させます。"
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 50,
                multiplyIncreaseDamageDealt: 10,
            },
            1: {
                multiplyAttackSpeed: 55,
                multiplyIncreaseDamageDealt: 15,
            },
            2: {
                multiplyAttackSpeed: 60,
                multiplyIncreaseDamageDealt: 20,
            },
            3: {
                multiplyAttackSpeed: 65,
                multiplyIncreaseDamageDealt: 25,
            },
            4: {
                multiplyAttackSpeed: 70,
                multiplyIncreaseDamageDealt: 30,
            },
            5: {
                multiplyAttackSpeed: 80,
                multiplyIncreaseDamageDealt: 40,
            },
            6: {
                multiplyAttackSpeed: 100,
                multiplyIncreaseDamageDealt: 50,
            }
        }
    },
    {
        name: "bloodDrain",
        displayName: "ブルードレイン",
        icon: guardian_blue_drain,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象にダメージの 100% MPを減少させます。",
            "対象にダメージの 150% MPを減少させます。",
            "対象にダメージの 200% MPを減少させます。",
            "対象にダメージの 250% MPを減少させます。",
            "対象にダメージの 300% MPを減少させます。",
            "対象にダメージの 400% MPを減少させます。",
            "対象にダメージの 500% MPを減少させます。"
        ],
        attributes: {}
    },
    {
        name: "orderSwing",
        displayName: "オーダースイング",
        icon: guardian_order_swing,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間攻撃する度にダメージの 2%を累積して次の攻撃のダメージを増加させます。",
            "20秒間攻撃する度にダメージの 3%を累積して次の攻撃のダメージを増加させます。",
            "20秒間攻撃する度にダメージの 4%を累積して次の攻撃のダメージを増加させます。",
            "20秒間攻撃する度にダメージの 5%を累積して次の攻撃のダメージを増加させます。",
            "20秒間攻撃する度にダメージの 6%を累積して次の攻撃のダメージを増加させます。",
            "20秒間攻撃する度にダメージの 7%を累積して次の攻撃のダメージを増加させます。",
            "20秒間攻撃する度にダメージの 8%を累積して次の攻撃のダメージを増加させます。"
        ],
        attributes: {}
    },
    {
        name: "heavyWeapon",
        displayName: "ヘビィウエポン",
        icon: guardian_heavy_weapon,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間対象の攻撃速度を30%減少させます.",
            "30秒間対象の攻撃速度を35%減少させます.",
            "30秒間対象の攻撃速度を40%減少させます.",
            "30秒間対象の攻撃速度を45%減少させます.",
            "30秒間対象の攻撃速度を50%減少させます.",
            "30秒間対象の攻撃速度を60%減少させます.",
            "30秒間対象の攻撃速度を70%減少させます."
        ],
        attributes: {}
    },
    {
        name: "criticalAura",
        displayName: "クリティカルオーラ",
        icon: guardian_critical_aura,
        category: "Buff",
        origin: "Group",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバー及び使用者のクリティカル確率を1%、攻撃力を5%増加させます。",
            "パーティーメンバー及び使用者のクリティカル確率を2%、攻撃力を8%増加させます。",
            "パーティーメンバー及び使用者のクリティカル確率を3%、攻撃力を11%増加させます。",
            "パーティーメンバー及び使用者のクリティカル確率を4%、攻撃力を14%増加させます。",
            "パーティーメンバー及び使用者のクリティカル確率を5%、攻撃力を17%増加させます。",
            "パーティーメンバー及び使用者のクリティカル確率を6%、攻撃力を20%増加させます。",
            "パーティーメンバー及び使用者のクリティカル確率を7%、攻撃力を25%増加させます。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 1,
                multiplyAttack: 5,
            },
            1: {
                plusCriticalRate: 2,
                multiplyAttack: 8,
            },
            2: {
                plusCriticalRate: 3,
                multiplyAttack: 11,
            },
            3: {
                plusCriticalRate: 4,
                multiplyAttack: 14,
            },
            4: {
                plusCriticalRate: 5,
                multiplyAttack: 17,
            },
            5: {
                plusCriticalRate: 6,
                multiplyAttack: 20,
            },
            6: {
                plusCriticalRate: 7,
                multiplyAttack: 25,
            }
        }
    },
    {
        name: "straightRepulse",
        displayName: "ストレートリパルス",
        icon: guardian_straight_repulse,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に100%増加したダメージを与え、一直線上の敵に30%ずつ減少したダメージを与えます。",
            "対象に120%増加したダメージを与え、一直線上の敵に30%ずつ減少したダメージを与えます。",
            "対象に130%増加したダメージを与え、一直線上の敵に30%ずつ減少したダメージを与えます。",
            "対象に150%増加したダメージを与え、一直線上の敵に20%ずつ減少したダメージを与えます。",
            "対象に160%増加したダメージを与え、一直線上の敵に20%ずつ減少したダメージを与えます。",
            "対象に180%増加したダメージを与え、一直線上の敵に10%ずつ減少したダメージを与えます。",
            "対象に200%増加したダメージを与え、一直線上の敵に5%ずつ減少したダメージを与えます。"
        ],
        attributes: {}
    },
    {
        name: "rohaBless",
        displayName: "ロハブレス",
        icon: guardian_roha_bless,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間スタン, ルート,睡眠,麻痺効果を無効化させます。",
            "12秒間スタン, ルート,睡眠,麻痺効果を無効化させます。",
            "15秒間スタン, ルート,睡眠,麻痺効果を無効化させます。",
            "17秒間スタン, ルート,睡眠,麻痺効果を無効化させます。",
            "20秒間スタン, ルート,睡眠,麻痺効果を無効化させます。",
            "25秒間スタン, ルート,睡眠,麻痺効果を無効化させます。",
            "30秒間スタン, ルート,睡眠,麻痺効果を無効化させます。"
        ],
        attributes: {}
    },
    {
        name: "knightSymbol",
        displayName: "ナイトシンボル",
        icon: guardian_knight_symbol,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視してダメージが70%増加した攻撃をします。",
            "対象の防御力を無視してダメージが80%増加した攻撃をします。",
            "対象の防御力を無視してダメージが90%増加した攻撃をします。",
            "対象の防御力を無視してダメージが100%増加した攻撃をします。",
            "対象の防御力を無視してダメージが110%増加した攻撃をします。",
            "対象の防御力を無視してダメージが130%増加した攻撃をします。",
            "対象の防御力を無視してダメージが150%増加した攻撃をします。"
        ],
        attributes: {}
    },
    {
        name: "stoneSkin",
        displayName: "ストーンスキン",
        icon: guardian_stone_skin,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間物理ダメージに対して抵抗します。",
            "15秒間物理ダメージに対して抵抗します。",
            "20秒間物理ダメージに対して抵抗します。",
            "25秒間物理ダメージに対して抵抗します。",
            "30秒間物理ダメージに対して抵抗します。",
            "35秒間物理ダメージに対して抵抗します。",
            "35秒間物理、魔法ダメージに対して抵抗します。"
        ],
        attributes: {}
    },
    {
        name: "stunner",
        displayName: "スタナー",
        icon: guardian_stunner,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "力の100%に値するダメージを与え、3秒間スタン。",
            "力の130%に値するダメージを与え、3秒間スタン。",
            "力の160%に値するダメージを与え、4秒間スタン。",
            "力の190%に値するダメージを与え、5秒間スタン。",
            "力の220%に値するダメージを与え、6秒間スタン。",
            "力の250%に値するダメージを与え、7秒間スタン。",
            "力の300%に値するダメージを与え、7秒間スタン。"
        ],
        attributes: {}
    },
    {
        name: "knightsMind",
        displayName: "ナイツマインド",
        icon: guardian_knights_mind,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、20%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に60%減少したダメージを与えます。",
            "21分間、30%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に60%減少したダメージを与えます。",
            "24分間、40%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に60%減少したダメージを与えます。",
            "27分間、50%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に60%減少したダメージを与えます。",
            "30分間、60%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に60%減少したダメージを与えます。",
            "30分間、80%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に60%減少したダメージを与えます。",
            "60分間、100%の確率で通常攻撃が範囲攻撃になり、10メートル中の対象に50%減少したダメージを与えます。"
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: -60,
            },
            1: {
                multiplyIncreaseDamageDealt: -60,
            },
            2: {
                multiplyIncreaseDamageDealt: -60,
            },
            3: {
                multiplyIncreaseDamageDealt: -60,
            },
            4: {
                multiplyIncreaseDamageDealt: -60,
            },
            5: {
                multiplyIncreaseDamageDealt: -60,
            },
            6: {
                multiplyIncreaseDamageDealt: -50,
            }
        }
    },
    {
        name: "overload",
        displayName: "オーバークロード",
        icon: guardian_overload,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、最も高い攻撃力を80%増加し、攻撃速度、移動速度、HP吸収を10%増加させます。",
            "60秒間、最も高い攻撃力を90%増加し、攻撃速度、移動速度、HP吸収を15%増加させます。",
            "60秒間、最も高い攻撃力を100%増加し、攻撃速度、移動速度、HP吸収を20%増加させます。",
            "60秒間、最も高い攻撃力を110%増加し、攻撃速度、移動速度、HP吸収を25%増加させます。",
            "60秒間、最も高い攻撃力を120%増加し、攻撃速度、移動速度、HP吸収を30%増加させます。",
            "60秒間、最も高い攻撃力を150%増加し、攻撃速度、移動速度、HP吸収を35%増加させます。",
            "60秒間、最も高い攻撃力を200%増加し、攻撃速度、移動速度、HP吸収を50%増加させます。"
        ],
        attributes: {
            0: {
                multiplyMeleeAttack: 80,
                multiplyAttackSpeed: 10,
                multiplyMovementSpeed: 10,
                multiplyHitPointAbsorbDamageRate: 10,
            },
            1: {
                multiplyMeleeAttack: 90,
                multiplyAttackSpeed: 15,
                multiplyMovementSpeed: 15,
                multiplyHitPointAbsorbDamageRate: 15,
            },
            2: {
                multiplyMeleeAttack: 100,
                multiplyAttackSpeed: 20,
                multiplyMovementSpeed: 20,
                multiplyHitPointAbsorbDamageRate: 20,
            },
            3: {
                multiplyMeleeAttack: 110,
                multiplyAttackSpeed: 25,
                multiplyMovementSpeed: 25,
                multiplyHitPointAbsorbDamageRate: 25,
            },
            4: {
                multiplyMeleeAttack: 120,
                multiplyAttackSpeed: 30,
                multiplyMovementSpeed: 30,
                multiplyHitPointAbsorbDamageRate: 30,
            },
            5: {
                multiplyMeleeAttack: 150,
                multiplyAttackSpeed: 35,
                multiplyMovementSpeed: 35,
                multiplyHitPointAbsorbDamageRate: 35,
            },
            6: {
                multiplyMeleeAttack: 200,
                multiplyAttackSpeed: 50,
                multiplyMovementSpeed: 50,
                multiplyHitPointAbsorbDamageRate: 50,
            }
        }
    }
]