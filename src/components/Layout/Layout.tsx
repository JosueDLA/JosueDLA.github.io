import React from "react";
import NavBar from "./NavBar/NavBar";
import PropTypes from "prop-types";
import Footer from "./Footer";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar>Navbar</NavBar>
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
