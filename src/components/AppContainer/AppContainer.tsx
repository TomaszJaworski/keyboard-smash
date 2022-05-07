import styled from 'styled-components';
import { ReactNode } from 'react';
import { KeysContextProvider } from '../../contexts/KeysContext';

interface AppContainerProps {
    children: ReactNode;
}

export const AppContainer = function ({ children }: AppContainerProps) {
    return (
        <AppWrapper>
            <KeysContextProvider>{children}</KeysContextProvider>
        </AppWrapper>
    );
};

const AppWrapper = styled.div``;
