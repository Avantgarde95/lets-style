import React from "react";

import { styled } from "lets-style";

import Header from "containers/Header";
import Main from "containers/Main";
import AboutSection from "containers/AboutSection";
import WhySection from "containers/WhySection";
import GoalsSection from "containers/GoalSection";
import SpecSection from "containers/SpecSection";
import HowSection from "containers/HowSection";
import ExampleSection from "containers/ExampleSection";

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
