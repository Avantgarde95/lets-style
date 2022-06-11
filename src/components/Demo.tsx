import React, { ReactNode } from "react";

import { css, styled } from "lets-style";

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

interface CodeProps {
  children: string;
}

const Code = ({ children }: CodeProps) => (
  <CodeContainer>
    <CodeContent>{children.trim()}</CodeContent>
  </CodeContainer>
);

const CodeContainer = styled("pre")`
  ${box}

  overflow-x: auto;

  padding: 0.8rem;
`;

const CodeContent = styled("code")`
  width: 100%;

  font-family: "Inconsolata", monospace;
  font-size: 1rem;
`;

const Show = styled("div")`
  ${box}
  ${alignChildrenCenter}
`;

export default Object.assign(Demo, {
  Code,
  Show,
});
