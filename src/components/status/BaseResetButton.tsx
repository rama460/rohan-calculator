import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { resetBaseState } from "../../modules/state/bases";

export const BaseResetButton: React.FC = () => {
    const resetAllBaseState = useSetAtom(resetBaseState);
    return (
        <Button onClick={() => resetAllBaseState()}>
            リセット
        </Button>
    );
}