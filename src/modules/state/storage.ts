import { atom, useAtom } from "jotai";
import { atomFamily, atomWithStorage, RESET } from "jotai/utils";
import type { CharacterState } from "../character/types";
import { activeCharacterAtom } from "./appState";
import { migrateStoredCharacterContexts } from "../character/legacyStoredCharacter";

type StoredCharacterContexts = Record<string, CharacterState>;

const rawStoredCharacterContexts = atomWithStorage<Record<string, unknown>>(
    "charactorContext",
    {}
);

const storedCharacterContexts = atom(
    (get): StoredCharacterContexts => migrateStoredCharacterContexts(get(rawStoredCharacterContexts)),
    (_, set, nextContexts: StoredCharacterContexts) => {
        set(rawStoredCharacterContexts, nextContexts);
    }
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
        (get, set, newValue: CharacterState | typeof RESET) => {
            const contexts = get(storedCharacterContexts);
            if (newValue === RESET) {
                const rest = { ...contexts };
                delete rest[name];
                set(storedCharacterContexts, rest);
                return;
            }

            set(storedCharacterContexts, {
                ...contexts,
                [name]: newValue,
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
