import { CharactorStateType } from "../../modules/character/constants";
import { uiCustomFormulaAtomFamily } from "../../modules/state/ui";
import { useAtomValue } from "jotai";
import { CharacterValueKey } from "../../modules/character/constants";
import { activeCharacterValueAtomFamily } from "../../modules/state/appState";
import { CharacterValueDisplayField } from "./CharacterValuesView";

interface CharactorParameterFieldProps {
    name: CharactorStateType;
    title: string;
}

export const CharactorParameterField: React.FC<CharactorParameterFieldProps> = ({ name, title }) => {
    const value = useAtomValue(activeCharacterValueAtomFamily(name as CharacterValueKey));
    const customFormula = useAtomValue(uiCustomFormulaAtomFamily(name));
    const isCustomized = customFormula !== null && customFormula?.isActive;

    return (
        <CharacterValueDisplayField
            title={title}
            value={value}
            isCustomized={isCustomized}
        />
    );
}
export default CharactorParameterField;
