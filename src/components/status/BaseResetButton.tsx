import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { resetUiBaseAtom } from "../../modules/state/ui";

export const BaseResetButton: React.FC = () => {
    const resetAllBaseState = useSetAtom(resetUiBaseAtom);
    return (
        <Button onClick={() => resetAllBaseState()}>
            リセット
        </Button>
    );
}
