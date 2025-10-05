import { Job, JobName } from '../../static/races';
import { getSkillByJob } from '../../static/skills/skill';

// スキルツリーレイアウト定義
export interface SkillTreeLayout {
    name: JobName;
    skillPositions: SkillPosition[];
    skillConnections: SkillConnection[];
}

// スキルツリーの座標定義
export type SkillPosition = {
    row: number;
    col: number;
    skillName: string;
};

export type SkillConnection = {
    from: string;
    to: string;
};

// スキルツリーレイアウトのサンプル
export const sampleSkillTreeLayouts: SkillTreeLayout[] = [
    {
        name: 'Knight',
        skillPositions: [
            { row: 0, col: 0, skillName: 'blazing' },
            { row: 0, col: 1, skillName: 'frozen' },
            { row: 0, col: 2, skillName: 'darkness' },
            { row: 0, col: 3, skillName: 'divine' },

            { row: 1, col: 1, skillName: 'taunt' },

            { row: 2, col: 0, skillName: 'risingMight' },
            { row: 2, col: 1, skillName: 'protection' },
            { row: 2, col: 2, skillName: 'psychicCrush' },

            { row: 3, col: 0, skillName: 'sharpenBlade' },
            { row: 3, col: 1, skillName: 'blessedShield' },
            { row: 3, col: 2, skillName: 'crashAbove' },

            { row: 4, col: 0, skillName: 'invoke' },
            { row: 4, col: 1, skillName: 'charge' },
            { row: 4, col: 2, skillName: 'shieldPush' },

            { row: 5, col: 0, skillName: 'breeding' },
            { row: 5, col: 1, skillName: 'assaultCrash' },
            { row: 5, col: 2, skillName: 'changeMind' }
        ],
        skillConnections: [
            { from: 'blazing', to: 'taunt' },
            { from: 'frozen', to: 'taunt' },
            { from: 'darkness', to: 'taunt' },
            { from: 'divine', to: 'taunt' },
            { from: 'taunt', to: 'risingMight' },
            { from: 'taunt', to: 'protection' },
            { from: 'taunt', to: 'psychicCrush' },
            { from: 'risingMight', to: 'sharpenBlade' },
            { from: 'protection', to: 'sharpenBlade' },
            { from: 'protection', to: 'blessedShield' },
            { from: 'psychicCrush', to: 'crashAbove' },
            { from: 'sharpenBlade', to: 'invoke' },
            { from: 'blessedShield', to: 'charge' },
            { from: 'blessedShield', to: 'shieldPush' },
            { from: 'crashAbove', to: 'shieldPush' },
            { from: 'invoke', to: 'breeding' },
            { from: 'charge', to: 'breeding' },
            { from: 'charge', to: 'assaultCrash' },
            { from: 'shieldPush', to: 'changeMind' },
            { from: 'breeding', to: 'assaultCrash' },
        ]
    },
    {
        name: 'Guardian',
        skillPositions: [
            { row: 0, col: 0, skillName: 'swordMastery' },
            { row: 0, col: 1, skillName: 'aimBlow' },
            { row: 0, col: 2, skillName: 'physicalBlow' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'tauntRoar' },
            { row: 1, col: 3, skillName: 'stunner' },

            { row: 2, col: 0, skillName: 'rush' },
            { row: 2, col: 1, skillName: 'warCry' },
            { row: 2, col: 2, skillName: 'crazyStrength' },
            { row: 2, col: 3, skillName: 'knightsMind' },

            { row: 3, col: 0, skillName: 'finalCrash' },
            { row: 3, col: 1, skillName: 'crazySwing' },
            { row: 3, col: 2, skillName: 'bloodDrain' },
            { row: 3, col: 3, skillName: 'overload' },

            { row: 4, col: 0, skillName: 'orderSwing' },
            { row: 4, col: 1, skillName: 'heavyWeapon' },
            { row: 4, col: 2, skillName: 'criticalAura' },

            { row: 5, col: 0, skillName: 'straightRepulse' },
            { row: 5, col: 1, skillName: 'rohaBless' },
            { row: 5, col: 2, skillName: 'knightSymbol' },

            { row: 6, col: 1, skillName: 'stoneSkin' },


        ],
        skillConnections: [
            { from: 'swordMastery', to: 'tauntRoar' },
            { from: 'aimBlow', to: 'tauntRoar' },
            { from: 'physicalBlow', to: 'tauntRoar' },
            { from: 'tauntRoar', to: 'rush' },
            { from: 'tauntRoar', to: 'warCry' },
            { from: 'tauntRoar', to: 'crazyStrength' },
            { from: 'rush', to: 'finalCrash' },
            { from: 'warCry', to: 'finalCrash' },
            { from: 'warCry', to: 'crazySwing' },
            { from: 'crazyStrength', to: 'crazySwing' },
            { from: 'crazyStrength', to: 'bloodDrain' },
            { from: 'finalCrash', to: 'orderSwing' },
            { from: 'finalCrash', to: 'crazySwing' },
            { from: 'crazySwing', to: 'heavyWeapon' },
            { from: 'bloodDrain', to: 'heavyWeapon' },
            { from: 'bloodDrain', to: 'criticalAura' },
            { from: 'orderSwing', to: 'straightRepulse' },
            { from: 'heavyWeapon', to: 'straightRepulse' },
            { from: 'heavyWeapon', to: 'rohaBless' },
            { from: 'heavyWeapon', to: 'knightSymbol' },
            { from: 'criticalAura', to: 'knightSymbol' },
            { from: 'straightRepulse', to: 'stoneSkin' },
            { from: 'rohaBless', to: 'stoneSkin' },
            { from: 'knightSymbol', to: 'stoneSkin' },
            { from: 'heroicPower', to: 'stunner' },
            { from: 'stunner', to: 'knightsMind' },
            { from: 'knightsMind', to: 'overload' }
        ]
    },
    {
        name: 'Defender',
        skillPositions: [
            { row: 0, col: 0, skillName: 'DefenderBluntMastery' },
            { row: 0, col: 1, skillName: 'blueSuction' },
            { row: 0, col: 2, skillName: 'shieldMastery' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'tauntRoar' },
            { row: 1, col: 3, skillName: 'leadersMind' },

            { row: 2, col: 0, skillName: 'eternalStamina' },
            { row: 2, col: 1, skillName: 'shout' },
            { row: 2, col: 2, skillName: 'recoveryAura' },
            { row: 2, col: 3, skillName: 'throwingShield' },

            { row: 3, col: 0, skillName: 'shieldBarden' },
            { row: 3, col: 1, skillName: 'powerHeavyArmor' },
            { row: 3, col: 2, skillName: 'physicalAura' },
            { row: 3, col: 3, skillName: 'ultimateBastian' },

            { row: 4, col: 0, skillName: 'rush' },
            { row: 4, col: 1, skillName: 'defenderNature' },
            { row: 4, col: 2, skillName: 'stoneSkin' },

            { row: 5, col: 0, skillName: 'extension' },
            { row: 5, col: 1, skillName: 'rohaShelter' },
            { row: 5, col: 2, skillName: 'moraleExpansion' },

            { row: 6, col: 1, skillName: 'fallWind' },

        ],
        skillConnections: [
            { from: 'DefenderBluntMastery', to: 'tauntRoar' },
            { from: 'blueSuction', to: 'tauntRoar' },
            { from: 'shieldMastery', to: 'tauntRoar' },
            { from: 'tauntRoar', to: 'eternalStamina' },
            { from: 'tauntRoar', to: 'shout' },
            { from: 'tauntRoar', to: 'recoveryAura' },
            { from: 'eternalStamina', to: 'shieldBarden' },
            { from: 'eternalStamina', to: 'powerHeavyArmor' },
            { from: 'shout', to: 'powerHeavyArmor' },
            { from: 'shout', to: 'physicalAura' },
            { from: 'recoveryAura', to: 'physicalAura' },
            { from: 'shieldBarden', to: 'rush' },
            { from: 'powerHeavyArmor', to: 'rush' },
            { from: 'powerHeavyArmor', to: 'defenderNature' },
            { from: 'physicalAura', to: 'stoneSkin' },
            { from: 'rush', to: 'extension' },
            { from: 'rush', to: 'rohaShelter' },
            { from: 'defenderNature', to: 'rohaShelter' },
            { from: 'defenderNature', to: 'moraleExpansion' },
            { from: 'stoneSkin', to: 'defenderNature' },
            { from: 'stoneSkin', to: 'moraleExpansion' },
            { from: 'extension', to: 'fallWind' },
            { from: 'rohaShelter', to: 'fallWind' },
            { from: 'moraleExpansion', to: 'fallWind' },
            { from: 'heroicPower', to: 'leadersMind' },
            { from: 'leadersMind', to: 'throwingShield' },
            { from: 'throwingShield', to: 'ultimateBastian' }
        ]
    },
    {
        name: 'Healer',
        skillPositions: [
            { row: 0, col: 0, skillName: 'heal' },
            { row: 0, col: 1, skillName: 'recovery' },
            { row: 0, col: 2, skillName: 'mindBlast' },

            { row: 1, col: 0, skillName: 'cureConfusion' },
            { row: 1, col: 1, skillName: 'divineAura' },
            { row: 1, col: 2, skillName: 'cureSilence' },

            { row: 2, col: 0, skillName: 'divineBeam' },
            { row: 2, col: 1, skillName: 'intelligenceBlow' },
            { row: 2, col: 2, skillName: 'holyLight' },

            { row: 3, col: 0, skillName: 'groupHeal' },
            { row: 3, col: 1, skillName: 'detect' },
            { row: 3, col: 2, skillName: 'instantHeal' },

            { row: 4, col: 0, skillName: 'magicBarrier' },
            { row: 4, col: 1, skillName: 'manaCharge' },
            { row: 4, col: 2, skillName: 'mentalBarrier' },

            { row: 5, col: 0, skillName: 'netBind' },
            { row: 5, col: 1, skillName: 'revive' },
            { row: 5, col: 2, skillName: 'saintStrike' },

            { row: 6, col: 1, skillName: 'killTime' },
        ],
        skillConnections: [
            { from: 'heal', to: 'divineAura' },
            { from: 'recovery', to: 'divineAura' },
            { from: 'mindBlast', to: 'divineAura' },

            { from: 'divineAura', to: 'cureConfusion' },
            { from: 'divineAura', to: 'cureSilence' },
            { from: 'divineAura', to: 'divineBeam' },
            { from: 'divineAura', to: 'intelligenceBlow' },
            { from: 'divineAura', to: 'holyLight' },

            { from: 'divineBeam', to: 'groupHeal' },
            { from: 'intelligenceBlow', to: 'groupHeal' },
            { from: 'intelligenceBlow', to: 'detect' },
            { from: 'holyLight', to: 'intelligenceBlow' },
            { from: 'holyLight', to: 'instantHeal' },

            { from: 'groupHeal', to: 'magicBarrier' },
            { from: 'groupHeal', to: 'detect' },
            { from: 'detect', to: 'manaCharge' },
            { from: 'instantHeal', to: 'manaCharge' },
            { from: 'instantHeal', to: 'mentalBarrier' },

            { from: 'magicBarrier', to: 'netBind' },
            { from: 'manaCharge', to: 'netBind' },
            { from: 'manaCharge', to: 'revive' },
            { from: 'mentalBarrier', to: 'saintStrike' },

            { from: 'netBind', to: 'killTime' },
            { from: 'netBind', to: 'revive' },
            { from: 'revive', to: 'killTime' },
            { from: 'revive', to: 'saintStrike' },
            { from: 'saintStrike', to: 'killTime' },
        ]
    },
    {
        name: 'Priest',
        skillPositions: [
            { row: 0, col: 0, skillName: 'mentalBlow' },
            { row: 0, col: 1, skillName: 'incarnation' },
            { row: 0, col: 2, skillName: 'almighty' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'dispel' },
            { row: 1, col: 3, skillName: 'blessingOfNature' },

            { row: 2, col: 0, skillName: 'groupAlmighty' },
            { row: 2, col: 1, skillName: 'erase' },
            { row: 2, col: 2, skillName: 'PriestStaffMastery' },
            { row: 2, col: 3, skillName: 'judgement' },

            { row: 3, col: 0, skillName: 'mareasMind' },
            { row: 3, col: 1, skillName: 'mareasBattle' },
            { row: 3, col: 2, skillName: 'vacuum' },
            { row: 3, col: 3, skillName: 'heavensDawn' },

            { row: 4, col: 0, skillName: 'groupInstantHeal' },
            { row: 4, col: 1, skillName: 'mareasGrace' },
            { row: 4, col: 2, skillName: 'nemesis' },

            { row: 5, col: 0, skillName: 'perfectHealing' },
            { row: 5, col: 1, skillName: 'soulMeditation' },
            { row: 5, col: 2, skillName: 'mindAir' },

            { row: 6, col: 1, skillName: 'obligation' },
        ],
        skillConnections: [
            { from: 'mentalBlow', to: 'dispel' },
            { from: 'incarnation', to: 'dispel' },
            { from: 'almighty', to: 'dispel' },

            { from: 'dispel', to: 'groupAlmighty' },
            { from: 'dispel', to: 'erase' },
            { from: 'dispel', to: 'PriestStaffMastery' },

            { from: 'groupAlmighty', to: 'mareasMind' },
            { from: 'groupAlmighty', to: 'mareasBattle' },
            { from: 'erase', to: 'mareasBattle' },
            { from: 'PriestStaffMastery', to: 'mareasBattle' },
            { from: 'PriestStaffMastery', to: 'vacuum' },

            { from: 'mareasMind', to: 'groupInstantHeal' },
            { from: 'mareasBattle', to: 'mareasGrace' },
            { from: 'vacuum', to: 'nemesis' },

            { from: 'groupInstantHeal', to: 'perfectHealing' },
            { from: 'groupInstantHeal', to: 'soulMeditation' },
            { from: 'mareasGrace', to: 'soulMeditation' },
            { from: 'nemesis', to: 'soulMeditation' },
            { from: 'nemesis', to: 'mindAir' },

            { from: 'perfectHealing', to: 'obligation' },
            { from: 'soulMeditation', to: 'obligation' },
            { from: 'mindAir', to: 'obligation' },

            { from: 'heroicPower', to: 'blessingOfNature' },
            { from: 'blessingOfNature', to: 'judgement' },
            { from: 'judgement', to: 'heavensDawn' },
        ]
    },
    {
        name: 'Templar',
        skillPositions: [
            { row: 0, col: 0, skillName: 'blueFountain' },
            { row: 0, col: 1, skillName: 'incarnation' },
            { row: 0, col: 2, skillName: 'brainBlow' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'grayMask' },
            { row: 1, col: 3, skillName: 'equality' },

            { row: 2, col: 0, skillName: 'euphoria' },
            { row: 2, col: 1, skillName: 'erase' },
            { row: 2, col: 2, skillName: 'TemplerBluntMastery' },
            { row: 2, col: 3, skillName: 'shieldStrike' },

            { row: 3, col: 0, skillName: 'groupEuphoria' },
            { row: 3, col: 1, skillName: 'reflection' },
            { row: 3, col: 2, skillName: 'mareasHammer' },
            { row: 3, col: 3, skillName: 'lastDivine' },

            { row: 4, col: 0, skillName: 'manaShield' },
            { row: 4, col: 1, skillName: 'vanishment' },
            { row: 4, col: 2, skillName: 'whiteCurse' },

            { row: 5, col: 0, skillName: 'finalAttempt' },
            { row: 5, col: 1, skillName: 'mareasAnger' },
            { row: 5, col: 2, skillName: 'destruction' },

            { row: 6, col: 1, skillName: 'castOver' },
        ],
        skillConnections: [
            { from: 'blueFountain', to: 'grayMask' },
            { from: 'blueFountain', to: 'euphoria' },
            { from: 'incarnation', to: 'grayMask' },
            { from: 'brainBlow', to: 'grayMask' },
            { from: 'brainBlow', to: 'TemplerBluntMastery' },

            { from: 'grayMask', to: 'euphoria' },
            { from: 'grayMask', to: 'erase' },
            { from: 'grayMask', to: 'TemplerBluntMastery' },

            { from: 'euphoria', to: 'groupEuphoria' },
            { from: 'euphoria', to: 'reflection' },
            { from: 'erase', to: 'reflection' },
            { from: 'TemplerBluntMastery', to: 'reflection' },
            { from: 'TemplerBluntMastery', to: 'mareasHammer' },

            { from: 'groupEuphoria', to: 'manaShield' },
            { from: 'groupEuphoria', to: 'vanishment' },
            { from: 'reflection', to: 'vanishment' },
            { from: 'mareasHammer', to: 'vanishment' },
            { from: 'mareasHammer', to: 'whiteCurse' },

            { from: 'manaShield', to: 'finalAttempt' },
            { from: 'manaShield', to: 'mareasAnger' },
            { from: 'vanishment', to: 'manaShield' },
            { from: 'vanishment', to: 'mareasAnger' },
            { from: 'vanishment', to: 'whiteCurse' },
            { from: 'whiteCurse', to: 'mareasAnger' },
            { from: 'whiteCurse', to: 'destruction' },

            { from: 'finalAttempt', to: 'castOver' },
            { from: 'mareasAnger', to: 'castOver' },
            { from: 'destruction', to: 'castOver' },

            { from: 'heroicPower', to: 'equality' },
            { from: 'equality', to: 'shieldStrike' },
            { from: 'shieldStrike', to: 'lastDivine' },
        ]
    },
    {
        name: 'Archer',
        skillPositions: [
            { row: 0, col: 0, skillName: 'blazing' },
            { row: 0, col: 1, skillName: 'frozen' },
            { row: 0, col: 2, skillName: 'darkness' },
            { row: 0, col: 3, skillName: 'divine' },

            { row: 1, col: 1, skillName: 'psychicPierce' },

            { row: 2, col: 0, skillName: 'longShot' },
            { row: 2, col: 1, skillName: 'enchantArrow' },
            { row: 2, col: 2, skillName: 'faintingPierce' },

            { row: 3, col: 0, skillName: 'breedingShot' },
            { row: 3, col: 1, skillName: 'agility' },
            { row: 3, col: 2, skillName: 'brandishKick' },

            { row: 4, col: 0, skillName: 'inSnareShot' },
            { row: 4, col: 1, skillName: 'feebleArrow' },
            { row: 4, col: 2, skillName: 'fatal' },

            { row: 5, col: 0, skillName: 'sprint' },
            { row: 5, col: 1, skillName: 'evade' },
            { row: 5, col: 2, skillName: 'rootPierce' },

            { row: 6, col: 1, skillName: 'doubleStrike' },
        ],
        skillConnections: [
            { from: 'blazing', to: 'psychicPierce' },
            { from: 'frozen', to: 'psychicPierce' },
            { from: 'darkness', to: 'psychicPierce' },
            { from: 'divine', to: 'psychicPierce' },

            { from: 'psychicPierce', to: 'longShot' },
            { from: 'psychicPierce', to: 'enchantArrow' },
            { from: 'psychicPierce', to: 'faintingPierce' },

            { from: 'longShot', to: 'breedingShot' },
            { from: 'enchantArrow', to: 'breedingShot' },
            { from: 'enchantArrow', to: 'agility' },
            { from: 'faintingPierce', to: 'enchantArrow' },
            { from: 'faintingPierce', to: 'brandishKick' },

            { from: 'breedingShot', to: 'inSnareShot' },
            { from: 'breedingShot', to: 'agility' },
            { from: 'agility', to: 'feebleArrow' },
            { from: 'agility', to: 'fatal' },
            { from: 'brandishKick', to: 'fatal' },

            { from: 'inSnareShot', to: 'sprint' },
            { from: 'feebleArrow', to: 'sprint' },
            { from: 'feebleArrow', to: 'evade' },
            { from: 'fatal', to: 'feebleArrow' },
            { from: 'fatal', to: 'rootPierce' },

            { from: 'sprint', to: 'doubleStrike' },
            { from: 'sprint', to: 'evade' },
            { from: 'evade', to: 'doubleStrike' },
            { from: 'rootPierce', to: 'doubleStrike' },

        ]
    },
    {
        name: 'Ranger',
        skillPositions: [
            { row: 0, col: 0, skillName: 'crossbowMastery' },
            { row: 0, col: 1, skillName: 'openEyes' },
            { row: 0, col: 2, skillName: 'trick' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'detect' },
            { row: 1, col: 3, skillName: 'antiPotion' },

            { row: 2, col: 0, skillName: 'disappear' },
            { row: 2, col: 1, skillName: 'siegeShot' },
            { row: 2, col: 2, skillName: 'murderShot' },
            { row: 2, col: 3, skillName: 'silenceShot' },

            { row: 3, col: 0, skillName: 'speedWind' },
            { row: 3, col: 1, skillName: 'kaelsBolt' },
            { row: 3, col: 2, skillName: 'alacrityBlow' },
            { row: 3, col: 3, skillName: 'deathChaser' },

            { row: 4, col: 0, skillName: 'stripShot' },
            { row: 4, col: 1, skillName: 'rankShot' },
            { row: 4, col: 2, skillName: 'criticalShot' },

            { row: 5, col: 0, skillName: 'premiumShot' },
            { row: 5, col: 1, skillName: 'magicGuard' },
            { row: 5, col: 2, skillName: 'luxuryShot' },

            { row: 6, col: 1, skillName: 'wingFoot' },
        ],
        skillConnections: [
            { from: 'crossbowMastery', to: 'detect' },
            { from: 'openEyes', to: 'detect' },
            { from: 'trick', to: 'detect' },

            { from: 'detect', to: 'disappear' },
            { from: 'detect', to: 'siegeShot' },
            { from: 'detect', to: 'murderShot' },

            { from: 'disappear', to: 'speedWind' },
            { from: 'siegeShot', to: 'kaelsBolt' },
            { from: 'murderShot', to: 'alacrityBlow' },

            { from: 'speedWind', to: 'stripShot' },
            { from: 'kaelsBolt', to: 'stripShot' },
            { from: 'kaelsBolt', to: 'rankShot' },
            { from: 'kaelsBolt', to: 'criticalShot' },
            { from: 'alacrityBlow', to: 'criticalShot' },

            { from: 'stripShot', to: 'premiumShot' },
            { from: 'rankShot', to: 'premiumShot' },
            { from: 'rankShot', to: 'magicGuard' },
            { from: 'rankShot', to: 'luxuryShot' },
            { from: 'criticalShot', to: 'luxuryShot' },

            { from: 'premiumShot', to: 'wingFoot' },
            { from: 'magicGuard', to: 'wingFoot' },
            { from: 'luxuryShot', to: 'wingFoot' },

            { from: 'heroicPower', to: 'antiPotion' },
            { from: 'antiPotion', to: 'silenceShot' },
            { from: 'silenceShot', to: 'deathChaser' },
        ]
    },
    {
        name: 'Scout',
        skillPositions: [
            { row: 0, col: 0, skillName: 'bowMastery' },
            { row: 0, col: 1, skillName: 'melting' },
            { row: 0, col: 2, skillName: 'ignoreAggro' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'detect' },
            { row: 1, col: 3, skillName: 'rainforceAction' },

            { row: 2, col: 0, skillName: 'sharpMelee' },
            { row: 2, col: 1, skillName: 'alarityBlow' },
            { row: 2, col: 2, skillName: 'combineShot' },
            { row: 2, col: 3, skillName: 'scatterShot' },

            { row: 3, col: 0, skillName: 'multiShot' },
            { row: 3, col: 1, skillName: 'kaelsArrow' },
            { row: 3, col: 2, skillName: 'drillShot' },
            { row: 3, col: 3, skillName: 'cataclysm' },

            { row: 4, col: 0, skillName: 'violentShot' },
            { row: 4, col: 1, skillName: 'ghostArrow' },
            { row: 4, col: 2, skillName: 'premiumShot' },

            { row: 5, col: 0, skillName: 'rainShot' },
            { row: 5, col: 1, skillName: 'allInShot' },
            { row: 5, col: 2, skillName: 'rankShot' },

            { row: 6, col: 1, skillName: 'pouringShot' },
        ],
        skillConnections: [
            { from: 'bowMastery', to: 'detect' },
            { from: 'melting', to: 'detect' },
            { from: 'ignoreAggro', to: 'detect' },

            { from: 'detect', to: 'sharpMelee' },
            { from: 'detect', to: 'alarityBlow' },
            { from: 'detect', to: 'combineShot' },

            { from: 'sharpMelee', to: 'multiShot' },
            { from: 'sharpMelee', to: 'kaelsArrow' },
            { from: 'alarityBlow', to: 'kaelsArrow' },
            { from: 'combineShot', to: 'drillShot' },

            { from: 'multiShot', to: 'violentShot' },
            { from: 'kaelsArrow', to: 'multiShot' },
            { from: 'kaelsArrow', to: 'violentShot' },
            { from: 'kaelsArrow', to: 'ghostArrow' },
            { from: 'kaelsArrow', to: 'premiumShot' },
            { from: 'kaelsArrow', to: 'drillShot' },
            { from: 'drillShot', to: 'premiumShot' },

            { from: 'violentShot', to: 'rainShot' },
            { from: 'ghostArrow', to: 'rainShot' },
            { from: 'ghostArrow', to: 'allInShot' },
            { from: 'premiumShot', to: 'rankShot' },

            { from: 'rainShot', to: 'pouringShot' },
            { from: 'allInShot', to: 'pouringShot' },
            { from: 'rankShot', to: 'pouringShot' },
            { from: 'rankShot', to: 'allInShot' },

            { from: 'heroicPower', to: 'rainforceAction' },
            { from: 'rainforceAction', to: 'scatterShot' },
            { from: 'scatterShot', to: 'cataclysm' },
        ]
    },
    {
        name: 'Assassin',
        skillPositions: [
            { row: 0, col: 0, skillName: 'invenom' },
            { row: 0, col: 1, skillName: 'hide' },
            { row: 0, col: 2, skillName: 'parry' },

            { row: 1, col: 0, skillName: 'mortalRising' },
            { row: 1, col: 1, skillName: 'sprint' },
            { row: 1, col: 2, skillName: 'throwingWeapon' },

            { row: 2, col: 0, skillName: 'suddenAttack' },
            { row: 2, col: 1, skillName: 'mirrorShield' },
            { row: 2, col: 2, skillName: 'psychicPhantom' },

            { row: 3, col: 0, skillName: 'avoid' },
            { row: 3, col: 1, skillName: 'potionValue' },
            { row: 3, col: 2, skillName: 'strength' },

            { row: 4, col: 0, skillName: 'boost' },
            { row: 4, col: 1, skillName: 'manaBurn' },
            { row: 4, col: 2, skillName: 'phantomClaw' },

            { row: 5, col: 0, skillName: 'deadlyBlow' },
            { row: 5, col: 1, skillName: 'deathBlow' },
            { row: 5, col: 2, skillName: 'silence' },

            { row: 6, col: 1, skillName: 'confusionPouch' },
        ],
        skillConnections: [
            { from: 'invenom', to: 'sprint' },
            { from: 'hide', to: 'sprint' },
            { from: 'parry', to: 'sprint' },

            { from: 'sprint', to: 'mortalRising' },
            { from: 'sprint', to: 'throwingWeapon' },
            { from: 'sprint', to: 'suddenAttack' },
            { from: 'sprint', to: 'mirrorShield' },
            { from: 'sprint', to: 'psychicPhantom' },

            { from: 'suddenAttack', to: 'avoid' },
            { from: 'mirrorShield', to: 'avoid' },
            { from: 'mirrorShield', to: 'potionValue' },
            { from: 'mirrorShield', to: 'strength' },
            { from: 'psychicPhantom', to: 'strength' },

            { from: 'avoid', to: 'boost' },
            { from: 'avoid', to: 'manaBurn' },
            { from: 'potionValue', to: 'manaBurn' },
            { from: 'strength', to: 'manaBurn' },
            { from: 'strength', to: 'phantomClaw' },

            { from: 'boost', to: 'deadlyBlow' },
            { from: 'manaBurn', to: 'deadlyBlow' },
            { from: 'manaBurn', to: 'deathBlow' },
            { from: 'manaBurn', to: 'silence' },
            { from: 'phantomClaw', to: 'silence' },

            { from: 'deadlyBlow', to: 'confusionPouch' },
            { from: 'deathBlow', to: 'confusionPouch' },
            { from: 'silence', to: 'confusionPouch' },
        ]
    },
    {
        name: 'Avenger',
        skillPositions: [
            { row: 0, col: 0, skillName: 'freeUp' },
            { row: 0, col: 1, skillName: 'blindAttack' },
            { row: 0, col: 2, skillName: 'katarMastery' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'laualSpa' },
            { row: 1, col: 3, skillName: 'shadow' },

            { row: 2, col: 0, skillName: 'idlerTrap' },
            { row: 2, col: 1, skillName: 'sealingSquare' },
            { row: 2, col: 2, skillName: 'doomTrap' },
            { row: 2, col: 3, skillName: 'stormAssault' },

            { row: 3, col: 0, skillName: 'steelIllusionTrap' },
            { row: 3, col: 1, skillName: 'healthBurn' },
            { row: 3, col: 2, skillName: 'steelStrengthTrap' },
            { row: 3, col: 3, skillName: 'crownsLaughter' },

            { row: 4, col: 0, skillName: 'secretHide' },
            { row: 4, col: 1, skillName: 'deathCall' },
            { row: 4, col: 2, skillName: 'pollutingBlood' },

            { row: 5, col: 0, skillName: 'duplicateCritical' },
            { row: 5, col: 1, skillName: 'exchangeMind' },
            { row: 5, col: 2, skillName: 'doublePsychicPhantom' },

            { row: 6, col: 1, skillName: 'suicide' },
        ],
        skillConnections: [
            { from: 'freeUp', to: 'laualSpa' },
            { from: 'blindAttack', to: 'laualSpa' },
            { from: 'katarMastery', to: 'laualSpa' },

            { from: 'laualSpa', to: 'sealingSquare' },

            { from: 'idlerTrap', to: 'steelIllusionTrap' },
            { from: 'sealingSquare', to: 'idlerTrap' },
            { from: 'sealingSquare', to: 'steelIllusionTrap' },
            { from: 'sealingSquare', to: 'healthBurn' },
            { from: 'sealingSquare', to: 'steelStrengthTrap' },
            { from: 'sealingSquare', to: 'doomTrap' },
            { from: 'doomTrap', to: 'steelStrengthTrap' },

            { from: 'steelIllusionTrap', to: 'secretHide' },
            { from: 'healthBurn', to: 'deathCall' },
            { from: 'steelStrengthTrap', to: 'pollutingBlood' },

            { from: 'secretHide', to: 'duplicateCritical' },
            { from: 'deathCall', to: 'duplicateCritical' },
            { from: 'deathCall', to: 'exchangeMind' },
            { from: 'deathCall', to: 'doublePsychicPhantom' },
            { from: 'deathCall', to: 'pollutingBlood' },
            { from: 'pollutingBlood', to: 'doublePsychicPhantom' },

            { from: 'duplicateCritical', to: 'suicide' },
            { from: 'exchangeMind', to: 'suicide' },
            { from: 'doublePsychicPhantom', to: 'suicide' },

            { from: 'heroicPower', to: 'shadow' },
            { from: 'shadow', to: 'stormAssault' },
            { from: 'stormAssault', to: 'crownsLaughter' }

        ]
    },
    {
        name: 'Predator',
        skillPositions: [
            { row: 0, col: 0, skillName: 'awareness' },
            { row: 0, col: 1, skillName: 'sluggishAttack' },
            { row: 0, col: 2, skillName: 'katarMastery' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 0, skillName: 'hideSplit' },
            { row: 1, col: 1, skillName: 'detect' },
            { row: 1, col: 2, skillName: 'trackingTreasure' },
            { row: 1, col: 3, skillName: 'dancingBlade' },

            { row: 2, col: 0, skillName: 'ruinTrap' },
            { row: 2, col: 1, skillName: 'sealingSquare' },
            { row: 2, col: 2, skillName: 'healingTrap' },
            { row: 2, col: 3, skillName: 'octopus' },

            { row: 3, col: 0, skillName: 'heartTrap' },
            { row: 3, col: 1, skillName: 'scarecrow' },
            { row: 3, col: 2, skillName: 'timerTrap' },
            { row: 3, col: 3, skillName: 'isolationStealth' },

            { row: 4, col: 0, skillName: 'secretHide' },
            { row: 4, col: 1, skillName: 'transformation' },
            { row: 4, col: 2, skillName: 'premiumSlash' },

            { row: 5, col: 0, skillName: 'royalMask' },
            { row: 5, col: 1, skillName: 'experienceMambo' },
            { row: 5, col: 2, skillName: 'demolition' },

            { row: 6, col: 1, skillName: 'blackMantle' },
        ],
        skillConnections: [
            { from: 'awareness', to: 'detect' },
            { from: 'sluggishAttack', to: 'detect' },
            { from: 'katarMastery', to: 'detect' },

            { from: 'detect', to: 'hideSplit' },
            { from: 'detect', to: 'trackingTreasure' },
            { from: 'detect', to: 'sealingSquare' },

            { from: 'ruinTrap', to: 'heartTrap' },
            { from: 'sealingSquare', to: 'ruinTrap' },
            { from: 'sealingSquare', to: 'heartTrap' },
            { from: 'sealingSquare', to: 'scarecrow' },
            { from: 'sealingSquare', to: 'timerTrap' },
            { from: 'sealingSquare', to: 'healingTrap' },
            { from: 'healingTrap', to: 'timerTrap' },

            { from: 'heartTrap', to: 'secretHide' },
            { from: 'scarecrow', to: 'transformation' },
            { from: 'timerTrap', to: 'premiumSlash' },

            { from: 'secretHide', to: 'royalMask' },
            { from: 'transformation', to: 'experienceMambo' },
            { from: 'transformation', to: 'demolition' },
            { from: 'premiumSlash', to: 'demolition' },

            { from: 'royalMask', to: 'experienceMambo' },
            { from: 'royalMask', to: 'blackMantle' },
            { from: 'experienceMambo', to: 'blackMantle' },
            { from: 'demolition', to: 'blackMantle' },

            { from: 'heroicPower', to: 'dancingBlade' },
            { from: 'dancingBlade', to: 'octopus' },
            { from: 'octopus', to: 'isolationStealth' }
        ]
    },
    {
        name: 'DragonFighter',
        skillPositions: [
            { row: 0, col: 0, skillName: 'blazing' },
            { row: 0, col: 1, skillName: 'frozen' },
            { row: 0, col: 2, skillName: 'darkness' },
            { row: 0, col: 3, skillName: 'manareturn' },

            { row: 1, col: 1, skillName: 'taunt' },

            { row: 2, col: 0, skillName: 'dragonPower' },
            { row: 2, col: 1, skillName: 'separation' },
            { row: 2, col: 2, skillName: 'hellToMana' },

            { row: 3, col: 0, skillName: 'forefootSwing' },
            { row: 3, col: 1, skillName: 'sepaSlash' },
            { row: 3, col: 2, skillName: 'manaToHealth' },

            { row: 4, col: 0, skillName: 'dragonTail' },
            { row: 4, col: 1, skillName: 'nailZen' },
            { row: 4, col: 2, skillName: 'breath' },

            { row: 5, col: 0, skillName: 'zenCounter' },
            { row: 5, col: 1, skillName: 'pray' },
            { row: 5, col: 2, skillName: 'healthDrain' },

            { row: 6, col: 1, skillName: 'dragonSkin' },
        ],
        skillConnections: [
            { from: 'blazing', to: 'taunt' },
            { from: 'frozen', to: 'taunt' },
            { from: 'darkness', to: 'taunt' },
            { from: 'manareturn', to: 'taunt' },

            { from: 'taunt', to: 'dragonPower' },
            { from: 'taunt', to: 'separation' },
            { from: 'taunt', to: 'hellToMana' },

            { from: 'dragonPower', to: 'forefootSwing' },
            { from: 'dragonPower', to: 'sepaSlash' },
            { from: 'separation', to: 'sepaSlash' },
            { from: 'hellToMana', to: 'manaToHealth' },

            { from: 'forefootSwing', to: 'dragonTail' },
            { from: 'sepaSlash', to: 'nailZen' },
            { from: 'sepaSlash', to: 'breath' },
            { from: 'manaToHealth', to: 'breath' },

            { from: 'dragonTail', to: 'zenCounter' },
            { from: 'dragonTail', to: 'pray' },
            { from: 'nailZen', to: 'pray' },
            { from: 'breath', to: 'healthDrain' },

            { from: 'zenCounter', to: 'dragonSkin' },
            { from: 'pray', to: 'dragonSkin' },
            { from: 'healthDrain', to: 'pray' },
            { from: 'healthDrain', to: 'dragonSkin' },

        ]
    },
    {
        name: 'DragonKnight',
        skillPositions: [
            { row: 0, col: 0, skillName: 'karma' },
            { row: 0, col: 1, skillName: 'zenMastery' },
            { row: 0, col: 2, skillName: 'blueDefence' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'criticalImmunity' },
            { row: 1, col: 2, skillName: 'extlicate' },
            { row: 1, col: 3, skillName: 'doubleForefootSwing' },

            { row: 2, col: 0, skillName: 'mist' },
            { row: 2, col: 1, skillName: 'evolve' },
            { row: 2, col: 2, skillName: 'allSuction' },
            { row: 2, col: 3, skillName: 'divideFlow' },

            { row: 3, col: 0, skillName: 'forceLock' },
            { row: 3, col: 1, skillName: 'fastShadow' },
            { row: 3, col: 2, skillName: 'suddenDeath' },
            { row: 3, col: 3, skillName: 'elderBloodAwake' },

            { row: 4, col: 0, skillName: 'penetrate' },
            { row: 4, col: 1, skillName: 'divideSoul' },
            { row: 4, col: 2, skillName: 'bloodEffect' },

            { row: 5, col: 0, skillName: 'toxicPotion' },
            { row: 5, col: 1, skillName: 'darkSpell' },
            { row: 5, col: 2, skillName: 'lunacy' },

            { row: 6, col: 1, skillName: 'dragonNail' },
        ],
        skillConnections: [
            { from: 'karma', to: 'criticalImmunity' },
            { from: 'zenMastery', to: 'criticalImmunity' },
            { from: 'blueDefence', to: 'criticalImmunity' },

            { from: 'criticalImmunity', to: 'mist' },
            { from: 'criticalImmunity', to: 'evolve' },
            { from: 'criticalImmunity', to: 'extlicate' },
            { from: 'criticalImmunity', to: 'allSuction' },

            { from: 'mist', to: 'forceLock' },
            { from: 'evolve', to: 'fastShadow' },
            { from: 'evolve', to: 'allSuction' },
            { from: 'allSuction', to: 'suddenDeath' },

            { from: 'forceLock', to: 'penetrate' },
            { from: 'forceLock', to: 'fastShadow' },
            { from: 'fastShadow', to: 'divideSoul' },
            { from: 'fastShadow', to: 'bloodEffect' },
            { from: 'suddenDeath', to: 'bloodEffect' },

            { from: 'penetrate', to: 'toxicPotion' },
            { from: 'divideSoul', to: 'toxicPotion' },
            { from: 'divideSoul', to: 'darkSpell' },
            { from: 'bloodEffect', to: 'lunacy' },

            { from: 'toxicPotion', to: 'dragonNail' },
            { from: 'darkSpell', to: 'dragonNail' },
            { from: 'lunacy', to: 'dragonNail' },
            { from: 'lunacy', to: 'darkSpell' },

            { from: 'heroicPower', to: 'doubleForefootSwing' },
            { from: 'doubleForefootSwing', to: 'divideFlow' },
            { from: 'divideFlow', to: 'elderBloodAwake' },
        ]
    },
    {
        name: 'DragonSage',
        skillPositions: [
            { row: 0, col: 0, skillName: 'karma' },
            { row: 0, col: 1, skillName: 'zenMastery' },
            { row: 0, col: 2, skillName: 'blueDefence' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 0, skillName: 'imprint' },
            { row: 1, col: 1, skillName: 'criticalImmunity' },
            { row: 1, col: 2, skillName: 'extricate' },
            { row: 1, col: 3, skillName: 'wideForefootSwing' },

            { row: 2, col: 0, skillName: 'manaGuard' },
            { row: 2, col: 1, skillName: 'evolveSeparation' },
            { row: 2, col: 2, skillName: 'suction' },
            { row: 2, col: 3, skillName: 'combineFlow' },

            { row: 3, col: 0, skillName: 'rapidLock' },
            { row: 3, col: 1, skillName: 'movingShadow' },
            { row: 3, col: 2, skillName: 'dragonMantle' },
            { row: 3, col: 3, skillName: 'reverseScale' },

            { row: 4, col: 0, skillName: 'deathFlow' },
            { row: 4, col: 1, skillName: 'heavyWave' },
            { row: 4, col: 2, skillName: 'spitter' },

            { row: 5, col: 0, skillName: 'allAttack' },
            { row: 5, col: 1, skillName: 'doubleMurder' },
            { row: 5, col: 2, skillName: 'impregnable' },

            { row: 6, col: 1, skillName: 'dragonWing' },
        ],
        skillConnections: [
            { from: 'karma', to: 'criticalImmunity' },
            { from: 'zenMastery', to: 'criticalImmunity' },
            { from: 'blueDefence', to: 'criticalImmunity' },

            { from: 'criticalImmunity', to: 'imprint' },
            { from: 'criticalImmunity', to: 'extricate' },
            { from: 'criticalImmunity', to: 'manaGuard' },
            { from: 'criticalImmunity', to: 'evolveSeparation' },
            { from: 'criticalImmunity', to: 'suction' },

            { from: 'manaGuard', to: 'rapidLock' },
            { from: 'evolveSeparation', to: 'manaGuard' },
            { from: 'evolveSeparation', to: 'movingShadow' },
            { from: 'evolveSeparation', to: 'suction' },
            { from: 'suction', to: 'dragonMantle' },

            { from: 'rapidLock', to: 'deathFlow' },
            { from: 'rapidLock', to: 'heavyWave' },
            { from: 'movingShadow', to: 'heavyWave' },
            { from: 'dragonMantle', to: 'heavyWave' },
            { from: 'dragonMantle', to: 'spitter' },

            { from: 'deathFlow', to: 'allAttack' },
            { from: 'heavyWave', to: 'doubleMurder' },
            { from: 'spitter', to: 'impregnable' },

            { from: 'allAttack', to: 'dragonWing' },
            { from: 'allAttack', to: 'doubleMurder' },
            { from: 'doubleMurder', to: 'dragonWing' },
            { from: 'impregnable', to: 'dragonWing' },
            { from: 'impregnable', to: 'doubleMurder' },

            { from: 'heroicPower', to: 'wideForefootSwing' },
            { from: 'wideForefootSwing', to: 'combineFlow' },
            { from: 'combineFlow', to: 'reverseScale' },
            { from: 'reverseScale', to: 'dragonMantle' },
        ]
    },
    {
        name: 'Mage',
        skillPositions: [
            { row: 0, col: 0, skillName: 'energySphere' },
            { row: 0, col: 1, skillName: 'coldWave' },
            { row: 0, col: 2, skillName: 'darkMessage' },

            { row: 1, col: 0, skillName: 'cureSilence' },
            { row: 1, col: 1, skillName: 'darkEyes' },
            { row: 1, col: 2, skillName: 'brokenBarrier' },

            { row: 2, col: 0, skillName: 'healthCoil' },
            { row: 2, col: 1, skillName: 'magicBoost' },
            { row: 2, col: 2, skillName: 'timingMind' },

            { row: 3, col: 0, skillName: 'manaCoil' },
            { row: 3, col: 1, skillName: 'strongMind' },
            { row: 3, col: 2, skillName: 'iceFrozen' },

            { row: 4, col: 0, skillName: 'intBeam' },
            { row: 4, col: 1, skillName: 'brokenBag' },
            { row: 4, col: 2, skillName: 'dispelMagic' },

            { row: 5, col: 0, skillName: 'wideInCollege' },
            { row: 5, col: 1, skillName: 'magicReflection' },
            { row: 5, col: 2, skillName: 'widePollution' },

            { row: 6, col: 1, skillName: 'portalWarp' },
        ],
        skillConnections: [
            { from: 'energySphere', to: 'darkEyes' },
            { from: 'coldWave', to: 'darkEyes' },
            { from: 'darkMessage', to: 'darkEyes' },

            { from: 'darkEyes', to: 'cureSilence' },
            { from: 'darkEyes', to: 'healthCoil' },
            { from: 'darkEyes', to: 'magicBoost' },
            { from: 'darkEyes', to: 'timingMind' },
            { from: 'darkEyes', to: 'brokenBarrier' },

            { from: 'healthCoil', to: 'manaCoil' },
            { from: 'magicBoost', to: 'manaCoil' },
            { from: 'magicBoost', to: 'strongMind' },
            { from: 'timingMind', to: 'strongMind' },
            { from: 'timingMind', to: 'iceFrozen' },

            { from: 'manaCoil', to: 'intBeam' },
            { from: 'manaCoil', to: 'strongMind' },
            { from: 'strongMind', to: 'brokenBag' },
            { from: 'strongMind', to: 'iceFrozen' },
            { from: 'iceFrozen', to: 'dispelMagic' },

            { from: 'intBeam', to: 'wideInCollege' },
            { from: 'brokenBag', to: 'wideInCollege' },
            { from: 'brokenBag', to: 'magicReflection' },
            { from: 'brokenBag', to: 'dispelMagic' },
            { from: 'dispelMagic', to: 'magicReflection' },
            { from: 'dispelMagic', to: 'widePollution' },

            { from: 'wideInCollege', to: 'portalWarp' },
            { from: 'wideInCollege', to: 'magicReflection' },
            { from: 'magicReflection', to: 'portalWarp' },
            { from: 'magicReflection', to: 'widePollution' },
            { from: 'widePollution', to: 'portalWarp' },
        ]
    },
    {
        name: 'Warlock',
        skillPositions: [
            { row: 0, col: 0, skillName: 'WarrockStaffMastery' },
            { row: 0, col: 1, skillName: 'addIntention' },
            { row: 0, col: 2, skillName: 'intelligentShield' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'foresomeShield' },
            { row: 1, col: 2, skillName: 'revealing' },
            { row: 1, col: 3, skillName: 'manaBurnUp' },

            { row: 2, col: 0, skillName: 'abilityDrain' },
            { row: 2, col: 1, skillName: 'countBlow' },
            { row: 2, col: 2, skillName: 'magicPush' },
            { row: 2, col: 3, skillName: 'nightmare' },

            { row: 3, col: 0, skillName: 'breakAbility' },
            { row: 3, col: 1, skillName: 'magicMirror' },
            { row: 3, col: 2, skillName: 'pollutionMind' },
            { row: 3, col: 3, skillName: 'spellLiberation' },

            { row: 4, col: 0, skillName: 'areaToxicPotion' },
            { row: 4, col: 1, skillName: 'lowMaster' },
            { row: 4, col: 2, skillName: 'riseRoute' },

            { row: 5, col: 0, skillName: 'snatch' },
            { row: 5, col: 1, skillName: 'preventPet' },
            { row: 5, col: 2, skillName: 'fakeDeath' },

            { row: 6, col: 0, skillName: 'eraseAbility' },
            { row: 6, col: 1, skillName: 'brokenTreasure' },
        ],
        skillConnections: [
            { from: 'WarrockStaffMastery', to: 'foresomeShield' },
            { from: 'addIntention', to: 'foresomeShield' },
            { from: 'intelligentShield', to: 'foresomeShield' },

            { from: 'foresomeShield', to: 'abilityDrain' },
            { from: 'foresomeShield', to: 'countBlow' },
            { from: 'foresomeShield', to: 'revealing' },
            { from: 'foresomeShield', to: 'magicPush' },

            { from: 'abilityDrain', to: 'breakAbility' },
            { from: 'abilityDrain', to: 'magicMirror' },
            { from: 'countBlow', to: 'magicMirror' },
            { from: 'countBlow', to: 'pollutionMind' },
            { from: 'magicPush', to: 'pollutionMind' },

            { from: 'breakAbility', to: 'areaToxicPotion' },
            { from: 'magicMirror', to: 'areaToxicPotion' },
            { from: 'magicMirror', to: 'lowMaster' },
            { from: 'pollutionMind', to: 'riseRoute' },

            { from: 'areaToxicPotion', to: 'snatch' },
            { from: 'lowMaster', to: 'preventPet' },
            { from: 'lowMaster', to: 'fakeDeath' },
            { from: 'riseRoute', to: 'fakeDeath' },

            { from: 'snatch', to: 'brokenTreasure' },
            { from: 'preventPet', to: 'brokenTreasure' },
            { from: 'preventPet', to: 'snatch' },
            { from: 'fakeDeath', to: 'brokenTreasure' },

            { from: 'brokenTreasure', to: 'eraseAbility' },

            { from: 'heroicPower', to: 'manaBurnUp' },
            { from: 'manaBurnUp', to: 'nightmare' },
            { from: 'nightmare', to: 'spellLiberation' },
        ]
    },
    {
        name: 'Wizard',
        skillPositions: [
            { row: 0, col: 0, skillName: 'WizardStaffMastery' },
            { row: 0, col: 1, skillName: 'addTemper' },
            { row: 0, col: 2, skillName: 'mentalityShield' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'fourthShield' },
            { row: 1, col: 2, skillName: 'revealing' },
            { row: 1, col: 3, skillName: 'slow' },

            { row: 2, col: 0, skillName: 'magicalPiercing' },
            { row: 2, col: 1, skillName: 'countBlow' },
            { row: 2, col: 2, skillName: 'weakness' },
            { row: 2, col: 3, skillName: 'mindTraining' },

            { row: 3, col: 0, skillName: 'multiMagicArrow' },
            { row: 3, col: 1, skillName: 'groupMotalImmune' },
            { row: 3, col: 2, skillName: 'areaDispel' },
            { row: 3, col: 3, skillName: 'extensionSpell' },

            { row: 4, col: 0, skillName: 'ringBurst' },
            { row: 4, col: 1, skillName: 'mirrorStrike' },
            { row: 4, col: 2, skillName: 'strikeBash' },

            { row: 5, col: 0, skillName: 'killingTime' },
            { row: 5, col: 1, skillName: 'eternalDarkness' },
            { row: 5, col: 2, skillName: 'reRaise' },

            { row: 6, col: 0, skillName: 'eraseAbility' },
            { row: 6, col: 1, skillName: 'destroy' },
        ],
        skillConnections: [
            { from: 'WizardStaffMastery', to: 'fourthShield' },
            { from: 'addTemper', to: 'fourthShield' },
            { from: 'mentalityShield', to: 'fourthShield' },

            { from: 'fourthShield', to: 'magicalPiercing' },
            { from: 'fourthShield', to: 'countBlow' },
            { from: 'fourthShield', to: 'revealing' },
            { from: 'fourthShield', to: 'weakness' },

            { from: 'magicalPiercing', to: 'multiMagicArrow' },
            { from: 'countBlow', to: 'multiMagicArrow' },
            { from: 'countBlow', to: 'groupMotalImmune' },
            { from: 'weakness', to: 'areaDispel' },

            { from: 'multiMagicArrow', to: 'ringBurst' },
            { from: 'groupMotalImmune', to: 'mirrorStrike' },
            { from: 'areaDispel', to: 'mirrorStrike' },
            { from: 'areaDispel', to: 'strikeBash' },

            { from: 'ringBurst', to: 'killingTime' },
            { from: 'ringBurst', to: 'mirrorStrike' },
            { from: 'mirrorStrike', to: 'killingTime' },
            { from: 'mirrorStrike', to: 'eternalDarkness' },
            { from: 'mirrorStrike', to: 'reRaise' },
            { from: 'strikeBash', to: 'reRaise' },

            { from: 'killingTime', to: 'destroy' },
            { from: 'eternalDarkness', to: 'destroy' },
            { from: 'reRaise', to: 'destroy' },

            { from: 'destroy', to: 'eraseAbility' },

            { from: 'heroicPower', to: 'slow' },
            { from: 'slow', to: 'mindTraining' },
            { from: 'mindTraining', to: 'extensionSpell' },
        ]
    },
    {
        name: 'Warrior',
        skillPositions: [
            { row: 0, col: 0, skillName: 'frozen' },
            { row: 0, col: 1, skillName: 'darkness' },
            { row: 0, col: 2, skillName: 'divine' },

            { row: 1, col: 0, skillName: 'bloodAdrenaline' },
            { row: 1, col: 1, skillName: 'tauntWar' },

            { row: 2, col: 0, skillName: 'bereave' },
            { row: 2, col: 1, skillName: 'battleChant' },
            { row: 2, col: 2, skillName: 'reap' },

            { row: 3, col: 0, skillName: 'findHole' },
            { row: 3, col: 1, skillName: 'rage' },
            { row: 3, col: 2, skillName: 'crush' },

            { row: 4, col: 0, skillName: 'powerSurge' },
            { row: 4, col: 1, skillName: 'lifeForce' },
            { row: 4, col: 2, skillName: 'rampage' },

            { row: 5, col: 0, skillName: 'shoulderCharge' },
            { row: 5, col: 1, skillName: 'bruteForce' },
            { row: 5, col: 2, skillName: 'kidneyStrike' },

            { row: 6, col: 1, skillName: 'giantShift' },
        ],
        skillConnections: [
            { from: 'frozen', to: 'tauntWar' },
            { from: 'darkness', to: 'tauntWar' },
            { from: 'divine', to: 'tauntWar' },

            { from: 'tauntWar', to: 'bloodAdrenaline' },
            { from: 'tauntWar', to: 'battleChant' },

            { from: 'bereave', to: 'findHole' },
            { from: 'battleChant', to: 'bereave' },
            { from: 'battleChant', to: 'rage' },
            { from: 'battleChant', to: 'reap' },
            { from: 'reap', to: 'crush' },

            { from: 'findHole', to: 'powerSurge' },
            { from: 'rage', to: 'lifeForce' },
            { from: 'rage', to: 'findHole' },
            { from: 'crush', to: 'rampage' },

            { from: 'powerSurge', to: 'shoulderCharge' },
            { from: 'lifeForce', to: 'bruteForce' },
            { from: 'lifeForce', to: 'rampage' },
            { from: 'rampage', to: 'kidneyStrike' },

            { from: 'bruteForce', to: 'shoulderCharge' },
            { from: 'bruteForce', to: 'giantShift' },
            { from: 'bruteForce', to: 'kidneyStrike' },
        ]
    },
    {
        name: 'Berserker',
        skillPositions: [
            { row: 0, col: 0, skillName: 'polearmMastery' },
            { row: 0, col: 1, skillName: 'criminalMind' },
            { row: 0, col: 2, skillName: 'snareAxe' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'berserk' },
            { row: 1, col: 2, skillName: 'fortunate' },
            { row: 1, col: 3, skillName: 'madness' },

            { row: 2, col: 0, skillName: 'routingAxe' },
            { row: 2, col: 1, skillName: 'sweep' },
            { row: 2, col: 2, skillName: 'vigilance' },
            { row: 2, col: 3, skillName: 'brandishWeapon' },

            { row: 3, col: 0, skillName: 'precision' },
            { row: 3, col: 1, skillName: 'zolt' },
            { row: 3, col: 2, skillName: 'wildBlood' },
            { row: 3, col: 3, skillName: 'giganticStorm' },

            { row: 4, col: 0, skillName: 'lowBlow' },
            { row: 4, col: 1, skillName: 'cleave' },
            { row: 4, col: 2, skillName: 'callBattle' },

            { row: 5, col: 0, skillName: 'premiumStrike' },
            { row: 5, col: 1, skillName: 'magnitudeSwing' },
            { row: 5, col: 2, skillName: 'retaliate' },

            { row: 6, col: 1, skillName: 'iceWillyWilly' },
        ],
        skillConnections: [
            { from: 'polearmMastery', to: 'berserk' },
            { from: 'criminalMind', to: 'berserk' },
            { from: 'snareAxe', to: 'berserk' },

            { from: 'berserk', to: 'routingAxe' },
            { from: 'berserk', to: 'sweep' },
            { from: 'berserk', to: 'fortunate' },
            { from: 'berserk', to: 'vigilance' },

            { from: 'routingAxe', to: 'precision' },
            { from: 'sweep', to: 'precision' },
            { from: 'sweep', to: 'zolt' },
            { from: 'vigilance', to: 'wildBlood' },

            { from: 'precision', to: 'lowBlow' },
            { from: 'zolt', to: 'cleave' },
            { from: 'zolt', to: 'callBattle' },
            { from: 'wildBlood', to: 'callBattle' },

            { from: 'lowBlow', to: 'premiumStrike' },
            { from: 'cleave', to: 'magnitudeSwing' },
            { from: 'callBattle', to: 'retaliate' },

            { from: 'premiumStrike', to: 'iceWillyWilly' },
            { from: 'magnitudeSwing', to: 'iceWillyWilly' },
            { from: 'retaliate', to: 'iceWillyWilly' },

            { from: 'heroicPower', to: 'madness' },
            { from: 'madness', to: 'brandishWeapon' },
            { from: 'brandishWeapon', to: 'giganticStorm' },
        ]
    },
    {
        name: 'Savage',
        skillPositions: [
            { row: 0, col: 0, skillName: 'dualswordMastery' },
            { row: 0, col: 1, skillName: 'tauntChallenge' },
            { row: 0, col: 2, skillName: 'rampageForce' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'ferocious' },
            { row: 1, col: 2, skillName: 'fortunate' },
            { row: 1, col: 3, skillName: 'breage' },

            { row: 2, col: 0, skillName: 'monsterMind' },
            { row: 2, col: 1, skillName: 'extraction' },
            { row: 2, col: 2, skillName: 'brutality' },
            { row: 2, col: 3, skillName: 'brokenGround' },

            { row: 3, col: 0, skillName: 'gailsShock' },
            { row: 3, col: 1, skillName: 'lunge' },
            { row: 3, col: 2, skillName: 'gailsWash' },
            { row: 3, col: 3, skillName: 'furyTempest' },

            { row: 4, col: 0, skillName: 'deathParadeAssault' },
            { row: 4, col: 1, skillName: 'ruthless' },
            { row: 4, col: 2, skillName: 'gailsBreath' },

            { row: 5, col: 0, skillName: 'barbaricCry' },
            { row: 5, col: 1, skillName: 'stomingClose' },
            { row: 5, col: 2, skillName: 'gailsCry' },

            { row: 6, col: 1, skillName: 'freezingTornado' },
        ],
        skillConnections: [
            { from: 'dualswordMastery', to: 'ferocious' },
            { from: 'tauntChallenge', to: 'ferocious' },
            { from: 'rampageForce', to: 'ferocious' },

            { from: 'ferocious', to: 'monsterMind' },
            { from: 'ferocious', to: 'extraction' },
            { from: 'ferocious', to: 'fortunate' },
            { from: 'ferocious', to: 'brutality' },

            { from: 'monsterMind', to: 'gailsShock' },
            { from: 'extraction', to: 'gailsWash' },
            { from: 'extraction', to: 'lunge' },
            { from: 'brutality', to: 'gailsWash' },

            { from: 'gailsShock', to: 'deathParadeAssault' },
            { from: 'lunge', to: 'deathParadeAssault' },
            { from: 'lunge', to: 'ruthless' },
            { from: 'gailsWash', to: 'gailsBreath' },

            { from: 'deathParadeAssault', to: 'barbaricCry' },
            { from: 'ruthless', to: 'stomingClose' },
            { from: 'gailsBreath', to: 'gailsCry' },

            { from: 'barbaricCry', to: 'freezingTornado' },
            { from: 'stomingClose', to: 'barbaricCry' },
            { from: 'stomingClose', to: 'freezingTornado' },
            { from: 'stomingClose', to: 'gailsCry' },
            { from: 'gailsCry', to: 'freezingTornado' },

            { from: 'heroicPower', to: 'breage' },
            { from: 'breage', to: 'brokenGround' },
            { from: 'brokenGround', to: 'furyTempest' },
        ]
    },
    {
        name: 'Mer',
        skillPositions: [
            { row: 0, col: 0, skillName: 'pentagramOfLight' },
            { row: 0, col: 1, skillName: 'darknessCall' },
            { row: 0, col: 2, skillName: 'tuneOfLife' },
            { row: 0, col: 3, skillName: 'vineOfLight' },

            { row: 1, col: 1, skillName: 'potentialPower' },
        ],
        skillConnections: [
            { from: 'pentagramOfLight', to: 'potentialPower' },
            { from: 'darknessCall', to: 'potentialPower' },
            { from: 'tuneOfLife', to: 'potentialPower' },
            { from: 'vineOfLight', to: 'potentialPower' },
        ]
    },
    {
        name: 'Rumir',
        skillPositions: [
            { row: 0, col: 0, skillName: 'arrendalMastery' },
            { row: 0, col: 1, skillName: 'prismSpear' },
            { row: 0, col: 2, skillName: 'trinityForce' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'blackSideForce' },
            { row: 1, col: 2, skillName: 'natureUnity' },
            { row: 1, col: 3, skillName: 'spiritAssimilation' },

            { row: 2, col: 0, skillName: 'lightTrace' },
            { row: 2, col: 1, skillName: 'favorOfTree' },
            { row: 2, col: 2, skillName: 'vineProtection' },
            { row: 2, col: 3, skillName: 'absoluteFlash' },

            { row: 3, col: 0, skillName: 'pulseSettingLight' },
            { row: 3, col: 1, skillName: 'blessedCrown' },
            { row: 3, col: 2, skillName: 'manaBowming' },
            { row: 3, col: 3, skillName: 'eternalAria' },

            { row: 4, col: 0, skillName: 'sanctuary' },
            { row: 4, col: 1, skillName: 'lifeCirculation' },

            { row: 5, col: 0, skillName: 'cozalLoop' },
            { row: 5, col: 1, skillName: 'growthAcceleration' },
            { row: 5, col: 2, skillName: 'lightningSwift' },

            { row: 6, col: 1, skillName: 'reviveForce' },
        ],
        skillConnections: [
            { from: 'arrendalMastery', to: 'blackSideForce' },
            { from: 'prismSpear', to: 'blackSideForce' },
            { from: 'trinityForce', to: 'blackSideForce' },

            { from: 'blackSideForce', to: 'lightTrace' },
            { from: 'blackSideForce', to: 'favorOfTree' },
            { from: 'blackSideForce', to: 'natureUnity' },
            { from: 'blackSideForce', to: 'vineProtection' },

            { from: 'lightTrace', to: 'pulseSettingLight' },
            { from: 'favorOfTree', to: 'blessedCrown' },
            { from: 'vineProtection', to: 'manaBowming' },

            { from: 'pulseSettingLight', to: 'sanctuary' },
            { from: 'blessedCrown', to: 'lifeCirculation' },
            { from: 'manaBowming', to: 'lightningSwift' },

            { from: 'sanctuary', to: 'cozalLoop' },
            { from: 'sanctuary', to: 'lifeCirculation' },
            { from: 'lifeCirculation', to: 'growthAcceleration' },

            { from: 'lightningSwift', to: 'growthAcceleration' },
            { from: 'growthAcceleration', to: 'reviveForce' },

            { from: 'heroicPower', to: 'spiritAssimilation' },
            { from: 'spiritAssimilation', to: 'absoluteFlash' },
            { from: 'absoluteFlash', to: 'eternalAria' },
        ]
    },
    {
        name: "Noir",
        skillPositions: [
            { row: 0, col: 0, skillName: 'arrendalMastery' },
            { row: 0, col: 1, skillName: 'wandOfRestriction' },
            { row: 0, col: 2, skillName: 'trinityForce' },
            { row: 0, col: 3, skillName: 'heroicPower' },

            { row: 1, col: 1, skillName: 'sonesWhip' },
            { row: 1, col: 2, skillName: 'phantomSpirit' },
            { row: 1, col: 3, skillName: 'distortionClawChaos' },

            { row: 2, col: 0, skillName: 'penetratingDark' },
            { row: 2, col: 1, skillName: 'darkAssimilation' },
            { row: 2, col: 2, skillName: 'distortionClawDimension' },
            { row: 2, col: 3, skillName: 'dimensionScar' },

            { row: 3, col: 0, skillName: 'windyChain' },
            { row: 3, col: 1, skillName: 'spiritConcentration' },
            { row: 3, col: 2, skillName: 'distortionClawReverse' },
            { row: 3, col: 3, skillName: 'silentNoise' },

            { row: 4, col: 0, skillName: 'thunderStroke' },
            { row: 4, col: 1, skillName: 'rearBlast' },
            { row: 4, col: 2, skillName: 'distortionClawOblivion' },

            { row: 5, col: 0, skillName: 'airBurst' },
            { row: 5, col: 2, skillName: 'distortionClawGravity' },

            { row: 6, col: 1, skillName: 'dimensionCoat' },
        ],
        skillConnections: [
            { from: 'arrendalMastery', to: 'sonesWhip' },
            { from: 'wandOfRestriction', to: 'sonesWhip' },
            { from: 'trinityForce', to: 'sonesWhip' },

            { from: 'sonesWhip', to: 'penetratingDark' },
            { from: 'sonesWhip', to: 'darkAssimilation' },
            { from: 'sonesWhip', to: 'phantomSpirit' },
            { from: 'sonesWhip', to: 'distortionClawDimension' },

            { from: 'penetratingDark', to: 'windyChain' },
            { from: 'darkAssimilation', to: 'spiritConcentration' },
            { from: 'distortionClawDimension', to: 'distortionClawReverse' },

            { from: 'windyChain', to: 'thunderStroke' },
            { from: 'spiritConcentration', to: 'rearBlast' },
            { from: 'distortionClawReverse', to: 'distortionClawOblivion' },

            { from: 'thunderStroke', to: 'airBurst' },
            { from: 'rearBlast', to: 'dimensionCoat' },
            { from: 'rearBlast', to: 'airBurst' },
            { from: 'rearBlast', to: 'thunderStroke' },
            { from: 'distortionClawOblivion', to: 'distortionClawGravity' },

            { from: 'airBurst', to: 'dimensionCoat' },
            { from: 'distortionClawGravity', to: 'dimensionCoat' },

            { from: 'heroicPower', to: 'distortionClawChaos' },
            { from: 'distortionClawChaos', to: 'dimensionScar' },
            { from: 'dimensionScar', to: 'silentNoise' },
        ]
    }
    // 他の職業のレイアウトも必要に応じて追加...
];

