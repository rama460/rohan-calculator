import { Skill } from "./skill";

import rumior_arrendal_mastery from "../../assets/skills/rumior/ME_R_Arrendal_Mastery.gif";
import rumior_prism_spear from "../../assets/skills/rumior/ME_R_Prism_Spear.gif";
import rumior_trinity_force from "../../assets/skills/rumior/ME_R_Trinity_Force.gif";
import rumior_nature_unity from "../../assets/skills/rumior/ME_R_Nature_Unity.gif";
import rumior_light_trace from "../../assets/skills/rumior/ME_R_Light_Trace.gif";
import rumior_favor_of_tree from "../../assets/skills/rumior/ME_R_Favor_Of_Tree.gif";
import rumior_vine_protection from "../../assets/skills/rumior/ME_R_Vine_Protection.gif";
import rumior_pulse_setting_light from "../../assets/skills/rumior/ME_R_Pulse_Setting_Light.gif";
import rumior_blessed_crown from "../../assets/skills/rumior/ME_R_Blessed_Crown.gif";
import rumior_mana_bowming from "../../assets/skills/rumior/ME_R_Mana_Bowming.gif";
import rumior_sanctuary from "../../assets/skills/rumior/ME_R_Sanctuary.gif";
import rumior_life_circulation from "../../assets/skills/rumior/ME_R_Life_Circulation.gif";
import rumior_cozal_loop from "../../assets/skills/rumior/ME_R_Cozal_Loop.gif";
import rumior_growth_acceleration from "../../assets/skills/rumior/ME_R_Growth_Acceleration.gif";
import rumior_lightning_swift from "../../assets/skills/rumior/ME_R_Lightning_Swift.gif";
import rumior_revive_force from "../../assets/skills/rumior/ME_R_Revive_Force.gif";
import rumior_spirit_assimilation from "../../assets/skills/rumior/ME_R_Spirit_Assimilation.gif";
import rumior_absolute_flash from "../../assets/skills/rumior/ME_R_Absolute_Flash.gif";
import rumior_eternal_aria from "../../assets/unknown.png";

