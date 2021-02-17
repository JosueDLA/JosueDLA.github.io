import { graphql, useStaticQuery } from "gatsby";

export const ApiSkills = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "skills/api.png" }) {
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
