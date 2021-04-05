import React from "react";
import { ProjectsWrapper } from "Projects/ProjectsItems";
import ProjectCards from "Projects/ProjectsCards";
import Title from "Common/Title";

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
