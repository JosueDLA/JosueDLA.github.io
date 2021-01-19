import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import PropTypes from "prop-types";
import Footer from "./Footer";
import GlobalStyle from "./../../style/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../style/theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import SideBar from "./SideBar/SideBar";
import ThemeToggleContext from "../common/ThemeContext";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
        <NavBar toggleNav={toggleNav} />
        <SideBar isOpen={isOpen} toggleNav={toggleNav} />
      </ThemeToggleContext.Provider>

      {children}

      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
