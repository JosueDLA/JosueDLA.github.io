import React from "react";
import { FaGithub, FaLinkedinIn, FaAngleDown } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Title from "../common/Title";
import Image from "../../components/common/Image";
import SocialIcons, { SocialIconsItem } from "../common/SocialIcons";
import ScrollButton from "../common/ScrollButton";
import { useProfilePicture } from "./../../hooks/useImages";
import {
  AboutWrapper,
  AboutContainer,
  ImgContainer,
  AboutP,
  AboutBg,
} from "./AboutItems";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <AboutWrapper id="about">
      <Title className="container" text="About" />
      <AboutBg>
        <AboutContainer className="container">
          <ImgContainer>
            <Image
              hook={useProfilePicture}
              className="profile-img"
              alt="code"
            />
          </ImgContainer>
          <AboutP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            numquam officiis magni atque voluptas quo quibusdam mollitia error
            voluptates, maxime repellat est soluta molestiae consequuntur.
            Pariatur est adipisci aperiam numquam minima, sed fugiat id possimus
            fuga veniam, cumque ratione. Aliquam tempore vero, obcaecati iure
            quas mollitia maiores ea ut ducimus. Enim dolorum eum natus velit
            nulla facere, cum fuga esse exercitationem debitis reprehenderit.
            Repellendus, ducimus impedit vel quidem distinctio temporibus
            reprehenderit ad animi cumque modi, consequatur, adipisci obcaecati
            tempore non accusamus voluptatum vero culpa dolores libero odio
            nostrum doloribus! Sint pariatur possimus eum aut aliquam. Pariatur
            nobis corrupti quas beatae.
          </AboutP>
        </AboutContainer>

        <SocialIcons>
          <SocialIconsItem
            to="mailto:example@example.com"
            target="_blank"
            aria-label="Email"
            rel="noreferrer"
          >
            <GrMail />
          </SocialIconsItem>
          <SocialIconsItem
            to="https://github.com/"
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer"
          >
            <FaGithub />
          </SocialIconsItem>
          <SocialIconsItem
            to="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </SocialIconsItem>
        </SocialIcons>
        <ScrollButton to="skills">
          <FaAngleDown />
        </ScrollButton>
      </AboutBg>
    </AboutWrapper>
  );
};

export default About;
