import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;600;700&display=swap');

    body{
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`;

export default GlobalStyle;
