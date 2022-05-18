import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { themeStyle } from './theme/themeStyle';
import { KeyboardContainer } from './components/Keyboard';
import { BoxContainer } from './components/Boxes/BoxContainer';
import { TextEditor } from './components/TextEditor/TextEditor';
import { AppContainer } from './components/AppContainer/AppContainer';
import { ConfigurationTrigger } from './components/Configuration/ConfigurationTrigger';

export default function App() {
    return (
        <ThemeProvider theme={themeStyle}>
            <AppContainer>
                <GlobalStyle />

                <ConfigurationTrigger />
                <TextEditor />
                <BoxContainer />
                <KeyboardContainer />
            </AppContainer>
        </ThemeProvider>
    );
}
