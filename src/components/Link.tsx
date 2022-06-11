import { styled } from "lets-style";
import React, { ComponentProps } from "react";
import { highlightOnHover } from "styles/Helpers";
import { theme } from "styles/Theme";

type LinkProps = ComponentProps<"a">;

const Link = (props: LinkProps) => (
  <Container {...props} target="_blank" rel="noreferrer noopener" />
);

const Container = styled("a")`
  ${highlightOnHover};

  color: ${theme.color.blue};
`;

export default Link;
