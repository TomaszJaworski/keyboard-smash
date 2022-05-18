import styled from 'styled-components';
import { ReactNode } from 'react';
import { KeysContextProvider } from '../../contexts/KeysContext';
import { SetupContextProvider } from '../../contexts/SetupContext';

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = function ({ children }: AppContainerProps) {
    return (
        <AppWrapper>
            <SetupContextProvider>
                <KeysContextProvider>{children}</KeysContextProvider>
            </SetupContextProvider>
        </AppWrapper>
    );
};

const AppWrapper = styled.div``;
