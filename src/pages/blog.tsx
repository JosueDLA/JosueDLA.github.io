import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default Blog;
