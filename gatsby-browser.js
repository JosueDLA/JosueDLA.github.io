import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import Table from "Src/components/Blog/Table";
import Code from "Src/components/Blog/Code";
import Prism from "prism-react-renderer/prism";
import "Src/style/language.css";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-bash");
require("prismjs/components/prism-docker");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-powershell");

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
