/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from "react";
import "minireset.css";
import "prismjs/themes/prism-okaidia.css";

import { ThemeProvider } from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);
