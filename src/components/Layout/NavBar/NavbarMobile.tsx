import * as React from "react";
import Toggle from "../../common/Toggle";
import {
  MobileContainer,
  Icon,
  CloseIcon,
  MobileWrapper,
  MobileMenu,
  MobileLinkS,
  MobileLinkR,
  MobileBtnWrap,
  MovileItem,
} from "./NavbarMobileItems";

export interface NavbarMobileProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ isOpen, toggleNav }) => {
  return (
    <MobileContainer isOpen={isOpen} onClick={toggleNav}>
      <Icon onClick={toggleNav}>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileMenu>
          <MovileItem>
            <MobileLinkS
              to="about"
              smooth={true}
              duration={500}
              hashSpy
              onClick={toggleNav}
            >
              About
            </MobileLinkS>
          </MovileItem>
          <MovileItem>
            <MobileLinkS
              to="contact"
              smooth={true}
              duration={500}
              hashSpy
              onClick={toggleNav}
            >
              Contact
            </MobileLinkS>
          </MovileItem>
          <MovileItem>
            <MobileLinkR to="/blog" onClick={toggleNav}>
              Blog
            </MobileLinkR>
          </MovileItem>
        </MobileMenu>
        <MobileBtnWrap>
          <Toggle />
        </MobileBtnWrap>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default NavbarMobile;
