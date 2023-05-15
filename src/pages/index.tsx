import React from "react";
import Projects from "Components/Projects/Projects";
import Layout from "Components/Layout/Layout";
import Skills from "Components/Skills/Skills";
import About from "Components/About/About";
import Home from "Components/Home/Home";
import SEO from "Components/common/Seo";

export interface IndexPageProps {
  location: { pathname: string };
}

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default IndexPage;

export const Head: React.FC<IndexPageProps> = ({ location }) => {
  return <SEO title="Home" location={location} />;
};
