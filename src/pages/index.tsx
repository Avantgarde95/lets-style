import React from "react";

import { parseStyle } from "lets-style";

console.log(
  parseStyle(
    "my-app",
    `
display: flex;

&:hover {
  color: red;
}

a {
  color: blue;
}
`
  )
);

const HomePage = () => <div>Hello!</div>;

export default HomePage;
