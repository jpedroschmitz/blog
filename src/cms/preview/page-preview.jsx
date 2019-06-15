import React from "react";
import { StyleSheetManager } from "styled-components";
import Content from "../../components/Content";
import InternalBar from "../../components/InternalBar";

export default ({ entry, widgetFor }) => (
  <StyleSheetManager target={document.querySelector("#nc-root iframe").contentDocument.head}>
    <InternalBar title={entry.getIn(["title"])} introduction={widgetFor("introduction")} />
    <Content html={widgetFor("body")} />
  </StyleSheetManager>
);
