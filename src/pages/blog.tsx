import React from "react";
import Layout from "../components/Layout/Layout";
import SVG from "../components/common/Svg";
import UnderContructinImg from "../images/svg/under-construction.svg";
import SEO from "../components/common/Seo";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <SVG
        text="Blog Under Construction"
        image={UnderContructinImg}
        alt="Construction"
      />
    </Layout>
  );
};

export default Blog;
