import { Skill } from "./skill";

import scout_bow_mastery from "../../assets/skills/scout/sc_Bow_Mastery.gif";
import scout_melting from "../../assets/skills/scout/sc_Melting.gif";
import scout_ignore_aggro from "../../assets/skills/scout/sc_Ignore_Aggro.gif";
import scout_detect from "../../assets/skills/scout/sc_Detect.gif";
import scout_sharp_melee from "../../assets/skills/scout/sc_Sharp_Melee.gif";
import scout_alacrity_blow from "../../assets/skills/scout/sc_Alacrity_Blow.gif";
import scout_combine_shot from "../../assets/skills/scout/sc_Combine_Shot.gif";
import scout_multi_shot from "../../assets/skills/scout/sc_Multi_Shot.gif";
import scout_kaels_arrow from "../../assets/skills/scout/sc_Kaels_Arrow.gif";
import scout_drill_shot from "../../assets/skills/scout/sc_Drill_Shot.gif";
import scout_violent_shot from "../../assets/skills/scout/sc_Violent_Shot.gif";
import scout_ghost_arrow from "../../assets/skills/scout/sc_Ghost_Arrow.gif";
import scout_premium_shot from "../../assets/skills/scout/sc_Premium_Shot.gif";
import scout_rain_shot from "../../assets/skills/scout/sc_Rain_Shot.gif";
import scout_all_in_shot from "../../assets/skills/scout/sc_All_in_Shot.gif";
import scout_rank_shot from "../../assets/skills/scout/sc_Rank_Shot.gif";
import scout_pouring_shot from "../../assets/skills/scout/sc_Pouring_Shot.gif";
import scout_rainforce_action from "../../assets/skills/scout/sc_Rainforce_Action.gif";
import scout_scatter_shot from "../../assets/skills/scout/sc_Scatter_Shot.gif";
import scout_cataclysm from "../../assets/skills/scout/sc_Cataclysm.gif";



