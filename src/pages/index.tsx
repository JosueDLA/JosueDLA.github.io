import React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Home />
        <About />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
