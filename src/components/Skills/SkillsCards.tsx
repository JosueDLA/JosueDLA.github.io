import React from "react";
import { Banner, Card, CardTitle, CardDesc, CardRow } from "../common/Card";
import Image from "../common/Image";
import ImageGroup from "../common/ImageGroup";
import { SkillsImages } from "../../queries/Skills";

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
        <CardTitle>Title</CardTitle>
        <CardDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          pariatur error fugiat dolorum totam saepe sint soluta nam,
          consequuntur animi.
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
        <CardTitle>Title</CardTitle>
        <CardDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          pariatur error fugiat dolorum totam saepe sint soluta nam,
          consequuntur animi.
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
        <CardTitle>Title 3</CardTitle>
        <CardDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          pariatur error fugiat dolorum totam saepe sint soluta nam,
          consequuntur animi.
        </CardDesc>
      </Card>
    </CardRow>
  );
};

export default SkillsCards;
