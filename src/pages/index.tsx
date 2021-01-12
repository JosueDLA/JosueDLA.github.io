import React from "react";
import Layout from "../components/Layout/Layout";
import GlobalStyle from "../style/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/theme";
import { useDarkMode } from "../hooks/useDarkMode";
import Toggle from "../components/Layout/NavBar/Toggle";

const IndexPage = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <React.Fragment>
        <GlobalStyle />
        <Layout>
          Theme
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Layout>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default IndexPage;
