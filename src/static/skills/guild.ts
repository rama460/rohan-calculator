import { Skill } from "./skill";

import guild_enhanced_attack from "../../assets/skills/guild_enhanced_attack.png";
import guild_enhanced_defense from "../../assets/skills/guild_enhanced_defense.png";
import guild_guild_bless from "../../assets/skills/guild_guild_bless.png";
import guild_guild_boost from "../../assets/skills/guild_guild_boost.png";
import guild_guild_potion_value from "../../assets/skills/guild_guild_potion_value.png";
import guild_movement_mastery from "../../assets/skills/guild_movement_mastery.png";
import guild_speed_mastery from "../../assets/skills/guild_speed_mastery.png";
import guild_crasy_ride from "../../assets/skills/guild_crasy_ride.png";
import guild_akane_mastery from "../../assets/skills/guild_akane_mastery.png";

export const guild_skills: Skill[] = [

    {
        name: "enhancedAttack",
        displayName: "エンハンスドアタック",
        icon: guild_enhanced_attack,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "2時間の間、ギルドメンバーの攻撃力10%増加。",
        ],
        attributes: {
            0: {
                multiplyAttack: 10,
            }
        }
    },
    {
        name: "enhancedDefense",
        displayName: "エンハンスドディフェンス",
        icon: guild_enhanced_defense,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "2時間の間、ギルドメンバーの防御力10%増加。",
        ],
        attributes: {
            0: {
                multiplyDefense: 10,
            }
        }
    },
    {
        name: "guildBless",
        displayName: "ギルドブレス",
        icon: guild_guild_bless,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "1時間の間、ギルドメンバーのHPを3000増加させる。",
        ],
        attributes: {
            0: {
                plusHitPoint: 3000,
            }
        }
    },
    {
        name: "guildPotionValue",
        displayName: "ギルドポーションバリュー",
        icon: guild_guild_potion_value,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "1時間の間、ギルドメンバーのポーション効果20%増加。再使用時間50%短縮。",
        ],
        attributes: {
            0: {
                multiplyPotionRecovery: 20,
            }
        }
    },
    {
        name: "guildBoost",
        displayName: "ギルドブースト",
        icon: guild_guild_boost,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "2時間の間、ギルドメンバーのクリティカル攻撃率を2%上昇する。",
        ],
        attributes: {
            0: {
                plusCriticalRate: 2,
            }
        }
    },
    {
        name: "crazyRide",
        displayName: "クレイジーライド",
        icon: guild_crasy_ride,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "4時間の間、ギルドメンバーの乗り物の移動速度20%増加。クリティカル攻撃が当たっても落ちない。",
        ],
        attributes: {
            0: {
                multiplyRideSpeed: 20,
            }
        }
    },
    {
        name: "speedMastery",
        displayName: "スピードマスタリー",
        icon: guild_speed_mastery,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "2時間の間、ギルドメンバーの攻撃速度10%上昇。",
        ],
        attributes: {
            0: {
                multiplyAttackSpeed: 10,
            }
        }
    },
    {
        name: "movementMastery",
        displayName: "ムーブメントマスタリー",
        icon: guild_movement_mastery,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "2時間の間、ギルドメンバーの移動速度20%増加。",
        ],
        attributes: {
            0: {
                multiplyMovementSpeed: 10,
            }
        }
    },
    {
        name: "akaneMastery",
        displayName: "アケインマスタリー",
        icon: guild_akane_mastery,
        category: "Buff",
        origin: "Guild",
        min: 1,
        max: 1,
        descriptions: [
            "2時間の間、ギルドメンバーの1次ステータス10%増加。",
        ],
        attributes: {
            0: {
                "multiplyAllStatus": 10,
            }
        }
    },
]