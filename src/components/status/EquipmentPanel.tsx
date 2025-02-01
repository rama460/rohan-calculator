import background_helmet from '../../assets/backgrounds/helmet.png'
import background_gauntlet from '../../assets/backgrounds/gauntlet.png'
import background_tunic from '../../assets/backgrounds/tunic.png'
import background_leggings from '../../assets/backgrounds/leggings.png'
import background_boots from '../../assets/backgrounds/boots.png'
import background_accessory from '../../assets/backgrounds/accessory.png'
import background_weapon from '../../assets/backgrounds/weapon.png'
import background_shield from '../../assets/backgrounds/shield.png'
import background_arrow from '../../assets/backgrounds/arrow.png'
import background_hat from '../../assets/backgrounds/hat.png'
import background_earing from '../../assets/backgrounds/earing.png'
import background_glasses from '../../assets/backgrounds/glasses.png'
import background_costume from '../../assets/backgrounds/costume.png'
import React from "react";
import EquipmentIconButton from './EquipmentIconButton.tsx'
import { accessories, arrows, b_talismans, boots, costumes, e_talismans, earrings, g_talismans, gauntlets, glasses, h_talismans, hats, helmets, i_talismans, j_talismans, leggings, n_talismans, pets, q_talismans, r_talismans, s_talismans, shields, tunics, w_talismans, weapons } from '../static/items.ts'
import { Item } from '../static/items.ts'

interface EquipmentPanelProps {
    equippedHelmet: Item | null
    setEquippedHelmet: (item: Item | null) => void
    equippedGauntlet: Item | null
    setEquippedGauntlet: (item: Item | null) => void
    equippedTunic: Item | null
    setEquippedTunic: (item: Item | null) => void
    equippedLeggings: Item | null
    setEquippedLeggings: (item: Item | null) => void
    equippedBoots: Item | null
    setEquippedBoots: (item: Item | null) => void
    equippedAccessory1: Item | null
    setEquippedAccessory1: (item: Item | null) => void
    equippedAccessory2: Item | null
    setEquippedAccessory2: (item: Item | null) => void
    equippedAccessory3: Item | null
    setEquippedAccessory3: (item: Item | null) => void
    equippedAccessory4: Item | null
    setEquippedAccessory4: (item: Item | null) => void
    equippedWeapon: Item | null
    setEquippedWeapon: (item: Item | null) => void
    equippedShield: Item | null
    setEquippedShield: (item: Item | null) => void
    equippedArrow: Item | null
    setEquippedArrow: (item: Item | null) => void
    equippedGlasses: Item | null
    setEquippedGlasses: (item: Item | null) => void
    equippedHat: Item | null
    setEquippedHat: (item: Item | null) => void
    equippedEarrings: Item | null
    setEquippedEarrings: (item: Item | null) => void
    equippedCostume: Item | null
    setEquippedCostume: (item: Item | null) => void
    equippedTalismanH: Item | null
    setEquippedTalismanH: (item: Item | null) => void
    equippedTalismanG: Item | null
    setEquippedTalismanG: (item: Item | null) => void
    equippedTalismanI: Item | null
    setEquippedTalismanI: (item: Item | null) => void
    equippedTalismanB: Item | null
    setEquippedTalismanB: (item: Item | null) => void
    equippedTalismanJ: Item | null
    setEquippedTalismanJ: (item: Item | null) => void
    equippedTalismanN: Item | null
    setEquippedTalismanN: (item: Item | null) => void
    equippedTalismanE: Item | null
    setEquippedTalismanE: (item: Item | null) => void
    equippedTalismanR: Item | null
    setEquippedTalismanR: (item: Item | null) => void
    equippedTalismanW: Item | null
    setEquippedTalismanW: (item: Item | null) => void
    equippedTalismanQ: Item | null
    setEquippedTalismanQ: (item: Item | null) => void
    equippedTalismanS: Item | null
    setEquippedTalismanS: (item: Item | null) => void
    equippedPet: Item | null
    setEquippedPet: (item: Item | null) => void
}

