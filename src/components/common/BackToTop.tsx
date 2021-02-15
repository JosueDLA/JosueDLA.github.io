import React from "react";
import { FaAngleUp } from "react-icons/fa";
import styled from "styled-components";
import { useShowButton } from "../../hooks/useShowButton";

interface IBackToTopButton {
  visible: boolean;
}

const BackToTopLink = styled("a")<IBackToTopButton>`
  background-color: #424141;
  text-align: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  color: #fff;
  z-index: 5;
  border-radius: 0.3rem;
  font-size: 2.5rem;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  cursor: pointer;
`;

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export interface BackToTopButtonProps {}

const BackToTopButton: React.FC<BackToTopButtonProps> = () => {
  const [visible] = useShowButton();

  return (
    <BackToTopLink className="show" visible={visible} onClick={handleClick}>
      <FaAngleUp />
    </BackToTopLink>
  );
};

export default BackToTopButton;
