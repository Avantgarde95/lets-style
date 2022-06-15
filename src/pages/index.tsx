import React from "react";

import { keyframes, styled } from "lets-style";

import Markdown from "components/Markdown";
import { theme } from "styles/Theme";

import About from "articles/About.mdx";
import Why from "articles/Why.mdx";
import Goals from "articles/Goals.mdx";
import APIs from "articles/APIs.mdx";
import Examples from "articles/Examples.mdx";

const HomePage = () => (
  <Page>
    <Header>
      <Title>lets-style</Title>
    </Header>
    <Main>
      <Markdown>
        <About />
        <Why />
        <Goals />
        <APIs />
        <Examples />
      </Markdown>
    </Main>
  </Page>
);

const Page = styled("div")`
  width: 100%;
  height: 100%;
`;

const headerAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Header = styled("header")`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 1rem;

  background-color: ${theme.color.black};

  animation: 2s ${headerAnimation} forwards;
`;

const Title = styled("h1")`
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;

  color: ${theme.color.white};
`;

const Main = styled("main")`
  box-sizing: border-box;

  flex: 1;
  width: 100%;
  height: 100%;
  padding: 1rem;

  &::after {
    content: "";
    display: block;

    width: 100%;
    height: 1rem;
  }
`;

export default HomePage;
