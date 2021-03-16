import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { noSelect } from "./../../../style/noSelect";

interface ISideBarContainer {
  isOpen: boolean;
}

export const MobileContainer = styled("aside")<ISideBarContainer>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--text-primary);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileWrapper = styled.div`
  color: #fff;
`;

export const MobileMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
`;

export const MobileItem = styled.li`
  height: 3.5rem;

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: var(--text-primary);
    cursor: pointer;

    &:hover {
      color: var(--accent-primary);
      transition: 0.2s ease-in-out;
    }
  }
`;

export const MobileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileRoute = styled.a`
  border-radius: 50px;
  background: var(--accent-secondary);
  white-space: nowrap;
  padding: 16px 64px;
  color: var(--text-secondary);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  ${noSelect}

  &:hover {
    transition: all 0.2 ease-in-out;
    background: var(--accent-primary);
    color: var(--text-primary);
  }
`;
