import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { SVGWrapper } from "Components/common/Svg";
import Layout from "Components/Layout/Layout";
import SEO from "Components/common/Seo";

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
