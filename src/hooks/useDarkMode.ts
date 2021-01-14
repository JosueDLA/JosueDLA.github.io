import { useEffect, useState } from "react";
import getInitialThemeMode from "./../initTheme";

export const useDarkMode = () => {
  const initial = getInitialThemeMode();
  const [theme, setTheme] = useState(initial);
  const [componentMounted, setComponentMounted] = useState(false);

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
    const localTheme = window.localStorage.getItem("theme");

    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted] as const;
};
