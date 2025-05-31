import { Skill } from "./skill";

import templar_blue_fountain from "../../assets/skills/templar/te_Blue_Fountain.gif";
import templar_incarnation from "../../assets/skills/templar/te_Incarnation.gif";
import templar_brain_blow from "../../assets/skills/templar/te_Brain_Blow.gif";
import templar_gray_mask from "../../assets/skills/templar/te_Gray_Mask.gif";
import templar_euphoria from "../../assets/skills/templar/te_Euphoria.gif";
import templar_erase from "../../assets/skills/templar/te_Erase.gif";
import templar_blunt_mastery from "../../assets/skills/templar/te_Blunt_Mastery.gif";
import templar_group_euphoria from "../../assets/skills/templar/te_Group_Euphoria.gif";
import templar_reflection from "../../assets/skills/templar/te_Reflection.gif";
import templar_mareas_hammer from "../../assets/skills/templar/te_Mareas_Hammer.gif";
import templar_mana_shield from "../../assets/skills/templar/te_Mana_Shield.gif";
import templar_vanishment from "../../assets/skills/templar/te_Vanishment.gif";
import templar_white_curse from "../../assets/skills/templar/te_White_Curse.gif";
import templar_final_attempt from "../../assets/skills/templar/te_Final_Attempt.gif";
import templar_mareas_anger from "../../assets/skills/templar/te_Mareas_Anger.gif";
import templar_destruction from "../../assets/skills/templar/te_Destruction.gif";
import templar_cast_over from "../../assets/skills/templar/te_Cast_Over.gif";
import templar_equality from "../../assets/skills/templar/te_Equality.gif";
import templar_shield_strike from "../../assets/skills/templar/te_Shield_Strike.gif";
import templar_last_divine from "../../assets/skills/templar/te_Last_Divine.gif";

