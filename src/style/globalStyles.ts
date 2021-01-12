import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    body{
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`;

export default GlobalStyle;
