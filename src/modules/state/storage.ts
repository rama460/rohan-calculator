import { atom, useAtom } from "jotai";
import { atomFamily, atomWithStorage, RESET } from "jotai/utils";
import type { CharacterState } from "../character/types";
import { activeCharacterAtom } from "./appState";

type StoredCharacterContexts = Record<string, CharacterState>;

const storedCharacterContexts = atomWithStorage<StoredCharacterContexts>(
    "charactorContext",
    {}
);

export const contextNames = atom((get) => {
    const contexts = get(storedCharacterContexts);
    return Object.keys(contexts);
});

export const storedCharacterContextsAtom = atom((get) => get(storedCharacterContexts));

export const contextState = atomFamily((name: string) =>
    atom(
        (get): CharacterState | undefined => {
            const contexts = get(storedCharacterContexts);
            return contexts[name];
        },
        (_, set, newValue: CharacterState | typeof RESET) => {
            set(storedCharacterContexts, (prev) => {
                if (newValue === RESET) {
                    const rest = { ...prev };
                    delete rest[name];
                    return rest;
                }

                return {
                    ...prev,
                    [name]: newValue,
                };
            });
        }
    )
);

export const useStorageContext = (name: string) => {
    const [context, setContext] = useAtom(contextState(name));
    const [activeCharacter, setActiveCharacter] = useAtom(activeCharacterAtom);

    const loadContext = () => {
        if (!context) {
            return;
        }

        setActiveCharacter(context);
    };

    const saveContext = () => {
        setContext({
            ...activeCharacter,
            name: name || activeCharacter.name,
        });
    };

    return [loadContext, saveContext] as const;
};
