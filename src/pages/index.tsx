import React from "react";

import { styled } from "lets-style";
import { useState } from "react";

const HomePage = () => {
  const [render, setRender] = useState(true);

  return (
    render && (
      <Container
        onClick={() => {
          setRender(false);
        }}
      >
        Hello!
      </Container>
    )
  );
};

const Container = styled("div");

export default HomePage;
