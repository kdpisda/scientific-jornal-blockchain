import App, { Container } from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import store from "../stores";

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
export default MainApp;
