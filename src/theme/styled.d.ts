import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontBase: string;
        fontSize: {
            base: string;
            keyboard: string;
        };
        colors: {
            white: string;
            black: string;
            gray: string;
            gray2: string;
        };
    }
}
