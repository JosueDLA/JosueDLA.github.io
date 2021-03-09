import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { ProfilePicture } from "../../queries/ProfilePicture";

export const DisplayCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`;

export const DisplayCardImageWrapper = styled.div`
  grid-column: 1 / 8;
  grid-row: 1;
  width: 100%;
  background: red;
`;

export const DisplayCardDescriptionWrapper = styled.div`
  grid-column: 7 / -1;
  grid-row: 1;
  width: 100%;
  z-index: 1;
`;

export const DisplayOverline = styled.h3`
  margin: 10px 0;
  text-align: right;
  font-size: 0.8rem;
`;

export const DisplayTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
`;

export const DisplaydDescription = styled.p`
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 0.3rem;
`;

export const DisplayTags = styled.p`
  text-align: right;
`;

export const DisplayLinks = styled.p`
  text-align: right;
  border-radius: 0.3rem;
  height: 30px;
`;

export interface DisplayCardProps {}

const DisplayCard: React.FC<DisplayCardProps> = () => {
  return (
    <DisplayCardWrapper>
      <DisplayCardImageWrapper>
        <Image hook={ProfilePicture} className="project-img" alt="code" />
      </DisplayCardImageWrapper>
      <DisplayCardDescriptionWrapper>
        <DisplayOverline>Featured</DisplayOverline>
        <DisplayTitle>Title</DisplayTitle>
        <DisplaydDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          pariatur aperiam iure voluptas? Ratione architecto deserunt possimus
          ut sapiente sit!
        </DisplaydDescription>
        <DisplayTags>Item1 Item2 Item3</DisplayTags>
        <DisplayLinks>Links</DisplayLinks>
      </DisplayCardDescriptionWrapper>
    </DisplayCardWrapper>
  );
};

export default DisplayCard;
