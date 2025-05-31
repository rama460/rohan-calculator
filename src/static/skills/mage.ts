import { Skill } from "./skill";

import mage_energy_sphere from "../../assets/skills/mage/MA_Energy_Sphere.gif";
import mage_cold_wave from "../../assets/skills/mage/MA_Cold_Wave.gif";
import mage_dark_message from "../../assets/skills/mage/MA_Dark_Message.gif";
import mage_dark_eyes from "../../assets/skills/mage/MA_Dark_Eyes.gif";
import mage_cure_silence from "../../assets/skills/mage/MA_Cure_Silence.gif";
import mage_broken_barrier from "../../assets/skills/mage/MA_Broken_Barrier.gif";
import mage_health_coil from "../../assets/skills/mage/MA_Health_Coil.gif";
import mage_magic_boost from "../../assets/skills/mage/MA_Magic_Boost.gif";
import mage_timing_mind from "../../assets/skills/mage/MA_Timing_Mind.gif";
import mage_mana_coil from "../../assets/skills/mage/MA_Mana_Coil.gif";
import mage_strong_mind from "../../assets/skills/mage/MA_Strong_Mind.gif";
import mage_ice_frozen from "../../assets/skills/mage/MA_Ice_Frozen.gif";
import mage_int_beam from "../../assets/skills/mage/MA_Int_Beam.gif";
import mage_broken_back from "../../assets/skills/mage/MA_Broken_Bag.gif";
import mage_dispel_magic from "../../assets/skills/mage/MA_Dispel_Magic.gif";
import mage_wide_in_college from "../../assets/skills/mage/MA_Wide_in_College.gif";
import mage_magic_reflection from "../../assets/skills/mage/MA_Magic_Reflection.gif";
import mage_wide_pollution from "../../assets/skills/mage/MA_Wide_Pollution.gif";
import mage_portal_warp from "../../assets/skills/mage/MA_Portal_Warp.gif";


