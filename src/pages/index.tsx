import React from "react";

import { css, styled, useStyle } from "lets-style";
import { useState } from "react";

const HomePage = () => {
  const [showText, setShowText] = useState(true);
  const textClassName = useStyle(textStyle);

  return (
    <Container>
      <StyledButton
        label="yes"
        onClick={() => {
          setShowText(!showText);
        }}
      />
      {showText && <div className={textClassName}>Hello!</div>}
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

const textStyle = css`
  font-weight: bold;
  color: blue;
`;

export default HomePage;
