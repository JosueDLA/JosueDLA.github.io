import React from "react";
import Layout from "../components/Layout/Layout";
import SVG from "../components/common/Svg";
import NotFoundImg from "../images/svg/not-found.svg";
import SEO from "../components/common/Seo";

export interface NotFoundPageProps {
  location: { pathname: string };
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ location }) => {
  return (
    <Layout>
      <SEO title="404: Not found" location={location} />
      <SVG text="Page Not Found" image={NotFoundImg} alt="Broken Robot" />
    </Layout>
  );
};

export default NotFoundPage;
