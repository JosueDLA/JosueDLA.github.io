import React, { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavbarDesktop toggleNav={toggleNav} />
      <NavbarMobile isOpen={isOpen} toggleNav={toggleNav} />
    </React.Fragment>
  );
};

export default Navbar;
