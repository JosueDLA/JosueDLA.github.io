import styled from "styled-components";

export const Hr = styled.div`
  position: relative;
  text-align: center;
  border-top: solid 2px ${(t) => t.theme.textPrimary};
  top: 1em;
  margin-top: 3em;
  margin-bottom: 3em;
`;
