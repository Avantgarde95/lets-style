import { ComponentProps, ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";

import { keyframes, styled } from "lets-style";

import Code from "components/Code";
import { highlightOnHover } from "styles/Helpers";
import { theme } from "styles/Theme";

interface MarkdownProps {
  children: ReactNode;
}

const Markdown = ({ children }: MarkdownProps) => (
  <MDXProvider
    components={{
      h2: Title,
      a: Link,
      ul: List,
      strong: Strong,
      pre: CodeBox,
      code: Code,
    }}
  >
    {children}
  </MDXProvider>
);

const titleAnimation = keyframes`
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Title = styled("h2")`
  margin: 0 0 0.5rem 0;
  padding: 0;

  transform: translateX(-1rem);
  opacity: 0;
  animation: 1.5s ${titleAnimation} forwards;
`;

const Strong = styled("span")`
  font-weight: bold;
`;

const Link = (props: ComponentProps<"a">) => (
  <LinkContainer {...props} target="_blank" rel="noreferrer noopener" />
);

const LinkContainer = styled("a")`
  ${highlightOnHover};

  color: ${theme.color.blue};
`;

const List = styled("ul")`
  box-sizing: border-box;
  padding-left: 1.5rem;
`;

const CodeBox = styled("pre")`
  box-sizing: border-box;
  overflow-x: auto;

  padding: 0.8rem;
  border: 1px solid ${theme.color.black};
`;

export default Markdown;
