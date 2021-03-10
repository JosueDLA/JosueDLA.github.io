import React from "react";
import styled from "styled-components";

const FooterWraper = styled.div`
  background: var(--bg-secondary);
  color: var(--text-primary);
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

const Span = styled.span`
  font-size: 1.4rem;
  padding-right: 0.2rem;
  padding-bottom: 0.2rem;
`;

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWraper>
      <Span>&copy;</Span>
      <span> JosueDLA 2021 </span>
    </FooterWraper>
  );
};

export default Footer;
