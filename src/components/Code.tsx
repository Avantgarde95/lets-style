import React, { Fragment, ReactNode } from "react";

import { styled } from "lets-style";

import { theme } from "styles/Theme";

type WordType = "Special" | "Wrap" | "Keyword" | "API";

const words: Array<[string, WordType]> = [
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

interface CodeProps {
  children: string;
}

const Code = ({ children }: CodeProps) => {
  const code = children.trim();
  let codeIndex = 0;
  const stack: Array<ReactNode> = [""];

  while (codeIndex < code.length) {
    let match = false;

    for (const [word, type] of words) {
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
    <Container>
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

const colorMap: Record<WordType, string> = {
  Special: theme.color.green,
  Wrap: theme.color.blue,
  Keyword: theme.color.orange,
  API: theme.color.green,
};

interface HighlightProps {
  type: WordType;
}

const Highlight = styled("span")<HighlightProps>`
  color: ${({ type }) => colorMap[type]};
`;

export default Code;
