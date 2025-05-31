import { Skill } from "./skill";

import savage_dualsword_mastery from "../../assets/skills/savage/G_S_Dual_Sword_Mastery.gif";
import savage_taunt_challenge from "../../assets/skills/savage/G_S_Taunt_Challenge.gif";
import savage_rampage_force from "../../assets/skills/savage/G_S_Rampage_Force.gif";
import savage_ferocious from "../../assets/skills/savage/G_S_Ferocious.gif";
import savage_fortunate from "../../assets/skills/savage/G_S_Fortunate.gif";
import savage_monster_mind from "../../assets/skills/savage/G_S_Monster_Mind.gif";
import savage_extraction from "../../assets/skills/savage/G_S_Extraction.gif";
import savage_brutality from "../../assets/skills/savage/G_S_Brutality.gif";
import savage_gails_shock from "../../assets/skills/savage/G_S_Gails_Shock.gif";
import savage_lunge from "../../assets/skills/savage/G_S_Lunge.gif";
import savage_gails_wash from "../../assets/skills/savage/G_S_Gails_Wash.gif";
import savage_desperate_assault from "../../assets/skills/savage/G_S_Desperate_Assault.gif";
import savage_ruthless from "../../assets/skills/savage/G_S_Ruthless.gif";
import savage_gails_bless from "../../assets/skills/savage/G_S_Gails_Bless.gif";
import savage_barbaric_cry from "../../assets/skills/savage/G_S_Barbaric_Cry.gif";
import savage_stoming_cross from "../../assets/skills/savage/G_S_Stoming_Cross.gif";
import savage_gails_cry from "../../assets/skills/savage/G_S_Gails_Cry.gif";
import savage_freezing_tornado from "../../assets/skills/savage/G_S_Freezing_Tornado.gif";
import savage_breage from "../../assets/unknown.png"; // Placeholder, actual icon not provided
import savage_broken_ground from "../../assets/unknown.png"; // Placeholder, actual icon not provided
import savage_fury_tempest from "../../assets/unknown.png"; // Placeholder, actual icon not provided

