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

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

  ${scrollBar}
`;

export default GlobalStyle;
