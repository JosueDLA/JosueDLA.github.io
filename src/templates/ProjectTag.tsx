import _ from "lodash";
import React from "react";
import { Link, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as ProjectCardItems from "Common/ProjectCard";
import ProjectLink from "Common/ProjectLink";
import Pagination from "Common/Pagination";
import { AllPostTitle } from "Blog/Post";
import Layout from "Layout/Layout";
import SEO from "Common/Seo";

export interface ProjectTagProps {
  pageContext: IPageContext;
  data: IData;
  location: { pathname: string };
}

interface IData {
  allMdx: {
    edges: [
      node: {
        frontmatter: {
          date: string;
          excerpt: string;
          thumbnail: string;
          slug: string;
          title: string;
          tags: Array<string>;
          code: string;
          demo: string;
        };
      }
    ];
  };
}

interface IPageContext {
  currentPage: number;
  limit: number;
  numPages: number;
  skip: number;
  folder: string;
  tag: string;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  pageContext,
  data,
  location,
}) => {
  const {
    ProjectCardWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectTags,
    GroupButton,
    ProjectCard,
    ProjectContent,
  } = ProjectCardItems;

  // Page Route
  const { currentPage, numPages } = pageContext;
  const pagePath =
    currentPage === 1
      ? `${location.pathname}/`.replace("//", "/")
      : `${location.pathname}/`
          .replace(`/${currentPage}`, "/")
          .replace("//", "/");
  const pathPrefix = location.pathname
    .replace(_.kebabCase(pageContext.tag.toLowerCase()), "")
    .replace("//", "/");

  // Pagination props
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previous =
    currentPage - 1 === 1 ? `${pagePath}` : `${pagePath}${currentPage - 1}`;
  const next = `${pagePath}${currentPage + 1}`;
  const projects = data.allMdx.edges;

  return (
    <Layout>
      <SEO title={pageContext.tag} location={location} />
      <main id="projects-main" className="container">
        <AllPostTitle>{pageContext.tag}</AllPostTitle>
        <ProjectCardWrapper style={{ padding: "2rem 0" }}>
          {projects.map((project: any) => (
            <ProjectCard key={project.node.frontmatter.slug}>
              <GatsbyImage
                image={
                  getImage(
                    project.node.frontmatter.thumbnail
                  ) as IGatsbyImageData
                }
                alt="test"
              />
              <ProjectContent>
                <ProjectTitle>{project.node.frontmatter.title}</ProjectTitle>
                <ProjectDescription>
                  {project.node.frontmatter.excerpt}
                </ProjectDescription>
                <ProjectTags>
                  {project.node.frontmatter.tags.map(
                    (tag: string, i: number) => (
                      <Link
                        key={i}
                        className="tag"
                        to={`${pathPrefix}${_.kebabCase(tag.toLowerCase())}`}
                      >
                        {tag}
                      </Link>
                    )
                  )}
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
                    aria-label="Readme Creator Code"
                    rel="noreferrer"
                  >
                    Code
                  </OutboundLink>
                </GroupButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectCardWrapper>
        <div style={{ flexGrow: 1 }}></div>
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          previousPage={previous}
          nextPage={next}
        />
      </main>
    </Layout>
  );
};

export default ProjectTag;

export const pageQuery = graphql`
  query BlogTag($skip: Int!, $limit: Int!, $tag: String, $folder: String) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        fileAbsolutePath: { regex: $folder }
        frontmatter: { tags: { in: [$tag] } }
      }
      limit: $limit
      skip: $skip
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
`;
