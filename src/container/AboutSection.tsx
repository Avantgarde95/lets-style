import List from "components/List";
import Section from "components/Section";
import Link from "next/link";
import React from "react";

const AboutSection = () => (
  <Section>
    <Section.Title>About</Section.Title>
    <List>
      <List.Item>Simple clone of css-in-js libraries</List.Item>
      <List.Item>
        Inspired by&nbsp;
        <Link href="https://styled-components.com/">styled-components</Link>
        &nbsp;and&nbsp;
        <Link
          target="_blank"
          rel="noreferrer noopenner"
          href="https://emotion.sh/"
        >
          Emotion
        </Link>
      </List.Item>
    </List>
  </Section>
);

export default AboutSection;
