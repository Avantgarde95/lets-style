import React from "react";

import { keyframes, styled } from "lets-style";

const Header = () => <Container>lets-style</Container>;

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
  color: #ffffff;
  background-color: #272727;

  font-size: 1.5rem;
  animation: 2s ${headerAnimation} forwards;
`;
