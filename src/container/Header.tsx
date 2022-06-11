import React from "react";

import { keyframes, styled } from "lets-style";

import Link from "components/Link";
import { alignChildrenCenter } from "styles/Helpers";
import { theme } from "styles/Theme";

const Header = () => (
  <Container>
    <Title>lets-style</Title>
    <Right>
      <StyledLink href="https://github.com/Avantgarde95/lets-style">
        Code
      </StyledLink>
    </Right>
  </Container>
);

const headerAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled("header")`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 1rem;

  background-color: ${theme.color.black};

  animation: 2s ${headerAnimation} forwards;
`;

const Title = styled("h1")`
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;

  color: ${theme.color.white};
`;

const Right = styled("div")`
  ${alignChildrenCenter};

  margin-left: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  font-size: 1.2rem;
  color: ${theme.color.white};
`;

export default Header;
