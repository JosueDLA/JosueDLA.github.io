import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import Table from "./src/components/Blog/Table";
import Code from "./src/components/Blog/Code";
import "./src/style/language.css";

const components = {
  table: Table,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    // If there's a codeString and some props
    if (props) {
      return <Code {...props} />;
    }

    // Empty pre
    return <pre {...preProps} />;
  },
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