export const scout_skills: Skill[] = [
    {
        name: "bowMastery",
        displayName: "ボウマスタリー",
        icon: scout_bow_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、弓と矢及びオプション攻撃力が49%増加。敏捷性の29%ほど遠距離攻撃力増加。",
            "21分間、弓と矢及びオプション攻撃力が98%増加。敏捷性の57%ほど遠距離攻撃力増加。",
            "24分間、弓と矢及びオプション攻撃力が148%増加。敏捷性の86%ほど遠距離攻撃力増加。",
            "27分間、弓と矢及びオプション攻撃力が197%増加。敏捷性の114%ほど遠距離攻撃力増加。",
            "30分間、弓と矢及びオプション攻撃力が246%増加。敏捷性の143%ほど遠距離攻撃力増加。",
            "30分間、弓と矢及びオプション攻撃力が344%増加。敏捷性の200%ほど遠距離攻撃力増加。",
            "120分間、弓と矢及びオプション攻撃力が492%増加。敏捷性の286%ほど遠距離攻撃力増加。",
        ],
        attributes: {
            0: {
                multiplyRangeWeaponAttack: 49,
                plusRangeAttackMultiplyAgility: 29,
                rangeMastery: 1,
            },
            1: {
                multiplyRangeWeaponAttack: 98,
                plusRangeAttackMultiplyAgility: 57,
                rangeMastery: 1,
            },
            2: {
                multiplyRangeWeaponAttack: 148,
                plusRangeAttackMultiplyAgility: 86,
                rangeMastery: 1,
            },
            3: {
                multiplyRangeWeaponAttack: 197,
                plusRangeAttackMultiplyAgility: 114,
                rangeMastery: 1,
            },
            4: {
                multiplyRangeWeaponAttack: 246,
                plusRangeAttackMultiplyAgility: 143,
                rangeMastery: 1,
            },
            5: {
                multiplyRangeWeaponAttack: 344,
                plusRangeAttackMultiplyAgility: 200,
                rangeMastery: 1,
            },
            6: {
                multiplyRangeWeaponAttack: 492,
                plusRangeAttackMultiplyAgility: 286,
                rangeMastery: 1,
            }
        }
    },
    {
        name: "melting",
        displayName: "メルティング",
        icon: scout_melting,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "ルート、睡眠、麻痺状態を解除。"
        ],
        attributes: {}
    },
    {
        name: "ignoreAggro",
        displayName: "イグノアアグロ",
        icon: scout_ignore_aggro,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、モンスターに敵対心を10%減らして攻撃。",
            "20秒間、モンスターに敵対心を20%減らして攻撃。",
            "30秒間、モンスターに敵対心を30%減らして攻撃。",
            "40秒間、モンスターに敵対心を40%減らして攻撃。",
            "50秒間、モンスターに敵対心を50%減らして攻撃。",
            "60秒間、モンスターに敵対心を60%減らして攻撃。",
            "90秒間、モンスターに敵対心を70%減らして攻撃。"
        ],
        attributes: {}
    },
    {
        name: "detect",
        displayName: "ディテクト",
        icon: scout_detect,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、10メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
            "40秒間、11メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
            "50秒間、12メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
            "60秒間、13メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
            "70秒間、14メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
            "80秒間、15メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
            "90秒間、16メートル以内の姿を隠したプレーヤーまたはモンスターを感知。",
        ],
        attributes: {}
    },
    {
        name: "sharpMelee",
        displayName: "シャープメレー",
        icon: scout_sharp_melee,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、5メートル内の対象に10%増加したダメージを与えます。",
            "5分間、5メートル内の対象に13%増加したダメージを与えます。",
            "5分間、5メートル内の対象に16%増加したダメージを与えます。",
            "10分間、5メートル内の対象に19%増加したダメージを与えます。",
            "10分間、5メートル内の対象に22%増加したダメージを与えます。",
            "10分間、7メートル内の対象に25%増加したダメージを与えます。",
            "30分間、10メートル内の対象に30%増加したダメージを与えます。",
        ],
        // TODO: implement custom option
        attributes: {}
    },
    {
        name: "alarityBlow",
        displayName: "アラクリティブロー",
        icon: scout_alacrity_blow,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 2,
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
        name: "combineShot",
        displayName: "コンバインショット",
        icon: scout_combine_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "自分のレベルの300%と対象のレベル500%を合わせた値だけ追加ダメージ。",
            "自分のレベルの400%と対象のレベル600%を合わせた値だけ追加ダメージ。",
            "自分のレベルの500%と対象のレベル700%を合わせた値だけ追加ダメージ。",
            "自分のレベルの600%と対象のレベル800%を合わせた値だけ追加ダメージ。",
            "自分のレベルの700%と対象のレベル900%を合わせた値だけ追加ダメージ。",
            "自分のレベルの800%と対象のレベル1000%を合わせた値だけ追加ダメージ。",
            "自分のレベルの1100%と対象のレベル1500%を合わせた値だけ追加ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "multiShot",
        displayName: "マルチショット",
        icon: scout_multi_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象とその周辺4体の敵に20%増加したダメージ。",
            "対象とその周辺4体の敵に40%増加したダメージ。",
            "対象とその周辺4体の敵に60%増加したダメージ。",
            "対象とその周辺4体の敵に80%増加したダメージ。",
            "対象とその周辺4体の敵に100%増加したダメージ。",
            "対象とその周辺4体の敵に120%増加したダメージ。",
            "対象とその周辺4体の敵に140%増加したダメージ。"
        ],
        attributes: {}
    },
    {
        name: "kaelsArrow",
        displayName: "カエールアロー",
        icon: scout_kaels_arrow,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "50秒間、矢の攻撃力が10%増加します。攻撃速度を10%増加させます。",
            "50秒間、矢の攻撃力が20%増加します。攻撃速度を12%増加させます。",
            "50秒間、矢の攻撃力が30%増加します。攻撃速度を14%増加させます。",
            "50秒間、矢の攻撃力が40%増加します。攻撃速度を16%増加させます。",
            "50秒間、矢の攻撃力が50%増加します。攻撃速度を18%増加させます。",
            "50秒間、矢の攻撃力が70%増加します。攻撃速度を20%増加させます。",
            "50秒間、矢の攻撃力が100%増加します。攻撃速度を25%増加させます。",
        ],
        attributes: {
            0: {
                multiplyShortTermArrowAttack: 10,
                multiplyAttackSpeed: 10,
            },
            1: {
                multiplyShortTermArrowAttack: 20,
                multiplyAttackSpeed: 12,
            },
            2: {
                multiplyShortTermArrowAttack: 30,
                multiplyAttackSpeed: 14,
            },
            3: {
                multiplyShortTermArrowAttack: 40,
                multiplyAttackSpeed: 16,
            },
            4: {
                multiplyShortTermArrowAttack: 50,
                multiplyAttackSpeed: 18,
            },
            5: {
                multiplyShortTermArrowAttack: 70,
                multiplyAttackSpeed: 20,
            },
            6: {
                multiplyShortTermArrowAttack: 100,
                multiplyAttackSpeed: 25,
            }
        }
    },
    {
        name: "drillShot",
        displayName: "ドリルショット",
        icon: scout_drill_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に100%増加したダメージ、一直線上の敵にも順番に30%ずつ減少したダメージ。",
            "対象に110%増加したダメージ、一直線上の敵にも順番に30%ずつ減少したダメージ。",
            "対象に120%増加したダメージ、一直線上の敵にも順番に30%ずつ減少したダメージ。",
            "対象に130%増加したダメージ、一直線上の敵にも順番に20%ずつ減少したダメージ。",
            "対象に140%増加したダメージ、一直線上の敵にも順番に20%ずつ減少したダメージ。",
            "対象に150%増加したダメージ、一直線上の敵にも順番に10%ずつ減少したダメージ。",
            "対象に160%増加したダメージ、一直線上の敵にも順番に5%ずつ減少したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "violentShot",
        displayName: "バイオレントショット",
        icon: scout_violent_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間、対象と周囲4体の敵に、3秒毎に50%のダメージの持続ダメージ。",
            "15秒間、対象と周囲5体の敵に、3秒毎に60%のダメージの持続ダメージ。",
            "21秒間、対象と周囲6体の敵に、3秒毎に60%のダメージの持続ダメージ。",
            "21秒間、対象と周囲7体の敵に、3秒毎に70%のダメージの持続ダメージ。",
            "30秒間、対象と周囲8体の敵に、3秒毎に70%のダメージの持続ダメージ。",
            "30秒間、対象と周囲9体の敵に、3秒毎に80%のダメージの持続ダメージ。",
            "30秒間、対象と周囲9体の敵に、3秒毎に140%のダメージの持続ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "ghostArrow",
        displayName: "ゴーストアロー",
        icon: scout_ghost_arrow,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者が受けるダメージを10%減少します。",
            "使用者が受けるダメージを12%減少します。",
            "使用者が受けるダメージを14%減少します。",
            "使用者が受けるダメージを18%減少します。",
            "使用者が受けるダメージを20%減少します。",
            "使用者が受けるダメージを24%減少します。",
            "使用者が受けるダメージを30%減少します。",
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTaken: 10,
            },
            1: {
                multiplyDecreaseDamageTaken: 12,
            },
            2: {
                multiplyDecreaseDamageTaken: 14,
            },
            3: {
                multiplyDecreaseDamageTaken: 18,
            },
            4: {
                multiplyDecreaseDamageTaken: 20,
            },
            5: {
                multiplyDecreaseDamageTaken: 24,
            },
            6: {
                multiplyDecreaseDamageTaken: 30,
            }
        }
    },
    {
        name: "premiumShot",
        displayName: "プレミアムショット",
        icon: scout_premium_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間使用者のスタン抵抗確率が10％増加。",
            "60秒間使用者のスタン抵抗確率が20％増加。",
            "60秒間使用者のスタン抵抗確率が30％増加。",
            "60秒間使用者のスタン抵抗確率が40％増加。",
            "60秒間使用者のスタン抵抗確率が50％増加。",
            "60秒間使用者のスタン抵抗確率が70％増加。",
            "60秒間使用者のスタン抵抗確率が100％増加。",
        ],
        attributes: {}
    },
    {
        name: "rainShot",
        displayName: "レインショット",
        icon: scout_rain_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象とその周辺の4人の敵に25%確率でクリティカルダメージ。",
            "対象とその周辺の4人の敵に30%確率でクリティカルダメージ。",
            "対象とその周辺の4人の敵に35%確率でクリティカルダメージ。",
            "対象とその周辺の4人の敵に40%確率でクリティカルダメージ。",
            "対象とその周辺の4人の敵に45%確率でクリティカルダメージ。",
            "対象とその周辺の4人の敵に50%確率でクリティカルダメージ。",
            "対象とその周辺の4人の敵に60%確率でクリティカルダメージ。"
        ],
        attributes: {}
    },
    {
        name: "allInShot",
        displayName: "オールインショット",
        icon: scout_all_in_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の105%)",
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の140%)",
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の175%)",
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の210%)",
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の245%)",
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の280%)",
            "7回に及んでダメージを与える。(ダメージの合計は一般攻撃の315%)"
        ],
        attributes: {}
    },
    {
        name: "rankShot",
        displayName: "ランクショット",
        icon: scout_rank_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間使用者のPVP防御がを1%増加します。",
            "21分間使用者のPVP防御がを2%増加します。",
            "24分間使用者のPVP防御がを3%増加します。",
            "27分間使用者のPVP防御がを4%増加します。",
            "30分間使用者のPVP防御がを5%増加します。",
            "30分間使用者のPVP防御がを7%増加します。",
            "120分間使用者のPVP防御がを10%増加します。",
        ],
        attributes: {
            0: {
                multiplyPVPDefense: 1,
            },
            1: {
                multiplyPVPDefense: 2,
            },
            2: {
                multiplyPVPDefense: 3,
            },
            3: {
                multiplyPVPDefense: 4,
            },
            4: {
                multiplyPVPDefense: 5,
            },
            5: {
                multiplyPVPDefense: 7,
            },
            6: {
                multiplyPVPDefense: 10,
            }
        }
    },
    {
        name: "pouringShot",
        displayName: "ポアリングショット",
        icon: scout_pouring_shot,
        category: "Attack",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象とその周辺4体の敵に防御力を無視して20%増加したダメージを負わせます。",
            "対象とその周辺5体の敵に防御力を無視して30%増加したダメージを負わせます。",
            "対象とその周辺6体の敵に防御力を無視して40%増加したダメージを負わせます。",
            "対象とその周辺7体の敵に防御力を無視して50%増加したダメージを負わせます。",
            "対象とその周辺8体の敵に防御力を無視して60%増加したダメージを負わせます。",
            "対象とその周辺9体の敵に防御力を無視して80%増加したダメージを負わせます。",
            "対象とその周辺9体の敵に防御力を無視して100%増加したダメージを負わせます。",
        ],
        attributes: {}
    },
    {
        name: "rainforceAction",
        displayName: "レインフォースアクション",
        icon: scout_rainforce_action,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、範囲スキルダメージを10%増加させます。",
            "21分間、範囲スキルダメージを20%増加させます。",
            "24分間、範囲スキルダメージを30%増加させます。",
            "27分間、範囲スキルダメージを40%増加させます。",
            "30分間、範囲スキルダメージを50%増加させます。",
            "30分間、範囲スキルダメージを60%増加させます。",
            "60分間、範囲スキルダメージを80%増加させます。",
        ],
        attributes: {
            0: {
                multiplyRangeSkillDamage: 10,
            },
            1: {
                multiplyRangeSkillDamage: 20,
            },
            2: {
                multiplyRangeSkillDamage: 30,
            },
            3: {
                multiplyRangeSkillDamage: 40,
            },
            4: {
                multiplyRangeSkillDamage: 50,
            },
            5: {
                multiplyRangeSkillDamage: 60,
            },
            6: {
                multiplyRangeSkillDamage: 80,
            }
        }
    },
    {
        name: "scatterShot",
        displayName: "スケッターショット",
        icon: scout_scatter_shot,
        category: "Other",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、通常攻撃を範囲化、攻撃対象に敵2体を追加、ダメージ2%増加",
            "21分間、通常攻撃を範囲化、攻撃対象に敵2体を追加、ダメージ4%増加",
            "24分間、通常攻撃を範囲化、攻撃対象に敵3体を追加、ダメージ6%増加",
            "27分間、通常攻撃を範囲化、攻撃対象に敵3体を追加、ダメージ8%増加",
            "30分間、通常攻撃を範囲化、攻撃対象に敵4体を追加、ダメージ10%増加",
            "30分間、通常攻撃を範囲化、攻撃対象に敵4体を追加、ダメージ15%増加",
            "120分間、通常攻撃を範囲化、攻撃対象に敵5体を追加、ダメージ20%増加",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: 2,
            },
            1: {
                multiplyIncreaseDamageDealt: 4,
            },
            2: {
                multiplyIncreaseDamageDealt: 6,
            },
            3: {
                multiplyIncreaseDamageDealt: 8,
            },
            4: {
                multiplyIncreaseDamageDealt: 10,
            },
            5: {
                multiplyIncreaseDamageDealt: 15,
            },
            6: {
                multiplyIncreaseDamageDealt: 20,
            }
        }
    },
    {
        name: "cataclysm",
        displayName: "カタクリズム",
        icon: scout_cataclysm,
        category: "Buff",
        origin: "Self",
        raceid: 2,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間攻撃力を70%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
            "60秒間攻撃力を80%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
            "60秒間攻撃力を90%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
            "60秒間攻撃力を100%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
            "60秒間攻撃力を110%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
            "60秒間攻撃力を120%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
            "60秒間攻撃力を150%増加し、スキル攻撃命中時に対象の特殊バフを1つ削除する。",
        ],
        attributes: {
            0: {
                multiplyAttack: 70,
            },
            1: {
                multiplyAttack: 80,
            },
            2: {
                multiplyAttack: 90,
            },
            3: {
                multiplyAttack: 100,
            },
            4: {
                multiplyAttack: 110,
            },
            5: {
                multiplyAttack: 120,
            },
            6: {
                multiplyAttack: 150,
            }
        }
    },
]