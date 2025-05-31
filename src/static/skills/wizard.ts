import { Skill } from "./skill";

import wizard_staff_mastery from "../../assets/skills/wizard/DE_Wi_Staff_Mastery.gif";
import wizard_add_temper from "../../assets/skills/wizard/DE_Wi_Add_Temper.gif";
import wizard_mentality_shield from "../../assets/skills/wizard/DE_Wi_Mentality_Shield.gif";
import wizard_foresome_shield from "../../assets/skills/wizard/DE_Wi_Foresome_Shield.gif";
import wizard_revealing from "../../assets/skills/wizard/DE_Wi_Revealing.gif";
import wizard_magical_piercing from "../../assets/skills/wizard/DE_Wi_Magical_Piercing.gif";
import wizard_count_blow from "../../assets/skills/wizard/DE_Wi_Count_Blow.gif";
import wizard_weakness from "../../assets/skills/wizard/DE_Wi_Weakness.gif";
import wizard_multi_magic_arrow from "../../assets/skills/wizard/DE_Wi_Multi_Magic_Arrow.gif";
import wizard_group_motal_immune from "../../assets/skills/wizard/DE_Wi_Group_Motal_Immune.gif";
import wizard_area_dispel from "../../assets/skills/wizard/DE_Wi_Area_Dispel.gif";
import wizard_ring_burst from "../../assets/skills/wizard/DE_Wi_Ring_Burst.gif";
import wizard_mirror_strike from "../../assets/skills/wizard/DE_Wi_Mirror_Strike.gif";
import wizard_strike_bash from "../../assets/skills/wizard/DE_Wi_Strike_Bash.gif";
import wizard_killing_time from "../../assets/skills/wizard/DE_Wi_Killing_Time.gif";
import wizard_eternal_darkness from "../../assets/skills/wizard/DE_Wi_Eternal_Darkness.gif";
import wizard_reraise from "../../assets/skills/wizard/DE_Wi_Reraise.gif";
import wizard_destroy from "../../assets/skills/wizard/DE_Wi_Destroy.gif";
import wizard_erase_ability from "../../assets/skills/wizard/DE_Wi_Erase_Ability.gif";
import wizard_slow from "../../assets/skills/wizard/DE_Wi_Slow.gif";
import wizard_mind_training from "../../assets/skills/wizard/DE_Wi_Mind_Training.gif";
import wizard_extension_spell from "../../assets/skills/wizard/DE_Wi_Extension_Spell.gif";


