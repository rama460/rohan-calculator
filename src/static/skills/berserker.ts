import { Skill } from "./skill";

import berserker_polearm_mastery from "../../assets/skills/berserker/G_BE_Polearm_Mastery.gif";
import berserker_criminal_mind from "../../assets/skills/berserker/G_BE_Criminal_Mind.gif";
import berserker_snare_axe from "../../assets/skills/berserker/G_BE_Snare_Axe.gif";
import berserker_berserk from "../../assets/skills/berserker/G_BE_Berserk.gif";
import berserker_fortunate from "../../assets/skills/berserker/G_BE_Fortunate.gif";
import berserker_routing_axe from "../../assets/skills/berserker/G_BE_Routing_Axe.gif";
import berserker_sweep from "../../assets/skills/berserker/G_BE_Sweep.gif";
import berserker_vigilance from "../../assets/skills/berserker/G_BE_Vigilance.gif";
import berserker_precision from "../../assets/skills/berserker/G_BE_Precision.gif";
import berserker_zolt from "../../assets/skills/berserker/G_BE_Zolt.gif";
import berserker_wild_blood from "../../assets/skills/berserker/G_BE_Wild_Blood.gif";
import berserker_low_blow from "../../assets/skills/berserker/G_BE_Low_Blow.gif";
import berserker_cleave from "../../assets/skills/berserker/G_BE_Cleave.gif";
import berserker_call_battle from "../../assets/skills/berserker/G_BE_Call_Battle.gif";
import berserker_premium_strike from "../../assets/skills/berserker/G_BE_Premium_Strike.gif";
import berserker_magnitude_swing from "../../assets/skills/berserker/G_BE_Magnitude_Swing.gif";
import berserker_retaliate from "../../assets/skills/berserker/G_BE_Retaliate.gif";
import berserker_ice_willy_willy from "../../assets/skills/berserker/G_BE_Ice_Willy_Willy.gif";
import berserker_madness from "../../assets/skills/berserker/G_BE_Madness.gif";
import berserker_brandish_weapon from "../../assets/skills/berserker/G_BE_Brandish_Weapon.gif";
import berserker_gigantic_storm from "../../assets/skills/berserker/G_BE_Gigantic_Storm.gif";

