import { Skill } from "./skill";
import assassin_invenom from "../../assets/skills/assassin/AS_Invenom.gif";
import assassin_hide from "../../assets/skills/assassin/AS_Hide.gif";
import assassin_parry from "../../assets/skills/assassin/AS_Parry.gif";
import assassin_mortal_rising from "../../assets/skills/assassin/AS_Mortal_Rising.gif";
import assassin_sprint from "../../assets/skills/assassin/AS_Sprint.gif";
import assassin_throwing_weapon from "../../assets/skills/assassin/AS_Throwing_Weapon.gif";
import assassin_sudden_attack from "../../assets/skills/assassin/AS_Sudden_Attack.gif";
import assassin_mirror_shield from "../../assets/skills/assassin/AS_Mirror_Shield.gif";
import assassin_psychic_phantom from "../../assets/skills/assassin/AS_Psychic_Phantom.gif";
import assassin_avoid from "../../assets/skills/assassin/AS_Avoid.gif";
import assassin_potion_value from "../../assets/skills/assassin/AS_Potion_Value.gif";
import assassin_strength from "../../assets/skills/assassin/AS_Strength.gif";
import assassin_boost from "../../assets/skills/assassin/AS_Boost.gif";
import assassin_mana_burn from "../../assets/skills/assassin/AS_Mana_Burn.gif";
import assassin_phantom_clow from "../../assets/skills/assassin/AS_Phantom_Clow.gif";
import assassin_deadly_blow from "../../assets/skills/assassin/AS_Deadly_Blow.gif";
import assassin_death_blow from "../../assets/skills/assassin/AS_Death_Blow.gif";
import assassin_silence from "../../assets/skills/assassin/AS_Silence.gif";
import assassin_confusion_pouch from "../../assets/skills/assassin/AS_Confusion_Pouch.gif";

