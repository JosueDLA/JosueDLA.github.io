import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>Welcome to my website! :D</Layout>
      <Link to="/blog">Blog</Link>
    </React.Fragment>
  );
};

export default IndexPage;
