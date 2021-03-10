import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Pagination from "../components/common/Pagination";
import ImageGroup from "../components/common/ImageGroup";
import { ProjectsImages } from "../queries/Projects";
import SVG from "../components/common/Svg";
import UnderConstructionImg from "../images/svg/under-construction.svg";
import SEO from "../components/common/Seo";
import {
  DescriptionWrapper,
  ImageWrapper,
  PostCard,
  PostCardWrapper,
  PostTitle,
  PostDescription,
} from "../components/Blog/PostCard";

export interface AllPostsProps {
  pageContext: IPageContext;
  data: IData;
}

interface IData {
  allMdx: {
    edges: [
      node: {
        frontmatter: {
          date: string;
          excerpt: string;
          slug: string;
          title: string;
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
}

const AllPosts: React.FC<AllPostsProps> = ({ pageContext, data }) => {
  // Page Route
  const pagePath = "/blog/";

  // Pagination props
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previous =
    currentPage - 1 === 1 ? `${pagePath}` : `${pagePath}${currentPage - 1}`;
  const next = `${pagePath}${currentPage + 1}`;

  // Remove test blog post
  const posts = data.allMdx.edges.filter(
    (post: any) => post.node.frontmatter.slug !== "hello-world"
  );

  if (posts.length > 0) {
    return (
      <Layout>
        <SEO title="Blog" />
        <main className="container">
          <h1>AllPosts</h1>
          <PostCardWrapper>
            {posts.map((post: any) => (
              <PostCard key={post.node.frontmatter.slug}>
                <ImageWrapper>
                  <ImageGroup
                    query={ProjectsImages}
                    filename="django.png"
                    className="post-img"
                    alt="Server"
                  />
                </ImageWrapper>
                <DescriptionWrapper>
                  <PostTitle>{post.node.frontmatter.title}</PostTitle>
                  <PostDescription>
                    {post.node.frontmatter.excerpt}
                    <br />
                    {post.node.frontmatter.date}
                  </PostDescription>
                  <Link to={post.node.frontmatter.slug} className="post-link">
                    Read More
                  </Link>
                </DescriptionWrapper>
              </PostCard>
            ))}
          </PostCardWrapper>

          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            previousPage={previous}
            nextPage={next}
          />
        </main>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <SEO title="Blog" />
        <SVG
          text="Blog Under Construction"
          image={UnderConstructionImg}
          alt="Web Construction"
        />
      </Layout>
    );
  }
};

export default AllPosts;

export const pageQuery = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
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
          }
        }
      }
    }
  }
`;
