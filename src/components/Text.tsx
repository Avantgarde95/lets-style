import React, { ComponentProps } from "react";

import { styled } from "lets-style";
import { highlightOnHover } from "styles/Helpers";
import { theme } from "styles/Theme";

interface CodeProps {
  children: string;
}

const Code = ({ children }: CodeProps) => (
  <CodeContainer>
    <CodeContent>{children.trim()}</CodeContent>
  </CodeContainer>
);

const CodeContainer = styled("pre")`
  box-sizing: border-box;
  overflow-x: auto;

  padding: 0.8rem;
  border: 1px solid ${theme.color.black};
`;

const CodeContent = styled("code")`
  width: 100%;

  font-family: "Inconsolata", monospace;
  font-size: 1rem;
`;

type LinkProps = ComponentProps<"a">;

const Link = (props: LinkProps) => (
  <LinkContainer {...props} target="_blank" rel="noreferrer noopener" />
);

const LinkContainer = styled("a")`
  ${highlightOnHover};

  color: ${theme.color.blue};
`;

const Emph = styled("span")`
  font-weight: bold;
`;

const Text = {
  Code,
  Link,
  Emph,
};

export default Text;
