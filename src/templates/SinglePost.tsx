import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/common/Seo";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export interface PostProps {
  data: any;
}

const Post: React.FC<PostProps> = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed;

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <main className="container">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </main>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query SinglePost($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
