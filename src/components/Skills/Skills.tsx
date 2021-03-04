import React from "react";
import Title from "../common/Title";
import SkillsCards from "./SkillsCards";
import { SkillsWrapper } from "./SkillsItems";

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <SkillsWrapper id="skills" className="container">
      <Title text="Skills" />
      <SkillsCards />
    </SkillsWrapper>
  );
};

export default Skills;
