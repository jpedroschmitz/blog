import React from "react";
import classes from "./PageBar.module.css";

export default ({ title, introduction }) => (
  <section className={classes.Bar}>
    <div className={classes.BarAp}>
      <h2 className={classes.BarApTitle}>{title}</h2>
      <p>{introduction}</p>
    </div>
  </section>
);
