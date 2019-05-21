import React from "react";
import { Link } from "gatsby";
import classes from "./Post.module.css";

export default ({ category, title, date, slug, image }) => (
  <article className={classes.Article} style={{ backgroundImage: `url(${image})` }}>
    <Link to={slug} className={classes.Link}>
      <div className={classes.ArticleCategory}>{category}</div>
      <div className={classes.ArticleInfo}>
        <h3>{title}</h3>
        <p className={classes.ArticleDate}>{date}</p>
      </div>
    </Link>
  </article>
);
