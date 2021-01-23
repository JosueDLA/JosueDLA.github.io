import React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Home />
        <About />
        <Skills />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
