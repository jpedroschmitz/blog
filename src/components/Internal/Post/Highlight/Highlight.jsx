import React from "react";
import { Link } from "gatsby";
import kebabcase from "lodash.kebabcase";
import classes from "./Highlight.module.css";

export default ({ title, category, date, image, timeToRead }) => (
  <section>
    <article className={classes.Hightlight} style={{ backgroundImage: `url(${image})` }}>
      <div className={classes.HightlightNav}>
        <h2>{title}</h2>
        <div className={classes.HightlightInfo}>
          <Link to={`categoria/${kebabcase(category)}`} className={classes.HightlightCategory}>{category}</Link>
          <p>{date}</p>
          <p>{`${timeToRead} min de leitura`}</p>
        </div>
      </div>
    </article>
  </section>
);
