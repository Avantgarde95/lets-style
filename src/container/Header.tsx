import React from "react";

import { keyframes, styled } from "lets-style";

import { theme } from "styles/Theme";

const Header = () => (
  <Container>
    <Title>lets-style</Title>
  </Container>
);

const headerAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled("header")`
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

export default Header;
