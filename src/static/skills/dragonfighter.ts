import { Skill } from "./skill";

import dragonfighter_blazing from "../../assets/skills/blazing.gif";
import dragonfighter_frozen from "../../assets/skills/frozen.gif";
import dragonfighter_darkness from "../../assets/skills/darkness.gif";
import dragonfighter_mana_return from "../../assets/skills/dragonfighter/DE_mana_return.gif";
import dragonfighter_taunt from "../../assets/skills/dragonfighter/DE_Taunt.gif";
import dragonfighter_dragon_power from "../../assets/skills/dragonfighter/DE_Dragon_power.gif";
import dragonfighter_separation from "../../assets/skills/dragonfighter/DE_Separation.gif";
import dragonfighter_health_to_mana from "../../assets/skills/dragonfighter/DE_Health_to_mana.gif";
import dragonfighter_forefoot_swing from "../../assets/skills/dragonfighter/DE_Forefoot_swing.gif";
import dragonfighter_sepa_slash from "../../assets/skills/dragonfighter/DE_Sepa_slash.gif";
import dragonfighter_mana_to_health from "../../assets/skills/dragonfighter/DE_Mana_to_health.gif";
import dragonfighter_dragon_tail from "../../assets/skills/dragonfighter/DE_Dragon_tail.gif";
import dragonfighter_nail_zen from "../../assets/skills/dragonfighter/DE_Nail_zen.gif";
import dragonfighter_breath from "../../assets/skills/dragonfighter/DE_Breath.gif";
import dragonfighter_zen_counter from "../../assets/skills/dragonfighter/DE_Zen_counter.gif";
import dragonfighter_pray from "../../assets/skills/dragonfighter/DE_Pray.gif";
import dragonfighter_health_drain from "../../assets/skills/dragonfighter/DE_Health_drain.gif";
import dragonfighter_dragon_skin from "../../assets/skills/dragonfighter/DE_Dragon_skin.gif";


