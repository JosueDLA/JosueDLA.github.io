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
  const blog = require.resolve("./src/templates/AllPosts.tsx");
  const post = require.resolve("./src/templates/SinglePost.tsx");

  // Get all markdown post sorted by date
  const result = await graphql(`
    query AllMdx {
      posts: allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { body: {}, fileAbsolutePath: { regex: "/(posts)/" } }
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
        filter: { body: {}, fileAbsolutePath: { regex: "/(projects)/" } }
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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // Create paginated pages for post
  const posts = result.data.posts.edges;
  const projects = result.data.projects.edges;

  if (posts.length > 0) {
    const postPerPage = 3;
    const numPages = Math.ceil(posts.length / postPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
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

  // Create blog post
  posts.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: `/blog/${slug}`,
      component: post,
      context: { id },
    });
  });

  // Create project post
  projects.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: `/projects/${slug}`,
      component: post,
      context: { id },
    });
  });
};
