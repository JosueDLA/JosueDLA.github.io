import React from "react";
import Layout from "../components/Layout/Layout";
import SVG from "../components/common/Svg";
import NotFoundImg from "../images/svg/not-found.svg";
import SEO from "../components/common/Seo";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <SVG
        text="Blog Under Construction"
        image={NotFoundImg}
        alt="Construction"
      />
    </Layout>
  );
};

export default Blog;
