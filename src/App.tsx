import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { themeStyle } from './theme/themeStyle';
import { KeyboardContainer } from './components/Keyboard';

export default function App() {
    return (
        <ThemeProvider theme={themeStyle}>
            <AppWrapper>
                <GlobalStyle />

                <KeyboardContainer />
            </AppWrapper>
        </ThemeProvider>
    );
}

const AppWrapper = styled.div``;