export const wizard_skills: Skill[] = [
    {
        name: "WizardStaffMastery",
        displayName: "スタッフマスタリー",
        icon: wizard_staff_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、スタッフ及びオプション攻撃力が72%増加。精神力の47%ほど魔法攻撃力が増加。",
            "21分間、スタッフ及びオプション攻撃力が144%増加。精神力の95%ほど魔法攻撃力が増加。",
            "24分間、スタッフ及びオプション攻撃力が216%増加。精神力の142%ほど魔法攻撃力が増加。",
            "27分間、スタッフ及びオプション攻撃力が288%増加。精神力の190%ほど魔法攻撃力が増加。",
            "30分間、スタッフ及びオプション攻撃力が360%増加。精神力の237%ほど魔法攻撃力が増加。",
            "30分間、スタッフ及びオプション攻撃力が504%増加。精神力の332%ほど魔法攻撃力が増加。",
            "120分間、スタッフ及びオプション攻撃力が720%増加。精神力の474%ほど魔法攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMagicWeaponAttack: 72,
                plusMagicAttackMultiplyMentality: 47,
                magicMastery: 1,
            },
            1: {
                multiplyMagicWeaponAttack: 144,
                plusMagicAttackMultiplyMentality: 95,
                magicMastery: 1,
            },
            2: {
                multiplyMagicWeaponAttack: 216,
                plusMagicAttackMultiplyMentality: 142,
                magicMastery: 1,
            },
            3: {
                multiplyMagicWeaponAttack: 288,
                plusMagicAttackMultiplyMentality: 190,
                magicMastery: 1,
            },
            4: {
                multiplyMagicWeaponAttack: 360,
                plusMagicAttackMultiplyMentality: 237,
                magicMastery: 1,
            },
            5: {
                multiplyMagicWeaponAttack: 504,
                plusMagicAttackMultiplyMentality: 332,
                magicMastery: 1,
            },
            6: {
                multiplyMagicWeaponAttack: 720,
                plusMagicAttackMultiplyMentality: 474,
                magicMastery: 1,
            }
        }
    },
    {
        name: "addTemper",
        displayName: "アドテンパー",
        icon: wizard_add_temper,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の精神力を10%増加させます。",
            "21分間、使用者の精神力を15%増加させます。",
            "24分間、使用者の精神力を20%増加させます。",
            "27分間、使用者の精神力を25%増加させます。",
            "30分間、使用者の精神力を30%増加させます。",
            "30分間、使用者の精神力を40%増加させます。",
            "120分間、使用者の精神力を60%増加させます。",
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
        name: "mentalityShield",
        displayName: "メンタリティシールド",
        icon: wizard_mentality_shield,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、受けるダメージを使用者の精神の30%ほど軽減させます。",
            "10分間、受けるダメージを使用者の精神の40%ほど軽減させます。",
            "15分間、受けるダメージを使用者の精神の50%ほど軽減させます。",
            "20分間、受けるダメージを使用者の精神の60%ほど軽減させます。",
            "25分間、受けるダメージを使用者の精神の70%ほど軽減させます。",
            "30分間、受けるダメージを使用者の精神の90%ほど軽減させます。",
            "120分間、受けるダメージを使用者の精神の150%ほど軽減させます。",
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTakenMultiplyMentality: 30,
            },
            1: {
                multiplyDecreaseDamageTakenMultiplyMentality: 40,
            },
            2: {
                multiplyDecreaseDamageTakenMultiplyMentality: 50,
            },
            3: {
                multiplyDecreaseDamageTakenMultiplyMentality: 60,
            },
            4: {
                multiplyDecreaseDamageTakenMultiplyMentality: 70,
            },
            5: {
                multiplyDecreaseDamageTakenMultiplyMentality: 90,
            },
            6: {
                multiplyDecreaseDamageTakenMultiplyMentality: 150,
            }
        }
    },
    {
        name: "fourthShield",
        displayName: "フォアサムシールド",
        icon: wizard_foresome_shield,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間スタン・ルート抵抗。スタン・ルート状態でも使用可。"
        ],
        attributes: {}

    },
    {
        name: "revealing",
        displayName: "リビーリング",
        icon: wizard_revealing,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "対象が2分間潜伏スキル(ハイド等)を使えないようにする。"
        ],
        attributes: {}
    },
    {
        name: "magicalPiercing",
        displayName: "マジカルピアシング",
        icon: wizard_magical_piercing,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象と対象の後方にいる3人に精神の300%増加ダメージ。範囲15M。",
            "対象と対象の後方にいる4人に精神の375%増加ダメージ。範囲15M。",
            "対象と対象の後方にいる5人に精神の450%増加ダメージ。範囲15M。",
            "対象と対象の後方にいる6人に精神の525%増加ダメージ。範囲15M。",
            "対象と対象の後方にいる7人に精神の600%増加ダメージ。範囲15M。",
            "対象と対象の後方にいる8人に精神の700%増加ダメージ。範囲15M。",
            "対象と対象の後方にいる8人に精神の900%増加ダメージ。範囲15M。",
        ],
        attributes: {}
    },
    {
        name: "countBlow",
        displayName: "カウントブロー",
        icon: wizard_count_blow,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間M.KILLカウントの200%攻撃スキルのダメージを増加。",
            "21分間M.KILLカウントの250%攻撃スキルのダメージを増加。",
            "24分間M.KILLカウントの300%攻撃スキルのダメージを増加。",
            "27分間M.KILLカウントの350%攻撃スキルのダメージを増加。",
            "30分間M.KILLカウントの400%攻撃スキルのダメージを増加。",
            "30分間M.KILLカウントの500%攻撃スキルのダメージを増加。",
            "120分間M.KILLカウントの600%攻撃スキルのダメージを増加。",
        ],
        attributes: {}
    },
    {
        name: "weakness",
        displayName: "ウィークネス",
        icon: wizard_weakness,
        category: "Debuff",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間対象のHP、MPの最大値を15%減少させる。",
            "20秒間対象のHP、MPの最大値を18%減少させる。",
            "25秒間対象のHP、MPの最大値を21%減少させる。",
            "30秒間対象のHP、MPの最大値を24%減少させる。",
            "35秒間対象のHP、MPの最大値を27%減少させる。",
            "40秒間対象のHP、MPの最大値を30%減少させる。",
            "60秒間対象のHP、MPの最大値を50%減少させる。",
        ],
        attributes: {}
    },
    {
        name: "multiMagicArrow",
        displayName: "マルチマジックアロー",
        icon: wizard_multi_magic_arrow,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "対象に精神の200%のダメージを2回与える。",
            "対象に精神の250%のダメージを3回与える。",
            "対象に精神の300%のダメージを4回与える。",
            "対象に精神の350%のダメージを5回与える。",
            "対象に精神の400%のダメージを6回与える。",
            "対象に精神の450%のダメージを7回与える。",
            "対象に精神の500%のダメージを8回与える。",
        ],
        attributes: {}
    },
    {
        name: "groupMotalImmune",
        displayName: "グループモータルイミュン",
        icon: wizard_group_motal_immune,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
            "65秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
            "70秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
            "75秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
            "80秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
            "90秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
            "100秒間使用者及びパーティーメンバがクリティカルダメージを無効化。",
        ],
        attributes: {}
    },
    {
        name: "areaDispel",
        displayName: "エリアディスペル",
        icon: wizard_area_dispel,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "選択した地域内の4人の対象の特殊バフをランダムに1つ消す。",
            "選択した地域内の5人の対象の特殊バフをランダムに1つ消す。",
            "選択した地域内の6人の対象の特殊バフをランダムに1つ消す。",
            "選択した地域内の7人の対象の特殊バフをランダムに1つ消す。",
            "選択した地域内の8人の対象の特殊バフをランダムに1つ消す。",
            "選択した地域内の9人の対象の特殊バフをランダムに1つ消す。",
            "選択した地域内の9人の対象の特殊バフをランダムに1つ消す。",
        ],
        attributes: {}
    },
    {
        name: "ringBurst",
        displayName: "リングバースト",
        icon: wizard_ring_burst,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者中心に10メートル内の対象4人に精神の200%増加したダメージ",
            "使用者中心に10メートル内の対象5人に精神の400%増加したダメージ",
            "使用者中心に10メートル内の対象5人に精神の600%増加したダメージ",
            "使用者中心に10メートル内の対象6人に精神の800%増加したダメージ",
            "使用者中心に10メートル内の対象7人に精神の900%増加したダメージ",
            "使用者中心に10メートル内の対象8人に精神の1000%増加したダメージ",
            "使用者中心に10メートル内の対象9人に精神の1200%増加したダメージ",
        ],
        attributes: {}
    },
    {
        name: "mirrorStrike",
        displayName: "ミラーストライク",
        icon: wizard_mirror_strike,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間3秒。",
            "30秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間4秒。",
            "30秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間4秒。",
            "30秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間5秒。",
            "30秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間5秒。",
            "30秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間6秒。",
            "60秒間、使用者を攻撃する攻撃者を1回スタン。スタン時間6秒。",
        ],
        attributes: {}
    },
    {
        name: "strikeBash",
        displayName: "ストライクバッシュ",
        icon: wizard_strike_bash,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "精神力の100%のダメージを与え、使用者を中心に10メートル範囲内の対象4人を4秒間スタンさせます。",
            "精神力の200%のダメージを与え、使用者を中心に10メートル範囲内の対象5人を4秒間スタンさせます。",
            "精神力の300%のダメージを与え、使用者を中心に10メートル範囲内の対象6人を4秒間スタンさせます。",
            "精神力の400%のダメージを与え、使用者を中心に10メートル範囲内の対象7人を5秒間スタンさせます。",
            "精神力の500%のダメージを与え、使用者を中心に10メートル範囲内の対象8人を5秒間スタンさせます。",
            "精神力の600%のダメージを与え、使用者を中心に10メートル範囲内の対象9人を6秒間スタンさせます。",
            "精神力の800%のダメージを与え、使用者を中心に10メートル範囲内の対象9人を6秒間スタンさせます。",
        ],
        attributes: {}
    },
    {
        name: "killingTime",
        displayName: "キリングタイム",
        icon: wizard_killing_time,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間スキルのクールタイムを2度無視。"
        ],
        attributes: {}
    },
    {
        name: "eternalDarkness",
        displayName: "エターナルダークネス",
        icon: wizard_eternal_darkness,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "使用者中心に10m以内の対象4人を10秒間眠らせる。睡眠状態はダメージを受けると解除。",
            "使用者中心に10m以内の対象5人を10秒間眠らせる。睡眠状態はダメージを受けると解除。",
            "使用者中心に10m以内の対象6人を10秒間眠らせる。睡眠状態はダメージを受けると解除。",
            "使用者中心に10m以内の対象7人を12秒間眠らせる。睡眠状態はダメージを受けると解除。",
            "使用者中心に10m以内の対象8人を12秒間眠らせる。睡眠状態はダメージを受けると解除。",
            "使用者中心に10m以内の対象9人を15秒間眠らせる。睡眠状態はダメージを受けると解除。",
            "使用者中心に10m以内の対象9人を18秒間眠らせる。睡眠状態はダメージを受けると解除。",
        ],
        attributes: {}
    },
    {
        name: "reRaise",
        displayName: "リレイズ",
        icon: wizard_reraise,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "30分間、死んだ時その場で復活。経験値を20%復旧し、HP/MP50%状態で復活させる。",
            "30分間、死んだ時その場で復活。経験値を25%復旧し、HP/MP50%状態で復活させる。",
            "30分間、死んだ時その場で復活。経験値を30%復旧し、HP/MP50%状態で復活させる。",
            "30分間、死んだ時その場で復活。経験値を35%復旧し、HP/MP50%状態で復活させる。",
            "30分間、死んだ時その場で復活。経験値を40%復旧し、HP/MP50%状態で復活させる。",
            "60分間、死んだ時その場で復活。経験値を50%復旧し、HP/MP100%状態で復活させる。",
            "60分間、死んだ時その場で復活。経験値を60%復旧し、HP/MP100%状態で復活させる。",
        ],
        attributes: {}
    },
    {
        name: "destroy",
        displayName: "デストロイ",
        icon: wizard_destroy,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "5分間、通常攻撃を範囲化し、攻撃対象に敵2体を追加。ダメージは20%を増加します。",
            "10分間、通常攻撃を範囲化し、攻撃対象に敵3体を追加。ダメージは30%を増加します。",
            "15分間、通常攻撃を範囲化し、攻撃対象に敵3体を追加。ダメージは40%を増加します。",
            "20分間、通常攻撃を範囲化し、攻撃対象に敵4体を追加。ダメージは50%を増加します。",
            "25分間、通常攻撃を範囲化し、攻撃対象に敵4体を追加。ダメージは60%を増加します。",
            "30分間、通常攻撃を範囲化し、攻撃対象に敵5体を追加。ダメージは80%を増加します。",
            "60分間、通常攻撃を範囲化し、攻撃対象に敵6体を追加。ダメージは100%を増加します。",
        ],
        attributes: {
            0: {
                multiplyIncreaseDamageDealt: 20,
            },
            1: {
                multiplyIncreaseDamageDealt: 30,
            },
            2: {
                multiplyIncreaseDamageDealt: 40,
            },
            3: {
                multiplyIncreaseDamageDealt: 50,
            },
            4: {
                multiplyIncreaseDamageDealt: 60,
            },
            5: {
                multiplyIncreaseDamageDealt: 80,
            },
            6: {
                multiplyIncreaseDamageDealt: 100,
            }
        }
    },
    {
        name: "eraseAbility",
        displayName: "イレイスアビリティ",
        icon: wizard_erase_ability,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 2,
        descriptions: [
            "使用者の1次スキルを初期化(スキル強化石含む)",
            "使用者の1次スキルまたは2次スキルを初期化(スキル強化石含む)"
        ],
        attributes: {}
    },
    {
        name: "slow",
        displayName: "スロー",
        icon: wizard_slow,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "10メートル以内に100%増加したダメージとMPの2%の追加ダメージ。10秒間敵の攻撃速度と移動速度を20%減少。",
            "10メートル以内に110%増加したダメージとMPの2%の追加ダメージ。10秒間敵の攻撃速度と移動速度を25%減少。",
            "10メートル以内に120%増加したダメージとMPの5%の追加ダメージ。10秒間敵の攻撃速度と移動速度を30%減少。",
            "10メートル以内に130%増加したダメージとMPの5%の追加ダメージ。10秒間敵の攻撃速度と移動速度を35%減少。",
            "10メートル以内に140%増加したダメージとMPの8%の追加ダメージ。10秒間敵の攻撃速度と移動速度を40%減少。",
            "10メートル以内に160%増加したダメージとMPの8%の追加ダメージ。10秒間敵の攻撃速度と移動速度を50%減少。",
            "10メートル以内に200%増加したダメージとMPの10%の追加ダメージ。10秒間敵の攻撃速度と移動速度を60%減少。",
        ],
        attributes: {}
    },
    {
        name: "mindTraining",
        displayName: "マインドトレーニング",
        icon: wizard_mind_training,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、精神3%・攻撃速度5%・移動速度2%を増加させます。",
            "21分間、精神6%・攻撃速度10%・移動速度4%を増加させます。",
            "24分間、精神9%・攻撃速度15%・移動速度6%を増加させます。",
            "27分間、精神12%・攻撃速度20%・移動速度8%を増加させます。",
            "30分間、精神15%・攻撃速度25%・移動速度10%を増加させます。",
            "30分間、精神20%・攻撃速度30%・移動速度15%を増加させます。",
            "90分間、精神25%・攻撃速度40%・移動速度20%を増加させます。",
        ],
        attributes: {
            0: {
                multiplyMentality: 3,
                multiplyAttackSpeed: 5,
                multiplyMovementSpeed: 2,
            },
            1: {
                multiplyMentality: 6,
                multiplyAttackSpeed: 10,
                multiplyMovementSpeed: 4,
            },
            2: {
                multiplyMentality: 9,
                multiplyAttackSpeed: 15,
                multiplyMovementSpeed: 6,
            },
            3: {
                multiplyMentality: 12,
                multiplyAttackSpeed: 20,
                multiplyMovementSpeed: 8,
            },
            4: {
                multiplyMentality: 15,
                multiplyAttackSpeed: 25,
                multiplyMovementSpeed: 10,
            },
            5: {
                multiplyMentality: 20,
                multiplyAttackSpeed: 30,
                multiplyMovementSpeed: 15,
            },
            6: {
                multiplyMentality: 25,
                multiplyAttackSpeed: 40,
                multiplyMovementSpeed: 20,
            }
        }
    },
    {
        name: "extensionSpell",
        displayName: "エクステンションスペル",
        icon: wizard_extension_spell,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 2,
        min: 1,
        max: 7,
        descriptions: [
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ150%増加。必中になる。",
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ200%増加。必中になる。",
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ250%増加。必中になる。",
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ300%増加。必中になる。",
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ350%増加。必中になる。",
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ400%増加。必中になる。",
            "60秒間、次に使用する攻撃スキルのダメージが1回だけ500%増加。必中になる。",
        ],
        attributes: {}
    }
]