import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const ScrollButtonWrapper = styled.div`
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: bound 0.6s ease-in infinite alternate;
  font-size: 2.5rem;
  margin: auto;
  margin-top: 2rem;
  text-align: center;
  align-items: center;

  .scroll-icon {
    &:before {
      content: "Scroll";
      font-weight: bold;
      font-size: 13px;
    }
  }

  @keyframes bound {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;

export interface ScrollButtonProps {
  to: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ to, children }) => {
  return (
    <ScrollButtonWrapper>
      <Link
        className="scroll-icon"
        to={to}
        smooth={true}
        duration={500}
        spy={true}
        hashSpy={true}
      >
        {children}
      </Link>
    </ScrollButtonWrapper>
  );
};

ScrollButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ScrollButton;
