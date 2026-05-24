import { atom } from "jotai";
import { atomWithHash } from "jotai-location";
import { atomFamily } from "jotai/utils";
import { CharacterBaseState, CharacterState } from "../character/types";
import { CharacterValueKey } from "../character/constants";
import { calculateCharacter } from "../calculation";
import { createDefaultAppState } from "../character/defaults";
import {
    decodeSerializedAppState,
    encodeSerializedAppState,
    serializeAppState,
    deserializeAppState,
    SerializedAppState,
} from "../character/serialize";
import { AppState, CharacterId } from "../character/types";

const defaultAppState = createDefaultAppState();

export const serializedAppStateAtom = atomWithHash<SerializedAppState>(
    "c",
    serializeAppState(defaultAppState),
    {
        serialize: encodeSerializedAppState,
        deserialize: decodeSerializedAppState,
    }
);

export const appStateAtom = atom(
    (get): AppState => deserializeAppState(get(serializedAppStateAtom)),
    (_, set, nextState: AppState) => {
        set(serializedAppStateAtom, serializeAppState(nextState));
    }
);

export const activeCharacterIdAtom = atom(
    (get) => get(appStateAtom).activeCharacterId,
    (get, set, nextCharacterId: CharacterId) => {
        set(appStateAtom, {
            ...get(appStateAtom),
            activeCharacterId: nextCharacterId,
        });
    }
);

export const activeCharacterAtom = atom(
    (get) => {
        const state = get(appStateAtom);
        return state.characters[state.activeCharacterId];
    },
    (get, set, nextCharacter: CharacterState) => {
        const state = get(appStateAtom);
        set(appStateAtom, {
            ...state,
            characters: {
                ...state.characters,
                [nextCharacter.id]: nextCharacter,
            },
            activeCharacterId: nextCharacter.id,
        });
    }
);

export const updateActiveCharacterAtom = atom(
    null,
    (get, set, update: (character: CharacterState) => CharacterState) => {
        set(activeCharacterAtom, update(get(activeCharacterAtom)));
    }
);

export const activeCharacterBaseAtomFamily = atomFamily((key: keyof CharacterBaseState) =>
    atom(
        (get) => get(activeCharacterAtom).base[key],
        (_, set, nextValue: CharacterBaseState[typeof key]) => {
            set(updateActiveCharacterAtom, (character) => ({
                ...character,
                base: {
                    ...character.base,
                    [key]: nextValue,
                },
            }));
        }
    )
);

export const calculatedActiveCharacterAtom = atom((get) =>
    calculateCharacter(get(activeCharacterAtom))
);

export const activeCharacterValueAtomFamily = atomFamily((key: CharacterValueKey) =>
    atom((get) => get(calculatedActiveCharacterAtom).values[key])
);
