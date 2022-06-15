import React, { useState } from "react";

import { css, keyframes, styled } from "lets-style";

import { alignChildrenCenter } from "styles/Helpers";
import { theme } from "styles/Theme";

export const BasicExampleDemo = () => (
  <Container>
    <Button1>Click me!</Button1>
  </Container>
);

export const PseudoClassDemo = () => (
  <Container>
    <Button2>Click me!</Button2>
  </Container>
);

export const OtherComponentDemo = () => (
  <Container>
    <Button3>Click me!</Button3>
  </Container>
);

export const MixStylesDemo = () => (
  <Container>
    <Button4>Click me!</Button4>
  </Container>
);

export const KeyframesDemo = () => (
  <Container>
    <Button5>Click me!</Button5>
  </Container>
);

export const ComponentPropsDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button6
        count={count}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </Button6>
    </Container>
  );
};

const Container = styled("div")`
  ${alignChildrenCenter};

  box-sizing: border-box;

  // flex: 1;
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 0.8rem;

  border: 1px solid ${theme.color.black};
`;

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
