import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import classes from "./Post.module.css";

export default ({ title, quantity }) => (
  <article className={classes.Post}>
    <Link to={`/categoria/${kebabCase(title)}`}>
      <h3>{title}</h3>
      <p>
        {`${quantity} post(s)`}
      </p>
    </Link>
  </article>
);
