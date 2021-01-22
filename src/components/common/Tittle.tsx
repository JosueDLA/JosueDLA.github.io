import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Header = styled.header`
  position: relative;
  text-align: center;
  border-top: solid 2px ${(t) => t.theme.textPrimary};
  top: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  background: inherit;

  @media screen and (max-width: 1140px) {
    margin-top: 5em;
  }

  @media screen and (max-width: 768px) {
    margin-top: 6em;
  }

  .major {
    background: inherit;
    font-size: 2rem;
    position: relative;
    top: -0.65em;
    display: inline;
    padding: 0 1em 0 1em;
  }
`;

export interface TittleProps {
  text: string;
  className?: string;
}

const Tittle: React.FC<TittleProps> = ({ text, className }) => {
  return (
    <Header className={className}>
      <h2 className="major">{text}</h2>
    </Header>
  );
};

Tittle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tittle;
