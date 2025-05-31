import { Skill } from "./skill";

import dragonknight_karma from "../../assets/skills/dragonknight/DN_Karma.gif"
import dragonknight_zen_mastery from "../../assets/skills/dragonknight/DN_Zen_Mastery.gif"
import dragonknight_blue_defense from "../../assets/skills/dragonknight/DN_Blue_Defense.gif"
import dragonknight_critical_immunity from "../../assets/skills/dragonknight/DN_Critical_Immunity.gif"
import dragonknight_extricate from "../../assets/skills/dragonknight/DN_Extricate.gif"
import dragonknight_mist from "../../assets/skills/dragonknight/DN_Mist.gif"
import dragonknight_evolve from "../../assets/skills/dragonknight/DN_Evolve.gif"
import dragonknight_all_suction from "../../assets/skills/dragonknight/DN_All_Suction.gif"
import dragonknight_force_lock from "../../assets/skills/dragonknight/DN_Force_Lock.gif"
import dragonknight_fast_shadow from "../../assets/skills/dragonknight/DN_Fast_Shadow.gif"
import dragonknight_sudden_death from "../../assets/skills/dragonknight/DN_Sudden_Death.gif"
import dragonknight_penetrate from "../../assets/skills/dragonknight/DN_Penetrate.gif"
import dragonknight_divide_soul from "../../assets/skills/dragonknight/DN_Divide_Soul.gif"
import dragonknight_blood_effect from "../../assets/skills/dragonknight/DN_Blood_Effect.gif"
import dragonknight_toxic_potion from "../../assets/skills/dragonknight/DN_Toxic_Potion.gif"
import dragonknight_dark_spell from "../../assets/skills/dragonknight/DN_Dark_Spell.gif"
import dragonknight_lunacy from "../../assets/skills/dragonknight/DN_Lunacy.gif"
import dragonknight_dragon_nail from "../../assets/skills/dragonknight/DN_Dragon_Nail.gif"
import dragonknight_double_forefoot_swing from "../../assets/skills/dragonknight/DN_Double_Forefoot_Swing.gif"
import dragonknight_divide_flow from "../../assets/skills/dragonknight/DN_Divide_Flow.gif"
import dragonknight_elder_blood_awake from "../../assets/skills/dragonknight/DN_Elder_Blood_Awake.gif"

