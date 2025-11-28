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
import { accessories, arrows, b_talismans, boots, costumes, e_talismans, earrings, f_talismans, g_talismans, gauntlets, glasses, h_talismans, hats, helmets, i_talismans, j_talismans, k_talismans, l_talismans, leggings, n_talismans, pets, q_talismans, r_talismans, rides, runes, s_talismans, shields, t_talismans, tunics, w_talismans, weapons } from '../../static/items.ts'
import { useAtomValue } from 'jotai'
import { baseOptionStateFamily } from '../../modules/state/bases.ts'



export const EquipmentPanel: React.FC = () => {
    console.log('render EquipmentPanel')
    const jobid = useAtomValue(baseOptionStateFamily("jobid"));
    const raceid = useAtomValue(baseOptionStateFamily("raceid"));
    const style: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(9, 34px)",
        gridTemplateRows: "repeat(7, 34px)",
        gap: "2px",
    }
    return (
        <>
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
                    />
                </div>
                <div style={{ gridColumn: 1, gridRow: 4 }}>
                    <EquipmentIconButton
                        equipmentType='accessory2'
                        title='アクセサリ2'
                        backgroundImage={background_accessory}
                        items={accessories}
                    />
                </div>
                <div style={{ gridColumn: 3, gridRow: 3 }}>
                    <EquipmentIconButton
                        equipmentType='accessory3'
                        title='アクセサリ3'
                        backgroundImage={background_accessory}
                        items={accessories}
                    />
                </div>
                <div style={{ gridColumn: 3, gridRow: 4 }}>
                    <EquipmentIconButton
                        equipmentType='accessory4'
                        title='アクセサリ4'
                        backgroundImage={background_accessory}
                        items={accessories}
                    />
                </div>
                <div style={{ gridColumn: 1, gridRow: 5 }}>
                    <EquipmentIconButton equipmentType='weapon' title='武器' backgroundImage={background_weapon} items={weapons} />
                </div>
                <div style={{ gridColumn: 2, gridRow: 5 }}>
                    <EquipmentIconButton
                        equipmentType='shield'
                        title='盾'
                        backgroundImage={background_shield}
                        items={
                            shields.concat(
                                raceid === 0 && jobid === 1 ? weapons.filter((w) => w.type == "dagger") : []
                            )
                        }
                    />
                </div>
                <div style={{ gridColumn: 3, gridRow: 5 }}>
                    <EquipmentIconButton equipmentType='arrow' title='矢' backgroundImage={background_arrow} items={arrows} />
                </div>
                <div style={{ gridColumn: 4, gridRow: 1 }}>
                    <EquipmentIconButton equipmentType='glasses' title='メガネ'
                        backgroundImage={background_glasses}
                        items={glasses}
                    />
                </div>
                <div style={{ gridColumn: 5, gridRow: 1 }}>
                    <EquipmentIconButton equipmentType='hat' title='帽子'
                        backgroundImage={background_hat}
                        items={hats}
                    />
                </div>
                <div style={{ gridColumn: 6, gridRow: 1 }}>
                    <EquipmentIconButton equipmentType='earrings' title='耳飾り'
                        backgroundImage={background_earrings}
                        items={earrings}
                    />
                </div>
                <div style={{ gridColumn: 4, gridRow: 2 }}>
                    <EquipmentIconButton equipmentType='costume' title='コスチューム'
                        backgroundImage={background_costume}
                        items={costumes}
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
                <div style={{ gridColumn: 5, gridRow: 3 }}>
                    <EquipmentIconButton equipmentType='talismanK' title='タリスマン タイプK' items={k_talismans} />
                </div>
                <div style={{ gridColumn: 6, gridRow: 3 }}>
                    <EquipmentIconButton equipmentType='talismanL' title='タリスマン タイプL' items={l_talismans} />
                </div>
                <div style={{ gridColumn: 7, gridRow: 3 }}>
                    <EquipmentIconButton equipmentType='talismanF' title='タリスマン タイプF' items={f_talismans} />
                </div>
                <div style={{ gridColumn: 8, gridRow: 3 }}>
                    <EquipmentIconButton equipmentType='talismanT' title='タリスマン タイプT' items={t_talismans} />
                </div>
                <div style={{ gridColumn: 9, gridRow: 3 }}>
                    <EquipmentIconButton equipmentType='talismanS' title='タリスマン タイプS' items={s_talismans} />
                </div>
                <div style={{ gridColumn: 8, gridRow: 1 }}>
                    <EquipmentIconButton equipmentType='pet' title='ペット' items={pets} />
                </div>
                <div style={{ gridColumn: 9, gridRow: 1 }}>
                    <EquipmentIconButton equipmentType='ride' title='乗り物' items={rides} />
                </div>
                <div style={{ gridColumn: 4, gridRow: 7 }}>
                    <EquipmentIconButton equipmentType='rune1' title='ルーン1' items={runes} />
                </div>
                <div style={{ gridColumn: 5, gridRow: 7 }}>
                    <EquipmentIconButton equipmentType='rune2' title='ルーン2' items={runes} />
                </div>
                <div style={{ gridColumn: 6, gridRow: 7 }}>
                    <EquipmentIconButton equipmentType='rune3' title='ルーン3' items={runes} />
                </div>
                <div style={{ gridColumn: 7, gridRow: 7 }}>
                    <EquipmentIconButton equipmentType='rune4' title='ルーン4' items={runes} />
                </div>
                <div style={{ gridColumn: 8, gridRow: 7 }}>
                    <EquipmentIconButton equipmentType='rune5' title='ルーン5' items={runes} />
                </div>
                <div style={{ gridColumn: 9, gridRow: 7 }}>
                    <EquipmentIconButton equipmentType='rune6' title='ルーン6' items={runes} />
                </div>
            </div >
        </>
    );
}
export default EquipmentPanel;