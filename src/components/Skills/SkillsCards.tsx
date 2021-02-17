import React from "react";
import { Banner, Card, CardTitle, CardDesc, CardRow } from "../common/Card";
import Image from "../common/Image";
import { CodeSkills } from "../../queries/CodeSkills";
import { ServerSkills } from "../../queries/ServerSkills";
import { ApiSkills } from "../../queries/ApiSkills";

export interface SkillsCardsProps {}

const SkillsCards: React.FC<SkillsCardsProps> = () => {
  return (
    <CardRow>
      <Card>
        <Banner>
          <Image hook={CodeSkills} className="card-img" alt="Code" />
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
          <Image hook={ServerSkills} className="card-img" alt="Code" />
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
          <Image hook={ApiSkills} className="card-img" alt="Code" />
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