export const dragonknight_skills: Skill[] = [
    {
        name: "karma",
        displayName: "カルマ",
        icon: dragonknight_karma,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "レベル70以下の死亡した対象を15%のHPとMPを持った状態で復活。減少経験値30％。",
            "レベル80以下の死亡した対象を30%のHPとMPを持った状態で復活。減少経験値40％。",
            "レベル90以下の死亡した対象を45%のHPとMPを持った状態で復活。減少経験値50％。",
            "レベル100以下の死亡した対象を60%のHPとMPを持った状態で復活。減少経験値60％。",
            "レベル115以下の死亡した対象を75%のHPとMPを持った状態で復活。減少経験値75％。",
            "レベル115以下の死亡した対象を90%のHPとMPを持った状態で復活。減少経験値90％。",
            "レベル115以下の死亡した対象を100%のHPとMPを持った状態で復活。減少経験値95％。",
        ],
        attributes: {}
    },

    {
        name: "zenMastery",
        displayName: "ゼンマスタリー",
        icon: dragonknight_zen_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、ゼン及びオプション攻撃力が100%増加。体力の250%ほど近距離攻撃力が増加。",
            "21分間、ゼン及びオプション攻撃力が200%増加。体力の450%ほど近距離攻撃力が増加。",
            "24分間、ゼン及びオプション攻撃力が300%増加。体力の650%ほど近距離攻撃力が増加。",
            "27分間、ゼン及びオプション攻撃力が400%増加。体力の850%ほど近距離攻撃力が増加。",
            "30分間、ゼン及びオプション攻撃力が500%増加。体力の1050%ほど近距離攻撃力が増加。",
            "30分間、ゼン及びオプション攻撃力が600%増加。体力の1250%ほど近距離攻撃力が増加。",
            "120分間、ゼン及びオプション攻撃力が710%増加。体力の1500%ほど近距離攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 100,
                plusMeleeAttackMultiplyVitality: 250,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 200,
                plusMeleeAttackMultiplyVitality: 450,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 300,
                plusMeleeAttackMultiplyVitality: 650,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 400,
                plusMeleeAttackMultiplyVitality: 850,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 500,
                plusMeleeAttackMultiplyVitality: 1050,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 600,
                plusMeleeAttackMultiplyVitality: 1250,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 710,
                plusMeleeAttackMultiplyVitality: 1500,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "blueDefence",
        displayName: "ブルーディフェンス",
        icon: dragonknight_blue_defense,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の体力を10%増加させます。",
            "21分間、使用者の体力を15%増加させます。",
            "24分間、使用者の体力を20%増加させます。",
            "27分間、使用者の体力を25%増加させます。",
            "30分間、使用者の体力を30%増加させます。",
            "30分間、使用者の体力を40%増加させます。",
            "120分間、使用者の体力を60%増加させます。",
        ],
        attributes: {
            0: {
                multiplyVitality: 10,
            },
            1: {
                multiplyVitality: 15,
            },
            2: {
                multiplyVitality: 20,
            },
            3: {
                multiplyVitality: 25,
            },
            4: {
                multiplyVitality: 30,
            },
            5: {
                multiplyVitality: 40,
            },
            6: {
                multiplyVitality: 60,
            }
        }
    },
    {
        name: "criticalImmunity",
        displayName: "クリティカルイミュニティ",
        icon: dragonknight_critical_immunity,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、クリティカル攻撃を受けた時のダメージを体力の80%ほど軽減させます",
            "21分間、クリティカル攻撃を受けた時のダメージを体力の120%ほど軽減させます",
            "24分間、クリティカル攻撃を受けた時のダメージを体力の160%ほど軽減させます",
            "27分間、クリティカル攻撃を受けた時のダメージを体力の200%ほど軽減させます",
            "30分間、クリティカル攻撃を受けた時のダメージを体力の240%ほど軽減させます",
            "30分間、クリティカル攻撃を受けた時のダメージを体力の280%ほど軽減させます",
            "60分間、クリティカル攻撃を受けた時のダメージを体力の400%ほど軽減させます",
        ],
        attributes: {
            0: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 80,
            },
            1: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 120,
            },
            2: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 160,
            },
            3: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 200,
            },
            4: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 240,
            },
            5: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 280,
            },
            6: {
                multiplyDecreaseCriticalDamageTakenMultiplyVitality: 400,
            }

        }
    },

    {
        name: "extlicate",
        displayName: "エクストリケイト",
        icon: dragonknight_extricate,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 2,
        descriptions: [
            "ルートを解除。",
            "ルート、スタン、睡眠、麻痺を解除"
        ],
        attributes: {}
    },
    {
        name: "mist",
        displayName: "ミスト",
        icon: dragonknight_mist,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "1分間、ハイド状態になる。ハイド中は移動速度が50%減少。",
            "1分間、ハイド状態になる。ハイド中は移動速度が40%減少。",
            "3分間、ハイド状態になる。ハイド中は移動速度が30%減少。",
            "3分間、ハイド状態になる。ハイド中は移動速度が20%減少。",
            "5分間、ハイド状態になる。ハイド中も移動速度変化なし。",
            "5分間、ハイド状態になる。ハイド中は移動速度が10%増加。",
            "10分間、ハイド状態になる。ハイド中は移動速度が20%増加。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: -50,
            },
            1: {
                multiplyMovementSpeed: -40,
            },
            2: {
                multiplyMovementSpeed: -30,
            },
            3: {
                multiplyMovementSpeed: -20,
            },
            4: {
                multiplyMovementSpeed: 0,
            },
            5: {
                multiplyMovementSpeed: 10,
            },
            6: {
                multiplyMovementSpeed: 20,
            }
        }
    },
    {
        name: "evolve",
        displayName: "イボルブ",
        icon: dragonknight_evolve,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、ドラゴンに変身し、近距離/魔法攻撃力が5%、HPが10%増加されます。",
            "21分間、ドラゴンに変身し、近距離/魔法攻撃力が10%、HPが10%増加されます。",
            "24分間、ドラゴンに変身し、近距離/魔法攻撃力が15%、HPが15%増加されます。",
            "27分間、ドラゴンに変身し、近距離/魔法攻撃力が20%、HPが15%増加されます。",
            "30分間、ドラゴンに変身し、近距離/魔法攻撃力が25%、HPが20%増加されます。",
            "30分間、ドラゴンに変身し、近距離/魔法攻撃力が30%、HPが20%増加されます。",
            "120分間、ドラゴンに変身し、近距離/魔法攻撃力が35%、HPが30%増加されます。",
        ],
        attributes: {
            0: {
                multiplyMeleeAttack: 5,
                multiplyMagicAttack: 5,
                multiplyHitPoint: 10,
            },
            1: {
                multiplyMeleeAttack: 10,
                multiplyMagicAttack: 10,
                multiplyHitPoint: 10,
            },
            2: {
                multiplyMeleeAttack: 15,
                multiplyMagicAttack: 15,
                multiplyHitPoint: 15,
            },
            3: {
                multiplyMeleeAttack: 20,
                multiplyMagicAttack: 20,
                multiplyHitPoint: 15,
            },
            4: {
                multiplyMeleeAttack: 25,
                multiplyMagicAttack: 25,
                multiplyHitPoint: 20,
            },
            5: {
                multiplyMeleeAttack: 30,
                multiplyMagicAttack: 30,
                multiplyHitPoint: 20,
            },
            6: {
                multiplyMeleeAttack: 35,
                multiplyMagicAttack: 35,
                multiplyHitPoint: 30,
            }
        }
    },
    {
        name: "allSuction",
        displayName: "オールサクション",
        icon: dragonknight_all_suction,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "ダメージの1%に値するHPとMPを吸収します。",
            "ダメージの2%に値するHPとMPを吸収します。",
            "ダメージの3%に値するHPとMPを吸収します。",
            "ダメージの4%に値するHPとMPを吸収します。",
            "ダメージの5%に値するHPとMPを吸収します。",
            "ダメージの6%に値するHPとMPを吸収します。",
            "ダメージの7%に値するHPとMPを吸収します。",
        ],
        attributes: {
            0: {
                multiplyHitPointAbsorbDamageRate: 1,
                multiplyMagicPointAbsorbDamageRate: 1,
            },
            1: {
                multiplyHitPointAbsorbDamageRate: 2,
                multiplyMagicPointAbsorbDamageRate: 2,
            },
            2: {
                multiplyHitPointAbsorbDamageRate: 3,
                multiplyMagicPointAbsorbDamageRate: 3,
            },
            3: {
                multiplyHitPointAbsorbDamageRate: 4,
                multiplyMagicPointAbsorbDamageRate: 4,
            },
            4: {
                multiplyHitPointAbsorbDamageRate: 5,
                multiplyMagicPointAbsorbDamageRate: 5,
            },
            5: {
                multiplyHitPointAbsorbDamageRate: 6,
                multiplyMagicPointAbsorbDamageRate: 6,
            },
            6: {
                multiplyHitPointAbsorbDamageRate: 7,
                multiplyMagicPointAbsorbDamageRate: 7,
            }
        }
    },
    {
        name: "forceLock",
        displayName: "フォースロック",
        icon: dragonknight_force_lock,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、体力の100%ほどクリティカルダメージを追加。",
            "21分間、体力の150%ほどクリティカルダメージを追加。",
            "24分間、体力の200%ほどクリティカルダメージを追加。",
            "27分間、体力の250%ほどクリティカルダメージを追加。",
            "30分間、体力の350%ほどクリティカルダメージを追加。",
            "30分間、体力の500%ほどクリティカルダメージを追加。",
            "60分間、体力の700%ほどクリティカルダメージを追加。",
        ],
        attributes: {
            0: {
                plusCriticalDamageMultiplyVitality: 100,
            },
            1: {
                plusCriticalDamageMultiplyVitality: 150,
            },
            2: {
                plusCriticalDamageMultiplyVitality: 200,
            },
            3: {
                plusCriticalDamageMultiplyVitality: 250,
            },
            4: {
                plusCriticalDamageMultiplyVitality: 350,
            },
            5: {
                plusCriticalDamageMultiplyVitality: 500,
            },
            6: {
                plusCriticalDamageMultiplyVitality: 700,
            }
        }
    },
    {
        name: "fastShadow",
        displayName: "ファストシャドウ",
        icon: dragonknight_fast_shadow,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、攻撃速度を50％増加させます。",
            "15秒間、攻撃速度を66％増加させます。",
            "15秒間、攻撃速度を80％増加させます。",
            "15秒間、攻撃速度を95％増加させます。",
            "15秒間、攻撃速度を110％増加させます。",
            "15秒間、攻撃速度を125％増加させます。",
            "20秒間、攻撃速度を140％増加させます。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 50,
            },
            1: {
                multiplyAttackSpeed: 66,
            },
            2: {
                multiplyAttackSpeed: 80,
            },
            3: {
                multiplyAttackSpeed: 95,
            },
            4: {
                multiplyAttackSpeed: 110,
            },
            5: {
                multiplyAttackSpeed: 125,
            },
            6: {
                multiplyAttackSpeed: 140,
            }
        }
    },
    {
        name: "suddenDeath",
        displayName: "サドンデス",
        icon: dragonknight_sudden_death,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象を攻撃するときに、ダメージの10%に値する追加ダメージを与えます。",
            "対象を攻撃するときに、ダメージの12%に値する追加ダメージを与えます。",
            "対象を攻撃するときに、ダメージの14%に値する追加ダメージを与えます。",
            "対象を攻撃するときに、ダメージの16%に値する追加ダメージを与えます。",
            "対象を攻撃するときに、ダメージの18%に値する追加ダメージを与えます。",
            "対象を攻撃するときに、ダメージの20%に値する追加ダメージを与えます。",
            "対象を攻撃するときに、ダメージの24%に値する追加ダメージを与えます。",
        ],
        // TODO: implement custom option
        attributes: {}
    },
    {
        name: "penetrate",
        displayName: "べネトレイト",
        icon: dragonknight_penetrate,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視して、150％のダメージで攻撃をします。追加で3秒スタン。(セパレーション時は使用不可)",
            "対象の防御力を無視して、160％のダメージで攻撃をします。追加で3秒スタン。(セパレーション時は使用不可)",
            "対象の防御力を無視して、170％のダメージで攻撃をします。追加で4秒スタン。(セパレーション時は使用不可)",
            "対象の防御力を無視して、180％のダメージで攻撃をします。追加で5秒スタン。(セパレーション時は使用不可)",
            "対象の防御力を無視して、190％のダメージで攻撃をします。追加で6秒スタン。(セパレーション時は使用不可)",
            "対象の防御力を無視して、200％のダメージで攻撃をします。追加で7秒スタン。(セパレーション時は使用不可)",
            "対象の防御力を無視して、210％のダメージで攻撃をします。追加で7秒スタン。(セパレーション時は使用不可)",
        ],
        attributes: {}
    },
    {
        name: "divideSoul",
        displayName: "ディバイドソウル",
        icon: dragonknight_divide_soul,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に100%のダメージで攻撃。1秒スタン",
            "対象に110%のダメージで攻撃。2秒スタン",
            "対象に130%のダメージで攻撃。2秒スタン",
            "対象に150%のダメージで攻撃。3秒スタン",
            "対象に160%のダメージで攻撃。3秒スタン",
            "対象に180%のダメージで攻撃。4秒スタン",
            "対象に200%のダメージで攻撃。4秒スタン",
        ],
        attributes: {}
    },
    {
        name: "bloodEffect",
        displayName: "ブラッドエフェクト",
        icon: dragonknight_blood_effect,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "使用者のクリティカル確率を1%増加させます。",
            "使用者のクリティカル確率を2%増加させます。",
            "使用者のクリティカル確率を3%増加させます。",
            "使用者のクリティカル確率を4%増加させます。",
            "使用者のクリティカル確率を5%増加させます。",
            "使用者のクリティカル確率を6%増加させます。",
            "使用者のクリティカル確率を7%増加させます。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 1,
            },
            1: {
                plusCriticalRate: 2,
            },
            2: {
                plusCriticalRate: 3,
            },
            3: {
                plusCriticalRate: 4,
            },
            4: {
                plusCriticalRate: 5,
            },
            5: {
                plusCriticalRate: 6,
            },
            6: {
                plusCriticalRate: 7,
            }
        }
    },
    {
        name: "toxicPotion",
        displayName: "トキシックポーション",
        icon: dragonknight_toxic_potion,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
            "15秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
            "20秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
            "25秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
            "30秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
            "40秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
            "50秒間、対象が一般ポーションを使うことができなくします。 モンスターに使用不可。",
        ],
        attributes: {}
    },
    {
        name: "darkSpell",
        displayName: "ダークスペル",
        icon: dragonknight_dark_spell,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "3秒間対象を寝かせます。対象はダメージを受ければ覚める。",
            "6秒間対象を寝かせます。対象はダメージを受ければ覚める。",
            "9秒間対象を寝かせます。対象はダメージを受ければ覚める。",
            "12秒間対象を寝かせます。対象はダメージを受ければ覚める。",
            "15秒間対象を寝かせます。対象はダメージを受ければ覚める。",
            "20秒間対象を寝かせます。対象はダメージを受ければ覚める。",
            "25秒間対象を寝かせます。対象はダメージを受ければ覚める。",
        ],
        attributes: {}
    },

    {
        name: "lunacy",
        displayName: "ルナシィ",
        icon: dragonknight_lunacy,
        category: "Passive",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "イボルブ状態での攻撃速度を15%増加させます。",
            "イボルブ状態での攻撃速度を20%増加させます。",
            "イボルブ状態での攻撃速度を25%増加させます。",
            "イボルブ状態での攻撃速度を30%増加させます。",
            "イボルブ状態での攻撃速度を35%増加させます。",
            "イボルブ状態での攻撃速度を40%増加させます。",
            "イボルブ状態での攻撃速度を70%増加させます。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 15,
            },
            1: {
                multiplyAttackSpeed: 20,
            },
            2: {
                multiplyAttackSpeed: 25,
            },
            3: {
                multiplyAttackSpeed: 30,
            },
            4: {
                multiplyAttackSpeed: 35,
            },
            5: {
                multiplyAttackSpeed: 40,
            },
            6: {
                multiplyAttackSpeed: 70,
            }
        }
    },
    {
        name: "dragonNail",
        displayName: "ドラゴンネイル",
        icon: dragonknight_dragon_nail,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "イボルブ状態の時、通常攻撃で対象を1％の確率で1秒間スタンさせる。(パッシブ)",
            "イボルブ状態の時、通常攻撃で対象を2％の確率で1秒間スタンさせる。(パッシブ)",
            "イボルブ状態の時、通常攻撃で対象を3％の確率で1秒間スタンさせる。(パッシブ)",
            "イボルブ状態の時、通常攻撃で対象を4％の確率で1秒間スタンさせる。(パッシブ)",
            "イボルブ状態の時、通常攻撃で対象を6％の確率で1秒間スタンさせる。(パッシブ)",
            "イボルブ状態の時、通常攻撃で対象を7％の確率で1秒間スタンさせる。(パッシブ)",
            "イボルブ状態の時、通常攻撃で対象を10％の確率で1秒間スタンさせる。(パッシブ)"
        ],
        attributes: {}
    },
    {
        name: "doubleForefootSwing",
        displayName: "ダブルフォアフットスウィング",
        icon: dragonknight_double_forefoot_swing,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "HP20%消耗、消耗したHPの20%*2を対象にダメージとして与えます。",
            "HP20%消耗、消耗したHPの30%*2を対象にダメージとして与えます。",
            "HP20%消耗、消耗したHPの40%*2を対象にダメージとして与えます。",
            "HP20%消耗、消耗したHPの50%*2を対象にダメージとして与えます。",
            "HP18%消耗、消耗したHPの75%*2を対象にダメージとして与えます。",
            "HP15%消耗、消耗したHPの120%*2を対象にダメージとして与えます。",
            "HP12%消耗、消耗したHPの200%*2を対象にダメージとして与えます。",
        ],
        attributes: {}
    },
    {
        name: "divideFlow",
        displayName: "ディバイドフロー",
        icon: dragonknight_divide_flow,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象とその周囲の敵3体に30%ほど増加したダメージを与え、3秒間スタンにさせる。",
            "対象とその周囲の敵4体に50%ほど増加したダメージを与え、3秒間スタンにさせる。",
            "対象とその周囲の敵5体に70%ほど増加したダメージを与え、4秒間スタンにさせる。",
            "対象とその周囲の敵6体に90%ほど増加したダメージを与え、5秒間スタンにさせる。",
            "対象とその周囲の敵7体に120%ほど増加したダメージを与え、6秒間スタンにさせる。",
            "対象とその周囲の敵8体に150%ほど増加したダメージを与え、7秒間スタンにさせる。",
            "対象とその周囲の敵9体に200%ほど増加したダメージを与え、7秒間スタンにさせる。",
        ],
        attributes: {}
    },
    {
        name: "elderBloodAwake",
        displayName: "エルダーブラッドアウェイク",
        icon: dragonknight_elder_blood_awake,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間一般攻撃で受けるダメージを30%減少。",
            "60秒間一般攻撃で受けるダメージを35%減少。",
            "60秒間一般攻撃で受けるダメージを40%減少。",
            "60秒間一般攻撃で受けるダメージを45%減少。",
            "60秒間一般攻撃で受けるダメージを50%減少。",
            "60秒間一般攻撃で受けるダメージを60%減少。",
            "60秒間一般攻撃で受けるダメージを80%減少。",
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTaken: 30,
            },
            1: {
                multiplyDecreaseDamageTaken: 35,
            },
            2: {
                multiplyDecreaseDamageTaken: 40,
            },
            3: {
                multiplyDecreaseDamageTaken: 45,
            },
            4: {
                multiplyDecreaseDamageTaken: 50,
            },
            5: {
                multiplyDecreaseDamageTaken: 60,
            },
            6: {
                multiplyDecreaseDamageTaken: 80,
            }
        }
    }

]