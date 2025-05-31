import { Skill } from "./skill";


import noir_arrendal_mastery from "../../assets/skills/noir/ME_N_Arrendal_Mastery.gif";
import noir_wand_of_restriction from "../../assets/skills/noir/ME_N_Wand_Of_Restriction.gif";
import noir_trinity_force from "../../assets/skills/noir/ME_N_Trinity_Force.gif";
import noir_sones_whip from "../../assets/skills/noir/ME_N_Sones_Whip.gif";
import noir_phantom_spirit from "../../assets/skills/noir/ME_N_Phantom_Spirit.gif";
import noir_penetrating_dark from "../../assets/skills/noir/ME_N_Penetrating_Dark.gif";
import noir_dark_assimilation from "../../assets/skills/noir/ME_N_Dark_Assimilation.gif";
import noir_distortion_claw from "../../assets/skills/noir/ME_N_Distortion_Claw_Dimension.gif";
import noir_windy_chain from "../../assets/skills/noir/ME_N_Windy_Chain.gif";
import noir_spirit_concentration from "../../assets/skills/noir/ME_N_Spirit_Concentration.gif";
import noir_distortion_claw_reverse from "../../assets/skills/noir/ME_N_Distortion_Claw_Reverse.gif";
import noir_thunder_stroke from "../../assets/skills/noir/ME_N_Thunder_Stroke.gif";
import noir_rear_blast from "../../assets/skills/noir/ME_N_Rear_Blast.gif";
import noir_distortion_claw_oblivion from "../../assets/skills/noir/ME_N_Distortion_Claw_Oblivion.gif";
import noir_air_burst from "../../assets/skills/noir/ME_N_Air_Burst.gif";
import noir_distortion_claw_gravity from "../../assets/skills/noir/ME_N_Distortion_Claw_Gravity.gif";
import noir_dimension_coat from "../../assets/skills/noir/ME_N_Dimension_Coat.gif";
import noir_distortion_claw_chaos from "../../assets/skills/noir/ME_N_Distortion_Claw_Chaos.gif";
import noir_dimension_scar from "../../assets/skills/noir/ME_N_Dimension_Scar.gif";
import noir_silent_noise from "../../assets/unknown.png"; // Placeholder, replace with actual icon if available

