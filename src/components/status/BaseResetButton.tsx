import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { resetCompatibleBaseAtom } from "../../modules/state/compat";

export const BaseResetButton: React.FC = () => {
    const resetAllBaseState = useSetAtom(resetCompatibleBaseAtom);
    return (
        <Button onClick={() => resetAllBaseState()}>
            リセット
        </Button>
    );
}
