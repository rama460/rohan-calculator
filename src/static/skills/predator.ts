import { Skill } from "./skill";

import predator_awareness from "../../assets/skills/predator/D_PR_awareness.gif";
import predator_sluggish_attack from "../../assets/skills/predator/D_PR_sluggish_attack.gif";
import predator_katar_mastery from "../../assets/skills/predator/D_PR_katar_mastery.gif";
import predator_hide_split from "../../assets/skills/predator/D_PR_hide_split.gif";
import predator_detect from "../../assets/skills/predator/D_PR_detect.gif";
import predator_tracking_treasure from "../../assets/skills/predator/D_PR_tracking_treasure.gif";
import predator_ruin_trap from "../../assets/skills/predator/D_PR_ruin_trap.gif";
import predator_sealing_square from "../../assets/skills/predator/D_PR_sealing_square.gif";
import predator_healing_trap from "../../assets/skills/predator/D_PR_healing_trap.gif";
import predator_heart_trap from "../../assets/skills/predator/D_PR_heart_trap.gif";
import predator_scare_crow from "../../assets/skills/predator/D_PR_scare_crow.gif";
import predator_timer_trap from "../../assets/skills/predator/D_PR_timer_trap.gif";
import predator_secret_hide from "../../assets/skills/predator/D_PR_secret_hide.gif";
import predator_transformation from "../../assets/skills/predator/D_PR_transformation.gif";
import predator_premium_slash from "../../assets/skills/predator/D_PR_premium_slash.gif";
import predator_royal_mask from "../../assets/skills/predator/D_PR_royal_mask.gif";
import predator_experience_mambo from "../../assets/skills/predator/D_PR_experience_mambo.gif";
import predator_demolition from "../../assets/skills/predator/D_PR_demolition.gif";
import predator_black_mantle from "../../assets/skills/predator/D_PR_black_mantle.gif";
import predator_dancing_blade from "../../assets/skills/predator/D_PR_dancing_blade.gif";
import predator_octopus from "../../assets/skills/predator/D_PR_octopus.gif";
import predator_isolation_stealth from "../../assets/unknown.png";


