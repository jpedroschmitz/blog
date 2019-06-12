import React from "react";
import Content from "./S.Content";

export default ({ html }) => (
  <Content dangerouslySetInnerHTML={{ __html: html }} />
);
