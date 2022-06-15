import React from "react";

import Section from "components/Section";
import Text from "components/Text";

const SpecSection = () => (
  <Section>
    <Section.Title>APIs</Section.Title>
    <Text.Emph>css</Text.Emph>: Define a normal style
    <Text.CodeBox>{`
const myStyle = css\`
  color: red;
  font-size: 16px;
\`;
    `}</Text.CodeBox>
    <Text.Emph>keyframes</Text.Emph>: Define an animation
    <Text.CodeBox>{`
const myAnimation = keyframes\`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`;
    `}</Text.CodeBox>
    <Text.Emph>styled</Text.Emph>: Attach the style on the tag or React
    component
    <Text.CodeBox>{`
const MyComponent = styled("div")\`
  color: red;
\`;
    `}</Text.CodeBox>
    <Text.Emph>Global</Text.Emph>: Inject global style into the page
    <Text.CodeBox>{`
<Global style={globalStyle}/>
    `}</Text.CodeBox>
  </Section>
);

export default SpecSection;
