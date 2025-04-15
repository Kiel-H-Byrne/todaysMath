import { Head } from "next/document"
type IMyHead = {
  title?: string
  description?: string
  url?: string
  ogImage?: string
}
export const MyHead = (props: IMyHead) => (
  <Head>
    <link rel="icon" sizes="192x192" href="img/touch-icon.png" />
    <link rel="apple-touch-icon" href="img/touch-icon.png" />
    <link rel="mask-icon" href="img/favicon-mask.svg" color="#FFD700" />
    <link rel="icon" href="img/favicon.ico" />
    <link
      rel="manifest"
      type="application/manifest+json"
      href="manifest.json"
    />
  </Head>
)

export default MyHead
