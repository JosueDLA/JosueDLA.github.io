import { graphql, useStaticQuery } from "gatsby";

export const ProjectsImages = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      images: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `);

  return data;
};
