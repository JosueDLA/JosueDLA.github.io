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
  const blogPost = require.resolve("./src/templates/allPosts.tsx");

  // Get all markdown post sorted by date
  const { data } = await graphql(`
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

  // Create paginated pages for post
  const postPerPage = 6;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogPost,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
