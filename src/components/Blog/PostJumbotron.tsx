import styled from "styled-components";

export const PostJumbotron = styled.aside`
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: baseline;
  width: 100%;
  background-color: var(--bg-secondary);

  header {
    position: relative;
    max-width: 640px;
    padding: 35px 10px 30px 10px;
    margin: 0 auto;
    color: var(--text-primary);
  }

  h1 {
    font-size: 42;
    font-weight: 700;
    margin: 0;

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }

    @media screen and (max-width: 320px) {
      font-size: 28px;
    }
  }

  h2 {
    font-size: 24;
    margin: 10px 0;
    padding: 0 0 10px;
  }
`;
