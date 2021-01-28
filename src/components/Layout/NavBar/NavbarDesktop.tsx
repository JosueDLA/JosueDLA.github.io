import * as React from "react";
import { FaBars } from "react-icons/fa";
import Toggle from "../../common/Toggle";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavLinkS,
  NavLinkR,
  NavItem,
  NavMenu,
  NavBtn,
} from "./NavbarDesktopItems";

export interface NavbarDesktopProps {
  toggleNav: () => void;
}

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ toggleNav }) => {
  return (
    <React.Fragment>
      <Nav>
        <NavContainer>
          <NavLogo to="/">JosueDLA</NavLogo>
          <NavIcon onClick={toggleNav}>
            <FaBars />
          </NavIcon>
          <NavMenu>
            <NavItem>
              <NavLinkS to="about" smooth={true} duration={500} hashSpy>
                About
              </NavLinkS>
            </NavItem>
            <NavItem>
              <NavLinkS to="contact" smooth={true} duration={500} hashSpy>
                Contact
              </NavLinkS>
            </NavItem>
            <NavItem>
              <NavLinkR to="/blog">Blog</NavLinkR>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Toggle />
          </NavBtn>
        </NavContainer>
      </Nav>
    </React.Fragment>
  );
};

export default NavbarDesktop;
