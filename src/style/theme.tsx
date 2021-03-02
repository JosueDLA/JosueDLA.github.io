export const lightTheme = {
  "--bg-primary": "#ffffff",
  "--bg-secondary": "#396288",
  "--bg-video": "#81a1c9",
  "--text-primary": "#f8f8f8",
  "--text-secondary": "#000000",
  "--accent-primary": "#0A66C2",
  "--accent-secondary": "#394b61",
};

export const darkTheme = {
  "--bg-primary": "#15182e",
  "--bg-secondary": "#202945",
  "--bg-video": "#1f2449",
  "--text-primary": "#f8f8f8",
  "--text-secondary": "#f8f8f8",
  "--accent-primary": "#0A66C2",
  "--accent-secondary": "#303030",
};

export interface DefaultTheme {
  "--bg-primary": string;
  "--bg-secondary": string;
  "--bg-video": string;
  "--text-primary": string;
  "--text-secondary": string;
  "--accent-primary": string;
  "--accent-secondary": string;
}