export const dragonfighter_skills: Skill[] = [

    {
        name: "blazing",
        displayName: "ブレイジング",
        icon: dragonfighter_blazing,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "火属性攻撃力+20% 火属性防御力+10% 4%の確率でダメージの5%を自分のHPとして吸収。",
            "火属性攻撃力+40% 火属性防御力+20% 5%の確率でダメージの6%を自分のHPとして吸収。",
            "火属性攻撃力+60% 火属性防御力+30% 6%の確率でダメージの7%を自分のHPとして吸収。",
            "火属性攻撃力+80% 火属性防御力+40% 7%の確率でダメージの8%を自分のHPとして吸収。",
            "火属性攻撃力+100% 火属性防御力+50% 8%の確率でダメージの10%を自分のHPとして吸収。"
        ],
        attributes: {}
    },
    {
        name: "frozen",
        displayName: "フローズン",
        icon: dragonfighter_frozen,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "水属性攻撃力+20% 水属性防御力+10% 4%の確率で7秒間対象の移動速度を10%減少。",
            "水属性攻撃力+40% 水属性防御力+20% 5%の確率で7秒間対象の移動速度を15%減少。",
            "水属性攻撃力+60% 水属性防御力+30% 6%の確率で7秒間対象の移動速度を20%減少。",
            "水属性攻撃力+80% 水属性防御力+40% 7%の確率で7秒間対象の移動速度を25%減少。",
            "水属性攻撃力+100% 水属性防御力+50% 8%の確率で7秒間対象の移動速度を30%減少。"
        ],
        attributes: {}
    },
    {
        name: "darkness",
        displayName: "ダークネス",
        icon: dragonfighter_darkness,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "暗黒属性攻撃力+20% 暗黒属性防御力+10% 4%の確率で7秒間、対象の攻撃速度を10%減少。",
            "暗黒属性攻撃力+40% 暗黒属性防御力+20% 5%の確率で7秒間、対象の攻撃速度を15%減少。",
            "暗黒属性攻撃力+60% 暗黒属性防御力+30% 6%の確率で7秒間、対象の攻撃速度を20%減少。",
            "暗黒属性攻撃力+80% 暗黒属性防御力+40% 7%の確率で7秒間、対象の攻撃速度を25%減少。",
            "暗黒属性攻撃力+100% 暗黒属性防御力+50% 8%の確率で7秒間、対象の攻撃速度を30%減少。"
        ],
        attributes: {}
    },
    {
        name: "manareturn",
        displayName: "マナリターン",
        icon: dragonfighter_mana_return,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "受けたダメージの1%程度MPを回復。",
            "受けたダメージの2%程度MPを回復。",
            "受けたダメージの3%程度MPを回復。",
            "受けたダメージの4%程度MPを回復。",
            "受けたダメージの5%程度MPを回復。"
        ],
        attributes: {}
    },
    {
        name: "taunt",
        displayName: "タウント",
        icon: dragonfighter_taunt,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "ターゲットしたモンスターが使用者を攻撃するようにする。パーティー時のみ使用可能。"
        ],
        attributes: {}
    },
    {
        name: "dragonPower",
        displayName: "ドラゴンパワー",
        icon: dragonfighter_dragon_power,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の近距離攻撃力を10%増加させます。",
            "21分間、使用者の近距離攻撃力を15%増加させます。",
            "24分間、使用者の近距離攻撃力を20%増加させます。",
            "27分間、使用者の近距離攻撃力を25%増加させます。",
            "30分間、使用者の近距離攻撃力を30%増加させます。",
            "30分間、使用者の近距離攻撃力を35%増加させます。",
            "90分間、使用者の近距離攻撃力を45%増加させます。",
        ],
        attributes: {
            0: {
                multiplyMeleeAttack: 10,
            },
            1: {
                multiplyMeleeAttack: 15,
            },
            2: {
                multiplyMeleeAttack: 20,
            },
            3: {
                multiplyMeleeAttack: 25,
            },
            4: {
                multiplyMeleeAttack: 30,
            },
            5: {
                multiplyMeleeAttack: 35,
            },
            6: {
                multiplyMeleeAttack: 45,
            }
        }
    },
    {
        name: "separation",
        displayName: "セパレーション",
        icon: dragonfighter_separation,
        category: "Buff",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "ゼンを分離して攻撃。武器ダメージ25%減少、物理防御力10%減少、攻撃速度60%増加"
        ],
        attributes: {
            0: {
                multiplyWeaponAttack: -25,
                multiplyPhysicalDefense: -10,
                multiplyAttackSpeed: 60,
            }
        }
    },
    {
        name: "hellToMana",
        displayName: "ヘルストゥマナ",
        icon: dragonfighter_health_to_mana,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "現在のHPの10%を消費して、消費したHPの75%程度MPに転換。",
            "現在のHPの10%を消費して、消費したHPの120%程度MPに転換。",
            "現在のHPの10%を消費して、消費したHPの175%程度MPに転換。",
            "現在のHPの10%を消費して、消費したHPの225%程度MPに転換。",
            "現在のHPの10%を消費して、消費したHPの275%程度MPに転換。",
            "現在のHPの10%を消費して、消費したHPの325%程度MPに転換。",
            "現在のHPの10%を消費して、消費したHPの400%程度MPに転換。"
        ],
        attributes: {}
    },
    {
        name: "forefootSwing",
        displayName: "フォアフットスウィング",
        icon: dragonfighter_forefoot_swing,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "HPを20%消費、消費したHPの30%程度のダメージ。",
            "HPを20%消費、消費したHPの40%程度のダメージ。",
            "HPを20%消費、消費したHPの50%程度のダメージ。",
            "HPを20%消費、消費したHPの60%程度のダメージ。",
            "HPを18%消費、消費したHPの100%程度のダメージ。",
            "HPを15%消費、消費したHPの200%程度のダメージ。",
            "HPを10%消費、消費したHPの325%程度のダメージ。"
        ],
        attributes: {}
    },
    {
        name: "sepaSlash",
        displayName: "セパスラッシュ",
        icon: dragonfighter_sepa_slash,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "通常攻撃の180%の追加ダメージ。",
            "通常攻撃の200%の追加ダメージ。",
            "通常攻撃の220%の追加ダメージ。",
            "通常攻撃の240%の追加ダメージ。",
            "通常攻撃の260%の追加ダメージ。",
            "通常攻撃の280%の追加ダメージ。",
            "通常攻撃の315%の追加ダメージ。"
        ],
        attributes: {}
    },
    {
        name: "manaToHealth",
        displayName: "マナトゥヘルス",
        icon: dragonfighter_mana_to_health,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "現在のMPの10%を消費、消費したMPの150%程度HPに転換。",
            "現在のMPの10%を消費、消費したMPの300%程度HPに転換。",
            "現在のMPの10%を消費、消費したMPの450%程度HPに転換。",
            "現在のMPの10%を消費、消費したMPの600%程度HPに転換。",
            "現在のMPの10%を消費、消費したMPの750%程度HPに転換。",
            "現在のMPの10%を消費、消費したMPの900%程度HPに転換。",
            "現在のMPの10%を消費、消費したMPの1250%程度HPに転換。"
        ],
        attributes: {}
    },
    {
        name: "dragonTail",
        displayName: "ドラゴンテイル",
        icon: dragonfighter_dragon_tail,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "通常攻撃の80%の追加ダメージ。",
            "通常攻撃の90%の追加ダメージ。",
            "通常攻撃の100%の追加ダメージ。",
            "通常攻撃の110%の追加ダメージ。",
            "通常攻撃の120%の追加ダメージ。",
            "通常攻撃の130%の追加ダメージ。",
            "通常攻撃の145%の追加ダメージ。"
        ],
        attributes: {}
    },
    {
        name: "nailZen",
        displayName: "ネイルゼン",
        icon: dragonfighter_nail_zen,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "攻撃力の150%増加した攻撃、最終ダメージの50%で2メートル範囲内の敵にダメージ。",
            "攻撃力の150%増加した攻撃、最終ダメージの60%で3メートル範囲内の敵にダメージ。",
            "攻撃力の150%増加した攻撃、最終ダメージの70%で4メートル範囲内の敵にダメージ。",
            "攻撃力の150%増加した攻撃、最終ダメージの80%で5メートル範囲内の敵にダメージ。",
            "攻撃力の150%増加した攻撃、最終ダメージの90%で6メートル範囲内の敵にダメージ。",
            "攻撃力の150%増加した攻撃、最終ダメージの100%で7メートル範囲内の敵にダメージ。",
            "攻撃力の160%増加した攻撃、最終ダメージの120%で8メートル範囲内の敵にダメージ。"
        ],
        attributes: {}
    },
    {
        name: "breath",
        displayName: "ブレス",
        icon: dragonfighter_breath,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象の防御力を無視し、魔法攻撃力の5倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の7倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の10倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の12倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の15倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の20倍のダメージを与える。",
            "対象の防御力を無視し、魔法攻撃力の25倍のダメージを与える。"
        ],
        attributes: {}
    },
    {
        name: "zenCounter",
        displayName: "ゼンカウンター",
        icon: dragonfighter_zen_counter,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "攻撃力の100%増加した攻撃、最終ダメージの50%で7メートル範囲内の敵にダメージ。",
            "攻撃力の100%増加した攻撃、最終ダメージの60%で7メートル範囲内の敵にダメージ。",
            "攻撃力の100%増加した攻撃、最終ダメージの70%で7メートル範囲内の敵にダメージ。",
            "攻撃力の100%増加した攻撃、最終ダメージの80%で7メートル範囲内の敵にダメージ。",
            "攻撃力の100%増加した攻撃、最終ダメージの90%で7メートル範囲内の敵にダメージ。",
            "攻撃力の120%増加した攻撃、最終ダメージの100%で7メートル範囲内の敵にダメージ。",
            "攻撃力の150%増加した攻撃、最終ダメージの100%で7メートル範囲内の敵にダメージ。"
        ],
        attributes: {}
    },
    {
        name: "pray",
        displayName: "プレイ",
        icon: dragonfighter_pray,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "HPを10%消費、消費したHPの200%程度で対象を回復。",
            "HPを10%消費、消費したHPの250%程度で対象を回復。",
            "HPを10%消費、消費したHPの300%程度で対象を回復。",
            "HPを10%消費、消費したHPの350%程度で対象を回復。",
            "HPを10%消費、消費したHPの400%程度で対象を回復。",
            "HPを10%消費、消費したHPの470%程度で対象を回復。",
            "HPを10%消費、消費したHPの575%程度で対象を回復。"
        ],
        attributes: {}
    },
    {
        name: "healthDrain",
        displayName: "ヘルスドレイン",
        icon: dragonfighter_health_drain,
        category: "Attack",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "魔法攻撃力の400%程度、対象のHPを吸収。",
            "魔法攻撃力の430%程度、対象のHPを吸収。",
            "魔法攻撃力の460%程度、対象のHPを吸収。",
            "魔法攻撃力の490%程度、対象のHPを吸収。",
            "魔法攻撃力の520%程度、対象のHPを吸収。",
            "魔法攻撃力の570%程度、対象のHPを吸収。",
            "魔法攻撃力の650%程度、対象のHPを吸収。"
        ],
        attributes: {}
    },
    {
        name: "dragonSkin",
        displayName: "ドラゴンスキン",
        icon: dragonfighter_dragon_skin,
        category: "Other",
        origin: "Self",
        raceid: 4,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間、麻痺、スタン時受けるダメージを無効化。",
            "15秒間、麻痺、スタン時受けるダメージを無効化。",
            "20秒間、麻痺、スタン時受けるダメージを無効化。",
            "25秒間、麻痺、スタン時受けるダメージを無効化。",
            "30秒間、麻痺、スタン時受けるダメージを無効化。",
            "40秒間、麻痺、スタン時受けるダメージを無効化。",
            "50秒間、麻痺、スタン時受けるダメージを無効化。"
        ],
        attributes: {}
    }
]