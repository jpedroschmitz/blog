import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import urljoin from "url-join";
import classes from "./Disqus.module.css";
import config from "../../../data/SiteConfig";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const { ...toasts } = this.state;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    let { toasts } = this.state;
    toasts = toasts.slice();
    toasts.push({ text: "Novo comentário disponível!" });
    this.setState({ toasts });
  }

  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(
      config.siteUrl,
      config.pathPrefix,
      postNode.fields.slug
    );

    return (
      <div className={classes.Disqus}>
        <ReactDisqusComments
          shortname={config.disqusShortname}
          identifier={post.title}
          title={post.title}
          url={url}
          category_id={post.category_id}
          onNewComment={this.notifyAboutComment}
        />
      </div>
    );
  }
}

export default Disqus;
