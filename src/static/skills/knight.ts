import { Skill } from "./skill";

import knight_blazing from "../../assets/skills/blazing.gif";
import knight_frozen from "../../assets/skills/frozen.gif";
import knight_darkness from "../../assets/skills/darkness.gif";
import knight_divine from "../../assets/skills/divine.gif";
import knight_taunt from "../../assets/skills/knight/H_taunt.gif";
import knight_rising_might from "../../assets/skills/knight/H_rising_might.gif";
import knight_protection from "../../assets/skills/knight/H_protection.gif";
import knight_sharpen_blade from "../../assets/skills/knight/H_sharpen_blade.gif";
import knight_blessed_shield from "../../assets/skills/knight/H_blessed_shield.gif";
import knight_psychic_crash from "../../assets/skills/knight/H_psychic_crash.gif";
import knight_crash_above from "../../assets/skills/knight/H_crash_above.gif";
import knight_invoke from "../../assets/skills/knight/H_invoke.gif";
import knight_charge from "../../assets/skills/knight/H_charge.gif";
import knight_shield_push from "../../assets/skills/knight/H_shield_push.gif";
import knight_bleeding from "../../assets/skills/knight/H_bleeding.gif";
import knight_assault_crash from "../../assets/skills/knight/H_assault_crash.gif";
import knight_change_mind from "../../assets/skills/knight/H_change_mind.gif";

