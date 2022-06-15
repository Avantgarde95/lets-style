import React, { ComponentProps, Fragment, ReactNode } from "react";

import { styled } from "lets-style";

import { theme } from "styles/Theme";

type HighlightType = "Special" | "Wrap" | "Keyword" | "API";

const highlights: Array<[string, HighlightType]> = [
  ["<", "Wrap"],
  ["/>", "Wrap"],
  ["{", "Wrap"],
  ["}", "Wrap"],
  ["(", "Wrap"],
  [")", "Wrap"],
  [":", "Special"],
  [";", "Special"],
  ["`", "Special"],
  ["=", "Special"],
  ['"', "Special"],
  ["$", "Special"],
  ["const", "Keyword"],
  ["let", "Keyword"],
  ["type", "Keyword"],
  ["interface", "Keyword"],
  ["css", "API"],
  ["keyframes", "API"],
  ["styled", "API"],
  ["Global", "API"],
];

const Code = ({ children, ...others }: ComponentProps<"code">) => {
  const code = String(children).trim();
  let codeIndex = 0;
  const stack: Array<ReactNode> = [""];

  while (codeIndex < code.length) {
    let match = false;

    for (const [word, type] of highlights) {
      if (code.startsWith(word, codeIndex)) {
        stack.push(<Highlight type={type}>{word}</Highlight>);
        match = true;
        codeIndex += word.length;
        break;
      }
    }

    if (match) {
      continue;
    }

    if (typeof stack[stack.length - 1] === "string") {
      stack[stack.length - 1] += code[codeIndex];
    } else {
      stack.push(code[codeIndex]);
    }

    codeIndex++;
  }

  return (
    <Container {...others}>
      {stack.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </Container>
  );
};

const Container = styled("code")`
  width: 100%;

  font-family: "Inconsolata", monospace;
  font-size: 1rem;
`;

const colorMap: Record<HighlightType, string> = {
  Special: theme.color.green,
  Wrap: theme.color.blue,
  Keyword: theme.color.orange,
  API: theme.color.green,
};

interface HighlightProps {
  type: HighlightType;
}

const Highlight = styled("span")<HighlightProps>`
  color: ${({ type }) => colorMap[type]};
`;

export default Code;
