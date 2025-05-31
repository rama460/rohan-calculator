import { Skill } from "./skill";

import cash_proof_of_brave from "../../assets/skills/cash_proof_of_brave.png";
import cash_proof_of_master_archer from "../../assets/skills/cash_proof_of_master_archer.png";
import cash_proof_of_wisdom from "../../assets/skills/cash_proof_of_wisdom.png";
import cash_gale_protect from "../../assets/skills/cash_gale_protect.png";
import cash_phlox_protect from "../../assets/skills/cash_phlox_protect.png";
import cash_life_force_crystal from "../../assets/skills/cash_life_force_crystal.png";
import cash_mana_force_crystal from "../../assets/skills/cash_mana_force_crystal.png";
import cash_silvas_footstep from "../../assets/skills/cash_silvas_footstep.png";
import cash_proof_of_assassin from "../../assets/skills/cash_proof_of_assassin.png";
import cash_secret_of_fatal from "../../assets/skills/cash_secret_of_fatal.png";
import cash_mareas_breath from "../../assets/skills/cash_mareas_breath.png";

export const cash_skills: Skill[] = [

    {
        name: "proofOfBrave",
        displayName: "勇者の証",
        icon: cash_proof_of_brave,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間、近距離攻撃力が10%上がります。",
            "1時間、近距離攻撃力が20%上がります。",
            "1時間、近距離攻撃力が30%上がります。",
            "1時間、近距離攻撃力が50%上がります。",
            "1時間、近距離攻撃力が100%上がります。",
        ],
        attributes: {
            0: {
                multiplyMeleeAttack: 10,
            },
            1: {
                multiplyMeleeAttack: 20,
            },
            2: {
                multiplyMeleeAttack: 30,
            },
            3: {
                multiplyMeleeAttack: 50,
            },
            4: {
                multiplyMeleeAttack: 100,
            }
        },
    },
    {
        name: "proofOfWisdom",
        displayName: "賢者の証",
        icon: cash_proof_of_wisdom,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間、魔法攻撃力が10%上がります。",
            "1時間、魔法攻撃力が20%上がります。",
            "1時間、魔法攻撃力が30%上がります。",
            "1時間、魔法攻撃力が50%上がります。",
            "1時間、魔法攻撃力が100%上がります。",
        ],
        attributes: {
            0: {
                multiplyMagicAttack: 10,
            },
            1: {
                multiplyMagicAttack: 20,
            },
            2: {
                multiplyMagicAttack: 30,
            },
            3: {
                multiplyMagicAttack: 50,
            },
            4: {
                multiplyMagicAttack: 100,
            }
        }
    },
    {
        name: "proofOfMasterArcher",
        displayName: "名射手の証",
        icon: cash_proof_of_master_archer,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間、遠距離攻撃力が10%上がります。",
            "1時間、遠距離攻撃力が20%上がります。",
            "1時間、遠距離攻撃力が30%上がります。",
            "1時間、遠距離攻撃力が50%上がります。",
            "1時間、遠距離攻撃力が100%上がります。",
        ],
        attributes: {
            0: {
                "multiplyRangeAttack": 10,
            },
            1: {
                "multiplyRangeAttack": 20,
            },
            2: {
                "multiplyRangeAttack": 30,
            },
            3: {
                "multiplyRangeAttack": 50,
            },
            4: {
                "multiplyRangeAttack": 100,
            }
        }
    },
    {
        name: "galeProtect",
        displayName: "ゲイルの保護",
        icon: cash_gale_protect,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間の間、物理防御力が10%上がります。",
            "1時間の間、物理防御力が20%上がります。",
            "1時間の間、物理防御力が30%上がります。",
            "1時間の間、物理防御力が50%上がります。",
            "1時間の間、物理防御力が100%上がります。",
        ],
        attributes: {
            0: {
                multiplyPhysicalDefense: 10,
            },
            1: {
                multiplyPhysicalDefense: 20,
            },
            2: {
                multiplyPhysicalDefense: 30,
            },
            3: {
                multiplyPhysicalDefense: 50,
            },
            4: {
                multiplyPhysicalDefense: 100,
            }
        }
    },
    {
        name: "phloxProtect",
        displayName: "フロックスの保護",
        icon: cash_phlox_protect,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間の間、魔法防御力が10%上がります。",
            "1時間の間、魔法防御力が20%上がります。",
            "1時間の間、魔法防御力が30%上がります。",
            "1時間の間、魔法防御力が50%上がります。",
            "1時間の間、魔法防御力が100%上がります。",
        ],
        attributes: {
            0: {
                multiplyMagicalDefense: 10,
            },
            1: {
                multiplyMagicalDefense: 20,
            },
            2: {
                multiplyMagicalDefense: 30,
            },
            3: {
                multiplyMagicalDefense: 50,
            },
            4: {
                multiplyMagicalDefense: 100,
            }
        }
    },
    {
        name: "lifeForceCrystal",
        displayName: "生命力の結晶",
        icon: cash_life_force_crystal,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間の間、HPが10%上がります。",
            "1時間の間、HPが20%上がります。",
            "1時間の間、HPが30%上がります。",
            "1時間の間、HPが50%上がります。",
            "1時間の間、HPが100%上がります。",
        ],
        attributes: {
            0: {
                multiplyHitPoint: 10,
            },
            1: {
                multiplyHitPoint: 20,
            },
            2: {
                multiplyHitPoint: 30,
            },
            3: {
                multiplyHitPoint: 50,
            },
            4: {
                multiplyHitPoint: 100,
            }
        }
    },
    {
        name: "manaForceCrystal",
        displayName: "マナの結晶",
        icon: cash_mana_force_crystal,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 5,
        descriptions: [
            "1時間の間、MPが10%上がります。",
            "1時間の間、MPが20%上がります。",
            "1時間の間、MPが30%上がります。",
            "1時間の間、MPが50%上がります。",
            "1時間の間、MPが100%上がります。",
        ],
        attributes: {
            0: {
                multiplyMagicPoint: 10,
            },
            1: {
                multiplyMagicPoint: 20,
            },
            2: {
                multiplyMagicPoint: 30,
            },
            3: {
                multiplyMagicPoint: 50,
            },
            4: {
                multiplyMagicPoint: 100,
            }
        }
    },
    {
        name: "silvasFootstep",
        displayName: "シルバの足取り",
        icon: cash_silvas_footstep,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 4,
        descriptions: [
            "10分間、移動速度が30%上がります。",
            "10分間、移動速度が60%上がります。",
            "10分間、移動速度が100%上がります。",
            "1時間、移動速度が100%上がります。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 30,
            },
            1: {
                multiplyMovementSpeed: 60,
            },
            2: {
                multiplyMovementSpeed: 100,
            },
            3: {
                multiplyMovementSpeed: 100,
            }
        }
    },
    {
        name: "proofOfAssassin",
        displayName: "アサシンの証",
        icon: cash_proof_of_assassin,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 3,
        descriptions: [
            "30分間、クリティカル確率が1%上がります。",
            "30分間、クリティカル確率が2%上がります。",
            "30分間、クリティカル確率が3%上がります。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 1,
            },
            1: {
                plusCriticalRate: 2,
            },
            2: {
                plusCriticalRate: 3,
            }
        }
    },
    {
        name: "secretOfFatal",
        displayName: "致命打の秘訣",
        icon: cash_secret_of_fatal,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 4,
        descriptions: [
            "1時間、クリティカル攻撃時のダメージが10%上がります。",
            "1時間、クリティカル攻撃時のダメージが20%上がります。",
            "1時間、クリティカル攻撃時のダメージが30%上がります。",
            "1時間、クリティカル攻撃時のダメージが50%上がります。",
        ],
        attributes: {
            0: {
                multiplyCriticalDamage: 10,
            },
            1: {
                multiplyCriticalDamage: 20,
            },
            2: {
                multiplyCriticalDamage: 30,
            },
            3: {
                multiplyCriticalDamage: 50,
            }
        }
    },
    {
        name: "mareasBreath",
        displayName: "マレアの息吹",
        icon: cash_mareas_breath,
        category: "Buff",
        origin: "Cash",
        min: 1,
        max: 4,
        descriptions: [
            "2時間、全ての能力値が10%上がります。",
            "2時間、全ての能力値が20%上がります。",
            "2時間、全ての能力値が30%上がります。",
            "2時間、全ての能力値が50%上がります。",
        ],
        attributes: {
            0: {
                multiplyAllStatus: 10,
            },
            1: {
                multiplyAllStatus: 20,
            },
            2: {
                multiplyAllStatus: 30,
            },
            3: {
                multiplyAllStatus: 50,
            }
        }
    },
]
