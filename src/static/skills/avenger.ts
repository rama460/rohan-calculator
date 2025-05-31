import { Skill } from "./skill";

import avenger_free_up from "../../assets/skills/avenger/D_AV_free_up.gif";
import avenger_blind_attack from "../../assets/skills/avenger/D_AV_blind_attack.gif";
import avenger_katar_mastery from "../../assets/skills/avenger/D_AV_katar_mastery.gif";
import avenger_laual_spa from "../../assets/skills/avenger/D_AV_laual_spa.gif";
import avenger_idler_trap from "../../assets/skills/avenger/D_AV_idler_trap.gif";
import avenger_sealing_square from "../../assets/skills/avenger/D_AV_sealing_square.gif";
import avenger_doom_trap from "../../assets/skills/avenger/D_AV_doom_trap.gif";
import avenger_steel_illusion_trap from "../../assets/skills/avenger/D_AV_steel_illusion_trap.gif";
import avenger_health_burn from "../../assets/skills/avenger/D_AV_health_burn.gif";
import avenger_steel_strength_trap from "../../assets/skills/avenger/D_AV_steel_strength_trap.gif";
import avenger_secret_hide from "../../assets/skills/avenger/D_AV_secret_hide.gif";
import avenger_death_call from "../../assets/skills/avenger/D_AV_death_call.gif";
import avenger_polluting_blood from "../../assets/skills/avenger/D_AV_polluting_blood.gif";
import avenger_duplicate_critical from "../../assets/skills/avenger/D_AV_duplicate_critical.gif";
import avenger_exchange_mind from "../../assets/skills/avenger/D_AV_exchange_mind.gif";
import avenger_double_psychic_phantom from "../../assets/skills/avenger/D_AV_double_psychic_phantom.gif";
import avenger_suicide from "../../assets/skills/avenger/D_AV_suicide.gif";
import avenger_shadow from "../../assets/skills/avenger/D_AV_shadow.gif";
import avenger_storm_assault from "../../assets/skills/avenger/D_AV_storm_assault.gif";
import avenger_crowns_laughter from "../../assets/skills/avenger/D_AV_crowns_laughter.gif";

