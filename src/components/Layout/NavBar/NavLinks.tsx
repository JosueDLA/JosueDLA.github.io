import React from "react";
import { NavLinkS, NavLinkR } from "./NavbarDesktopItems";

/*To update the links in the navbar just 
  change the JSX elements in the const variables.*/

export const LogoLink = (home: boolean) => {
  // Logo Links
  const LogoLink = [
    <NavLinkS
      to="home"
      smooth={true}
      duration={500}
      spy={true}
      hashSpy={true}
      offset={-56}
    >
      JosueDLA
    </NavLinkS>,
    <NavLinkR to="/">JosueDLA</NavLinkR>,
  ];

  if (home) {
    return LogoLink[0];
  }

  return LogoLink[1];
};

export const NavLinks = (home: boolean) => {
  // Home Page Links
  const HomeLinks = [
    <NavLinkS to="about" smooth={true} duration={500} spy={true} hashSpy={true}>
      About
    </NavLinkS>,
    <NavLinkS
      to="skills"
      smooth={true}
      duration={500}
      spy={true}
      hashSpy={true}
    >
      Skills
    </NavLinkS>,
    <NavLinkR to="/blog">Blog</NavLinkR>,
  ];

  // Route Links
  const RouteLinks = [
    <NavLinkR to="/#about">About</NavLinkR>,
    <NavLinkR to="/#skills">Skills</NavLinkR>,
    <NavLinkR to="/blog">Blog</NavLinkR>,
  ];

  if (home) {
    return HomeLinks;
  }

  return RouteLinks;
};
