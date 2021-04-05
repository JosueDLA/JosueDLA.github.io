import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const SVGWrapper = styled.section`
  display: flex;
  padding: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 7rem);
  flex-direction: column;

  .section-title {
    font-size: 2rem;
  }

  .section-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }
`;

export interface SVGProps {
  text: string;
  image: any;
  alt?: string;
}

const SVG: React.FC<SVGProps> = ({ text, image, alt }) => {
  return (
    <SVGWrapper className="container">
      <h1 className="section-title">{text}</h1>
      <img src={image} className="section-image" alt={alt} />
    </SVGWrapper>
  );
};

SVG.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  alt: PropTypes.string,
};

export default SVG;
