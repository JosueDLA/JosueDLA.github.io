import React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Home />
        <About />
        <Skills />
        <Projects />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
