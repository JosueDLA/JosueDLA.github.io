import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/common/Seo";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { PostJumbotron } from "../components/Blog/PostJumbotron";
import { Post } from "../components/Blog/Post";

export interface SinglePostProps {
  data: any;
}

const SinglePost: React.FC<SinglePostProps> = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed;

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <PostJumbotron>
        <header>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.excerpt}</p>
        </header>
      </PostJumbotron>

      <Post>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Layout>
  );
};

export default SinglePost;

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
