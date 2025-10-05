import { Skill } from "./skill";
import ranger_crossbow_mastery from "../../assets/skills/ranger/ra_crossbow_mastery.gif";
import ranger_open_eyes from "../../assets/skills/ranger/ra_open_eyes.gif";
import ranger_trick from "../../assets/skills/ranger/ra_trick.gif";
import ranger_detect from "../../assets/skills/ranger/ra_detect.gif";
import ranger_disappear from "../../assets/skills/ranger/ra_disappear.gif";
import ranger_siege_shot from "../../assets/skills/ranger/ra_siege_shot.gif";
import ranger_murder_shot from "../../assets/skills/ranger/ra_murder_shot.gif";
import ranger_speed_wind from "../../assets/skills/ranger/ra_speed_wind.gif";
import ranger_kaels_bolt from "../../assets/skills/ranger/ra_kaels_bolt.gif";
import ranger_alacrity_blow from "../../assets/skills/ranger/ra_alacrity_blow.gif";
import ranger_strip_shot from "../../assets/skills/ranger/ra_strip_shot.gif";
import ranger_rank_shot from "../../assets/skills/ranger/ra_rank_shot.gif";
import ranger_critical_shot from "../../assets/skills/ranger/ra_critical_shot.gif";
import ranger_premium_shot from "../../assets/skills/ranger/ra_premium_shot.gif";
import ranger_magic_guard from "../../assets/skills/ranger/ra_magic_guard.gif";
import ranger_luxury_shot from "../../assets/skills/ranger/ra_luxury_shot.gif";
import ranger_wing_foot from "../../assets/skills/ranger/ra_wings_foot.gif";
import ranger_anti_potion from "../../assets/skills/ranger/ra_anti_potion.gif";
import ranger_silence_shot from "../../assets/skills/ranger/ra_silence_shot.gif";
import ranger_death_chaser from "../../assets/skills/ranger/ra_death_chaser.gif";

