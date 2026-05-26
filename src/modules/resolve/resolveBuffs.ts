import { skills, SKillOriginNames } from "../../static/skills/skill";
import { CharacterState, ResolvedCharacter } from "../character/types";

export const resolveBuffs = (buffs: CharacterState["buffs"]): ResolvedCharacter["resolvedBuffs"] => {
    return Object.fromEntries(
        SKillOriginNames.map((origin) => [
            origin,
            buffs[origin].flatMap((buff) => {
                const skill = skills[buff.skillId];
                if (!skill) {
                    return [];
                }

                return [{
                    ...buff,
                    origin,
                    skill,
                    options: {
                        ...skill.attributes[buff.level - 1],
                    },
                }];
            }),
        ])
    ) as ResolvedCharacter["resolvedBuffs"];
};

