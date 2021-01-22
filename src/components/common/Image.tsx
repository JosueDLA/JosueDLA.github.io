import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export interface ImageProps {}

const Image: React.FC<ImageProps> = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "skills/code.png" }) {
        id
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <React.Fragment>
      <Img fluid={data.image.childImageSharp.fluid} />
    </React.Fragment>
  );
};

export default Image;
