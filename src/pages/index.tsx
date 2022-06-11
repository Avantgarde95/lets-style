import React from "react";

import { styled } from "lets-style";

import Header from "container/Header";
import Main from "container/Main";
import AboutSection from "container/AboutSection";
import WhySection from "container/WhySection";
import GoalsSection from "container/GoalSection";
import SpecSection from "container/SpecSection";
import HowSection from "container/HowSection";
import ExampleSection from "container/ExampleSection";

const HomePage = () => (
  <Container>
    <Header />
    <Main>
      <AboutSection />
      <WhySection />
      <GoalsSection />
      <SpecSection />
      {/* <HowSection /> */}
      <ExampleSection />
    </Main>
  </Container>
);

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export default HomePage;
