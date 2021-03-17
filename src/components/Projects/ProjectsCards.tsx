import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  ProjectCard,
  ProjectCardWrapper,
  ProjectTitle,
  ProjectDescription,
  ProjectContent,
  ProjectTags,
  Tag,
  GroupButton,
} from "../common/ProjectCard";

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
          className="project-img"
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
            <a
              className="left"
              href="https://peaceful-chamber-64971.herokuapp.com/"
              target="_blank"
              aria-label="Django Store Demo"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="right"
              href="https://github.com/JosueDLA/django-store/"
              target="_blank"
              aria-label="Django Store Code"
              rel="noreferrer"
            >
              Code
            </a>
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
          className="project-img"
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
            <a
              className="left"
              href="https://josuedla.github.io/readme-creator/"
              target="_blank"
              aria-label="Readme Creator Demo"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="right"
              href="https://github.com/JosueDLA/readme-creator/"
              target="_blank"
              aria-label="Readme Creator Code"
              rel="noreferrer"
            >
              Code
            </a>
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
          className="project-img"
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
            <Link className="left" to="/projects/real-time-store/">
              Demo
            </Link>
            <a
              className="right"
              href="https://github.com/JosueDLA/real-time-store/"
              target="_blank"
              aria-label="MVC Store Code"
              rel="noreferrer"
            >
              Code
            </a>
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
          className="project-img"
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
            <a
              className="left"
              href="https://josuedla.github.io/portfolio-v1/"
              target="_blank"
              aria-label="Portfolio V1 Demo"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="right"
              href="https://github.com/JosueDLA/portfolio-v1/"
              target="_blank"
              aria-label="Portfolio V1 Code"
              rel="noreferrer"
            >
              Code
            </a>
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
          className="project-img"
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
            <Link className="left" to="/projects/weather-bot/">
              Demo
            </Link>
            <a
              className="right"
              href="https://github.com/JosueDLA/weather-bot/"
              target="_blank"
              aria-label="Twitter Bot Code"
              rel="noreferrer"
            >
              Code
            </a>
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
          className="project-img"
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
            <a
              className="left"
              href="https://josuedla.github.io/ghibli-movies/"
              target="_blank"
              aria-label="Ghibli Movies Demo"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              className="right"
              href="https://github.com/JosueDLA/ghibli-movies/"
              target="_blank"
              aria-label="Ghibli Movies Code"
              rel="noreferrer"
            >
              Code
            </a>
          </GroupButton>
        </ProjectContent>
      </ProjectCard>
    </ProjectCardWrapper>
  );
};

export default ProjectCards;
