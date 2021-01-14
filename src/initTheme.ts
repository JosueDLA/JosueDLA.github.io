export default function getInitialThemeMode() {
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
