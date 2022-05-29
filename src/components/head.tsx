import React from "react"
import { Head } from "next/document"

type IMyHead = {
  title: string
  description: string
  url: string
  ogImage: string
}
export const MyHead = (props: IMyHead) => (
  <Head>
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
  </Head>
)

export default MyHead
