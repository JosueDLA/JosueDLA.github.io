import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  description?: string;
  lang?: string;
  image?: string;
  metaKeywords?: Array<string | null | undefined>;
  title: string;
  location: { pathname: string };
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang,
  title,
  image,
  metaKeywords,
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
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ``}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: cardUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: cardUrl,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: "keywords",
              content: metaKeywords.join(", "),
            }
          : []
      )}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
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
