import React from "react";
import styled from "styled-components";

const FooterWraper = styled.div`
  background-color: #0f1221;
  color: #fff;
`;

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return <FooterWraper>Footer</FooterWraper>;
};

export default Footer;
