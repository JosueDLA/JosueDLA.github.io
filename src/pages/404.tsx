import React from "react";
import Layout from "../components/Layout/Layout";
import SVG from "../components/common/Svg";
import NotFoundImg from "../images/svg/not-found.svg";

export interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <Layout>
      <SVG text="Page Not Found" image={NotFoundImg} alt="Broken Robot" />
    </Layout>
  );
};

export default NotFoundPage;
