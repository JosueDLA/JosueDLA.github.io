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
}

const Tittle: React.FC<TittleProps> = ({ text }) => {
  return (
    <Header className="container">
      <h2 className="major">{text}</h2>
    </Header>
  );
};

Tittle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tittle;
