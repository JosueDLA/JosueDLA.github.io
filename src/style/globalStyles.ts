import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./theme";
import scrollBar from "./scrollBar";

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        background-color: ${({ theme }) => theme.bgPrimary};
        color: ${({ theme }) => theme.textPrimary};
    }

    main{
        
    }

    ${scrollBar}
`;

export default GlobalStyle;
