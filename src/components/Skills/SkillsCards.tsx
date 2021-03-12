import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Banner, Card, CardTitle, CardDesc, CardRow } from "../common/Card";

export interface SkillsCardsProps {}

const SkillsCards: React.FC<SkillsCardsProps> = () => {
  return (
    <CardRow>
      <Card>
        <Banner>
          <StaticImage
            src="../../images/skills/code.png"
            alt="Code"
            placeholder="blurred"
            layout="fixed"
            width={160}
            height={160}
          />
        </Banner>
        <CardTitle>Programming</CardTitle>
        <CardDesc>
          Knowledge of multiple programming languages, always learning new
          skills and with great attention to detail.
        </CardDesc>
      </Card>

      <Card>
        <Banner>
          <StaticImage
            src="../../images/skills/server.png"
            alt="Server"
            placeholder="blurred"
            layout="fixed"
            width={160}
            height={160}
          />
        </Banner>
        <CardTitle>Servers &amp; DBMS</CardTitle>
        <CardDesc>
          Experience creating and managing SQL databases; Experience managing
          and configuring different types of servers.
        </CardDesc>
      </Card>

      <Card>
        <Banner>
          <StaticImage
            src="../../images/skills/api.png"
            alt="API"
            placeholder="blurred"
            layout="fixed"
            width={160}
            height={160}
          />
        </Banner>
        <CardTitle>Web API</CardTitle>
        <CardDesc>
          Experience structuring, consuming, and designing personalized web
          services build with different programming languages.
        </CardDesc>
      </Card>
    </CardRow>
  );
};

export default SkillsCards;
