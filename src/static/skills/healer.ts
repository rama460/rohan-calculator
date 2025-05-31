import { Skill } from "./skill";

import healer_heal from "../../assets/skills/healer/nE_heal.gif";
import healer_recovery from "../../assets/skills/healer/nE_recovery.gif";
import healer_mind_blast from "../../assets/skills/healer/nE_mind_blast.gif";
import healer_cure_confusion from "../../assets/skills/healer/nE_cure_confusion.gif";
import healer_divine_aura from "../../assets/skills/healer/nE_divine_aura.gif";
import healer_cure_silence from "../../assets/skills/healer/nE_cure_silence.gif";
import healer_divine_beam from "../../assets/skills/healer/nE_divine_beam.gif";
import healer_intelligence_blow from "../../assets/skills/healer/nE_intelligence_blow.gif";
import healer_holy_light from "../../assets/skills/healer/nE_holy_light.gif";
import healer_group_heal from "../../assets/skills/healer/nE_group_heal.gif";
import healer_detect from "../../assets/skills/healer/nE_detect.gif";
import healer_instant_heal from "../../assets/skills/healer/nE_instant_heal.gif";
import healer_magic_barrier from "../../assets/skills/healer/nE_magic_barrier.gif";
import healer_mana_charge from "../../assets/skills/healer/nE_mana_charge.gif";
import healer_mental_barrier from "../../assets/skills/healer/nE_mental_barrier.gif";
import healer_net_bind from "../../assets/skills/healer/nE_net_bind.gif";
import healer_revive from "../../assets/skills/healer/nE_revive.gif";
import healer_saint_strike from "../../assets/skills/healer/nE_saint_strike.gif";
import healer_kill_time from "../../assets/skills/healer/nE_kill_time.gif";

