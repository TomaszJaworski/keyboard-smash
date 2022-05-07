import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

interface KeysContextProviderProps {
    children: ReactNode;
}

interface KeysContextData {
    keys: string[];
    setKeys: Dispatch<SetStateAction<string[]>>;
}

// CONTEXT
export const KeysContext = createContext<KeysContextData | undefined>(undefined);

// PROVIDER
export const KeysContextProvider = function ({ children }: KeysContextProviderProps) {
    const [keys, setKeys] = useState<string[]>([]);
    const value = useMemo(
        () => ({
            keys,
            setKeys,
        }),
        [keys]
    );

    return <KeysContext.Provider value={value}>{children}</KeysContext.Provider>;
};

// HOOK
export const useKeys = function () {
    const context = useContext(KeysContext);
    if (context === undefined) {
        throw new Error('useKeys must be used within a KeysContextProvider');
    }
    return context;
};
