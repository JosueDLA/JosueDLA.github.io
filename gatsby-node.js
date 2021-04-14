const path = require("path");
const _ = require("lodash");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  // Define template
  const blog = path.resolve("./src/templates/AllPosts.tsx");
  const project = path.resolve("./src/templates/AllProjects.tsx");
  const post = path.resolve("./src/templates/SinglePost.tsx");
  const blogTag = path.resolve("./src/templates/PostTag.tsx");
  const projectTag = path.resolve("./src/templates/ProjectTag.tsx");

  // Post Per Page
  const postPerPage = 3;
  const projectsPerPage = 3;

  // Get all markdown post sorted by date
  const result = await graphql(`
    query AllMdx {
      posts: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
      projects: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: {
          fileAbsolutePath: { regex: "/(projects)/" }
          frontmatter: { demo: { in: "" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
      allProjects: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
          }
        }
      }
      postTags: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/(posts)/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
      projectTags: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // Create blog index page
  const posts = result.data.posts.edges;

  if (posts.length > 0) {
    const numPages = Math.ceil(posts.length / postPerPage);

    Array.from({ length: numPages }).forEach((__, i) => {
      actions.createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: blog,
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }

  // Create projects index page
  const projects = result.data.projects.edges;
  const allProjects = result.data.allProjects.edges;

  if (projects.length > 0) {
    const numPages = Math.ceil(allProjects.length / postPerPage);

    Array.from({ length: numPages }).forEach((__, i) => {
      actions.createPage({
        path: i === 0 ? `/projects` : `/projects/${i + 1}`,
        component: project,
        context: {
          limit: postPerPage,
          skip: i * postPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  }

  // Crete Blog Post Tag page
  const postTags = result.data.postTags.group;

  if (postTags.length > 0) {
    postTags.forEach((tag) => {
      const numPages = Math.ceil(tag.totalCount / postPerPage);

      Array.from({ length: numPages }).forEach((__, i) => {
        actions.createPage({
          path:
            i === 0
              ? `/blog/tags/${_.kebabCase(tag.tag.toLowerCase())}`
              : `/blog/tags/${_.kebabCase(tag.tag.toLowerCase())}/${i + 1}`,
          component: blogTag,
          context: {
            skip: i * postPerPage,
            folder: "/(posts)/",
            limit: postPerPage,
            currentPage: i + 1,
            tag: tag.tag,
            numPages,
          },
        });
      });
    });
  }

  // Crete Project Tag page
  const projectTags = result.data.projectTags.group;

  if (projectTags.length > 0) {
    projectTags.forEach((tag) => {
      const numPages = Math.ceil(tag.totalCount / postPerPage);

      Array.from({ length: numPages }).forEach((__, i) => {
        actions.createPage({
          path:
            i === 0
              ? `/projects/tags/${_.kebabCase(tag.tag.toLowerCase())}`
              : `/projects/tags/${_.kebabCase(tag.tag.toLowerCase())}/${i + 1}`,
          component: projectTag,
          context: {
            skip: i * postPerPage,
            folder: "/(projects)/",
            limit: postPerPage,
            currentPage: i + 1,
            tag: tag.tag,
            numPages,
          },
        });
      });
    });
  }

  // Create blog post
  posts.forEach((edge, i) => {
    // Get previous and next posts
    const previousIndex = i - 1 < 0 ? 0 : i - 1;
    const nextIndex = i + 1 > posts.length - 1 ? posts.length - 1 : i + 1;
    const previous = posts[previousIndex].node.id;
    const next = posts[nextIndex].node.id;

    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;

    actions.createPage({
      path: `/blog/${_.kebabCase(slug.toLowerCase())}`,
      component: post,
      context: {
        id: id,
        previousPost: previous,
        nextPost: next,
      },
    });
  });

  // Create project post
  projects.forEach((edge, i) => {
    // Get previous and next posts
    const previousIndex = i - 1 < 0 ? 0 : i - 1;
    const nextIndex = i + 1 > projects.length - 1 ? "0" : i + 1;
    const previous = projects[previousIndex].node.id;
    const next = projects[nextIndex].node.id;

    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;

    actions.createPage({
      path: `/projects/${_.kebabCase(slug.toLowerCase())}`,
      component: post,
      context: {
        id: id,
        previousPost: previous,
        nextPost: next,
      },
    });
  });
};
