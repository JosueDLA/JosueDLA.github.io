import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIconsList = styled.div`
  padding: 0;
  list-style: none;
  margin: auto;

  li {
    display: inline-block;
    margin: 0.15em;
    position: relative;
    font-size: 1em;
  }

  svg {
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transition: all 265ms ease-out;
  }

  a {
    display: inline-block;
  }

  a:before {
    transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    width: 45px;
    height: 45px;
    content: " ";
    border-radius: 50%;
    display: block;
    background: ${(t) => t.theme.accentPrimary};
    transition: all 265ms ease-out;
  }

  a:hover:before {
    transform: scale(0.1);
    transition: all 265ms ease-out;
    background: transparent;
  }

  a:hover svg {
    transform: translate(-50%, -50%) scale(2.2);
    -ms-transform: translate(-50%, -50%) scale(2.2);
    -webkit-transform: translate(-50%, -50%) scale(2.2);
    color: #fff;
    background: -webkit-linear-gradient(45deg, #fff, #000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 265ms ease-in;
  }
`;

// Social Icons Item
export interface SocialIconsItemProps {
  to: string;
  target?: string;
}

export const SocialIconsItem: React.FC<SocialIconsItemProps> = ({
  children,
  to,
  ...rest
}) => {
  return (
    <li>
      <a href={to} {...rest}>
        {children}
      </a>
    </li>
  );
};

SocialIconsItem.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
};

// Social Icons Container
export interface SocialIconsProps {}

const SocialIcons: React.FC<SocialIconsProps> = ({ children }) => {
  console.log(children);

  return (
    <SocialIconsContainer>
      <SocialIconsList>
        <ul>{children}</ul>
      </SocialIconsList>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
