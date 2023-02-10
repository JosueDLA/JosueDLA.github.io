import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "Style/globalStyles";
import { lightTheme, darkTheme } from "Style/theme";
import { useDarkMode } from "Hooks/useDarkMode";
import ThemeContext from "Common/ThemeContext";
import BackToTopButton from "Common/BackToTop";
import Navbar from "./Navbar/NavBar";
import Footer from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

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