export const assassin_skills: Skill[] = [

    {
        name: "invenom",
        displayName: "インベノム",
        icon: assassin_invenom,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 5,
        descriptions: [
            "毒属性攻撃力を20%増加させます。2%の確率で追加ダメージを5回与えます。",
            "毒属性攻撃力を40%増加させます。3%の確率で追加ダメージを6回与えます。",
            "毒属性攻撃力を60%増加させます。4%の確率で追加ダメージを7回与えます。",
            "毒属性攻撃力を80%増加させます。5%の確率で追加ダメージを8回与えます。",
            "毒属性攻撃力を100%増加させます。6%の確率で追加ダメージを9回与えます。",
        ],
        attributes: {}
    },
    {
        name: "hide",
        displayName: "ハイド",
        icon: assassin_hide,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "5レベル高い敵までに対してハイドができる。ハイド中は移動速度が50%減少。",
            "5レベル高い敵までに対してハイドができる。ハイド中は移動速度が40%減少。",
            "5レベル高い敵までに対してハイドができる。ハイド中は移動速度が30%減少。",
            "5レベル高い敵までに対してハイドができる。ハイド中は移動速度が20%減少。",
            "5レベル高い敵までに対してハイドができる。",
            "5レベル高い敵までに対してハイドができる。ハイド中は移動速度が20%増加。",
            "5レベル高い敵までに対してハイドができる。ハイド中は移動速度が30%増加。"
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: -50,
            },
            1: {
                multiplyMovementSpeed: -40,
            },
            2: {
                multiplyMovementSpeed: -30,
            },
            3: {
                multiplyMovementSpeed: -20,
            },
            4: {
                multiplyMovementSpeed: 0,
            },
            5: {
                multiplyMovementSpeed: 20,
            },
            6: {
                multiplyMovementSpeed: 30,
            }
        }
    },
    {
        name: "parry",
        displayName: "パリィ",
        icon: assassin_parry,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、物理攻撃を4%の確率で防ぎます。",
            "21分間、物理攻撃を7%の確率で防ぎます。",
            "24分間、物理攻撃を10%の確率で防ぎます。",
            "27分間、物理攻撃を13%の確率で防ぎます。",
            "30分間、物理攻撃を16%の確率で防ぎます。",
            "30分間、物理攻撃を19%の確率で防ぎます。",
            "90分間、物理攻撃を30%の確率で防ぎます。",
        ],
        attributes: {
            0: {
                multiplyPhysicalParryRate: 4,
            },
            1: {
                multiplyPhysicalParryRate: 7,
            },
            2: {
                multiplyPhysicalParryRate: 10,
            },
            3: {
                multiplyPhysicalParryRate: 13,
            },
            4: {
                multiplyPhysicalParryRate: 16,
            },
            5: {
                multiplyPhysicalParryRate: 19,
            },
            6: {
                multiplyPhysicalParryRate: 30,
            }
        }
    },
    {
        name: "mortalRising",
        displayName: "モータルライジング",
        icon: assassin_mortal_rising,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "6分間、ハイド中の初撃が20%の確率でクリティカル攻撃になる。",
            "9分間、ハイド中の初撃が40%の確率でクリティカル攻撃になる。",
            "12分間、ハイド中の初撃が60%の確率でクリティカル攻撃になる。",
            "15分間、ハイド中の初撃が80%の確率でクリティカル攻撃になる。",
            "18分間、ハイド中の初撃が100%の確率でクリティカル攻撃になる。",
            "18分間、ハイド中の初撃が100%の確率でクリティカル攻撃になる。レベルが7高い敵に対してハイドができるようになる。",
            "21分間、ハイド中の初撃がクリティカル率を100%増加させる。レベルが8高い敵に対してハイドができるようになる。"
        ],
        attributes: {}
    },
    {
        name: "sprint",
        displayName: "スプリント",
        icon: assassin_sprint,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18秒間、詠唱者の移動速度を20%増加。",
            "21秒間、詠唱者の移動速度を40%増加。",
            "24秒間、詠唱者の移動速度を60%増加。",
            "27秒間、詠唱者の移動速度を80%増加。",
            "30秒間、詠唱者の移動速度を100%増加。",
            "30秒間、詠唱者の移動速度を120%増加。",
            "30秒間、詠唱者の移動速度を140%増加。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 20,
            },
            1: {
                multiplyMovementSpeed: 40,
            },
            2: {
                multiplyMovementSpeed: 60,
            },
            3: {
                multiplyMovementSpeed: 80,
            },
            4: {
                multiplyMovementSpeed: 100,
            },
            5: {
                multiplyMovementSpeed: 120,
            },
            6: {
                multiplyMovementSpeed: 140,
            }
        }
    },
    {
        name: "throwingWeapon",
        displayName: "スローイングウェポン",
        icon: assassin_throwing_weapon,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象へ手裏剣の攻撃力に40%追加したダメージ。",
            "対象へ手裏剣の攻撃力に80%追加したダメージ。",
            "対象へ手裏剣の攻撃力に120%追加したダメージ。",
            "対象へ手裏剣の攻撃力に160%追加したダメージ。",
            "対象へ手裏剣の攻撃力に200%追加したダメージ。",
            "対象へ手裏剣の攻撃力に250%追加したダメージ。対象を3秒間ルート",
            "対象へ手裏剣の攻撃力に320%追加したダメージ。対象を3秒間ルート",
        ],
        attributes: {}
    },
    {
        name: "suddenAttack",
        displayName: "サドンアタック",
        icon: assassin_sudden_attack,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "ハイド中に攻撃する時、100%増加したダメージ。追加でレベルダメージを4回与える。",
            "ハイド中に攻撃する時、150%増加したダメージ。追加でレベルダメージを5回与える。",
            "ハイド中に攻撃する時、200%増加したダメージ。追加でレベルダメージを6回与える。",
            "ハイド中に攻撃する時、250%増加したダメージ。追加でレベルダメージを7回与える。",
            "ハイド中に攻撃する時、300%増加したダメージ。追加でレベルダメージを8回与える。",
            "ハイド中に攻撃する時、350%増加したダメージ。追加でレベルダメージを9回与える。",
            "ハイド中に攻撃する時、400%増加したダメージ。追加でレベルダメージを15回与える。",
        ],
        attributes: {}
    },
    {
        name: "mirrorShield",
        displayName: "ミラーシールド",
        icon: assassin_mirror_shield,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "3分間、魔法攻撃を含むすべてのダメージの9%を攻撃者に反射します。",
            "4分間、魔法攻撃を含むすべてのダメージの11%を攻撃者に反射します。",
            "5分間、魔法攻撃を含むすべてのダメージの13%を攻撃者に反射します。",
            "6分間、魔法攻撃を含むすべてのダメージの15%を攻撃者に反射します。",
            "7分間、魔法攻撃を含むすべてのダメージの17%を攻撃者に反射します。",
            "8分間、魔法攻撃を含むすべてのダメージの20%を攻撃者に反射します。",
            "10分間、魔法攻撃を含むすべてのダメージの25%を攻撃者に反射します。",
        ],
        attributes: {
            0: {
                multiplyDamageReflectionRate: 9,
            },
            1: {
                multiplyDamageReflectionRate: 11,
            },
            2: {
                multiplyDamageReflectionRate: 13,
            },
            3: {
                multiplyDamageReflectionRate: 15,
            },
            4: {
                multiplyDamageReflectionRate: 17,
            },
            5: {
                multiplyDamageReflectionRate: 20,
            },
            6: {
                multiplyDamageReflectionRate: 25,
            }
        }
    },
    {
        name: "psychicPhantom",
        displayName: "サイキックファントム",
        icon: assassin_psychic_phantom,
        category: "Attack",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象に通常攻撃の80%追加ダメージ。",
            "対象に通常攻撃の90%追加ダメージ。",
            "対象に通常攻撃の100%追加ダメージ。",
            "対象に通常攻撃の110%追加ダメージ。",
            "対象に通常攻撃の120%追加ダメージ。",
            "対象に通常攻撃の130%追加ダメージ。",
            "対象に通常攻撃の140%追加ダメージ。",
        ],
        attributes: {}
    },
    {
        name: "avoid",
        displayName: "アボイド",
        icon: assassin_avoid,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の瞬発力を10%増加させます。",
            "21分間、使用者の瞬発力を15%増加させます。",
            "24分間、使用者の瞬発力を20%増加させます。",
            "27分間、使用者の瞬発力を25%増加させます。",
            "30分間、使用者の瞬発力を30%増加させます。",
            "30分間、使用者の瞬発力を40%増加させます。",
            "120分間、使用者の瞬発力を60%増加させます。",
        ],
        attributes: {
            0: {
                multiplyDexterity: 10,
            },
            1: {
                multiplyDexterity: 15,
            },
            2: {
                multiplyDexterity: 20,
            },
            3: {
                multiplyDexterity: 25,
            },
            4: {
                multiplyDexterity: 30,
            },
            5: {
                multiplyDexterity: 40,
            },
            6: {
                multiplyDexterity: 60,
            }
        }
    },
    {
        name: "potionValue",
        displayName: "ポーションバリュー",
        icon: assassin_potion_value,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "2分間、詠唱者のポーション回復量が10%増加。",
            "4分間、詠唱者のポーション回復量が15%増加。",
            "6分間、詠唱者のポーション回復量が20%増加。",
            "8分間、詠唱者のポーション回復量が25%増加。",
            "10分間、詠唱者のポーション回復量が30%増加。",
            "10分間、詠唱者のポーション回復量が35%増加。",
            "30分間、詠唱者のポーション回復量が40%増加。",
        ],
        attributes: {
            0: {
                multiplyPotionRecovery: 10,
            },
            1: {
                multiplyPotionRecovery: 15,
            },
            2: {
                multiplyPotionRecovery: 20,
            },
            3: {
                multiplyPotionRecovery: 25,
            },
            4: {
                multiplyPotionRecovery: 30,
            },
            5: {
                multiplyPotionRecovery: 35,
            },
            6: {
                multiplyPotionRecovery: 40,
            }
        }
    },
    {
        name: "strength",
        displayName: "ストレングス",
        icon: assassin_strength,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の力を10%増加させます。",
            "21分間、使用者の力を15%増加させます。",
            "24分間、使用者の力を20%増加させます。",
            "27分間、使用者の力を25%増加させます。",
            "30分間、使用者の力を30%増加させます。",
            "30分間、使用者の力を40%増加させます。",
            "120分間、使用者の力を60%増加させます。",
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
        name: "boost",
        displayName: "ブースト",
        icon: assassin_boost,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、使用者の通常攻撃のクリティカル確率を3%増加させます。",
            "21分間、使用者の通常攻撃のクリティカル確率を4%増加させます。",
            "24分間、使用者の通常攻撃のクリティカル確率を5%増加させます。",
            "27分間、使用者の通常攻撃のクリティカル確率を6%増加させます。",
            "30分間、使用者の通常攻撃のクリティカル確率を7%増加させます。",
            "30分間、使用者の通常攻撃のクリティカル確率を8%増加させます。",
            "120分間、使用者の通常攻撃のクリティカル確率を9%増加させます。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 3,
            },
            1: {
                plusCriticalRate: 4,
            },
            2: {
                plusCriticalRate: 5,
            },
            3: {
                plusCriticalRate: 6,
            },
            4: {
                plusCriticalRate: 7,
            },
            5: {
                plusCriticalRate: 8,
            },
            6: {
                plusCriticalRate: 9,
            }
        }
    },

    {
        name: "manaBurn",
        displayName: "マナバーン",
        icon: assassin_mana_burn,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象のMPをキャラレベルの25倍吸収し、キャラレベルの300%を自分のMPに転換。追加で対象を3秒間スタン。",
            "対象のMPをキャラレベルの50倍吸収し、キャラレベルの400%を自分のMPに転換。追加で対象を3秒間スタン。",
            "対象のMPをキャラレベルの75倍吸収し、キャラレベルの500%を自分のMPに転換。追加で対象を4秒間スタン。",
            "対象のMPをキャラレベルの100倍吸収し、キャラレベルの600%を自分のMPに転換。追加で対象を4秒間スタン。",
            "対象のMPをキャラレベルの125倍吸収し、キャラレベルの700%を自分のMPに転換。追加で対象を5秒間スタン。",
            "対象のMPをキャラレベルの150倍吸収し、キャラレベルの800%を自分のMPに転換。追加で対象を5秒間スタン。",
            "対象のMPをキャラレベルの200倍吸収し、キャラレベルの900%を自分のMPに転換。追加で対象を7秒間スタン。",
        ],
        attributes: {}
    },
    {
        name: "phantomClaw",
        displayName: "ファントムクロウ",
        icon: assassin_phantom_clow,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、サイキックファントムの攻撃が20%の確率でクリティカル適用。",
            "21分間、サイキックファントムの攻撃が35%の確率でクリティカル適用。",
            "24分間、サイキックファントムの攻撃が50%の確率でクリティカル適用。",
            "27分間、サイキックファントムの攻撃が65%の確率でクリティカル適用。",
            "30分間、サイキックファントムの攻撃が80%の確率でクリティカル適用。",
            "30分間、サイキックファントムの攻撃が100%の確率でクリティカル適用。",
            "90分間、サイキックファントムの攻撃が100%の確率でクリティカル適用。サイキックファントムのクリティカルダメージを増加。",
        ],
        attributes: {}
    },
    {
        name: "deadlyBlow",
        displayName: "デッドリーブロー",
        icon: assassin_deadly_blow,
        category: "Buff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、瞬発力が20%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の300%ほどダメージを増加させます。",
            "21分間、瞬発力が20%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の500%ほどダメージを増加させます。",
            "24分間、瞬発力が20%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の700%ほどダメージを増加させます。",
            "27分間、瞬発力が20%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の900%ほどダメージを増加させます。",
            "30分間、瞬発力が20%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の1100%ほどダメージを増加させます。",
            "30分間、瞬発力が20%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の1500%ほどダメージを増加させます。",
            "120分間、瞬発力が40%増加し、使用者の攻撃がクリティカルで命中した場合、瞬発力の2000%ほどダメージを増加させます。",
        ],
        attributes: {
            0: {
                multiplyDexterity: 20,
                plusCriticalDamageMultiplyDexterity: 300,
            },
            1: {
                multiplyDexterity: 20,
                plusCriticalDamageMultiplyDexterity: 500,
            },
            2: {
                multiplyDexterity: 20,
                plusCriticalDamageMultiplyDexterity: 700,
            },
            3: {
                multiplyDexterity: 20,
                plusCriticalDamageMultiplyDexterity: 900,
            },
            4: {
                multiplyDexterity: 20,
                plusCriticalDamageMultiplyDexterity: 1100,
            },
            5: {
                multiplyDexterity: 20,
                plusCriticalDamageMultiplyDexterity: 1500,
            },
            6: {
                multiplyDexterity: 40,
                plusCriticalDamageMultiplyDexterity: 2000,
            }

        }
    },
    {
        name: "deathBlow",
        displayName: "デスブロー",
        icon: assassin_death_blow,
        category: "Other",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "18分間、攻撃成功時に現在のモンスターキルカウント数の20%をダメージに追加する。",
            "21分間、攻撃成功時に現在のモンスターキルカウント数の40%をダメージに追加する。",
            "24分間、攻撃成功時に現在のモンスターキルカウント数の60%をダメージに追加する。",
            "27分間、攻撃成功時に現在のモンスターキルカウント数の80%をダメージに追加する。",
            "30分間、攻撃成功時に現在のモンスターキルカウント数の100%をダメージに追加する。",
            "30分間、攻撃成功時に現在のモンスターキルカウント数の120%をダメージに追加する。",
            "90分間、攻撃成功時に現在のモンスターキルカウント数の140%をダメージに追加する。",
        ],
        attributes: {}
    },
    {
        name: "silence",
        displayName: "サイレンス",
        icon: assassin_silence,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象を9秒間スキルを封印。",
            "対象を10秒間スキルを封印。",
            "対象を11秒間スキルを封印。",
            "対象を12秒間スキルを封印。",
            "対象を13秒間スキルを封印。",
            "対象を15秒間スキルを封印。",
            "対象を40秒間スキルを封印。",
        ],
        attributes: {}
    },
    {
        name: "confusionPouch",
        displayName: "コンフュージョンパウチ",
        icon: assassin_confusion_pouch,
        category: "Debuff",
        origin: "Self",
        raceid: 3,
        jobid: 0,
        min: 1,
        max: 7,
        descriptions: [
            "対象を5秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
            "対象を7秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
            "対象を9秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
            "対象を11秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
            "対象を13秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
            "対象を15秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
            "対象を20秒間混乱状態にする。混乱状態の対象はダメージを受けない。",
        ],
        attributes: {}
    }
]