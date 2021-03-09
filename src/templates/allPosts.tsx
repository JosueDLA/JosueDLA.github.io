import React from "react";
import Pagination from "../components/common/Pagination";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

export interface AllPostsProps {
  pageContext: any;
  data: any;
}

const AllPosts: React.FC<AllPostsProps> = ({ pageContext, data }) => {
  const pagePath = "/blog/";
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const previous =
    currentPage - 1 === 1 ? `${pagePath}` : `${pagePath}${currentPage - 1}`;
  const next = `${pagePath}${currentPage + 1}`;
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <main className="container">
        <h1>AllPosts</h1>
        {posts.map((post: any) => (
          <div key={post.node.frontmatter.slug}>
            {post.node.frontmatter.title}
            {post.node.frontmatter.excerpt}
            {post.node.frontmatter.slug}
            {post.node.frontmatter.date}
          </div>
        ))}

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
            date
            excerpt
            slug
            title
          }
        }
      }
    }
  }
`;

export default AllPosts;
