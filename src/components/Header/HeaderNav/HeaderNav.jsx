import React from 'react';
import { Link } from 'gatsby';
// import HeaderSearch from '../HeaderSearch';
import classes from './HeaderNav.module.css';

const HeaderNav = () => (
  <nav>
    <ul className={classes.NavList}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      {/* <li><HeaderSearch isVisible={false} clicked={() => { }} /></li> */}
    </ul>
  </nav>
);

export default HeaderNav;