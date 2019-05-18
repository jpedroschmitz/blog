import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import classes from "./Layout.module.css";

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <main className={classes.Main}>{children}</main>
    <Footer />
  </React.Fragment>
);
