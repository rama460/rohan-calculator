import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { resetAllEquipmentState } from "../../modules/state/items";

export const EquipmentResetButton: React.FC = () => {
    const resetAllEquipmentItemState = useSetAtom(resetAllEquipmentState);
    return (
        <Button onClick={() => resetAllEquipmentItemState()}>
            リセット
        </Button>
    );
}