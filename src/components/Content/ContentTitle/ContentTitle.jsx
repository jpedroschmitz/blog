import React from "react";
import classes from "./ContentTitle.module.css";

const ContentTitle = ({ title }) => (
  <h2 className={classes.ContentTitle}>{title}</h2>
);

export default ContentTitle;
