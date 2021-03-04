import React from "react";
import ImageGroup from "../common/ImageGroup";
import { SkillsImages } from "../../queries/Skills";
import { Banner, Card, CardTitle, CardDesc, CardRow } from "../common/Card";

export interface SkillsCardsProps {}

const SkillsCards: React.FC<SkillsCardsProps> = () => {
  return (
    <CardRow>
      <Card>
        <Banner>
          <ImageGroup
            query={SkillsImages}
            filename="code.png"
            className="card-img"
            alt="Code"
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
          <ImageGroup
            query={SkillsImages}
            filename="server.png"
            className="card-img"
            alt="Server"
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
          <ImageGroup
            query={SkillsImages}
            filename="api.png"
            className="card-img"
            alt="API"
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
