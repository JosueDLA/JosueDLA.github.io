import React from "react";
import Title from "../common/Title";
import { ProjectsWrapper } from "./ProjectsItems";
import ProjectCards from "./ProjectsCards";

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <ProjectsWrapper id="projects" className="container">
      <Title text="Projects" />
      <ProjectCards />
    </ProjectsWrapper>
  );
};

export default Projects;
