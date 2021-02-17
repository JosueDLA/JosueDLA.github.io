import { graphql, useStaticQuery } from "gatsby";

export const ServerSkills = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "skills/server.png" }) {
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
