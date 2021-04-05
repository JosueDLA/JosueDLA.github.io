// @ts-ignore
import { window } from "browser-monads";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "Style/theme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("");

  const setMode = (mode: string) => {
    const root = window.document.documentElement;

    for (const key of Object.keys(lightTheme)) {
      root.style.setProperty(
        key,
        mode === "light" ? (<any>lightTheme)[key] : (<any>darkTheme)[key]
      );
    }

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
    const theme = window.localStorage.getItem("theme");
    setMode(theme);
  }, []);

  return [theme, toggleTheme] as const;
};
