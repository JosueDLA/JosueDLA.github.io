import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "gatsby";
import { noSelect } from "./../../../style/noSelect";

export const Nav = styled.nav`
  background: var(--bg-secondary);
  height: 3.5rem;
  margin-top: -3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;
  margin-bottom: 3.5rem;
  ${noSelect}

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLinkS = styled(LinkS)``;

export const NavLinkR = styled(LinkR)``;

export const NavLogo = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  vertical-align: middle;
  line-height: 3.5rem;

  ${NavLinkS}, ${NavLinkR} {
    color: var(--text-primary);
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
  }
`;

export const NavIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-primary);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;
  margin-left: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 3.5rem;

  ${NavLinkS}, ${NavLinkR} {
    color: var(--text-primary);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
      border-bottom: 3px solid var(--accent-primary);
    }
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  border-radius: 50px;
  background: var(--accent-secondary);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--text-secondary);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: var(--accent-primary);
    color: var(--text-primary);
  }
`;
