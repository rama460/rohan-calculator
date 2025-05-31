import { BuiltinOptionKeyType } from "../options";
import { archer_skills } from "./archer";
import { assassin_skills } from "./assassin";
import { avenger_skills } from "./avenger";
import { berserker_skills } from "./berserker";
import { cash_skills } from "./cash";
import { defender_skills } from "./defender";
import { dragonfighter_skills } from "./dragonfighter";
import { dragonknight_skills } from "./dragonknight";
import { dragonsage_skills } from "./dragonsage";
import { guardian_skills } from "./guardian";
import { guild_skills } from "./guild";
import { healer_skills } from "./healer";
import { knight_skills } from "./knight";
import { mage_skills } from "./mage";
import { mer_skills } from "./mer";
import { noir_skills } from "./noir";
import { predator_skills } from "./predator";
import { priest_skills } from "./priest";
import { ranger_skills } from "./ranger";
import { rumior_skills } from "./rumior";
import { savage_skills } from "./savage";
import { scout_skills } from "./scout";
import { templar_skills } from "./templar";
import { warlock_skills } from "./warlock";
import { warrior_skills } from "./warrior";
import { wizard_skills } from "./wizard";

export type Skill = {
    name: string;
    displayName: string;
    icon: string;
    category: SkillCategory;
    origin: SkillOrigin;
    raceid?: number;
    jobid?: number;
    min: number;
    max: number;
    descriptions: string[];
    attributes: {
        [key: number]: {
            [key in BuiltinOptionKeyType]?: number;
        }
    }
}

export const SkillCategoryNames = [
    "Passive", "Buff", "Attack", "Other", "Debuff"
] as const;
export type SkillCategory = typeof SkillCategoryNames[number];
export const SKillOriginNames = [
    "Self", "Group", "Guild", "Cash"
] as const;
export type SkillOrigin = typeof SKillOriginNames[number];

export const skills: Skill[] = [
    // ヒューマン
    // ナイト
    ...knight_skills,
    // ガーディアン
    ...guardian_skills,
    // ディフェンダー
    ...defender_skills,
    // エルフ
    // ヒーラー
    ...healer_skills,
    // プリースト
    ...priest_skills,
    // テンプラー
    ...templar_skills,
    // ハーフエルフ
    // アーチャー
    ...archer_skills,
    // レンジャー
    ...ranger_skills,
    // スカウト
    ...scout_skills,
    // ダン
    // アサシン
    ...assassin_skills,
    // アベンジャー
    ...avenger_skills,
    // プレデター
    ...predator_skills,
    // デカン
    // ドラゴンファイター
    ...dragonfighter_skills,
    // ドラゴンナイト
    ...dragonknight_skills,
    // ドラゴンセージ
    ...dragonsage_skills,
    // ダークエルフ
    // メイジ
    ...mage_skills,
    // ウォーロック
    ...warlock_skills,
    // ウィザード
    ...wizard_skills,
    // ジャイアント
    // ウォリアー
    ...warrior_skills,
    // バーサーカー
    ...berserker_skills,
    // サベージ
    ...savage_skills,
    // トリニティ
    // メル
    ...mer_skills,
    // ルミール
    ...rumior_skills,
    // ノワール
    ...noir_skills,
    // 課金バフ
    ...cash_skills,
    // ギルドバフ
    ...guild_skills

]