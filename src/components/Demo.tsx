import React from "react";

import { css, styled } from "lets-style";

import Code from "components/Code";
import { theme } from "styles/Theme";
import { alignChildrenCenter, onWideScreen } from "styles/Helpers";

const Demo = styled("div")`
  width: 100%;
  margin-top: 1rem;

  ${onWideScreen} {
    display: flex;
    flex-direction: row;

    gap: 1rem;
  }
`;

const box = css`
  box-sizing: border-box;

  flex: 1;
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 0.8rem;

  border: 1px solid ${theme.color.black};
`;

interface CodeBoxProps {
  children: string;
}

const CodeBox = ({ children }: CodeBoxProps) => (
  <CodeContainer>
    <Code>{children.trim()}</Code>
  </CodeContainer>
);

const CodeContainer = styled("pre")`
  ${box}

  overflow-x: auto;

  padding: 0.8rem;
`;

const ShowBox = styled("div")`
  ${box}
  ${alignChildrenCenter}
`;

export default Object.assign(Demo, {
  CodeBox,
  ShowBox,
});
