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
            blue: string;
            gray: string;
            gray2: string;
            gray3: string;
        };
        transition: {
            baseTime: string;
        };
    }
}
