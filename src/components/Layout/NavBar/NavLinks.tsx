import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "gatsby";
/*To update the links in the navbar just 
  change the JSX elements in the const variables.*/

export const LogoLink = (home: boolean) => {
  // Logo Links
  const LogoLink = [
    <LinkS
      className="nav-logo"
      to="home"
      smooth={true}
      duration={500}
      spy={true}
      hashSpy={true}
    >
      JosueDLA
    </LinkS>,
    <LinkR className="nav-logo" to="/#home">
      JosueDLA
    </LinkR>,
  ];

  if (home) {
    return LogoLink[0];
  }

  return LogoLink[1];
};

export const NavLinks = (home: boolean) => {
  // Home Page Links
  const HomeLinks = [
    <LinkR className="nav-link" to="/#about">
      About
    </LinkR>,
    <LinkR className="nav-link" to="/#skills">
      Skills
    </LinkR>,
    <LinkR className="nav-link" to="/blog">
      Blog
    </LinkR>,
  ];

  // Route Links
  const RouteLinks = [
    <LinkR className="nav-link" to="/#about">
      About
    </LinkR>,
    <LinkR className="nav-link" to="/#skills">
      Skills
    </LinkR>,
    <LinkR className="nav-link" to="/blog">
      Blog
    </LinkR>,
  ];

  if (home) {
    return HomeLinks;
  }

  return RouteLinks;
};
