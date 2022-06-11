import React, { ComponentProps } from "react";

import { styled } from "lets-style";

import Code from "components/Code";
import { highlightOnHover } from "styles/Helpers";
import { theme } from "styles/Theme";

interface CodeBoxProps {
  children: string;
}

const CodeBox = ({ children }: CodeBoxProps) => (
  <CodeContainer>
    <Code>{children}</Code>
  </CodeContainer>
);

const CodeContainer = styled("pre")`
  box-sizing: border-box;
  overflow-x: auto;

  padding: 0.8rem;
  border: 1px solid ${theme.color.black};
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
  CodeBox,
  Link,
  Emph,
};

export default Text;
