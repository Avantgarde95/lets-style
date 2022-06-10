import React from "react";

import { keyframes, styled } from "lets-style";

const Header = () => (
  <Container>
    <Title>lets-style</Title>
  </Container>
);

export default Header;

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

  background-color: #272727;

  animation: 2s ${headerAnimation} forwards;
`;

const Title = styled("h1")`
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;

  color: #ffffff;
`;