// スキルツリーレイアウトを職業IDで検索するヘルパー関数
export const getSkillTreeLayout = (jobName: JobName): SkillTreeLayout | undefined => {
    return sampleSkillTreeLayouts.find(layout => layout.name === jobName);
};


export const getInitialSkillLevelsForJob = (job: Job | undefined): { [skillName: string]: number } => {
    const initialLevels: { [skillName: string]: number } = {};
    if (!job) return initialLevels;
    getSkillByJob(job).forEach(skill => {
        initialLevels[skill.name] = 0; // 初期レベルは0
    });
    return initialLevels;
};

export const checkPrerequisites = (skillName: string, skillLevels: { [skillName: string]: number }, positions: SkillPosition[], connections: SkillConnection[]): boolean => {
    const skillNode = positions.find(pos => pos.skillName === skillName);
    if (!skillNode) return true; // スキルノードが見つからない場合は前提条件なし

    if (positions.find(pos => pos.skillName === skillName)?.row === 0) {
        return true; // 最上段のスキルは前提条件なし
    }

    // 前提条件を満たすスキルレベルをチェック
    const prerequisites = connections
        .filter(conn => conn.to === skillName)
        .map(conn => conn.from);

    return prerequisites.some(reqSkill => skillLevels[reqSkill] > 0);
};
