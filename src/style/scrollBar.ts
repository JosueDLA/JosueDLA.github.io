import { css } from "styled-components";

const scrollBar = css`
  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
  }
`;

export default scrollBar;
