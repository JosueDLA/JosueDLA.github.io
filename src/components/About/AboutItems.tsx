import styled from "styled-components";

export const AboutWrapper = styled.section`
  background: var(--bg-primary);
  height: 100%;
  min-height: 100vh;
  padding-top: 3.5rem;

  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

export const AboutBg = styled.div`
  background: var(--bg-secondary);
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
  text-align: justify;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 5px solid #fff;
  background: #000;
  margin: 3rem;
  flex-shrink: 0;
  overflow: hidden;

  .profile-img {
    height: 100%;
  }
`;

export const AboutP = styled.p`
  margin: 3rem 0;
`;
