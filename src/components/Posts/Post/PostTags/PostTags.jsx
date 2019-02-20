import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import classes from "./PostTags.module.css";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className={classes.Tags}>
        {tags &&
          tags.map(tag => (
            <Link
              className={classes.Tag}
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
