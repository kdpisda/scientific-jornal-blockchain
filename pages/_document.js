import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { AppRegistry } from "react-native-web";

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent("Main", () => Main);
    const { getStyleElement } = AppRegistry.getApplication("Main");
    const page = renderPage();
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement()
    ];
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <html style={{ height: "100%" }}>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          />
          <title>ScientificJournal</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link
            rel="stylesheet"
            href="./static/css/styles.min.css?h=48930a4107b1ca5eb39ae1e606c0ea3f"
          />
          <line rel="stylesheet" href="./static/css/index.css" />
          <link rel="stylesheet" href="./static/css/index.css" />
          <link
            rel="stylesheet"
            href="./static/bootstrap/css/bootstrap.min.css?h=8a6c2afcccaaabb2f6a787d71efc0bd9"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js" />
        <script stc="./static/js/popper.min.js" />
        <script src="./static/js/script.min.js?h=5f9b75209a5bec2eae9db1b514298205" />
      </html>
    );
  }
}
