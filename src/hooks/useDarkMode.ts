// @ts-ignore
import { window } from "browser-monads";
import { useEffect, useState } from "react";
import getInitialThemeMode from "../initTheme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    setMode(getInitialThemeMode());
  }, [getInitialThemeMode]);

  return [theme, toggleTheme] as const;
};
