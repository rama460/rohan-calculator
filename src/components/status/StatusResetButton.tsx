import { useSetAtom } from "jotai";
import { Button } from "@mui/material";
import { resetCompatibleStatusAtom } from "../../modules/state/legacyCompatibleAtoms";

export const StatusResetButton: React.FC = () => {
    const resetAllStatus = useSetAtom(resetCompatibleStatusAtom);

    return (
        <Button onClick={() => resetAllStatus()}>
            リセット
        </Button>
    );
}
