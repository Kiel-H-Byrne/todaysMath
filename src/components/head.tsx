import React from "react"
import { Head } from "next/document"
import theme from "../../src/styles/theme"

import { APP_SETTINGS } from "../../src/_CONSTANTS"
type IMyHead = {
  title: string
  description: string
  url: string
  ogImage: string
}
export const MyHead = (props: IMyHead) => (
  <Head>
    <meta charSet="utf-8" />

    <meta name="title" content={APP_SETTINGS.name} />
    <meta name="description" content={APP_SETTINGS.description} />

    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Just+Another+Hand|Merienda|Quicksand&display=swap"
      rel="stylesheet"
    />

    <link rel="icon" sizes="192x192" href="`img/touch-icon.png" />
    <link rel="apple-touch-icon" href="img/touch-icon.png" />
    <link rel="mask-icon" href="img/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="img/favicon.ico" />
    <link
      rel="manifest"
      type="application/manifest+json"
      href="manifest.json"
    />
    <link rel="stylesheet" type="text/css" href="../styles/App.css" />
    <meta name="theme-color" content={theme.palette.primary.main} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={APP_SETTINGS.url} />
    <meta property="og:title" content={APP_SETTINGS.name} />
    <meta property="og:description" content={APP_SETTINGS.description} />
    <meta property="og:image" content={APP_SETTINGS.imageUrl} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={APP_SETTINGS.url} />
    <meta property="twitter:title" content={APP_SETTINGS.name} />
    <meta property="twitter:description" content={APP_SETTINGS.description} />
    <meta property="twitter:image" content={APP_SETTINGS.imageUrl} />

    <meta name="twitter:site" content={APP_SETTINGS.url} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Head>
)

export default MyHead
