import React from "react";
import "minireset.css";
import "prismjs/themes/prism-okaidia.css";

import { ThemeProvider } from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
