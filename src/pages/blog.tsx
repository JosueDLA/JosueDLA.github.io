import React from "react";
import Layout from "../components/Layout/Layout";
import SVG from "../components/common/Svg";
import UnderConstructionImg from "../images/svg/under-construction.svg";
import SEO from "../components/common/Seo";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <SVG
        text="Blog Under Construction"
        image={UnderConstructionImg}
        alt="Web Construction"
      />
    </Layout>
  );
};

export default Blog;
