import React from "react";

import Section from "components/Section";
import Text from "components/Text";

const SpecSection = () => (
  <Section>
    <Section.Title>APIs</Section.Title>
    <Text.Emph>css</Text.Emph>: Define a normal style
    <Text.Code>{`
const myStyle = css\`
  color: red;
  font-size: 16px;
\`;
    `}</Text.Code>
    <Text.Emph>keyframes</Text.Emph>: Define an animation: ;
    <Text.Code>{`
const myAnimation = keyframes\`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`;
    `}</Text.Code>
    <Text.Emph>styled</Text.Emph>: Attach the style on the tag or React
    component
    <Text.Code>{`
const MyComponent = styled("div")\`
  color: red;
\`;
    `}</Text.Code>
    <Text.Emph>Global</Text.Emph>: Inject global style into the page
    <Text.Code>{`
<Global style={globalStyle}/>
    `}</Text.Code>
  </Section>
);

export default SpecSection;
