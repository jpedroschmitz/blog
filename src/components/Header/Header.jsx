import React from "react";
import config from "../../../data/SiteConfig";
import classes from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";
import HeaderNav from "./HeaderNav/index";

const Header = () => (
  <header className={classes.Header}>
    <HeaderTitle title={config.headerTitle} />
    <HeaderNav />
  </header>
);

export default Header;
