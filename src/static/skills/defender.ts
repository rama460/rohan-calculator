import { Skill } from "./skill";

import defender_blunt_mastery from "../../assets/skills/defender/de_Blunt_Mastery.gif";
import defender_blue_suction from "../../assets/skills/defender/de_Blue_Suction.gif";
import defender_shield_mastery from "../../assets/skills/defender/de_Shield_Mastery.gif";
import defender_taunt_roar from "../../assets/skills/defender/de_Taunt_Roar.gif";
import defender_eternal_stamina from "../../assets/skills/defender/de_Eternal_Stamina.gif";
import defender_shout from "../../assets/skills/defender/de_Shout.gif";
import defender_recovery_aura from "../../assets/skills/defender/de_Recovery_Aura.gif";
import defender_shield_burden from "../../assets/skills/defender/de_Shield_Burden.gif";
import defender_physical_aura from "../../assets/skills/defender/de_Physical_Aura.gif";
import defender_rush from "../../assets/skills/defender/de_Rush.gif";
import defender_defender_nature from "../../assets/skills/defender/de_Defender_Nature.gif";
import defender_stone_skin from "../../assets/skills/defender/de_Stone_Skin.gif";
import defender_extension from "../../assets/skills/defender/de_Extension.gif";
import defender_roha_shelter from "../../assets/skills/defender/de_Roha_Shelter.gif";
import defender_morale_expansion from "../../assets/skills/defender/de_Morale_Expansion.gif";
import defender_fall_wind from "../../assets/skills/defender/de_Fall_Wind.gif";
import defender_leaders_mind from "../../assets/skills/defender/de_Leaders_Mind.gif";
import defender_throwing_shield from "../../assets/skills/defender/de_Throwing_Shield.gif";
import defender_ultimate_bastian from "../../assets/skills/defender/de_Ultimate_Bastian.gif";
import defender_power_heavy_armor from "../../assets/skills/defender/de_Powered_Heavy_Armor.gif";


