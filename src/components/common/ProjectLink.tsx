import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

export interface ProjectLinkProps {
  children: React.ReactNode;
  demo: string;
  slug: string;
  title: string;
  className?: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({
  demo,
  slug,
  title,
  children,
  ...rest
}) => {
  // Page Route
  const pathPrefix = `/projects/`;

  if (demo) {
    return (
      <OutboundLink
        href={`${demo}`}
        target="_blank"
        aria-label={title}
        rel="noreferrer"
        {...rest}
      >
        {children}
      </OutboundLink>
    );
  }

  return (
    <Link to={`${pathPrefix}${slug}`} {...rest}>
      {children}
    </Link>
  );
};

export default ProjectLink;
