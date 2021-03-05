import React from "react";
import ImageGroup from "../common/ImageGroup";
import { ProjectsImages } from "../../queries/Projects";
import {
  PostCard,
  PostCardWrapper,
  PostTitle,
  PostDescription,
  PostContent,
  PostTags,
  Tag,
  LeftButton,
  RightButton,
  GroupButton,
} from "../common/PostCard";

export interface ProjectCardsProps {}

const ProjectCards: React.FC<ProjectCardsProps> = () => {
  return (
    <PostCardWrapper>
      <PostCard>
        <ImageGroup
          query={ProjectsImages}
          filename="django.png"
          className="post-img"
          alt="Server"
        />
        <PostContent>
          <PostTitle>Django Store</PostTitle>
          <PostDescription>
            Products section and API created with Django 3.1.
          </PostDescription>
          <PostTags>
            <Tag>Python</Tag>
            <Tag>Django</Tag>
            <Tag>Bootstrap</Tag>
          </PostTags>
          <GroupButton>
            <LeftButton>Left</LeftButton>
            <RightButton>Right</RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>
      <PostCard>
        <ImageGroup
          query={ProjectsImages}
          filename="javascript.png"
          className="post-img"
          alt="Server"
        />
        <PostContent>
          <PostTitle>Readme Creator</PostTitle>
          <PostDescription>
            Website to easily create Markdown files.
          </PostDescription>
          <PostTags>
            <Tag>HTML</Tag>
            <Tag>Bootstrap</Tag>
            <Tag>JavaScript</Tag>
          </PostTags>
          <GroupButton>
            <LeftButton>Left</LeftButton>
            <RightButton>Right</RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>
      <PostCard>
        <ImageGroup
          query={ProjectsImages}
          filename="c-sharp.png"
          className="post-img"
          alt="Server"
        />
        <PostContent>
          <PostTitle>MVC5 Store</PostTitle>
          <PostDescription>
            Product section of store that updates in real time.
          </PostDescription>
          <PostTags>
            <Tag>C#</Tag>
            <Tag>ASP.NET MVC</Tag>
            <Tag>Bootstrap</Tag>
          </PostTags>
          <GroupButton>
            <LeftButton>Left</LeftButton>
            <RightButton>Right</RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>
      <PostCard>
        <ImageGroup
          query={ProjectsImages}
          filename="javascript.png"
          className="post-img"
          alt="Server"
        />
        <PostContent>
          <PostTitle>Portfolio V1</PostTitle>
          <PostDescription>Previous personal portfolio.</PostDescription>
          <PostTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Bootstrap</Tag>
          </PostTags>
          <GroupButton>
            <LeftButton>Left</LeftButton>
            <RightButton>Right</RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>

      <PostCard>
        <ImageGroup
          query={ProjectsImages}
          filename="python.png"
          className="post-img"
          alt="Server"
        />
        <PostContent>
          <PostTitle>Twitter Bot</PostTitle>
          <PostDescription>
            Twitter bot that provides weather information.
          </PostDescription>
          <PostTags>
            <Tag>Python</Tag>
            <Tag>NumPy</Tag>
            <Tag>Pillow</Tag>
          </PostTags>
          <GroupButton>
            <LeftButton>Left</LeftButton>
            <RightButton>Right</RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>
      <PostCard>
        <ImageGroup
          query={ProjectsImages}
          filename="javascript.png"
          className="post-img"
          alt="Server"
        />
        <PostContent>
          <PostTitle>Ghibli Movies</PostTitle>
          <PostDescription>
            Landing page for Ghibli movies using Ghibli API.
          </PostDescription>
          <PostTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Bootstrap</Tag>
          </PostTags>
          <GroupButton>
            <LeftButton>Left</LeftButton>
            <RightButton>Right</RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>
    </PostCardWrapper>
  );
};

export default ProjectCards;
