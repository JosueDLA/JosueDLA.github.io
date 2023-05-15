// @ts-ignore
import { Disqus } from "gatsby-plugin-disqus";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import React from "react";
import PostPagination from "Common/PostPagination";
import { PostJumbotron } from "Blog/PostJumbotron";
import { PostWrapper, Post } from "Blog/Post";
import Layout from "Layout/Layout";
import SEO from "Common/Seo";

export interface SinglePostProps {
  data: any;
  location: { pathname: string };
}

const SinglePost: React.FC<SinglePostProps> = ({ data, location }) => {
  // Posts
  const previous = data.previous.frontmatter;
  const current = data.current.frontmatter;
  const next = data.next.frontmatter;

  // Disqus config
  const disqusConfig = {
    url: data.site.siteMetadata.siteUrl + location.pathname,
    identifier: data.current.id,
    title: current.title,
  };

  return (
    <Layout>
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
      <PostPagination
        previous={previous}
        current={current}
        next={next}
        location={location}
      />
      <div className="container">
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  );
};

export default SinglePost;

export const Head: React.FC<SinglePostProps> = ({ data, location }) => {
  // Posts
  const current = data.current.frontmatter;

  // const featureImage = current.featureImage.childImageSharp.gatsbyImageData;
  const seoImage = current.featureImage.publicURL;

  return (
    <SEO
      title={current.title}
      description={current.excerpt}
      image={seoImage}
      location={location}
      lang={current.lang}
    />
  );
};

export const pageQuery = graphql`
  query SinglePost($id: String!, $previousPost: String!, $nextPost: String!) {
    current: mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        lang
        featureImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
      id
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
    site {
      siteMetadata {
        author
        description
        title
        image
        siteUrl
      }
    }
  }
`;
