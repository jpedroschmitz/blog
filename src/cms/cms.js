/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import CMS from "netlify-cms-app";
import moment from "moment";
import { StyleSheetManager } from "styled-components";
import Content from "../components/Content";
import ContentInfo from "../components/ContentInfo";
import InternalBar from "../components/InternalBar";

class CSSInjector extends Component {
  state = {
    iframeRef: "",
  };

  componentDidMount() {
    const iframe = document.querySelector("#nc-root iframe");
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem });
  }

  render() {
    const { iframeRef } = this.state;
    const { children } = this.props;
    return (
      <div>{iframeRef && <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>}</div>
    );
  }
}

CMS.registerPreviewTemplate("blog-pt", ({ widgetFor }) => (
  <CSSInjector>
    <ContentInfo
      timeToRead="1"
      title={widgetFor("body")}
      date={moment(widgetFor("body"), "YYYY-MM-DDTh:m:sZ").fromNow()}
      category={widgetFor("category")}
      color="#000"
      image={widgetFor("image")}
      tags={widgetFor("tags")}
    />
    <Content html={widgetFor("body")} />
  </CSSInjector>
));

CMS.registerPreviewTemplate("pages-pt", ({ entry, widgetFor }) => (
  <CSSInjector>
    <InternalBar title={entry.getIn(["title"])} introduction={widgetFor("introduction")} />
    <Content html={widgetFor("body")} />
  </CSSInjector>
));
