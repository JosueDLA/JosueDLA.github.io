import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string>("light");
  const [componentMounted, setComponentMounted] = useState<boolean>(false);

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }

    setComponentMounted(true);

    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme, componentMounted] as const;
};
