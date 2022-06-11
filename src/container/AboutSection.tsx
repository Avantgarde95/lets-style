import React from "react";

import Link from "components/Link";
import List from "components/List";
import Section from "components/Section";
import Inline from "components/Inline";

const AboutSection = () => (
  <Section>
    <Section.Title>About</Section.Title>
    <List>
      <List.Item>
        Simple clone of&nbsp;
        <Link href="https://en.wikipedia.org/wiki/CSS-in-JS">css-in-js</Link>
        &nbsp;libraries
      </List.Item>
      <List.Item>
        Inspired by&nbsp;
        <Link href="https://styled-components.com/">styled-components</Link>
        &nbsp;and&nbsp;
        <Link href="https://emotion.sh/">Emotion</Link>
      </List.Item>
      <List.Item>This page uses this library for styling!</List.Item>
      <List.Item>
        Visit&nbsp;
        <Link href="https://github.com/Avantgarde95/lets-style">here</Link>
        &nbsp;to see the code of the library and this page. Whole library code
        is contained in the <Inline.Emph>single file</Inline.Emph>.
        (src/lets-style.tsx)
      </List.Item>
    </List>
  </Section>
);

export default AboutSection;
