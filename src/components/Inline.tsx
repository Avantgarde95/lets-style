import React from "react";

import { styled } from "lets-style";

const Emph = styled("span")`
  font-weight: bold;
`;

const Code = styled("code")`
  font-family: "Inconsolata", monospace;
  font-size: inherit;
`;

const Inline = {
  Emph,
  Code,
};

export default Inline;
