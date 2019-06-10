import React from "react";
import Content from "../../components/Content";
import PageBar from "../../components/Internal/PageBar";

export default ({ entry, widgetFor }) => (
  <>
    <PageBar title={entry.getIn(["title"])} introduction="Preview de Page" />
    <Content html={widgetFor("body")} />
  </>
);