export const berserker_skills: Skill[] = [
    {
        name: "polearmMastery",
        displayName: "ポールアームマスタリー",
        icon: berserker_polearm_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、ポールアーム及びオプション攻撃力が49%増加。力の37%ほど近距離攻撃力が増加。",
            "21分間、ポールアーム及びオプション攻撃力が98%増加。力の75%ほど近距離攻撃力が増加。",
            "24分間、ポールアーム及びオプション攻撃力が147%増加。力の112%ほど近距離攻撃力が増加。",
            "27分間、ポールアーム及びオプション攻撃力が196%増加。力の150%ほど近距離攻撃力が増加。",
            "30分間、ポールアーム及びオプション攻撃力が246%増加。力の187%ほど近距離攻撃力が増加。",
            "30分間、ポールアーム及びオプション攻撃力が344%増加。力の262%ほど近距離攻撃力が増加。",
            "120分間、ポールアーム及びオプション攻撃力が491%増加。力の374%ほど近距離攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 49,
                plusMeleeAttackMultiplyStrength: 37,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 98,
                plusMeleeAttackMultiplyStrength: 75,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 147,
                plusMeleeAttackMultiplyStrength: 112,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 196,
                plusMeleeAttackMultiplyStrength: 150,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 246,
                plusMeleeAttackMultiplyStrength: 187,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 344,
                plusMeleeAttackMultiplyStrength: 262,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 491,
                plusMeleeAttackMultiplyStrength: 374,
                meleeMastery: 1,
            }
        },
    },
    {
        name: "criminalMind",
        displayName: "クリミナルマインド",
        icon: berserker_criminal_mind,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、通常攻撃にマーダラーカウントの2倍のダメージが追加されます。",
            "21分間、通常攻撃にマーダラーカウントの4倍のダメージが追加されます。",
            "24分間、通常攻撃にマーダラーカウントの6倍のダメージが追加されます。",
            "27分間、通常攻撃にマーダラーカウントの8倍のダメージが追加されます。",
            "30分間、通常攻撃にマーダラーカウントの10倍のダメージが追加されます。",
            "30分間、通常攻撃にマーダラーカウントの12倍のダメージが追加されます。",
            "120分間、通常攻撃にマーダラーカウントの20倍のダメージが追加されます。",
        ],
        // TODO: implement custom option
        attributes: {}
    },
    {
        name: "snareAxe",
        displayName: "スネアーアクス",
        icon: berserker_snare_axe,
        category: "Debuff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "トマホークを投げ、10秒間、対象の移動速度を20％減少。",
            "トマホークを投げ、11秒間、対象の移動速度を30％減少。",
            "トマホークを投げ、12秒間、対象の移動速度を40％減少。",
            "トマホークを投げ、13秒間、対象の移動速度を50％減少。",
            "トマホークを投げ、14秒間、対象の移動速度を60％減少。",
            "トマホークを投げ、15秒間、対象の移動速度を70％減少。",
            "トマホークを投げ、18秒間、対象の移動速度を90％減少。",
        ],
        attributes: {}
    },

    {
        name: "berserk",
        displayName: "バーサーク",
        icon: berserker_berserk,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、攻撃速度50%、攻撃力10%、移動速度を5%増加。",
            "10分間、攻撃速度60%、攻撃力15%、移動速度を8%増加。",
            "15分間、攻撃速度70%、攻撃力20%、移動速度を11%増加。",
            "20分間、攻撃速度80%、攻撃力25%、移動速度を14%増加。",
            "25分間、攻撃速度90%、攻撃力30%、移動速度を17%増加。",
            "30分間、攻撃速度100%、攻撃力40%、移動速度を20%増加。",
            "60分間、攻撃速度150%、攻撃力50%、移動速度を30%増加。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 50,
                multiplyAttack: 10,
                multiplyMovementSpeed: 5,
            },
            1: {
                multiplyAttackSpeed: 60,
                multiplyAttack: 15,
                multiplyMovementSpeed: 8,
            },
            2: {
                multiplyAttackSpeed: 70,
                multiplyAttack: 20,
                multiplyMovementSpeed: 11,
            },
            3: {
                multiplyAttackSpeed: 80,
                multiplyAttack: 25,
                multiplyMovementSpeed: 14,
            },
            4: {
                multiplyAttackSpeed: 90,
                multiplyAttack: 30,
                multiplyMovementSpeed: 17,
            },
            5: {
                multiplyAttackSpeed: 100,
                multiplyAttack: 40,
                multiplyMovementSpeed: 20,
            },
            6: {
                multiplyAttackSpeed: 150,
                multiplyAttack: 50,
                multiplyMovementSpeed: 30,
            }
        }
    },
    {
        name: "fortunate",
        displayName: "フォーチュネイト",
        icon: berserker_fortunate,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間、使用者がスタン、ルート効果を受けません。",
        ],
        attributes: {}
    },
    {
        name: "routingAxe",
        displayName: "ルーティングアクス",
        icon: berserker_routing_axe,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象にトマホークを投げ、500のダメージを与えて2秒間移動できないようにします。",
            "対象にトマホークを投げ、1000のダメージを与えて2秒間移動できないようにします。",
            "対象にトマホークを投げ、1500のダメージを与えて2秒間移動できないようにします。",
            "対象にトマホークを投げ、2000のダメージを与えて2秒間移動できないようにします。",
            "対象にトマホークを投げ、2500のダメージを与えて2秒間移動できないようにします。",
            "対象にトマホークを投げ、3000のダメージを与えて2秒間移動できないようにします。",
            "対象にトマホークを投げ、5000のダメージを与えて4秒間移動できないようにします。",
        ],
        attributes: {}
    },
    {
        name: "sweep",
        displayName: "スウィプ",
        icon: berserker_sweep,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周りの敵3体に50%ほど増加した広域攻撃。",
            "対象と周りの敵4体に60%ほど増加した広域攻撃。",
            "対象と周りの敵5体に70%ほど増加した広域攻撃。",
            "対象と周りの敵6体に80%ほど増加した広域攻撃。",
            "対象と周りの敵7体に90%ほど増加した広域攻撃。",
            "対象と周りの敵8体に100%ほど増加した広域攻撃。",
            "対象と周りの敵8体に110%ほど増加した広域攻撃。",
        ],
        attributes: {}
    },

    {
        name: "vigilance",
        displayName: "ビジランス",
        icon: berserker_vigilance,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の力と敏捷性を10%ほど増加させます。",
            "21分間、使用者の力と敏捷性を15%ほど増加させます。",
            "24分間、使用者の力と敏捷性を20%ほど増加させます。",
            "27分間、使用者の力と敏捷性を25%ほど増加させます。",
            "30分間、使用者の力と敏捷性を30%ほど増加させます。",
            "30分間、使用者の力と敏捷性を45%ほど増加させます。",
            "120分間、使用者の力と敏捷性を60%ほど増加させます。",
        ],
        attributes: {
            0: {
                multiplyStrength: 10,
                multiplyAgility: 10
            },
            1: {
                multiplyStrength: 15,
                multiplyAgility: 15
            },
            2: {
                multiplyStrength: 20,
                multiplyAgility: 20
            },
            3: {
                multiplyStrength: 25,
                multiplyAgility: 25
            },
            4: {
                multiplyStrength: 30,
                multiplyAgility: 30
            },
            5: {
                multiplyStrength: 45,
                multiplyAgility: 45
            },
            6: {
                multiplyStrength: 60,
                multiplyAgility: 60
            }
        }
    },
    {
        name: "precision",
        displayName: "プレシジョン",
        icon: berserker_precision,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に力の550%ほど増加した攻撃。",
            "対象に力の600%ほど増加した攻撃。",
            "対象に力の650%ほど増加した攻撃。",
            "対象に力の700%ほど増加した攻撃。",
            "対象に力の750%ほど増加した攻撃。",
            "対象に力の900%ほど増加した攻撃。",
            "対象に力の1200%ほど増加した攻撃。",
        ],
        attributes: {}
    },
    {
        name: "zolt",
        displayName: "ゾルト",
        icon: berserker_zolt,
        category: "Debuff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を3%減少。",
            "15秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を6%減少。",
            "15秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を9%減少。",
            "20秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を12%減少。",
            "20秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を15%減少。",
            "20秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を20%減少。",
            "30秒間、対象の近距離攻撃力、遠距離攻撃力、魔法攻撃力を30%減少。",
        ],
        attributes: {}
    },
    {
        name: "wildBlood",
        displayName: "ワイルドブラッド",
        icon: berserker_wild_blood,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "自分に掛けられている有害スキルを1個削除。",
            "自分に掛けられている有害スキルを1個削除。",
            "自分に掛けられている有害スキルを2個削除。",
            "自分に掛けられている有害スキルを2個削除。",
            "自分に掛けられている有害スキルを2個削除。",
            "自分に掛けられている有害スキルを3個削除。",
            "自分に掛けられている有害スキルを4個削除。",
        ],
        attributes: {}
    },
    {
        name: "lowBlow",
        displayName: "ローブロー",
        icon: berserker_low_blow,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "5秒間、対象のスキルを封じます。モンスターには使用できません。",
            "10秒間、対象のスキルを封じます。モンスターには使用できません。",
            "15秒間、対象のスキルを封じます。モンスターには使用できません。",
            "20秒間、対象のスキルを封じます。モンスターには使用できません。",
            "25秒間、対象のスキルを封じます。モンスターには使用できません。",
            "30秒間、対象のスキルを封じます。モンスターには使用できません。",
            "40秒間、対象のスキルを封じます。モンスターには使用できません。",
        ],
        attributes: {}
    },
    {
        name: "cleave",
        displayName: "クリーブ",
        icon: berserker_cleave,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の50%ほど増加したダメージ。ゾルトかかっている相手には1000の追加ダメージ。",
            "対象に通常攻撃の60%ほど増加したダメージ。ゾルトかかっている相手には1500の追加ダメージ。",
            "対象に通常攻撃の70%ほど増加したダメージ。ゾルトかかっている相手には2000の追加ダメージ。",
            "対象に通常攻撃の80%ほど増加したダメージ。ゾルトかかっている相手には2500の追加ダメージ。",
            "対象に通常攻撃の90%ほど増加したダメージ。ゾルトかかっている相手には3000の追加ダメージ。",
            "対象に通常攻撃の100%ほど増加したダメージ。ゾルトかかっている相手には3500の追加ダメージ。",
            "対象に通常攻撃の110%ほど増加したダメージ。ゾルトかかっている相手には4000の追加ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "callBattle",
        displayName: "コールバトル",
        icon: berserker_call_battle,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、使用者の攻撃力を15%増加。",
            "30秒間、使用者の攻撃力を18%増加。",
            "30秒間、使用者の攻撃力を21%増加。",
            "30秒間、使用者の攻撃力を24%増加。",
            "30秒間、使用者の攻撃力を27%増加。",
            "30秒間、使用者の攻撃力を30%増加。",
            "60秒間、使用者の攻撃力を40%増加。"
        ],
        attributes: {
            0: {
                multiplyAttack: 15
            },
            1: {
                multiplyAttack: 18
            },
            2: {
                multiplyAttack: 21
            },
            3: {
                multiplyAttack: 24
            },
            4: {
                multiplyAttack: 27
            },
            5: {
                multiplyAttack: 30
            },
            6: {
                multiplyAttack: 40
            }
        }
    },
    {
        name: "premiumStrike",
        displayName: "プレミアムストライク",
        icon: berserker_premium_strike,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の100%ほど増加したダメージを与えます。",
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の110%ほど増加したダメージを与えます。",
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の120%ほど増加したダメージを与えます。",
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の130%ほど増加したダメージを与えます。",
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の140%ほど増加したダメージを与えます。",
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の150%ほど増加したダメージを与えます。",
            "レア、ユニーク、エンシェント、生産武器を装備している場合、通常攻撃の160%ほど増加したダメージを与えます。",
        ],
        attributes: {}
    },
    {
        name: "magnitudeSwing",
        displayName: "マグニチュードスウィング",
        icon: berserker_magnitude_swing,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に武器レベルの15倍ほど増加したダメージを与えます。",
            "対象に武器レベルの20倍ほど増加したダメージを与えます。",
            "対象に武器レベルの30倍ほど増加したダメージを与えます。",
            "対象に武器レベルの40倍ほど増加したダメージを与えます。",
            "対象に武器レベルの50倍ほど増加したダメージを与えます。",
            "対象に武器レベルの70倍ほど増加したダメージを与えます。",
            "対象に武器レベルの100倍ほど増加したダメージを与えます。",
        ],
        attributes: {}
    },
    {
        name: "retaliate",
        displayName: "リタリエイト",
        icon: berserker_retaliate,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10分間、遠距離攻撃を受けた時、30%の確率で相手を3秒間スタン。",
            "10分間、遠距離攻撃を受けた時、30%の確率で相手を4秒間スタン。",
            "10分間、遠距離攻撃を受けた時、30%の確率で相手を5秒間スタン。",
            "15分間、遠距離攻撃を受けた時、40%の確率で相手を5秒間スタン。",
            "15分間、遠距離攻撃を受けた時、40%の確率で相手を6秒間スタン。",
            "15分間、遠距離攻撃を受けた時、50%の確率で相手を6秒間スタン。",
            "20分間、遠距離攻撃を受けた時、70%の確率で相手を6秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "iceWillyWilly",
        displayName: "アイスウィリーウィリー",
        icon: berserker_ice_willy_willy,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "範囲攻撃で通常攻撃に10%ほど増加したダメージ、全体ダメージの5%をダメージを与えた回数分HPとして吸収。",
            "範囲攻撃で通常攻撃に20%ほど増加したダメージ、全体ダメージの10%をダメージを与えた回数分HPとして吸収。",
            "範囲攻撃で通常攻撃に40%ほど増加したダメージ、全体ダメージの15%をダメージを与えた回数分HPとして吸収。",
            "範囲攻撃で通常攻撃に60%ほど増加したダメージ、全体ダメージの20%をダメージを与えた回数分HPとして吸収。",
            "範囲攻撃で通常攻撃に80%ほど増加したダメージ、全体ダメージの25%をダメージを与えた回数分HPとして吸収。",
            "範囲攻撃で通常攻撃に100%ほど増加したダメージ、全体ダメージの30%をダメージを与えた回数分HPとして吸収。",
            "範囲攻撃で通常攻撃に150%ほど増加したダメージ、全体ダメージの35%をダメージを与えた回数分HPとして吸収。",
        ],
        attributes: {}
    },
    {
        name: "madness",
        displayName: "メッドネス",
        icon: berserker_madness,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時2秒間スタン。",
            "18秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時2秒間スタン。",
            "21秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時3秒間スタン。",
            "24秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時3秒間スタン。",
            "27秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時4秒間スタン。",
            "30秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時4秒間スタン。",
            "35秒間、スタン、ルート、睡眠を無効化、攻撃速度10%増加。クリティカル命中時5秒間スタン。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 10
            },
            1: {
                multiplyAttackSpeed: 10
            },
            2: {
                multiplyAttackSpeed: 10
            },
            3: {
                multiplyAttackSpeed: 10
            },
            4: {
                multiplyAttackSpeed: 10
            },
            5: {
                multiplyAttackSpeed: 10
            },
            6: {
                multiplyAttackSpeed: 10
            }
        }
    },
    {
        name: "brandishWeapon",
        displayName: "ブランディッシュウェポン",
        icon: berserker_brandish_weapon,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、20%の確率で通常攻撃を範囲化。15メートル内の対象に65%ほど減少したダメージを与えます。使用者のすべての防御力が6%増加します。",
            "21分間、30%の確率で通常攻撃を範囲化。15メートル内の対象に65%ほど減少したダメージを与えます。使用者のすべての防御力が9%増加します。",
            "24分間、40%の確率で通常攻撃を範囲化。15メートル内の対象に65%ほど減少したダメージを与えます。使用者のすべての防御力が12%増加します。",
            "27分間、50%の確率で通常攻撃を範囲化。15メートル内の対象に65%ほど減少したダメージを与えます。使用者のすべての防御力が15%増加します。",
            "30分間、60%の確率で通常攻撃を範囲化。15メートル内の対象に65%ほど減少したダメージを与えます。使用者のすべての防御力が20%増加します。",
            "30分間、80%の確率で通常攻撃を範囲化。15メートル内の対象に65%ほど減少したダメージを与えます。使用者のすべての防御力が30%増加します。",
            "120分間、100%の確率で通常攻撃を範囲化。15メートル内の対象に50%ほど減少したダメージを与えます。使用者のすべての防御力が50%増加します。",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: -65,
                multiplyDefense: 6
            },
            1: {
                multiplyIncreaseDamageDealt: -65,
                multiplyDefense: 9
            },
            2: {
                multiplyIncreaseDamageDealt: -65,
                multiplyDefense: 12
            },
            3: {
                multiplyIncreaseDamageDealt: -65,
                multiplyDefense: 15
            },
            4: {
                multiplyIncreaseDamageDealt: -65,
                multiplyDefense: 20
            },
            5: {
                multiplyIncreaseDamageDealt: -65,
                multiplyDefense: 30
            },
            6: {
                multiplyIncreaseDamageDealt: -50,
                multiplyDefense: 50
            }
        }
    },
    {
        name: "giganticStorm",
        displayName: "ギガンティックストーム",
        icon: berserker_gigantic_storm,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、攻撃速度10%、ポールアームの攻撃力250%、PVP攻撃力が1%上昇する。",
            "60秒間、攻撃速度20%、ポールアームの攻撃力300%、PVP攻撃力が2%上昇する。",
            "60秒間、攻撃速度30%、ポールアームの攻撃力350%、PVP攻撃力が3%上昇する。",
            "60秒間、攻撃速度40%、ポールアームの攻撃力400%、PVP攻撃力が4%上昇する。",
            "60秒間、攻撃速度50%、ポールアームの攻撃力450%、PVP攻撃力が5%上昇する。",
            "60秒間、攻撃速度70%、ポールアームの攻撃力500%、PVP攻撃力が6%上昇する。",
            "60秒間、攻撃速度100%、ポールアームの攻撃力900%、PVP攻撃力が10%上昇する。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 10,
                multiplyWeaponAttack: 250,
                multiplyPVPAttack: 1
            },
            1: {
                multiplyAttackSpeed: 20,
                multiplyWeaponAttack: 300,
                multiplyPVPAttack: 2
            },
            2: {
                multiplyAttackSpeed: 30,
                multiplyWeaponAttack: 350,
                multiplyPVPAttack: 3
            },
            3: {
                multiplyAttackSpeed: 40,
                multiplyWeaponAttack: 400,
                multiplyPVPAttack: 4
            },
            4: {
                multiplyAttackSpeed: 50,
                multiplyWeaponAttack: 450,
                multiplyPVPAttack: 5
            },
            5: {
                multiplyAttackSpeed: 70,
                multiplyWeaponAttack: 500,
                multiplyPVPAttack: 6
            },
            6: {
                multiplyAttackSpeed: 100,
                multiplyWeaponAttack: 900,
                multiplyPVPAttack: 10
            }
        }
    },
]