export const avenger_skills: Skill[] = [
    {
        name: "freeUp",
        displayName: "フリーアップ",
        icon: avenger_free_up,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "ルート状態を解除。"
        ],
        attributes: {}
    },
    {
        name: "blindAttack",
        displayName: "ブラインドアタック",
        icon: avenger_blind_attack,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "レベルの100%ダメージ。対象の命中率を持続時間中3%減少。",
            "レベルの200%ダメージ。対象の命中率を持続時間中6%減少。",
            "レベルの300%ダメージ。対象の命中率を持続時間中9%減少。",
            "レベルの400%ダメージ。対象の命中率を持続時間中12%減少。",
            "レベルの500%ダメージ。対象の命中率を持続時間中15%減少。",
            "レベルの600%ダメージ。対象の命中率を持続時間中18%減少。",
            "レベルの700%ダメージ。対象の命中率を持続時間中21%減少。",
        ],
        attributes: {}
    },
    {
        name: "katarMastery",
        displayName: "カタールマスタリー",
        icon: avenger_katar_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、カタール及びオプション攻撃力が41%増加。瞬発力の10%ほど近距離攻撃力が増加。",
            "21分間、カタール及びオプション攻撃力が82%増加。瞬発力の20%ほど近距離攻撃力が増加。",
            "24分間、カタール及びオプション攻撃力が124%増加。瞬発力の30%ほど近距離攻撃力が増加。",
            "27分間、カタール及びオプション攻撃力が165%増加。瞬発力の40%ほど近距離攻撃力が増加。",
            "30分間、カタール及びオプション攻撃力が206%増加。瞬発力の50%ほど近距離攻撃力が増加。",
            "30分間、カタール及びオプション攻撃力が288%増加。瞬発力の70%ほど近距離攻撃力が増加。",
            "120分間、カタール及びオプション攻撃力が412%増加。瞬発力の100%ほど近距離攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 41,
                plusMeleeAttackMultiplyDexterity: 10,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 82,
                plusMeleeAttackMultiplyDexterity: 20,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 124,
                plusMeleeAttackMultiplyDexterity: 30,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 165,
                plusMeleeAttackMultiplyDexterity: 40,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 206,
                plusMeleeAttackMultiplyDexterity: 50,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 288,
                plusMeleeAttackMultiplyDexterity: 70,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 412,
                plusMeleeAttackMultiplyDexterity: 100,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "laualSpa",
        displayName: "ラウアルスパ",
        icon: avenger_laual_spa,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "10分間、乗り物の速度を20%速くします。"
        ],
        attributes: {
            0: {
                multiplyRideSpeed: 20,
            }
        }
    },
    {
        name: "idlerTrap",
        displayName: "アイドラートラップ",
        icon: avenger_idler_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲内の対象の移動速度を10%減少させます。",
            "30秒間、トラップ範囲内の対象の移動速度を15%減少させます。",
            "45秒間、トラップ範囲内の対象の移動速度を20%減少させます。",
            "45秒間、トラップ範囲内の対象の移動速度を25%減少させます。",
            "60秒間、トラップ範囲内の対象の移動速度を30%減少させます。",
            "60秒間、トラップ範囲内の対象の移動速度を40%減少させます。",
            "180秒間、トラップ範囲内の対象の移動速度を60%減少させます。",
        ],
        attributes: {}
    },
    {
        name: "sealingSquare",
        displayName: "シーリングスクエア",
        icon: avenger_sealing_square,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
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
        name: "doomTrap",
        displayName: "ドゥームトラップ",
        icon: avenger_doom_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲内の対象の全ての攻撃力を3%減少。",
            "30秒間、トラップ範囲内の対象の全ての攻撃力を6%減少。",
            "45秒間、トラップ範囲内の対象の全ての攻撃力を9%減少。",
            "45秒間、トラップ範囲内の対象の全ての攻撃力を12%減少。",
            "60秒間、トラップ範囲内の対象の全ての攻撃力を15%減少。",
            "60秒間、トラップ範囲内の対象の全ての攻撃力を20%減少。",
            "180秒間、トラップ範囲内の対象の全ての攻撃力を30%減少。",
        ],
        attributes: {}
    },
    {
        name: "steelIllusionTrap",
        displayName: "スチールイルージョントラップ",
        icon: avenger_steel_illusion_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲中の対象の瞬発力を10吸収します。",
            "30秒間、トラップ範囲中の対象の瞬発力を15吸収します。",
            "45秒間、トラップ範囲中の対象の瞬発力を20吸収します。",
            "45秒間、トラップ範囲中の対象の瞬発力を25吸収します。",
            "60秒間、トラップ範囲中の対象の瞬発力を30吸収します。",
            "60秒間、トラップ範囲中の対象の瞬発力を40吸収します。",
            "180秒間、トラップ範囲中の対象の瞬発力を100吸収します。",
        ],
        attributes: {}
    },
    {
        name: "healthBurn",
        displayName: "ヘルスバーン",
        icon: avenger_health_burn,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象のHPをレベルの200%ほど吸収し、レベルの300%ほど自分のHPに転換させます。追加で対象を3秒間スタン。",
            "対象のHPをレベルの300%ほど吸収し、レベルの400%ほど自分のHPに転換させます。追加で対象を3秒間スタン。",
            "対象のHPをレベルの400%ほど吸収し、レベルの500%ほど自分のHPに転換させます。追加で対象を4秒間スタン。",
            "対象のHPをレベルの500%ほど吸収し、レベルの600%ほど自分のHPに転換させます。追加で対象を4秒間スタン。",
            "対象のHPをレベルの600%ほど吸収し、レベルの700%ほど自分のHPに転換させます。追加で対象を5秒間スタン。",
            "対象のHPをレベルの700%ほど吸収し、レベルの800%ほど自分のHPに転換させます。追加で対象を6秒間スタン。",
            "対象のHPをレベルの800%ほど吸収し、レベルの900%ほど自分のHPに転換させます。追加で対象を6秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "steelStrengthTrap",
        displayName: "スティールストレングストラップ",
        icon: avenger_steel_strength_trap,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、トラップ範囲中の対象の力を10吸収します。",
            "30秒間、トラップ範囲中の対象の力を15吸収します。",
            "45秒間、トラップ範囲中の対象の力を20吸収します。",
            "45秒間、トラップ範囲中の対象の力を25吸収します。",
            "60秒間、トラップ範囲中の対象の力を30吸収します。",
            "60秒間、トラップ範囲中の対象の力を40吸収します。",
            "180秒間、トラップ範囲中の対象の力を100吸収します。",
        ],
        attributes: {}
    },
    {
        name: "secretHide",
        displayName: "シークレットハイド",
        icon: avenger_secret_hide,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "潜伏中に攻撃をした時、10%の確率でハイドが解けない。",
            "潜伏中に攻撃をした時、20%の確率でハイドが解けない。",
            "潜伏中に攻撃をした時、30%の確率でハイドが解けない。",
            "潜伏中に攻撃をした時、40%の確率でハイドが解けない。",
            "潜伏中に攻撃をした時、50%の確率でハイドが解けない。",
            "潜伏中に攻撃をした時、60%の確率でハイドが解けない。",
            "潜伏中に攻撃をした時、70%の確率でハイドが解けない。",
        ],
        attributes: {}
    },
    {
        name: "deathCall",
        displayName: "デスコール",
        icon: avenger_death_call,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "5メートル離れた対象を詠唱者の前に引き寄せ、2秒間麻痺。",
            "7メートル離れた対象を詠唱者の前に引き寄せ、2秒間麻痺。",
            "10メートル離れた対象を詠唱者の前に引き寄せ、2秒間麻痺。",
            "12メートル離れた対象を詠唱者の前に引き寄せ、3秒間麻痺。",
            "15メートル離れた対象を詠唱者の前に引き寄せ、3秒間麻痺。",
            "15メートル離れた対象を詠唱者の前に引き寄せ、4秒間麻痺。",
            "15メートル離れた対象を詠唱者の前に引き寄せ、4秒間麻痺。",
        ],
        attributes: {}
    },
    {
        name: "pollutingBlood",
        displayName: "ポリューティングブラッド",
        icon: avenger_polluting_blood,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象が10秒以内に解毒できない場合、3秒毎に使用者のレベルの200%に値するHPを減少させます。",
            "対象が10秒以内に解毒できない場合、3秒毎に使用者のレベルの300%に値するHPを減少させます。",
            "対象が10秒以内に解毒できない場合、3秒毎に使用者のレベルの400%に値するHPを減少させます。",
            "対象が7秒以内に解毒できない場合、3秒毎に使用者のレベルの500%に値するHPを減少させます。",
            "対象が7秒以内に解毒できない場合、3秒毎に使用者のレベルの600%に値するHPを減少させます。",
            "対象が7秒以内に解毒できない場合、3秒毎に使用者のレベルの700%に値するHPを減少させます。",
            "対象が7秒以内に解毒できない場合、3秒毎に使用者のレベルの800%に値するHPを減少させます。",
        ],
        attributes: {}
    },
    {
        name: "duplicateCritical",
        displayName: "デュプリケイトクリティカル",
        icon: avenger_duplicate_critical,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に20%の確率でクリティカル攻撃を2回行う。",
            "対象に25%の確率でクリティカル攻撃を2回行う。",
            "対象に30%の確率でクリティカル攻撃を2回行う。",
            "対象に35%の確率でクリティカル攻撃を2回行う。",
            "対象に40%の確率でクリティカル攻撃を2回行う。",
            "対象に50%の確率でクリティカル攻撃を2回行う。",
            "対象に100%の確率でクリティカル攻撃を2回行う。",
        ],
        attributes: {}
    },
    {
        name: "exchangeMind",
        displayName: "エクスチェンジマインド",
        icon: avenger_exchange_mind,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20%の確率で10秒間対象のHP100%とMP300%を逆転。",
            "25%の確率で10秒間対象のHP100%とMP280%を逆転。",
            "30%の確率で10秒間対象のHP100%とMP260%を逆転。",
            "35%の確率で10秒間対象のHP100%とMP240%を逆転。",
            "40%の確率で10秒間対象のHP100%とMP220%を逆転。",
            "50%の確率で10秒間対象のHP100%とMP200%を逆転。",
            "50%の確率で10秒間対象のHP100%とMP180%を逆転。",
        ],
        attributes: {}
    },
    {
        name: "doublePsychicPhantom",
        displayName: "ダブルサイキックファントム",
        icon: avenger_double_psychic_phantom,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に50%増加した攻撃を2回行う。",
            "対象に60%増加した攻撃を2回行う。",
            "対象に70%増加した攻撃を2回行う。",
            "対象に80%増加した攻撃を2回行う。",
            "対象に90%増加した攻撃を2回行う。",
            "対象に100%増加した攻撃を2回行う。",
            "対象に110%増加した攻撃を2回行う。",
        ],
        attributes: {}
    },
    {
        name: "suicide",
        displayName: "スイサイド",
        icon: avenger_suicide,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20%の確率で7メートル以内にいる敵の中で80レベル以下の敵1人と自殺。",
            "30%の確率で7メートル以内にいる敵の中で85レベル以下の敵1人と自殺。",
            "30%の確率で7メートル以内にいる敵の中で90レベル以下の敵2人と自殺。",
            "40%の確率で7メートル以内にいる敵の中で95レベル以下の敵2人と自殺。",
            "40%の確率で7メートル以内にいる敵の中で100レベル以下の敵3人と自殺。",
            "50%の確率で7メートル以内にいる敵の中で115レベル以下の敵3人と自殺。",
            "50%の確率で7メートル以内にいる敵の中で115レベル以下の敵4人と自殺。",
        ],
        attributes: {}
    },
    {
        name: "shadow",
        displayName: "シャドー",
        icon: avenger_shadow,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、状態異常に抵抗。",
            "13秒間、状態異常に抵抗。",
            "16秒間、状態異常に抵抗。",
            "19秒間、状態異常に抵抗。",
            "22秒間、状態異常に抵抗。",
            "25秒間、状態異常に抵抗。",
            "35秒間、状態異常に抵抗。",
        ],
        attributes: {}
    },
    {
        name: "stormAssault",
        displayName: "ストームアサルト",
        icon: avenger_storm_assault,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、攻撃する度にダメージの3%を累積して次の攻撃のダメージを増加。20%の確率で物理攻撃を防ぐ。",
            "20秒間、攻撃する度にダメージの4%を累積して次の攻撃のダメージを増加。25%の確率で物理攻撃を防ぐ。",
            "20秒間、攻撃する度にダメージの5%を累積して次の攻撃のダメージを増加。30%の確率で物理攻撃を防ぐ。",
            "20秒間、攻撃する度にダメージの6%を累積して次の攻撃のダメージを増加。35%の確率で物理攻撃を防ぐ。",
            "20秒間、攻撃する度にダメージの7%を累積して次の攻撃のダメージを増加。40%の確率で物理攻撃を防ぐ。",
            "20秒間、攻撃する度にダメージの8%を累積して次の攻撃のダメージを増加。45%の確率で物理攻撃を防ぐ。",
            "20秒間、攻撃する度にダメージの10%を累積して次の攻撃のダメージを増加。60%の確率で物理攻撃を防ぐ。",
        ],
        attributes: {}
    },
    {
        name: "crownsLaughter",
        displayName: "クラウンズラフター",
        icon: avenger_crowns_laughter,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、相手のダメージ減少を20%無視。",
            "60秒間、相手のダメージ減少を25%無視。",
            "60秒間、相手のダメージ減少を30%無視。",
            "60秒間、相手のダメージ減少を35%無視。",
            "60秒間、相手のダメージ減少を40%無視。",
            "60秒間、相手のダメージ減少を50%無視。",
            "60秒間、相手のダメージ減少を70%無視。",
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTakenPenetration: 20,
            },
            1: {
                multiplyDecreaseDamageTakenPenetration: 25,
            },
            2: {
                multiplyDecreaseDamageTakenPenetration: 30,
            },
            3: {
                multiplyDecreaseDamageTakenPenetration: 35,
            },
            4: {
                multiplyDecreaseDamageTakenPenetration: 40,
            },
            5: {
                multiplyDecreaseDamageTakenPenetration: 50,
            },
            6: {
                multiplyDecreaseDamageTakenPenetration: 70,
            }
        }
    }
]