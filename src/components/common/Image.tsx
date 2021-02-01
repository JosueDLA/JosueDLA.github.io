import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export interface ImageProps {
  src: string;
  className?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, ...rest }) => {
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

  return <Img fluid={data.image.childImageSharp.fluid} {...rest} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
