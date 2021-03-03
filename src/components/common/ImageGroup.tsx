import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

export interface ImageGroupProps {
  query: () => any;
  filename: string;
  className?: string;
  alt?: string;
}

const ImageGroup: React.FC<ImageGroupProps> = ({
  query,
  filename,
  ...rest
}) => {
  const images = query().images;
  const data = images.edges.find(
    (n: any) => n.node.childImageSharp.fluid.originalName === filename
  );

  return <Img fluid={data.node.childImageSharp.fluid} {...rest} />;
};

ImageGroup.propTypes = {
  query: PropTypes.func.isRequired,
  filename: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGroup;
