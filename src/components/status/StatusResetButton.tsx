import { useSetAtom } from "jotai";
import { resetAllStatusState } from "../../modules/state/statuses";
import { Button } from "@mui/material";

export const StatusResetButton: React.FC = () => {
    const resetAllStatus = useSetAtom(resetAllStatusState);

    return (
        <Button onClick={() => resetAllStatus()}>
            リセット
        </Button>
    );
}