export const defender_skills: Skill[] = [
    {
        name: "DefenderBluntMastery",
        displayName: "ブラントマスタリー",
        icon: defender_blunt_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、片手鈍器の攻撃力及びオプション攻撃力が30%増加、体力の30％の近距離攻撃力が増加。",
            "21分間、片手鈍器の攻撃力及びオプション攻撃力が60%増加、体力の60％の近距離攻撃力が増加。",
            "24分間、片手鈍器の攻撃力及びオプション攻撃力が90%増加、体力の90％の近距離攻撃力が増加。",
            "27分間、片手鈍器の攻撃力及びオプション攻撃力が120%増加、体力の120％の近距離攻撃力が増加。",
            "30分間、片手鈍器の攻撃力及びオプション攻撃力が150%増加、体力の150％の近距離攻撃力が増加。",
            "30分間、片手鈍器の攻撃力及びオプション攻撃力が210%増加、体力の210％の近距離攻撃力が増加。",
            "120分間、片手鈍器の攻撃力及びオプション攻撃力が300%増加、体力の300％の近距離攻撃力が増加。"
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 30,
                plusMeleeAttackMultiplyVitality: 30,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 60,
                plusMeleeAttackMultiplyVitality: 60,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 90,
                plusMeleeAttackMultiplyVitality: 90,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 120,
                plusMeleeAttackMultiplyVitality: 120,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 150,
                plusMeleeAttackMultiplyVitality: 150,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 210,
                plusMeleeAttackMultiplyVitality: 210,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 300,
                plusMeleeAttackMultiplyVitality: 300,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "blueSuction",
        displayName: "ブルーサクション",
        icon: defender_blue_suction,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "ダメージの 100%対象のMPを減少させます。",
            "ダメージの 150%対象のMPを減少させます。",
            "ダメージの 200%対象のMPを減少させます。",
            "ダメージの 250%対象のMPを減少させます。",
            "ダメージの 300%対象のMPを減少させます。",
            "ダメージの 400%対象のMPを減少させます。",
            "ダメージの 500%対象のMPを減少させます。"
        ],
        attributes: {}
    },
    {
        name: "shieldMastery",
        displayName: "シールドマスタリー",
        icon: defender_shield_mastery,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、盾のブロック率を8%増加させる。",
            "21分間、盾のブロック率を11%増加させる。",
            "24分間、盾のブロック率を14%増加させる。",
            "27分間、盾のブロック率を17%増加させる。",
            "30分間、盾のブロック率を21%増加させる。",
            "30分間、盾のブロック率を25%増加させる。",
            "120分間、盾のブロック率を35%増加させる。"
        ],
        attributes: {
            0: {
                multiplyShieldBlockRate: 8,
            },
            1: {
                multiplyShieldBlockRate: 11,
            },
            2: {
                multiplyShieldBlockRate: 14,
            },
            3: {
                multiplyShieldBlockRate: 17,
            },
            4: {
                multiplyShieldBlockRate: 21,
            },
            5: {
                multiplyShieldBlockRate: 25,
            },
            6: {
                multiplyShieldBlockRate: 35,
            }
        }
    },
    {
        name: "tauntRoar",
        displayName: "タウントロア",
        icon: defender_taunt_roar,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "15秒間周囲のモンスターが自分を攻撃するようにします. パーティーの時にだけ使用可能です。"
        ],
        attributes: {}
    },
    {
        name: "eternalStamina",
        displayName: "エターナルスタミナ",
        icon: defender_eternal_stamina,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間詠唱者の体力を10%増加させます。",
            "21分間詠唱者の体力を15%増加させます。",
            "24分間詠唱者の体力を20%増加させます。",
            "27分間詠唱者の体力を25%増加させます。",
            "30分間詠唱者の体力を30%増加させます。",
            "30分間詠唱者の体力を45%増加させます。",
            "120分間詠唱者の体力を60%増加させます。"
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
                multiplyVitality: 45,
            },
            6: {
                multiplyVitality: 60,
            }
        }
    },
    {
        name: "shout",
        displayName: "シャウト",
        icon: defender_shout,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間 15メートル内のすべての対象の物理防御力を 10% 減少させます。",
            "30秒間 15メートル内のすべての対象の物理防御力を 15% 減少させます。",
            "30秒間 15メートル内のすべての対象の物理防御力を 20% 減少させます。",
            "30秒間 15メートル内のすべての対象の物理防御力を 25% 減少させます。",
            "30秒間 15メートル内のすべての対象の物理防御力を 30% 減少させます。",
            "30秒間 15メートル内のすべての対象の物理防御力を 35% 減少させます。",
            "45秒間 15メートル内のすべての対象の物理防御力を 50% 減少させます。"
        ],
        attributes: {}
    },
    {
        name: "recoveryAura",
        displayName: "リカバリーオーラ",
        icon: defender_recovery_aura,
        category: "Other",
        origin: "Group",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "パーティー員のMP回復速度を 3% 増加させます。",
            "パーティー員のMP回復速度を 6% 増加させます。",
            "パーティー員のMP回復速度を 9% 増加させます。",
            "パーティー員のMP回復速度を 12% 増加させます。",
            "パーティー員のMP回復速度を 15% 増加させます。",
            "パーティー員のMP回復速度を 20% 増加させます。",
            "パーティー員のMP回復速度を 25% 増加させます。"
        ],
        attributes: {
            0: {
                multiplyMagicPointRecovery: 3,
            },
            1: {
                multiplyMagicPointRecovery: 6,
            },
            2: {
                multiplyMagicPointRecovery: 9,
            },
            3: {
                multiplyMagicPointRecovery: 12,
            },
            4: {
                multiplyMagicPointRecovery: 15,
            },
            5: {
                multiplyMagicPointRecovery: 20,
            },
            6: {
                multiplyMagicPointRecovery: 25,
            }
        }
    },
    {
        name: "shieldBarden",
        displayName: "シールドバーデン",
        icon: defender_shield_burden,
        // FIXEME: implement multiply category like Debuff and Attack
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に力の500%ほどの追加ダメージを与え、10秒間移動速度を10%減少させます。",
            "対象に力の550%ほどの追加ダメージを与え、15秒間移動速度を20%減少させます。",
            "対象に力の600%ほどの追加ダメージを与え、20秒間移動速度を30%減少させます。",
            "対象に力の650%ほどの追加ダメージを与え、25秒間移動速度を40%減少させます。",
            "対象に力の700%ほどの追加ダメージを与え、30秒間移動速度を50%減少させます。",
            "対象に力の750%ほどの追加ダメージを与え、40秒間移動速度を60%減少させます。",
            "対象に力の900%ほどの追加ダメージを与え、50秒間移動速度を70%減少させます。"
        ],
        attributes: {}
    },
    {
        name: "powerHeavyArmor",
        displayName: "パワードヘビーアーマー",
        icon: defender_power_heavy_armor,
        category: "Buff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、移動速度が50%減少する代わりに防御力を5%、近距離攻撃力を100%ほど増加せます。",
            "20秒間、移動速度が45%減少する代わりに防御力を10%、近距離攻撃力を110%ほど増加せます。",
            "20秒間、移動速度が40%減少する代わりに防御力を15%、近距離攻撃力を120%ほど増加せます。",
            "20秒間、移動速度が35%減少する代わりに防御力を20%、近距離攻撃力を130%ほど増加せます。",
            "20秒間、移動速度が30%減少する代わりに防御力を25%、近距離攻撃力を140%ほど増加せます。",
            "20秒間、移動速度が25%減少する代わりに防御力を30%、近距離攻撃力を150%ほど増加せます。",
            "20秒間、移動速度が20%減少する代わりに防御力を50%、近距離攻撃力を200%ほど増加せます。"
        ],
        attributes: {
            0: {
                multiplyDefense: 5,
                multiplyMeleeAttack: 100,
                multiplyMovementSpeed: -50,
            },
            1: {
                multiplyDefense: 10,
                multiplyMeleeAttack: 110,
                multiplyMovementSpeed: -45,
            },
            2: {
                multiplyDefense: 15,
                multiplyMeleeAttack: 120,
                multiplyMovementSpeed: -40,
            },
            3: {
                multiplyDefense: 20,
                multiplyMeleeAttack: 130,
                multiplyMovementSpeed: -35,
            },
            4: {
                multiplyDefense: 25,
                multiplyMeleeAttack: 140,
                multiplyMovementSpeed: -30,
            },
            5: {
                multiplyDefense: 30,
                multiplyMeleeAttack: 150,
                multiplyMovementSpeed: -25,
            },
            6: {
                multiplyDefense: 50,
                multiplyMeleeAttack: 200,
                multiplyMovementSpeed: -20,
            }
        }
    },
    {
        name: "physicalAura",
        displayName: "フィジカルオーラ",
        icon: defender_physical_aura,
        category: "Other",
        origin: "Group",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "パーティー員の生命力回復量を3%増加させます。",
            "パーティー員の生命力回復量を6%増加させます。",
            "パーティー員の生命力回復量を9%増加させます。",
            "パーティー員の生命力回復量を12%増加させます。",
            "パーティー員の生命力回復量を15%増加させます。",
            "パーティー員の生命力回復量を20%増加させます。",
            "パーティー員の生命力回復量を25%増加させます。"
        ],
        attributes: {
            0: {
                multiplyHitPointRecovery: 3,
            },
            1: {
                multiplyHitPointRecovery: 6,
            },
            2: {
                multiplyHitPointRecovery: 9,
            },
            3: {
                multiplyHitPointRecovery: 12,
            },
            4: {
                multiplyHitPointRecovery: 15,
            },
            5: {
                multiplyHitPointRecovery: 20,
            },
            6: {
                multiplyHitPointRecovery: 25,
            }
        }
    },
    {
        name: "rush",
        displayName: "ラッシュ",
        icon: defender_rush,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 4秒間麻痺させます。",
            "20メートル距離の対象に突進して 6秒間麻痺させます。"
        ],
        attributes: {}
    },
    {
        name: "defenderNature",
        displayName: "ディフェンダーネイチャー",
        icon: defender_defender_nature,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、指定したパーティーメンバーが受けるダメージの100%を代わりに受ける。",
            "20秒間、指定したパーティーメンバーが受けるダメージの90%を代わりに受ける。",
            "20秒間、指定したパーティーメンバーが受けるダメージの80%を代わりに受ける。",
            "20秒間、指定したパーティーメンバーが受けるダメージの70%を代わりに受ける。",
            "20秒間、指定したパーティーメンバーが受けるダメージの60%を代わりに受ける。",
            "20秒間、指定したパーティーメンバーが受けるダメージの50%を代わりに受ける。",
            "20秒間、指定したパーティーメンバーが受けるダメージの40%を代わりに受ける。"
        ],
        attributes: {}
    },
    {
        name: "stoneSkin",
        displayName: "ストーンスキン",
        icon: defender_stone_skin,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、物理ダメージを無効化する。",
            "15秒間、物理ダメージを無効化する。",
            "20秒間、物理ダメージを無効化する。",
            "25秒間、物理ダメージを無効化する。",
            "30秒間、物理ダメージを無効化する。",
            "35秒間、物理ダメージを無効化する。",
            "35秒間、物理ダメージと魔法ダメージを無効化する。"
        ],
        attributes: {}
    },
    {
        name: "extension",
        displayName: "エクステンション",
        icon: defender_extension,
        category: "Debuff",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10メートル中の対象 4人を 3秒間スタンさせます。",
            "10メートル中の対象 5人を 3秒間スタンさせます。",
            "10メートル中の対象 6人を 4秒間スタンさせます。",
            "10メートル中の対象 7人を 4秒間スタンさせます。",
            "10メートル中の対象 8人を 5秒間スタンさせます。",
            "15メートル中の対象 9人を 6秒間スタンさせます。",
            "15メートル中の対象 9人を 7秒間スタンさせます。"
        ],
        attributes: {}
    },
    {
        name: "rohaShelter",
        displayName: "ロハシェルター",
        icon: defender_roha_shelter,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。",
            "13秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。",
            "16秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。",
            "21秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。",
            "24秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。",
            "30秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。",
            "60秒間指定したパーティー員を無敵, スタン状態にしてヘイトを初期化させます。"
        ],
        attributes: {}
    },
    {
        name: "moraleExpansion",
        displayName: "モラルエクスパンション",
        icon: defender_morale_expansion,
        category: "Buff",
        origin: "Group",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバー及び使用者の全攻撃力を3%、物理防御力を5%増加させます。",
            "パーティーメンバー及び使用者の全攻撃力を6%、物理防御力を10%増加させます。",
            "パーティーメンバー及び使用者の全攻撃力を9%、物理防御力を15%増加させます。",
            "パーティーメンバー及び使用者の全攻撃力を12%、物理防御力を20%増加させます。",
            "パーティーメンバー及び使用者の全攻撃力を15%、物理防御力を25%増加させます。",
            "パーティーメンバー及び使用者の全攻撃力を20%、物理防御力を30%増加させます。",
            "パーティーメンバー及び使用者の全攻撃力を30%、物理防御力を45%増加させます。"
        ],
        attributes: {
            0: {
                multiplyAttack: 3,
                multiplyPhysicalDefense: 5,
            },
            1: {
                multiplyAttack: 6,
                multiplyPhysicalDefense: 10,
            },
            2: {
                multiplyAttack: 9,
                multiplyPhysicalDefense: 15,
            },
            3: {
                multiplyAttack: 12,
                multiplyPhysicalDefense: 20,
            },
            4: {
                multiplyAttack: 15,
                multiplyPhysicalDefense: 25,
            },
            5: {
                multiplyAttack: 20,
                multiplyPhysicalDefense: 30,
            },
            6: {
                multiplyAttack: 30,
                multiplyPhysicalDefense: 45,
            }
        }
    },
    {
        name: "fallWind",
        displayName: "フォールウィンド",
        icon: defender_fall_wind,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象と対象の周囲4人に50%増加したダメージを与え、15メートル後ろに押し出します。",
            "対象と対象の周囲5人に100%増加したダメージを与え、15メートル後ろに押し出します。",
            "対象と対象の周囲6人に150%増加したダメージを与え、15メートル後ろに押し出します。",
            "対象と対象の周囲7人に200%増加したダメージを与え、15メートル後ろに押し出します。",
            "対象と対象の周囲8人に250%増加したダメージを与え、15メートル後ろに押し出します。",
            "対象と対象の周囲9人に300%増加したダメージを与え、15メートル後ろに押し出します。",
            "対象と対象の周囲9人に400%増加したダメージを与え、15メートル後ろに押し出します。"
        ],
        attributes: {}
    },
    {
        name: "leadersMind",
        displayName: "リーダーズマインド",
        icon: defender_leaders_mind,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、20％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に60％減少したダメージ。",
            "21分間、30％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に60％減少したダメージ。",
            "24分間、40％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に60％減少したダメージ。",
            "27分間、50％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に60％減少したダメージ。",
            "30分間、60％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に60％減少したダメージ。",
            "30分間、80％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に60％減少したダメージ。",
            "60分間、100％の確率で使用者の通常攻撃が広域攻撃になる。10メートル内の対象に50％減少したダメージ。"
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
        name: "throwingShield",
        displayName: "スローイングシールド",
        icon: defender_throwing_shield,
        category: "Attack",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周囲3体の敵に20%ほど増加したダメージを与え、更に2秒間移動を封じます。",
            "対象と周囲4体の敵に50%ほど増加したダメージを与え、更に3秒間移動を封じます。",
            "対象と周囲5体の敵に80%ほど増加したダメージを与え、更に4秒間移動を封じます。",
            "対象と周囲6体の敵に110%ほど増加したダメージを与え、更に5秒間移動を封じます。",
            "対象と周囲7体の敵に140%ほど増加したダメージを与え、更に6秒間移動を封じます。",
            "対象と周囲8体の敵に170%ほど増加したダメージを与え、更に7秒間移動を封じます。",
            "対象と周囲9体の敵に220%ほど増加したダメージを与え、更に9秒間移動を封じます。"
        ],
        attributes: {}
    },
    {
        name: "ultimateBastian",
        displayName: "アルティメットバスティアン",
        icon: defender_ultimate_bastian,
        category: "Other",
        origin: "Self",
        raceid: 0,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間40%の確率で40%のダメージを減少させる。",
            "60秒間40%の確率で50%のダメージを減少させる。",
            "60秒間50%の確率で50%のダメージを減少させる。",
            "60秒間50%の確率で60%のダメージを減少させる。",
            "60秒間60%の確率で60%のダメージを減少させる。",
            "60秒間60%の確率で70%のダメージを減少させる。",
            "60秒間80%の確率で80%のダメージを減少させる。"
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTaken: 40,
            },
            1: {
                multiplyDecreaseDamageTaken: 50,
            },
            2: {
                multiplyDecreaseDamageTaken: 50,
            },
            3: {
                multiplyDecreaseDamageTaken: 60,
            },
            4: {
                multiplyDecreaseDamageTaken: 60,
            },
            5: {
                multiplyDecreaseDamageTaken: 70,
            },
            6: {
                multiplyDecreaseDamageTaken: 80,
            }
        }
    }
]