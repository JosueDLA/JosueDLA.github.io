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

  .container{
    margin: 0 auto;
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    .container{
      margin: 0 auto;
      width: 85%;
    }
  }

  @media screen and (max-width: 480px) {
    .container{
      margin: 0 auto;
      width: 95%;
    }
  }

  ${scrollBar}
`;

export default GlobalStyle;
