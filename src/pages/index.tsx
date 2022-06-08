import React from "react";

import { styled } from "lets-style";
import { useState } from "react";

const HomePage = () => {
  const [showText, setShowText] = useState(true);

  return (
    <Container>
      <StyledButton
        label="yes"
        onClick={() => {
          setShowText(!showText);
        }}
      />
      {showText && <Text>Hello!</Text>}
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

const StyledButton = styled(Button)`
  background-color: pink;
`;

const Text = styled("div")`
  font-weight: bold;
`;

export default HomePage;
