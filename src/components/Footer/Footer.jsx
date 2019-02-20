import React, { Component } from "react";
import { Link } from "gatsby";
import classes from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={classes.Footer}>
        <p>Feito com Gatsby e ❤</p>
        <div className={classes.FooterLinks}>
          <Link className={classes.FooterLink} to="/">
            Home
          </Link>
          <Link className={classes.FooterLink} to="/sobre">
            Sobre
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
