import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/common/Seo";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PostJumbotron } from "../components/Blog/PostJumbotron";
import { Post } from "../components/Blog/Post";
import { PostWrapper } from "./../components/Blog/Post";
import PostPagination from "./../components/common/PostPagination";

export interface SinglePostProps {
  data: any;
  location: { pathname: string };
}

const SinglePost: React.FC<SinglePostProps> = ({ data, location }) => {
  // Posts
  const previous = data.previous.frontmatter;
  const current = data.current.frontmatter;
  const next = data.next.frontmatter;

  // const featureImage = current.featureImage.childImageSharp.gatsbyImageData;
  const seoImage = current.featureImage.publicURL;

  return (
    <Layout>
      <SEO
        title={current.title}
        description={current.excerpt}
        image={seoImage}
        location={location}
      />
      <PostJumbotron>
        <header>
          <h1>{current.title}</h1>
          <h2>{current.excerpt}</h2>
        </header>
      </PostJumbotron>

      <PostWrapper>
        <Post>
          <MDXRenderer>{data.current.body}</MDXRenderer>
        </Post>
      </PostWrapper>

      <PostPagination previous={previous} current={current} next={next} />
    </Layout>
  );
};

export default SinglePost;

export const pageQuery = graphql`
  query SinglePost($id: String!, $previousPost: String!, $nextPost: String!) {
    current: mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPost }) {
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $nextPost }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
