import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { LogoLink, NavLinks } from "./NavLinks";
import { useMobileMenu } from "Hooks/useMobileMenu";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, toggleNav] = useMobileMenu();

  // Render links depending on current page
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const home = path === "/" ? true : false;
  const logoLink = LogoLink(home);
  const navLinks = NavLinks(home);
  const mobileLinks = NavLinks(false);

  return (
    <React.Fragment>
      <NavbarDesktop
        toggleNav={toggleNav}
        LogoLink={logoLink}
        NavLinks={navLinks}
      />
      <NavbarMobile
        isOpen={isOpen}
        toggleNav={toggleNav}
        NavLinks={mobileLinks}
      />
    </React.Fragment>
  );
};

export default Navbar;
