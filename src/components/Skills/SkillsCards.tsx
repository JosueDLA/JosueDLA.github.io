import React from "react";
import { Banner, Card, CardTitle, CardDesc, CardRow } from "../common/Card";

export interface SkillsCardsProps {}

const SkillsCards: React.FC<SkillsCardsProps> = () => {
  return (
    <CardRow>
      <Card>
        <Banner>
          <svg viewBox="0 0 100 100"></svg>
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
          <svg viewBox="0 0 100 100"></svg>
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
          <svg viewBox="0 0 100 100"></svg>
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
