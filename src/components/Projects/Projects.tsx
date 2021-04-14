import React from "react";
import { ProjectsWrapper } from "Projects/ProjectsItems";
import ProjectCards from "Projects/ProjectsCards";
import Title from "Common/Title";

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <ProjectsWrapper id="featured" className="container">
      <Title text="Featured" />
      <ProjectCards />
    </ProjectsWrapper>
  );
};

export default Projects;
