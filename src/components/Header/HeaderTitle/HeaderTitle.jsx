import React from "react";
import { Link } from "gatsby";
import classes from "./HeaderTitle.module.css";

const HeaderTitle = ({ title }) => (
  <Link to="/" className={classes.HeaderTitle}>
    <h1>{title}</h1>
    <span>Blog</span>
  </Link>
);

export default HeaderTitle;
