import helmet from '../../assets/backgrounds/helmet.png'
import gauntlet from '../../assets/backgrounds/gauntlet.png'
import tunic from '../../assets/backgrounds/tunic.png'
import leggings from '../../assets/backgrounds/leggings.png'
import boots from '../../assets/backgrounds/boots.png'
import accessory from '../../assets/backgrounds/accessory.png'
import weapon from '../../assets/backgrounds/weapon.png'
import shield from '../../assets/backgrounds/shield.png'
import arrow from '../../assets/backgrounds/arrow.png'
import hat from '../../assets/backgrounds/hat.png'
import earing from '../../assets/backgrounds/earing.png'
import glasses from '../../assets/backgrounds/glasses.png'
import costume from '../../assets/backgrounds/costume.png'
import React from "react";
import EquipmentIconButton from './EquipmentIconButton.tsx'
import { Item } from "./EquipmentIconButton";

export const EquipmentPanel: React.FC = () => {
    const [equippedHelmet, setEquippedHelmet] = React.useState<Item | null>(null);
    const [equippedGauntlet, setEquippedGauntlet] = React.useState<Item | null>(null);
    const [equippedTunic, setEquippedTunic] = React.useState<Item | null>(null);
    const [equippedLeggings, setEquippedLeggings] = React.useState<Item | null>(null);
    const [equippedBoots, setEquippedBoots] = React.useState<Item | null>(null);
    const [equippedWeapon, setEquippedWeapon] = React.useState<Item | null>(null);
    const [equippedShield, setEquippedShield] = React.useState<Item | null>(null);
    const [equippedArrow, setEquippedArrow] = React.useState<Item | null>(null);
    const [equippedAccessory1, setEquippedAccessory1] = React.useState<Item | null>(null);
    const [equippedAccessory2, setEquippedAccessory2] = React.useState<Item | null>(null);
    const [equippedAccessory3, setEquippedAccessory3] = React.useState<Item | null>(null);
    const [equippedAccessory4, setEquippedAccessory4] = React.useState<Item | null>(null);
    const [equippedGlasses, setEquippedGlasses] = React.useState<Item | null>(null);
    const [equippedHat, setEquippedHat] = React.useState<Item | null>(null);
    const [equippedEarrings, setEquippedEarrings] = React.useState<Item | null>(null);
    const [equippedCostume, setEquippedCostume] = React.useState<Item | null>(null);
    const [equippedTalismanH, setEquippedTalismanH] = React.useState<Item | null>(null);
    const [equippedTalismanG, setEquippedTalismanG] = React.useState<Item | null>(null);
    const [equippedTalismanI, setEquippedTalismanI] = React.useState<Item | null>(null);
    const [equippedTalismanB, setEquippedTalismanB] = React.useState<Item | null>(null);
    const [equippedTalismanJ, setEquippedTalismanJ] = React.useState<Item | null>(null);
    const [equippedTalismanN, setEquippedTalismanN] = React.useState<Item | null>(null);
    const [equippedTalismanE, setEquippedTalismanE] = React.useState<Item | null>(null);
    const [equippedTalismanR, setEquippedTalismanR] = React.useState<Item | null>(null);
    const [equippedTalismanW, setEquippedTalismanW] = React.useState<Item | null>(null);
    const [equippedTalismanQ, setEquippedTalismanQ] = React.useState<Item | null>(null);
    const [equippedPet, setEquippedPet] = React.useState<Item | null>(null);

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
    const petStyle: React.CSSProperties = {
        gridColumn: "8",
        gridRow: "1",
    }
    return (
        <div style={style}>
            <div style={helmetStyle}>
                <EquipmentIconButton equipmentType='頭' backgroudImage={helmet} equippedItem={equippedHelmet} setEquippedItem={setEquippedHelmet} />
            </div>
            <div style={gauntletStyle}>
                <EquipmentIconButton equipmentType='手' backgroudImage={gauntlet} equippedItem={equippedGauntlet} setEquippedItem={setEquippedGauntlet} />
            </div>
            <div style={tunicStyle}>
                <EquipmentIconButton equipmentType='胴' backgroudImage={tunic} equippedItem={equippedTunic} setEquippedItem={setEquippedTunic} />
            </div>
            <div style={leggingsStyle}>
                <EquipmentIconButton equipmentType='脚' backgroudImage={leggings} equippedItem={equippedLeggings} setEquippedItem={setEquippedLeggings} />
            </div>
            <div style={bootsStyle}>
                <EquipmentIconButton equipmentType='足' backgroudImage={boots} equippedItem={equippedBoots} setEquippedItem={setEquippedBoots} />
            </div>
            <div style={accessory1Style}>
                <EquipmentIconButton equipmentType='アクセサリ1' backgroudImage={accessory} equippedItem={equippedAccessory1} setEquippedItem={setEquippedAccessory1} />
            </div>
            <div style={accessory2Style}>
                <EquipmentIconButton equipmentType='アクセサリ2' backgroudImage={accessory} equippedItem={equippedAccessory2} setEquippedItem={setEquippedAccessory2} />
            </div>
            <div style={accessory3Style}>
                <EquipmentIconButton equipmentType='アクセサリ3' backgroudImage={accessory} equippedItem={equippedAccessory3} setEquippedItem={setEquippedAccessory3} />
            </div>
            <div style={accessory4Style}>
                <EquipmentIconButton equipmentType='アクセサリ4' backgroudImage={accessory} equippedItem={equippedAccessory4} setEquippedItem={setEquippedAccessory4} />
            </div>
            <div style={weaponStyle}>
                <EquipmentIconButton equipmentType='武器' backgroudImage={weapon} equippedItem={equippedWeapon} setEquippedItem={setEquippedWeapon} />
            </div>
            <div style={shieldStyle}>
                <EquipmentIconButton equipmentType='盾' backgroudImage={shield} equippedItem={equippedShield} setEquippedItem={setEquippedShield} />
            </div>
            <div style={arrowStyle}>
                <EquipmentIconButton equipmentType='矢' backgroudImage={arrow} equippedItem={equippedArrow} setEquippedItem={setEquippedArrow} />
            </div>
            <div style={glassesStyle}>
                <EquipmentIconButton equipmentType='メガネ' backgroudImage={glasses} equippedItem={equippedGlasses} setEquippedItem={setEquippedGlasses} />
            </div>
            <div style={hatStyle}>
                <EquipmentIconButton equipmentType='帽子' backgroudImage={hat} equippedItem={equippedHat} setEquippedItem={setEquippedHat} />
            </div>
            <div style={earingStyle}>
                <EquipmentIconButton equipmentType='耳飾り' backgroudImage={earing} equippedItem={equippedEarrings} setEquippedItem={setEquippedEarrings} />
            </div>
            <div style={costumeStyle}>
                <EquipmentIconButton equipmentType='コスチューム' backgroudImage={costume} equippedItem={equippedCostume} setEquippedItem={setEquippedCostume} />
            </div>
            <div style={tarismanHStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプH' equippedItem={equippedTalismanH} setEquippedItem={setEquippedTalismanH} />
            </div>
            <div style={tarismanGStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプG' equippedItem={equippedTalismanG} setEquippedItem={setEquippedTalismanG} />
            </div>
            <div style={tarismanIStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプI' equippedItem={equippedTalismanI} setEquippedItem={setEquippedTalismanI} />
            </div>
            <div style={tarismanBStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプB' equippedItem={equippedTalismanB} setEquippedItem={setEquippedTalismanB} />
            </div>
            <div style={tarismanJStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプJ' equippedItem={equippedTalismanJ} setEquippedItem={setEquippedTalismanJ} />
            </div>
            <div style={tarismanNStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプN' equippedItem={equippedTalismanN} setEquippedItem={setEquippedTalismanN} />
            </div>
            <div style={tarismanEStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプE' equippedItem={equippedTalismanE} setEquippedItem={setEquippedTalismanE} />
            </div>
            <div style={tarismanRStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプR' equippedItem={equippedTalismanR} setEquippedItem={setEquippedTalismanR} />
            </div>
            <div style={tarismanWStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプW' equippedItem={equippedTalismanW} setEquippedItem={setEquippedTalismanW} />
            </div>
            <div style={tarismanQStyle}>
                <EquipmentIconButton equipmentType='タリスマン タイプQ' equippedItem={equippedTalismanQ} setEquippedItem={setEquippedTalismanQ} />
            </div>
            <div style={petStyle}>
                <EquipmentIconButton equipmentType='ペット' equippedItem={equippedPet} setEquippedItem={setEquippedPet} />
            </div>

        </div>
    );
}
export default EquipmentPanel;