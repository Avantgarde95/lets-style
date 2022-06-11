import React from "react";

import { styled } from "lets-style";

const List = styled("ul")`
  box-sizing: border-box;
  padding-left: 1.5rem;
`;

const Item = styled("li")``;

export default Object.assign(List, {
  Item,
});
