import React from "react";
import { Link } from "gatsby";
import classes from "./Pagination.module.css";

export default ({ quantity, page, next, previous }) => (
  <React.Fragment>
    <div className={classes.Pagination}>
      {previous && (
        <Link to={previous}>{"<<"}</Link>
      )}
      <span>{`Página ${page} de ${quantity}`}</span>
      {next && (
        <Link to={next}>{">>"}</Link>
      )}
    </div>
  </React.Fragment>
);
