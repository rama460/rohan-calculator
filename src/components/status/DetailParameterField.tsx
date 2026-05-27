import { useAtomValue } from "jotai";
import { BuiltinOptionKeyType } from "../../static/options";
import { calculatedActiveCharacterAtom } from "../../modules/state/appState";
import { DetailOptionDisplayField } from "./DetailOptionsView";

interface DetailParameterFieldProps {
    name: BuiltinOptionKeyType;
}

export const DetailParameterField: React.FC<DetailParameterFieldProps> = ({ name }) => {
    const value = useAtomValue(calculatedActiveCharacterAtom).aggregatedOptions[name] ?? 0;

    return <DetailOptionDisplayField name={name} value={value} />;
}
export default DetailParameterField;
