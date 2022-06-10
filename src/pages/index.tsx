import React from "react";

import { styled } from "lets-style";

import Header from "components/Header";
import Main from "components/Main";
import Section from "components/Section";

const HomePage = () => (
  <Container>
    <Header />
    <Main>
      <StyledSection title="About">
        <ul>
          <li>Simple clone of css-in-js libraries</li>
          <li>
            Inspired by&nbsp;
            <a
              target="_blank"
              href="https://styled-components.com/"
              rel="noreferrer"
            >
              styled-components
            </a>
            &nbsp;and&nbsp;
            <a target="_blank" href="https://emotion.sh/" rel="noreferrer">
              Emotion
            </a>
          </li>
          <li>
            You can see the code at&nbsp;
            <a
              target="_blank"
              href="https://github.com/Avantgarde95/lets-style"
              rel="noreferrer"
            >
              here
            </a>
          </li>
        </ul>
      </StyledSection>
      <StyledSection title="Why">
        <ul>
          <li>To understand how css-in-js libraries work</li>
          <li>To improve my knowledge</li>
        </ul>
      </StyledSection>
      <StyledSection title="Goals">
        <ul>
          <li>Simple</li>
          <li>Lightweight</li>
          <li>Well-structured</li>
        </ul>
      </StyledSection>
      <StyledSection title="Non-goals">
        <ul>
          <li>Performance</li>
          <li>Usable in production</li>
        </ul>
      </StyledSection>
    </Main>
  </Container>
);

const StyledSection = styled(Section)`
  ul {
    box-sizing: border-box;
    padding-left: 1.5rem;
  }

  a {
    color: rgb(0 100 255);

    &:hover {
      color: rgb(0 190 255);
    }
  }
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export default HomePage;