export const healer_skills: Skill[] = [
    {
        name: "heal",
        displayName: "ヒール",
        icon: healer_heal,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象のHPをレベルによる基本回復量に知能200%、精神500%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能300%、精神600%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能400%、精神700%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能500%、精神800%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能600%、精神900%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能700%、精神1200%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能800%、精神1500%追加して回復。"
        ],
        attributes: {}
    },
    {
        name: "recovery",
        displayName: "リカバリー",
        icon: healer_recovery,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "3分間、対象のMP回復速度を20%増加。",
            "6分間、対象のMP回復速度を30%増加。",
            "9分間、対象のMP回復速度を40%増加。",
            "12分間、対象のMP回復速度を50%増加。",
            "15分間、対象のMP回復速度を60%増加。",
            "18分間、対象のMP回復速度を70%増加。",
            "60分間、対象のMP回復速度を80%増加。"
        ],
        attributes: {
            0: {
                multiplyMagicPointRecovery: 20,
            },
            1: {
                multiplyMagicPointRecovery: 30,
            },
            2: {
                multiplyMagicPointRecovery: 40,
            },
            3: {
                multiplyMagicPointRecovery: 50,
            },
            4: {
                multiplyMagicPointRecovery: 60,
            },
            5: {
                multiplyMagicPointRecovery: 70,
            },
            6: {
                multiplyMagicPointRecovery: 80,
            }
        }

    },

    {
        name: "mindBlast",
        displayName: "マインドブラスト",
        icon: healer_mind_blast,
        category: "Debuff",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象を4秒間ルート。",
            "対象を5秒間ルート。",
            "対象を6秒間ルート。",
            "対象を7秒間ルート。",
            "対象を8秒間ルート。",
            "対象を9秒間ルート。",
            "対象を10秒間ルート。"
        ],
        attributes: {}
    },
    {
        name: "cureConfusion",
        displayName: "キュアコンフュージョン",
        icon: healer_cure_confusion,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "対象にかかっているコンフュージョン(混乱)効果を治療。"
        ],
        attributes: {}
    },
    {
        name: "divineAura",
        displayName: "ディバインオーラ",
        icon: healer_divine_aura,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "モンスターの敵対心を初期化。パーティーの時にだけ使用可能です。"
        ],
        attributes: {}
    },
    {
        name: "cureSilence",
        displayName: "キュアサイレンス",
        icon: healer_cure_silence,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "対象にかかっているサイレンス(スキル使用不可能)効果を治療。"
        ],
        attributes: {}
    },
    {
        name: "divineBeam",
        displayName: "ディバインビーム",
        icon: healer_divine_beam,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "レベルによる魔法攻撃力に精神の400%追加して攻撃。",
            "レベルによる魔法攻撃力に精神の460%追加して攻撃。",
            "レベルによる魔法攻撃力に精神の530%追加して攻撃。",
            "レベルによる魔法攻撃力に精神の600%追加して攻撃。",
            "レベルによる魔法攻撃力に精神の700%追加して攻撃。",
            "レベルによる魔法攻撃力に精神の750%追加して攻撃。",
            "レベルによる魔法攻撃力に精神の800%追加して攻撃。"
        ],
        attributes: {}
    },
    {
        name: "intelligenceBlow",
        displayName: "インテリジェンスブロー",
        icon: healer_intelligence_blow,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、魔法攻撃力を5%増加。",
            "21分間、魔法攻撃力を10%増加。",
            "24分間、魔法攻撃力を15%増加。",
            "27分間、魔法攻撃力を20%増加。",
            "30分間、魔法攻撃力を25%増加。",
            "30分間、魔法攻撃力を30%増加。",
            "90分間、魔法攻撃力を35%増加。"
        ],
        attributes: {
            0: {
                multiplyMagicAttack: 5,
            },
            1: {
                multiplyMagicAttack: 10,
            },
            2: {
                multiplyMagicAttack: 15,
            },
            3: {
                multiplyMagicAttack: 20,
            },
            4: {
                multiplyMagicAttack: 25,
            },
            5: {
                multiplyMagicAttack: 30,
            },
            6: {
                multiplyMagicAttack: 35,
            }
        }
    },
    {
        name: "holyLight",
        displayName: "ホーリーライト",
        icon: healer_holy_light,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "レベルによる魔法攻撃力に知能の400%追加して攻撃。",
            "レベルによる魔法攻撃力に知能の460%追加して攻撃。",
            "レベルによる魔法攻撃力に知能の530%追加して攻撃。",
            "レベルによる魔法攻撃力に知能の600%追加して攻撃。",
            "レベルによる魔法攻撃力に知能の700%追加して攻撃。",
            "レベルによる魔法攻撃力に知能の750%を追加して攻撃。",
            "レベルによる魔法攻撃力に知能の800%を追加して攻撃。"
        ],
        attributes: {}
    },
    {
        name: "groupHeal",
        displayName: "グループヒール",
        icon: healer_group_heal,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバーのHPをレベルによる基本回復量に精神600%追加して回復。",
            "パーティーメンバーのHPをレベルによる基本回復量に知能100%、精神700%追加して回復。",
            "パーティーメンバーのHPをレベルによる基本回復量に知能100%、精神800%追加して回復。",
            "パーティーメンバーのHPをレベルによる基本回復量に知能200%、精神900%追加して回復。",
            "パーティーメンバーのHPをレベルによる基本回復量に知能200%、精神1000%追加して回復。",
            "パーティーメンバーのHPをレベルによる基本回復量に知能300%、精神1300%追加して回復。",
            "パーティーメンバーのHPをレベルによる基本回復量に知能400%、精神1600%追加して回復。"
        ],
        attributes: {}
    },
    {
        name: "detect",
        displayName: "ディテクト",
        icon: healer_detect,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、詠唱者の半径20メートル内のハイドを感知。",
            "40秒間、詠唱者の半径22メートル内のハイドを感知。",
            "50秒間、詠唱者の半径24メートル内のハイドを感知。",
            "60秒間、詠唱者の半径26メートル内のハイドを感知。",
            "70秒間、詠唱者の半径28メートル内のハイドを感知。",
            "80秒間、詠唱者の半径32メートル内のハイドを感知。",
            "90秒間、詠唱者の半径40メートル内のハイドを感知。"
        ],
        attributes: {}
    },
    {
        name: "instantHeal",
        displayName: "インスタントヒール",
        icon: healer_instant_heal,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象のHPをレベルによる基本回復量に知能300%、精神300%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能400%、精神400%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能500%、精神500%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能600%、精神600%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能700%、精神700%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能800%、精神800%追加して回復。",
            "対象のHPをレベルによる基本回復量に知能900%、精神1000%追加して回復。"
        ],
        attributes: {}
    },
    {
        name: "magicBarrier",
        displayName: "マジックバリア",
        icon: healer_magic_barrier,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "40秒間、精神力の400%のダメージを無効化。",
            "45秒間、精神力の800%のダメージを無効化。",
            "50秒間、精神力の1200%のダメージを無効化。",
            "55秒間、精神力の1600%のダメージを無効化。",
            "60秒間、精神力の2000%のダメージを無効化。",
            "60秒間、精神力の2400%のダメージを無効化。",
            "60秒間、精神力の3000%のダメージを無効化。"
        ],
        attributes: {}
    },
    {
        name: "manaCharge",
        displayName: "マナチャージ",
        icon: healer_mana_charge,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "使用者のMPを100％回復。"
        ],
        attributes: {}
    },
    {
        name: "mentalBarrier",
        displayName: "メンタルバリア",
        icon: healer_mental_barrier,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の物理防御力を知能と精神力の5%増加。",
            "21分間、使用者の物理防御力を知能と精神力の10%増加。",
            "24分間、使用者の物理防御力を知能と精神力の15%増加。",
            "27分間、使用者の物理防御力を知能と精神力の20%増加。",
            "30分間、使用者の物理防御力を知能と精神力の25%増加。",
            "30分間、使用者の物理防御力を知能と精神力の35%増加。",
            "90分間、使用者の物理防御力を知能と精神力の50%増加。"
        ],
        attributes: {
            0: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 5,
            },
            1: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 10,
            },
            2: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 15,
            },
            3: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 20,
            },
            4: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 25,
            },
            5: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 35,
            },
            6: {
                plusPhysicalDefenseMultiplyIntelligenceAndMentality: 50,
            }
        }
    },


    {
        name: "netBind",
        displayName: "ネットバインド",
        icon: healer_net_bind,
        category: "Debuff",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "7秒間、使用者と対象を拘束。",
            "9秒間、使用者と対象を拘束。",
            "11秒間、使用者と対象を拘束。",
            "13秒間、使用者と対象を拘束。",
            "15秒間、使用者と対象を拘束。",
            "17秒間、使用者と対象を拘束。",
            "19秒間、使用者と対象を拘束。",
        ],
        attributes: {}
    },
    {
        name: "revive",
        displayName: "リバイブ",
        icon: healer_revive,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "レベル30未満の死亡した対象を10%のHPとMPを持った状態で復活。",
            "レベル50未満の死亡した対象を20%のHPとMPを持った状態で復活。",
            "レベル70未満の死亡した対象を30%のHPとMPを持った状態で復活。",
            "レベル90未満の死亡した対象を40%のHPとMPを持った状態で復活。",
            "レベル115未満の死亡した対象を50%のHPとMPを持った状態で復活。",
            "レベル115未満の死亡した対象を70%のHPとMPを持った状態で復活。",
            "レベル115未満の死亡した対象を100%のHPとMPを持った状態で復活。"
        ],
        attributes: {}
    },
    {
        name: "saintStrike",
        displayName: "セイントストライク",
        icon: healer_saint_strike,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に知能20%、精神16%のダメージを3秒ごとに10回攻撃。",
            "対象に知能25%、精神20%のダメージを3秒ごとに10回攻撃。",
            "対象に知能33%、精神25%のダメージを3秒ごとに10回攻撃。",
            "対象に知能50%、精神33%のダメージを3秒ごとに10回攻撃。",
            "対象に知能100%、精神50%のダメージを3秒ごとに10回攻撃。",
            "対象に知能100%、精神100%のダメージを3秒ごとに10回攻撃。",
            "対象に知能100%、精神100%のダメージを3秒ごとに15回攻撃。",
        ],
        attributes: {}
    },
    {
        name: "killTime",
        displayName: "キルタイム",
        icon: healer_kill_time,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 0,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間スキルのクールタイムを1度無視。"
        ],
        attributes: {}
    }
]