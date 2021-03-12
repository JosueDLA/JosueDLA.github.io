import React from "react";
import {
  ProjectCard,
  ProjectCardWrapper,
  ProjectTitle,
  ProjectDescription,
  ProjectContent,
  ProjectTags,
  Tag,
  LeftButton,
  RightButton,
  GroupButton,
} from "../common/ProjectCard";
import { StaticImage } from "gatsby-plugin-image";

export interface ProjectCardsProps {}

const ProjectCards: React.FC<ProjectCardsProps> = () => {
  return (
    <ProjectCardWrapper>
      <ProjectCard>
        <StaticImage
          src="../../images/projects/django.png"
          alt="Django Code"
          placeholder="blurred"
          layout="fixed"
          width={290}
          height={440}
        />
        <ProjectContent>
          <ProjectTitle>Django Store</ProjectTitle>
          <ProjectDescription>
            Products section and API created with Django 3.1.
          </ProjectDescription>
          <ProjectTags>
            <Tag>Python</Tag>
            <Tag>Django</Tag>
            <Tag>Bootstrap</Tag>
          </ProjectTags>
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
        </ProjectContent>
      </ProjectCard>
      <ProjectCard>
        <StaticImage
          src="../../images/projects/javascript.png"
          alt="Javascript Code"
          placeholder="blurred"
          layout="fixed"
          width={290}
          height={430}
          className="post-img"
        />
        <ProjectContent>
          <ProjectTitle>Readme Creator</ProjectTitle>
          <ProjectDescription>
            Website to easily create Markdown files.
          </ProjectDescription>
          <ProjectTags>
            <Tag>HTML</Tag>
            <Tag>Bootstrap</Tag>
            <Tag>JavaScript</Tag>
          </ProjectTags>
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
        </ProjectContent>
      </ProjectCard>
      <ProjectCard>
        <StaticImage
          src="../../images/projects/c-sharp.png"
          alt="C Sharp Code"
          placeholder="blurred"
          layout="fixed"
          width={290}
          height={430}
        />
        <ProjectContent>
          <ProjectTitle>MVC5 Store</ProjectTitle>
          <ProjectDescription>
            Product section of store that updates in real time.
          </ProjectDescription>
          <ProjectTags>
            <Tag>C#</Tag>
            <Tag>ASP.NET MVC</Tag>
            <Tag>Bootstrap</Tag>
          </ProjectTags>
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
        </ProjectContent>
      </ProjectCard>
      <ProjectCard>
        <StaticImage
          src="../../images/projects/javascript.png"
          alt="Javascript Code"
          placeholder="blurred"
          layout="fixed"
          width={290}
          height={430}
        />
        <ProjectContent>
          <ProjectTitle>Portfolio V1</ProjectTitle>
          <ProjectDescription>Previous personal portfolio.</ProjectDescription>
          <ProjectTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Bootstrap</Tag>
          </ProjectTags>
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
        </ProjectContent>
      </ProjectCard>

      <ProjectCard>
        <StaticImage
          src="../../images/projects/python.png"
          alt="Python Code"
          placeholder="blurred"
          layout="fixed"
          width={290}
          height={430}
        />
        <ProjectContent>
          <ProjectTitle>Twitter Bot</ProjectTitle>
          <ProjectDescription>
            Twitter bot that provides weather information.
          </ProjectDescription>
          <ProjectTags>
            <Tag>Python</Tag>
            <Tag>NumPy</Tag>
            <Tag>Pillow</Tag>
          </ProjectTags>
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
        </ProjectContent>
      </ProjectCard>
      <ProjectCard>
        <StaticImage
          src="../../images/projects/javascript.png"
          alt="Javascript Code"
          placeholder="blurred"
          layout="fixed"
          width={290}
          height={430}
          className="post-img"
        />
        <ProjectContent>
          <ProjectTitle>Ghibli Movies</ProjectTitle>
          <ProjectDescription>
            Landing page for Ghibli movies using Ghibli API.
          </ProjectDescription>
          <ProjectTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Bootstrap</Tag>
          </ProjectTags>
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
        </ProjectContent>
      </ProjectCard>
    </ProjectCardWrapper>
  );
};

export default ProjectCards;
