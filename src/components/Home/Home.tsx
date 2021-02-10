import React from "react";
import video from "../../videos/video.mp4";
import ScrollButton from "../common/ScrollButton";
import { FaAngleDown } from "react-icons/fa";
import {
  HomeContainer,
  HomeBg,
  HomeContent,
  HomeH1,
  HomeP,
  VideoBg,
} from "./HomeItems";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={video} />
      </HomeBg>
      <HomeContent>
        <HomeH1>Josué de León</HomeH1>
        <HomeP>Software Devloper</HomeP>
        <ScrollButton to="about">
          <FaAngleDown />
        </ScrollButton>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
