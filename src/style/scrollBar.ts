import { css } from "styled-components";

const scrollBar = css`
  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${(t) => t.theme.bgSecondary};
  }

  body::-webkit-scrollbar-thumb {
    background: ${(t) => t.theme.accentPrimary};
  }
`;

export default scrollBar;
