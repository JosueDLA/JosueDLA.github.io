import { graphql, useStaticQuery } from "gatsby";

export const CodeSkills = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "skills/code.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return data;
};
