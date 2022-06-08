import React from "react";

import { styled } from "lets-style";

import Header from "components/Header";

const HomePage = () => (
  <Container>
    <Header />
  </Container>
);

const Container = styled("div")`
  width: 100%;
  height: 100%;
`;

export default HomePage;
