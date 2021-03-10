import { createGlobalStyle } from "styled-components";
import scrollBar from "./scrollBar";
import normalize from "./normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
    background-color: var(--bg-primary);
    color: var(--text-secondary);
  }

  #gatsby-focus-wrapper{
    min-height: 100vh; 
    display: flex; 
    flex-direction: column;
  }

  html {
    overflow-y: scroll;
  }

  section {
    padding-top: 3.5rem;
  }

  .container {
    margin: 0 auto;
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 85%;
    }
  }

  @media screen and (max-width: 480px) {
    .container {
      width: 95%;
    }
  }

  ${scrollBar}
`;

export default GlobalStyle;