export const mage_skills: Skill[] = [
    {
        name: "energySphere",
        displayName: "エネルギースフィア",
        icon: mage_energy_sphere,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "魔法攻撃の50%増加したダメージ。",
            "魔法攻撃の80%増加したダメージ。",
            "魔法攻撃の110%増加したダメージ。",
            "魔法攻撃の140%増加したダメージ。",
            "魔法攻撃の170%増加したダメージ。",
            "魔法攻撃の200%増加したダメージ。",
            "魔法攻撃の230%増加したダメージ。",
        ],
        attributes: {}
    },
    {
        name: "coldWave",
        displayName: "コールドウェーブ",
        icon: mage_cold_wave,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "2秒間対象を移動不可(ルート)にする。",
            "3秒間対象を移動不可(ルート)にする。",
            "4秒間対象を移動不可(ルート)にする。",
            "5秒間対象を移動不可(ルート)にする。",
            "6秒間対象を移動不可(ルート)にする。",
            "7秒間対象を移動不可(ルート)にする。",
            "8秒間対象を移動不可(ルート)にする。",
        ],
        attributes: {}
    },
    {
        name: "darkMessage",
        displayName: "ダークメッセージ",
        icon: mage_dark_message,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者のレベルの150倍ほどHPとMPを増加させます。",
            "21分間、使用者のレベルの170倍ほどHPとMPを増加させます。",
            "24分間、使用者のレベルの190倍ほどHPとMPを増加させます。",
            "27分間、使用者のレベルの210倍ほどHPとMPを増加させます。",
            "30分間、使用者のレベルの230倍ほどHPとMPを増加させます。",
            "30分間、使用者のレベルの250倍ほどHPとMPを増加させます。",
            "30分間、使用者のレベルの300倍ほどHPとMPを増加させます。",
        ],
        attributes: {
            0: {
                plusHitPointMultiplyLevel: 150,
                plusMagicPointMultiplyLevel: 150,
            },
            1: {
                plusHitPointMultiplyLevel: 170,
                plusMagicPointMultiplyLevel: 170,
            },
            2: {
                plusHitPointMultiplyLevel: 190,
                plusMagicPointMultiplyLevel: 190,
            },
            3: {
                plusHitPointMultiplyLevel: 210,
                plusMagicPointMultiplyLevel: 210,
            },
            4: {
                plusHitPointMultiplyLevel: 230,
                plusMagicPointMultiplyLevel: 230,
            },
            5: {
                plusHitPointMultiplyLevel: 250,
                plusMagicPointMultiplyLevel: 250,
            },
            6: {
                plusHitPointMultiplyLevel: 300,
                plusMagicPointMultiplyLevel: 300,
            }
        }
    },
    {
        name: "darkEyes",
        displayName: "ダークアイズ",
        icon: mage_dark_eyes,
        category: "Buff",
        origin: "Group",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "魔法攻撃力15%増加。",
        ],
        attributes: {
            0: {
                multiplyMagicAttack: 15,
            }
        }
    },
    {
        name: "cureSilence",
        displayName: "キュアサイレンス",
        icon: mage_cure_silence,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "対象にかかっているサイレンス(スキル使用不可能)効果を治療。"
        ],
        attributes: {}
    },
    {
        name: "brokenBarrier",
        displayName: "ブロークンバリア",
        icon: mage_broken_barrier,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "対象に適用されているマジックバリアー、マナガードスキルを破壊。"
        ],
        attributes: {}
    },
    {
        name: "healthCoil",
        displayName: "ヘルスコイル",
        icon: mage_health_coil,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に魔法攻撃の30%増加したダメージを加えてダメージの50%をHPで吸収。",
            "対象に魔法攻撃の60%増加したダメージを加えてダメージの55%をHPで吸収。",
            "対象に魔法攻撃の90%増加したダメージを加えてダメージの60%をHPで吸収。",
            "対象に魔法攻撃の120%増加したダメージを加えてダメージの65%をHPで吸収。",
            "対象に魔法攻撃の150%増加したダメージを加えてダメージの70%をHPで吸収。",
            "対象に魔法攻撃の180%増加したダメージを加えてダメージの80%をHPで吸収。",
            "対象に魔法攻撃の210%増加したダメージを加えてダメージの90%をHPで吸収。",
        ],
        attributes: {}
    },
    {
        name: "magicBoost",
        displayName: "マジックブースト",
        icon: mage_magic_boost,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、魔法攻撃のクリティカル率が4%増加します。",
            "21分間、魔法攻撃のクリティカル率が5%増加します。",
            "24分間、魔法攻撃のクリティカル率が6%増加します。",
            "27分間、魔法攻撃のクリティカル率が7%増加します。",
            "30分間、魔法攻撃のクリティカル率が8%増加します。",
            "30分間、魔法攻撃のクリティカル率が10%増加します。",
            "90分間、魔法攻撃のクリティカル率が15%増加します。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 4,
            },
            1: {
                plusCriticalRate: 5,
            },
            2: {
                plusCriticalRate: 6,
            },
            3: {
                plusCriticalRate: 7,
            },
            4: {
                plusCriticalRate: 8,
            },
            5: {
                plusCriticalRate: 10,
            },
            6: {
                plusCriticalRate: 15,
            }
        }
    },
    {
        name: "timingMind",
        displayName: "テイミングマインド",
        icon: mage_timing_mind,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象が4秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
            "対象が7秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
            "対象が10秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
            "対象が13秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
            "対象が16秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
            "対象が19秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
            "対象が25秒間何もできない状態にします。対象がダメージを受ければ状態が解除。",
        ],
        attributes: {}
    },
    {
        name: "manaCoil",
        displayName: "マナコイル",
        icon: mage_mana_coil,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に魔法攻撃の30%増加したダメージを加えて加えたダメージの50%をMPで吸収。",
            "対象に魔法攻撃の60%増加したダメージを加えて加えたダメージの60%をMPで吸収。",
            "対象に魔法攻撃の90%増加したダメージを加えて加えたダメージの70%をMPで吸収。",
            "対象に魔法攻撃の120%増加したダメージを加えて加えたダメージの80%をMPで吸収。",
            "対象に魔法攻撃の150%増加したダメージを加えて加えたダメージの90%をMPで吸収。",
            "対象に魔法攻撃の180%増加したダメージを加えて加えたダメージの100%をMPで吸収。",
            "対象に魔法攻撃の210%増加したダメージを加えて加えたダメージの110%をMPで吸収。",
        ],
        attributes: {}
    },
    {
        name: "strongMind",
        displayName: "ストロングマインド",
        icon: mage_strong_mind,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、クリティカル攻撃時、使用者の知能の50%、精神の90%ほどダメージが増加されたダメージを与えます。",
            "21分間、クリティカル攻撃時、使用者の知能の105%、精神の200%ほどダメージが増加されたダメージを与えます。",
            "24分間、クリティカル攻撃時、使用者の知能の160%、精神の310%ほどダメージが増加されたダメージを与えます。",
            "27分間、クリティカル攻撃時、使用者の知能の215%、精神の420%ほどダメージが増加されたダメージを与えます。",
            "30分間、クリティカル攻撃時、使用者の知能の270%、精神の530%ほどダメージが増加されたダメージを与えます。",
            "30分間、クリティカル攻撃時、使用者の知能の325%、精神の640%ほどダメージが増加されたダメージを与えます。",
            "90分間、クリティカル攻撃時、使用者の知能の450%、精神の850%ほどダメージが増加されたダメージを与えます。",
        ],
        attributes: {
            0: {
                plusCriticalDamageMultiplyIntelligence: 50,
                plusCriticalDamageMultiplyMentality: 90,
            },
            1: {
                plusCriticalDamageMultiplyIntelligence: 105,
                plusCriticalDamageMultiplyMentality: 200,
            },
            2: {
                plusCriticalDamageMultiplyIntelligence: 160,
                plusCriticalDamageMultiplyMentality: 310,
            },
            3: {
                plusCriticalDamageMultiplyIntelligence: 215,
                plusCriticalDamageMultiplyMentality: 420,
            },
            4: {
                plusCriticalDamageMultiplyIntelligence: 270,
                plusCriticalDamageMultiplyMentality: 530,
            },
            5: {
                plusCriticalDamageMultiplyIntelligence: 325,
                plusCriticalDamageMultiplyMentality: 640,
            },
            6: {
                plusCriticalDamageMultiplyIntelligence: 450,
                plusCriticalDamageMultiplyMentality: 850,
            }
        }
    },
    {
        name: "iceFrozen",
        displayName: "アイスフローズン",
        icon: mage_ice_frozen,
        category: "Debuff",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間対象の攻撃速度を20%、移動速度を10%位減少。",
            "20秒間対象の攻撃速度を25%、移動速度を20%位減少。",
            "20秒間対象の攻撃速度を30%、移動速度を30%位減少。",
            "20秒間対象の攻撃速度を35%、移動速度を40%位減少。",
            "20秒間対象の攻撃速度を40%、移動速度を50%位減少。",
            "20秒間対象の攻撃速度を50%、移動速度を60%位減少。",
            "20秒間対象の攻撃速度を60%、移動速度を70%位減少。",
        ],
        attributes: {}
    },
    {
        name: "intBeam",
        displayName: "イントビーム",
        icon: mage_int_beam,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に知能200%増加した魔法ダメージ。",
            "対象に知能250%増加した魔法ダメージ。",
            "対象に知能300%増加した魔法ダメージ。",
            "対象に知能350%増加した魔法ダメージ。",
            "対象に知能450%増加した魔法ダメージ。",
            "対象に知能550%増加した魔法ダメージ。",
            "対象に知能700%増加した魔法ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "brokenBag",
        displayName: "ブロークンバック",
        icon: mage_broken_back,
        category: "Debuff",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間対象の所持が可能な重さを20%、魔法抵抗の確率を10%減少。",
            "30秒間対象の所持が可能な重さを25%、魔法抵抗の確率を20%減少。",
            "30秒間対象の所持が可能な重さを30%、魔法抵抗の確率を30%減少。",
            "30秒間対象の所持が可能な重さを35%、魔法抵抗の確率を40%減少。",
            "30秒間対象の所持が可能な重さを40%、魔法抵抗の確率を50%減少。",
            "30秒間対象の所持が可能な重さを50%、魔法抵抗の確率を60%減少。",
            "30秒間対象の所持が可能な重さを60%、魔法抵抗の確率を70%減少。",
        ],
        attributes: {}
    },
    {
        name: "dispelMagic",
        displayName: "ディスペルマジック",
        icon: mage_dispel_magic,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "対象にかかっている特殊バフを1個ランダムに削除。",
            "対象にかかっている特殊バフを1個ランダムに削除。",
            "対象にかかっている特殊バフを1個ランダムに削除。",
            "対象にかかっている特殊バフを1個ランダムに削除。",
            "対象にかかっている特殊バフを1個ランダムに削除。",
            "対象にかかっている特殊バフを1個ランダムに削除。",
            "対象にかかっている特殊バフを1個ランダムに削除。",
        ],
        attributes: {}
    },
    {
        name: "wideInCollege",
        displayName: "ワイドインカレッジ",
        icon: mage_wide_in_college,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周辺の敵に知能の450%ほど増加したダメージ、範囲10メートル。",
            "対象と周辺の敵に知能の500%ほど増加したダメージ、範囲10メートル。",
            "対象と周辺の敵に知能の550%ほど増加したダメージ、範囲10メートル。",
            "対象と周辺の敵に知能の600%ほど増加したダメージ、範囲10メートル。",
            "対象と周辺の敵に知能の700%ほど増加したダメージ、範囲10メートル。",
            "対象と周辺の敵に知能の800%ほど増加したダメージ、範囲10メートル。",
            "対象と周辺の敵に知能の1000%ほど増加したダメージ、範囲10メートル。",
        ],
        attributes: {}
    },
    {
        name: "magicReflection",
        displayName: "マジックリフレクション",
        icon: mage_magic_reflection,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、自分にかけられる魔法攻撃の40%位ダメージを受けて攻撃者に30%位反射。",
            "25秒間、自分にかけられる魔法攻撃の35%位ダメージを受けて攻撃者に35%位反射。",
            "30秒間、自分にかけられる魔法攻撃の30%位ダメージを受けて攻撃者に40%位反射。",
            "35秒間、自分にかけられる魔法攻撃の25%位ダメージを受けて攻撃者に45%位反射。",
            "40秒間、自分にかけられる魔法攻撃の20%位ダメージを受けて攻撃者に50%位反射。",
            "50秒間、自分にかけられる魔法攻撃の10%位ダメージを受けて攻撃者に60%位反射。",
            "60秒間、自分にかけられる魔法攻撃の10%位ダメージを受けて攻撃者に70%位反射。",
        ],
        attributes: {}
    },
    {
        name: "widePollution",
        displayName: "ワイドポリューション",
        icon: mage_wide_pollution,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周辺の敵に精神600%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
            "対象と周辺の敵に精神700%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
            "対象と周辺の敵に精神800%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
            "対象と周辺の敵に精神900%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
            "対象と周辺の敵に精神1000%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
            "対象と周辺の敵に精神1250%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
            "対象と周辺の敵に精神1500%位15秒間ダメージを加えます。範囲10メートル。解毒ポーションで解毒可能。",
        ],
        attributes: {}
    },
    {
        name: "portalWarp",
        displayName: "ポータルワープ",
        icon: mage_portal_warp,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "ポータルストーンを利用して瞬間移動をします。一般ポータルストーンを使用可能です。ポータルストーンを消耗して範囲7メートル以内にいるパーティーメンバーも一緒に移動します。",
            "ポータルストーンを利用して瞬間移動をします。一般、ダンジョンポータルストーンを使用可能です。ポータルストーンを消耗して範囲7メートル以内にいるパーティーメンバーも一緒に移動します。",
            "ポータルストーンを利用して瞬間移動をします。一般、ダンジョンポータルストーンを使用可能で、戦闘中にも使うことができます。ポータルストーンを消耗して範囲7メートル以内にいるパーティーメンバーも一緒に移動します。",
            "ポータルストーンを利用して瞬間移動をします。一般、ダンジョンポータルストーンを使用可能で、戦闘中にも使うことができます。ポータルストーンを消耗して範囲7メートル以内にいるパーティーメンバーも一緒に移動します。即時詠唱できるようになります。",
            "ポータルストーンを利用して瞬間移動をします。一般、ダンジョンポータルストーンを使用可能で、戦闘中にも使うことができます。ポータルストーンを消耗して範囲7メートル以内にいるパーティーメンバーも一緒に移動します。即時詠唱できるようになります。"
        ],
        attributes: {}
    }
]