export const rumior_skills: Skill[] = [
    {
        name: "arrendalMastery",
        displayName: "アレンダルマスタリー",
        icon: rumior_arrendal_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "アレンダル及びオプション攻撃力が40%増加。精神力の25%ほど魔法攻撃力が増加。ヒール回復量が20%増加。",
            "アレンダル及びオプション攻撃力が79%増加。精神力の50%ほど魔法攻撃力が増加。ヒール回復量が40%増加。",
            "アレンダル及びオプション攻撃力が118%増加。精神力の75%ほど魔法攻撃力が増加。ヒール回復量が60%増加。",
            "アレンダル及びオプション攻撃力が158%増加。精神力の99%ほど魔法攻撃力が増加。ヒール回復量が80%増加。",
            "アレンダル及びオプション攻撃力が197%増加。精神力の125%ほど魔法攻撃力が増加。ヒール回復量が100%増加。",
            "アレンダル及びオプション攻撃力が276%増加。精神力の174%ほど魔法攻撃力が増加。ヒール回復量が120%増加。",
            "アレンダル及びオプション攻撃力が394%増加。精神力の249%ほど魔法攻撃力が増加。ヒール回復量が150%増加。",
        ],
        attributes: {
            0: {
                multiplyMagicWeaponAttack: 40,
                plusMagicAttackMultiplyMentality: 25,
                multiplyHealingAmount: 20,
                magicMastery: 1,
            },
            1: {
                multiplyMagicWeaponAttack: 79,
                plusMagicAttackMultiplyMentality: 50,
                multiplyHealingAmount: 40,
                magicMastery: 1,
            },
            2: {
                multiplyMagicWeaponAttack: 118,
                plusMagicAttackMultiplyMentality: 75,
                multiplyHealingAmount: 60,
                magicMastery: 1,
            },
            3: {
                multiplyMagicWeaponAttack: 158,
                plusMagicAttackMultiplyMentality: 99,
                multiplyHealingAmount: 80,
                magicMastery: 1,
            },
            4: {
                multiplyMagicWeaponAttack: 197,
                plusMagicAttackMultiplyMentality: 125,
                multiplyHealingAmount: 100,
                magicMastery: 1,
            },
            5: {
                multiplyMagicWeaponAttack: 276,
                plusMagicAttackMultiplyMentality: 174,
                multiplyHealingAmount: 120,
                magicMastery: 1,
            },
            6: {
                multiplyMagicWeaponAttack: 394,
                plusMagicAttackMultiplyMentality: 249,
                multiplyHealingAmount: 150,
                magicMastery: 1,
            }
        }
    },
    {
        name: "prismSpear",
        displayName: "プリズムスピア",
        icon: rumior_prism_spear,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、通常攻撃を範囲化し、攻撃対象に敵2体追加します。さらに攻撃速度が20%増加します。",
            "21分間、通常攻撃を範囲化し、攻撃対象に敵2体追加します。さらに攻撃速度が25%増加します。",
            "24分間、通常攻撃を範囲化し、攻撃対象に敵3体追加します。さらに攻撃速度が30%増加します。",
            "27分間、通常攻撃を範囲化し、攻撃対象に敵3体追加します。さらに攻撃速度が35%増加します。",
            "30分間、通常攻撃を範囲化し、攻撃対象に敵4体追加します。さらに攻撃速度が40%増加します。",
            "30分間、通常攻撃を範囲化し、攻撃対象に敵4体追加します。さらに攻撃速度が50%増加します。",
            "120分間、通常攻撃を範囲化し、攻撃対象に敵5体追加します。さらに攻撃速度が70%増加します。",
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
        name: "trinityForce",
        displayName: "トリニティフォース",
        icon: rumior_trinity_force,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、通常攻撃の命中時にTPを100生成。",
            "18分間、通常攻撃の命中時にTPを125生成。",
            "21分間、通常攻撃の命中時にTPを150生成。",
            "24分間、通常攻撃の命中時にTPを175生成。",
            "27分間、通常攻撃の命中時にTPを200生成。",
            "30分間、通常攻撃の命中時にTPを225生成。",
            "120分間、通常攻撃の命中時にTPを300生成。",
        ],
        attributes: {}
    },
    {
        name: "blackSideForce",
        displayName: "ブラックサイドフォース",
        icon: rumior_trinity_force,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "一部の回復系スキル「ライトトレース/パルセイティングライト/サンクチュアリ/コーザルループ」を攻撃スキルとして使用可能。",
        ],
        attributes: {}
    },
    {
        name: "natureUnity",
        displayName: "ネイチャーユニティ",
        icon: rumior_nature_unity,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "45秒間、スタンとルート状態に抵抗。"
        ],
        attributes: {}
    },
    {
        name: "lightTrace",
        displayName: "ライトトレース",
        icon: rumior_light_trace,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "基本回復量に精神力の100％ほど増加した数値のHPを即時回復。20TPを生成。",
            "基本回復量に精神力の120％ほど増加した数値のHPを即時回復。30TPを生成。",
            "基本回復量に精神力の150％ほど増加した数値のHPを即時回復。40TPを生成。",
            "基本回復量に精神力の180％ほど増加した数値のHPを即時回復。50TPを生成。",
            "基本回復量に精神力の210％ほど増加した数値のHPを即時回復。60TPを生成。",
            "基本回復量に精神力の250％ほど増加した数値のHPを即時回復。70TPを生成。",
            "基本回復量に精神力の300％ほど増加した数値のHPを即時回復。100TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "blackSideTrace",
        displayName: "ブラックサイドトレース",
        icon: rumior_light_trace,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "魔法攻撃力に精神力の100％ほど増加したダメージ。",
            "魔法攻撃力に精神力の120％ほど増加したダメージ。",
            "魔法攻撃力に精神力の150％ほど増加したダメージ。",
            "魔法攻撃力に精神力の180％ほど増加したダメージ。",
            "魔法攻撃力に精神力の210％ほど増加したダメージ。",
            "魔法攻撃力に精神力の250％ほど増加したダメージ。",
            "魔法攻撃力に精神力の300％ほど増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "favorOfTree",
        displayName: "フェイバーオブツリー",
        icon: rumior_favor_of_tree,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、使用者の体力を精神力の10%ほど増加します。",
            "18分間、使用者の体力を精神力の13%ほど増加します。",
            "21分間、使用者の体力を精神力の16%ほど増加します。",
            "24分間、使用者の体力を精神力の20%ほど増加します。",
            "27分間、使用者の体力を精神力の25%ほど増加します。",
            "30分間、使用者の体力を精神力の30%ほど増加します。",
            "120分間、使用者の体力を精神力の40%ほど増加します。",
        ],
        attributes: {
            0: {
                'plusVitalityMultiplyMentality': 10,
            },
            1: {
                'plusVitalityMultiplyMentality': 13,
            },
            2: {
                'plusVitalityMultiplyMentality': 16,
            },
            3: {
                'plusVitalityMultiplyMentality': 20,
            },
            4: {
                'plusVitalityMultiplyMentality': 25,
            },
            5: {
                'plusVitalityMultiplyMentality': 30,
            },
            6: {
                'plusVitalityMultiplyMentality': 40,
            }
        }
    },
    {
        name: "vineProtection",
        displayName: "ヴァインプロテクション",
        icon: rumior_vine_protection,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、使用者が受けるダメージを10%減少させ、精神力を10%増加させます。",
            "18分間、使用者が受けるダメージを12%減少させ、精神力を15%増加させます。",
            "21分間、使用者が受けるダメージを14%減少させ、精神力を20%増加させます。",
            "24分間、使用者が受けるダメージを16%減少させ、精神力を25%増加させます。",
            "27分間、使用者が受けるダメージを18%減少させ、精神力を30%増加させます。",
            "30分間、使用者が受けるダメージを20%減少させ、精神力を40%増加させます。",
            "120分間、使用者が受けるダメージを25%減少させ、精神力を60%増加させます。",
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTaken: 10,
                multiplyMentality: 10,
            },
            1: {
                multiplyDecreaseDamageTaken: 12,
                multiplyMentality: 15,
            },
            2: {
                multiplyDecreaseDamageTaken: 14,
                multiplyMentality: 20,
            },
            3: {
                multiplyDecreaseDamageTaken: 16,
                multiplyMentality: 25,
            },
            4: {
                multiplyDecreaseDamageTaken: 18,
                multiplyMentality: 30,
            },
            5: {
                multiplyDecreaseDamageTaken: 20,
                multiplyMentality: 40,
            },
            6: {
                multiplyDecreaseDamageTaken: 25,
                multiplyMentality: 60,
            }
        }
    },
    {
        name: "pulseSettingLight",
        displayName: "パルセイティングライト",
        icon: rumior_pulse_setting_light,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "9秒間、3秒ごとに基本回復量に精神力の150%ほど増加した数値に値するHPを回復。50TPを生成。",
            "12秒間、3秒ごとに基本回復量に精神力の180%ほど増加した数値に値するHPを回復。70TPを生成。",
            "15秒間、3秒ごとに基本回復量に精神力の210%ほど増加した数値に値するHPを回復。90TPを生成。",
            "18秒間、3秒ごとに基本回復量に精神力の240%ほど増加した数値に値するHPを回復。110TPを生成。",
            "21秒間、3秒ごとに基本回復量に精神力の270%ほど増加した数値に値するHPを回復。130TPを生成。",
            "24秒間、3秒ごとに基本回復量に精神力の300%ほど増加した数値に値するHPを回復。150TPを生成。",
            "30秒間、3秒ごとに基本回復量に精神力の350%ほど増加した数値に値するHPを回復。200TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "blackSideOfLight",
        displayName: "ブラックサイドオブライト",
        icon: rumior_pulse_setting_light,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "9秒間、3秒ごとに魔法攻撃力に精神力の150%ほど増加したダメージ。",
            "12秒間、3秒ごとに魔法攻撃力に精神力の180%ほど増加したダメージ。",
            "15秒間、3秒ごとに魔法攻撃力に精神力の210%ほど増加したダメージ。",
            "18秒間、3秒ごとに魔法攻撃力に精神力の240%ほど増加したダメージ。",
            "21秒間、3秒ごとに魔法攻撃力に精神力の270%ほど増加したダメージ。",
            "24秒間、3秒ごとに魔法攻撃力に精神力の300%ほど増加したダメージ。",
            "30秒間、3秒ごとに魔法攻撃力に精神力の350%ほど増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "blessedCrown",
        displayName: "ブレスドクラウン",
        icon: rumior_blessed_crown,
        category: "Buff",
        origin: "Group",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、パーティーメンバーの全ての能力値を3%増加させます。",
            "18分間、パーティーメンバーの全ての能力値を6%増加させます。",
            "21分間、パーティーメンバーの全ての能力値を9%増加させます。",
            "24分間、パーティーメンバーの全ての能力値を12%増加させます。",
            "27分間、パーティーメンバーの全ての能力値を15%増加させます。",
            "30分間、パーティーメンバーの全ての能力値を20%増加させます。",
            "120分間、パーティーメンバーの全ての能力値を25%増加させます。",
        ],
        attributes: {
            0: {
                multiplyAllStatus: 3,
            },
            1: {
                multiplyAllStatus: 6,
            },
            2: {
                multiplyAllStatus: 9,
            },
            3: {
                multiplyAllStatus: 12,
            },
            4: {
                multiplyAllStatus: 15,
            },
            5: {
                multiplyAllStatus: 20,
            },
            6: {
                multiplyAllStatus: 25,
            }
        }
    },
    {
        name: "manaBowming",
        displayName: "マナボミング",
        icon: rumior_mana_bowming,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "現在のMPを10%消費し、消費したMPの100%ほど対象にダメージ。TP500消費。",
            "現在のMPを10%消費し、消費したMPの250%ほど対象にダメージ。TP500消費。",
            "現在のMPを10%消費し、消費したMPの400%ほど対象にダメージ。TP500消費。",
            "現在のMPを20%消費し、消費したMPの550%ほど対象にダメージ。TP500消費。",
            "現在のMPを20%消費し、消費したMPの700%ほど対象にダメージ。TP500消費。",
            "現在のMPを25%消費し、消費したMPの850%ほど対象にダメージ。TP500消費。",
            "現在のMPを30%消費し、消費したMPの1200%ほど対象にダメージ。TP500消費。",
        ],
        attributes: {}
    },
    {
        name: "sanctuary",
        displayName: "サンクチュアリ",
        icon: rumior_sanctuary,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバーのHPを70%の魔法攻撃力で回復。100TPを生成。",
            "パーティーメンバーのHPを80%の魔法攻撃力で回復。100TPを生成。",
            "パーティーメンバーのHPを90%の魔法攻撃力で回復。100TPを生成。",
            "パーティーメンバーのHPを100%の魔法攻撃力で回復。100TPを生成。",
            "パーティーメンバーのHPを110%の魔法攻撃力で回復。100TPを生成。",
            "パーティーメンバーのHPを120%の魔法攻撃力で回復。100TPを生成。",
            "パーティーメンバーのHPを150%の魔法攻撃力で回復。100TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "blackSideZone",
        displayName: "ブラックサイドゾーン",
        icon: rumior_sanctuary,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "使用者の範囲20メートル以内に存在する敵に、70%の魔法攻撃力でダメージ。",
            "使用者の範囲20メートル以内に存在する敵に、80%の魔法攻撃力でダメージ。",
            "使用者の範囲20メートル以内に存在する敵に、90%の魔法攻撃力でダメージ。",
            "使用者の範囲20メートル以内に存在する敵に、100%の魔法攻撃力でダメージ。",
            "使用者の範囲20メートル以内に存在する敵に、110%の魔法攻撃力でダメージ。",
            "使用者の範囲20メートル以内に存在する敵に、120%の魔法攻撃力でダメージ。",
            "使用者の範囲20メートル以内に存在する敵に、150%の魔法攻撃力でダメージ。",
        ],
        attributes: {}
    },
    {
        name: "lifeCirculation",
        displayName: "ライフサーキュレーション",
        icon: rumior_life_circulation,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "HPの40%を消費し、200TPを生成し、20秒間移動速度が5%上昇します。",
            "HPの40%を消費し、230TPを生成し、20秒間移動速度が10%上昇します。",
            "HPの30%を消費し、260TPを生成し、20秒間移動速度が15%上昇します。",
            "HPの30%を消費し、290TPを生成し、20秒間移動速度が20%上昇します。",
            "HPの20%を消費し、320TPを生成し、20秒間移動速度が25%上昇します。",
            "HPの20%を消費し、350TPを生成し、20秒間移動速度が35%上昇します。",
            "HPの10%を消費し、500TPを生成し、20秒間移動速度が50%上昇します。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 5,
            },
            1: {
                multiplyMovementSpeed: 10,
            },
            2: {
                multiplyMovementSpeed: 15,
            },
            3: {
                multiplyMovementSpeed: 20,
            },
            4: {
                multiplyMovementSpeed: 25,
            },
            5: {
                multiplyMovementSpeed: 35,
            },
            6: {
                multiplyMovementSpeed: 50,
            }
        }
    },
    {
        name: "cozalLoop",
        displayName: "コーザルループ",
        icon: rumior_cozal_loop,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、クリティカルダメージを無効化し、ダメージの2%に相当するHPを回復。",
            "20秒間、クリティカルダメージを無効化し、ダメージの4%に相当するHPを回復。",
            "20秒間、クリティカルダメージを無効化し、ダメージの6%に相当するHPを回復。",
            "20秒間、クリティカルダメージを無効化し、ダメージの8%に相当するHPを回復。",
            "20秒間、クリティカルダメージを無効化し、ダメージの10%に相当するHPを回復。",
            "20秒間、クリティカルダメージを無効化し、ダメージの12%に相当するHPを回復。",
            "20秒間、クリティカルダメージを無効化し、ダメージの20%に相当するHPを回復。",
        ],
        attributes: {}
    },
    {
        name: "blackSideLoop",
        displayName: "ブラックサイドループ",
        icon: rumior_cozal_loop,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、クリティカルダメージを与えたときに、100%の追加ダメージ。",
            "20秒間、クリティカルダメージを与えたときに、120%の追加ダメージ。",
            "20秒間、クリティカルダメージを与えたときに、140%の追加ダメージ。",
            "20秒間、クリティカルダメージを与えたときに、160%の追加ダメージ。",
            "20秒間、クリティカルダメージを与えたときに、180%の追加ダメージ。",
            "20秒間、クリティカルダメージを与えたときに、200%の追加ダメージ。",
            "20秒間、クリティカルダメージを与えたときに、250%の追加ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "growthAcceleration",
        displayName: "グロースアクセレーション",
        icon: rumior_growth_acceleration,
        category: "Buff",
        origin: "Group",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ5%ほど増加します。300TPを消費します。",
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ8%ほど増加します。300TPを消費します。",
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ11%ほど増加します。300TPを消費します。",
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ14%ほど増加します。300TPを消費します。",
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ17%ほど増加します。300TPを消費します。",
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ20%ほど増加します。300TPを消費します。",
            "30秒間、パーティーメンバーの攻撃力と攻撃速度をそれぞ30%ほど増加します。300TPを消費します。",
        ],
        attributes: {
            0: {
                multiplyAttack: 5,
                multiplyAttackSpeed: 5,
            },
            1: {
                multiplyAttack: 8,
                multiplyAttackSpeed: 8,
            },
            2: {
                multiplyAttack: 11,
                multiplyAttackSpeed: 11,
            },
            3: {
                multiplyAttack: 14,
                multiplyAttackSpeed: 14,
            },
            4: {
                multiplyAttack: 17,
                multiplyAttackSpeed: 17,
            },
            5: {
                multiplyAttack: 20,
                multiplyAttackSpeed: 20,
            },
            6: {
                multiplyAttack: 30,
                multiplyAttackSpeed: 30,
            }
        }
    },
    {
        name: "lightningSwift",
        displayName: "ライトニングスウィフト",
        icon: rumior_lightning_swift,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象の最大HPの15%に相当するダメージ。500TPを消費。",
            "対象の最大HPの17%に相当するダメージ。500TPを消費。",
            "対象の最大HPの19%に相当するダメージ。500TPを消費。",
            "対象の最大HPの21%に相当するダメージ。500TPを消費。",
            "対象の最大HPの23%に相当するダメージ。500TPを消費。",
            "対象の最大HPの25%に相当するダメージ。500TPを消費。",
            "対象の最大HPの33%に相当するダメージ。500TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "reviveForce",
        displayName: "リバイブフォース",
        icon: rumior_revive_force,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを50%回復。TP800消費。",
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを50%回復。TP800消費。",
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを60%回復。TP800消費。",
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを60%回復。TP800消費。",
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを70%回復。TP800消費。",
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを70%回復。TP800消費。",
            "30秒間、対象のHPが0になった時、1度だけ即座にHPを100%回復。TP800消費。",
        ],
        attributes: {}
    },
    {
        name: "spiritAssimilation",
        displayName: "スピリットアシミレーション",
        icon: rumior_spirit_assimilation,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間パーティーメンバーが状態異常に抵抗。700TPを消費。",
            "35秒間パーティーメンバーが状態異常に抵抗。700TPを消費。",
            "40秒間パーティーメンバーが状態異常に抵抗。700TPを消費。",
            "45秒間パーティーメンバーが状態異常に抵抗。700TPを消費。",
            "50秒間パーティーメンバーが状態異常に抵抗。700TPを消費。",
            "55秒間パーティーメンバーが状態異常に抵抗。700TPを消費。",
            "60秒間パーティーメンバーが状態異常に抵抗。500TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "absoluteFlash",
        displayName: "アブソリュートフラッシュ",
        icon: rumior_absolute_flash,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象と一直線上にいる敵、最大9体に現在HPの10%分ダメージ。500TPを消費。",
            "対象と一直線上にいる敵、最大9体に現在HPの13%分ダメージ。500TPを消費。",
            "対象と一直線上にいる敵、最大9体に現在HPの16%分ダメージ。500TPを消費。",
            "対象と一直線上にいる敵、最大9体に現在HPの19%分ダメージ。500TPを消費。",
            "対象と一直線上にいる敵、最大9体に現在HPの22%分ダメージ。500TPを消費。",
            "対象と一直線上にいる敵、最大9体に現在HPの25%分ダメージ。500TPを消費。",
            "対象と一直線上にいる敵、最大9体に現在HPの30%分ダメージ。500TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "eternalAria",
        displayName: "エターナルアリア",
        icon: rumior_eternal_aria,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間TPを消耗せずにスキル使用可能。精神力10%増加、攻撃速度25%増加。",
            "60秒間TPを消耗せずにスキル使用可能。精神力13%増加、攻撃速度30%増加。",
            "60秒間TPを消耗せずにスキル使用可能。精神力16%増加、攻撃速度35%増加。",
            "60秒間TPを消耗せずにスキル使用可能。精神力19%増加、攻撃速度40%増加。",
            "60秒間TPを消耗せずにスキル使用可能。精神力22%増加、攻撃速度50%増加。",
            "60秒間TPを消耗せずにスキル使用可能。精神力25%増加、攻撃速度70%増加。",
            "60秒間TPを消耗せずにスキル使用可能。精神力30%増加、攻撃速度100%増加。",
        ],
        attributes: {
            0: {
                multiplyMentality: 10,
                multiplyAttackSpeed: 25,
            },
            1: {
                multiplyMentality: 13,
                multiplyAttackSpeed: 30,
            },
            2: {
                multiplyMentality: 16,
                multiplyAttackSpeed: 35,
            },
            3: {
                multiplyMentality: 19,
                multiplyAttackSpeed: 40,
            },
            4: {
                multiplyMentality: 22,
                multiplyAttackSpeed: 50,
            },
            5: {
                multiplyMentality: 25,
                multiplyAttackSpeed: 70,
            },
            6: {
                multiplyMentality: 30,
                multiplyAttackSpeed: 100,
            }
        }

    },
]
