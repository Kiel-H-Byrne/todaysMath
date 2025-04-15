import { ServerStyleSheets } from "@material-ui/styles";
import "firebase/analytics";
import Document, { Html, Main, NextScript } from "next/document";
import React from "react";
import ReactGA from "react-ga";
import Head from "../src/components/head";

ReactGA.initialize("UA-12892693-12")
if (typeof window !== 'undefined') {
  ReactGA.pageview(window.location.pathname + window.location.search)
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>

          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js">
            firebase.analytics()
          </script>
          <script
            crossOrigin="anonymous"
            type="text/javascript"
            src="https://unpkg.com/default-passive-events"
          ></script>
        </body>
      </Html>
    )
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
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};

export default MyDocument;
