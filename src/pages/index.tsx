import React from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Home />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
