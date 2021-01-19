import React from "react";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggleContext = React.createContext({} as IThemeContext);

export default ThemeToggleContext;
