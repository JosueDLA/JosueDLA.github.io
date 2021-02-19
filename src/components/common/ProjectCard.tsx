import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { ProfilePicture } from "./../../queries/ProfilePicture";

export const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;

export const ProjectCardImageWrapper = styled.div`
  grid-column: 1 / 8;
  grid-row: 1;
  width: 100%;
  background: red;
`;

export const ProjectCardDescriptionWrapper = styled.div`
  grid-column: 7 / -1;
  grid-row: 1;
  width: 100%;
  z-index: 1;
`;

export const ProjectOverline = styled.h3`
  margin: 10px 0;
  text-align: right;
  font-size: 0.8rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
`;

export const ProjectdDescription = styled.p`
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 0.3rem;
`;

export const ProjectTags = styled.p`
  text-align: right;
`;

export const ProjectLinks = styled.p`
  text-align: right;
  border-radius: 0.3rem;
  height: 30px;
`;

export interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
    <ProjectCardWrapper>
      <ProjectCardImageWrapper>
        <Image hook={ProfilePicture} className="project-img" alt="code" />
      </ProjectCardImageWrapper>
      <ProjectCardDescriptionWrapper>
        <ProjectOverline>Featured</ProjectOverline>
        <ProjectTitle>Title</ProjectTitle>
        <ProjectdDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          pariatur aperiam iure voluptas? Ratione architecto deserunt possimus
          ut sapiente sit!
        </ProjectdDescription>
        <ProjectTags>Item1 Item2 Item3</ProjectTags>
        <ProjectLinks>Links</ProjectLinks>
      </ProjectCardDescriptionWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
