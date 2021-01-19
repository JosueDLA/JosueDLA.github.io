import * as React from "react";
import Toggle from "../../common/Toggle";
import {
  MobileContainer,
  Icon,
  CloseIcon,
  MobileWrapper,
  MobileMenu,
  MobileLink,
  MobileBtnWrap,
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
          <MobileLink href="#">About</MobileLink>
          <MobileLink href="#">Contact</MobileLink>
          <MobileLink href="#">Blog</MobileLink>
          <MobileLink href="#">Theme</MobileLink>
        </MobileMenu>
        <MobileBtnWrap>
          <Toggle />
        </MobileBtnWrap>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default NavbarMobile;
