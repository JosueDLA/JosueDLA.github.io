import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any;
  image?: string;
  metaKeywords?: Array<string>;
  title: string;
  location: { pathname: string };
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang,
  meta,
  title,
  image,
  metaKeywords,
  location,
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

  console.log("location :>> ", location);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const cardUrl =
    image || `${site.siteMetadata.siteUrl}${location.pathname}home.png`;

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
        meta,
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
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
