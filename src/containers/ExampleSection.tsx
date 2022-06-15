import React, { useState } from "react";

import { css, keyframes, styled } from "lets-style";

import Section from "components/Section";
import Demo from "components/Demo";

const ExampleSection = () => {
  const [count, setCount] = useState(0);

  return (
    <Section>
      <Section.Title>Examples</Section.Title>
      Basic example
      <Demo>
        <Demo.CodeBox>{`
const Button1 = styled("button")\`
  border: 1px solid black;
  background-color: transparent;
\`;
      `}</Demo.CodeBox>
        <Demo.ShowBox>
          <Button1>Click me!</Button1>
        </Demo.ShowBox>
      </Demo>
      Pseudo class
      <Demo>
        <Demo.CodeBox>{`
const Button2 = styled("button")\`
  border: 1px solid black;
  background-color: transparent;

  &:hover,
  &:active {
    background-color: skyblue;
  }
\`;
      `}</Demo.CodeBox>
        <Demo.ShowBox>
          <Button2>Click me!</Button2>
        </Demo.ShowBox>
      </Demo>
      Use other component
      <Demo>
        <Demo.CodeBox>{`
const Button3 = styled(Button2)\`
  font-weight: bold;
\`;
        `}</Demo.CodeBox>
        <Demo.ShowBox>
          <Button3>Click me!</Button3>
        </Demo.ShowBox>
      </Demo>
      Mix the styles
      <Demo>
        <Demo.CodeBox>{`
const roundedBorders = css\`
  border-radius: 10px;
\`;

const putTransition = css\`
  transition: background-color 1s;
\`;

const Button4 = styled(Button3)\`
  \${roundedBorders}
  \${putTransition}
\`;
        `}</Demo.CodeBox>
        <Demo.ShowBox>
          <Button4>Click me!</Button4>
        </Demo.ShowBox>
      </Demo>
      Keyframes
      <Demo>
        <Demo.CodeBox>{`
const fadeIn = keyframes\`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
\`;

const Button5 = styled(Button4)\`
  animation: 2s \${fadeIn} infinite;
\`;
      `}</Demo.CodeBox>
        <Demo.ShowBox>
          <Button5>Click me!</Button5>
        </Demo.ShowBox>
      </Demo>
      Use component props
      <Demo>
        <Demo.CodeBox>{`
interface Button6Props {
  count: number;
  onClick: () => void;
}

const Button6 = styled(Button3)<Button6Props>\`
  color: \${({ count }) => (count > 5 ? "red" : "black")};
\`;
      `}</Demo.CodeBox>
        <Demo.ShowBox>
          <Button6
            count={count}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Count: {count}
          </Button6>
        </Demo.ShowBox>
      </Demo>
    </Section>
  );
};

const Button1 = styled("button")`
  border: 1px solid black;
  background-color: transparent;
`;

const Button2 = styled("button")`
  border: 1px solid black;
  background-color: transparent;

  &:hover,
  &:active {
    background-color: skyblue;
  }
`;

const Button3 = styled(Button2)`
  font-weight: bold;
`;

const roundedBorders = css`
  border-radius: 10px;
`;

const putTransition = css`
  transition: background-color 1s;
`;

const Button4 = styled(Button3)`
  ${roundedBorders}
  ${putTransition}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Button5 = styled(Button4)`
  animation: 2s ${fadeIn} infinite;
`;

interface Button6Props {
  count: number;
  onClick: () => void;
}

const Button6 = styled(Button3)<Button6Props>`
  color: ${({ count }) => (count > 5 ? "red" : "black")};
`;

export default ExampleSection;
