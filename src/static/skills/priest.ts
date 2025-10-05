import { Skill } from "./skill";

import priest_mental_blow from "../../assets/skills/priest/npr_Mental_Blow.gif";
import priest_incarnation from "../../assets/skills/priest/npr_Incarnation.gif";
import priest_almighty from "../../assets/skills/priest/npr_Almighty.gif";
import priest_dispel from "../../assets/skills/priest/npr_Dispel.gif";
import priest_group_almighty from "../../assets/skills/priest/npr_Group_Almighty.gif";
import priest_erase from "../../assets/skills/priest/npr_Erase.gif";
import priest_staff_mastery from "../../assets/skills/priest/npr_Staff_Mastery.gif";
import priest_mareas_mind from "../../assets/skills/priest/npr_Mareas_Mind.gif";
import priest_mareas_battle from "../../assets/skills/priest/npr_Mareas_Battle.gif";
import priest_vacuum from "../../assets/skills/priest/npr_Vacuum.gif";
import priest_group_instant_heal from "../../assets/skills/priest/npr_Group_Instant_Heal.gif";
import priest_mareas_grace from "../../assets/skills/priest/npr_Mareas_Grace.gif";
import priest_nemesis from "../../assets/skills/priest/npr_Nemesis.gif";
import priest_perfect_healing from "../../assets/skills/priest/npr_Perfect_Healing.gif";
import priest_soul_meditation from "../../assets/skills/priest/npr_Soul_Meditation.gif";
import priest_mind_air from "../../assets/skills/priest/npr_Mind_Air.gif";
import priest_obligation from "../../assets/skills/priest/npr_Obligation.gif";
import priest_blessing_of_nature from "../../assets/skills/priest/npr_Blessing_of_Nature.gif";
import priest_judgement from "../../assets/skills/priest/npr_Judgement.gif";
import priest_heavens_dawn from "../../assets/skills/priest/npr_Heavens_Dawn.gif";

