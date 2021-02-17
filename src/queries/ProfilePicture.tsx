import { graphql, useStaticQuery } from "gatsby";

export const ProfilePicture = () => {
  const data = useStaticQuery(graphql`
    query {
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