export const knight_skills: Skill[] = [
    {
        name: "blazing",
        displayName: "ブレイジング",
        icon: knight_blazing,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "火属性の攻撃力を20%増加させ、属性防御力を10%増加させる。4%の確率でダメージの5%を自分のHPとして吸収する。",
            "火属性の攻撃力を40%増加させ、属性防御力を20%増加させる。5%の確率でダメージの6%を自分のHPとして吸収する。",
            "火属性の攻撃力を60%増加させ、属性防御力を30%増加させる。6%の確率でダメージの7%を自分のHPとして吸収する。",
            "火属性の攻撃力を80%増加させ、属性防御力を40%増加させる。7%の確率でダメージの8%を自分のHPとして吸収する。",
            "火属性の攻撃力を100%増加させ、属性防御力を50%増加させる。8%の確率でダメージの10%を自分のHPとして吸収する。"
        ],
        attributes: {}
    },
    {
        name: "frozen",
        displayName: "フローズン",
        icon: knight_frozen,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "水属性の攻撃力を20%増加させ、属性防御力を10%増加させる。4%の確率で7秒間対象の移動速度を10%減少させる。",
            "水属性の攻撃力を40%増加させ、属性防御力を20%増加させる。5%の確率で7秒間対象の移動速度を15%減少させる。",
            "水属性の攻撃力を60%増加させ、属性防御力を30%増加させる。6%の確率で7秒間対象の移動速度を20%減少させる。",
            "水属性の攻撃力を80%増加させ、属性防御力を40%増加させる。7%の確率で7秒間対象の移動速度を25%減少させる。",
            "水属性の攻撃力を100%増加させ、属性防御力を50%増加させる。8%の確率で7秒間対象の移動速度を30%減少させる。"
        ],
        attributes: {}
    },
    {
        name: "darkness",
        displayName: "ダークネス",
        icon: knight_darkness,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "暗黒属性の攻撃力を20%増加させ、属性防御力を10%増加させる。4%の確率で7秒間対象の攻撃速度を10%減少させる。",
            "暗黒属性の攻撃力を40%増加させ、属性防御力を20%増加させる。5%の確率で7秒間対象の攻撃速度を15%減少させる。",
            "暗黒属性の攻撃力を60%増加させ、属性防御力を30%増加させる。6%の確率で7秒間対象の攻撃速度を20%減少させる。",
            "暗黒属性の攻撃力を80%増加させ、属性防御力を40%増加させる。7%の確率で7秒間対象の攻撃速度を25%減少させる。",
            "暗黒属性の攻撃力を100%増加させ、属性防御力を50%増加させる。8%の確率で7秒間対象の攻撃速度を30%減少させる。"
        ],
        attributes: {}
    },
    {
        name: "divine",
        displayName: "ディバイン",
        icon: knight_divine,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "神聖属性の攻撃力を20%増加させ、属性防御力を10%増加させる。4%の確率でダメージの5%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を40%増加させ、属性防御力を20%増加させる。5%の確率でダメージの6%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を60%増加させ、属性防御力を30%増加させる。6%の確率でダメージの7%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を80%増加させ、属性防御力を40%増加させる。7%の確率でダメージの8%を自分のMPとして吸収する。",
            "神聖属性の攻撃力を100%増加させ、属性防御力を50%増加させる。8%の確率でダメージの10%を自分のMPとして吸収する。"
        ],
        attributes: {}
    },
    {
        name: "taunt",
        displayName: "タウント",
        icon: knight_taunt,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "対象のモンスターが使用者を攻撃するようにする。パーティー時のみ使用可能"
        ],
        attributes: {}
    },
    {
        name: "risingMight",
        displayName: "ライジングマイト",
        icon: knight_rising_might,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "使用者の力を18分間、10%増加させる。",
            "使用者の力を21分間、15%増加させる。",
            "使用者の力を24分間、20%増加させる。",
            "使用者の力を27分間、25%増加させる。",
            "使用者の力を30分間、30%増加させる。",
            "使用者の力を30分間、35%増加させる。",
            "使用者の力を90分間、50%増加させる。"
        ],
        attributes: {
            0: {
                multiplyStrength: 10,
            },
            1: {
                multiplyStrength: 15,
            },
            2: {
                multiplyStrength: 20,
            },
            3: {
                multiplyStrength: 25,
            },
            4: {
                multiplyStrength: 30,
            },
            5: {
                multiplyStrength: 35,
            },
            6: {
                multiplyStrength: 50,
            },
        }
    },
    {
        name: "protection",
        displayName: "プロテクション",
        icon: knight_protection,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "使用者の鎧の防御力を18分間10%増加させる。",
            "使用者の鎧の防御力を21分間15%増加させる。",
            "使用者の鎧の防御力を24分間20%増加させる。",
            "使用者の鎧の防御力を27分間25%増加させる。",
            "使用者の鎧の防御力を30分間30%増加させる。",
            "使用者の鎧の防御力を30分間35%増加させる。",
            "使用者の鎧の防御力を90分間50%増加させる。"
        ],
        attributes: {
            0: {
                multiplyArmorDefense: 10,
            },
            1: {
                multiplyArmorDefense: 15,
            },
            2: {
                multiplyArmorDefense: 20,
            },

            3: {
                multiplyArmorDefense: 25,
            },
            4: {
                multiplyArmorDefense: 30,
            },
            5: {
                multiplyArmorDefense: 35,
            },
            6: {
                multiplyArmorDefense: 50,
            },
        }
    },
    {
        name: "sharpenBlade",
        displayName: "シャープンブレイド",
        icon: knight_sharpen_blade,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "片手武器（短剣以外）の攻撃力を18分間、3%増加させる。",
            "片手武器（短剣以外）の攻撃力を21分間、6%増加させる。",
            "片手武器（短剣以外）の攻撃力を24分間、9%増加させる。",
            "片手武器（短剣以外）の攻撃力を27分間、12%増加させる。",
            "片手武器（短剣以外）の攻撃力を30分間、15%増加させる。",
            "片手武器（短剣以外）の攻撃力を30分間、18%増加させる。",
            "片手武器（短剣以外）の攻撃力を90分間、21%増加させる。"

        ],
        attributes: {
            0: {
                multiplyBaseMeleeWeaponAttack: 3,
            },
            1: {
                multiplyBaseMeleeWeaponAttack: 6,
            },
            2: {
                multiplyBaseMeleeWeaponAttack: 9,
            },
            3: {
                multiplyBaseMeleeWeaponAttack: 12,
            },
            4: {
                multiplyBaseMeleeWeaponAttack: 15,
            },
            5: {
                multiplyBaseMeleeWeaponAttack: 18,
            },
            6: {
                multiplyBaseMeleeWeaponAttack: 21,
            },
        },
    },
    {
        name: "blessedShield",
        displayName: "ブレスドシールド",
        icon: knight_blessed_shield,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、盾の防御力を50%増加させます。",
            "21分間、盾の防御力を100%増加させます。",
            "24分間、盾の防御力を150%増加させます。",
            "27分間、盾の防御力を200%増加させます。",
            "30分間、盾の防御力を250%増加させます。",
            "30分間、盾の防御力を350%増加させます。",
            "90分間、盾の防御力を500%増加させます。"
        ],
        attributes: {
            0: {
                multiplyShieldDefense: 50,
            },
            1: {
                multiplyShieldDefense: 100,
            },
            2: {
                multiplyShieldDefense: 150,
            },
            3: {
                multiplyShieldDefense: 200,
            },
            4: {
                multiplyShieldDefense: 250,
            },
            5: {
                multiplyShieldDefense: 350,
            },
            6: {
                multiplyShieldDefense: 500,
            },
        }
    },
    {
        name: "psychicCrush",
        displayName: "サイキッククラッシュ",
        icon: knight_psychic_crash,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "通常攻撃時に60%ほどの追加ダメージを与える。",
            "通常攻撃時に70%ほどの追加ダメージを与える。",
            "通常攻撃時に80%ほどの追加ダメージを与える。",
            "通常攻撃時に90%ほどの追加ダメージを与える。",
            "通常攻撃時に100%ほどの追加ダメージを与える。",
            "通常攻撃時に110%ほどの追加ダメージを与える。",
            "通常攻撃時に120%ほどの追加ダメージを与える。"
        ],
        attributes: {
        }
    },
    {
        name: "crashAbove",
        displayName: "クラッシュアバブ",
        icon: knight_crash_above,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "サイキッククラッシュヒット時5%の確率で対象を3秒気絶させる。効果は18分間持続。",
            "サイキッククラッシュヒット時10%の確率で対象を3秒気絶させる。効果は21分間持続。",
            "サイキッククラッシュヒット時15%の確率で対象を3秒気絶させる。効果は24分間持続。",
            "サイキッククラッシュヒット時20%の確率で対象を3秒気絶させる。効果は27分間持続。",
            "サイキッククラッシュヒット時25%の確率で対象を3秒気絶させる。効果は30分間持続。",
            "サイキッククラッシュヒット時30%の確率で対象を3秒気絶させる。効果は30分間持続。",
            "サイキッククラッシュヒット時50%の確率で対象を3秒気絶させる。効果は90分間持続。"
        ],
        attributes: {}
    },
    {
        name: "invoke",
        displayName: "インボーク",
        icon: knight_invoke,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、敏捷性が30%増加し、クリティカル攻撃成功の時敏捷値の150%ほどダメージを増加させます。",
            "21分間、敏捷性が30%増加し、クリティカル攻撃成功の時敏捷値の300%ほどダメージを増加させます。",
            "24分間、敏捷性が30%増加し、クリティカル攻撃成功の時敏捷値の500%ほどダメージを増加させます。",
            "27分間、敏捷性が30%増加し、クリティカル攻撃成功の時敏捷値の700%ほどダメージを増加させます。",
            "30分間、敏捷性が30%増加し、クリティカル攻撃成功の時敏捷値の900%ほどダメージを増加させます。",
            "30分間、敏捷性が30%増加し、クリティカル攻撃成功の時敏捷値の1100%ほどダメージを増加させます。",
            "90分間、敏捷性が60%増加し、クリティカル攻撃成功の時敏捷値の1500%ほどダメージを増加させます。"
        ],
        attributes: {
            0: {
                multiplyAgility: 30,
                plusCriticalDamageMultiplyAgility: 150,
            },
            1: {
                multiplyAgility: 30,
                plusCriticalDamageMultiplyAgility: 300,
            },
            2: {
                multiplyAgility: 30,
                plusCriticalDamageMultiplyAgility: 500,
            },
            3: {
                multiplyAgility: 30,
                plusCriticalDamageMultiplyAgility: 700,
            },
            4: {
                multiplyAgility: 30,
                plusCriticalDamageMultiplyAgility: 900,
            },
            5: {
                multiplyAgility: 30,
                plusCriticalDamageMultiplyAgility: 1100,
            },
            6: {
                multiplyAgility: 60,
                plusCriticalDamageMultiplyAgility: 1500,
            },
        }
    },


    {
        name: "charge",
        displayName: "チャージ",
        icon: knight_charge,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "盾を使って100%のダメージを与え、2秒間気絶させる。",
            "盾を使って130%のダメージを与え、3秒間気絶させる。",
            "盾を使って160%のダメージを与え、4秒間気絶させる。",
            "盾を使って180%のダメージを与え、5秒間気絶させる。",
            "盾を使って200%のダメージを与え、6秒間気絶させる。",
            "盾を使って220%のダメージを与え、7秒間気絶させる。",
            "盾を使って240%のダメージを与え、7秒間気絶させる。"
        ],
        attributes: {}
    },
    {
        name: "shieldPush",
        displayName: "シールドプッシュ",
        icon: knight_shield_push,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "盾を使って230%のダメージを与え、2メートル吹き飛ばす。",
            "盾を使って250%のダメージを与え、3メートル吹き飛ばす。",
            "盾を使って270%のダメージを与え、4メートル吹き飛ばす。",
            "盾を使って280%のダメージを与え、5メートル吹き飛ばす。",
            "盾を使って300%のダメージを与え、6メートル吹き飛ばす。",
            "盾を使って320%のダメージを与え、7メートル吹き飛ばす。",
            "盾を使って340%のダメージを与え、8メートル吹き飛ばす。"
        ],
        attributes: {}
    },
    {
        name: "breeding",
        displayName: "ブリーディング",
        icon: knight_bleeding,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "通常攻撃の80%のダメージを3秒ごとに5回与える。",
            "通常攻撃の80%のダメージを3秒ごとに6回与える。",
            "通常攻撃の80%のダメージを3秒ごとに7回与える。",
            "通常攻撃の80%のダメージを3秒ごとに8回与える。",
            "通常攻撃の80%のダメージを3秒ごとに9回与える。",
            "通常攻撃の80%のダメージを3秒ごとに10回与える。",
            "通常攻撃の90%のダメージを3秒ごとに15回与える。"
        ],
        attributes: {}
    },
    {
        name: "assaultCrash",
        displayName: "アサルトクラッシュ",
        icon: knight_assault_crash,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "攻撃力を100%増加させ、対象に最終ダメージの50%、周りの敵に40%のダメージを与える。スキルの有效範囲は7メートル",
            "攻撃力を100%増加させ、対象に最終ダメージの60%、周りの敵に50%のダメージを与える。スキルの有效範囲は7メートル",
            "攻撃力を100%増加させ、対象に最終ダメージの70%、周りの敵に60%のダメージを与える。スキルの有效範囲は7メートル",
            "攻撃力を100%増加させ、対象に最終ダメージの80%、周りの敵に70%のダメージを与える。スキルの有效範囲は7メートル",
            "攻撃力を100%増加させ、対象に最終ダメージの90%、周りの敵に80%のダメージを与える。スキルの有效範囲は7メートル",
            "攻撃力を120%増加させ、対象に最終ダメージの100%、周りの敵に90%のダメージを与える。スキルの有效範囲は7メートル",
            "攻撃力を150%増加させ、対象に最終ダメージの100%、周りの敵に100%のダメージを与える。スキルの有效範囲は7メートル"
        ],
        attributes: {}
    },
    {
        name: "changeMind",
        displayName: "チェンジマインド",
        icon: knight_change_mind,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "使用者の現在のMPを全て消費し、その300%をHPに変換する。",
            "使用者の現在のMPを全て消費し、その350%をHPに変換する。",
            "使用者の現在のMPを全て消費し、その400%をHPに変換する。",
            "使用者の現在のMPを全て消費し、その450%をHPに変換する。",
            "使用者の現在のMPを全て消費し、その500%をHPに変換する。",
            "使用者の現在のMPを全て消費し、その600%をHPに変換する。",
            "使用者の現在のMPを全て消費し、その800%をHPに変換する。"
        ],
        attributes: {}
    }
]