export const priest_skills: Skill[] = [
    {
        name: "mentalBlow",
        displayName: "メンタルブロー",
        icon: priest_mental_blow,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の精神力を10%ほど増加させます。",
            "21分間、使用者の精神力を15%ほど増加させます。",
            "24分間、使用者の精神力を20%ほど増加させます。",
            "27分間、使用者の精神力を25%ほど増加させます。",
            "30分間、使用者の精神力を30%ほど増加させます。",
            "30分間、使用者の精神力を40%ほど増加させます。",
            "120分間、使用者の精神力を60%ほど増加させます。",
        ],
        attributes: {
            0: {
                multiplyMentality: 10,
            },
            1: {
                multiplyMentality: 15,
            },
            2: {
                multiplyMentality: 20,
            },
            3: {
                multiplyMentality: 25,
            },
            4: {
                multiplyMentality: 30,
            },
            5: {
                multiplyMentality: 40,
            },
            6: {
                multiplyMentality: 60,

            }
        }
    },
    {
        name: "incarnation",
        displayName: "インカーネーション",
        icon: priest_incarnation,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "レベル70までの死んだ対象を15%のHPとMP、減少した経験値の30% 復旧して復活。",
            "レベル80までの死んだ対象を30%のHPとMP、減少した経験値の40% 復旧して復活。",
            "レベル90までの死んだ対象を45%のHPとMP、減少した経験値の50% 復旧して復活。",
            "レベル100までの死んだ対象を60%のHPとMP、減少した経験値の60% 復旧して復活。",
            "レベル115までの死んだ対象を75%のHPとMP、減少した経験値の70% 復旧して復活。",
            "レベル115までの死んだ対象を90%のHPとMP、減少した経験値の90% 復旧して復活。",
            "レベル115までの死んだ対象を100%のHPとMP、減少した経験値の99% 復旧して復活。",
        ],
        attributes: {}
    },
    {
        name: "almighty",
        displayName: "オールマイティ",
        icon: priest_almighty,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者のすべてのステータスを6%増加。",
            "21分間、使用者のすべてのステータスを12%増加。",
            "24分間、使用者のすべてのステータスを18%増加。",
            "27分間、使用者のすべてのステータスを24%増加。",
            "30分間、使用者のすべてのステータスを30%増加。",
            "30分間、使用者のすべてのステータスを40%増加。",
            "120分間、使用者のすべてのステータスを50%増加。"
        ],
        attributes: {
            0: {
                multiplyAllStatus: 6,
            },
            1: {
                multiplyAllStatus: 12,
            },
            2: {
                multiplyAllStatus: 18,
            },
            3: {
                multiplyAllStatus: 24,
            },
            4: {
                multiplyAllStatus: 30,
            },
            5: {
                multiplyAllStatus: 40,
            },
            6: {
                multiplyAllStatus: 50,
            }
        }
    },
    {
        name: "dispel",
        icon: priest_dispel,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 1,
        displayName: "ディスペル",
        descriptions: [
            "対象の結界を解除。"
        ],
        attributes: {}
    },

    {
        name: "groupAlmighty",
        displayName: "グループオールマイティー",
        icon: priest_group_almighty,
        category: "Buff",
        origin: "Group",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、パーティーメンバーの全てのステータスを3%増加。",
            "21分間、パーティーメンバーの全てのステータスを6%増加。",
            "24分間、パーティーメンバーの全てのステータスを9%増加。",
            "27分間、パーティーメンバーの全てのステータスを12%増加。",
            "30分間、パーティーメンバーの全てのステータスを15%増加。",
            "30分間、パーティーメンバーの全てのステータスを20%増加。",
            "120分間、パーティーメンバーの全てのステータスを25%増加。",
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
        name: "erase",
        displayName: "イレイス",
        icon: priest_erase,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "対象の特殊バフ効果をランダムに1個解除。"
        ],
        attributes: {}
    },
    {
        name: "PriestStaffMastery",
        displayName: "スタッフマスタリー",
        icon: priest_staff_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が64%増加。精神の33%ほど魔法攻撃力増加。",
            "21分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が128%増加。精神の67%ほど魔法攻撃力増加。",
            "24分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が193%増加。精神の100%ほど魔法攻撃力増加。",
            "27分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が257%増加。精神の133%ほど魔法攻撃力増加。",
            "30分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が321%増加。精神の167%ほど魔法攻撃力増加。",
            "30分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が449%増加。精神の233%ほど魔法攻撃力増加。",
            "120分間、ダメージの30%ほどMP回復。スタッフ装備時に武器及びオプション攻撃力が642%増加。精神の333%ほど魔法攻撃力増加。",
        ],
        attributes: {
            0: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 64,
                plusMagicAttackMultiplyMentality: 33,
                magicMastery: 1,
            },
            1: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 128,
                plusMagicAttackMultiplyMentality: 67,
                magicMastery: 1,
            },
            2: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 193,
                plusMagicAttackMultiplyMentality: 100,
                magicMastery: 1,
            },
            3: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 257,
                plusMagicAttackMultiplyMentality: 133,
                magicMastery: 1,
            },
            4: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 321,
                plusMagicAttackMultiplyMentality: 167,
                magicMastery: 1,
            },
            5: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 449,
                plusMagicAttackMultiplyMentality: 233,
                magicMastery: 1,
            },
            6: {
                multiplyMagicPointAbsorbDamageRate: 30,
                multiplyMagicWeaponAttack: 642,
                plusMagicAttackMultiplyMentality: 333,
                magicMastery: 1,
            }
        },
    },
    {
        name: "mareasMind",
        displayName: "マレアマインド",
        icon: priest_mareas_mind,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に精神力の1200%のダメージ。",
            "対象に精神力の1800%のダメージ。",
            "対象に精神力の2400%のダメージ。",
            "対象に精神力の3000%のダメージ。",
            "対象に精神力の3600%のダメージ。",
            "対象に精神力の4200%のダメージ。",
            "対象に精神力の6000%のダメージ。",
        ],
        attributes: {}
    },
    {
        name: "mareasBattle",
        displayName: "マレアバトル",
        icon: priest_mareas_battle,
        category: "Other",
        origin: "Group",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバー及び使用者の魔法ブロック確率を5%増加させます。",
            "パーティーメンバー及び使用者の魔法ブロック確率を10%増加させます。",
            "パーティーメンバー及び使用者の魔法ブロック確率を15%増加させます。",
            "パーティーメンバー及び使用者の魔法ブロック確率を20%増加させます。",
            "パーティーメンバー及び使用者の魔法ブロック確率を25%増加させます。",
            "パーティーメンバー及び使用者の魔法ブロック確率を30%増加させます。",
            "パーティーメンバー及び使用者の魔法ブロック確率を50%増加させます。",
        ],
        attributes: {
            0: {
                multiplyMagicalBlockRate: 5,
            },
            1: {
                multiplyMagicalBlockRate: 10,
            },
            2: {
                multiplyMagicalBlockRate: 15,
            },
            3: {
                multiplyMagicalBlockRate: 20,
            },
            4: {
                multiplyMagicalBlockRate: 25,
            },
            5: {
                multiplyMagicalBlockRate: 30,
            },
            6: {
                multiplyMagicalBlockRate: 50,
            }
        }
    },
    {
        name: "vacuum",
        displayName: "バキューム",
        icon: priest_vacuum,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "8秒間対象を一般攻撃を封じる。",
            "10秒間対象を一般攻撃を封じる。",
            "12秒間対象を一般攻撃を封じる。",
            "14秒間対象を一般攻撃を封じる。",
            "16秒間対象を一般攻撃を封じる。",
            "18秒間対象を一般攻撃を封じる。",
            "20秒間対象を一般攻撃を封じる。",
        ],
        attributes: {}
    },
    {
        name: "groupInstantHeal",
        displayName: "グループインスタントヒール",
        icon: priest_group_instant_heal,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティー員のHPを精神の1000%直ちに回復。",
            "パーティー員のHPを精神の1300%直ちに回復。",
            "パーティー員のHPを精神の1600%直ちに回復。",
            "パーティー員のHPを精神の1900%直ちに回復。",
            "パーティー員のHPを精神の2200%直ちに回復。",
            "パーティー員のHPを精神の2500%直ちに回復。",
            "パーティー員のHPを精神の3000%直ちに回復。"
        ],
        attributes: {}
    },

    {
        name: "mareasGrace",
        displayName: "マレアグレイス",
        icon: priest_mareas_grace,
        category: "Buff",
        origin: "Group",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバー及び使用者の最大HPを使用者レベルの40倍増加させます。",
            "パーティーメンバー及び使用者の最大HPを使用者レベルの60倍増加させます。",
            "パーティーメンバー及び使用者の最大HPを使用者レベルの70倍増加させます。",
            "パーティーメンバー及び使用者の最大HPを使用者レベルの160倍増加させます。",
            "パーティーメンバー及び使用者の最大HPを使用者レベルの200倍増加させます。",
            "パーティーメンバー及び使用者の最大HPを使用者レベルの250倍増加させます。",
            "パーティーメンバー及び使用者の最大HPを使用者レベルの350倍増加させます。",
        ],
        attributes: {
            0: {
                plusHitPointMultiplyLevel: 40,
                plusHitPointMultiplyHeroLevel: 40,
            },
            1: {
                plusHitPointMultiplyLevel: 60,
                plusHitPointMultiplyHeroLevel: 60,
            },
            2: {
                plusHitPointMultiplyLevel: 70,
                plusHitPointMultiplyHeroLevel: 70,
            },
            3: {
                plusHitPointMultiplyLevel: 160,
                plusHitPointMultiplyHeroLevel: 160,
            },
            4: {
                plusHitPointMultiplyLevel: 200,
                plusHitPointMultiplyHeroLevel: 200,
            },
            5: {
                plusHitPointMultiplyLevel: 250,
                plusHitPointMultiplyHeroLevel: 250,
            },
            6: {
                plusHitPointMultiplyLevel: 350,
                plusHitPointMultiplyHeroLevel: 350,
            }
        }
    },

    {
        name: "nemesis",
        displayName: "ネメシス",
        icon: priest_nemesis,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象に知能の650%のダメージ。",
            "対象に知能の700%のダメージ。",
            "対象に知能の750%のダメージ。",
            "対象に知能の800%のダメージ。",
            "対象に知能の850%のダメージ。",
            "対象に知能の900%のダメージ。",
            "対象に知能の1000%のダメージ。"
        ],
        attributes: {}
    },
    {
        name: "perfectHealing",
        displayName: "パーフェクトヒーリング",
        icon: priest_perfect_healing,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "対象のHPを100%回復。"
        ],
        attributes: {}
    },
    {
        name: "soulMeditation",
        displayName: "ソウルメディテーション",
        icon: priest_soul_meditation,
        category: "Other",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間、使用者の受けるダメージが精神力の300％ほど減少。"
        ],
        attributes: {
        }
    },
    {
        name: "mindAir",
        displayName: "マインドエア",
        icon: priest_mind_air,
        category: "Debuff",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "4秒間対象と15メートル以内の敵4人をルート状態にする。",
            "6秒間対象と15メートル以内の敵5人をルート状態にする。",
            "8秒間対象と15メートル以内の敵6人をルート状態にする。",
            "10秒間対象と15メートル以内の敵7人をルート状態にする。",
            "12秒間対象と15メートル以内の敵8人をルート状態にする。",
            "15秒間対象と15メートル以内の敵9人をルート状態にする。",
            "20秒間対象と15メートル以内の敵9人をルート状態にする。",
        ],
        attributes: {}
    },
    {
        name: "obligation",
        displayName: "オブリゲーション",
        icon: priest_obligation,
        category: "Other",
        origin: "Group",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間全てのパーティメンバーの被ダメージを10％減少。",
            "30秒間全てのパーティメンバーの被ダメージを20％減少。",
            "30秒間全てのパーティメンバーの被ダメージを30％減少。",
            "30秒間全てのパーティメンバーの被ダメージを40％減少。",
            "30秒間全てのパーティメンバーの被ダメージを50％減少。",
            "30秒間全てのパーティメンバーの被ダメージを60％減少。",
            "30秒間全てのパーティメンバーの被ダメージを70％減少。"
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTaken: 10,
            },
            1: {
                multiplyDecreaseDamageTaken: 20,
            },
            2: {
                multiplyDecreaseDamageTaken: 30,
            },
            3: {
                multiplyDecreaseDamageTaken: 40,
            },
            4: {
                multiplyDecreaseDamageTaken: 50,
            },
            5: {
                multiplyDecreaseDamageTaken: 60,
            },
            6: {
                multiplyDecreaseDamageTaken: 70,
            }
        }
    },
    {
        name: "blessingOfNature",
        displayName: "プレッシングオブネーチャー",
        icon: priest_blessing_of_nature,
        category: "Other",
        origin: "Group",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "パーティーメンバー及び使用者のスタン抵抗力を3%増加させます。",
            "パーティーメンバー及び使用者のスタン抵抗力を6%増加させます。",
            "パーティーメンバー及び使用者のスタン抵抗力を9%増加させます。",
            "パーティーメンバー及び使用者のスタン抵抗力を12%増加させます。",
            "パーティーメンバー及び使用者のスタン抵抗力を15%増加させます。",
            "パーティーメンバー及び使用者のスタン抵抗力を20%増加させます。",
            "パーティーメンバー及び使用者のスタン抵抗力を30%増加させます。",
        ],
        attributes: {
            0: {
                multiplyStunResistRate: 3,
            },
            1: {
                multiplyStunResistRate: 6,
            },
            2: {
                multiplyStunResistRate: 9,
            },
            3: {
                multiplyStunResistRate: 12,
            },
            4: {
                multiplyStunResistRate: 15,
            },
            5: {
                multiplyStunResistRate: 20,
            },
            6: {
                multiplyStunResistRate: 30,
            }

        }
    },
    {
        name: "judgement",
        displayName: "ジャッジメント",
        icon: priest_judgement,
        category: "Attack",
        origin: "Self",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "使用者を中心に20メートル内の対象に知能200%、精神力200%ほど増加したダメージ。",
            "使用者を中心に20メートル内の対象に知能300%、精神力300%ほど増加したダメージ。",
            "使用者を中心に20メートル内の対象に知能400%、精神力400%ほど増加したダメージ。",
            "使用者を中心に20メートル内の対象に知能500%、精神力500%ほど増加したダメージ。",
            "使用者を中心に20メートル内の対象に知能600%、精神力600%ほど増加したダメージ。",
            "使用者を中心に20メートル内の対象に知能800%、精神力800%ほど増加したダメージ。",
            "使用者を中心に20メートル内の対象に知能1000%、精神力1000%ほど増加したダメージ。"
        ],
        attributes: {}
    },
    {
        name: "heavensDawn",
        displayName: "ヘブンズドーン",
        icon: priest_heavens_dawn,
        category: "Buff",
        origin: "Group",
        raceid: 1,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "能力値と攻撃力、攻撃速度10%増加。クリティカル確率、命中率2%増加。",
            "能力値と攻撃力、攻撃速度12%増加。クリティカル確率、命中率3%増加。",
            "能力値と攻撃力、攻撃速度14%増加。クリティカル確率、命中率4%増加。",
            "能力値と攻撃力、攻撃速度16%増加。クリティカル確率、命中率5%増加。",
            "能力値と攻撃力、攻撃速度18%増加。クリティカル確率、命中率6%増加。",
            "能力値と攻撃力、攻撃速度20%増加。クリティカル確率、命中率8%増加。",
            "能力値と攻撃力、攻撃速度30%増加。クリティカル確率、命中率10%増加。",
        ],
        attributes: {
            0: {
                multiplyAllStatus: 10,
                multiplyAttack: 10,
                multiplyAttackSpeed: 10,
                plusCriticalRate: 2,
                multiplyAccuracy: 2,
            },
            1: {
                multiplyAllStatus: 12,
                multiplyAttack: 12,
                multiplyAttackSpeed: 12,
                plusCriticalRate: 3,
                multiplyAccuracy: 3,
            },
            2: {
                multiplyAllStatus: 14,
                multiplyAttack: 14,
                multiplyAttackSpeed: 14,
                plusCriticalRate: 4,
                multiplyAccuracy: 4,
            },
            3: {
                multiplyAllStatus: 16,
                multiplyAttack: 16,
                multiplyAttackSpeed: 16,
                plusCriticalRate: 5,
                multiplyAccuracy: 5,
            },
            4: {
                multiplyAllStatus: 18,
                multiplyAttack: 18,
                multiplyAttackSpeed: 18,
                plusCriticalRate: 6,
                multiplyAccuracy: 6,
            },
            5: {
                multiplyAllStatus: 20,
                multiplyAttack: 20,
                multiplyAttackSpeed: 20,
                plusCriticalRate: 8,
                multiplyAccuracy: 8,
            },
            6: {
                multiplyAllStatus: 30,
                multiplyAttack: 30,
                multiplyAttackSpeed: 30,
                plusCriticalRate: 10,
                multiplyAccuracy: 10,
            }
        }
    },
]