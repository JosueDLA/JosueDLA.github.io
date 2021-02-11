export const lightTheme = {
  "--bg-primary": "#fcfcfc",
  "--bg-secondary": "#BBB7ED",
  "--text-primary": "#0c0c0c",
  "--text-secondary": "#0c0909",
  "--accent-primary": "#6880f6",
  "--accent-secondary": "#96a4e7",
  "--videobg": "#6D83F2",
};

export const darkTheme = {
  "--bg-primary": "#15182e",
  "--bg-secondary": "#1f2449",
  "--text-primary": "#f8f8f8",
  "--text-secondary": "#f8f8f8",
  "--accent-primary": "#6D83F2",
  "--accent-secondary": "#303030",
  "--videobg": "#1f2449",
};

export interface DefaultTheme {
  "--bg-primary": string;
  "--bg-secondary": string;
  "--text-primary": string;
  "--text-secondary": string;
  "--accent-primary": string;
  "--accent-secondary": string;
  "--video-bg": string;
}
