import styled from "styled-components";

export const AboutWrapper = styled.section`
  background: ${(t) => t.theme.bgPrimary};
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 0;
  flex-direction: column;

  @media (max-width: 1495px) {
    padding-top: 3.5rem;
    align-items: flex-start;
  }

  @media screen and (max-width: 960px) {
    padding-top: 3.5rem;
    align-items: flex-start;
    margin: 0;
  }
`;

export const AboutBg = styled.div`
  background: ${(t) => t.theme.bgSecondary};
  padding: 4rem 0;
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);

  @media screen and (max-width: 960px) {
    clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0 100%);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 230px;
  max-width: 230px;
  max-height: 230px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  background: #000;
  margin-right: 3rem;
  margin: 0;
  flex: 30%;

  &:before {
    content: "";
    padding-bottom: 100%;
  }

  @media screen and (max-width: 960px) {
    margin-right: 0;
  }
`;

export const AboutP = styled.p`
  flex: 70%;
  margin: 3rem 0;
`;
