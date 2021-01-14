import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <h1>Welcome to my website! :D</h1>
        <Link to="/blog">Blog</Link>
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
