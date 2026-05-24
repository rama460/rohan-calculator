import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { resetCompatibleEquipmentAtom } from "../../modules/state/legacyCompatibleAtoms";

export const EquipmentResetButton: React.FC = () => {
    const resetAllEquipmentItemState = useSetAtom(resetCompatibleEquipmentAtom);
    return (
        <Button onClick={() => resetAllEquipmentItemState()}>
            リセット
        </Button>
    );
}
