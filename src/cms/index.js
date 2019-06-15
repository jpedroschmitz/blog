/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { StyleSheetManager } from "styled-components";
import CMS from "netlify-cms";
import PostPreview from "./preview/post-preview";
import PagePreview from "./preview/page-preview";

class CSSInjector extends React.Component {
  state = {
    iframeRef: "",
  };

  componentDidMount() {
    const iframe = document.querySelector(".nc-previewPane-frame");
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

CMS.registerPreviewTemplate("blog-pt", props => (
  <CSSInjector>
    <PostPreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate("pages-pt", props => (
  <CSSInjector>
    <PagePreview {...props} />
  </CSSInjector>
));
