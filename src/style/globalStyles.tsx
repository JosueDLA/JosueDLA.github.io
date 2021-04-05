import { createGlobalStyle } from "styled-components";
import scrollBar from "Style/scrollBar";
import normalize from "Style/normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    overflow-y: scroll;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto Mono", monospace;
    background-color: var(--bg-primary);
    color: var(--text-secondary);
  }

  #gatsby-focus-wrapper, #blog-main{
    min-height: calc(100vh - 7rem); 
    display: flex; 
    flex-direction: column;
  }

  #disqus_thread {
    margin-top: 4rem;
    margin-bottom: 2rem;
    background-color: var(--bg-secondary);
    padding: 1rem;
    border-radius: 0.3rem;
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
