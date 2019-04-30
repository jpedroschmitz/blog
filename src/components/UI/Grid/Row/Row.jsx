import React from "react";
import classes from "./Row.module.css";

export default ({ centered, children }) => {
  let attachedClass = [classes.Row];
  if (centered) attachedClass = [classes.Row, classes.Center];

  return (
    <div className={attachedClass.join(" ")}>{children}</div>
  );
};
