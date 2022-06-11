import React from "react";

import List from "components/List";
import Section from "components/Section";
import Text from "components/Text";

const AboutSection = () => (
  <Section>
    <Section.Title>About</Section.Title>
    <List>
      <List.Item>
        Simple clone of&nbsp;
        <Text.Link href="https://en.wikipedia.org/wiki/CSS-in-JS">
          CSS-in-JS
        </Text.Link>
        &nbsp;libraries
      </List.Item>
      <List.Item>
        Inspired by&nbsp;
        <Text.Link href="https://styled-components.com/">
          styled-components
        </Text.Link>
        &nbsp;and&nbsp;
        <Text.Link href="https://emotion.sh/">Emotion</Text.Link>
      </List.Item>
      <List.Item>This page uses this library for styling!</List.Item>
      <List.Item>
        Visit&nbsp;
        <Text.Link href="https://github.com/Avantgarde95/lets-style">
          here
        </Text.Link>
        &nbsp;to see the code of the library and this page. Whole library code
        is contained in the&nbsp;
        <Text.Link href="https://github.com/Avantgarde95/lets-style/blob/main/src/lets-style.tsx">
          single file
        </Text.Link>
        .
      </List.Item>
    </List>
  </Section>
);

export default AboutSection;
