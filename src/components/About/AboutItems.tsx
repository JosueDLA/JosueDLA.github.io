import styled from "styled-components";

export const AboutWrapper = styled.div`
  background: ${(t) => t.theme.bgSecondary};
  padding: 4rem 0;
  text-align: center;
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);

  @media screen and (max-width: 768px) {
    clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0 100%);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  background-color: #000;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 2rem;
  }
`;

export const AboutP = styled.p`
  flex: 2;
  margin: 3rem 0;
`;
