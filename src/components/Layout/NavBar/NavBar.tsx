import * as React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavLinks,
  NavItem,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavItems";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavContainer>
          <NavLogo href="/blog">JosueDLA</NavLogo>
          <NavIcon>
            <FaBars />
          </NavIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/blog">Blog</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>Theme</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
