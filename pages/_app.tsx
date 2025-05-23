import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import App from "next/app";
import Head from "next/head";
import React from "react";
import Footer from "src/components/Footer";
import Navigation from '../src/components/Navigation';
import { ThemeProvider, useMyTheme } from '../src/context/ThemeContext';
import { getMyTheme } from '../src/styles/themes';
import { APP_SETTINGS } from "../src/_CONSTANTZ";

// This component needs to be inside the ThemeProvider to access the theme context
const AppContent = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  const { mode } = useMyTheme();
  const currentTheme = getMyTheme(mode);

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </MuiThemeProvider>
  );
};

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />

          <meta name="title" content={APP_SETTINGS.name} />
          <meta name="description" content={APP_SETTINGS.description} />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#FFD700" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={APP_SETTINGS.url} />
          <meta property="og:title" content={APP_SETTINGS.name} />
          <meta property="og:description" content={APP_SETTINGS.description} />
          <meta property="og:image" content={APP_SETTINGS.imageUrl} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={APP_SETTINGS.url} />
          <meta property="twitter:title" content={APP_SETTINGS.name} />
          <meta
            property="twitter:description"
            content={APP_SETTINGS.description}
          />
          <meta property="twitter:image" content={APP_SETTINGS.imageUrl} />

          <meta name="twitter:site" content={APP_SETTINGS.url} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <title>{APP_SETTINGS.name}</title>
        </Head>
        <ThemeProvider>
          <AppContent Component={Component} pageProps={pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
