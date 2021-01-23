import React from "react";
import Tittle from "../common/Tittle";
import SkillsCards from "./SkillsCards";
import { SkillsWrapper } from "./SkillsItems";

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <SkillsWrapper className="container">
      <Tittle text="Text" />
      <SkillsCards />
    </SkillsWrapper>
  );
};

export default Skills;
