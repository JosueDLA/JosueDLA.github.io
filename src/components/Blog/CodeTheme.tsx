import { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "var(--plain-text)",
    backgroundColor: "var(--plain-bg)",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "var(--changed)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "var(--deleted)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "var(--inserted)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "var(--comment)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "var(--string)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "var(--variable)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "var(--number)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "var(--function)",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "var(--punctuation)",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "var(--selector)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "var(--class-name)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "var(--tag)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "var(--boolean)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "var(--property)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "var(--namespace)",
      },
    },
  ],
};

export default theme;
