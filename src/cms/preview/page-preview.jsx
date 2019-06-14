import React from "react";
import Content from "../../components/Content";
import InternalBar from "../../components/InternalBar";

export default ({ entry, widgetFor }) => (
  <>
    <InternalBar title={entry.getIn(["title"])} introduction="Preview de Page" />
    <Content html={widgetFor("body")} />
  </>
);
