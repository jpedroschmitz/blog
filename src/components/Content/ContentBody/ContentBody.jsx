import React from "react";
import classes from "./ContentBody.module.css";

const ContentBody = ({ html }) => (
  <div
    className={classes.ContentBody}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default ContentBody;
