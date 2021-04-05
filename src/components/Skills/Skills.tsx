import React from "react";
import Title from "Common/Title";
import SkillsCards from "Skills/SkillsCards";
import { SkillsWrapper } from "Skills/SkillsItems";

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
