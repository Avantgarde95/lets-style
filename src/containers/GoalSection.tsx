import React from "react";

import Section from "components/Section";
import List from "components/List";

const GoalsSection = () => (
  <Section>
    <Section.Title>Goals</Section.Title>
    Goals
    <List>
      <List.Item>Simple</List.Item>
      <List.Item>Lightweight</List.Item>
      <List.Item>Well-structured</List.Item>
    </List>
    Non-goals
    <List>
      <List.Item>Performance</List.Item>
      <List.Item>Usable in production</List.Item>
    </List>
  </Section>
);

export default GoalsSection;
