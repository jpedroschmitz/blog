import React from "react";
import classes from "./Col.module.css";

export default ({ size, children }) => {
  return (
    <div className={classes[`Col${size}`]}>{children}</div>
  );
};
