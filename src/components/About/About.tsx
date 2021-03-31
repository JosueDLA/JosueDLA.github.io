import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaGithub,
  FaLinkedinIn,
  FaAngleDown,
  FaHackerrank,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Title from "../common/Title";
import SocialIcons, { SocialIconsItem } from "../common/SocialIcons";
import ScrollButton from "../common/ScrollButton";
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
            <StaticImage
              src="../../images/about/profile.jpg"
              alt="Code"
              placeholder="blurred"
              layout="fixed"
              width={230}
              height={230}
            />
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
          <SocialIconsItem
            to="https://www.hackerrank.com/josuedla"
            target="_blank"
            aria-label="Hackerrank"
            rel="noreferrer"
          >
            <FaHackerrank />
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
