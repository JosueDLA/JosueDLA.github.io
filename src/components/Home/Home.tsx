import React from "react";
import { FaAngleDown } from "react-icons/fa";
import ScrollButton from "Common/ScrollButton";
import * as HomeItems from "Home/HomeItems";
import video from "Videos/video.mp4";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const {
    HomeContainer,
    HomeBg,
    HomeContent,
    HomeH1,
    HomeP,
    VideoBg,
  } = HomeItems;

  return (
    <HomeContainer id="home">
      <HomeBg>
        <VideoBg autoPlay loop muted src={video} />
      </HomeBg>
      <HomeContent>
        <HomeH1>Josué de León</HomeH1>
        <HomeP>Software Developer</HomeP>
        <ScrollButton to="about">
          <FaAngleDown />
        </ScrollButton>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
