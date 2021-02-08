import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

export interface ImageProps {
  hook: () => any;
  className?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ hook, ...rest }) => {
  const data = hook();

  return <Img fluid={data.image.childImageSharp.fluid} {...rest} />;
};

Image.propTypes = {
  hook: PropTypes.func.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
