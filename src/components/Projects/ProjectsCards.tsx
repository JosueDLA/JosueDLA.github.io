import _ from "lodash";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
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

  // Page Route
  const pathPrefix = `/projects/tags/`;

  const data = useStaticQuery(graphql`
    query FeaturedProjects {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: {
          fileAbsolutePath: { regex: "/(projects)/" }
          id: {
            in: [
              "cc5abf4e-bca4-571b-9daf-41d500c128ac"
              "eb2c86c0-0c46-530c-8252-115fa711e8d6"
              "1c402c1d-a364-561e-a27c-1e61a0123d1a"
            ]
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              excerpt
              slug
              title
              tags
              code
              demo
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    width: 290
                    height: 440
                    placeholder: BLURRED
                    layout: FIXED
                    quality: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allMdx.edges;

  return (
    <ProjectCardWrapper>
      {projects.map((project: any) => (
        <ProjectCard key={project.node.frontmatter.slug}>
          <GatsbyImage
            image={
              getImage(project.node.frontmatter.thumbnail) as IGatsbyImageData
            }
            alt="test"
          />
          <ProjectContent>
            <ProjectTitle>{project.node.frontmatter.title}</ProjectTitle>
            <ProjectDescription>
              {project.node.frontmatter.excerpt}
            </ProjectDescription>
            <ProjectTags>
              {project.node.frontmatter.tags.map((tag: string, i: number) => (
                <Link
                  key={i}
                  className="tag"
                  to={`${pathPrefix}${_.kebabCase(tag.toLowerCase())}`}
                >
                  {tag}
                </Link>
              ))}
            </ProjectTags>
            <GroupButton>
              <a
                className="left"
                href={
                  project.node.frontmatter.demo
                    ? project.node.frontmatter.demo
                    : `/`
                }
                target="_blank"
                aria-label="Readme Creator Demo"
                rel="noreferrer"
              >
                Demo
              </a>
              <a
                className="right"
                href={project.node.frontmatter.code}
                target="_blank"
                aria-label="Readme Creator Code"
                rel="noreferrer"
              >
                Code
              </a>
            </GroupButton>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectCardWrapper>
  );
};

export default ProjectCards;
