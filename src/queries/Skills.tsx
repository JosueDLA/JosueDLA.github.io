import { graphql, useStaticQuery } from "gatsby";

export const SkillsImages = () => {
  const data = useStaticQuery(graphql`
    query Skills {
      images: allFile(filter: { relativeDirectory: { eq: "skills" } }) {
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
