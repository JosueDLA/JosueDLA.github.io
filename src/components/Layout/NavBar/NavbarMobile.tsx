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
          <MobileLink>
            <a href="#">About</a>
          </MobileLink>
          <MobileLink>
            <a href="#">Contact</a>
          </MobileLink>
          <MobileLink>
            <a href="#">Blog</a>
          </MobileLink>
          <MobileLink>
            <a href="#">Theme</a>
          </MobileLink>
        </MobileMenu>
        <MobileBtnWrap>
          <Toggle />
        </MobileBtnWrap>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default NavbarMobile;
