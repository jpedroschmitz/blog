import React from "react";
import classes from "./Image.module.css";

const ContentImage = ({ cover, title }) => (
  <div className={classes.ContentImageWrapper}>
    <img
      className={classes.ContentImage}
      src={cover}
      title={title}
      alt={title}
    />
  </div>
);

export default ContentImage;
