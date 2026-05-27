import { useAtomValue } from "jotai";
import { calculatedActiveCharacterAtom } from "../../modules/state/appState";
import { DetailOptionsView } from "./DetailOptionsView";

export const DetailPanel = () => {
    const { aggregatedOptions } = useAtomValue(calculatedActiveCharacterAtom);

    return <DetailOptionsView options={aggregatedOptions} />;
}
