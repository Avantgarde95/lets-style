import React from "react";

import { styled } from "lets-style";

import Header from "components/Header";
import Main from "components/Main";
import Section from "components/Section";
import { theme } from "styles/Theme";
import { highlightOnHover } from "styles/Helpers";

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
              rel="noreferrer noopenner"
              href="https://styled-components.com/"
            >
              styled-components
            </a>
            &nbsp;and&nbsp;
            <a
              target="_blank"
              rel="noreferrer noopenner"
              href="https://emotion.sh/"
            >
              Emotion
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
    ${highlightOnHover};

    color: ${theme.color.blue};
  }
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export default HomePage;
