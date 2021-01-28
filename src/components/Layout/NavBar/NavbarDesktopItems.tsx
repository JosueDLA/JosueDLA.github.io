import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "gatsby";

export const Nav = styled.nav`
  background: ${(t) => t.theme.bgSecondary};
  height: 3.5rem;
  margin-top: -3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${(t) => t.theme.textPrimary};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
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
    color: ${(t) => t.theme.textPrimary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 3.5rem;
`;

const LinkStyle = css`
  color: ${(t) => t.theme.textPrimary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid ${(t) => t.theme.accentPrimary};
  }
`;

export const NavLinkS = styled(LinkS)`
  ${LinkStyle}
`;

export const NavLinkR = styled(LinkR)`
  ${LinkStyle}
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
  background: ${(t) => t.theme.accentSecondary};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${(t) => t.theme.textSecondary};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${(t) => t.theme.accentPrimary};
    color: ${(t) => t.theme.textPrimary};
  }
`;
