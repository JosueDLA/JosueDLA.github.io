import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  description?: string;
  lang?: string;
  image?: string;
  metaKeywords?: Array<string | null | undefined>;
  title: string;
  location: { pathname: string };
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang,
  title,
  image,
  metaKeywords,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
          image
          siteUrl
          keywords
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const cardUrl = image
    ? `${site.siteMetadata.siteUrl}${image}`
    : `${site.siteMetadata.siteUrl}/home.png`;

  return (
    <>
      <html lang={lang || "en"} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={cardUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="title" />
      <meta name="twitter:description" content="metaDescription" />
      <meta name="twitter:image" content="cardUrl" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta
        name="google-site-verification"
        content="DYujHJoykLb5x9M7oTQ-0f3oB9o0GIffmhKiaXl6U5g"
      />
      <meta
        name="keywords"
        content={metaKeywords
          ?.concat(site.siteMetadata.keywords)
          .concat(title)
          .join(", ")}
      />
      {children}
    </>
  );
};

SEO.defaultProps = {
  metaKeywords: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  metaKeywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
