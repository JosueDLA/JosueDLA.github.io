import React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import SEO from "../components/common/Seo";

export interface IndexPageProps {
  location: { pathname: string };
}

const IndexPage: React.FC<IndexPageProps> = ({ location }) => {
  return (
    <Layout>
      <SEO title="Home" location={location} />
      <Home />
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
