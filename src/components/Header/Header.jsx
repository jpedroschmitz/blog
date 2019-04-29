import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.Header}>
    <h1 className={classes.HeaderTitle}>
      <a href="index.html">João Pedro S.</a>
    </h1>
    <div className={classes.HeaderNavigation}>
      <nav className={classes.HeaderNav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categorias">Categorias</Link>
          </li>
          <li>
            <Link to="/tags" >Tags</Link>
          </li>
          <li>
            <Link to="/sobre-mim">Sobre mim</Link>
          </li>
          <li>
            <div className={[classes.Icon, classes.IconSearch].join(' ')} />
          </li>
          <li>
            <div className={[classes.Icon, classes.IconModeNight].join(' ')} />
          </li>
        </ul>
      </nav>
    </div>
</header>
)

export default Header;
