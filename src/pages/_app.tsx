import React from "react";
import { AppProps } from "next/app";

import { css, Global } from "lets-style";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global style={globalStyle} />
    <Component {...pageProps} />
  </>
);

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");

  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-size: 16px;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: "Raleway", sans-serif;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`;

export default App;