export const noir_skills: Skill[] = [
    {
        name: "arrendalMastery",
        displayName: "アレンダルマスタリー",
        icon: noir_arrendal_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "アレンダル及びオプション攻撃力が50%増加。力の50%ほど近距離攻撃力が増加",
            "アレンダル及びオプション攻撃力が70%増加。力の70%ほど近距離攻撃力が増加",
            "アレンダル及びオプション攻撃力が100%増加。力の100%ほど近距離攻撃力が増加",
            "アレンダル及びオプション攻撃力が140%増加。力の140%ほど近距離攻撃力が増加",
            "アレンダル及びオプション攻撃力が190%増加。力の190%ほど近距離攻撃力が増加",
            "アレンダル及びオプション攻撃力が250%増加。力の250%ほど近距離攻撃力が増加",
            "アレンダル及びオプション攻撃力が350%増加。力の350%ほど近距離攻撃力が増加",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 50,
                plusMeleeAttackMultiplyStrength: 50,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 70,
                plusMeleeAttackMultiplyStrength: 70,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 100,
                plusMeleeAttackMultiplyStrength: 100,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 140,
                plusMeleeAttackMultiplyStrength: 140,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 190,
                plusMeleeAttackMultiplyStrength: 190,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 250,
                plusMeleeAttackMultiplyStrength: 250,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 350,
                plusMeleeAttackMultiplyStrength: 350,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "wandOfRestriction",
        displayName: "ウォンドオブリストリクション",
        icon: noir_wand_of_restriction,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に20%増加したダメージ、2秒間ルート。40TPを生成。",
            "対象に25%増加したダメージ、2秒間ルート。40TPを生成。",
            "対象に30%増加したダメージ、3秒間ルート。60TPを生成。",
            "対象に35%増加したダメージ、3秒間ルート。60TPを生成。",
            "対象に40%増加したダメージ、4秒間ルート。80TPを生成。",
            "対象に50%増加したダメージ、4秒間ルート。80TPを生成。",
            "対象に70%増加したダメージ、6秒間ルート。100TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "trinityForce",
        displayName: "トリニティフォース",
        icon: noir_trinity_force,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、通常攻撃を範囲化し、10メートル内の対象に70%減少したダメージを与えます。また、通常攻撃時にTP100を生成します。",
            "18分間、通常攻撃を範囲化し、10メートル内の対象に70%減少したダメージを与えます。また、通常攻撃時にTP125を生成します。",
            "21分間、通常攻撃を範囲化し、10メートル内の対象に70%減少したダメージを与えます。また、通常攻撃時にTP150を生成します。",
            "24分間、通常攻撃を範囲化し、10メートル内の対象に70%減少したダメージを与えます。また、通常攻撃時にTP175を生成します。",
            "27分間、通常攻撃を範囲化し、10メートル内の対象に60%減少したダメージを与えます。また、通常攻撃時にTP200を生成します。",
            "30分間、通常攻撃を範囲化し、10メートル内の対象に60%減少したダメージを与えます。また、通常攻撃時にTP225を生成します。",
            "120分間、通常攻撃を範囲化し、10メートル内の対象に50%減少したダメージを与えます。また、通常攻撃時にTP300を生成します。",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: -70,
            },
            1: {
                multiplyIncreaseDamageDealt: -70,
            },
            2: {
                multiplyIncreaseDamageDealt: -70,
            },
            3: {
                multiplyIncreaseDamageDealt: -70,
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
        name: "sonesWhip",
        displayName: "ソーンズウィップ",
        icon: noir_sones_whip,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "属性攻撃力を5%ほど増加、2%の確立で5回追加ダメージ。3秒ごとにTPを100消費。",
            "属性攻撃力を10%ほど増加、3%の確立で6回追加ダメージ。3秒ごとにTPを100消費。",
            "属性攻撃力を15%ほど増加、4%の確立で7回追加ダメージ。3秒ごとにTPを100消費。",
            "属性攻撃力を20%ほど増加、5%の確立で8回追加ダメージ。3秒ごとにTPを100消費。",
            "属性攻撃力を25%ほど増加、6%の確立で9回追加ダメージ。3秒ごとにTPを100消費。",
            "属性攻撃力を35%ほど増加、6%の確立で9回追加ダメージ。3秒ごとにTPを100消費。",
            "属性攻撃力を50%ほど増加、6%の確立で9回追加ダメージ。3秒ごとにTPを100消費。",
        ],
        attributes: {}
    },
    {
        name: "phantomSpirit",
        displayName: "ファントムスピリット",
        icon: noir_phantom_spirit,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "15秒間、全ての効果を反射。TP600消費。"
        ],
        attributes: {}
    },
    {
        name: "penetratingDark",
        displayName: "ペネトレーティングダーク",
        icon: noir_penetrating_dark,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視し、35%増加したダメージ。",
            "対象の防御力を無視し、50%増加したダメージ。",
            "対象の防御力を無視し、65%増加したダメージ。",
            "対象の防御力を無視し、80%増加したダメージ。",
            "対象の防御力を無視し、95%増加したダメージ。",
            "対象の防御力を無視し、110%増加したダメージ。",
            "対象の防御力を無視し、140%増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "darkAssimilation",
        displayName: "ダークアシミレーション",
        icon: noir_dark_assimilation,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、使用者の近距離攻撃力が10%増加します。",
            "18分間、使用者の近距離攻撃力が14%増加します。",
            "21分間、使用者の近距離攻撃力が18%増加します。",
            "24分間、使用者の近距離攻撃力が22%増加します。",
            "27分間、使用者の近距離攻撃力が24%増加します。",
            "30分間、使用者の近距離攻撃力が30%増加します。",
            "120分間、使用者の近距離攻撃力が40%増加します。",
        ],
        attributes: {
            0: {
                multiplyMeleeAttack: 10,
            },
            1: {
                multiplyMeleeAttack: 14,
            },
            2: {
                multiplyMeleeAttack: 18,
            },
            3: {
                multiplyMeleeAttack: 22,
            },
            4: {
                multiplyMeleeAttack: 24,
            },
            5: {
                multiplyMeleeAttack: 30,
            },
            6: {
                multiplyMeleeAttack: 40,
            }
        }
    },
    {
        name: "distortionClawDimension",
        displayName: "ディストーションクロウ-ディメンション",
        icon: noir_distortion_claw,
        category: "Debuff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象を8秒の間行動不能にする。200TPを消費。",
            "対象を9秒の間行動不能にする。200TPを消費。",
            "対象を10秒の間行動不能にする。200TPを消費。",
            "対象を11秒の間行動不能にする。200TPを消費。",
            "対象を13秒の間行動不能にする。200TPを消費。",
            "対象を15秒の間行動不能にする。200TPを消費。",
            "対象を20秒の間行動不能にする。200TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "windyChain",
        displayName: "ウィンディテェーン",
        icon: noir_windy_chain,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に40%ほど増加したダメージ、5秒間移動速度を30%減少。50TPを生成。",
            "対象に45%ほど増加したダメージ、5秒間移動速度を35%減少。50TPを生成。",
            "対象に50%ほど増加したダメージ、5秒間移動速度を40%減少。70TPを生成。",
            "対象に55%ほど増加したダメージ、5秒間移動速度を45%減少。70TPを生成。",
            "対象に60%ほど増加したダメージ、5秒間移動速度を50%減少。90TPを生成。",
            "対象に70%ほど増加したダメージ、5秒間移動速度を60%減少。90TPを生成。",
            "対象に90%ほど増加したダメージ、5秒間移動速度を80%減少。150TPを生成。",
        ],
        attributes: {}
    },

    {
        name: "spiritConcentration",
        displayName: "スピリットコンセントレーション",
        icon: noir_spirit_concentration,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "15分間、使用者の力を10%ほど増加します。",
            "18分間、使用者の力を15%ほど増加します。",
            "21分間、使用者の力を20%ほど増加します。",
            "24分間、使用者の力を25%ほど増加します。",
            "27分間、使用者の力を30%ほど増加します。",
            "30分間、使用者の力を40%ほど増加します。",
            "120分間、使用者の力を60%ほど増加します。",
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
                multiplyStrength: 40,
            },
            6: {
                multiplyStrength: 60,
            }
        }
    },
    {
        name: "distortionClawReverse",
        displayName: "ディストーションクロウ-リバース",
        icon: noir_distortion_claw_reverse,
        category: "Debuff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、回復を不可能にし、被ダメージが5%ほど増加。200TPを消費。",
            "13秒間、回復を不可能にし、被ダメージが10%ほど増加。200TPを消費。",
            "16秒間、回復を不可能にし、被ダメージが15%ほど増加。200TPを消費。",
            "19秒間、回復を不可能にし、被ダメージが20%ほど増加。200TPを消費。",
            "22秒間、回復を不可能にし、被ダメージが25%ほど増加。200TPを消費。",
            "25秒間、回復を不可能にし、被ダメージが30%ほど増加。200TPを消費。",
            "30秒間、回復を不可能にし、被ダメージが50%ほど増加。200TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "thunderStroke",
        displayName: "サンダーストローク",
        icon: noir_thunder_stroke,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に60%ほど増加したダメージ、3秒間スタン。50TPを生成。",
            "対象に65%ほど増加したダメージ、3秒間スタン。50TPを生成。",
            "対象に70%ほど増加したダメージ、4秒間スタン。70TPを生成。",
            "対象に75%ほど増加したダメージ、4秒間スタン。70TPを生成。",
            "対象に80%ほど増加したダメージ、5秒間スタン。90TPを生成。",
            "対象に90%ほど増加したダメージ、5秒間スタン。90TPを生成。",
            "対象に110%ほど増加したダメージ、7秒間スタン。150TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "rearBlast",
        displayName: "リアブラスト",
        icon: noir_rear_blast,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "2分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に20%ほど増加した追加ダメージ。",
            "2分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に30%ほど増加した追加ダメージ。",
            "2分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に40%ほど増加した追加ダメージ。",
            "2分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に50%ほど増加した追加ダメージ。",
            "3分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に60%ほど増加した追加ダメージ。",
            "3分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に70%ほど増加した追加ダメージ。",
            "5分間、「エアバースト」「サンダーストローク」を発動した際、3秒後に100%ほど増加した追加ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "distortionClawOblivion",
        displayName: "ディストーションクロウ-オブリビオン",
        icon: noir_distortion_claw_oblivion,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に20%ほど増加したダメージ、7秒間通常攻撃を封じる。200TPを消費。",
            "対象に25%ほど増加したダメージ、8秒間通常攻撃を封じる。200TPを消費。",
            "対象に30%ほど増加したダメージ、9秒間通常攻撃を封じる。200TPを消費。",
            "対象に35%ほど増加したダメージ、10秒間通常攻撃を封じる。200TPを消費。",
            "対象に40%ほど増加したダメージ、11秒間通常攻撃を封じる。200TPを消費。",
            "対象に50%ほど増加したダメージ、12秒間通常攻撃を封じる。200TPを消費。",
            "対象に70%ほど増加したダメージ、15秒間通常攻撃を封じる。200TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "airBurst",
        displayName: "エアバースト",
        icon: noir_air_burst,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "20メートル以内の対象に急接近し、70%ほど増加したダメージ。200TPを生成。",
            "20メートル以内の対象に急接近し、75%ほど増加したダメージ。200TPを生成。",
            "20メートル以内の対象に急接近し、80%ほど増加したダメージ。300TPを生成。",
            "20メートル以内の対象に急接近し、85%ほど増加したダメージ。300TPを生成。",
            "20メートル以内の対象に急接近し、90%ほど増加したダメージ。400TPを生成。",
            "20メートル以内の対象に急接近し、100%ほど増加したダメージ。400TPを生成。",
            "20メートル以内の対象に急接近し、120%ほど増加したダメージ。500TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "distortionClawGravity",
        displayName: "ディストーションクロウ-グラビティ",
        icon: noir_distortion_claw_gravity,
        category: "Debuff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10メートル以内にいる全ての対象に対し、6秒間攻撃速度、移動速度を15%減少。250TP消費。",
            "11メートル以内にいる全ての対象に対し、6秒間攻撃速度、移動速度を20%減少。250TP消費。",
            "12メートル以内にいる全ての対象に対し、7秒間攻撃速度、移動速度を25%減少。250TP消費。",
            "13メートル以内にいる全ての対象に対し、7秒間攻撃速度、移動速度を30%減少。250TP消費。",
            "14メートル以内にいる全ての対象に対し、8秒間攻撃速度、移動速度を40%減少。250TP消費。",
            "15メートル以内にいる全ての対象に対し、8秒間攻撃速度、移動速度を50%減少。250TP消費。",
            "20メートル以内にいる全ての対象に対し、10秒間攻撃速度、移動速度を70%減少。250TP消費。",
        ],
        attributes: {}
    },
    {
        name: "dimensionCoat",
        displayName: "ディメンションコート",
        icon: noir_dimension_coat,
        category: "Other",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、全てのダメージを無効化し、与えたダメージの3%HPを吸収します。",
            "11秒間、全てのダメージを無効化し、与えたダメージの4%HPを吸収します。",
            "12秒間、全てのダメージを無効化し、与えたダメージの4%HPを吸収します。",
            "13秒間、全てのダメージを無効化し、与えたダメージの5%HPを吸収します。",
            "14秒間、全てのダメージを無効化し、与えたダメージの5%HPを吸収します。",
            "15秒間、全てのダメージを無効化し、与えたダメージの7%HPを吸収します。",
            "20秒間、全てのダメージを無効化し、与えたダメージの12%HPを吸収します。",
        ],
        attributes: {}
    },
    {
        name: "distortionClawChaos",
        displayName: "ディストーションクロウ-カオス",
        icon: noir_distortion_claw_chaos,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に100%ほど増加したダメージ、8秒の間攻撃力を30%減少。300TPを消費。",
            "対象に110%ほど増加したダメージ、9秒の間攻撃力を40%減少。300TPを消費。",
            "対象に120%ほど増加したダメージ、10秒の間攻撃力を50%減少。300TPを消費。",
            "対象に130%ほど増加したダメージ、11秒の間攻撃力を60%減少。300TPを消費。",
            "対象に150%ほど増加したダメージ、13秒の間攻撃力を70%減少。300TPを消費。",
            "対象に170%ほど増加したダメージ、15秒の間攻撃力を80%減少。300TPを消費。",
            "対象に200%ほど増加したダメージ、20秒の間攻撃力を100%減少。300TPを消費。",
        ],
        attributes: {}
    },
    {
        name: "dimensionScar",
        displayName: "ディメンションスカー",
        icon: noir_dimension_scar,
        category: "Attack",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10メートル以内の対象に100%ほど増加したダメージ、出血状態。100TPを生成。",
            "11メートル以内の対象に110%ほど増加したダメージ、出血状態。100TPを生成。",
            "12メートル以内の対象に120%ほど増加したダメージ、出血状態。100TPを生成。",
            "13メートル以内の対象に130%ほど増加したダメージ、出血状態。100TPを生成。",
            "14メートル以内の対象に150%ほど増加したダメージ、出血状態。100TPを生成。",
            "15メートル以内の対象に170%ほど増加したダメージ、出血状態。100TPを生成。",
            "20メートル以内の対象に200%ほど増加したダメージ、出血状態。100TPを生成。",
        ],
        attributes: {}
    },
    {
        name: "silentNoise",
        displayName: "サイレントノイズ",
        icon: noir_silent_noise,
        category: "Buff",
        origin: "Self",
        raceid: 7,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、移動速度25%増加、攻撃速度40%増加、全ての射程距離5m増加。",
            "60秒間、移動速度30%増加、攻撃速度50%増加、全ての射程距離6m増加。",
            "60秒間、移動速度35%増加、攻撃速度60%増加、全ての射程距離7m増加。",
            "60秒間、移動速度40%増加、攻撃速度70%増加、全ての射程距離8m増加。",
            "60秒間、移動速度45%増加、攻撃速度80%増加、全ての射程距離9m増加。",
            "60秒間、移動速度50%増加、攻撃速度90%増加、全ての射程距離10m増加。",
            "60秒間、移動速度60%増加、攻撃速度110%増加、全ての射程距離15m増加。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 25,
                multiplyAttackSpeed: 40,
            },
            1: {
                multiplyMovementSpeed: 30,
                multiplyAttackSpeed: 50,
            },
            2: {
                multiplyMovementSpeed: 35,
                multiplyAttackSpeed: 60,
            },
            3: {
                multiplyMovementSpeed: 40,
                multiplyAttackSpeed: 70,
            },
            4: {
                multiplyMovementSpeed: 45,
                multiplyAttackSpeed: 80,
            },
            5: {
                multiplyMovementSpeed: 50,
                multiplyAttackSpeed: 90,
            },
            6: {
                multiplyMovementSpeed: 60,
                multiplyAttackSpeed: 110,
            }
        }
    },
]