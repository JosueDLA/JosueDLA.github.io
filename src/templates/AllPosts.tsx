import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Pagination from "../components/common/Pagination";
import SVG from "../components/common/Svg";
import UnderConstructionImg from "../images/svg/under-construction.svg";
import SEO from "../components/common/Seo";
import { AllPostTitle } from "../components/Blog/Post";
import {
  DescriptionWrapper,
  PostCard,
  PostCardWrapper,
  PostTitle,
  PostDescription,
} from "../components/Blog/PostCard";

export interface AllPostsProps {
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

const AllPosts: React.FC<AllPostsProps> = ({ pageContext, data, location }) => {
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
  const posts = data.allMdx.edges;

  if (posts.length > 0) {
    return (
      <Layout>
        <SEO title="Blog" location={location} />
        <main id="blog-main" className="container">
          <AllPostTitle>Blog</AllPostTitle>
          <PostCardWrapper>
            {posts.map((post: any) => (
              <PostCard key={post.node.frontmatter.slug}>
                <DescriptionWrapper>
                  <PostTitle>{post.node.frontmatter.title}</PostTitle>
                  <PostDescription>
                    {post.node.frontmatter.excerpt}
                    <br />
                    {post.node.frontmatter.date}
                  </PostDescription>
                  <Link
                    to={`${pagePath}${post.node.frontmatter.slug}`}
                    className="post-link"
                  >
                    Read More
                  </Link>
                </DescriptionWrapper>
              </PostCard>
            ))}
          </PostCardWrapper>
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
  } else {
    return (
      <Layout>
        <SEO title="Blog" location={location} />
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
      filter: { fileAbsolutePath: { regex: "/(posts)/" } }
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