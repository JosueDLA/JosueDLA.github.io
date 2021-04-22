const darkCode = {
  "--plain-text": "#d6deeb",
  "--plain-bg": "#011627",
  "--changed": "#a2bffc",
  "--deleted": "#ef5350",
  "--inserted": "#addb67",
  "--comment": "#637777",
  "--string": "#addb67",
  "--variable": "#d6deeb",
  "--number": "#f78c6c",
  "--function": "#82aaff",
  "--punctuation": "#c792ea",
  "--selector": "#c792ea",
  "--class-name": "#ffcb8b",
  "--tag": "#7fdbca",
  "--boolean": "#ff5874",
  "--property": "#80cbc4",
  "--namespace": "#b2ccd6",
};

const lightCode = {
  "--plain-text": "#403f53",
  "--plain-bg": "#FBFBFB",
  "--changed": "#a2bffc",
  "--deleted": "#ef5350",
  "--inserted": "#4876d6",
  "--comment": "#989fb1",
  "--string": "#4876d6",
  "--variable": "#c96765",
  "--number": "#aa0982",
  "--function": "#4876d6",
  "--punctuation": "#c792ea",
  "--selector": "#994cc3",
  "--class-name": "#111111",
  "--tag": "#994cc3",
  "--boolean": "#ff5874",
  "--property": "#0c969b",
  "--namespace": "#bc5454",
};

export const common = {
  boxShadow: "0px 1rem 1.5rem rgba(0, 0, 0, 0.2);",
  media: {
    extraSmall: "max-width: 320px",
    small: "max-width: 480px",
    medium: "max-width: 768px",
    large: "max-width: 960px",
    extraLarge: "max-width: 1200px",
  },
};

export const lightTheme = {
  "--bg-primary": "#f8f8f8",
  "--bg-secondary": "#6474af",
  "--bg-tertiary": "#cedaf6",
  "--bg-video": "rgba(100, 116, 175, 0.8)",
  "--text-primary": "#525660",
  "--text-secondary": "#ffffff",
  "--text-tertiary": "#232529",
  "--text-disabled": "#6c757d",
  "--accent-primary": "#4e80f5",
  "--accent-secondary": "#99A7D3",
  "--accent-tertiary": "#2663f2",
  ...lightCode,
  ...common,
};

export const darkTheme = {
  "--bg-primary": "#0a192f",
  "--bg-secondary": "#112240",
  "--bg-tertiary": "#112240",
  "--bg-video": "#1f2449",
  "--text-primary": "#f8f8f8",
  "--text-secondary": "#f8f8f8",
  "--text-tertiary": "#f8f8f8",
  "--text-disabled": "#6c757d",
  "--accent-primary": "#0A66C2",
  "--accent-secondary": "#303030",
  "--accent-tertiary": "#303030",
  ...darkCode,
  ...common,
};

export interface IDefaultTheme {
  "--bg-primary": string;
  "--bg-secondary": string;
  "--bg-video": string;
  "--text-primary": string;
  "--text-disabled": string;
  "--text-secondary": string;
  "--accent-primary": string;
  "--accent-secondary": string;
  "--accent-tertiary": string;
  common: string;
  media: {
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
}
