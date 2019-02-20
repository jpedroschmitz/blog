import React, { Component } from "react";
import classes from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={classes.Footer}>
        <p>Feito com Gatsby e ❤</p>
      </footer>
    );
  }
}

export default Footer;
