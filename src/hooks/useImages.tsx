import { graphql, useStaticQuery } from "gatsby";

export const useProfilePicture = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "code-bg.jpg" }) {
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
