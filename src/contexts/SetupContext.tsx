import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from 'react';

interface SetupOptionsData {
    theme: string;
    isKeyboardVisible: boolean;
}

interface SetupOptionsContext {
    setup: SetupOptionsData;
    setSetup: Dispatch<SetStateAction<SetupOptionsData>>;
}

const setupOptions = {
    theme: 'light',
    isKeyboardVisible: true,
};

// CONTEXT
export const SetupContext = createContext<SetupOptionsContext | undefined>(undefined);

// PROVIDER
export const SetupContextProvider = function ({ children }: { children: ReactNode }) {
    const [setup, setSetup] = useState<SetupOptionsData>(setupOptions);
    const value = useMemo(
        () => ({
            setup,
            setSetup,
        }),
        [setup]
    );
    return <SetupContext.Provider value={value}>{children}</SetupContext.Provider>;
};

// HOOKS
export const useSetup = function () {
    const context = useContext(SetupContext);

    if (context === undefined) {
        throw new Error('useSetup mus be used within SetupContextProvider');
    }

    return context;
};
