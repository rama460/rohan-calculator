import { Skill } from "./skill";

import warlock_staff_mastery from "../../assets/skills/warlock/DE_Wa_Staff_Mastery.gif";
import warlock_add_intention from "../../assets/skills/warlock/DE_Wa_Add_Intention.gif";
import warlock_intelligent_shield from "../../assets/skills/warlock/DE_Wa_Intelligent_Shield.gif";
import warlock_foresome_shield from "../../assets/skills/warlock/DE_Wa_Foresome_Shield.gif";
import warlock_revealing from "../../assets/skills/warlock/DE_Wa_Revealing.gif";
import warlock_ability_drain from "../../assets/skills/warlock/DE_Wa_Ability_Drain.gif";
import warlock_count_blow from "../../assets/skills/warlock/DE_Wa_Count_Blow.gif";
import warlock_magic_push from "../../assets/skills/warlock/DE_Wa_Magic_Push.gif";
import warlock_break_ability from "../../assets/skills/warlock/DE_Wa_Break_Ability.gif";
import warlock_magic_mirror from "../../assets/skills/warlock/DE_Wa_Magic_Mirror.gif";
import warlock_pollution_mind from "../../assets/skills/warlock/DE_Wa_Pollution_Mind.gif";
import warlock_area_toxic_potion from "../../assets/skills/warlock/DE_Wa_Area_Toxic_Potion.gif";
import warlock_low_master from "../../assets/skills/warlock/DE_Wa_Low_Master.gif";
import warlock_rise_root from "../../assets/skills/warlock/DE_Wa_Rise_Root.gif";
import warlock_snatch from "../../assets/skills/warlock/DE_Wa_Snatch.gif";
import warlock_prevent_pet from "../../assets/skills/warlock/DE_Wa_Prevent_Pet.gif";
import warlock_fake_death from "../../assets/skills/warlock/DE_Wa_Fake_Death.gif";
import warlock_broken_treasure from "../../assets/skills/warlock/DE_Wa_Broken_Treasure.gif";
import warlock_erase_ability from "../../assets/skills/warlock/DE_Wa_Erase_Ability.gif";
import warlock_mana_burn_up from "../../assets/skills/warlock/DE_Wa_Mana_Burn_Up.gif";
import warlock_nightmare from "../../assets/skills/warlock/DE_Wa_Nightmare.gif";
import warlock_spell_liberation from "../../assets/skills/warlock/DE_Wa_Spell_Liberation.gif";



