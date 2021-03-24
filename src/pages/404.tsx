import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/common/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { SVGWrapper } from "./../components/common/Svg";

export interface NotFoundPageProps {
  location: { pathname: string };
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ location }) => {
  return (
    <Layout>
      <SEO title="404: Not found" location={location} />
      <SVGWrapper className="container">
        <h1 className="section-title">Page Not Found</h1>
        <StaticImage
          src="../images/chems-404.png"
          alt="Javascript Code"
          placeholder="blurred"
          layout="constrained"
          className="section-image"
        />
      </SVGWrapper>
    </Layout>
  );
};

export default NotFoundPage;
