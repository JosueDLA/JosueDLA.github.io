import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Table from "./src/components/Blog/Table";

const components = {
  table: Table,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
