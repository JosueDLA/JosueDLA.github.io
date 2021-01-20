import React from "react";
import Tittle from "./../common/Tittle";
import {
  AboutWrapper,
  AboutContainer,
  ImgContainer,
  AboutP,
} from "./AboutItems";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <React.Fragment>
      <AboutWrapper id="about">
        <Tittle text="About" />
        <AboutContainer className="container">
          <ImgContainer></ImgContainer>
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
      </AboutWrapper>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default About;
