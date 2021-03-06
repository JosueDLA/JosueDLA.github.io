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
            <LeftButton
              href="https://peaceful-chamber-64971.herokuapp.com/"
              target="_blank"
              aria-label="Django Store Demo"
              rel="noreferrer"
            >
              Demo
            </LeftButton>
            <RightButton
              href="https://github.com/JosueDLA/DjangoStore"
              target="_blank"
              aria-label="Django Store Code"
              rel="noreferrer"
            >
              Code
            </RightButton>
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
            <LeftButton
              href="https://josuedla.github.io/ReadmeCreator/"
              target="_blank"
              aria-label="Readme Creator Demo"
              rel="noreferrer"
            >
              Demo
            </LeftButton>
            <RightButton
              href="https://github.com/JosueDLA/ReadmeCreator"
              target="_blank"
              aria-label="Readme Creator Code"
              rel="noreferrer"
            >
              Code
            </RightButton>
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
            <LeftButton
              href="https://josuedla.github.io/RealTimeStore/"
              target="_blank"
              aria-label="MVC Store Demo"
              rel="noreferrer"
            >
              Demo
            </LeftButton>
            <RightButton
              href="https://github.com/JosueDLA/RealTimeStore/"
              target="_blank"
              aria-label="MVC Store Code"
              rel="noreferrer"
            >
              Code
            </RightButton>
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
            <LeftButton
              href="https://josuedla.github.io/portfolio-v1/"
              target="_blank"
              aria-label="Portfolio V1 Demo"
              rel="noreferrer"
            >
              Demo
            </LeftButton>
            <RightButton
              href="https://github.com/JosueDLA/portfolio-v1"
              target="_blank"
              aria-label="Portfolio V1 Code"
              rel="noreferrer"
            >
              Code
            </RightButton>
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
            <LeftButton
              href="https://josuedla.github.io/WeatherBot/"
              target="_blank"
              aria-label="Twitter Bot Demo"
              rel="noreferrer"
            >
              Demo
            </LeftButton>
            <RightButton
              href="https://github.com/JosueDLA/WeatherBot/"
              target="_blank"
              aria-label="Twitter Bot Code"
              rel="noreferrer"
            >
              Code
            </RightButton>
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
            <LeftButton
              href="https://josuedla.github.io/GhibliMovies/"
              target="_blank"
              aria-label="Ghibli Movies Demo"
              rel="noreferrer"
            >
              Demo
            </LeftButton>
            <RightButton
              href="https://github.com/JosueDLA/GhibliMovies"
              target="_blank"
              aria-label="Ghibli Movies Code"
              rel="noreferrer"
            >
              Code
            </RightButton>
          </GroupButton>
        </PostContent>
      </PostCard>
    </PostCardWrapper>
  );
};

export default ProjectCards;
