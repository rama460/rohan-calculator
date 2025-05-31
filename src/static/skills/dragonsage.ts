import { Skill } from "./skill";

import dragonsage_karma from "../../assets/skills/dragonsage/DS_Karma.gif";
import dragonsage_zen_mastery from "../../assets/skills/dragonsage/DS_Zen_Mastery.gif";
import dragonsage_blue_defense from "../../assets/skills/dragonsage/DS_Blue_Defense.gif";
import dragonsage_imprint from "../../assets/skills/dragonsage/DS_Imprint.gif";
import dragonsage_critical_immunity from "../../assets/skills/dragonsage/DS_Critical_Immunity.gif";
import dragonsage_extricate from "../../assets/skills/dragonsage/DS_Extricate.gif";
import dragonsage_mana_guard from "../../assets/skills/dragonsage/DS_Mana_Guard.gif";
import dragonsage_evolve_separation from "../../assets/skills/dragonsage/DS_Evolve_Separation.gif";
import dragonsage_suction from "../../assets/skills/dragonsage/DS_Suction.gif";
import dragonsage_rapid_lock from "../../assets/skills/dragonsage/DS_Rapid_Lock.gif";
import dragonsage_moving_shadow from "../../assets/skills/dragonsage/DS_Moving_Shadow.gif";
import dragonsage_dragon_mantle from "../../assets/skills/dragonsage/DS_Dragon_Mantle.gif";
import dragonsage_death_flow from "../../assets/skills/dragonsage/DS_Death_Flow.gif";
import dragonsage_heavy_wave from "../../assets/skills/dragonsage/DS_Heavy_Wave.gif";
import dragonsage_spitter from "../../assets/skills/dragonsage/DS_Spitter.gif";
import dragonsage_all_attack from "../../assets/skills/dragonsage/DS_All_Attack.gif";
import dragonsage_double_murder from "../../assets/skills/dragonsage/DS_Double_Murder.gif";
import dragonsage_impregnable from "../../assets/skills/dragonsage/DS_Impregnable.gif";
import dragonsage_dragon_wing from "../../assets/skills/dragonsage/DS_Dragons_Wing.gif";
import dragonsage_wide_forefoot_swing from "../../assets/skills/dragonsage/DS_Wide_Forefoot_Swing.gif";
import dragonsage_combine_flow from "../../assets/skills/dragonsage/DS_Combine_Flow.gif";
import dragonsage_reverse_scale from "../../assets/unknown.png";

