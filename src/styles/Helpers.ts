import { css } from "lets-style";

import { theme } from "styles/Theme";

export const alignChildrenCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const highlightOnHover = css`
  transition: color 0.2s;

  &:hover {
    color: ${theme.color.skyblue};
  }
`;
