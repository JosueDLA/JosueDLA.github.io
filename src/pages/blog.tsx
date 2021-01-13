import React from "react";
import Layout from "../components/Layout/Layout";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Work in progress</p>
    </Layout>
  );
};

export default Blog;
