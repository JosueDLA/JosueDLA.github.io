import styled from "styled-components";

export const AboutWrapper = styled.section`
  background: var(--bg-primary);
  height: 100%;
  min-height: 100vh;
  padding-top: 3.5rem;

  .title {
    background: inherit;
  }

  @media screen and (${({ theme }) => theme.media.large}) {
    margin: 0;
  }
`;

export const AboutBg = styled.div`
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 4rem 0;
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);

  @media screen and (${({ theme }) => theme.media.large}) {
    clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0 100%);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ul {
    text-align: justify;
  }

  @media screen and (${({ theme }) => theme.media.large}) {
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

export const AboutP = styled.div`
  padding: 0.5rem;
  padding-top: 3rem;
`;

export const AboutUl = styled.ul`
  columns: 2;
  padding: 0 4rem;

  @media screen and (${({ theme }) => theme.media.small}) {
    padding: 0;
  }
`;

export const AboutLi = styled.li`
  list-style: none;
  padding: 0.3rem;

  &:before {
    content: "►";
    color: var(--accent-primary);
    padding-right: 0.2rem;
    font-size: 1.3rem;
  }
`;
