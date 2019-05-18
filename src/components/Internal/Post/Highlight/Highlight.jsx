import React from "react";
import classes from "./Highlight.module.css";

export default () => (
  <section>
    <article className={classes.Hightlight}>
      <div className={classes.HightlightNav}>
        <div className={classes.HightlightBar}>Highlight</div>
        <h2>Why it is so important for you to start coding today, know how</h2>
        <div className={classes.HightlightInfo}>
          <p className={classes.HightlightCategory}>Tech</p>
          <p className={classes.HightlightDate}>12 days ago</p>
        </div>
      </div>
    </article>
  </section>
);
