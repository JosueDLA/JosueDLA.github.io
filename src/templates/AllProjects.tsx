import _ from "lodash";
import React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as ProjectCardItems from "Common/ProjectCard";
import Pagination from "Common/Pagination";
import Layout from "Layout/Layout";
import SEO from "Common/Seo";

export interface AllProjectsProps {
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

const AllProjects: React.FC<AllProjectsProps> = ({
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
          .replace(`${currentPage}`, "")
          .replace("//", "/");
  const pathPrefix = `${pagePath}tags/`.replace("//", "/");

  // Pagination props
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previous =
    currentPage - 1 === 1 ? `${pagePath}` : `${pagePath}${currentPage - 1}`;
  const next = `${pagePath}${currentPage + 1}`;
  const projects = data.allMdx.edges;

  console.log("projects :>> ", projects);

  return (
    <Layout>
      <SEO title="Projects" location={location} />
      <main id="projects-main" className="container">
        <h1>Projects</h1>
        <ProjectCardWrapper>
          {projects.map((project: any) => (
            <ProjectCard key={project.node.frontmatter.slug}>
              <StaticImage
                src="../images/projects/django.png"
                alt="Django Code"
                placeholder="blurred"
                layout="fixed"
                width={290}
                height={440}
                className="project-img"
                quality={100}
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
                  <a
                    className="left"
                    href={
                      project.node.frontmatter.demo
                        ? project.node.frontmatter.demo
                        : `${pagePath}${project.node.frontmatter.slug}`
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

export default AllProjects;

export const pageQuery = graphql`
  query AllProjects($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            thumbnail
            slug
            title
            tags
            code
            demo
          }
        }
      }
    }
  }
`;
