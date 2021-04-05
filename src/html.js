import React from "react";
import PropTypes from "prop-types";
import NoScriptNav from "./components/common/NoScriptNav";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta
          name="google-site-verification"
          content="DYujHJoykLb5x9M7oTQ-0f3oB9o0GIffmhKiaXl6U5g"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript>
          <NoScriptNav
            navText="Some features may not be available."
            cardTitle="No JavaScript"
            navBtn="Read More"
            cardBtn="Close"
          >
            Sorry, some features may not work properly without JavaScript.
            Please visit&nbsp;
            <a href="https://www.enable-javascript.com/" target="blank_">
              Enable-JavaScript
            </a>
            &nbsp;to enable it.
          </NoScriptNav>
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
