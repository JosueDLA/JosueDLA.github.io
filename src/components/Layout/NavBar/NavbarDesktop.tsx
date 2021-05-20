import React from "react";
import { FaBars } from "react-icons/fa";
import Toggle from "Common/Toggle";
import {
  Nav,
  NavContainer,
  NavIcon,
  NavMenu,
  NavBtn,
  NavLogo,
  NavItem,
} from "./NavbarDesktopItems";

export interface NavbarDesktopProps {
  toggleNav: () => void;
  LogoLink: JSX.Element;
  NavLinks: Array<JSX.Element>;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({
  toggleNav,
  LogoLink,
  NavLinks,
}) => {
  const navLinks = NavLinks.map((item, i) => <NavItem key={i}>{item}</NavItem>);

  return (
    <Nav>
      <NavContainer>
        <NavLogo>{LogoLink}</NavLogo>
        <NavIcon onClick={toggleNav}>
          <FaBars />
        </NavIcon>
        <NavMenu>{navLinks}</NavMenu>
        <NavBtn>
          <Toggle />
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

export default NavbarDesktop;
