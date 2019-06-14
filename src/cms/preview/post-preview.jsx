import React from "react";
import Content from "../../components/Content";

export default ({ widgetFor }) => (
  <>
    <Content html={widgetFor("body")} />
  </>
);
