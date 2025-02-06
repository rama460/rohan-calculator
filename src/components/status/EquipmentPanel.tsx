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
import background_earrings from '../../assets/backgrounds/earrings.png'
import background_glasses from '../../assets/backgrounds/glasses.png'
import background_costume from '../../assets/backgrounds/costume.png'
import React from "react";
import EquipmentIconButton from './EquipmentIconButton.tsx'
import { accessories, arrows, b_talismans, boots, costumes, e_talismans, earrings, g_talismans, gauntlets, glasses, h_talismans, hats, helmets, i_talismans, j_talismans, leggings, n_talismans, pets, q_talismans, r_talismans, s_talismans, shields, tunics, w_talismans, weapons } from '../static/items.ts'



export const EquipmentPanel: React.FC = ({
}) => {
    const style: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(9, 34px)",
        gridTemplateRows: "repeat(5, 34px)",
        gap: "5px",
    }
    return (
        <div style={style}>
            <div style={{ gridColumn: 2, gridRow: 1 }}>
                <EquipmentIconButton equipmentType='helmet' title='頭' backgroundImage={background_helmet} items={helmets} />
            </div>
            <div style={{ gridColumn: 1, gridRow: 2 }}>
                <EquipmentIconButton equipmentType='gauntlet' title='手' backgroundImage={background_gauntlet} items={gauntlets} />
            </div>
            <div style={{ gridColumn: 2, gridRow: 2 }}>
                <EquipmentIconButton equipmentType='tunic' title='胴' backgroundImage={background_tunic} items={tunics} />
            </div>
            <div style={{ gridColumn: 2, gridRow: 3 }}>
                <EquipmentIconButton equipmentType='leggings' title='脚' backgroundImage={background_leggings} items={leggings} />
            </div>
            <div style={{ gridColumn: 2, gridRow: 4 }}>
                <EquipmentIconButton equipmentType='boots' title='足' backgroundImage={background_boots} items={boots} />
            </div>
            <div style={{ gridColumn: 1, gridRow: 3 }}>
                <EquipmentIconButton
                    equipmentType='accessory1'
                    title='アクセサリ1'
                    backgroundImage={background_accessory}
                    items={accessories}
                //synergisticDependentItems={[equippedAccessory2, equippedAccessory3, equippedAccessory4]}
                />
            </div>
            <div style={{ gridColumn: 1, gridRow: 4 }}>
                <EquipmentIconButton
                    equipmentType='accessory2'
                    title='アクセサリ2'
                    backgroundImage={background_accessory}
                    items={accessories}
                //synergisticDependentItems={[equippedAccessory1, equippedAccessory3, equippedAccessory4]}
                />
            </div>
            <div style={{ gridColumn: 3, gridRow: 3 }}>
                <EquipmentIconButton
                    equipmentType='accessory3'
                    title='アクセサリ3'
                    backgroundImage={background_accessory}
                    items={accessories}
                //synergisticDependentItems={[equippedAccessory1, equippedAccessory2, equippedAccessory4]}
                />
            </div>
            <div style={{ gridColumn: 3, gridRow: 4 }}>
                <EquipmentIconButton
                    equipmentType='accessory4'
                    title='アクセサリ4'
                    backgroundImage={background_accessory}
                    items={accessories}
                //synergisticDependentItems={[equippedAccessory1, equippedAccessory2, equippedAccessory3]}
                />
            </div>
            <div style={{ gridColumn: 1, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='weapon' title='武器' backgroundImage={background_weapon} items={weapons} />
            </div>
            <div style={{ gridColumn: 2, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='shield' title='盾' backgroundImage={background_shield} items={shields} />
            </div>
            <div style={{ gridColumn: 3, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='arrow' title='矢' backgroundImage={background_arrow} items={arrows} />
            </div>
            <div style={{ gridColumn: 4, gridRow: 1 }}>
                <EquipmentIconButton equipmentType='glasses' title='メガネ'
                    backgroundImage={background_glasses}
                    items={glasses}
                //synergisticDependentItems={[equippedHat, equippedEarrings, equippedCostume]}
                />
            </div>
            <div style={{ gridColumn: 5, gridRow: 1 }}>
                <EquipmentIconButton equipmentType='hat' title='帽子'
                    backgroundImage={background_hat}
                    items={hats}
                //synergisticDependentItems={[equippedGlasses, equippedEarrings, equippedCostume]}
                />
            </div>
            <div style={{ gridColumn: 6, gridRow: 1 }}>
                <EquipmentIconButton equipmentType='earrings' title='耳飾り'
                    backgroundImage={background_earrings}
                    items={earrings}
                //synergisticDependentItems={[equippedGlasses, equippedHat, equippedCostume]}
                />
            </div>
            <div style={{ gridColumn: 5, gridRow: 2 }}>
                <EquipmentIconButton equipmentType='costume' title='コスチューム'
                    backgroundImage={background_costume}
                    items={costumes}
                //synergisticDependentItems={[equippedGlasses, equippedHat, equippedEarrings]}
                />
            </div>
            <div style={{ gridColumn: 5, gridRow: 4 }}>
                <EquipmentIconButton equipmentType='talismanH' title='タリスマン タイプH' items={h_talismans} />
            </div>
            <div style={{ gridColumn: 6, gridRow: 4 }}>
                <EquipmentIconButton equipmentType='talismanG' title='タリスマン タイプG' items={g_talismans} />
            </div>
            <div style={{ gridColumn: 7, gridRow: 4 }}>
                <EquipmentIconButton equipmentType='talismanI' title='タリスマン タイプI' items={i_talismans} />
            </div>
            <div style={{ gridColumn: 8, gridRow: 4 }}>
                <EquipmentIconButton equipmentType='talismanB' title='タリスマン タイプB' items={b_talismans} />
            </div>
            <div style={{ gridColumn: 9, gridRow: 4 }}>
                <EquipmentIconButton equipmentType='talismanJ' title='タリスマン タイプJ' items={j_talismans} />
            </div>
            <div style={{ gridColumn: 5, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='talismanN' title='タリスマン タイプN' items={n_talismans} />
            </div>
            <div style={{ gridColumn: 6, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='talismanE' title='タリスマン タイプE' items={e_talismans} />
            </div>
            <div style={{ gridColumn: 7, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='talismanR' title='タリスマン タイプR' items={r_talismans} />
            </div>
            <div style={{ gridColumn: 8, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='talismanW' title='タリスマン タイプW' items={w_talismans} />
            </div>
            <div style={{ gridColumn: 9, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='talismanQ' title='タリスマン タイプQ' items={q_talismans} />
            </div>
            <div style={{ gridColumn: 10, gridRow: 5 }}>
                <EquipmentIconButton equipmentType='talismanS' title='タリスマン タイプS' items={s_talismans} />
            </div>
            <div style={{ gridColumn: 8, gridRow: 1 }}>
                <EquipmentIconButton equipmentType='pet' title='ペット' items={pets} />
            </div>

        </div >
    );
}
export default EquipmentPanel;