export const dragonsage_skills: Skill[] = [
    {
        name: "karma",
        displayName: "カルマ",
        icon: dragonsage_karma,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "レベル70以下の死亡した対象を15％のHPとMPを持った状態で復活。減少経験値30％。",
            "レベル80以下の死亡した対象を30％のHPとMPを持った状態で復活。減少経験値40％。",
            "レベル90以下の死亡した対象を45％のHPとMPを持った状態で復活。減少経験値50％。",
            "レベル100以下の死亡した対象を60％のHPとMPを持った状態で復活。減少経験値60％。",
            "レベル115以下の死亡した対象を75％のHPとMPを持った状態で復活。減少経験値70％。",
            "レベル115以下の死亡した対象を90％のHPとMPを持った状態で復活。減少経験値90％。",
            "レベル115以下の死亡した対象を100％のHPとMPを持った状態で復活。減少経験値95％。",
        ],
        attributes: {}
    },
    {
        name: "zenMastery",
        displayName: "ゼンマスタリー",
        icon: dragonsage_zen_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、ゼン及びオプション攻撃力が75%増加。知能の57%ほど近距離攻撃力が増加。",
            "21分間、ゼン及びオプション攻撃力が150%増加。知能の114%ほど近距離攻撃力が増加。",
            "24分間、ゼン及びオプション攻撃力が224%増加。知能の171%ほど近距離攻撃力が増加。",
            "27分間、ゼン及びオプション攻撃力が299%増加。知能の228%ほど近距離攻撃力が増加。",
            "30分間、ゼン及びオプション攻撃力が374%増加。知能の285%ほど近距離攻撃力が増加。",
            "30分間、ゼン及びオプション攻撃力が524%増加。知能の399%ほど近距離攻撃力が増加。",
            "120分間、ゼン及びオプション攻撃力が748%増加。知能の570%ほど近距離攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 75,
                plusMeleeAttackMultiplyIntelligence: 57,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 150,
                plusMeleeAttackMultiplyIntelligence: 114,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 224,
                plusMeleeAttackMultiplyIntelligence: 171,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 299,
                plusMeleeAttackMultiplyIntelligence: 228,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 374,
                plusMeleeAttackMultiplyIntelligence: 285,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 524,
                plusMeleeAttackMultiplyIntelligence: 399,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 748,
                plusMeleeAttackMultiplyIntelligence: 570,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "blueDefence",
        displayName: "ブルーディフェンス",
        icon: dragonsage_blue_defense,
        category: "Buff",
        origin: "Self",
        raceid: 4,
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
        name: "imprint",
        displayName: "インプリント",
        icon: dragonsage_imprint,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間、15メートル以内の姿を隠したプレーヤーまたはモンスターを感知。"
        ],
        attributes: {}
    },
    {
        name: "criticalImmunity",
        displayName: "クリティカルイミュニティ",
        icon: dragonsage_critical_immunity,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、クリティカル攻撃を受けた時のダメージを知能の80%ほど軽減させます",
            "21分間、クリティカル攻撃を受けた時のダメージを知能の120%ほど軽減させます",
            "24分間、クリティカル攻撃を受けた時のダメージを知能の160%ほど軽減させます",
            "27分間、クリティカル攻撃を受けた時のダメージを知能の200%ほど軽減させます",
            "30分間、クリティカル攻撃を受けた時のダメージを知能の240%ほど軽減させます",
            "30分間、クリティカル攻撃を受けた時のダメージを知能の280%ほど軽減させます",
            "60分間、クリティカル攻撃を受けた時のダメージを知能の400%ほど軽減させます",
        ],
        attributes: {
            0: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 80,
            },
            1: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 120,
            },
            2: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 160,
            },
            3: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 200,
            },
            4: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 240,
            },
            5: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 280,
            },
            6: {
                multiplyDecreaseCriticalDamageTakenMultiplyIntelligence: 400,
            }
        }
    },
    {
        name: "extricate",
        displayName: "エクストリケイト",
        icon: dragonsage_extricate,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 2,
        descriptions: [
            "ルートを解除。",
            "ルート、スタン、睡眠、麻痺を解除。"
        ],
        attributes: {}
    },
    {
        name: "manaGuard",
        displayName: "マナガード",
        icon: dragonsage_mana_guard,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、知能の400%ダメージ無効化",
            "60秒間、知能の600%ダメージ無効化",
            "60秒間、知能の800%ダメージ無効化",
            "60秒間、知能の1000%ダメージ無効化",
            "60秒間、知能の1200%ダメージ無効化",
            "60秒間、知能の1500%ダメージ無効化",
            "60秒間、知能の2000%ダメージ無効化",
        ],
        attributes: {}
    },
    {
        name: "evolveSeparation",
        displayName: "イボルブーセパレーション",
        icon: dragonsage_evolve_separation,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、魔法攻撃力5%増加。攻撃速度10%増加。ゼンを分離して攻撃。",
            "21分間、魔法攻撃力10%増加。攻撃速度10%増加。ゼンを分離して攻撃。",
            "24分間、魔法攻撃力15%増加。攻撃速度15%増加。ゼンを分離して攻撃。",
            "27分間、魔法攻撃力20%増加。攻撃速度15%増加。ゼンを分離して攻撃。",
            "30分間、魔法攻撃力25%増加。攻撃速度20%増加。ゼンを分離して攻撃。",
            "30分間、魔法攻撃力30%増加。攻撃速度20%増加。ゼンを分離して攻撃。",
            "120分間、魔法攻撃力35%増加。攻撃速度30%増加。ゼンを分離して攻撃。",
        ],
        attributes: {
            0: {
                multiplyMagicAttack: 5,
                multiplyAttackSpeed: 10,
            },
            1: {
                multiplyMagicAttack: 10,
                multiplyAttackSpeed: 10,
            },
            2: {
                multiplyMagicAttack: 15,
                multiplyAttackSpeed: 15,
            },
            3: {
                multiplyMagicAttack: 20,
                multiplyAttackSpeed: 15,
            },
            4: {
                multiplyMagicAttack: 25,
                multiplyAttackSpeed: 20,
            },
            5: {
                multiplyMagicAttack: 30,
                multiplyAttackSpeed: 20,
            },
            6: {
                multiplyMagicAttack: 35,
                multiplyAttackSpeed: 30,
            }
        }
    },
    {
        name: "suction",
        displayName: "サクション",
        icon: dragonsage_suction,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "ダメージの1%に値するHPを吸収します。",
            "ダメージの2%に値するHPを吸収します。",
            "ダメージの3%に値するHPを吸収します。",
            "ダメージの4%に値するHPを吸収します。",
            "ダメージの5%に値するHPを吸収します。",
            "ダメージの6%に値するHPを吸収します。",
            "ダメージの7%に値するHPを吸収します。",
        ],
        attributes: {
            0: {
                multiplyHitPointAbsorbDamageRate: 1,
            },
            1: {
                multiplyHitPointAbsorbDamageRate: 2,
            },
            2: {
                multiplyHitPointAbsorbDamageRate: 3,
            },
            3: {
                multiplyHitPointAbsorbDamageRate: 4,
            },
            4: {
                multiplyHitPointAbsorbDamageRate: 5,
            },
            5: {
                multiplyHitPointAbsorbDamageRate: 6,
            },
            6: {
                multiplyHitPointAbsorbDamageRate: 7,
            }
        }
    },
    {
        name: "rapidLock",
        displayName: "ラピドロック",
        icon: dragonsage_rapid_lock,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、知能の100%ほどクリティカルダメージを追加。",
            "21分間、知能の150%ほどクリティカルダメージを追加。",
            "24分間、知能の200%ほどクリティカルダメージを追加。",
            "27分間、知能の250%ほどクリティカルダメージを追加。",
            "30分間、知能の350%ほどクリティカルダメージを追加。",
            "30分間、知能の500%ほどクリティカルダメージを追加。",
            "60分間、知能の700%ほどクリティカルダメージを追加。",
        ],
        attributes: {
            0: {
                plusCriticalDamageMultiplyIntelligence: 100,
            },
            1: {
                plusCriticalDamageMultiplyIntelligence: 150,
            },
            2: {
                plusCriticalDamageMultiplyIntelligence: 200,
            },
            3: {
                plusCriticalDamageMultiplyIntelligence: 250,
            },
            4: {
                plusCriticalDamageMultiplyIntelligence: 350,
            },
            5: {
                plusCriticalDamageMultiplyIntelligence: 500,
            },
            6: {
                plusCriticalDamageMultiplyIntelligence: 700,
            }
        }
    },
    {
        name: "movingShadow",
        displayName: "ムービングシャドウ",
        icon: dragonsage_moving_shadow,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、攻撃速度20%増加",
            "5分間、攻撃速度25%増加",
            "5分間、攻撃速度30%増加",
            "5分間、攻撃速度35%増加",
            "5分間、攻撃速度40%増加",
            "5分間、攻撃速度50%増加",
            "5分間、攻撃速度70%増加",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 20,
            },
            1: {
                multiplyAttackSpeed: 25,
            },
            2: {
                multiplyAttackSpeed: 30,
            },
            3: {
                multiplyAttackSpeed: 35,
            },
            4: {
                multiplyAttackSpeed: 40,
            },
            5: {
                multiplyAttackSpeed: 50,
            },
            6: {
                multiplyAttackSpeed: 70,
            }
        }
    },
    {
        name: "dragonMantle",
        displayName: "ドラゴンマントル",
        icon: dragonsage_dragon_mantle,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "3秒ごとに周囲15mの敵にダメージ10",
            "3秒ごとに周囲15mの敵にダメージ20",
            "3秒ごとに周囲15mの敵にダメージ30",
            "3秒ごとに周囲15mの敵にダメージ40",
            "3秒ごとに周囲15mの敵にダメージ50",
            "3秒ごとに周囲15mの敵にダメージ70",
            "3秒ごとに周囲15mの敵にダメージ100",
        ],
        attributes: {}
    },
    {
        name: "deathFlow",
        displayName: "デスフロウ",
        icon: dragonsage_death_flow,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に100%増加したダメージ。3秒間スタン。",
            "対象に110%増加したダメージ。3秒間スタン。",
            "対象に130%増加したダメージ。4秒間スタン。",
            "対象に150%増加したダメージ。5秒間スタン。",
            "対象に160%増加したダメージ。6秒間スタン。",
            "対象に180%増加したダメージ。7秒間スタン。",
            "対象に200%増加したダメージ。7秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "heavyWave",
        displayName: "ヘビーウェーブ",
        icon: dragonsage_heavy_wave,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視し、50%増加したダメージ。",
            "対象の防御力を無視し、60%増加したダメージ。",
            "対象の防御力を無視し、70%増加したダメージ。",
            "対象の防御力を無視し、80%増加したダメージ。",
            "対象の防御力を無視し、90%増加したダメージ。",
            "対象の防御力を無視し、100%増加したダメージ。",
            "対象の防御力を無視し、120%増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "spitter",
        displayName: "スピッター",
        icon: dragonsage_spitter,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "イボルブ状態での通常攻撃を20%の確率で範囲攻撃にさせ、10メートル内の対象に60%減少したダメージを与えます。",
            "イボルブ状態での通常攻撃を30%の確率で範囲攻撃にさせ、10メートル内の対象に60%減少したダメージを与えます。",
            "イボルブ状態での通常攻撃を40%の確率で範囲攻撃にさせ、10メートル内の対象に60%減少したダメージを与えます。",
            "イボルブ状態での通常攻撃を50%の確率で範囲攻撃にさせ、10メートル内の対象に60%減少したダメージを与えます。",
            "イボルブ状態での通常攻撃を60%の確率で範囲攻撃にさせ、10メートル内の対象に60%減少したダメージを与えます。",
            "イボルブ状態での通常攻撃を80%の確率で範囲攻撃にさせ、10メートル内の対象に60%減少したダメージを与えます。",
            "イボルブ状態での通常攻撃を100%の確率で範囲攻撃にさせ、10メートル内の対象に50%減少したダメージを与えます。",
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
        name: "allAttack",
        displayName: "オールアタック",
        icon: dragonsage_all_attack,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視し、50%増加したダメージ。",
            "対象の防御力を無視し、60%増加したダメージ。",
            "対象の防御力を無視し、70%増加したダメージ。",
            "対象の防御力を無視し、80%増加したダメージ。",
            "対象の防御力を無視し、90%増加したダメージ。",
            "対象の防御力を無視し、120%増加したダメージ。",
            "対象の防御力を無視し、150%増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "doubleMurder",
        displayName: "ダブルマーダー",
        icon: dragonsage_double_murder,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、得られるキルカウントが2倍になる。",
            "10分間、得られるキルカウントが2倍になる。",
            "15分間、得られるキルカウントが2倍になる。",
            "20分間、得られるキルカウントが2倍になる。",
            "25分間、得られるキルカウントが2倍になる。",
            "30分間、得られるキルカウントが2倍になる。",
            "60分間、得られるキルカウントが2倍になる。",
        ],
        attributes: {}
    },
    {
        name: "impregnable",
        displayName: "インプレグナブル",
        icon: dragonsage_impregnable,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "防御力が知能の50%ほど増加します。",
            "防御力が知能の60%ほど増加します。",
            "防御力が知能の70%ほど増加します。",
            "防御力が知能の80%ほど増加します。",
            "防御力が知能の90%ほど増加します。",
            "防御力が知能の100%ほど増加します。",
            "防御力が知能の140%ほど増加します。",
        ],
        attributes: {
            0: {
                plusDefenseMultiplyIntelligence: 50,
            },
            1: {
                plusDefenseMultiplyIntelligence: 60,
            },
            2: {
                plusDefenseMultiplyIntelligence: 70,
            },
            3: {
                plusDefenseMultiplyIntelligence: 80,
            },
            4: {
                plusDefenseMultiplyIntelligence: 90,
            },
            5: {
                plusDefenseMultiplyIntelligence: 100,
            },
            6: {
                plusDefenseMultiplyIntelligence: 140,
            }
        }
    },
    {
        name: "dragonWing",
        displayName: "ドラゴンウイング",
        icon: dragonsage_dragon_wing,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "イボルブ状態の時、移動速度を10%増加させる。",
            "イボルブ状態の時、移動速度を15%増加させる。",
            "イボルブ状態の時、移動速度を20%増加させる。",
            "イボルブ状態の時、移動速度を25%増加させる。",
            "イボルブ状態の時、移動速度を30%増加させる。",
            "イボルブ状態の時、移動速度を40%増加させる。",
            "イボルブ状態の時、移動速度を50%増加させる。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 10,
            },
            1: {
                multiplyMovementSpeed: 15,
            },
            2: {
                multiplyMovementSpeed: 20,
            },
            3: {
                multiplyMovementSpeed: 25,
            },
            4: {
                multiplyMovementSpeed: 30,
            },
            5: {
                multiplyMovementSpeed: 40,
            },
            6: {
                multiplyMovementSpeed: 50,
            }
        }
    },
    {
        name: "wideForefootSwing",
        displayName: "ワイドフォアフットスウィング",
        icon: dragonsage_wide_forefoot_swing,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "20メートル内の対象にHPの9%+魔法攻撃力の5倍のダメージ。",
            "20メートル内の対象にHPの12%+魔法攻撃力の6倍のダメージ。",
            "20メートル内の対象にHPの15%+魔法攻撃力の7倍のダメージ。",
            "20メートル内の対象にHPの18%+魔法攻撃力の8倍のダメージ。",
            "20メートル内の対象にHPの27%+魔法攻撃力の10倍のダメージ。",
            "20メートル内の対象にHPの36%+魔法攻撃力の12倍のダメージ。",
            "20メートル内の対象にHPの39%+魔法攻撃力の15倍のダメージ。",
        ],
        attributes: {}
    },
    {
        name: "combineFlow",
        displayName: "コンバインフロー",
        icon: dragonsage_combine_flow,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に20%増加したダメージ。2秒間スタン。",
            "対象に40%増加したダメージ。2秒間スタン。",
            "対象に60%増加したダメージ。3秒間スタン。",
            "対象に80%増加したダメージ。3秒間スタン。",
            "対象に100%増加したダメージ。4秒間スタン。",
            "対象に140%増加したダメージ。5秒間スタン。",
            "対象に200%増加したダメージ。7秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "reverseScale",
        displayName: "リバーススケイル",
        icon: dragonsage_reverse_scale,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、防御力が100%増加。特定スキルのデバフ効果を反射。",
            "60秒間、防御力が110%増加。特定スキルのデバフ効果を反射。",
            "60秒間、防御力が120%増加。特定スキルのデバフ効果を反射。",
            "60秒間、防御力が130%増加。特定スキルのデバフ効果を反射。",
            "60秒間、防御力が140%増加。特定スキルのデバフ効果を反射。",
            "60秒間、防御力が150%増加。特定スキルのデバフ効果を反射。",
            "60秒間、防御力が200%増加。特定スキルのデバフ効果を反射。",
        ],
        attributes: {
            0: {
                multiplyDefense: 100,
            },
            1: {
                multiplyDefense: 110,
            },
            2: {
                multiplyDefense: 120,
            },
            3: {
                multiplyDefense: 130,
            },
            4: {
                multiplyDefense: 140,
            },
            5: {
                multiplyDefense: 150,
            },
            6: {
                multiplyDefense: 200,
            }
        }
    }
]