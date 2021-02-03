import React, { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { LogoLink, NavLinks } from "./NavLinks";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Render links depending on current page
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const home = path === "/" ? true : false;
  const logoLink = LogoLink(home);
  const navLinks = NavLinks(home);

  return (
    <React.Fragment>
      <NavbarDesktop
        toggleNav={toggleNav}
        LogoLink={logoLink}
        NavLinks={navLinks}
      />
      <NavbarMobile isOpen={isOpen} toggleNav={toggleNav} NavLinks={navLinks} />
    </React.Fragment>
  );
};

export default Navbar;