export const savage_skills: Skill[] = [
    {
        name: "dualswordMastery",
        displayName: "デュアルソードマスタリー",
        icon: savage_dualsword_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、デュアルソード及びオプション攻撃力が52%増加。攻撃速度2%増加。力の24%ほど近距離攻撃力が増加。",
            "21分間、デュアルソード及びオプション攻撃力が84%増加。攻撃速度6%増加。力の48%ほど近距離攻撃力が増加。",
            "24分間、デュアルソード及びオプション攻撃力が116%増加。攻撃速度10%増加。力の73%ほど近距離攻撃力が増加。",
            "27分間、デュアルソード及びオプション攻撃力が147%増加。攻撃速度14%増加。力の97%ほど近距離攻撃力が増加。",
            "30分間、デュアルソード及びオプション攻撃力が180%増加。攻撃速度18%増加。力の121%ほど近距離攻撃力が増加。",
            "30分間、デュアルソード及びオプション攻撃力が243%増加。攻撃速度22%増加。力の169%ほど近距離攻撃力が増加。",
            "120分間、デュアルソード及びオプション攻撃力が338%増加。攻撃速度30%増加。力の242%ほど近距離攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMeleeWeaponAttack: 52,
                multiplyAttackSpeed: 2,
                plusMeleeAttackMultiplyStrength: 24,
                meleeMastery: 1,
            },
            1: {
                multiplyMeleeWeaponAttack: 84,
                multiplyAttackSpeed: 6,
                plusMeleeAttackMultiplyStrength: 48,
                meleeMastery: 1,
            },
            2: {
                multiplyMeleeWeaponAttack: 116,
                multiplyAttackSpeed: 10,
                plusMeleeAttackMultiplyStrength: 73,
                meleeMastery: 1,
            },
            3: {
                multiplyMeleeWeaponAttack: 147,
                multiplyAttackSpeed: 14,
                plusMeleeAttackMultiplyStrength: 97,
                meleeMastery: 1,
            },
            4: {
                multiplyMeleeWeaponAttack: 180,
                multiplyAttackSpeed: 18,
                plusMeleeAttackMultiplyStrength: 121,
                meleeMastery: 1,
            },
            5: {
                multiplyMeleeWeaponAttack: 243,
                multiplyAttackSpeed: 22,
                plusMeleeAttackMultiplyStrength: 169,
                meleeMastery: 1,
            },
            6: {
                multiplyMeleeWeaponAttack: 338,
                multiplyAttackSpeed: 30,
                plusMeleeAttackMultiplyStrength: 242,
                meleeMastery: 1,
            }
        }
    },
    {
        name: "tauntChallenge",
        displayName: "タウントチャレンジ",
        icon: savage_taunt_challenge,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "10秒間、(対象の)周辺のモンスターが自分を攻撃するようになる(パーティー時のみ使用可能)"
        ],
        attributes: {}
    },
    {
        name: "rampageForce",
        displayName: "ラムページフォース",
        icon: savage_rampage_force,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、20%の確率で使用者の通常攻撃が範囲攻撃になります。",
            "21分間、30%の確率で使用者の通常攻撃が範囲攻撃になります。",
            "24分間、40%の確率で使用者の通常攻撃が範囲攻撃になります。",
            "27分間、50%の確率で使用者の通常攻撃が範囲攻撃になります。",
            "30分間、60%の確率で使用者の通常攻撃が範囲攻撃になります。",
            "30分間、80%の確率で使用者の通常攻撃が範囲攻撃になります。",
            "90分間、100%の確率で使用者の通常攻撃が範囲攻撃になります。",
        ],
        attributes: {}
    },
    {
        name: "ferocious",
        displayName: "フェロシアス",
        icon: savage_ferocious,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、移動速度を10%増加し、クリティカル攻撃を受けた時のダメージを15%減少させます。",
            "21分間、移動速度を12%増加し、クリティカル攻撃を受けた時のダメージを20%減少させます。",
            "24分間、移動速度を14%増加し、クリティカル攻撃を受けた時のダメージを25%減少させます。",
            "27分間、移動速度を16%増加し、クリティカル攻撃を受けた時のダメージを30%減少させます。",
            "30分間、移動速度を18%増加し、クリティカル攻撃を受けた時のダメージを35%減少させます。",
            "30分間、移動速度を20%増加し、クリティカル攻撃を受けた時のダメージを40%減少させます。",
            "120分間、移動速度を30%増加し、クリティカル攻撃を受けた時のダメージを50%減少させます。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 10,
                multiplyDecreaseCriticalDamageTaken: 15
            },
            1: {
                multiplyMovementSpeed: 12,
                multiplyDecreaseCriticalDamageTaken: 20
            },
            2: {
                multiplyMovementSpeed: 14,
                multiplyDecreaseCriticalDamageTaken: 25
            },
            3: {
                multiplyMovementSpeed: 16,
                multiplyDecreaseCriticalDamageTaken: 30
            },
            4: {
                multiplyMovementSpeed: 18,
                multiplyDecreaseCriticalDamageTaken: 35
            },
            5: {
                multiplyMovementSpeed: 20,
                multiplyDecreaseCriticalDamageTaken: 40
            },
            6: {
                multiplyMovementSpeed: 30,
                multiplyDecreaseCriticalDamageTaken: 50
            }
        }
    },
    {
        name: "fortunate",
        displayName: "フォーチュネイト",
        icon: savage_fortunate,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "30秒スタン、ルートに抵抗する。スタン、ルート状態でも使用可能。"
        ],
        attributes: {}
    },
    {
        name: "monsterMind",
        displayName: "モンスターマインド",
        icon: savage_monster_mind,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間使用者のPVE攻撃力が2%増加します。",
            "21分間使用者のPVE攻撃力が4%増加します。",
            "24分間使用者のPVE攻撃力が6%増加します。",
            "27分間使用者のPVE攻撃力が8%増加します。",
            "30分間使用者のPVE攻撃力が10%増加します。",
            "30分間使用者のPVE攻撃力が12%増加します。",
            "120分間使用者のPVE攻撃力が15%増加します。",
        ],
        attributes: {
            0: {
                multiplyPVEAttack: 2,
            },
            1: {
                multiplyPVEAttack: 4,
            },
            2: {
                multiplyPVEAttack: 6,
            },
            3: {
                multiplyPVEAttack: 8,
            },
            4: {
                multiplyPVEAttack: 10,
            },
            5: {
                multiplyPVEAttack: 12,
            },
            6: {
                multiplyPVEAttack: 15,
            }
        }
    },
    {
        name: "extraction",
        displayName: "エクストラクション",
        icon: savage_extraction,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の180%ほど増加したダメージを与え、臓器を抽出。",
            "対象に通常攻撃の190%ほど増加したダメージを与え、臓器を抽出。",
            "対象に通常攻撃の200%ほど増加したダメージを与え、臓器を抽出。",
            "対象に通常攻撃の210%ほど増加したダメージを与え、臓器を抽出。",
            "対象に通常攻撃の220%ほど増加したダメージを与え、臓器を抽出。",
            "対象に通常攻撃の230%ほど増加したダメージを与え、臓器を抽出。",
            "対象に通常攻撃の240%ほど増加したダメージを与え、臓器を抽出。",
        ],
        attributes: {}
    },
    {
        name: "brutality",
        displayName: "ブルタリティ",
        icon: savage_brutality,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の力を10%、体力を2%増加させます。",
            "21分間、使用者の力を15%、体力を4%増加させます。",
            "24分間、使用者の力を20%、体力を6%増加させます。",
            "27分間、使用者の力を25%、体力を8%増加させます。",
            "30分間、使用者の力を30%、体力を10%増加させます。",
            "30分間、使用者の力を45%、体力を12%増加させます。",
            "120分間、使用者の力を60%、体力を15%増加させます。",
        ],
        attributes: {
            0: {
                multiplyStrength: 10,
                multiplyVitality: 2
            },
            1: {
                multiplyStrength: 15,
                multiplyVitality: 4
            },
            2: {
                multiplyStrength: 20,
                multiplyVitality: 6
            },
            3: {
                multiplyStrength: 25,
                multiplyVitality: 8
            },
            4: {
                multiplyStrength: 30,
                multiplyVitality: 10
            },
            5: {
                multiplyStrength: 45,
                multiplyVitality: 12
            },
            6: {
                multiplyStrength: 60,
                multiplyVitality: 15
            }
        }
    },
    {
        name: "gailsShock",
        displayName: "ゲイルショック",
        icon: savage_gails_shock,
        category: "Debuff",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "180秒間、トーテム範囲内の敵の命中率を5%減少。",
            "180秒間、トーテム範囲内の敵の命中率を10%減少。",
            "180秒間、トーテム範囲内の敵の命中率を15%減少。",
            "180秒間、トーテム範囲内の敵の命中率を20%減少。",
            "180秒間、トーテム範囲内の敵の命中率を25%減少。",
            "180秒間、トーテム範囲内の敵の命中率を30%減少。",
            "240秒間、トーテム範囲内の敵の命中率を50%減少。",
        ],
        attributes: {}
    },
    {
        name: "lunge",
        displayName: "ランジ",
        icon: savage_lunge,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の180%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間30%減少。",
            "対象に通常攻撃の190%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間30%減少。",
            "対象に通常攻撃の200%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間30%減少。",
            "対象に通常攻撃の210%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間40%減少。",
            "対象に通常攻撃の220%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間40%減少。",
            "対象に通常攻撃の230%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間40%減少。",
            "対象に通常攻撃の240%ほど増加したダメージ。追加効果として内臓を消費し、対象の移動速度を5秒間50%減少。",
        ],
        attributes: {}
    },
    {
        name: "gailsWash",
        displayName: "ゲイルウォッシュ",
        icon: savage_gails_wash,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "180秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
            "240秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
            "300秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
            "360秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
            "420秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
            "480秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
            "600秒間、トーテム範囲内のパーティーメンバーにかかっている異常状態スキルを3秒毎に1個解除。",
        ],
        attributes: {}
    },
    {
        name: "deathParadeAssault",
        displayName: "デスパレードアサルト",
        icon: savage_desperate_assault,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者を中心に15メートル内の対象2人を2秒間スタン。",
            "使用者を中心に15メートル内の対象2人を3秒間スタン。",
            "使用者を中心に15メートル内の対象3人を3秒間スタン。",
            "使用者を中心に15メートル内の対象3人を4秒間スタン。",
            "使用者を中心に15メートル内の対象4人を4秒間スタン。",
            "使用者を中心に15メートル内の対象5人を4秒間スタン。",
            "使用者を中心に15メートル内の対象6人を5秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "ruthless",
        displayName: "ルースレス",
        icon: savage_ruthless,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "150%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間50減少。",
            "160%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間60減少。",
            "170%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間70減少。",
            "180%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間80減少。",
            "190%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間90減少。",
            "200%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間100減少。",
            "210%ほど増加した広域攻撃。心臓の追加効果で物理防御力を20秒間150減少。",
        ],
        attributes: {}
    },
    {
        name: "gailsBreath",
        displayName: "ゲイルブレス",
        icon: savage_gails_bless,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "180秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に3000回復。",
            "240秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に5000回復。",
            "300秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に8000回復。",
            "360秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に11000回復。",
            "420秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に15000回復。",
            "480秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に20000回復。",
            "600秒間、トーテム範囲内のパーティーメンバーのHPを3秒毎に40000回復。",
        ],
        attributes: {}
    },
    {
        name: "barbaricCry",
        displayName: "バルバリッククライ",
        icon: savage_barbaric_cry,
        category: "Other",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周りの敵2体を、5秒間通常攻撃ができないようにする。",
            "対象と周りの敵3体を、7秒間通常攻撃ができないようにする。",
            "対象と周りの敵4体を、9秒間通常攻撃ができないようにする。",
            "対象と周りの敵5体を、11秒間通常攻撃ができないようにする。",
            "対象と周りの敵6体を、13秒間通常攻撃ができないようにする。",
            "対象と周りの敵7体を、15秒間通常攻撃ができないようにする。",
            "対象と周りの敵8体を、20秒間通常攻撃ができないようにする。",
        ],
        attributes: {}
    },
    {
        name: "stomingClose",
        displayName: "ストーミングクロース",
        icon: savage_stoming_cross,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周りの敵に力の500%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに3秒間ポーション使用不可状態を付与。",
            "対象と周りの敵に力の800%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに4秒間ポーション使用不可状態を付与。",
            "対象と周りの敵に力の1100%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに5秒間ポーション使用不可状態を付与。",
            "対象と周りの敵に力の1400%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに6秒間ポーション使用不可状態を付与。",
            "対象と周りの敵に力の1700%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに7秒間ポーション使用不可状態を付与。",
            "対象と周りの敵に力の2000%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに10秒間ポーション使用不可状態を付与。",
            "対象と周りの敵に力の3000%ほど増加したダメージを与えます。追加効果として脳を消費し、ターゲットに15秒間ポーション使用不可状態を付与。",
        ],
        attributes: {}
    },
    {
        name: "gailsCry",
        displayName: "ゲイルクライ",
        icon: savage_gails_cry,
        category: "Buff",
        origin: "Group",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、トーテム範囲内のパーティーメンバーの攻撃速度を10%増加させる。",
            "120秒間、トーテム範囲内のパーティーメンバーの攻撃速度を15%増加させる。",
            "180秒間、トーテム範囲内のパーティーメンバーの攻撃速度を15%増加させる。",
            "240秒間、トーテム範囲内のパーティーメンバーの攻撃速度を20%増加させる。",
            "240秒間、トーテム範囲内のパーティーメンバーの攻撃速度を20%増加させる。",
            "240秒間、トーテム範囲内のパーティーメンバーの攻撃速度を25%増加させる。",
            "300秒間、トーテム範囲内のパーティーメンバーの攻撃速度を30%増加させる。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 10,
            },
            1: {
                multiplyAttackSpeed: 15,
            },
            2: {
                multiplyAttackSpeed: 15,
            },
            3: {
                multiplyAttackSpeed: 20,
            },
            4: {
                multiplyAttackSpeed: 20,
            },
            5: {
                multiplyAttackSpeed: 25,
            },
            6: {
                multiplyAttackSpeed: 30,
            }
        }
    },
    {
        name: "freezingTornado",
        displayName: "フリージングトネイド",
        icon: savage_freezing_tornado,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象を中心に通常攻撃の110%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が2%減少。",
            "対象を中心に通常攻撃の120%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が3%減少。",
            "対象を中心に通常攻撃の130%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が4%減少。",
            "対象を中心に通常攻撃の140%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が5%減少。",
            "対象を中心に通常攻撃の150%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が7%減少。",
            "対象を中心に通常攻撃の160%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が15%減少。",
            "対象を中心に通常攻撃の170%ほど増加したダメージ。追加効果として脳、心臓、内臓を消費し、10秒間敵の攻撃速度と移動速度が20%減少。",
        ],
        attributes: {}
    },
    {
        name: "breage",
        displayName: "ビリージ",
        icon: savage_breage,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "力の1000%、体力の1000%ほどのダメージを与える。",
            "力の1600%、体力の1600%ほどのダメージを与える。",
            "力の2200%、体力の2200%ほどのダメージを与える。",
            "力の2800%、体力の2800%ほどのダメージを与える。",
            "力の3400%、体力の3400%ほどのダメージを与える。",
            "力の4000%、体力の4000%ほどのダメージを与える。",
            "力の5000%、体力の5000%ほどのダメージを与える。",
        ],
        attributes: {}
    },
    {
        name: "brokenGround",
        displayName: "ブロークングラウンド",
        icon: savage_broken_ground,
        category: "Attack",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者を中心に10メートル内の対象に20%増加したダメージ。10秒間全攻撃力・防御力を3％減少。",
            "使用者を中心に10メートル内の対象に40%増加したダメージ。10秒間全攻撃力・防御力を6％減少。",
            "使用者を中心に10メートル内の対象に60%増加したダメージ。10秒間全攻撃力・防御力を9％減少。",
            "使用者を中心に10メートル内の対象に80%増加したダメージ。10秒間全攻撃力・防御力を12％減少。",
            "使用者を中心に10メートル内の対象に100%増加したダメージ。10秒間全攻撃力・防御力を15％減少。",
            "使用者を中心に10メートル内の対象に140%増加したダメージ。10秒間全攻撃力・防御力を20％減少。",
            "使用者を中心に10メートル内の対象に200%増加したダメージ。10秒間全攻撃力・防御力を30％減少。",
        ],
        attributes: {}
    },
    {
        name: "furyTempest",
        displayName: "フューリーテンペスト",
        icon: savage_fury_tempest,
        category: "Buff",
        origin: "Self",
        raceid: 6,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、攻撃速度が50%増加、ダメージの5%を次の攻撃に追加(累積)。",
            "20秒間、攻撃速度が55%増加、ダメージの6%を次の攻撃に追加(累積)。",
            "20秒間、攻撃速度が60%増加、ダメージの6%を次の攻撃に追加(累積)。",
            "20秒間、攻撃速度が65%増加、ダメージの7%を次の攻撃に追加(累積)。",
            "20秒間、攻撃速度が70%増加、ダメージの7%を次の攻撃に追加(累積)。",
            "20秒間、攻撃速度が80%増加、ダメージの8%を次の攻撃に追加(累積)。",
            "20秒間、攻撃速度が100%増加、ダメージの10%を次の攻撃に追加(累積)。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 50,
            },
            1: {
                multiplyAttackSpeed: 55,
            },
            2: {
                multiplyAttackSpeed: 60,
            },
            3: {
                multiplyAttackSpeed: 65,
            },
            4: {
                multiplyAttackSpeed: 70,
            },
            5: {
                multiplyAttackSpeed: 80,
            },
            6: {
                multiplyAttackSpeed: 100,
            }
        }
    },

]