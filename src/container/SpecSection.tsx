import React from "react";

import Section from "components/Section";
import List from "components/List";
import Inline from "components/Inline";

const SpecSection = () => (
  <Section>
    <Section.Title>APIs</Section.Title>
    <List>
      <List.Item>
        <Inline.Code>{"css` ... `"}</Inline.Code>: Define a normal style
      </List.Item>
      <List.Item>
        <Inline.Code>{"keyframes` ... `"}</Inline.Code>: Define an animation
      </List.Item>
      <List.Item>
        <Inline.Code>{"styled(...)` ... `"}</Inline.Code>: Attach the style on
        the tag or React component
      </List.Item>
      <List.Item>
        <Inline.Code>{"<Global style={...}/>"}</Inline.Code>: Inject global
        style to the page
      </List.Item>
    </List>
  </Section>
);

export default SpecSection;
