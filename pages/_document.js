import React from "react";
import Document, { Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

import Head from "../components/head";

const GA = Analytics({
  app: "todaysMath",
  plugins: [
    googleAnalytics({
      trackingId: "UA-12892693-12"
    })
  ]
});
GA.on("track", ({ payload }) => {
  console.log("track call just happened. Do stuff");
});
GA.page();

const appSettings = {
  name: "365 Days of Supreme Math",
  url: "",
  imageUrl: "",
  twitter_handle: "",
  description: ""
};

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head title="The Supreme Calendar" />
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>

          <Main />

          <NextScript />
          <script
            crossOrigin="true"
            type="text/javascript"
            src="https://unpkg.com/default-passive-events"
          ></script>
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
