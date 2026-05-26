import { useAtomValue } from "jotai";
import { CharacterValueKey } from "../../modules/character/constants";
import { calculatedActiveCharacterAtom } from "../../modules/state/appState";
import { uiCustomFormulasState } from "../../modules/state/ui";
import { CharacterValuesView } from "./CharacterValuesView";

export const CharactorPanel: React.FC = () => {
    const { values } = useAtomValue(calculatedActiveCharacterAtom);
    const customFormulas = useAtomValue(uiCustomFormulasState);
    const customizedKeys = new Set(
        Object.entries(customFormulas)
            .filter(([, formula]) => formula?.isActive)
            .map(([key]) => key as CharacterValueKey)
    );

    return <CharacterValuesView values={values} customizedKeys={customizedKeys} />;
}
export default CharactorPanel;
