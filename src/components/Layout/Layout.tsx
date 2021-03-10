import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../style/globalStyles";
import { lightTheme, darkTheme } from "../../style/theme";
import { useDarkMode } from "../../hooks/useDarkMode";
import ThemeContext from "../common/ThemeContext";
import Navbar from "./Navbar/NavBar";
import Footer from "./Footer";
import BackToTopButton from "../common/BackToTop";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
      </ThemeContext.Provider>

      {children}

      <BackToTopButton />
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
