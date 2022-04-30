import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { themeStyle } from './theme/themeStyle';
import { Layout } from './components/Keyboard';

export default function App() {
    return (
        <ThemeProvider theme={themeStyle}>
            <AppWrapper>
                <GlobalStyle />
                <Layout />
            </AppWrapper>
        </ThemeProvider>
    );
}

const AppWrapper = styled.div``;
