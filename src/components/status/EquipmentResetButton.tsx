import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { setAllEquipmentState } from "../../modules/state/items";

export const EquipmentResetButton: React.FC = () => {
    const setEquipmentItemState = useSetAtom(setAllEquipmentState);
    return (
        <Button onClick={() => setEquipmentItemState({
            helmet: undefined,
            gauntlet: undefined,
            tunic: undefined,
            leggings: undefined,
            boots: undefined,
            accessory1: undefined,
            accessory2: undefined,
            accessory3: undefined,
            accessory4: undefined,
            weapon: undefined,
            shield: undefined,
            arrow: undefined,
            glasses: undefined,
            hat: undefined,
            earrings: undefined,
            costume: undefined,
            talismanH: undefined,
            talismanG: undefined,
            talismanI: undefined,
            talismanB: undefined,
            talismanJ: undefined,
            talismanN: undefined,
            talismanE: undefined,
            talismanR: undefined,
            talismanW: undefined,
            talismanQ: undefined,
            talismanS: undefined,
            pet: undefined,
            ride: undefined,
        })}>
            リセット
        </Button>
    );
}