export const predator_skills: Skill[] = [
    {
        name: "awareness",
        displayName: "アウェアネス",
        icon: predator_awareness,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "ルート状態を解除。"
        ],
        attributes: {}
    },
    {
        name: "sluggishAttack",
        displayName: "スラギッシュアタック",
        icon: predator_sluggish_attack,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "レベルの100%に値するダメージを与え、対象の回避率を30秒間3%減少させます。",
            "レベルの200%に値するダメージを与え、対象の回避率を30秒間6%減少させます。",
            "レベルの300%に値するダメージを与え、対象の回避率を30秒間9%減少させます。",
            "レベルの400%に値するダメージを与え、対象の回避率を30秒間12%減少させます。",
            "レベルの500%に値するダメージを与え、対象の回避率を30秒間15%減少させます。",
            "レベルの600%に値するダメージを与え、対象の回避率を30秒間18%減少させます。",
            "レベルの700%に値するダメージを与え、対象の回避率を30秒間21%減少させます。",
        ],
        attributes: {}
    },
    {
        name: "katarMastery",
        displayName: "カタールマスタリー",
        icon: predator_katar_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、カタール及びオプション攻撃力が39%増加。瞬発力の10%ほど近距離攻撃力が増加。クリティカル確率2%増加。",
            "21分間、カタール及びオプション攻撃力が79%増加。瞬発力の20%ほど近距離攻撃力が増加。クリティカル確率3%増加。",
            "24分間、カタール及びオプション攻撃力が118%増加。瞬発力の30%ほど近距離攻撃力が増加。クリティカル確率4%増加。",
            "27分間、カタール及びオプション攻撃力が157%増加。瞬発力の40%ほど近距離攻撃力が増加。クリティカル確率5%増加。",
            "30分間、カタール及びオプション攻撃力が197%増加。瞬発力の50%ほど近距離攻撃力が増加。クリティカル確率6%増加。",
            "30分間、カタール及びオプション攻撃力が275%増加。瞬発力の70%ほど近距離攻撃力が増加。クリティカル確率10%増加。",
            "120分間、カタール及びオプション攻撃力が393%増加。瞬発力の100%ほど近距離攻撃力が増加。クリティカル確率15%増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 39,
                plusMeleeAttackMultiplyDexterity: 10,
                plusCriticalRate: 2,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 79,
                plusMeleeAttackMultiplyDexterity: 20,
                plusCriticalRate: 3,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 118,
                plusMeleeAttackMultiplyDexterity: 30,
                plusCriticalRate: 4,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 157,
                plusMeleeAttackMultiplyDexterity: 40,
                plusCriticalRate: 5,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 197,
                plusMeleeAttackMultiplyDexterity: 50,
                plusCriticalRate: 6,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 275,
                plusMeleeAttackMultiplyDexterity: 70,
                plusCriticalRate: 10,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 393,
                plusMeleeAttackMultiplyDexterity: 100,
                plusCriticalRate: 15,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "hideSplit",
        displayName: "ハイドスプリット",
        icon: predator_hide_split,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "3分間、ハイド中以外でもハイド用のスキルを使用可能。"
        ],
        attributes: {}
    },
    {
        name: "detect",
        displayName: "ディテクト",
        icon: predator_detect,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間、使用者を中心に15メートル以内で姿を隠しているプレイヤー及びモンスターを確認することができます。"
        ],
        attributes: {}
    },
    {
        name: "trackingTreasure",
        displayName: "トラッキングトレジャー",
        icon: predator_tracking_treasure,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "35メートル以内にある宝箱をミニマップで確認できるようになる。"
        ],
        attributes: {}
    },
    {
        name: "ruinTrap",
        displayName: "ルーイントラップ",
        icon: predator_ruin_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲内の対象の防御力を3%減少。",
            "30秒間、トラップ範囲内の対象の防御力を6%減少。",
            "45秒間、トラップ範囲内の対象の防御力を9%減少。",
            "45秒間、トラップ範囲内の対象の防御力を12%減少。",
            "60秒間、トラップ範囲内の対象の防御力を15%減少。",
            "60秒間、トラップ範囲内の対象の防御力を20%減少。",
            "180秒間、トラップ範囲内の対象の防御力を50%減少。",
        ],
        attributes: {}
    },
    {
        name: "sealingSquare",
        displayName: "シーリングスクエア",
        icon: predator_sealing_square,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5秒間、6メートル範囲中の対象を結界に閉じこめる。",
            "7秒間、7メートル範囲中の対象を結界に閉じこめる。",
            "9秒間、8メートル範囲中の対象を結界に閉じこめる。",
            "11秒間、9メートル範囲中の対象を結界に閉じこめる。",
            "13秒間、10メートル範囲中の対象を結界に閉じこめる。",
            "15秒間、11メートル範囲中の対象を結界に閉じこめる。",
            "20秒間、12メートル範囲中の対象を結界に閉じこめる。",
        ],
        attributes: {}
    },
    {
        name: "healingTrap",
        displayName: "ヒーリングトラップ",
        icon: predator_healing_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "3分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に1%ずつ回復。",
            "3分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に3%ずつ回復。",
            "3分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に6%ずつ回復。",
            "3分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に9%ずつ回復。",
            "3分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に12%ずつ回復。",
            "3分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に15%ずつ回復。",
            "4分間、トラップ範囲内のパーティーメンバーのHPを3秒毎に20%ずつ回復。",
        ],
        attributes: {}
    },
    {
        name: "heartTrap",
        displayName: "ハートトラップ",
        icon: predator_heart_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、5秒毎にトラップ範囲内の対象を20%の確率で2秒間スタン。",
            "30秒間、5秒毎にトラップ範囲内の対象を25%の確率で2秒間スタン。",
            "30秒間、5秒毎にトラップ範囲内の対象を30%の確率で3秒間スタン。",
            "30秒間、5秒毎にトラップ範囲内の対象を35%の確率で3秒間スタン。",
            "30秒間、5秒毎にトラップ範囲内の対象を40%の確率で4秒間スタン。",
            "30秒間、5秒毎にトラップ範囲内の対象を50%の確率で4秒間スタン。",
            "90秒間、5秒毎にトラップ範囲内の対象を60%の確率で4秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "scarecrow",
        displayName: "スケアクロー",
        icon: predator_scare_crow,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲内のランダムな対象に、持続的に1000ダメージ。",
            "30秒間、トラップ範囲内のランダムな対象に、持続的に1200ダメージ。",
            "45秒間、トラップ範囲内のランダムな対象に、持続的に1400ダメージ。",
            "45秒間、トラップ範囲内のランダムな対象に、持続的に1600ダメージ。",
            "60秒間、トラップ範囲内のランダムな対象に、持続的に1800ダメージ。",
            "60秒間、トラップ範囲内のランダムな対象に、持続的に2000ダメージ。",
            "180秒間、トラップ範囲内のランダムな対象に、持続的に2200ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "timerTrap",
        displayName: "タイマートラップ",
        icon: predator_timer_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の20%に値するダメージ。",
            "30秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の25%に値するダメージ。",
            "45秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の25%に値するダメージ。",
            "45秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の30%に値するダメージ。",
            "60秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の30%に値するダメージ。",
            "60秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の40%に値するダメージ。",
            "180秒間、トラップ範囲内の対象に、3秒毎に使用者の攻撃力の60%に値するダメージ。",
        ],
        attributes: {}
    },
    {
        name: "secretHide",
        displayName: "シークレットハイド",
        icon: predator_secret_hide,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "ハイド中に攻撃をした時、10%の確率でハイドが解けない。",
            "ハイド中に攻撃をした時、20%の確率でハイドが解けない。",
            "ハイド中に攻撃をした時、30%の確率でハイドが解けない。",
            "ハイド中に攻撃をした時、40%の確率でハイドが解けない。",
            "ハイド中に攻撃をした時、50%の確率でハイドが解けない。",
            "ハイド中に攻撃をした時、60%の確率でハイドが解けない。",
            "ハイド中に攻撃をした時、100%の確率でハイドが解けない。",
        ],
        attributes: {}
    },
    {
        name: "transformation",
        displayName: "トランスフォーメーション",
        icon: predator_transformation,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力90%に転換。",
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力85%に転換。",
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力80%に転換。",
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力75%に転換。",
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力70%に転換。",
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力60%に転換。",
            "30秒間、対象の遠距離攻撃力100%を近距離攻撃力50%に転換。",
        ],
        attributes: {}
    },
    {
        name: "premiumSlash",
        displayName: "プレミアムスラッシュ",
        icon: predator_premium_slash,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "3分間、ネームドモンスター、ボスモンスターに瞬発力の100%ほど増加されたダメージ。",
            "3分間、ネームドモンスター、ボスモンスターに瞬発力の200%ほど増加されたダメージ。",
            "4分間、ネームドモンスター、ボスモンスターに瞬発力の300%ほど増加されたダメージ。",
            "4分間、ネームドモンスター、ボスモンスターに瞬発力の400%ほど増加されたダメージ。",
            "5分間、ネームドモンスター、ボスモンスターに瞬発力の500%ほど増加されたダメージ。",
            "5分間、ネームドモンスター、ボスモンスターに瞬発力の600%ほど増加されたダメージ。",
            "10分間、ネームドモンスター、ボスモンスターに瞬発力の1000%ほど増加されたダメージ。",
        ],
        attributes: {}
    },
    {
        name: "royalMask",
        displayName: "ロイヤルマスク",
        icon: predator_royal_mask,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 5,
        descriptions: [
            "30分間、使用者のレベルを1増加。全てのステータスを3%増加。",
            "30分間、使用者のレベルを2増加。全てのステータスを6%増加。",
            "30分間、使用者のレベルを3増加。全てのステータスを9%増加。",
            "30分間、使用者のレベルを4増加。全てのステータスを12%増加。",
            "120分間、使用者のレベルを5増加。全てのステータスを20%増加。",
        ],
        attributes: {
            0: {
                multiplyAllStatus: 3
            },
            1: {
                multiplyAllStatus: 6
            },
            2: {
                multiplyAllStatus: 9
            },
            3: {
                multiplyAllStatus: 12
            },
            4: {
                multiplyAllStatus: 20
            }
        }
    },
    {
        name: "experienceMambo",
        displayName: "エクスペリエンスマンボー",
        icon: predator_experience_mambo,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10分間、使用者が死亡した時に減る経験値の量を10%減少させます。",
            "10分間、使用者が死亡した時に減る経験値の量を15%減少させます。",
            "20分間、使用者が死亡した時に減る経験値の量を20%減少させます。",
            "20分間、使用者が死亡した時に減る経験値の量を25%減少させます。",
            "30分間、使用者が死亡した時に減る経験値の量を30%減少させます。",
            "30分間、使用者が死亡した時に減る経験値の量を50%減少させます。",
            "60分間、使用者が死亡した時に減る経験値の量を70%減少させます。",
        ],
        attributes: {}
    },
    {
        name: "demolition",
        displayName: "デモリション",
        icon: predator_demolition,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に100%増加したダメージ。一直線上の敵にも順番に30%ずつ減少したダメージ。15秒間ダメージの30%の持続ダメージ。",
            "対象に120%増加したダメージ。一直線上の敵にも順番に30%ずつ減少したダメージ。15秒間ダメージの30%の持続ダメージ。",
            "対象に130%増加したダメージ。一直線上の敵にも順番に30%ずつ減少したダメージ。15秒間ダメージの40%の持続ダメージ。",
            "対象に150%増加したダメージ。一直線上の敵にも順番に20%ずつ減少したダメージ。15秒間ダメージの40%の持続ダメージ。",
            "対象に160%増加したダメージ。一直線上の敵にも順番に20%ずつ減少したダメージ。15秒間ダメージの50%の持続ダメージ。",
            "対象に180%増加したダメージ。一直線上の敵にも順番に10%ずつ減少したダメージ。15秒間ダメージの50%の持続ダメージ。",
            "対象に200%増加したダメージ。一直線上の敵にも順番に5%ずつ減少したダメージ。15秒間ダメージの50%の持続ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "blackMantle",
        displayName: "ブラックマントル",
        icon: predator_black_mantle,
        category: "Buff",
        origin: "Group",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、パーティーメンバー及び使用者がハイド状態になる。",
            "5分間、パーティーメンバー及び使用者がハイド状態になる。移動速度10％増加。",
            "10分間、パーティーメンバー及び使用者がハイド状態になる。移動速度10％増加。",
            "10分間、パーティーメンバー及び使用者がハイド状態になる。移動速度20％増加。",
            "15分間、パーティーメンバー及び使用者がハイド状態になる。移動速度20％増加。",
            "15分間、パーティーメンバー及び使用者がハイド状態になる。移動速度50％増加。",
            "20分間、パーティーメンバー及び使用者がハイド状態になる。移動速度100％増加。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 0,
            },
            1: {
                multiplyMovementSpeed: 10,
            },
            2: {
                multiplyMovementSpeed: 10,
            },
            3: {
                multiplyMovementSpeed: 20,
            },
            4: {
                multiplyMovementSpeed: 20,
            },
            5: {
                multiplyMovementSpeed: 50,
            },
            6: {
                multiplyMovementSpeed: 100,
            }
        }
    },
    {
        name: "dancingBlade",
        displayName: "ダンシングブレイド",
        icon: predator_dancing_blade,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者中心に10メートル内の対象に瞬発力の100%増加したダメージ。",
            "使用者中心に10メートル内の対象に瞬発力の200%増加したダメージ。",
            "使用者中心に10メートル内の対象に瞬発力の300%増加したダメージ。",
            "使用者中心に10メートル内の対象に瞬発力の400%増加したダメージ。",
            "使用者中心に10メートル内の対象に瞬発力の500%増加したダメージ。",
            "使用者中心に10メートル内の対象に瞬発力の600%増加したダメージ。",
            "使用者中心に10メートル内の対象に瞬発力の1000%増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "octopus",
        displayName: "オクトパス",
        icon: predator_octopus,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、20%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
            "21分間、30%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
            "24分間、40%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
            "27分間、50%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
            "30分間、60%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
            "30分間、80%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
            "60分間、100%の確率で通常攻撃が範囲化し、10メートル内の対象に60%減少したダメージを与える。",
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
                multiplyIncreaseDamageDealt: -60,
            }
        }
    },
    {
        name: "isolationStealth",
        displayName: "アイソレーションステルス",
        icon: predator_isolation_stealth,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "広域攻撃の被ダメージを無効化。広域攻撃力10%増加。",
            "広域攻撃の被ダメージを無効化。広域攻撃力20%増加。",
            "広域攻撃の被ダメージを無効化。広域攻撃力30%増加。",
            "広域攻撃の被ダメージを無効化。広域攻撃力40%増加。",
            "広域攻撃の被ダメージを無効化。広域攻撃力50%増加。",
            "広域攻撃の被ダメージを無効化。広域攻撃力70%増加。",
            "広域攻撃の被ダメージを無効化。広域攻撃力100%増加。",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: 10,
            },
            1: {
                multiplyIncreaseDamageDealt: 20,
            },
            2: {
                multiplyIncreaseDamageDealt: 30,
            },
            3: {
                multiplyIncreaseDamageDealt: 40,
            },
            4: {
                multiplyIncreaseDamageDealt: 50,
            },
            5: {
                multiplyIncreaseDamageDealt: 70,
            },
            6: {
                multiplyIncreaseDamageDealt: 100,
            }
        }
    }
]