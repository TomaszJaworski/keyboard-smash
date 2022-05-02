import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { themeStyle } from './theme/themeStyle';
import { KeyboardContainer } from './components/Keyboard';
import { BoxContainer } from './components/Boxes/BoxContainer';
import { TextEditor } from './components/TextEditor/TextEditor';

export default function App() {
    return (
        <ThemeProvider theme={themeStyle}>
            <AppWrapper>
                <GlobalStyle />

                <TextEditor />
                <BoxContainer />
                <KeyboardContainer />
            </AppWrapper>
        </ThemeProvider>
    );
}

const AppWrapper = styled.div``;
