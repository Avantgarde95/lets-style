import React from "react";
import { AppProps } from "next/app";

import { css, Global } from "lets-style";

import Markdown from "components/Markdown";
import Header from "containers/Header";
import Main from "containers/Main";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Global style={globalStyle} />
    <Markdown>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </Markdown>
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
