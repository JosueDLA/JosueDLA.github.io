import styled from "styled-components";
import { noSelect } from "Style/noSelect";

export const HomeContainer = styled.section`
  background: var(--bg-video);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  margin-top: -3.5rem;
  ${noSelect}
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.4;
`;

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.3;
`;

export const HomeContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeH1 = styled.h1`
  padding: 0;
  margin: 0;
  font-family: "Rubik", sans-serif;
  color: #fff;
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  text-shadow: 3px 1px 4px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 4rem;
  }
`;

export const HomeP = styled.p`
  margin-top: 0;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
