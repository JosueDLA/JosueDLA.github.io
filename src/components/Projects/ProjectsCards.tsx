import _ from "lodash";
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as ProjectCardItems from "Common/ProjectCard";
import ProjectLink from "Common/ProjectLink";

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
              "b80400a4-7b0d-579d-8612-642d141785e2"
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
              <ProjectLink
                demo={project.node.frontmatter.demo}
                slug={project.node.frontmatter.slug}
                title={project.node.frontmatter.title}
                className="left"
              >
                Demo
              </ProjectLink>
              <OutboundLink
                className="right"
                href={project.node.frontmatter.code}
                target="_blank"
                aria-label={`${project.node.frontmatter.title} Code`}
                rel="noreferrer"
              >
                Code
              </OutboundLink>
            </GroupButton>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectCardWrapper>
  );
};

export default ProjectCards;
