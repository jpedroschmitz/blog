import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import classes from "./Post.module.css";

export default ({ title, quantity, borderColor, slug, link }) => (
  <article className={classes.Post} style={{ borderColor }}>
    <Link to={link ? `${link}/${kebabCase(slug)}` : kebabCase(slug)}>
      <h3>{title}</h3>
      {quantity && <p>{`${quantity} post(s)`}</p>}
    </Link>
  </article>
);
