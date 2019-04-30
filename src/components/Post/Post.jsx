import React from "react";
import classes from "./Post.module.css";

export default () => (
  <article className={classes.Article}>
    <div className={classes.ArticleCategory}>Tech</div>
    <div className={classes.ArticleInfo}>
      <h3>Here will be your great title, check out</h3>
      <p className={classes.ArticleDate}>12 days ago</p>
    </div>
  </article>
);
