import React from "react";
import NavBar from "./NavBar/NavBar";
import PropTypes from "prop-types";
import Footer from "./Footer";
import GlobalStyle from "./../../style/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../style/theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import Toggle from "./NavBar/Toggle";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <React.Fragment>
        <GlobalStyle />
        <NavBar>Navbar</NavBar>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
