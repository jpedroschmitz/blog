import React from "react";
import { Link } from "gatsby";
import classes from "./Post.module.css";

export default ({ title, quantity }) => (
  <article className={classes.Post}>
    <Link to="/">
      <h3>{title}</h3>
      <p>
        {`${quantity} posts`}
      </p>
    </Link>
  </article>
);
