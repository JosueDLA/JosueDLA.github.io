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

  window.localStorage.setItem("theme", theme);

  for (const [key] of Object.entries(light)) {
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

const NoScripStyle = () => {
  let cssString = [];

  for (const [key, value] of Object.entries(lightTheme)) {
    cssString.push(`${key}: ${value};`);
  }
  return (
    <style>
      {`
      html{
        ${cssString.join("\n")}
      }
    `}
    </style>
  );
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<NoScripStyle key="no-script" />);
  setPreBodyComponents(<MagicScript key="magic-script" />);
};
