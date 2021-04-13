import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as ProjectCardItems from "Common/ProjectCard";

export interface ProjectCardsProps {}

const ProjectCards: React.FC<ProjectCardsProps> = () => {
  const {
    ProjectCard,
    ProjectCardWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectContent,
    ProjectTags,
    GroupButton,
  } = ProjectCardItems;

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
          quality={100}
        />
        <ProjectContent>
          <ProjectTitle>Django Store</ProjectTitle>
          <ProjectDescription>
            Products section and API created with Django 3.1.
          </ProjectDescription>
          <ProjectTags>
            <a className="tag">Python</a>
            <a className="tag">Django</a>
            <a className="tag">Bootstrap</a>
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
          quality={100}
        />
        <ProjectContent>
          <ProjectTitle>Readme Creator</ProjectTitle>
          <ProjectDescription>
            Website to easily create Markdown files.
          </ProjectDescription>
          <ProjectTags>
            <a className="tag">HTML</a>
            <a className="tag">Bootstrap</a>
            <a className="tag">JavaScript</a>
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
          quality={100}
        />
        <ProjectContent>
          <ProjectTitle>MVC5 Store</ProjectTitle>
          <ProjectDescription>
            Product section of store that updates in real time.
          </ProjectDescription>
          <ProjectTags>
            <a className="tag">C#</a>
            <a className="tag">ASP.NET MVC</a>
            <a className="tag">Bootstrap</a>
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
          quality={100}
        />
        <ProjectContent>
          <ProjectTitle>Portfolio V1</ProjectTitle>
          <ProjectDescription>Previous personal portfolio.</ProjectDescription>
          <ProjectTags>
            <a className="tag">HTML</a>
            <a className="tag">CSS</a>
            <a className="tag">Bootstrap</a>
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
          quality={100}
        />
        <ProjectContent>
          <ProjectTitle>Twitter Bot</ProjectTitle>
          <ProjectDescription>
            Twitter bot that provides weather information.
          </ProjectDescription>
          <ProjectTags>
            <a className="tag">Python</a>
            <a className="tag">NumPy</a>
            <a className="tag">Pillow</a>
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
          quality={100}
        />
        <ProjectContent>
          <ProjectTitle>Ghibli Movies</ProjectTitle>
          <ProjectDescription>
            Landing page for Ghibli movies using Ghibli API.
          </ProjectDescription>
          <ProjectTags>
            <a className="tag">HTML</a>
            <a className="tag">CSS</a>
            <a className="tag">Bootstrap</a>
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
