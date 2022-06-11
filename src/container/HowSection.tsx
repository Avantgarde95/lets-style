import React from "react";

import Section from "components/Section";
import Text from "components/Text";
import List from "components/List";

const HowSection = () => (
  <Section>
    <Section.Title>How</Section.Title>
    We want to write CSS code using&nbsp;
    <Text.Emph>JavaScript</Text.Emph>.
    <br />
    There can be multiple approaches to achieve this goal.
    <br />
    One of the common approaches is:
    <List>
      <List.Item>
        Generate a (unique) <Text.Emph>class name</Text.Emph>
      </List.Item>
      <List.Item>Inject CSS code into the page</List.Item>
    </List>
    Class name is usually generated using the <Text.Emph>hash</Text.Emph> of the
    CSS code.
  </Section>
);

export default HowSection;
