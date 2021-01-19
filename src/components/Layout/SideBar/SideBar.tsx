import * as React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideItems";

export interface SideBarProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleNav }) => {
  return (
    <SideBarContainer onClick={toggleNav} isOpen={isOpen}>
      <Icon onClick={toggleNav}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink href="#">About</SideBarLink>
          <SideBarLink href="#">Contact</SideBarLink>
          <SideBarLink href="#">Blog</SideBarLink>
          <SideBarLink href="#">Theme</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute href="#">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
