import React from "react";

import { css, styled } from "lets-style";
import { useState } from "react";

const HomePage = () => {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("red");

  return (
    <Container>
      <StyledButton
        label="Show / hide"
        onClick={() => {
          setShowText(!showText);
        }}
      />
      <StyledButton
        label="Change color"
        onClick={() => {
          setTextColor(textColor === "red" ? "blue" : "red");
        }}
      />
      {showText && <Text textColor={textColor}>Hello!</Text>}
    </Container>
  );
};

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
}

const Button = ({ className, label, onClick }: ButtonProps) => (
  <button className={className} onClick={onClick}>
    {label}
  </button>
);

const Container = styled("div")`
  width: 100%;
  height: 100%;

  background-color: skyblue;
`;

const mixinStyle = css`
  color: red;
`;

const StyledButton = styled(Button)`
  background-color: pink;

  ${mixinStyle}
`;

interface TextProps {
  textColor: string;
}

const Text = styled("div")<TextProps>`
  font-weight: bold;
  font-family: monospace;
  color: ${(props) => props.textColor};
`;

export default HomePage;
