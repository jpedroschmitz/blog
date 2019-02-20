import React from "react";
import { Link } from "gatsby";
import classes from "./PostImage.module.css";

const PostImage = ({ cover, title, path }) => (
  <div className={classes.PostImageOuterWrapper}>
    <div className={classes.PostImageWrapper}>
      <Link to={path}>
        <img src={cover} alt={title} title={`Ler: ${title}`} />
      </Link>
    </div>
  </div>
);

export default PostImage;
