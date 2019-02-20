import React from "react";
import { Link } from "gatsby";
import classes from "./PostTitle.module.css";

const PostTitle = ({ title, path }) => (
  <Link to={path} className={classes.Title}>
    <h2>{title}</h2>
  </Link>
);

export default PostTitle;
