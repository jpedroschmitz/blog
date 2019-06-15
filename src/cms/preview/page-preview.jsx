import React from "react";
import { StyleSheetManager } from "styled-components";
import Content from "../../components/Content";
import InternalBar from "../../components/InternalBar";

export default ({ entry, widgetFor }) => {
  const iframe = document.querySelector("#nc-root iframe");
  const iframeHeadElem = iframe && iframe.contentDocument.head;
  return (
    <StyleSheetManager target={iframeHeadElem}>
      <InternalBar title={entry.getIn(["title"])} introduction="Preview de Page" />
      <Content html={widgetFor("body")} />
    </StyleSheetManager>
  );
};
