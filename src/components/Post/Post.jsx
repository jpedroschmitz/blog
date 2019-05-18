import React from "react";
import classes from "./Post.module.css";

export default ({ category, title, date }) => (
  <article className={classes.Article}>
    <div className={classes.ArticleCategory}>{category}</div>
    <div className={classes.ArticleInfo}>
      <h3>{title}</h3>
      <p className={classes.ArticleDate}>{date}</p>
    </div>
  </article>
);
