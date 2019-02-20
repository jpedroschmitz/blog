import React from "react";
import classes from "./ContentImage.module.css";

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
