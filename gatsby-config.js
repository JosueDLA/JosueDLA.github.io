const path = require("path");
const siteUrl = `https://josuedla.github.io`;

module.exports = {
  siteMetadata: {
    title: `JosueDLA`,
    description: `Josué de León is a software developer based in Guatemala, he enjoys learning new things and writing about them.`,
    author: `JosueDLA`,
    siteUrl: "https://josuedla.github.io",
    image: `/home.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-6CXNQYEY7N"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/404/"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        Src: path.join(__dirname, "src"),
        Components: path.join(__dirname, "src/components"),
        About: path.join(__dirname, "src/components/About"),
        Blog: path.join(__dirname, "src/components/Blog"),
        Common: path.join(__dirname, "src/components/common"),
        Home: path.join(__dirname, "src/components/Home"),
        Layout: path.join(__dirname, "src/components/Layout"),
        Projects: path.join(__dirname, "src/components/Projects"),
        Skills: path.join(__dirname, "src/components/Skills"),
        Hooks: path.join(__dirname, "src/hooks"),
        Images: path.join(__dirname, "src/images"),
        Style: path.join(__dirname, "src/style"),
        Videos: path.join(__dirname, "src/videos"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }        
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
            priority: 0.7,
            changefreq: `daily`,
          };
        },
        excludes: [`/404`, `/*/tags/*`, `/*/tags/*/*`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JosueDLA`,
        short_name: `JosueDLA`,
        start_url: `/`,
        background_color: `#233554`,
        theme_color: `#112240`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`, `/projects/*`],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images-medium-zoom`,
      options: {
        background: "var(--bg-primary)",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `josuedla-github-io`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono\:500,600,700`,
          `rubik\:900`,
          `roboto\:500,500i,700`,
        ],
        display: `swap`,
      },
    },
  ],
};
