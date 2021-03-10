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
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
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
  const posts = result.data.allMdx.edges;

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
  result.data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(post),
      context: { id },
    });
  });
};
