import React from "react";
import { FaGithub } from "react-icons/fa";

import { keyframes, styled } from "lets-style";

import { alignChildrenCenter, highlightOnHover } from "styles/Helpers";
import { theme } from "styles/Theme";

const Header = () => (
  <Container>
    <Title>lets-style</Title>
    <Right>
      <Link
        target="_blank"
        rel="noreferrer noopenner"
        href="https://github.com/Avantgarde95/lets-style"
      >
        <FaGithub />
      </Link>
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

const Link = styled("a")`
  ${alignChildrenCenter};
  ${highlightOnHover};

  cursor: pointer;
  text-decoration: none;

  font-size: 1.5rem;
  font-family: inherit;
  color: ${theme.color.white};
`;

export default Header;