export const ranger_skills: Skill[] = [
    {
        name: "crossbowMastery",
        displayName: "クロスボウマスタリー",
        icon: ranger_crossbow_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、石弓とボルト及びオプション攻撃力が54%増加。攻撃速度10%増加。敏捷性の31%ほど遠距離攻撃力増加。",
            "21分間、石弓とボルト及びオプション攻撃力が108%増加。攻撃速度10%増加。敏捷性の63%ほど遠距離攻撃力増加。",
            "24分間、石弓とボルト及びオプション攻撃力が161%増加。攻撃速度10%増加。敏捷性の94%ほど遠距離攻撃力増加。",
            "27分間、石弓とボルト及びオプション攻撃力が215%増加。攻撃速度10%増加。敏捷性の125%ほど遠距離攻撃力増加。",
            "30分間、石弓とボルト及びオプション攻撃力が269%増加。攻撃速度10%増加。敏捷性の157%ほど遠距離攻撃力増加。",
            "30分間、石弓とボルト及びオプション攻撃力が377%増加。攻撃速度30%増加。敏捷性の219%ほど遠距離攻撃力増加。",
            "120分間、石弓とボルト及びオプション攻撃力が538%増加。攻撃速度50%増加。敏捷性の313%ほど遠距離攻撃力増加。",
        ],
        attributes: {
            0: {
                multiplyRangeWeaponAttack: 54,
                multiplyAttackSpeed: 10,
                plusRangeAttackMultiplyAgility: 31,
                rangeMastery: 1,
            },
            1: {
                multiplyRangeWeaponAttack: 108,
                multiplyAttackSpeed: 10,
                plusRangeAttackMultiplyAgility: 63,
                rangeMastery: 1,
            },
            2: {
                multiplyRangeWeaponAttack: 161,
                multiplyAttackSpeed: 10,
                plusRangeAttackMultiplyAgility: 94,
                rangeMastery: 1,
            },
            3: {
                multiplyRangeWeaponAttack: 215,
                multiplyAttackSpeed: 10,
                plusRangeAttackMultiplyAgility: 125,
                rangeMastery: 1,
            },
            4: {
                multiplyRangeWeaponAttack: 269,
                multiplyAttackSpeed: 10,
                plusRangeAttackMultiplyAgility: 157,
                rangeMastery: 1,
            },
            5: {
                multiplyRangeWeaponAttack: 377,
                multiplyAttackSpeed: 30,
                plusRangeAttackMultiplyAgility: 219,
                rangeMastery: 1,
            },
            6: {
                multiplyRangeWeaponAttack: 538,
                multiplyAttackSpeed: 50,
                plusRangeAttackMultiplyAgility: 313,
                rangeMastery: 1,
            }
        },
    },
    {
        name: "openEyes",
        displayName: "オープンアイズ",
        icon: ranger_open_eyes,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "直ちにスタン・ルート・睡眠・麻痺状態を解除。",
        ],
        attributes: {}
    },
    {
        name: "trick",
        displayName: "トリック",
        icon: ranger_trick,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
            "10分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
            "15分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
            "20分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
            "25分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
            "30分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
            "120分間、敵対種族の警備兵やマーダラー時に同種族の警備兵から攻撃をされない",
        ],
        attributes: {}
    },
    {
        name: "detect",
        displayName: "ディテクト",
        icon: ranger_detect,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、使用者の10メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
            "40秒間、使用者の11メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
            "50秒間、使用者の12メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
            "60秒間、使用者の13メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
            "70秒間、使用者の14メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
            "80秒間、使用者の15メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
            "90秒間、使用者の16メートル範囲内の姿を隠したプレイヤーもしくはモンスターを感知。",
        ],
        attributes: {}
    },
    {
        name: "disappear",
        displayName: "ディスアピア",
        icon: ranger_disappear,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "70%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
            "75%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
            "80%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
            "85%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
            "90%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
            "100%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
            "100%の確率で30分間姿を消します。移動、攻撃、スキル、アイテム使用を行うと自動解除。",
        ],
        attributes: {}
    },
    {
        name: "siegeShot",
        displayName: "シージショット",
        icon: ranger_siege_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、移動できない代わりに遠距離攻撃のダメージを30%増加させます。",
            "10秒間、移動できない代わりに遠距離攻撃のダメージを30%増加させます。",
            "10秒間、移動できない代わりに遠距離攻撃のダメージを30%増加させます。",
            "10秒間、移動できない代わりに遠距離攻撃のダメージを30%増加させます。",
            "10秒間、移動できない代わりに遠距離攻撃のダメージを30%増加させます。",
            "10秒間、移動できない代わりに遠距離攻撃のダメージを50%増加させます。",
            "10秒間、移動できない代わりに遠距離攻撃のダメージを100%増加させます。",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: 30,
            },
            1: {
                multiplyIncreaseDamageDealt: 30,
            },
            2: {
                multiplyIncreaseDamageDealt: 30,
            },
            3: {
                multiplyIncreaseDamageDealt: 30,
            },
            4: {
                multiplyIncreaseDamageDealt: 30,
            },
            5: {
                multiplyIncreaseDamageDealt: 50,
            },
            6: {
                multiplyIncreaseDamageDealt: 100,
            }
        }
    },
    {
        name: "murderShot",
        displayName: "マーダーショット",
        icon: ranger_murder_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "マーダラーカウンターの10倍ほどダメージ。",
            "マーダラーカウンターの15倍ほどダメージ。",
            "マーダラーカウンターの20倍ほどダメージ。",
            "マーダラーカウンターの25倍ほどダメージ。",
            "マーダラーカウンターの30倍ほどダメージ。",
            "マーダラーカウンターの35倍ほどダメージ。",
            "マーダラーカウンターの40倍ほどダメージ。",
        ],
        attributes: {}
    },
    {
        name: "speedWind",
        displayName: "スピードウィンド",
        icon: ranger_speed_wind,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、使用者の攻撃速度を50%増加させます。",
            "30秒間、使用者の攻撃速度を70%増加させます。",
            "30秒間、使用者の攻撃速度を90%増加させます。",
            "30秒間、使用者の攻撃速度を110%増加させます。",
            "30秒間、使用者の攻撃速度を130%増加させます。",
            "30秒間、使用者の攻撃速度を150%増加させます。",
            "30秒間、使用者の攻撃速度を200%増加させます。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 50,
            },
            1: {
                multiplyAttackSpeed: 70,
            },
            2: {
                multiplyAttackSpeed: 90,
            },
            3: {
                multiplyAttackSpeed: 110,
            },
            4: {
                multiplyAttackSpeed: 130,
            },
            5: {
                multiplyAttackSpeed: 150,
            },
            6: {
                multiplyAttackSpeed: 200,
            }
        }
    },
    {
        name: "kaelsBolt",
        displayName: "カエールボルト",
        icon: ranger_kaels_bolt,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "50秒間、ボルトの攻撃力が10%増加します。対象のHPが20%未満の場合、10%増加したダメージを与えます。",
            "50秒間、ボルトの攻撃力が20%増加します。対象のHPが20%未満の場合、20%増加したダメージを与えます。",
            "50秒間、ボルトの攻撃力が30%増加します。対象のHPが20%未満の場合、30%増加したダメージを与えます。",
            "50秒間、ボルトの攻撃力が40%増加します。対象のHPが20%未満の場合、40%増加したダメージを与えます。",
            "50秒間、ボルトの攻撃力が50%増加します。対象のHPが20%未満の場合、50%増加したダメージを与えます。",
            "50秒間、ボルトの攻撃力が70%増加します。対象のHPが30%未満の場合、50%増加したダメージを与えます。",
            "50秒間、ボルトの攻撃力が100%増加します。対象のHPが50%未満の場合、50%増加したダメージを与えます。",
        ],
        attributes: {
            0: {
                multiplyShortTermArrowAttack: 10,
            },
            1: {
                multiplyShortTermArrowAttack: 20,
            },
            2: {
                multiplyShortTermArrowAttack: 30,
            },
            3: {
                multiplyShortTermArrowAttack: 40,
            },
            4: {
                multiplyShortTermArrowAttack: 50,
            },
            5: {
                multiplyShortTermArrowAttack: 70,
            },
            6: {
                multiplyShortTermArrowAttack: 100,
            }
        }
    },
    {
        name: "alacrityBlow",
        displayName: "アラクリティブロー",
        icon: ranger_alacrity_blow,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の敏捷性を10%増加させます。",
            "21分間、使用者の敏捷性を15%増加させます。",
            "24分間、使用者の敏捷性を20%増加させます。",
            "27分間、使用者の敏捷性を25%増加させます。",
            "30分間、使用者の敏捷性を30%増加させます。",
            "30分間、使用者の敏捷性を40%増加させます。",
            "120分間、使用者の敏捷性を60%増加させます。",
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
                multiplyAgility: 40,
            },
            6: {
                multiplyAgility: 60,
            }
        }
    },
    {
        name: "stripShot",
        displayName: "ストリップショット",
        icon: ranger_strip_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力とダメージ減少効果を無視し、30%増加したダメージ。",
            "対象の防御力とダメージ減少効果を無視し、40%増加したダメージ。",
            "対象の防御力とダメージ減少効果を無視し、50%増加したダメージ。",
            "対象の防御力とダメージ減少効果を無視し、60%増加したダメージ。",
            "対象の防御力とダメージ減少効果を無視し、70%増加したダメージ。",
            "対象の防御力とダメージ減少効果を無視し、80%増加したダメージ。",
            "対象の防御力とダメージ減少効果を無視し、90%増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "rankShot",
        displayName: "ランクショット",
        icon: ranger_rank_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間使用者のPVP攻撃力がを1%増加します。",
            "21分間使用者のPVP攻撃力がを2%増加します。",
            "24分間使用者のPVP攻撃力がを3%増加します。",
            "27分間使用者のPVP攻撃力がを4%増加します。",
            "30分間使用者のPVP攻撃力がを5%増加します。",
            "30分間使用者のPVP攻撃力がを7%増加します。",
            "120分間使用者のPVP攻撃力がを10%増加します。",
        ],
        attributes: {
            0: {
                multiplyPVPAttack: 1,
            },
            1: {
                multiplyPVPAttack: 2,
            },
            2: {
                multiplyPVPAttack: 3,
            },
            3: {
                multiplyPVPAttack: 4,
            },
            4: {
                multiplyPVPAttack: 5,
            },
            5: {
                multiplyPVPAttack: 7,
            },
            6: {
                multiplyPVPAttack: 10,
            }
        }
    },
    {
        name: "criticalShot",
        displayName: "クリティカルショット",
        icon: ranger_critical_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象とその周囲の敵(計9体)に、30%の確率でクリティカルダメージ。",
            "対象とその周囲の敵(計9体)に、40%の確率でクリティカルダメージ。",
            "対象とその周囲の敵(計9体)に、50%の確率でクリティカルダメージ。",
            "対象とその周囲の敵(計9体)に、60%の確率でクリティカルダメージ。",
            "対象とその周囲の敵(計9体)に、70%の確率でクリティカルダメージ。",
            "対象とその周囲の敵(計9体)に、80%の確率でクリティカルダメージ。",
            "対象とその周囲の敵(計9体)に、100%の確率でクリティカルダメージ。",
        ],
        attributes: {}

    },
    {
        name: "premiumShot",
        displayName: "プレミアムショット",
        icon: ranger_premium_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間使用者の基本的な攻撃クリティカル確率が10%増加します。",
            "60秒間使用者の基本的な攻撃クリティカル確率が20%増加します。",
            "60秒間使用者の基本的な攻撃クリティカル確率が30%増加します。",
            "60秒間使用者の基本的な攻撃クリティカル確率が40%増加します。",
            "60秒間使用者の基本的な攻撃クリティカル確率が50%増加します。",
            "60秒間使用者の基本的な攻撃クリティカル確率が70%増加します。",
            "60秒間使用者の基本的な攻撃クリティカル確率が100%増加します。",
        ],
        attributes: {
            0: {
                multiplyCriticalRate: 10,
            },
            1: {
                multiplyCriticalRate: 20,
            },
            2: {
                multiplyCriticalRate: 30,
            },
            3: {
                multiplyCriticalRate: 40,
            },
            4: {
                multiplyCriticalRate: 50,
            },
            5: {
                multiplyCriticalRate: 70,
            },
            6: {
                multiplyCriticalRate: 100,
            }
        }
    },
    {
        name: "magicGuard",
        displayName: "マジックガード",
        icon: ranger_magic_guard,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、魔法によるダメージを無効化。",
            "15秒間、魔法によるダメージを無効化。",
            "20秒間、魔法によるダメージを無効化。",
            "25秒間、魔法によるダメージを無効化。",
            "30秒間、魔法によるダメージを無効化。",
            "35秒間、魔法によるダメージを無効化。",
            "40秒間、魔法によるダメージを無効化。",
        ],
        attributes: {}
    },
    {
        name: "luxuryShot",
        displayName: "ラグジュアリショット",
        icon: ranger_luxury_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを300％増加したダメージ。",
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを360％増加したダメージ。",
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを440％増加したダメージ。",
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを540％増加したダメージ。",
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを660％増加したダメージ。",
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを800％増加したダメージ。",
            "対象にユニーク、エンシェント武器で攻撃する時、武器ダメージを960％増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "wingFoot",
        displayName: "ウイングフット",
        icon: ranger_wing_foot,
        category: "Buff",
        origin: "Group",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバー及び使用者の移動速度を20%増加させます。",
            "パーティーメンバー及び使用者の移動速度を30%増加させます。",
            "パーティーメンバー及び使用者の移動速度を40%増加させます。",
            "パーティーメンバー及び使用者の移動速度を50%増加させます。",
            "パーティーメンバー及び使用者の移動速度を60%増加させます。",
            "パーティーメンバー及び使用者の移動速度を70%増加させます。",
            "パーティーメンバー及び使用者の移動速度を80%増加させます。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 20,
            },
            1: {
                multiplyMovementSpeed: 30,
            },
            2: {
                multiplyMovementSpeed: 40,
            },
            3: {
                multiplyMovementSpeed: 50,
            },
            4: {
                multiplyMovementSpeed: 60,
            },
            5: {
                multiplyMovementSpeed: 70,
            },
            6: {
                multiplyMovementSpeed: 80,
            }
        }
    },
    {
        name: "antiPotion",
        displayName: "アンチポーション",
        icon: ranger_anti_potion,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを5%増加。",
            "12秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを10%増加。",
            "14秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを15%増加。",
            "16秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを20%増加。",
            "18秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを25%増加。",
            "20秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを30%増加。",
            "25秒間、対象をポーション使用不可、回復不可状態にし、被ダメージを50%増加。",
        ],
        attributes: {}
    },
    {
        name: "silenceShot",
        displayName: "サイレンスショット",
        icon: ranger_silence_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に20%ほど増加したダメージを与え、更に10秒間スキルを封印。",
            "対象に40%ほど増加したダメージを与え、更に15秒間スキルを封印。",
            "対象に60%ほど増加したダメージを与え、更に20秒間スキルを封印。",
            "対象に80%ほど増加したダメージを与え、更に25秒間スキルを封印。",
            "対象に100%ほど増加したダメージを与え、更に30秒間スキルを封印。",
            "対象に140%ほど増加したダメージを与え、更に35秒間スキルを封印。",
            "対象に200%ほど増加したダメージを与え、更に40秒間スキルを封印。",
        ],
        attributes: {}
    },
    {
        name: "deathChaser",
        displayName: "デスチェイサー",
        icon: ranger_death_chaser,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、対象に10秒の間死の標識を表示し、受けるダメージを100%増加させる。",
            "60秒間、対象に15秒の間死の標識を表示し、受けるダメージを110%増加させる。",
            "60秒間、対象に20秒の間死の標識を表示し、受けるダメージを120%増加させる。",
            "60秒間、対象に25秒の間死の標識を表示し、受けるダメージを130%増加させる。",
            "60秒間、対象に30秒の間死の標識を表示し、受けるダメージを140%増加させる。",
            "60秒間、対象に35秒の間死の標識を表示し、受けるダメージを160%増加させる。",
            "60秒間、対象に40秒の間死の標識を表示し、受けるダメージを200%増加させる。",
        ],
        // TODO: implement custom option for attack target debuff
        attributes: {
        }
    },
]