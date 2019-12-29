import React from "react";
import { Head } from "next/document";
import { string } from "prop-types";
import theme from "../../src/styles/theme";

import { APP_SETTINGS } from "../../src/_CONSTANTS";

export const MyHead = ({ title, description, ogImage, url }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="description"
      content={description || APP_SETTINGS.defaultDescription}
    />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Fira+Sans|Quicksand&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link
      rel="manifest"
      type="application/manifest+json"
      href="manifest.json"
    />
    <link rel="stylesheet" type="text/css" href="../styles/App.css" />
    <meta name="theme-color" content={theme.palette.primary.main} />

    <meta property="og:url" content={url || APP_SETTINGS.defaultOGURL} />
    <meta property="og:title" content={title || ""} />
    <meta
      property="og:description"
      content={description || APP_SETTINGS.defaultDescription}
    />

    <meta name="twitter:site" content={url || APP_SETTINGS.defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content={ogImage || APP_SETTINGS.defaultOGImage}
    />
    <meta
      property="og:image"
      content={ogImage || APP_SETTINGS.defaultOGImage}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
);

MyHead.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default MyHead;