export const warlock_skills: Skill[] = [
    {
        name: "WarrockStaffMastery",
        displayName: "スタッフマスタリー",
        icon: warlock_staff_mastery,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、スタッフ及びオプション攻撃力が76%増加。攻撃速度10%増加。知能の58%ほど魔法攻撃力が増加。",
            "21分間、スタッフ及びオプション攻撃力が151%増加。攻撃速度10%増加。知能の115%ほど魔法攻撃力が増加。",
            "24分間、スタッフ及びオプション攻撃力が227%増加。攻撃速度10%増加。知能の173%ほど魔法攻撃力が増加。",
            "27分間、スタッフ及びオプション攻撃力が302%増加。攻撃速度10%増加。知能の230%ほど魔法攻撃力が増加。",
            "30分間、スタッフ及びオプション攻撃力が378%増加。攻撃速度10%増加。知能の288%ほど魔法攻撃力が増加。",
            "30分間、スタッフ及びオプション攻撃力が529%増加。攻撃速度30%増加。知能の403%ほど魔法攻撃力が増加。",
            "120分間、スタッフ及びオプション攻撃力が755%増加。攻撃速度50%増加。知能の576%ほど魔法攻撃力が増加。",
        ],
        attributes: {
            0: {
                multiplyMagicWeaponAttack: 76,
                multiplyAttackSpeed: 10,
                plusMagicAttackMultiplyIntelligence: 58,
                magicMastery: 1,
            },
            1: {
                multiplyMagicWeaponAttack: 151,
                multiplyAttackSpeed: 10,
                plusMagicAttackMultiplyIntelligence: 115,
                magicMastery: 1,
            },
            2: {
                multiplyMagicWeaponAttack: 227,
                multiplyAttackSpeed: 10,
                plusMagicAttackMultiplyIntelligence: 173,
                magicMastery: 1,
            },
            3: {
                multiplyMagicWeaponAttack: 302,
                multiplyAttackSpeed: 10,
                plusMagicAttackMultiplyIntelligence: 230,
                magicMastery: 1,
            },
            4: {
                multiplyMagicWeaponAttack: 378,
                multiplyAttackSpeed: 10,
                plusMagicAttackMultiplyIntelligence: 288,
                magicMastery: 1,
            },
            5: {
                multiplyMagicWeaponAttack: 529,
                multiplyAttackSpeed: 30,
                plusMagicAttackMultiplyIntelligence: 403,
                magicMastery: 1,
            },
            6: {
                multiplyMagicWeaponAttack: 755,
                multiplyAttackSpeed: 50,
                plusMagicAttackMultiplyIntelligence: 576,
                magicMastery: 1,
            }
        }

    },
    {
        name: "addIntention",
        displayName: "アドインテンション",
        icon: warlock_add_intention,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の知能を10%増加させます。",
            "21分間、使用者の知能を15%増加させます。",
            "24分間、使用者の知能を20%増加させます。",
            "27分間、使用者の知能を25%増加させます。",
            "30分間、使用者の知能を30%増加させます。",
            "30分間、使用者の知能を40%増加させます。",
            "120分間、使用者の知能を60%増加させます。",
        ],
        attributes: {
            0: {
                multiplyIntelligence: 10,
            },
            1: {
                multiplyIntelligence: 15,
            },
            2: {
                multiplyIntelligence: 20,
            },
            3: {
                multiplyIntelligence: 25,
            },
            4: {
                multiplyIntelligence: 30,
            },
            5: {
                multiplyIntelligence: 40,
            },
            6: {
                multiplyIntelligence: 60,
            }
        }
    },

    {
        name: "intelligentShield",
        displayName: "インテリジェンスシールド",
        icon: warlock_intelligent_shield,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間、被ダメージが使用者の知能の50%軽減。",
            "20秒間、被ダメージが使用者の知能の75%軽減。",
            "20秒間、被ダメージが使用者の知能の100%軽減。",
            "20秒間、被ダメージが使用者の知能の125%軽減。",
            "20秒間、被ダメージが使用者の知能の150%軽減。",
            "20秒間、被ダメージが使用者の知能の200%軽減。",
            "40秒間、被ダメージが使用者の知能の400%軽減。",
        ],
        attributes: {}
    },
    {
        name: "foresomeShield",
        displayName: "フォアサムシールド",
        icon: warlock_foresome_shield,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "30秒間、スタン、ルート効果に抵抗、スタン、ルート状態でも使用可能。"
        ],
        attributes: {}
    },
    {
        name: "revealing",
        displayName: "リビーリング",
        icon: warlock_revealing,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 1,
        descriptions: [
            "対象が2分間潜伏スキル(ハイド系)を使えないようにする。"
        ],
        attributes: {}
    },
    {
        name: "abilityDrain",
        displayName: "アビリティドレイン",
        icon: warlock_ability_drain,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間対象のステータスを30吸収して、使用者のステータスを増加。",
            "30秒間対象のステータスを35吸収して、使用者のステータスを増加。",
            "60秒間対象のステータスを40吸収して、使用者のステータスを増加。",
            "60秒間対象のステータスを45吸収して、使用者のステータスを増加。",
            "90秒間対象のステータスを50吸収して、使用者のステータスを増加。",
            "120秒間対象のステータスを70吸収して、使用者のステータスを増加。",
            "180秒間対象のステータスを100吸収して、使用者のステータスを増加。",
        ],
        attributes: {
            0: {
                plusAllStatus: 30,
            },
            1: {
                plusAllStatus: 35,
            },
            2: {
                plusAllStatus: 40,
            },
            3: {
                plusAllStatus: 45,
            },
            4: {
                plusAllStatus: 50,
            },
            5: {
                plusAllStatus: 70,
            },
            6: {
                plusAllStatus: 100,
            }
        }
    },
    {
        name: "countBlow",
        displayName: "カウントブロー",
        icon: warlock_count_blow,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "18分間キルカウントの200%攻撃スキルのダメージを増加。",
            "21分間キルカウントの250%攻撃スキルのダメージを増加。",
            "24分間キルカウントの300%攻撃スキルのダメージを増加。",
            "27分間キルカウントの350%攻撃スキルのダメージを増加。",
            "30分間キルカウントの400%攻撃スキルのダメージを増加。",
            "30分間キルカウントの500%攻撃スキルのダメージを増加。",
            "30分間キルカウントの600%攻撃スキルのダメージを増加。",
        ],
        attributes: {}
    },
    {
        name: "magicPush",
        displayName: "マジックプッシュ",
        icon: warlock_magic_push,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "使用者に近接している対象たちに150%の魔法ダメージで攻撃、後ろに押し出す。",
            "使用者に近接している対象たちに175%の魔法ダメージで攻撃、後ろに押し出す。",
            "使用者に近接している対象たちに200%の魔法ダメージで攻撃、後ろに押し出す。",
            "使用者に近接している対象たちに225%の魔法ダメージで攻撃、後ろに押し出す。",
            "使用者に近接している対象たちに250%の魔法ダメージで攻撃、後ろに押し出す。",
            "使用者に近接している対象たちに275%の魔法ダメージで攻撃、後ろに押し出す。",
            "使用者に近接している対象たちに325%の魔法ダメージで攻撃、後ろに押し出す。",
        ],
        attributes: {}
    },
    {
        name: "breakAbility",
        displayName: "ブレイクアビリティ",
        icon: warlock_break_ability,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "20秒間対象が状態異常スキルを使えないようにする。",
            "30秒間対象が状態異常スキルを使えないようにする。",
            "40秒間対象が状態異常スキルを使えないようにする。",
            "50秒間対象が状態異常スキルを使えないようにする。",
            "60秒間対象が状態異常スキルを使えないようにする。",
            "70秒間対象が状態異常スキルを使えないようにする。",
            "90秒間対象が状態異常スキルを使えないようにする。",
        ],
        attributes: {}
    },
    {
        name: "magicMirror",
        displayName: "マジックミラー",
        icon: warlock_magic_mirror,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、受けた攻撃の効果及びダメージを3回まで吸収、反射。",
            "30秒間、受けた攻撃の効果及びダメージを4回まで吸収、反射。",
            "30秒間、受けた攻撃の効果及びダメージを5回まで吸収、反射。",
            "30秒間、受けた攻撃の効果及びダメージを6回まで吸収、反射。",
            "30秒間、受けた攻撃の効果及びダメージを7回まで吸収、反射。",
            "30秒間、受けた攻撃の効果及びダメージを10回まで吸収、反射。",
            "30秒間、受けた攻撃の効果及びダメージを15回まで吸収、反射。",
        ],
        attributes: {}
    },
    {
        name: "pollutionMind",
        displayName: "ポリューションマインド",
        icon: warlock_pollution_mind,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "選択した範囲内にある対象4人に9秒間、3秒毎に使用者知能の200%のダメージ。",
            "選択した範囲内にある対象5人に12秒間、3秒毎に使用者知能の300%のダメージ。",
            "選択した範囲内にある対象6人に15秒間、3秒毎に使用者知能の400%のダメージ。",
            "選択した範囲内にある対象7人に18秒間、3秒毎に使用者知能の500%のダメージ。",
            "選択した範囲内にある対象8人に21秒間、3秒毎に使用者知能の600%のダメージ。",
            "選択した範囲内にある対象9人に24秒間、3秒毎に使用者知能の700%のダメージ。",
            "選択した範囲内にある対象9人に30秒間、3秒毎に使用者知能の900%のダメージ。",
        ],
        attributes: {}
    },
    {
        name: "areaToxicPotion",
        displayName: "エリアトキシックポーション",
        icon: warlock_area_toxic_potion,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "選択した範囲内の4体の対象に9秒間、200%ほどのダメージを与え、一般ポーションの使用を禁止。",
            "選択した範囲内の5体の対象に12秒間、300%ほどのダメージを与え、一般ポーションの使用を禁止。",
            "選択した範囲内の6体の対象に15秒間、400%ほどのダメージを与え、一般ポーションの使用を禁止。",
            "選択した範囲内の7体の対象に18秒間、500%ほどのダメージを与え、一般ポーションの使用を禁止。",
            "選択した範囲内の8体の対象に21秒間、600%ほどのダメージを与え、一般ポーションの使用を禁止。",
            "選択した範囲内の9体の対象に24秒間、700%ほどのダメージを与え、一般ポーションの使用を禁止。",
            "選択した範囲内の9体の対象に30秒間、900%ほどのダメージを与え、一般ポーションの使用を禁止。",
        ],
        attributes: {}
    },
    {
        name: "lowMaster",
        displayName: "ローマスター",
        icon: warlock_low_master,
        category: "Debuff",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "15秒間対象の攻撃スキルのレベルを1下げる。",
            "15秒間対象の攻撃スキルのレベルを2下げる。",
            "20秒間対象の攻撃スキルのレベルを2下げる。",
            "20秒間対象の攻撃スキルのレベルを3下げる。",
            "25秒間対象の攻撃スキルのレベルを3下げる。",
            "30秒間対象の攻撃スキルのレベルを4下げる。",
            "30秒間対象の攻撃スキルのレベルを5下げる。",
        ],
        attributes: {}
    },
    {
        name: "riseRoute",
        displayName: "ライズルート",
        icon: warlock_rise_root,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "知能の200%ダメージを与え、使用者から10m以内の対象4人を3秒間動けなくする。",
            "知能の300%ダメージを与え、使用者から10m以内の対象5人を3秒間動けなくする。",
            "知能の400%ダメージを与え、使用者から10m以内の対象6人を4秒間動けなくする。",
            "知能の500%ダメージを与え、使用者から10m以内の対象7人を4秒間動けなくする。",
            "知能の600%ダメージを与え、使用者から10m以内の対象8人を5秒間動けなくする。",
            "知能の700%ダメージを与え、使用者から10m以内の対象9人を5秒間動けなくする。",
            "知能の900%ダメージを与え、使用者から10m以内の対象9人を7秒間動けなくする。",
        ],
        attributes: {}
    },
    {
        name: "snatch",
        displayName: "スナッチ",
        icon: warlock_snatch,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "5分間対象のバフスキル1つを吸収",
            "10分間対象のバフスキル1つを吸収",
            "15分間対象のバフスキル1つを吸収",
            "20分間対象のバフスキル1つを吸収",
            "25分間対象のバフスキル1つを吸収",
            "30分間対象のバフスキル1つを吸収",
            "60分間対象のバフスキル1つを吸収",
        ],
        attributes: {}
    },
    {
        name: "preventPet",
        displayName: "プレベントペット",
        icon: warlock_prevent_pet,
        category: "Debuff",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間対象のペットの効果が無効となります",
            "35秒間対象のペットの効果が無効となります",
            "40秒間対象のペットの効果が無効となります",
            "45秒間対象のペットの効果が無効となります",
            "50秒間対象のペットの効果が無効となります",
            "60秒間対象のペットの効果が無効となります",
            "120秒間対象のペットの効果が無効となります",
        ],
        attributes: {}
    },
    {
        name: "fakeDeath",
        displayName: "フェイクデス",
        icon: warlock_fake_death,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "10秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
            "15秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
            "20秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
            "25秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
            "30秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
            "40秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
            "HPとMPを100%回復し、50秒間死んだふり。モンスター敵対心数値を初期化させ、無敵効果を発生。",
        ],
        attributes: {}
    },
    {
        name: "brokenTreasure",
        displayName: "ブロークントレジャー",
        icon: warlock_broken_treasure,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30秒間、対象のすべてのステータスを10%減少、300%増加した魔法ダメージを与えます。",
            "30秒間、対象のすべてのステータスを15%減少、320%増加した魔法ダメージを与えます。",
            "30秒間、対象のすべてのステータスを20%減少、360%増加した魔法ダメージを与えます。",
            "30秒間、対象のすべてのステータスを25%減少、400%増加した魔法ダメージを与えます。",
            "30秒間、対象のすべてのステータスを30%減少、440%増加した魔法ダメージを与えます。",
            "30秒間、対象のすべてのステータスを40%減少、500%増加した魔法ダメージを与えます。",
            "30秒間、対象のすべてのステータスを60%減少、700%増加した魔法ダメージを与えます。",
        ],
        attributes: {}
    },
    {
        name: "eraseAbility",
        displayName: "イレイスアビリティ",
        icon: warlock_erase_ability,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 2,
        descriptions: [
            "使用者の1次スキルを初期化(スキル強化石含む)",
            "使用者の1次スキルまたは2次スキルを初期化(スキル強化石含む)"
        ],
        attributes: {}
    },
    {
        name: "manaBurnUp",
        displayName: "マナバーンアップ",
        icon: warlock_mana_burn_up,
        category: "Other",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "30分間、使用者のスキル防御力が2%上昇し、与えたダメージの5%ほど相手のMPを減少。",
            "30分間、使用者のスキル防御力が5%上昇し、与えたダメージの10%ほど相手のMPを減少。",
            "30分間、使用者のスキル防御力が7%上昇し、与えたダメージの15%ほど相手のMPを減少。",
            "30分間、使用者のスキル防御力が9%上昇し、与えたダメージの20%ほど相手のMPを減少。",
            "30分間、使用者のスキル防御力が10%上昇し、与えたダメージの25%ほど相手のMPを減少。",
            "30分間、使用者のスキル防御力が12%上昇し、与えたダメージの30%ほど相手のMPを減少。",
            "30分間、使用者のスキル防御力が15%上昇し、与えたダメージの40%ほど相手のMPを減少。",
        ],
        attributes: {
            0: {
                multiplySkillDefense: 2,
            },
            1: {
                multiplySkillDefense: 5,
            },
            2: {
                multiplySkillDefense: 7,
            },
            3: {
                multiplySkillDefense: 9,
            },
            4: {
                multiplySkillDefense: 10,
            },
            5: {
                multiplySkillDefense: 12,
            },
            6: {
                multiplySkillDefense: 15,
            }
        }
    },
    {
        name: "nightmare",
        displayName: "ナイトメア",
        icon: warlock_nightmare,
        category: "Attack",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "対象と周囲3体の敵に知能・精神の150%ほど増加したダメージ。3秒間全ての攻撃を5%減少。",
            "対象と周囲4体の敵に知能・精神の200%ほど増加したダメージ。4秒間全ての攻撃を10%減少。",
            "対象と周囲5体の敵に知能・精神の250%ほど増加したダメージ。5秒間全ての攻撃を15%減少。",
            "対象と周囲6体の敵に知能・精神の300%ほど増加したダメージ。6秒間全ての攻撃を20%減少。",
            "対象と周囲7体の敵に知能・精神の400%ほど増加したダメージ。7秒間全ての攻撃を25%減少。",
            "対象と周囲8体の敵に知能・精神の500%ほど増加したダメージ。8秒間全ての攻撃を30%減少。",
            "対象と周囲9体の敵に知能・精神の700%ほど増加したダメージ。10秒間全ての攻撃を50%減少。",
        ],
        attributes: {}
    },

    {
        name: "spellLiberation",
        displayName: "スペルリベレーション",
        icon: warlock_spell_liberation,
        category: "Buff",
        origin: "Self",
        raceid: 5,
        jobid: 1,
        min: 1,
        max: 7,
        descriptions: [
            "被ダメージ30%減少、移動速度50%増加。",
            "被ダメージ30%減少、移動速度60%増加。",
            "被ダメージ40%減少、移動速度60%増加。",
            "被ダメージ40%減少、移動速度70%増加。",
            "被ダメージ50%減少、移動速度70%増加。",
            "被ダメージ50%減少、移動速度80%増加。",
            "被ダメージ70%減少、移動速度100%増加。",
        ],
        attributes: {
            0: {
                multiplyDecreaseDamageTaken: 30,
                multiplyMovementSpeed: 50,
            },
            1: {
                multiplyDecreaseDamageTaken: 30,
                multiplyMovementSpeed: 60,
            },
            2: {
                multiplyDecreaseDamageTaken: 40,
                multiplyMovementSpeed: 60,
            },
            3: {
                multiplyDecreaseDamageTaken: 40,
                multiplyMovementSpeed: 70,
            },
            4: {
                multiplyDecreaseDamageTaken: 50,
                multiplyMovementSpeed: 70,
            },
            5: {
                multiplyDecreaseDamageTaken: 50,
                multiplyMovementSpeed: 80,
            },
            6: {
                multiplyDecreaseDamageTaken: 70,
                multiplyMovementSpeed: 100,
            }
        }
    }
]