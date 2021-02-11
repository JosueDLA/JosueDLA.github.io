import React from "react";
import { lightTheme, darkTheme } from "./src/style/theme";

const setTheme = () => {
  function getInitialThemeMode() {
    const persistedColorPreference = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedColorPreference === "string";

    // If user has preference.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If user don't have prefrece.
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    // return default theme.
    return "light";
  }
  // This constants will be replaced when setTheme() is stringify
  const light = "LIGHT_THEME";
  const dark = "DARK_THEME";

  const theme = getInitialThemeMode();
  const root = document.documentElement;

  for (const [key, value] of Object.entries(light)) {
    root.style.setProperty(key, theme === "light" ? light[key] : dark[key]);
  }
};

const MagicScript = () => {
  // Replace themes on setTheme
  const stringFunction = String(setTheme)
    .replace(`"LIGHT_THEME"`, JSON.stringify(lightTheme))
    .replace(`"DARK_THEME"`, JSON.stringify(darkTheme));

  // Create IIFE
  let clientCode = `(${stringFunction})();`;

  // Inject client code
  return <script dangerouslySetInnerHTML={{ __html: clientCode }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScript />);
};
