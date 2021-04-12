import _ from "lodash";
import React from "react";
import { Link, graphql } from "gatsby";
import * as PostCardItems from "Blog/PostCard";
import Pagination from "Common/Pagination";
import { AllPostTitle } from "Blog/Post";
import Layout from "Layout/Layout";
import SEO from "Common/Seo";

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
          tags: Array<string>;
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

const AllPosts: React.FC<AllPostsProps> = ({ pageContext, data, location }) => {
  const {
    DescriptionWrapper,
    PostCard,
    PostCardWrapper,
    PostTitle,
    PostDescription,
    PostTags,
  } = PostCardItems;

  // Page Route
  const { currentPage, numPages } = pageContext;
  const pagePath =
    currentPage === 1
      ? `${location.pathname}/`.replace("//", "/")
      : `${location.pathname}/`
          .replace(`${currentPage}`, "")
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
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title={pageContext.tag} location={location} />
      <main id="blog-main" className="container">
        <AllPostTitle>{pageContext.tag}</AllPostTitle>
        <PostCardWrapper>
          {posts.map((post: any) => (
            <PostCard key={post.node.frontmatter.slug}>
              <DescriptionWrapper>
                <PostTitle>{post.node.frontmatter.title}</PostTitle>
                <PostDescription>
                  {post.node.frontmatter.excerpt}
                  <br />
                  {post.node.frontmatter.date}
                  <PostTags>
                    {post.node.frontmatter.tags.map(
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
                  </PostTags>
                </PostDescription>
                <Link
                  to={`/blog/${post.node.frontmatter.slug}`}
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
};

export default AllPosts;

export const pageQuery = graphql`
  query Tag($skip: Int!, $limit: Int!, $tag: String, $folder: String) {
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
          }
        }
      }
    }
  }
`;
