import React from "react";
import Image from "../common/Image";
import { ProfilePicture } from "../../queries/ProfilePicture";
import {
  PostCard,
  PostCardWrapper,
  PostTitle,
  PostDescription,
  PostContent,
  PostTags,
  Tag,
} from "../common/PostCard";

export interface ProjectCardsProps {}

const ProjectCards: React.FC<ProjectCardsProps> = () => {
  return (
    <PostCardWrapper>
      <PostCard>
        <Image hook={ProfilePicture} className="post-img" alt="code" />
        <PostContent>
          <PostTitle>HTML Syntax</PostTitle>
          <PostDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            assumenda.
          </PostDescription>
          <PostTags>
            <Tag>HTML</Tag>
          </PostTags>
        </PostContent>
      </PostCard>
    </PostCardWrapper>
  );
};

export default ProjectCards;
