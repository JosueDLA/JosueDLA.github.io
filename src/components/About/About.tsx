import React from "react";
import { FaGithub, FaLinkedinIn, FaAngleDown } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Title from "../common/Title";
import Image from "../../components/common/Image";
import SocialIcons, { SocialIconsItem } from "../common/SocialIcons";
import ScrollButton from "../common/ScrollButton";
import { ProfilePicture } from "../../queries/ProfilePicture";
import {
  AboutWrapper,
  AboutContainer,
  ImgContainer,
  AboutP,
  AboutBg,
  AboutUl,
  AboutLi,
} from "./AboutItems";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <AboutWrapper id="about">
      <div className="container title">
        <Title text="About" />
      </div>
      <AboutBg>
        <AboutContainer className="container">
          <ImgContainer>
            <Image hook={ProfilePicture} className="profile-img" alt="code" />
          </ImgContainer>
          <AboutP>
            Hello! I’m Josué. <br />
            <br />
            I’m a software developer, with a bachelor’s degree in System
            engineering from Mariano Gálvez University in Guatemala. I'm
            passionate about creating new software with which I can solve
            problems and create new experiences. <br />
            <br />
            Here are some of the technologies I've been working with recently:
            <AboutUl>
              <AboutLi>JavaScript</AboutLi>
              <AboutLi>React</AboutLi>
              <AboutLi>Python</AboutLi>
              <AboutLi>Django</AboutLi>
              <AboutLi>HTML &amp; CSS</AboutLi>
              <AboutLi>Bootstrap</AboutLi>
              <AboutLi>C#</AboutLi>
              <AboutLi>ASP.NET</AboutLi>
            </AboutUl>
          </AboutP>
        </AboutContainer>

        <SocialIcons>
          <SocialIconsItem
            to="mailto:josuedlavs@gmail.com"
            target="_blank"
            aria-label="Email"
            rel="noreferrer"
          >
            <GrMail />
          </SocialIconsItem>
          <SocialIconsItem
            to="https://github.com/JosueDLA"
            target="_blank"
            aria-label="GitHub"
            rel="noreferrer"
          >
            <FaGithub />
          </SocialIconsItem>
          <SocialIconsItem
            to="https://www.linkedin.com/in/josuedla/"
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
