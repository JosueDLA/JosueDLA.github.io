import _ from "lodash";
import React from "react";
import { Link, graphql } from "gatsby";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as PostCardItems from "Blog/PostCard";
import Pagination from "Common/Pagination";
import { AllPostTitle } from "Blog/Post";
import Layout from "Layout/Layout";
import Tags from "Common/Tags";
import SEO from "Common/Seo";

export interface PostTagProps {
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
          thumbnail: string;
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
  tags: Array<object>;
}

const PostTag: React.FC<PostTagProps> = ({ pageContext, data, location }) => {
  const {
    DescriptionWrapper,
    PostCard,
    PostCardWrapper,
    PostTitle,
    PostDescription,
    PostTags,
    ImageWrapper,
  } = PostCardItems;

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
  const posts = data.allMdx.edges;

  return (
    <Layout>
      <SEO title={pageContext.tag} location={location} />
      <main id="blog-main" className="container">
        <AllPostTitle>{pageContext.tag}</AllPostTitle>
        <PostCardWrapper>
          {posts.map((post: any) => (
            <PostCard key={post.node.frontmatter.slug}>
              <ImageWrapper>
                <GatsbyImage
                  image={
                    getImage(
                      post.node.frontmatter.thumbnail
                    ) as IGatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                  className="post-img"
                />
              </ImageWrapper>
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
        <Tags tags={pageContext.tags} pathPrefix={pathPrefix} />
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

export default PostTag;

export const pageQuery = graphql`
  query ProjectTag($skip: Int!, $limit: Int!, $tag: String, $folder: String) {
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
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 480
                  height: 360
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
