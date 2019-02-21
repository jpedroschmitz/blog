import React from "react";
import classes from "./Body.module.css";

const ContentBody = ({ html }) => (
  <div className={classes.Body} dangerouslySetInnerHTML={{ __html: html }} />
);

export default ContentBody;
