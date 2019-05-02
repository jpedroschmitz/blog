import React from "react";
import classes from "./Pagination.module.css";

export default ({ quantity, page }) => (
  <React.Fragment>
    <div className={classes.Pagination}>
      <button type="button">{"<<"}</button>
      <span>{`Página ${page} de ${quantity}`}</span>
      <button type="button">{">>"}</button>
    </div>
  </React.Fragment>
);
