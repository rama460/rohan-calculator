import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { resetUiEquipmentAtom } from "../../modules/state/ui";

export const EquipmentResetButton: React.FC = () => {
    const resetAllEquipmentItemState = useSetAtom(resetUiEquipmentAtom);
    return (
        <Button onClick={() => resetAllEquipmentItemState()}>
            リセット
        </Button>
    );
}