export const EquipmentPanel: React.FC<EquipmentPanelProps> = ({
    equippedHelmet, setEquippedHelmet,
    equippedGauntlet, setEquippedGauntlet,
    equippedTunic, setEquippedTunic,
    equippedLeggings, setEquippedLeggings,
    equippedBoots, setEquippedBoots,
    equippedAccessory1, setEquippedAccessory1,
    equippedAccessory2, setEquippedAccessory2,
    equippedAccessory3, setEquippedAccessory3,
    equippedAccessory4, setEquippedAccessory4,
    equippedWeapon, setEquippedWeapon,
    equippedShield, setEquippedShield,
    equippedArrow, setEquippedArrow,
    equippedGlasses, setEquippedGlasses,
    equippedHat, setEquippedHat,
    equippedEarrings, setEquippedEarrings,
    equippedCostume, setEquippedCostume,
    equippedTalismanH, setEquippedTalismanH,
    equippedTalismanG, setEquippedTalismanG,
    equippedTalismanI, setEquippedTalismanI,
    equippedTalismanB, setEquippedTalismanB,
    equippedTalismanJ, setEquippedTalismanJ,
    equippedTalismanN, setEquippedTalismanN,
    equippedTalismanE, setEquippedTalismanE,
    equippedTalismanR, setEquippedTalismanR,
    equippedTalismanW, setEquippedTalismanW,
    equippedTalismanQ, setEquippedTalismanQ,
    equippedTalismanS, setEquippedTalismanS,
    equippedPet, setEquippedPet
}) => {
    const style: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(9, 34px)",
        gridTemplateRows: "repeat(5, 34px)",
        gap: "5px",
    }
    const helmetStyle: React.CSSProperties = {
        gridColumn: "2",
        gridRow: "1",
    }
    const tunicStyle: React.CSSProperties = {
        gridColumn: "2",
        gridRow: "2",
    }
    const gauntletStyle: React.CSSProperties = {
        gridColumn: "1",
        gridRow: "2",
    }
    const leggingsStyle: React.CSSProperties = {
        gridColumn: "2",
        gridRow: "3",
    }
    const bootsStyle: React.CSSProperties = {
        gridColumn: "2",
        gridRow: "4",
    }
    const accessory1Style: React.CSSProperties = {
        gridColumn: "1",
        gridRow: "3",
    }
    const accessory2Style: React.CSSProperties = {
        gridColumn: "1",
        gridRow: "4",
    }
    const accessory3Style: React.CSSProperties = {
        gridColumn: "3",
        gridRow: "3",
    }
    const accessory4Style: React.CSSProperties = {
        gridColumn: "3",
        gridRow: "4",
    }
    const weaponStyle: React.CSSProperties = {
        gridColumn: "1",
        gridRow: "5",
    }
    const shieldStyle: React.CSSProperties = {
        gridColumn: "2",
        gridRow: "5",
    }
    const arrowStyle: React.CSSProperties = {
        gridColumn: "3",
        gridRow: "5",
    }
    const glassesStyle: React.CSSProperties = {
        gridColumn: "4",
        gridRow: "1",
    }
    const hatStyle: React.CSSProperties = {
        gridColumn: "5",
        gridRow: "1",
    }
    const earingStyle: React.CSSProperties = {
        gridColumn: "6",
        gridRow: "1",
    }
    const costumeStyle: React.CSSProperties = {
        gridColumn: "5",
        gridRow: "2",
    }

    const tarismanHStyle: React.CSSProperties = {
        gridColumn: "5",
        gridRow: "4",
    }
    const tarismanGStyle: React.CSSProperties = {
        gridColumn: "6",
        gridRow: "4",
    }
    const tarismanIStyle: React.CSSProperties = {
        gridColumn: "7",
        gridRow: "4",
    }
    const tarismanBStyle: React.CSSProperties = {
        gridColumn: "8",
        gridRow: "4",
    }
    const tarismanJStyle: React.CSSProperties = {
        gridColumn: "9",
        gridRow: "4",
    }
    const tarismanNStyle: React.CSSProperties = {
        gridColumn: "5",
        gridRow: "5",
    }
    const tarismanEStyle: React.CSSProperties = {
        gridColumn: "6",
        gridRow: "5",
    }
    const tarismanRStyle: React.CSSProperties = {
        gridColumn: "7",
        gridRow: "5",
    }
    const tarismanWStyle: React.CSSProperties = {
        gridColumn: "8",
        gridRow: "5",
    }
    const tarismanQStyle: React.CSSProperties = {
        gridColumn: "9",
        gridRow: "5",
    }
    const tarismanSStype: React.CSSProperties = {
        gridColumn: "10",
        gridRow: "5",
    }
    const petStyle: React.CSSProperties = {
        gridColumn: "8",
        gridRow: "1",
    }
    return (
        <div style={style}>
            <div style={helmetStyle}>
                <EquipmentIconButton equipmentType='頭' backgroundImage={background_helmet} equippedItem={equippedHelmet} setEquippedItem={setEquippedHelmet} items={helmets} />
            </div>
            <div style={gauntletStyle}>
                <EquipmentIconButton equipmentType='手' backgroundImage={background_gauntlet} equippedItem={equippedGauntlet} setEquippedItem={setEquippedGauntlet} items={gauntlets} />
            </div>
            <div style={tunicStyle}>
                <EquipmentIconButton equipmentType='胴' backgroundImage={background_tunic} equippedItem={equippedTunic} setEquippedItem={setEquippedTunic} items={tunics} />
            </div>
            <div style={leggingsStyle}>
                <EquipmentIconButton equipmentType='脚' backgroundImage={background_leggings} equippedItem={equippedLeggings} setEquippedItem={setEquippedLeggings} items={leggings} />
            </div>
            <div style={bootsStyle}>
                <EquipmentIconButton equipmentType='足' backgroundImage={background_boots} equippedItem={equippedBoots} setEquippedItem={setEquippedBoots} items={boots} />
            </div>
            <div style={accessory1Style}>
                <EquipmentIconButton
                    equipmentType='アクセサリ1'
                    backgroundImage={background_accessory}
                    equippedItem={equippedAccessory1}
                    setEquippedItem={setEquippedAccessory1}
                    items={accessories}
                    synergisticDependentItems={[equippedAccessory2, equippedAccessory3, equippedAccessory4]}
                />
            </div>
            <div style={accessory2Style}>
                <EquipmentIconButton
                    equipmentType='アクセサリ2'
                    backgroundImage={background_accessory}
                    equippedItem={equippedAccessory2}
                    setEquippedItem={setEquippedAccessory2}
                    items={accessories}
                    synergisticDependentItems={[equippedAccessory1, equippedAccessory3, equippedAccessory4]}
                />
            </div>
            <div style={accessory3Style}>
                <EquipmentIconButton
                    equipmentType='アクセサリ3'
                    backgroundImage={background_accessory}
                    equippedItem={equippedAccessory3}
                    setEquippedItem={setEquippedAccessory3}
                    items={accessories}
                    synergisticDependentItems={[equippedAccessory1, equippedAccessory2, equippedAccessory4]}
                />
            </div>
            <div style={accessory4Style}>
                <EquipmentIconButton
                    equipmentType='アクセサリ4'
                    backgroundImage={background_accessory}
                    equippedItem={equippedAccessory4}
                    setEquippedItem={setEquippedAccessory4}
                    items={accessories}
                    synergisticDependentItems={[equippedAccessory1, equippedAccessory2, equippedAccessory3]}
                />
            </div>
            <div style={weaponStyle}>
                <EquipmentIconButton equipmentType='武器' backgroundImage={background_weapon} equippedItem={equippedWeapon} setEquippedItem={setEquippedWeapon} items={weapons} />
            </div>
            <div style={shieldStyle}>
                <EquipmentIconButton equipmentType='盾' backgroundImage={background_shield} equippedItem={equippedShield} setEquippedItem={setEquippedShield} items={shields} />
            </div>
            <div style={arrowStyle}>
                <EquipmentIconButton equipmentType='矢' backgroundImage={background_arrow} equippedItem={equippedArrow} setEquippedItem={setEquippedArrow} items={arrows} />
            </div>
            <div style={glassesStyle}>
                <EquipmentIconButton equipmentType='メガネ'
                    backgroundImage={background_glasses}
                    equippedItem={equippedGlasses}
                    setEquippedItem={setEquippedGlasses}
                    items={glasses}
                    synergisticDependentItems={[equippedHat, equippedEarrings, equippedCostume]}
                />
            </div>
            <div style={hatStyle}>
                <EquipmentIconButton equipmentType='帽子'
                    backgroundImage={background_hat}
                    equippedItem={equippedHat}
                    setEquippedItem={setEquippedHat}
                    items={hats}
                    synergisticDependentItems={[equippedGlasses, equippedEarrings, equippedCostume]}
                />
            </div>
            <div style={earingStyle}>
                <EquipmentIconButton equipmentType='耳飾り'
                    backgroundImage={background_earing}
                    equippedItem={equippedEarrings}
                    setEquippedItem={setEquippedEarrings}
                    items={earrings}
                    synergisticDependentItems={[equippedGlasses, equippedHat, equippedCostume]}
                />
            </div>
            <div style={costumeStyle}>
                <EquipmentIconButton equipmentType='コスチューム'
                    backgroundImage={background_costume}
                    equippedItem={equippedCostume}
                    setEquippedItem={setEquippedCostume}
                    items={costumes}
                    synergisticDependentItems={[equippedGlasses, equippedHat, equippedEarrings]}
                />
            </div>
            <div style={tarismanHStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプH' equippedItem={equippedTalismanH} setEquippedItem={setEquippedTalismanH} items={h_talismans} />
            </div>
            <div style={tarismanGStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプG' equippedItem={equippedTalismanG} setEquippedItem={setEquippedTalismanG} items={g_talismans} />
            </div>
            <div style={tarismanIStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプI' equippedItem={equippedTalismanI} setEquippedItem={setEquippedTalismanI} items={i_talismans} />
            </div>
            <div style={tarismanBStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプB' equippedItem={equippedTalismanB} setEquippedItem={setEquippedTalismanB} items={b_talismans} />
            </div>
            <div style={tarismanJStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプJ' equippedItem={equippedTalismanJ} setEquippedItem={setEquippedTalismanJ} items={j_talismans} />
            </div>
            <div style={tarismanNStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプN' equippedItem={equippedTalismanN} setEquippedItem={setEquippedTalismanN} items={n_talismans} />
            </div>
            <div style={tarismanEStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプE' equippedItem={equippedTalismanE} setEquippedItem={setEquippedTalismanE} items={e_talismans} />
            </div>
            <div style={tarismanRStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプR' equippedItem={equippedTalismanR} setEquippedItem={setEquippedTalismanR} items={r_talismans} />
            </div>
            <div style={tarismanWStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプW' equippedItem={equippedTalismanW} setEquippedItem={setEquippedTalismanW} items={w_talismans} />
            </div>
            <div style={tarismanQStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプQ' equippedItem={equippedTalismanQ} setEquippedItem={setEquippedTalismanQ} items={q_talismans} />
            </div>
            <div style={tarismanSStype}>
                <EquipmentIconButton equipmentType='タリスマン タイプS' equippedItem={equippedTalismanS} setEquippedItem={setEquippedTalismanS} items={s_talismans} />
            </div>
            <div style={petStyle}>
                <EquipmentIconButton equipmentType='ペット' equippedItem={equippedPet} setEquippedItem={setEquippedPet} items={pets} />
            </div>

        </div>
    );
}
export default EquipmentPanel;