export const templar_skills: Skill[] = [
    {
        name: "blueFountain",
        displayName: "ブルーファウンテン",
        icon: templar_blue_fountain,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者のMPを100%ほど増加させます。",
            "21分間、使用者のMPを150%ほど増加させます。",
            "24分間、使用者のMPを200%ほど増加させます。",
            "27分間、使用者のMPを250%ほど増加させます。",
            "30分間、使用者のMPを300%ほど増加させます。",
            "30分間、使用者のMPを400%ほど増加させます。",
            "120分間、使用者のMPを600%ほど増加させます。",
        ],
        attributes: {
            0: {
                multiplyMagicPoint: 100,
            },
            1: {
                multiplyMagicPoint: 150,
            },
            2: {
                multiplyMagicPoint: 200,
            },
            3: {
                multiplyMagicPoint: 250,
            },
            4: {
                multiplyMagicPoint: 300,
            },
            5: {
                multiplyMagicPoint: 400,
            },
            6: {
                multiplyMagicPoint: 600,
            }
        }
    },
    {
        name: "incarnation",
        displayName: "インカーネイション",
        icon: templar_incarnation,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "レベル70までの死んだ対象を 15%のHPとMP、減少した経験値の30%を復旧して復活させます.",
            "レベル80までの死んだ対象を 30%のHPとMP、減少した経験値の40%を復旧して復活させます.",
            "レベル90までの死んだ対象を 45%のHPとMP、減少した経験値の50%を復旧して復活させます",
            "レベル100までの死んだ対象を 60%のHPとMP、減少した経験値の60%を復旧して復活させます.",
            "レベル115までの死んだ対象を 75%のHPとMP、減少した経験値の70%を復旧して復活させます.",
            "レベル115までの死んだ対象を 90%のHPとMP、減少した経験値の90%を復旧して復活させます.",
            "レベル115までの死んだ対象を 100%のHPとMP、減少した経験値の99%を復旧して復活させます."
        ],
        attributes: {}
    },
    {
        name: "brainBlow",
        displayName: "ブレインブロー",
        icon: templar_brain_blow,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の知能を10%増加させます。",
            "21分間、使用者の知能を15%増加させます。",
            "24分間、使用者の知能を20%増加させます。",
            "27分間、使用者の知能を25%増加させます。",
            "30分間、使用者の知能を30%増加させます。",
            "30分間、使用者の知能を40%増加させます。",
            "120分間、使用者の知能を60%増加させます。",
        ],
        attributes: {
            0: {
                multiplyIntelligence: 10,
            },
            1: {
                multiplyIntelligence: 15,
            },
            2: {
                multiplyIntelligence: 20,
            },
            3: {
                multiplyIntelligence: 25,
            },
            4: {
                multiplyIntelligence: 30,
            },
            5: {
                multiplyIntelligence: 40,
            },
            6: {
                multiplyIntelligence: 60,
            }
        }
    },
    {
        name: "grayMask",
        displayName: "グレイマスク",
        icon: templar_gray_mask,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "7秒間、10メートル範囲中の対象を結界に閉じこめる。"
        ],
        attributes: {}
    },
    {
        name: "euphoria",
        displayName: "ユーフォリア",
        icon: templar_euphoria,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者が与えるダメージの 3% ほど使用者の HPを回復させる。",
            "使用者が与えるダメージの 6% ほど使用者の HPを回復させる。",
            "使用者が与えるダメージの 9% ほど使用者の HPを回復させる。",
            "使用者が与えるダメージの 12% ほど使用者の HPを回復させる。",
            "使用者が与えるダメージの 15% ほど使用者の HPを回復させる。",
            "使用者が加えるダメージの 20% ほど使用者の HPを回復させる。",
            "使用者が加えるダメージの 30% ほど使用者の HPを回復させる。"
        ],
        attributes: {}
    },
    {
        name: "erase",
        displayName: "イレイス",
        icon: templar_erase,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象の特殊バフ効果をランダムに1個解除します。",
            "対象の特殊バフ効果をランダムに1個解除します。",
            "対象の特殊バフ効果をランダムに1個解除します。",
            "対象の特殊バフ効果をランダムに1個解除します。",
            "対象の特殊バフ効果をランダムに1個解除します。",
            "対象の特殊バフ効果をランダムに1個解除します。",
            "対象の特殊バフ効果をランダムに1個解除します。"
        ],
        attributes: {}
    },
    {
        name: "TemplerBluntMastery",
        displayName: "ブラントマスタリー",
        icon: templar_blunt_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、片手鈍器及びオプション攻撃力が87%増加。攻撃速度10%増加。知能の58%と魔法攻撃力ほど近距離攻撃力が増加。",
            "21分間、片手鈍器及びオプション攻撃力が164%増加。攻撃速度15%増加。知能の118%と魔法攻撃力ほど近距離攻撃力が増加。",
            "24分間、片手鈍器及びオプション攻撃力が242%増加。攻撃速度20%増加。知能の176%と魔法攻撃力ほど近距離攻撃力が増加。",
            "27分間、片手鈍器及びオプション攻撃力が319%増加。攻撃速度25%増加。知能の235%と魔法攻撃力ほど近距離攻撃力が増加。",
            "30分間、片手鈍器及びオプション攻撃力が396%増加。攻撃速度30%増加。知能の294%と魔法攻撃力ほど近距離攻撃力が増加。",
            "30分間、片手鈍器及びオプション攻撃力が550%増加。攻撃速度40%増加。知能の411%と魔法攻撃力ほど近距離攻撃力が増加。",
            "120分間、片手鈍器及びオプション攻撃力が782%増加。攻撃速度60%増加。知能の587%と魔法攻撃力ほど近距離攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 87,
                multiplyAttackSpeed: 10,
                plusMeleeAttackMultiplyIntelligence: 58,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 164,
                multiplyAttackSpeed: 15,
                plusMeleeAttackMultiplyIntelligence: 118,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 242,
                multiplyAttackSpeed: 20,
                plusMeleeAttackMultiplyIntelligence: 176,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 319,
                multiplyAttackSpeed: 25,
                plusMeleeAttackMultiplyIntelligence: 235,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 396,
                multiplyAttackSpeed: 30,
                plusMeleeAttackMultiplyIntelligence: 294,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 550,
                multiplyAttackSpeed: 40,
                plusMeleeAttackMultiplyIntelligence: 411,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 782,
                multiplyAttackSpeed: 60,
                plusMeleeAttackMultiplyIntelligence: 587,
                plusMeleeAttackMultiplyMagicAttack: 100,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "groupEuphoria",
        displayName: "グループユーフォリア",
        icon: templar_group_euphoria,
        category: "Other",
        origin: "Group",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者が加えるダメージの 2% パーティー員の HPを回復します.",
            "使用者が加えるダメージの 4% パーティー員の HPを回復します.",
            "使用者が加えるダメージの 6% パーティー員の HPを回復します.",
            "使用者が加えるダメージの 8% パーティー員の HPを回復します.",
            "使用者が加えるダメージの 10% パーティー員の HPを回復します.",
            "使用者が加えるダメージの 15% パーティー員の HPを回復します.",
            "使用者が加えるダメージの 20% パーティー員の HPを回復します."
        ],
        attributes: {}
    },
    {
        name: "reflection",
        displayName: "リフレクション",
        icon: templar_reflection,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。",
            "15秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。",
            "20秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。",
            "25秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。",
            "30秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。",
            "50秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。",
            "90秒間、与えるダメージが20％減少する代わりに自分を襲ってくる状態異常スキル効果を使用者に反射します。"
        ],
        attributes: {}
    },
    {
        name: "mareasHammer",
        displayName: "マレアハンマー",
        icon: templar_mareas_hammer,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "魔法攻撃力の10倍のダメージを与える、鈍器着用時、4秒間スタン状態にさせる。",
            "魔法攻撃力の12倍のダメージを与える、鈍器着用時、4秒間スタン状態にさせる。",
            "魔法攻撃力の14倍のダメージを与える、鈍器着用時、5秒間スタン状態にさせる。",
            "魔法攻撃力の17倍のダメージを与える、鈍器着用時、5秒間スタン状態にさせる。",
            "魔法攻撃力の20倍のダメージを与える、鈍器着用時、6秒間スタン状態にさせる。",
            "魔法攻撃力の24倍のダメージを与える、鈍器着用時、7秒間スタン状態にさせる。",
            "魔法攻撃力の30倍のダメージを与える、鈍器着用時、7秒間スタン状態にさせる。",
        ],
        attributes: {}
    },
    {
        name: "manaShield",
        displayName: "マナシールド",
        icon: templar_mana_shield,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "受けるダメージ 10当たり HP 代わりにMP70を消耗します.",
            "受けるダメージ 10当たり HP 代わりにMP60を消耗します.",
            "受けるダメージ 10当たり HP 代わりにMP50を消耗します.",
            "受けるダメージ 10当たり HP 代わりにMP40を消耗します.",
            "受けるダメージ 10当たり HP 代わりにMP30を消耗します.",
            "受けるダメージ 10当たり HP 代わりにMP20を消耗します.",
            "受けるダメージ 10当たり HP 代わりにMP10を消耗します."
        ],
        attributes: {}
    },
    {
        name: "vanishment",
        displayName: "バニッシュメント",
        icon: templar_vanishment,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 2,
        descriptions: [
            "ルート状態がすぐに解けます.",
            "スタン、ルート、催眠、麻痺状態がすぐに解けます."
        ],
        attributes: {}
    },
    {
        name: "whiteCurse",
        displayName: "ホワイトカース",
        icon: templar_white_curse,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "鈍器着用の時対象と周辺 10メートル距離中の敵 4人を 4秒間スタン効果にかかるようにします.",
            "鈍器着用の時対象と周辺 11メートル距離中の敵 5人を 4秒間スタン効果にかかるようにします.",
            "鈍器着用の時対象と周辺 12メートル距離中の敵 6人を 5秒間スタン効果にかかるようにします.",
            "鈍器着用の時対象と周辺 13メートル距離中の敵 7人を 5秒間スタン効果にかかるようにします.",
            "鈍器着用の時対象と周辺 14メートル距離中の敵 8人を 6秒間スタン効果にかかるようにします.",
            "鈍器着用の時対象と周辺 15メートル距離中の敵 9人を 7秒間スタン効果にかかるようにします.",
            "鈍器着用の時対象と周辺 20メートル距離中の敵 9人を 7秒間スタン効果にかかるようにします."
        ],
        attributes: {}
    },
    {
        name: "finalAttempt",
        displayName: "ファイナルアテンプト",
        icon: templar_final_attempt,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視し、魔法攻撃力の10倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の15倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の20倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の25倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の30倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の40倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の50倍のダメージを与える。"
        ],
        attributes: {}
    },
    {
        name: "mareasAnger",
        displayName: "マレアアンガー",
        icon: templar_mareas_anger,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周辺4体の敵に魔法攻撃力の10倍のダメージを与え、ダメージの2%のMPを消耗。",
            "対象と周辺5体の敵に魔法攻撃力の12倍のダメージを与え、ダメージの3%のMPを消耗。",
            "対象と周辺6体の敵に魔法攻撃力の14倍のダメージを与え、ダメージの4%のMPを消耗。",
            "対象と周辺7体の敵に魔法攻撃力の17倍のダメージを与え、ダメージの5%のMPを消耗。",
            "対象と周辺8体の敵に魔法攻撃力の20倍のダメージを与え、ダメージの6%のMPを消耗。",
            "対象と周辺9体の敵に魔法攻撃力の24倍のダメージを与え、ダメージの8%のMPを消耗。",
            "対象と周辺9体の敵に魔法攻撃力の30倍のダメージを与え、ダメージの10%のMPを消耗。"
        ],
        attributes: {}
    },
    {
        name: "destruction",
        displayName: "デストラクション",
        icon: templar_destruction,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象のダメージ減少効果を無視し、魔法攻撃力の10倍のダメージを与える。",
            "対象のダメージ減少効果を無視し、魔法攻撃力の12倍のダメージを与える。",
            "対象のダメージ減少効果を無視し、魔法攻撃力の14倍のダメージを与える。",
            "対象のダメージ減少効果を無視し、魔法攻撃力の17倍のダメージを与える。",
            "対象のダメージ減少効果を無視し、魔法攻撃力の20倍のダメージを与える。",
            "対象のダメージ減少効果を無視し、魔法攻撃力の24倍のダメージを与える。",
            "対象のダメージ減少効果を無視し、魔法攻撃力の30倍のダメージを与える。",
        ],
        attributes: {}
    },
    {
        name: "castOver",
        displayName: "キャストオーバー",
        icon: templar_cast_over,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "30秒以内に詠唱時間があるスキルを使用の時、詠唱無しで使用できます．1回のみです."
        ],
        attributes: {}
    },
    {
        name: "equality",
        displayName: "イクォリティ",
        icon: templar_equality,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、20%の確率で通常攻撃を範囲化し、10メートル中の対象に60%減少したダメージを与えます。",
            "21分間、30%の確率で通常攻撃を範囲化し、10メートル中の対象に60%減少したダメージを与えます。",
            "24分間、40%の確率で通常攻撃を範囲化し、10メートル中の対象に60%減少したダメージを与えます。",
            "27分間、50%の確率で通常攻撃を範囲化し、10メートル中の対象に60%減少したダメージを与えます。",
            "30分間、60%の確率で通常攻撃を範囲化し、10メートル中の対象に60%減少したダメージを与えます。",
            "30分間、80%の確率で通常攻撃を範囲化し、10メートル中の対象に60%減少したダメージを与えます。",
            "60分間、100%の確率で通常攻撃を範囲化し、10メートル中の対象に50%減少したダメージを与えます。",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: -40,
            },
            1: {
                multiplyIncreaseDamageDealt: -40,
            },
            2: {
                multiplyIncreaseDamageDealt: -40,
            },
            3: {
                multiplyIncreaseDamageDealt: -40,
            },
            4: {
                multiplyIncreaseDamageDealt: -40,
            },
            5: {
                multiplyIncreaseDamageDealt: -40,
            },
            6: {
                multiplyIncreaseDamageDealt: -50,
            }
        }
    },
    {
        name: "shieldStrike",
        displayName: "シールドストライク",
        icon: templar_shield_strike,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に20%ほど増加したダメージを与え、2秒間攻撃速度を20%、移動速度を20%減少させます。",
            "対象に40%ほど増加したダメージを与え、2秒間攻撃速度を25%、移動速度を25%減少させます。",
            "対象に60%ほど増加したダメージを与え、3秒間攻撃速度を30%、移動速度を30%減少させます。",
            "対象に80%ほど増加したダメージを与え、3秒間攻撃速度を35%、移動速度を35%減少させます。",
            "対象に100%ほど増加したダメージを与え、4秒間攻撃速度を40%、移動速度を40%減少させます。",
            "対象に140%ほど増加したダメージを与え、5秒間攻撃速度を50%、移動速度を50%減少させます。",
            "対象に200%ほど増加したダメージを与え、7秒間攻撃速度を60%、移動速度を60%減少させます。"
        ],
        attributes: {}
    },

    {
        name: "lastDivine",
        displayName: "ラストディバイン",
        icon: templar_last_divine,
        category: "Buff",
        origin: "Group",
        raceid: 1,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、パーティーメンバーのクリティカル率を5%増加し、受けるクリティカルダメージを10%減少させる",
            "60秒間、パーティーメンバーのクリティカル率を6%増加し、受けるクリティカルダメージを15%減少させる",
            "60秒間、パーティーメンバーのクリティカル率を7%増加し、受けるクリティカルダメージを20%減少させる",
            "60秒間、パーティーメンバーのクリティカル率を8%増加し、受けるクリティカルダメージを25%減少させる",
            "60秒間、パーティーメンバーのクリティカル率を9%増加し、受けるクリティカルダメージを30%減少させる",
            "60秒間、パーティーメンバーのクリティカル率を10%増加し、受けるクリティカルダメージを40%減少させる",
            "60秒間、パーティーメンバーのクリティカル率を12%増加し、受けるクリティカルダメージを50%減少させる"
        ],
        attributes: {
            0: {
                multiplyCriticalRate: 5,
                multiplyDecreaseCriticalDamageTaken: 10,
            },
            1: {
                multiplyCriticalRate: 6,
                multiplyDecreaseCriticalDamageTaken: 15,
            },
            2: {
                multiplyCriticalRate: 7,
                multiplyDecreaseCriticalDamageTaken: 20,
            },
            3: {
                multiplyCriticalRate: 8,
                multiplyDecreaseCriticalDamageTaken: 25,
            },
            4: {
                multiplyCriticalRate: 9,
                multiplyDecreaseCriticalDamageTaken: 30,
            },
            5: {
                multiplyCriticalRate: 10,
                multiplyDecreaseCriticalDamageTaken: 40,
            },
            6: {
                multiplyCriticalRate: 12,
                multiplyDecreaseCriticalDamageTaken: 50,
            }
        }
    }
]