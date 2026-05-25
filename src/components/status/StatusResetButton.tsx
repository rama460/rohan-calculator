import { useSetAtom } from "jotai";
import { Button } from "@mui/material";
import { resetUiStatusAtom } from "../../modules/state/ui";

export const StatusResetButton: React.FC = () => {
    const resetAllStatus = useSetAtom(resetUiStatusAtom);

    return (
        <Button onClick={() => resetAllStatus()}>
            リセット
        </Button>
    );
}
